import PocketBase from 'pocketbase';
import { sequence } from '@sveltejs/kit/hooks';
import { POCKETBASE_URL } from '$env/static/private';

/** @type {import('@sveltejs/kit').Handle} */
export async function pocketbase({ event, resolve }) {
	event.locals.pb = new PocketBase(POCKETBASE_URL);
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
	try {
		event.locals.pb.authStore.isValid && (await event.locals.pb.collection('users').authRefresh());
		event.locals.user = structuredClone(event.locals.pb.authStore.model);
	} catch (_) {
		event.locals.pb.authStore.clear();
		event.locals.user = null;
	}
	const response = await resolve(event);
	response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie());
	return response;
}

const darkMode = async ({ event, resolve }) => {
	const darkModeCookie = event.cookies.get('darkmode') === 'true';
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%darkmode%', darkModeCookie ? 'dark' : '')
	});

	return response;
};

export const handle = sequence(pocketbase, darkMode);

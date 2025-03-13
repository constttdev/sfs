import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	if (!locals.user) redirect(307, '/login');
};

export const actions = {
	logout: async ({ locals }) => {
		if (!locals.user) redirect(307, '/login');

		await locals.pb.authStore.clear();
		redirect(307, '/login');
	}
};

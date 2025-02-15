import { redirect } from '@sveltejs/kit';

export const actions = {
	logout: async ({ locals }) => {
		console.log('logout');
		await locals.pb.authStore.clear();
		redirect(307, '/login');
	}
};

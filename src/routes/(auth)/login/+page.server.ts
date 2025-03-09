import { fail, redirect } from '@sveltejs/kit';
import { ClientResponseError } from 'pocketbase';

export const load = async ({ locals }) => {
	if (locals.user) {
		redirect(307, '/home');
	}

	return { user: locals.user };
};

export const actions = {
	login: async ({ request, locals }) => {
		const data = await request.formData();
		const password = data.get('password');
		const email = data.get('email');
		if (!email || !password) {
			return fail(400, { error: 'Email or password is missing' });
		}

		try {
			await locals.pb.collection('users').authWithPassword(email.toString(), password.toString());
		} catch (error) {
			if (error instanceof ClientResponseError) {
				console.log(error);
				return fail(400, {
					error: 'Failed to login! Please check that you use the right credentials'
				});
			}
		}
	}
};

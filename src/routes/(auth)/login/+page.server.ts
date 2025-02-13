import { fail, redirect } from '@sveltejs/kit';
import { ClientResponseError } from 'pocketbase';

export const load = async ({ locals }) => {
	if (locals.user) {
		redirect(307, '/home');
	}

	return { user: locals.user };
};

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ request, locals }) => {
		const data = await request.formData();
		const password = data.get('password');
		const email = data.get('email');
		if (!email || !password) {
			return fail(400, { error: 'Email or password is missing' });
		}

		const reqdata = {
			email: email,
			password: password
		};

		try {
			await locals.pb
				.collection('users')
				.authWithPassword(reqdata.email.toString(), reqdata.password.toString());
		} catch (error) {
			if (error instanceof ClientResponseError) {
				console.log(error);
				return fail(400, { error: 'Failed to login' });
			}
		}
	}
};

import type { Actions } from './$types';

export const actions = {
	uploadFile: async ({ request, locals }) => {
		const data = await request.formData();
		const file = data.get('file');
		// const uploadFile = new File(file)

		const reqData = {
			file: file
		};

		try {
			await locals.pb.collection('files').create(reqData);
			console.log(`Uploaded file`);
		} catch (error) {
			console.log(error);
		}
	}
} satisfies Actions;

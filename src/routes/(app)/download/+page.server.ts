import { redirect } from '@sveltejs/kit';

export const load = ({ url }) => {
	const fileId = url.search.replaceAll('?file=', '');

	return { fileId: fileId };
};

export const actions = {
	downloadFile: async ({ locals, request }) => {
		const { fileId } = Object.fromEntries(await request.formData());

		const fileToken = await locals.pb.files.getToken();
		const record = await locals.pb.collection('files').getOne(String(fileId));
		const url = locals.pb.files.getURL(record, record.file, { token: fileToken });

		redirect(307, url);
	}
};

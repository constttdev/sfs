import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	if (!locals.user) redirect(307, '/login');

	const files = await locals.pb.collection('files').getFullList();

	const filesR = [];

	for (const file of files) {
		const fileToken = await locals.pb.files.getToken();

		const url = locals.pb.files.getURL(file, file.file, { token: fileToken });

		const request = await fetch(url, { method: 'GET' });
		const fileSize: number | undefined = Number(request.headers.get('Content-Length'));
		const fileId: string = file.id;
		const fileName: string | undefined = String(request.headers.get('Content-Disposition'))
			.split(';')
			.pop()
			?.replaceAll('filename=', '')
			.trimStart();
		filesR.push({
			fileName: fileName,
			fileSize: fileSize,
			id: fileId
		});
		// request.headers.forEach((value, key) => {
		// 	console.log(`${key}: ${value}`);
		// });
	}

	return { files: filesR };
};

export const actions = {
	deleteFile: async ({ request, locals }) => {
		if (!locals.user) redirect(307, '/login');

		const data = await request.formData();
		const recordId = data.get('recordId');

		try {
			await locals.pb.collection('files').delete(String(recordId));
		} catch (error) {
			console.log(error);
		}
	},
	shareFile: async ({ request, locals }) => {
		if (!locals.user) redirect(307, '/login');

		const data = await request.formData();
		const recordId = data.get('recordId');

		const reqData = {
			public: true
		};

		try {
			await locals.pb.collection('files').update(String(recordId), reqData);
		} catch (error) {
			console.log(error);
		}
	}
};

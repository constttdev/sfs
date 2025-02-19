export const load = async ({ locals }) => {
	const files = await locals.pb.collection('files').getFullList();

	const filesR = [];

	for (const file of files) {
		const url = locals.pb.files.getURL(file, file.file);
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
		const data = await request.formData();
		const recordId = data.get('recordId');

		try {
			await locals.pb.collection('files').delete(String(recordId));
		} catch (error) {
			console.log(error);
		}
	}
};

export const load = async ({ locals }) => {
	const files = await locals.pb.collection('files').getFullList();

	const filesR = [];

	for (const file of files) {
		const url = locals.pb.files.getURL(file, file.file);
		const request = await fetch(url, { method: 'GET' });
		const fileSize: number | undefined = Number(request.headers.get('Content-Length'));
		const fileName: string | undefined = String(request.headers.get('Content-Disposition'))
			.split(';')
			.pop()
			?.replaceAll('filename=', '')
			.trimStart();
		filesR.push({
			fileName: fileName,
			fileSize: fileSize
		});
		// request.headers.forEach((value, key) => {
		// 	console.log(`${key}: ${value}`);
		// });
	}

	return { files: filesR };
};

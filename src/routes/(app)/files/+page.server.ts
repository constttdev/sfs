export const load = async ({ locals }) => {
	const files = await locals.pb.collection('files').getFullList();

	const filesR = [];

	for (const file of files) {
		const url = locals.pb.files.getURL(file, file.file);
		const request = await fetch(url, { method: 'GET' });
		const fileSize = request.headers.get('Content-Length');
		filesR.push({
			fileSize: fileSize
		});
	}

	return { files: filesR };
};

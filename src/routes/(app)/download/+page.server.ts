export const load = async ({ locals, url }) => {
	const cleanFileId = url.search;
	const fileId = url.search.replaceAll('?file=', '');
	const file = await locals.pb.collection('files').getOne(String(fileId));

	const fileName = String(file.file);
	const fileParts = fileName.split('.');
	const extension = fileParts.pop();
	const nameParts = fileParts.join('.').split('_');
	nameParts.pop();
	const fileNameClean = nameParts.join('_') + '.' + extension;

	const fileUrl = locals.pb.files.getURL(file, file.file);

	return { fileUrl: fileUrl, fileName: fileNameClean, fileId: fileId };
};

export const actions = {
	downloadFile: async ({ locals, request }) => {
		const { fileId } = Object.fromEntries(await request.formData());

		const currentDownloadCount = await locals.pb.collection('files').getOne(String(fileId));
		console.log(`fileid ${fileId}`);

		const pbData = {
			download_count: currentDownloadCount.download_count + 1
		};

		await locals.pb.collection('files').update(String(fileId), pbData);
	}
};

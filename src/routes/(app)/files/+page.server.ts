export const load = async ({ locals }) => {
	const files = await locals.pb.collection('files').getFullList();

	return { files: files };
};

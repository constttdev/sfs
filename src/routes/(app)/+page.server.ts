import { POCKETBASE_URL } from '$env/static/private';

export const load = async () => {
	console.log(`PB_URL: ${POCKETBASE_URL}`);
};

import { r as redirect } from "../../../../chunks/index.js";
const load = async ({ locals }) => {
  if (!locals.user) redirect(307, "/login");
};
const actions = {
  uploadFile: async ({ request, locals }) => {
    if (!locals.user) redirect(307, "/login");
    const data = await request.formData();
    const file = data.get("file");
    const reqData = {
      file
    };
    try {
      const record = await locals.pb.collection("files").create(reqData);
      return { id: record.id };
    } catch (error) {
      console.log(error);
    }
    redirect(307, "/upload");
  },
  deleteFile: async ({ request, locals }) => {
    if (!locals.user) redirect(307, "/login");
    const data = await request.formData();
    const recordId = data.get("recordId");
    try {
      await locals.pb.collection("files").delete(String(recordId));
    } catch (error) {
      console.log(error);
    }
    redirect(307, "/upload");
  }
};
export {
  actions,
  load
};

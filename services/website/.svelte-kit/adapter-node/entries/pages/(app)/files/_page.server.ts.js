import { r as redirect } from "../../../../chunks/index.js";
const load = async ({ locals }) => {
  if (!locals.user) redirect(307, "/login");
  const files = await locals.pb.collection("files").getFullList();
  const filesR = [];
  for (const file of files) {
    const fileToken = await locals.pb.files.getToken();
    const url = locals.pb.files.getURL(file, file.file, { token: fileToken });
    const publicState = file.public;
    const request = await fetch(url, { method: "GET" });
    const fileSize = Number(request.headers.get("Content-Length"));
    const fileId = file.id;
    const fileName = String(request.headers.get("Content-Disposition")).split(";").pop()?.replaceAll("filename=", "").trimStart();
    filesR.push({
      fileName,
      fileSize,
      id: fileId,
      publicState
    });
  }
  return { files: filesR };
};
const actions = {
  deleteFile: async ({ request, locals }) => {
    if (!locals.user) redirect(307, "/login");
    const data = await request.formData();
    const recordId = data.get("recordId");
    try {
      await locals.pb.collection("files").delete(String(recordId));
    } catch (error) {
      console.log(error);
    }
  },
  changePublicState: async ({ request, locals }) => {
    if (!locals.user) redirect(307, "/login");
    const data = await request.formData();
    const publicState = data.get("state") === "on";
    const recordId = data.get("recordId");
    console.log(`publicState: ${publicState}`);
    console.log(`recordId: ${recordId}`);
    const reqData = {
      public: publicState
    };
    try {
      await locals.pb.collection("files").update(String(recordId), reqData);
    } catch (error) {
      console.log(error);
    }
  }
};
export {
  actions,
  load
};

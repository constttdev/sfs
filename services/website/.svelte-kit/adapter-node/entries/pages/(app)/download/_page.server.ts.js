import { r as redirect } from "../../../../chunks/index.js";
const load = async ({ url, locals }) => {
  const fileId = url.search.replaceAll("?file=", "");
  const file = await locals.pb.collection("files").getOne(fileId);
  const fileURL = locals.pb.files.getURL(file, file.file);
  const request = await fetch(fileURL, { method: "GET" });
  const fileSize = Number(request.headers.get("Content-Length"));
  const fileName = String(request.headers.get("Content-Disposition"));
  return { fileId, fileName, fileSize };
};
const actions = {
  downloadFile: async ({ locals, request }) => {
    const { fileId } = Object.fromEntries(await request.formData());
    const fileToken = await locals.pb.files.getToken();
    const record = await locals.pb.collection("files").getOne(String(fileId));
    const url = locals.pb.files.getURL(record, record.file, { token: fileToken }) + "&download=1";
    redirect(307, url);
  }
};
export {
  actions,
  load
};

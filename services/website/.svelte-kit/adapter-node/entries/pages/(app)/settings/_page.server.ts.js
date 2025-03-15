import { r as redirect } from "../../../../chunks/index.js";
const load = async ({ locals }) => {
  if (!locals.user) redirect(307, "/login");
};
const actions = {
  logout: async ({ locals }) => {
    if (!locals.user) redirect(307, "/login");
    console.log("logout");
    await locals.pb.authStore.clear();
    redirect(307, "/login");
  }
};
export {
  actions,
  load
};

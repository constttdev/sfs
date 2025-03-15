import "../../../chunks/index.js";
const load = async ({ locals }) => {
  return { user: locals.user };
};
export {
  load
};

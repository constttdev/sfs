import PocketBase from "pocketbase";
function sequence(...handlers) {
  const length = handlers.length;
  if (!length) return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i, event2, parent_options) {
      const handle2 = handlers[i];
      return handle2({
        event: event2,
        resolve: (event3, options) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options?.transformPageChunk) {
              html = await options.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          const filterSerializedResponseHeaders = parent_options?.filterSerializedResponseHeaders ?? options?.filterSerializedResponseHeaders;
          const preload = parent_options?.preload ?? options?.preload;
          return i < length - 1 ? apply_handle(i + 1, event3, {
            transformPageChunk,
            filterSerializedResponseHeaders,
            preload
          }) : resolve(event3, { transformPageChunk, filterSerializedResponseHeaders, preload });
        }
      });
    }
  };
}
const POCKETBASE_URL = "https://sfs.db.constt.de/";
async function pocketbase({ event, resolve }) {
  event.locals.pb = new PocketBase(POCKETBASE_URL);
  event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");
  try {
    event.locals.pb.authStore.isValid && await event.locals.pb.collection("users").authRefresh();
    event.locals.user = structuredClone(event.locals.pb.authStore.model);
  } catch (_) {
    event.locals.pb.authStore.clear();
    event.locals.user = null;
  }
  const response = await resolve(event);
  response.headers.append("set-cookie", event.locals.pb.authStore.exportToCookie());
  return response;
}
const darkMode = async ({ event, resolve }) => {
  const darkModeCookie = event.cookies.get("darkmode") === "true";
  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html.replace("%darkmode%", darkModeCookie ? "dark" : "")
  });
  return response;
};
const handle = sequence(pocketbase, darkMode);
export {
  handle,
  pocketbase
};

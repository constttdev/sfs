import * as server from '../entries/pages/(app)/settings/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/settings/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/settings/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.CV_fpgCI.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CWKjqeKv.js","_app/immutable/chunks/DWhg-PrO.js","_app/immutable/chunks/WZSckVFe.js","_app/immutable/chunks/BpkGGOnh.js","_app/immutable/chunks/4mEvRQgZ.js"];
export const stylesheets = [];
export const fonts = [];

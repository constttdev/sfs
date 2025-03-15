import * as server from '../entries/pages/(app)/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.BdYAgREW.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/DWhg-PrO.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CWKjqeKv.js","_app/immutable/chunks/DBRMGAIA.js","_app/immutable/chunks/BU1VCW-Z.js","_app/immutable/chunks/iABRnMpL.js","_app/immutable/chunks/vDQM_9cx.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DE6EUZku.js","_app/immutable/chunks/Dmofkh0p.js","_app/immutable/chunks/C-31Mdw0.js","_app/immutable/chunks/D_pDfdk4.js","_app/immutable/chunks/CzHHHDu5.js","_app/immutable/chunks/UF3ieIG2.js","_app/immutable/chunks/BpkGGOnh.js","_app/immutable/chunks/4mEvRQgZ.js","_app/immutable/chunks/C7gMNIiR.js"];
export const stylesheets = ["_app/immutable/assets/app.CCtuVumy.css"];
export const fonts = ["_app/immutable/assets/inter-cyrillic-ext-wght-normal.B2xhLi22.woff2","_app/immutable/assets/inter-cyrillic-wght-normal.CMZtQduZ.woff2","_app/immutable/assets/inter-greek-ext-wght-normal.CGAr0uHJ.woff2","_app/immutable/assets/inter-greek-wght-normal.CaVNZxsx.woff2","_app/immutable/assets/inter-vietnamese-wght-normal.CBcvBZtf.woff2","_app/immutable/assets/inter-latin-ext-wght-normal.CFHvXkgd.woff2","_app/immutable/assets/inter-latin-wght-normal.C2S99t-D.woff2"];

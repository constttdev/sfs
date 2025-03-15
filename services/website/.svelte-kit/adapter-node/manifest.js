export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","spinner.svg","upload-dark.png","upload-light.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Ct2Yre8e.js","app":"_app/immutable/entry/app.JJrsMzJT.js","imports":["_app/immutable/entry/start.Ct2Yre8e.js","_app/immutable/chunks/BpkGGOnh.js","_app/immutable/chunks/DWhg-PrO.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/4mEvRQgZ.js","_app/immutable/entry/app.JJrsMzJT.js","_app/immutable/chunks/DWhg-PrO.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/iABRnMpL.js","_app/immutable/chunks/CWKjqeKv.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/DBRMGAIA.js","_app/immutable/chunks/D_pDfdk4.js","_app/immutable/chunks/C-31Mdw0.js","_app/immutable/chunks/Ck9zoxla.js","_app/immutable/chunks/4mEvRQgZ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js'))
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(app)/download",
				pattern: /^\/download\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(app)/files",
				pattern: /^\/files\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(app)/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(auth)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(app)/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(app)/upload",
				pattern: /^\/upload\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);

export const base = "";
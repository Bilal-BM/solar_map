export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","github-mark.svg","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.03eQCVG8.js","app":"_app/immutable/entry/app.dmlddA8z.js","imports":["_app/immutable/entry/start.03eQCVG8.js","_app/immutable/chunks/entry.RXsXUZh8.js","_app/immutable/chunks/scheduler.VdxEgEH5.js","_app/immutable/entry/app.dmlddA8z.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.VdxEgEH5.js","_app/immutable/chunks/index.u4hZs7AD.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set(["/"]);

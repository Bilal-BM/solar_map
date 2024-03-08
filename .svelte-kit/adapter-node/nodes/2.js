import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.9XPUKwvV.js","_app/immutable/chunks/2.9G8auvcE.js","_app/immutable/chunks/scheduler.VdxEgEH5.js","_app/immutable/chunks/index.u4hZs7AD.js","_app/immutable/chunks/preload-helper.0HuHagjb.js"];
export const stylesheets = ["_app/immutable/assets/2.bo1agJ9F.css"];
export const fonts = [];

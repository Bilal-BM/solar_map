import { c as create_ssr_component, d as add_attribute } from "../../chunks/ssr.js";
import "@googlemaps/js-api-loader";
import "geotiff-geokeys-to-proj4";
import "proj4";
import "google-charts";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mapElement;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `   <div class="flex flex-row h-full"> <div class="w-full"${add_attribute("this", mapElement, 0)}></div>  <aside class="flex-none md:w-96 w-80 p-2 pt-3 overflow-auto"><div class="flex flex-col space-y-2 h-full">${``} ${``}</div></aside></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};

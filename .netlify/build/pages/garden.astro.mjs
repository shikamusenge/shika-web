import { c as createComponent, r as renderTemplate, b as renderHead, d as renderComponent } from '../chunks/astro/server_Cy2K1EJg.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$NavBar, a as $$Footer } from '../chunks/Footer_DHe5xt07.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Learning Resources</title><link rel="stylesheet" href="./global.css">${renderHead()}</head> <body> ${renderComponent($$result, "NavBar", $$NavBar, {})} <header class="header"> <h1>📘 Learning Resources</h1> <p>Access all learning materials in one place.</p> <div class="btn"> <a href="https://drive.google.com/file/d/1X_cqdy3siUDb_XOopho8WEBnc0O5r6NN/view?usp=drive_link" target="_parent" style="padding: 2;"> Download Marking guide Node </a> </div> </header> <main class="content"> <section class="resources"> <h2>📂 Shared Google Drive</h2> <p>Explore the folder below to access the resources:</p> <iframe src="https://drive.google.com/embeddedfolderview?id=1Grrk_mzYzVKpBrl5mxJ6Sijwx0m9er7a" class="google-drive" width="100%" height="600" frameborder="0"></iframe> </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/ud/Desktop/dev/mypro/shika-web/src/pages/garden/index.astro", void 0);

const $$file = "C:/Users/ud/Desktop/dev/mypro/shika-web/src/pages/garden/index.astro";
const $$url = "/garden";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

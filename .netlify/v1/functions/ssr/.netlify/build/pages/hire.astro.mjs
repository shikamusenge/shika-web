import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, d as renderComponent, e as createAstro } from '../chunks/astro/server_Cy2K1EJg.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$NavBar, a as $$Footer } from '../chunks/Footer_DHe5xt07.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Hire = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hire;
  return renderTemplate`<html lang="en" data-astro-cid-zkmehxi3> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/profile2.png"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Hire Me</title>${renderHead()}</head> <body data-astro-cid-zkmehxi3> ${renderComponent($$result, "NavBar", $$NavBar, { "data-astro-cid-zkmehxi3": true })} <main data-astro-cid-zkmehxi3> <section class="hire-me" data-astro-cid-zkmehxi3> <h1 data-astro-cid-zkmehxi3>Hire Me</h1> <p data-astro-cid-zkmehxi3>If you're interested in working with me or have a project that you think I could help with, please fill out the form below. I'll get back to you as soon as possible!</p> <div class="form-container" data-astro-cid-zkmehxi3> <!-- Google Form Embed Code --> <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc5l2PK4MF9bybALzjnAgn9L9eChxZzS9GV-QflXfbvGKIKVw/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" data-astro-cid-zkmehxi3>Loading…</iframe> </div> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-zkmehxi3": true })} </body></html>`;
}, "C:/Users/ud/Desktop/dev/mypro/shika-web/src/pages/hire.astro", void 0);

const $$file = "C:/Users/ud/Desktop/dev/mypro/shika-web/src/pages/hire.astro";
const $$url = "/hire";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Hire,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

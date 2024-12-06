import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, d as renderComponent, e as createAstro } from '../chunks/astro/server_Cy2K1EJg.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$NavBar, a as $$Footer } from '../chunks/Footer_DHe5xt07.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  return renderTemplate`<html lang="en" data-astro-cid-ijnerlr2> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/profile2.png"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Shikamusenge Blog</title>${renderHead()}</head> <body data-astro-cid-ijnerlr2> ${renderComponent($$result, "NavBar", $$NavBar, { "data-astro-cid-ijnerlr2": true })} <main data-astro-cid-ijnerlr2> <section class="blog-preview" data-astro-cid-ijnerlr2> <h1 data-astro-cid-ijnerlr2>Preparation Matters in Development</h1> <img${addAttribute("https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/RLw-UC03Gwc/upload/b18e747f9b406f50960c31c77facd140.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp", "src")} alt="Blog Post Image" data-astro-cid-ijnerlr2> <p data-astro-cid-ijnerlr2>Plan Thoroughly, Code Efficiently: The mantra holds true in the fast-paced world of software development and helps define better project management and delivery. This way of looking into things is concentrated that they firmly believe good software starts with a well thought out plan, over just writing code. Let me explain how important planning is and also, Planning can improve the efficiency of development.</p> <a href="https://shikamusenge.hashnode.dev/plan-thoroughly-code-efficiently-why-thoughtful-preparation-matters-in-development" target="_blank" rel="noopener noreferrer" class="btn" data-astro-cid-ijnerlr2>
Read the Full Blog Post
</a> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-ijnerlr2": true })} </body></html>`;
}, "C:/Users/ud/Desktop/dev/mypro/shika-web/src/pages/blog.astro", void 0);

const $$file = "C:/Users/ud/Desktop/dev/mypro/shika-web/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Blog,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

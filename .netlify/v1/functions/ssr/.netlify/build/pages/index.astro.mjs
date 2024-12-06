import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, f as renderSlot, a as addAttribute, e as createAstro, b as renderHead } from '../chunks/astro/server_Cy2K1EJg.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Footer, $ as $$NavBar } from '../chunks/Footer_DHe5xt07.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DZi0_yYW.mjs';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const profile2 = new Proxy({"src":"/_astro/profile2.B1T8L3Bg.png","width":432,"height":577,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ud/Desktop/dev/mypro/shika-web/public/profile2.png";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="home" data-astro-cid-bbe6dxrz> <div class="container" data-astro-cid-bbe6dxrz> <div class="picture" data-astro-cid-bbe6dxrz> <div class="image-container" data-astro-cid-bbe6dxrz> <picture data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Image", $$Image, { "src": profile2, "alt": "Philemon", "data-astro-cid-bbe6dxrz": true })}</picture> </div> </div> <div class="text-container" data-astro-cid-bbe6dxrz> <div class="div" data-astro-cid-bbe6dxrz></div> <h3 data-astro-cid-bbe6dxrz>Hello, I'm SHIKAMUSENGE Philemon</h3> <h1 data-astro-cid-bbe6dxrz>Full stack Developer</h1> <p data-astro-cid-bbe6dxrz>
I'm a passionate and dedicated full-stack developer with a knack for
      leveraging the latest technologies to bring creative solutions to life
      through the power of coding. With a strong foundation of knowledge and
      skills, I thrive on tackling complex challenges and turning them into
      elegant, efficient solutions. From front-end design to back-end
      development, I'm committed to delivering high-quality results that exceed
      expectations.
</p> <div data-astro-cid-bbe6dxrz> <a href="#portifolio" data-astro-cid-bbe6dxrz><button class="btn" data-astro-cid-bbe6dxrz> Browse Project</button></a> <button class="btn" style="background-color: rgb(225, 227, 228);" data-astro-cid-bbe6dxrz><a href="https://drive.google.com/file/d/1LDMlIOsJW2xkQOZEQLVN5DVzeEku89O3/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color:black" data-astro-cid-bbe6dxrz>Douwnload Cv</a> </button> </div></div> </div> </section>`;
}, "C:/Users/ud/Desktop/dev/mypro/shika-web/src/components/Hero.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" data-astro-cid-v2cbyr3p> <div class="container" data-astro-cid-v2cbyr3p> <h1 class="fade-in" data-astro-cid-v2cbyr3p>About Me</h1> <h3 class="fade-in delay-1" data-astro-cid-v2cbyr3p>Who am I?</h3> <p class="fade-in delay-2" data-astro-cid-v2cbyr3p>
I am a problem solver, always eager to take on new challenges and create
      innovative web applications. My journey in the world of programming began
      with deep curiosity and has evolved into a fulfilling career in web
      development. Whether it's crafting sleek and responsive user interfaces or
      architecting robust server-side solutions, I thrive on the thrill of
      building meaningful projects from the ground up.
</p> <h3 class="fade-in delay-3" data-astro-cid-v2cbyr3p>Skills</h3> <div class="skills fade-in delay-4" data-astro-cid-v2cbyr3p> <ul data-astro-cid-v2cbyr3p> <h4 data-astro-cid-v2cbyr3p>Programming Languages</h4> <li data-astro-cid-v2cbyr3p>TypeScript</li> <li data-astro-cid-v2cbyr3p>JavaScript</li> <li data-astro-cid-v2cbyr3p>Node.js</li> <li data-astro-cid-v2cbyr3p>Java</li> <li data-astro-cid-v2cbyr3p>PHP</li> <li data-astro-cid-v2cbyr3p>HTML</li> <li data-astro-cid-v2cbyr3p>C++</li> <li data-astro-cid-v2cbyr3p>CSS</li> <li data-astro-cid-v2cbyr3p>C</li> <li data-astro-cid-v2cbyr3p>Python</li> </ul> <ul data-astro-cid-v2cbyr3p> <h4 data-astro-cid-v2cbyr3p>Databases</h4> <li data-astro-cid-v2cbyr3p>MySQL</li> <li data-astro-cid-v2cbyr3p>Oracle</li> <li data-astro-cid-v2cbyr3p>PostgreSQL</li> <li data-astro-cid-v2cbyr3p>MongoDB</li> <li data-astro-cid-v2cbyr3p>Prisma</li> <li data-astro-cid-v2cbyr3p>Mongoose</li> </ul> <ul data-astro-cid-v2cbyr3p> <h4 data-astro-cid-v2cbyr3p>Tools & Technologies</h4> <li data-astro-cid-v2cbyr3p>Git</li> <li data-astro-cid-v2cbyr3p>Docker</li> <li data-astro-cid-v2cbyr3p>VS Code</li> <li data-astro-cid-v2cbyr3p>Postman</li> <li data-astro-cid-v2cbyr3p>Linux</li> <li data-astro-cid-v2cbyr3p>GitHub</li> </ul> </div> </div> </section> `;
}, "C:/Users/ud/Desktop/dev/mypro/shika-web/src/components/About.astro", void 0);

const $$Astro$2 = createAstro();
const $$Card1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card1;
  const { title, linkUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card-container" data-astro-cid-ow4ij64f> <h2 data-astro-cid-ow4ij64f>${title}</h2> ${renderSlot($$result, $$slots["default"])} <div data-astro-cid-ow4ij64f> <a${addAttribute(linkUrl, "href")} data-astro-cid-ow4ij64f>Vist site</a> </div> </div> `;
}, "C:/Users/ud/Desktop/dev/mypro/shika-web/src/components/Card1.astro", void 0);

const moviesApp = new Proxy({"src":"/_astro/movielibraly.BsFHIbaq.png","width":1312,"height":682,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ud/Desktop/dev/mypro/shika-web/public/movielibraly.png";
							}
							
							return target[name];
						}
					});

const calc = new Proxy({"src":"/_astro/calc.xvFgZ9sG.png","width":520,"height":556,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ud/Desktop/dev/mypro/shika-web/public/projects/calc.png";
							}
							
							return target[name];
						}
					});

const weather = new Proxy({"src":"/_astro/weather.C-AtBq7f.png","width":1838,"height":954,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ud/Desktop/dev/mypro/shika-web/public/projects/weather.png";
							}
							
							return target[name];
						}
					});

const sketch = new Proxy({"src":"/_astro/sketch.DKwHewEn.png","width":1184,"height":845,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ud/Desktop/dev/mypro/shika-web/public/projects/sketch.png";
							}
							
							return target[name];
						}
					});

const smrtv = new Proxy({"src":"/_astro/smrtv.CvsTyoZA.png","width":1835,"height":904,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ud/Desktop/dev/mypro/shika-web/public/projects/smrtv.png";
							}
							
							return target[name];
						}
					});

const piano = new Proxy({"src":"/_astro/piano.D0L6QYJ-.png","width":697,"height":553,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ud/Desktop/dev/mypro/shika-web/public/projects/piano.png";
							}
							
							return target[name];
						}
					});

const $$Portifolio = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "online smart voting",
      image: smrtv,
      techinologies: [],
      url: "https:/smartvottingonline.000webhostapp.com"
    },
    {
      title: "JS PIANO",
      image: piano,
      techinologies: [],
      url: "https://philemonpiano.netlify.app/"
    },
    {
      title: "Movie Library",
      image: moviesApp,
      techinologies: [],
      url: "https:/moive-lab.vercel.app/"
    },
    {
      title: "Et Sketch",
      image: sketch,
      techinologies: [],
      url: "https:/shikamusenge.github.io/Etch-A-Sketch/"
    },
    {
      title: "Calculator App",
      image: calc,
      techinologies: [],
      url: "https:/shikamusenge.github.io/odin-calculator/"
    },
    {
      title: "Weather App",
      image: weather,
      techinologies: [],
      url: "https:/shikamusenge.github.io/weatherApp/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="portfolio" data-astro-cid-tys5uq6b> <div class="container" data-astro-cid-tys5uq6b> <h1 data-astro-cid-tys5uq6b>Portfolio</h1> <p data-astro-cid-tys5uq6b>List of projects worked on</p> <div class="portfolio-grid" data-astro-cid-tys5uq6b> ${projects.map((item) => renderTemplate`${renderComponent($$result, "Card1", $$Card1, { "title": item.title, "linkUrl": item.url, "data-astro-cid-tys5uq6b": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": item.image, "alt": item.title, "width": 300, "height": 200, "class": "image", "data-astro-cid-tys5uq6b": true })} ` })}`)} </div></div> </section> `;
}, "C:/Users/ud/Desktop/dev/mypro/shika-web/src/components/Portifolio.astro", void 0);

const $$Astro$1 = createAstro();
const $$Card2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card2;
  const { title, linkUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card-container" data-astro-cid-sju3wfsi> ${renderSlot($$result, $$slots["default"])} <p data-astro-cid-sju3wfsi>${title}</p> <div data-astro-cid-sju3wfsi> <a${addAttribute(linkUrl, "href")} target="_blank" data-astro-cid-sju3wfsi>View certificate</a> </div> </div> `;
}, "C:/Users/ud/Desktop/dev/mypro/shika-web/src/components/Card2.astro", void 0);

const ida = new Proxy({"src":"/_astro/ida.BjUV8bGu.png","width":525,"height":405,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ud/Desktop/dev/mypro/shika-web/public/certificates/ida.png";
							}
							
							return target[name];
						}
					});

const ef = new Proxy({"src":"/_astro/ef.FjAJAIi7.png","width":919,"height":661,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ud/Desktop/dev/mypro/shika-web/public/certificates/ef.png";
							}
							
							return target[name];
						}
					});

const un = new Proxy({"src":"/_astro/un.BxMdwl8D.png","width":850,"height":591,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ud/Desktop/dev/mypro/shika-web/public/certificates/un.png";
							}
							
							return target[name];
						}
					});

const dt = new Proxy({"src":"/_astro/data-s.CiRRAgLK.png","width":1125,"height":790,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ud/Desktop/dev/mypro/shika-web/public/certificates/data-s.png";
							}
							
							return target[name];
						}
					});

const $$Awards = createComponent(($$result, $$props, $$slots) => {
  const awards = [
    {
      title: "Junior software developer ida Techinology certificate",
      url: "https://drive.google.com/file/d/1meRjwX1xwabhvKMkyCAb5i5G4rximC80/view?usp=drive_link",
      image: ida
    },
    {
      title: "English Level 7 certificate EF",
      url: "https://drive.google.com/file/d/185tPz2SWzd2Q0Z2aroxqlvIuXq1otu0a/view?usp=sharing",
      image: ef
    },
    {
      title: "Data Engineering and Data Science",
      url: "https://drive.google.com/file/d/155rBYxD4EOQP3Y3vkDI39N7NXZhk-ZTW/view?usp=sharing",
      image: dt
    },
    {
      title: "Zero Target Mareria",
      url: "https://drive.google.com/file/d/155rBYxD4EOQP3Y3vkDI39N7NXZhk-ZTW/view?usp=sharing",
      image: un
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="award" data-astro-cid-3yvflbj5> <div class="container" data-astro-cid-3yvflbj5> <h1 data-astro-cid-3yvflbj5>Awards</h1> <p data-astro-cid-3yvflbj5>List of awards/certificate that I own</p> <div class="my-awards" style="display:flex; flex-wrap: wrap; gap:1rem;" data-astro-cid-3yvflbj5> ${awards.map((item) => renderTemplate`${renderComponent($$result, "Card2", $$Card2, { "title": item.title.slice(0, 30), "linkUrl": item.url, "data-astro-cid-3yvflbj5": true }, { "default": ($$result2) => renderTemplate` <picture data-astro-cid-3yvflbj5> ${renderComponent($$result2, "Image", $$Image, { "src": item.image, "alt": "movie App", "width": 250, "height": 200, "class": "img", "data-astro-cid-3yvflbj5": true })} </picture> ` })}`)} </div></div> </section> `;
}, "C:/Users/ud/Desktop/dev/mypro/shika-web/src/components/Awards.astro", void 0);

const letConnect = new Proxy({"src":"/_astro/connect..CcCe6rCi.gif","width":612,"height":168,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ud/Desktop/dev/mypro/shika-web/public/connect..gif";
							}
							
							return target[name];
						}
					});

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" data-astro-cid-xmivup5a> <div class="container" data-astro-cid-xmivup5a> <div data-astro-cid-xmivup5a> <h1 data-astro-cid-xmivup5a>Contact us</h1> <p data-astro-cid-xmivup5a>Telephone: + (250) 784 589 448 / + (250) 722 123 139</p> <p data-astro-cid-xmivup5a>Email: codeexp77@gmail.com</p> ${renderComponent($$result, "Image", $$Image, { "src": letConnect, "width": 300, "height": 100, "alt": "Let connect", "data-astro-cid-xmivup5a": true })} </div> <form method="post" action="/apis/contact" data-astro-cid-xmivup5a> <p data-astro-cid-xmivup5a> <label for="email" data-astro-cid-xmivup5a>Email</label> <input type="email" name="email" id="email" data-astro-cid-xmivup5a> </p> <p data-astro-cid-xmivup5a> <label for="message" data-astro-cid-xmivup5a>Message</label> <textarea name="Message" id="message" data-astro-cid-xmivup5a></textarea> </p> <div style="display:flex; justify-content: end;" data-astro-cid-xmivup5a> <input type="submit" style="color: white; background-color: black; padding-inline: 1rem; padding-block: .3rem; margin-right: 6%;" value="Send Message" data-astro-cid-xmivup5a> </div> </form> </div> </section> `;
}, "C:/Users/ud/Desktop/dev/mypro/shika-web/src/components/Contact.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="experiences" data-astro-cid-xpq65ryk> <div class="container" data-astro-cid-xpq65ryk> <h1 data-astro-cid-xpq65ryk>My Professional Experience</h1> <ul data-astro-cid-xpq65ryk> <li data-astro-cid-xpq65ryk> <h2 class="company" data-astro-cid-xpq65ryk> <i class="company-icon fa fa-building" data-astro-cid-xpq65ryk></i> <a href="https://www.tyaza.com" target="_blank" data-astro-cid-xpq65ryk>TYAZA Limited</a> </h2> <p class="position" data-astro-cid-xpq65ryk>Software Developer & Financial Manager</p> <p class="status" data-astro-cid-xpq65ryk>Currently working</p> </li> <li data-astro-cid-xpq65ryk> <h2 class="company" data-astro-cid-xpq65ryk> <i class="company-icon fa fa-leaf" data-astro-cid-xpq65ryk></i> <a href="https://www.gardentss.com" target="_blank" data-astro-cid-xpq65ryk>Garden TSS</a> </h2> <p class="position" data-astro-cid-xpq65ryk>Trainer in Software Development</p> <p class="status" data-astro-cid-xpq65ryk>Currently working</p> </li> <li data-astro-cid-xpq65ryk> <h2 class="company" data-astro-cid-xpq65ryk> <i class="company-icon fa fa-cogs" data-astro-cid-xpq65ryk></i> <a href="https://kitech.rw/" target="_blank" data-astro-cid-xpq65ryk>Kitech</a> </h2> <p class="position" data-astro-cid-xpq65ryk>Back-end Developer</p> <p class="status" data-astro-cid-xpq65ryk>August 2024 - September 2024</p> </li> <li data-astro-cid-xpq65ryk> <h2 class="company" data-astro-cid-xpq65ryk> <i class="company-icon fa fa-hospital" data-astro-cid-xpq65ryk></i> <a href="https://www.krh.gov.rw/" target="_blank" data-astro-cid-xpq65ryk>KIBUNGO Level II Teaching Hospital</a> </h2> <p class="position" data-astro-cid-xpq65ryk>ITC Officer Intern</p> <p class="status" data-astro-cid-xpq65ryk>July 2024 - September 2024</p> </li> <li data-astro-cid-xpq65ryk> <h2 class="company" data-astro-cid-xpq65ryk> <i class="company-icon fa fa-briefcase" data-astro-cid-xpq65ryk></i> <a href="https://www.linkedin.com/posts/ida-technology-ltd_internships-opportunities-tech-activity-7043946516880736256-MC4M" target="_blank" data-astro-cid-xpq65ryk>IDA TECHNOLOGY</a> </h2> <p class="position" data-astro-cid-xpq65ryk>Software Developer Intern</p> <p class="status" data-astro-cid-xpq65ryk>September 2023 - October 2023</p> </li> </ul> </div> </section>`;
}, "C:/Users/ud/Desktop/dev/mypro/shika-web/src/components/Experience.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-j7pv25f6> <head><!-- FontAwesome CDN for icons --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/profile2.png"><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>Shikamusenge</title>", `</head> <!--Start of Tawk.to Script--> <script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/675312662480f5b4f5a8ca45/1iee7vp12';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
<\/script> <!--End of Tawk.to Script--> <body data-astro-cid-j7pv25f6> `, " <main data-astro-cid-j7pv25f6> ", " ", " ", " ", " ", " ", " </main> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "NavBar", $$NavBar, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result, "About", $$About, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result, "Experience", $$Experience, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result, "Portifolio", $$Portifolio, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result, "Awards", $$Awards, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result, "Contact", $$Contact, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true }));
}, "C:/Users/ud/Desktop/dev/mypro/shika-web/src/pages/index.astro", void 0);

const $$file = "C:/Users/ud/Desktop/dev/mypro/shika-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

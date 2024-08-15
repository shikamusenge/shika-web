import { e as createComponent, r as renderTemplate, m as maybeRenderHead, h as createAstro, i as renderComponent, j as renderSlot, g as addAttribute, k as renderHead } from '../astro_D_5dfn4l.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
import { $ as $$Image } from './generic_CkTLCbNg.mjs';

const $$Astro$9 = createAstro();
const $$NavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$NavBar;
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-ymhdp2rl> <div id="navBar" data-astro-cid-ymhdp2rl> <div id="menu" data-astro-cid-ymhdp2rl>Menu</div> <div id="bland" data-astro-cid-ymhdp2rl>P. SHIKAMUSENGE.</div> <div id="links" class="links" data-astro-cid-ymhdp2rl> <a href="#home" data-astro-cid-ymhdp2rl>Home</a> <a href="#about" data-astro-cid-ymhdp2rl>About</a> <a href="#award" data-astro-cid-ymhdp2rl>Awards</a> <a href="#contact" data-astro-cid-ymhdp2rl>Contact Us</a> <a href="#portfolio" data-astro-cid-ymhdp2rl>Portfolio</a> </div> <div data-astro-cid-ymhdp2rl> <button data-astro-cid-ymhdp2rl> <a href="mailto:shikamusenge720@gmail.com?cc=codeexp77@gmail.com&subject=You%20are%20hired" style="color: white; text-decoration: none;" target="_blank" rel="noopener noreferrer" data-astro-cid-ymhdp2rl>Hire me</a> </button> </div> </div> </nav>  `;
}, "C:/Users/ud/Desktop/dev/mypro/shika-web/src/components/NavBar.astro", void 0);

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

const $$Astro$8 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Hero;
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

const $$Astro$7 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section id="about" data-astro-cid-v2cbyr3p> <div class="container" data-astro-cid-v2cbyr3p> <h1 class="fade-in" data-astro-cid-v2cbyr3p>About Me</h1> <h3 class="fade-in delay-1" data-astro-cid-v2cbyr3p>Who am I?</h3> <p class="fade-in delay-2" data-astro-cid-v2cbyr3p>
I am a problem solver, always eager to take on new challenges and create
      innovative web applications. My journey in the world of programming began
      with deep curiosity and has evolved into a fulfilling career in web
      development. Whether it's crafting sleek and responsive user interfaces or
      architecting robust server-side solutions, I thrive on the thrill of
      building meaningful projects from the ground up.
</p> <h3 class="fade-in delay-3" data-astro-cid-v2cbyr3p>Skills</h3> <div class="skills fade-in delay-4" data-astro-cid-v2cbyr3p> <ul data-astro-cid-v2cbyr3p> <h4 data-astro-cid-v2cbyr3p>Programming Languages</h4> <li data-astro-cid-v2cbyr3p>TypeScript</li> <li data-astro-cid-v2cbyr3p>JavaScript</li> <li data-astro-cid-v2cbyr3p>Node.js</li> <li data-astro-cid-v2cbyr3p>Java</li> <li data-astro-cid-v2cbyr3p>PHP</li> <li data-astro-cid-v2cbyr3p>HTML</li> <li data-astro-cid-v2cbyr3p>C++</li> <li data-astro-cid-v2cbyr3p>CSS</li> <li data-astro-cid-v2cbyr3p>C</li> <li data-astro-cid-v2cbyr3p>Python</li> </ul> <ul data-astro-cid-v2cbyr3p> <h4 data-astro-cid-v2cbyr3p>Databases</h4> <li data-astro-cid-v2cbyr3p>MySQL</li> <li data-astro-cid-v2cbyr3p>Oracle</li> <li data-astro-cid-v2cbyr3p>PostgreSQL</li> <li data-astro-cid-v2cbyr3p>MongoDB</li> <li data-astro-cid-v2cbyr3p>Prisma</li> <li data-astro-cid-v2cbyr3p>Mongoose</li> </ul> <ul data-astro-cid-v2cbyr3p> <h4 data-astro-cid-v2cbyr3p>Tools & Technologies</h4> <li data-astro-cid-v2cbyr3p>Git</li> <li data-astro-cid-v2cbyr3p>Docker</li> <li data-astro-cid-v2cbyr3p>Webpack</li> <li data-astro-cid-v2cbyr3p>Babel</li> <li data-astro-cid-v2cbyr3p>VS Code</li> <li data-astro-cid-v2cbyr3p>Postman</li> <li data-astro-cid-v2cbyr3p>Linux</li> <li data-astro-cid-v2cbyr3p>CI/CD</li> <li data-astro-cid-v2cbyr3p>Jenkins</li> <li data-astro-cid-v2cbyr3p>GitHub</li> </ul> </div> </div> </section> `;
}, "C:/Users/ud/Desktop/dev/mypro/shika-web/src/components/About.astro", void 0);

const $$Astro$6 = createAstro();
const $$Card1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
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

const ik = new Proxy({"src":"/_astro/iki.Duq-r9WZ.jpeg","width":1842,"height":1069,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ud/Desktop/dev/mypro/shika-web/public/projects/iki.jpeg";
							}
							
							return target[name];
						}
					});

const $$Astro$5 = createAstro();
const $$Portifolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Portifolio;
  const projects = [
    {
      title: "online smart voting",
      image: smrtv,
      techinologies: [],
      url: "https:/smartvottingonline.000webhostapp.com"
    },
    {
      title: "IKIBINA",
      image: ik,
      techinologies: [],
      url: "https:/moive-lab.vercel.app/"
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

const gitHub = new Proxy({"src":"/_astro/3d-fluency-github-logo.CwwPlB5A.png","width":368,"height":368,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ud/Desktop/dev/mypro/shika-web/public/social_media/3d-fluency-github-logo.png";
							}
							
							return target[name];
						}
					});

const Linked = new Proxy({"src":"/_astro/icons8-in-48.D0jpXdAw.png","width":48,"height":48,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ud/Desktop/dev/mypro/shika-web/public/social_media/icons8-in-48.png";
							}
							
							return target[name];
						}
					});

const insta = new Proxy({"src":"/_astro/grapy-instagram-icon.uRs-Q8yg.png","width":368,"height":368,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ud/Desktop/dev/mypro/shika-web/public/social_media/grapy-instagram-icon.png";
							}
							
							return target[name];
						}
					});

const whatsapp = new Proxy({"src":"/_astro/icons8-whatsapp-50.BS0G53su.png","width":50,"height":50,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ud/Desktop/dev/mypro/shika-web/public/social_media/icons8-whatsapp-50.png";
							}
							
							return target[name];
						}
					});

const fb = new Proxy({"src":"/_astro/icons8-facebook-48.B9jtpFxf.png","width":48,"height":48,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ud/Desktop/dev/mypro/shika-web/public/social_media/icons8-facebook-48.png";
							}
							
							return target[name];
						}
					});

const twiter = new Proxy({"src":"/_astro/twitter-x-logo-png-9.Pk58o1lM.png","width":1200,"height":1200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ud/Desktop/dev/mypro/shika-web/public/social_media/twitter-x-logo-png-9.png";
							}
							
							return target[name];
						}
					});

const home = new Proxy({"src":"/_astro/icons8-home-50.DjQXx4yP.png","width":50,"height":50,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ud/Desktop/dev/mypro/shika-web/public/social_media/icons8-home-50.png";
							}
							
							return target[name];
						}
					});

const $$Astro$4 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  const medias = [
    {
      mediaIcon: twiter,
      url: "https://twitter.com/ShikamusengeP",
      alt: "Twitter Icon"
    },
    {
      mediaIcon: Linked,
      url: "https://www.linkedin.com/in/shikamusenge-philemon-86494b291/",
      alt: "LinkedIn Icon"
    },
    {
      mediaIcon: gitHub,
      url: "https://github.com/shikamusenge",
      alt: "GitHub Icon"
    },
    {
      mediaIcon: whatsapp,
      url: "https://wa.me/+250784589448",
      alt: "WhatsApp Icon"
    },
    {
      mediaIcon: fb,
      url: "https://www.facebook.com/profile.php?id=100085362144715",
      alt: "Facebook Icon"
    },
    {
      mediaIcon: insta,
      url: "https://www.instagram.com/phile_ruganzu720/",
      alt: "Instagram Icon"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div id="main" data-astro-cid-sz7xmlte> <ul data-astro-cid-sz7xmlte> ${medias.map((media) => renderTemplate`<li data-astro-cid-sz7xmlte> <a${addAttribute(media.url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(media.alt, "aria-label")} data-astro-cid-sz7xmlte> ${renderComponent($$result, "Image", $$Image, { "src": media.mediaIcon, "width": 28, "height": 28, "alt": media.alt, "data-astro-cid-sz7xmlte": true })} </a> </li>`)} </ul> <a href="#home" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Image", $$Image, { "src": home, "width": 30, "height": 30, "alt": "Home Icon", "class": "img", "data-astro-cid-sz7xmlte": true })} </a> </div> <div style="text-align: center;" data-astro-cid-sz7xmlte>
ALL RIGHTS RESERVED TO &copy; SHIKAMUSENGE
</div> </div> </section> `;
}, "C:/Users/ud/Desktop/dev/mypro/shika-web/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro();
const $$Card2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Card2;
  const { title, linkUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card-container" data-astro-cid-sju3wfsi> ${renderSlot($$result, $$slots["default"])} <p data-astro-cid-sju3wfsi>${title}</p> <div data-astro-cid-sju3wfsi> <a${addAttribute(linkUrl, "href")} target="_blank" data-astro-cid-sju3wfsi>View certificate</a> </div> </div> `;
}, "C:/Users/ud/Desktop/dev/mypro/shika-web/src/components/Card2.astro", void 0);

const tvt = new Proxy({"src":"/_astro/tvt.BWyKDgIw.png","width":1144,"height":837,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ud/Desktop/dev/mypro/shika-web/public/certificates/tvt.png";
							}
							
							return target[name];
						}
					});

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

const $$Astro$2 = createAstro();
const $$Awards = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Awards;
  const awards = [
    {
      title: "TVET Level V certificate in Software development",
      url: "https://drive.google.com/file/d/1vFUOVRRB6J2la3RgUgldlEYWqTNyxaZ0/view?usp=drive_link",
      image: tvt
    },
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

const $$Astro$1 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${maybeRenderHead()}<section id="contact" data-astro-cid-xmivup5a> <div class="container" data-astro-cid-xmivup5a> <div data-astro-cid-xmivup5a> <h1 data-astro-cid-xmivup5a>Contact us</h1> <p data-astro-cid-xmivup5a>Telephone: + (250) 784 589 448 / + (250) 722 123 139</p> <p data-astro-cid-xmivup5a>Email: codeexp77@gmail.com</p> ${renderComponent($$result, "Image", $$Image, { "src": letConnect, "width": 300, "height": 100, "alt": "Let connect", "data-astro-cid-xmivup5a": true })} </div> <form method="post" action="/apis/contact" data-astro-cid-xmivup5a> <p data-astro-cid-xmivup5a> <label for="email" data-astro-cid-xmivup5a>Email</label> <input type="email" name="email" id="email" data-astro-cid-xmivup5a> </p> <p data-astro-cid-xmivup5a> <label for="message" data-astro-cid-xmivup5a>Message</label> <textarea name="Message" id="message" data-astro-cid-xmivup5a></textarea> </p> <div style="display:flex; justify-content: end;" data-astro-cid-xmivup5a> <input type="submit" style="color: white; background-color: black; padding-inline: 1rem; padding-block: .3rem; margin-right: 6%;" value="Send Message" data-astro-cid-xmivup5a> </div> </form> </div> </section> `;
}, "C:/Users/ud/Desktop/dev/mypro/shika-web/src/components/Contact.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/profile2.png"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Shikamusenge</title>${renderHead()}</head> <body data-astro-cid-j7pv25f6> ${renderComponent($$result, "NavBar", $$NavBar, { "data-astro-cid-j7pv25f6": true })} <main data-astro-cid-j7pv25f6> ${renderComponent($$result, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result, "About", $$About, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result, "Portifolio", $$Portifolio, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result, "Awards", $$Awards, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result, "Contact", $$Contact, { "data-astro-cid-j7pv25f6": true })} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} </body></html>`;
}, "C:/Users/ud/Desktop/dev/mypro/shika-web/src/pages/index.astro", void 0);

const $$file = "C:/Users/ud/Desktop/dev/mypro/shika-web/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

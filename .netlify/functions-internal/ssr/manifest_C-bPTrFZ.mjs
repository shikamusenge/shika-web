import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_D_5dfn4l.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/apis/contact","isIndex":true,"type":"endpoint","pattern":"^\\/apis\\/contact\\/?$","segments":[[{"content":"apis","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/apis/contact/index.ts","pathname":"/apis/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const a=document.querySelector(\"#menu\");let s=!1;a?.addEventListener(\"click\",()=>{s=!s;const e=document.querySelector(\"#links\");console.log(e);const t=()=>{e?.classList.remove(\"navactive\"),e?.classList.add(\"links\")};e?.querySelectorAll(\"a\").forEach(c=>{c.addEventListener(\"click\",()=>t())}),s?t():(e?.classList.add(\"navactive\"),e?.classList.remove(\"links\"))});\n"}],"styles":[{"type":"external","src":"/_astro/index.B-KEAl70.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ud/Desktop/dev/mypro/shika-web/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/index.astro":"chunks/pages/index_CU2I49Jc.mjs","/src/pages/apis/contact/index.ts":"chunks/pages/index_Ba6eIXD7.mjs","\u0000@astrojs-manifest":"manifest_C-bPTrFZ.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_6wmsameQ.mjs","\u0000@astro-page:src/pages/apis/contact/index@_@ts":"chunks/index_CI4DjERu.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_B3UmrKds.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.B627U-n2.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/calc.xvFgZ9sG.png","/_astro/smrtv.CvsTyoZA.png","/_astro/sketch.DKwHewEn.png","/_astro/iki.Duq-r9WZ.jpeg","/_astro/connect..CcCe6rCi.gif","/_astro/profile2.B1T8L3Bg.png","/_astro/icons8-whatsapp-50.BS0G53su.png","/_astro/grapy-instagram-icon.uRs-Q8yg.png","/_astro/icons8-home-50.DjQXx4yP.png","/_astro/twitter-x-logo-png-9.Pk58o1lM.png","/_astro/icons8-in-48.D0jpXdAw.png","/_astro/icons8-facebook-48.B9jtpFxf.png","/_astro/3d-fluency-github-logo.CwwPlB5A.png","/_astro/ida.BjUV8bGu.png","/_astro/ef.FjAJAIi7.png","/_astro/un.BxMdwl8D.png","/_astro/movielibraly.BsFHIbaq.png","/_astro/tvt.BWyKDgIw.png","/_astro/data-s.CiRRAgLK.png","/_astro/weather.C-AtBq7f.png","/_astro/index.B-KEAl70.css","/AusWqKj.webp","/b.png","/bg.jpg","/bg2.png","/connect..gif","/favicon.svg","/movielibraly.png","/profile2.png","/R.jfif","/Untitled-1.psd","/certificates/data-s.png","/certificates/ef.png","/certificates/ida.png","/certificates/tvt.png","/certificates/un.png","/social_media/3d-fluency-github-logo.png","/social_media/grapy-instagram-icon.png","/social_media/icons8-facebook-48.png","/social_media/icons8-github-24.png","/social_media/icons8-github-50.png","/social_media/icons8-home-50.png","/social_media/icons8-in-48.png","/social_media/icons8-whatsapp-50.png","/social_media/twitter-x-logo-png-9.png","/projects/calc.png","/projects/iki.jpeg","/projects/sketch.png","/projects/smrtv.png","/projects/weather.png"],"buildFormat":"directory"});

export { manifest };
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_Cy2K1EJg.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
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
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/ud/Desktop/dev/mypro/shika-web/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;object-fit:var(--fit);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/apis/contact","isIndex":true,"type":"endpoint","pattern":"^\\/apis\\/contact\\/?$","segments":[[{"content":"apis","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/apis/contact/index.ts","pathname":"/apis/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"nav[data-astro-cid-ymhdp2rl]{top:0;position:sticky;z-index:50;padding-top:2rem;font-family:Inter,sans-serif;font-size:12px;border-bottom:1px solid black;padding-bottom:.3rem;background-color:#fff}#navBar[data-astro-cid-ymhdp2rl]{max-width:1200px;display:flex;justify-content:space-between;align-items:center;margin-inline:auto;padding-inline:2rem;position:relative;font-size:medium}#links[data-astro-cid-ymhdp2rl] a[data-astro-cid-ymhdp2rl]:hover{color:#00f}#bland[data-astro-cid-ymhdp2rl]{font-weight:700}a[data-astro-cid-ymhdp2rl]{color:#000;text-decoration:none}button[data-astro-cid-ymhdp2rl]{padding-block:.3rem;outline:none;background-color:#000;color:#fff;border-radius:.2rem;padding-inline:1rem;padding-block:.5rem;cursor:pointer;border:none}.links[data-astro-cid-ymhdp2rl]{display:flex;gap:.8rem;align-items:center}#menu[data-astro-cid-ymhdp2rl]{cursor:pointer;padding:.5rem;border:solid 1px blue;border-radius:3px;display:none}#menu[data-astro-cid-ymhdp2rl]:hover{background-color:#bdcbd6}@media screen and (max-width: 550px){.links[data-astro-cid-ymhdp2rl]{display:none;flex-direction:column;visibility:hidden}.navactive[data-astro-cid-ymhdp2rl]{position:absolute;background-color:#fff;display:flex;flex-direction:column;margin-top:9rem;width:100%;box-shadow:2px 2px #a4a4c18e;margin-left:-2rem;padding-inline:2rem;padding-bottom:1rem;gap:.5rem}#menu[data-astro-cid-ymhdp2rl]{display:inline}}section[data-astro-cid-sz7xmlte]{background-color:#000;color:#fff}ul[data-astro-cid-sz7xmlte]{display:flex;padding-block:.8rem;gap:.7rem}ul[data-astro-cid-sz7xmlte] li[data-astro-cid-sz7xmlte]{list-style:none}#main[data-astro-cid-sz7xmlte]{display:flex;justify-content:space-between;align-items:center}.img[data-astro-cid-sz7xmlte]{margin-block:auto;margin-inline-end:2rem}\n[data-astro-cid-ijnerlr2]{box-sizing:border-box;padding:0;margin:0}body,html{font-family:Inter,sans-serif;background-color:#f2f2f2;color:#333}main[data-astro-cid-ijnerlr2]{margin:auto;max-width:800px;padding:2rem;min-height:90vh}.blog-preview[data-astro-cid-ijnerlr2]{text-align:center;background-color:#fff;border-radius:8px;box-shadow:0 4px 8px #0000001a;padding:2rem;margin:1rem}.blog-preview[data-astro-cid-ijnerlr2] img[data-astro-cid-ijnerlr2]{width:100%;height:auto;border-radius:8px;margin-bottom:1.5rem}.blog-preview[data-astro-cid-ijnerlr2] h1[data-astro-cid-ijnerlr2]{font-size:2rem;margin-bottom:1rem;color:#262626}.blog-preview[data-astro-cid-ijnerlr2] p[data-astro-cid-ijnerlr2]{font-size:1.1rem;line-height:1.6;color:#666;margin-bottom:1.5rem}.btn[data-astro-cid-ijnerlr2]{background-color:#000;color:#fff;border-radius:.4rem;padding:.75rem 1.5rem;text-decoration:none;font-size:1.1rem;transition:background-color .3s ease,transform .3s ease;display:inline-block}.btn[data-astro-cid-ijnerlr2]:hover{background-color:#333;transform:scale(1.05)}@media (max-width: 768px){.blog-preview[data-astro-cid-ijnerlr2]{padding:1rem}.btn[data-astro-cid-ijnerlr2]{padding:.5rem 1rem;font-size:1rem}}\n[data-astro-image]{width:100%;height:auto;object-fit:var(--fit);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"nav[data-astro-cid-ymhdp2rl]{top:0;position:sticky;z-index:50;padding-top:2rem;font-family:Inter,sans-serif;font-size:12px;border-bottom:1px solid black;padding-bottom:.3rem;background-color:#fff}#navBar[data-astro-cid-ymhdp2rl]{max-width:1200px;display:flex;justify-content:space-between;align-items:center;margin-inline:auto;padding-inline:2rem;position:relative;font-size:medium}#links[data-astro-cid-ymhdp2rl] a[data-astro-cid-ymhdp2rl]:hover{color:#00f}#bland[data-astro-cid-ymhdp2rl]{font-weight:700}a[data-astro-cid-ymhdp2rl]{color:#000;text-decoration:none}button[data-astro-cid-ymhdp2rl]{padding-block:.3rem;outline:none;background-color:#000;color:#fff;border-radius:.2rem;padding-inline:1rem;padding-block:.5rem;cursor:pointer;border:none}.links[data-astro-cid-ymhdp2rl]{display:flex;gap:.8rem;align-items:center}#menu[data-astro-cid-ymhdp2rl]{cursor:pointer;padding:.5rem;border:solid 1px blue;border-radius:3px;display:none}#menu[data-astro-cid-ymhdp2rl]:hover{background-color:#bdcbd6}@media screen and (max-width: 550px){.links[data-astro-cid-ymhdp2rl]{display:none;flex-direction:column;visibility:hidden}.navactive[data-astro-cid-ymhdp2rl]{position:absolute;background-color:#fff;display:flex;flex-direction:column;margin-top:9rem;width:100%;box-shadow:2px 2px #a4a4c18e;margin-left:-2rem;padding-inline:2rem;padding-bottom:1rem;gap:.5rem}#menu[data-astro-cid-ymhdp2rl]{display:inline}}section[data-astro-cid-sz7xmlte]{background-color:#000;color:#fff}ul[data-astro-cid-sz7xmlte]{display:flex;padding-block:.8rem;gap:.7rem}ul[data-astro-cid-sz7xmlte] li[data-astro-cid-sz7xmlte]{list-style:none}#main[data-astro-cid-sz7xmlte]{display:flex;justify-content:space-between;align-items:center}.img[data-astro-cid-sz7xmlte]{margin-block:auto;margin-inline-end:2rem}\nbody{margin:0;font-family:Arial,sans-serif;background-color:#f9f9f9;color:#333}.header{background-color:#4caf50;color:#fff;text-align:center;padding:20px}.header h1{margin:0;font-size:2.5rem}.header p{margin:0;font-size:1.2rem}.content{padding:20px}.resources{max-width:800px;margin:0 auto;background:#fff;padding:20px;border-radius:8px;box-shadow:0 4px 8px #0000001a}.google-drive{width:100%;height:600px;border:none;margin-top:10px;border-radius:4px}.footer{text-align:center;padding:10px;background-color:#333;color:#fff}\n[data-astro-image]{width:100%;height:auto;object-fit:var(--fit);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/garden","isIndex":true,"type":"page","pattern":"^\\/garden\\/?$","segments":[[{"content":"garden","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/garden/index.astro","pathname":"/garden","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"nav[data-astro-cid-ymhdp2rl]{top:0;position:sticky;z-index:50;padding-top:2rem;font-family:Inter,sans-serif;font-size:12px;border-bottom:1px solid black;padding-bottom:.3rem;background-color:#fff}#navBar[data-astro-cid-ymhdp2rl]{max-width:1200px;display:flex;justify-content:space-between;align-items:center;margin-inline:auto;padding-inline:2rem;position:relative;font-size:medium}#links[data-astro-cid-ymhdp2rl] a[data-astro-cid-ymhdp2rl]:hover{color:#00f}#bland[data-astro-cid-ymhdp2rl]{font-weight:700}a[data-astro-cid-ymhdp2rl]{color:#000;text-decoration:none}button[data-astro-cid-ymhdp2rl]{padding-block:.3rem;outline:none;background-color:#000;color:#fff;border-radius:.2rem;padding-inline:1rem;padding-block:.5rem;cursor:pointer;border:none}.links[data-astro-cid-ymhdp2rl]{display:flex;gap:.8rem;align-items:center}#menu[data-astro-cid-ymhdp2rl]{cursor:pointer;padding:.5rem;border:solid 1px blue;border-radius:3px;display:none}#menu[data-astro-cid-ymhdp2rl]:hover{background-color:#bdcbd6}@media screen and (max-width: 550px){.links[data-astro-cid-ymhdp2rl]{display:none;flex-direction:column;visibility:hidden}.navactive[data-astro-cid-ymhdp2rl]{position:absolute;background-color:#fff;display:flex;flex-direction:column;margin-top:9rem;width:100%;box-shadow:2px 2px #a4a4c18e;margin-left:-2rem;padding-inline:2rem;padding-bottom:1rem;gap:.5rem}#menu[data-astro-cid-ymhdp2rl]{display:inline}}section[data-astro-cid-sz7xmlte]{background-color:#000;color:#fff}ul[data-astro-cid-sz7xmlte]{display:flex;padding-block:.8rem;gap:.7rem}ul[data-astro-cid-sz7xmlte] li[data-astro-cid-sz7xmlte]{list-style:none}#main[data-astro-cid-sz7xmlte]{display:flex;justify-content:space-between;align-items:center}.img[data-astro-cid-sz7xmlte]{margin-block:auto;margin-inline-end:2rem}\n[data-astro-cid-zkmehxi3]{box-sizing:border-box;padding:0;margin:0}body,html{font-family:Inter,sans-serif;background-color:#f2f2f2;color:#333}main[data-astro-cid-zkmehxi3]{margin:auto;max-width:800px;padding:2rem;min-height:90vh}.hire-me[data-astro-cid-zkmehxi3]{text-align:center;background-color:#fff;border-radius:8px;box-shadow:0 4px 8px #0000001a;padding:2rem;margin:1rem}.hire-me[data-astro-cid-zkmehxi3] h1[data-astro-cid-zkmehxi3]{font-size:2rem;margin-bottom:1rem;color:#262626}.hire-me[data-astro-cid-zkmehxi3] p[data-astro-cid-zkmehxi3]{font-size:1.1rem;line-height:1.6;color:#666;margin-bottom:1.5rem}.form-container[data-astro-cid-zkmehxi3]{width:100%;max-width:800px;margin:auto}iframe[data-astro-cid-zkmehxi3]{width:100%;height:800px;border:none;border-radius:8px}@media (max-width: 768px){.hire-me[data-astro-cid-zkmehxi3]{padding:1rem}iframe[data-astro-cid-zkmehxi3]{height:600px}}\n[data-astro-image]{width:100%;height:auto;object-fit:var(--fit);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/hire","isIndex":false,"type":"page","pattern":"^\\/hire\\/?$","segments":[[{"content":"hire","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hire.astro","pathname":"/hire","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"nav[data-astro-cid-ymhdp2rl]{top:0;position:sticky;z-index:50;padding-top:2rem;font-family:Inter,sans-serif;font-size:12px;border-bottom:1px solid black;padding-bottom:.3rem;background-color:#fff}#navBar[data-astro-cid-ymhdp2rl]{max-width:1200px;display:flex;justify-content:space-between;align-items:center;margin-inline:auto;padding-inline:2rem;position:relative;font-size:medium}#links[data-astro-cid-ymhdp2rl] a[data-astro-cid-ymhdp2rl]:hover{color:#00f}#bland[data-astro-cid-ymhdp2rl]{font-weight:700}a[data-astro-cid-ymhdp2rl]{color:#000;text-decoration:none}button[data-astro-cid-ymhdp2rl]{padding-block:.3rem;outline:none;background-color:#000;color:#fff;border-radius:.2rem;padding-inline:1rem;padding-block:.5rem;cursor:pointer;border:none}.links[data-astro-cid-ymhdp2rl]{display:flex;gap:.8rem;align-items:center}#menu[data-astro-cid-ymhdp2rl]{cursor:pointer;padding:.5rem;border:solid 1px blue;border-radius:3px;display:none}#menu[data-astro-cid-ymhdp2rl]:hover{background-color:#bdcbd6}@media screen and (max-width: 550px){.links[data-astro-cid-ymhdp2rl]{display:none;flex-direction:column;visibility:hidden}.navactive[data-astro-cid-ymhdp2rl]{position:absolute;background-color:#fff;display:flex;flex-direction:column;margin-top:9rem;width:100%;box-shadow:2px 2px #a4a4c18e;margin-left:-2rem;padding-inline:2rem;padding-bottom:1rem;gap:.5rem}#menu[data-astro-cid-ymhdp2rl]{display:inline}}section[data-astro-cid-sz7xmlte]{background-color:#000;color:#fff}ul[data-astro-cid-sz7xmlte]{display:flex;padding-block:.8rem;gap:.7rem}ul[data-astro-cid-sz7xmlte] li[data-astro-cid-sz7xmlte]{list-style:none}#main[data-astro-cid-sz7xmlte]{display:flex;justify-content:space-between;align-items:center}.img[data-astro-cid-sz7xmlte]{margin-block:auto;margin-inline-end:2rem}\n"},{"type":"external","src":"/_astro/index.BUq-KbuP.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;object-fit:var(--fit);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ud/Desktop/dev/mypro/shika-web/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["C:/Users/ud/Desktop/dev/mypro/shika-web/src/pages/garden/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ud/Desktop/dev/mypro/shika-web/src/pages/hire.astro",{"propagation":"none","containsHead":true}],["C:/Users/ud/Desktop/dev/mypro/shika-web/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/apis/contact/index@_@ts":"pages/apis/contact.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/garden/index@_@astro":"pages/garden.astro.mjs","\u0000@astro-page:src/pages/hire@_@astro":"pages/hire.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DucnruHv.mjs","C:/Users/ud/Desktop/dev/mypro/shika-web/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_EB4wepV1.mjs","C:/Users/ud/Desktop/dev/mypro/shika-web/src/components/NavBar.astro?astro&type=script&index=0&lang.ts":"_astro/NavBar.astro_astro_type_script_index_0_lang.B627U-n2.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/ud/Desktop/dev/mypro/shika-web/src/components/NavBar.astro?astro&type=script&index=0&lang.ts","const a=document.querySelector(\"#menu\");let s=!1;a?.addEventListener(\"click\",()=>{s=!s;const e=document.querySelector(\"#links\");console.log(e);const t=()=>{e?.classList.remove(\"navactive\"),e?.classList.add(\"links\")};e?.querySelectorAll(\"a\").forEach(c=>{c.addEventListener(\"click\",()=>t())}),s?t():(e?.classList.add(\"navactive\"),e?.classList.remove(\"links\"))});"]],"assets":["/_astro/icons8-in-48.D0jpXdAw.png","/_astro/icons8-facebook-48.B9jtpFxf.png","/_astro/grapy-instagram-icon.uRs-Q8yg.png","/_astro/icons8-whatsapp-50.BS0G53su.png","/_astro/3d-fluency-github-logo.CwwPlB5A.png","/_astro/icons8-home-50.DjQXx4yP.png","/_astro/twitter-x-logo-png-9.Pk58o1lM.png","/_astro/sketch.DKwHewEn.png","/_astro/calc.xvFgZ9sG.png","/_astro/piano.D0L6QYJ-.png","/_astro/smrtv.CvsTyoZA.png","/_astro/profile2.B1T8L3Bg.png","/_astro/ida.BjUV8bGu.png","/_astro/un.BxMdwl8D.png","/_astro/data-s.CiRRAgLK.png","/_astro/ef.FjAJAIi7.png","/_astro/connect..CcCe6rCi.gif","/_astro/movielibraly.BsFHIbaq.png","/_astro/weather.C-AtBq7f.png","/_astro/index.BUq-KbuP.css","/AusWqKj.webp","/b.png","/bg.jpg","/bg2.png","/connect..gif","/document.pdf","/exp-bg.jpg","/favicon.svg","/movielibraly.png","/profile2.png","/R.jfif","/Untitled-1.psd","/certificates/data-s.png","/certificates/ef.png","/certificates/ida.png","/certificates/tvt.png","/certificates/un.png","/projects/calc.png","/projects/piano.png","/projects/sketch.png","/projects/smrtv.png","/projects/weather.png","/social_media/3d-fluency-github-logo.png","/social_media/grapy-instagram-icon.png","/social_media/icons8-facebook-48.png","/social_media/icons8-github-24.png","/social_media/icons8-github-50.png","/social_media/icons8-home-50.png","/social_media/icons8-in-48.png","/social_media/icons8-whatsapp-50.png","/social_media/twitter-x-logo-png-9.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"ksuuz6TV7u7O0AzgHcZJNJkRKzM3iBLiabzP2gA24s4=","envGetSecretEnabled":true});

export { manifest };

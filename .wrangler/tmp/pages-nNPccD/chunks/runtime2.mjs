import{e,u as t,n as r,O as s,P as a}from"./runtime.mjs";const o=e((e=>{const a=t()?.app?.baseURL;return{openapi:"3.1.0",info:{title:"Nitro Server Routes",version:null},servers:[{url:r(s(e).origin,a),description:"Local Development Server",variables:{}}],paths:getPaths()}}));function getPaths(){const e={};for(const t of a){const{route:r,parameters:s}=normalizeRoute(t.route),a=defaultTags(t.route),o=(t.method||"get").toLowerCase(),n={[o]:{tags:a,parameters:s,responses:{200:{description:"OK"}}}};void 0===e[r]?e[r]=n:Object.assign(e[r],n)}return e}function normalizeRoute(e){const t=[];let r=0;const s=e.replace(/:(\w+)/g,((e,t)=>`{${t}}`)).replace(/\/(\*)\//g,(()=>`/{param${++r}}/`)).replace(/\*\*{/,"{").replace(/\/(\*\*)$/g,(()=>`/{*param${++r}}`)),a=s.matchAll(/{(\*?\w+)}/g);for(const e of a){const r=e[1];t.some((e=>e.name===r))||t.push({name:r,in:"path",required:!0,schema:{type:"string"}})}return{route:s,parameters:t}}function defaultTags(e){const t=[];return e.startsWith("/api/")?t.push("API Routes"):e.startsWith("/_")?t.push("Internal"):t.push("App Routes"),t}export{o as default};
//# sourceMappingURL=runtime2.mjs.map

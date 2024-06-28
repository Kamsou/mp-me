var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// .wrangler/tmp/bundle-KFpKCp/checked-fetch.js
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
var urls;
var init_checked_fetch = __esm({
  ".wrangler/tmp/bundle-KFpKCp/checked-fetch.js"() {
    "use strict";
    urls = /* @__PURE__ */ new Set();
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init] = argArray;
        checkURL(request, init);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// node_modules/.pnpm/wrangler@3.62.0/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/.pnpm/wrangler@3.62.0/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/_/error-500.mjs
var error_500_exports = {};
__export(error_500_exports, {
  template: () => template
});
var e, template;
var init_error_500 = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/_/error-500.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    e = { appName: "Nuxt", version: "", statusCode: 500, statusMessage: "Server error", description: "This page is temporarily unavailable." };
    template = (t7) => "<!DOCTYPE html><html data-critters-container><head><title>" + (t7 = { ...e, ...t7 }).statusCode + " - " + t7.statusMessage + " | " + t7.appName + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);filter:blur(20vh)}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.-bottom-1\\/2{bottom:-50%}.left-0{left:0}.right-0{right:0}.grid{display:grid}.mb-16{margin-bottom:4rem}.mb-8{margin-bottom:2rem}.h-1\\/2{height:50%}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.px-8{padding-left:2rem;padding-right:2rem}.text-center{text-align:center}.text-8xl{font-size:6rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0 / var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme: dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0 / var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}}@media (min-width: 640px){.sm\\:px-0{padding-left:0;padding-right:0}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();<\/script></head><body class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight"></div><div class="max-w-520px text-center"><h1 class="text-8xl sm:text-10xl font-medium mb-8">` + t7.statusCode + '</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight">' + t7.description + "</p></div></body></html>";
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/build/client.manifest.mjs
var client_manifest_exports = {};
__export(client_manifest_exports, {
  default: () => e2
});
var e2;
var init_client_manifest = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/build/client.manifest.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    e2 = { "../node_modules/.pnpm/nuxt@3.12.2_@opentelemetry+api@1.9.0_eslint@9.5.0_typescript@5.5.2_vite@5.3.1_vue-tsc@2.0.22/node_modules/nuxt/dist/app/components/error-404.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "DKRany1Z.js", name: "error-404", src: "../node_modules/.pnpm/nuxt@3.12.2_@opentelemetry+api@1.9.0_eslint@9.5.0_typescript@5.5.2_vite@5.3.1_vue-tsc@2.0.22/node_modules/nuxt/dist/app/components/error-404.vue", isDynamicEntry: true, imports: ["../node_modules/.pnpm/nuxt@3.12.2_@opentelemetry+api@1.9.0_eslint@9.5.0_typescript@5.5.2_vite@5.3.1_vue-tsc@2.0.22/node_modules/nuxt/dist/app/entry.js", "_DlAUqK2U.js"], css: [] }, "error-404.DKsLBFUu.css": { file: "error-404.DKsLBFUu.css", resourceType: "style", prefetch: true, preload: true }, "../node_modules/.pnpm/nuxt@3.12.2_@opentelemetry+api@1.9.0_eslint@9.5.0_typescript@5.5.2_vite@5.3.1_vue-tsc@2.0.22/node_modules/nuxt/dist/app/components/error-500.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "CdsKhjXL.js", name: "error-500", src: "../node_modules/.pnpm/nuxt@3.12.2_@opentelemetry+api@1.9.0_eslint@9.5.0_typescript@5.5.2_vite@5.3.1_vue-tsc@2.0.22/node_modules/nuxt/dist/app/components/error-500.vue", isDynamicEntry: true, imports: ["../node_modules/.pnpm/nuxt@3.12.2_@opentelemetry+api@1.9.0_eslint@9.5.0_typescript@5.5.2_vite@5.3.1_vue-tsc@2.0.22/node_modules/nuxt/dist/app/entry.js", "_DlAUqK2U.js"], css: [] }, "error-500.f8jQXIot.css": { file: "error-500.f8jQXIot.css", resourceType: "style", prefetch: true, preload: true }, "../node_modules/.pnpm/nuxt@3.12.2_@opentelemetry+api@1.9.0_eslint@9.5.0_typescript@5.5.2_vite@5.3.1_vue-tsc@2.0.22/node_modules/nuxt/dist/app/entry.js": { resourceType: "script", module: true, prefetch: true, preload: true, file: "D135UVqM.js", name: "entry", src: "../node_modules/.pnpm/nuxt@3.12.2_@opentelemetry+api@1.9.0_eslint@9.5.0_typescript@5.5.2_vite@5.3.1_vue-tsc@2.0.22/node_modules/nuxt/dist/app/entry.js", isEntry: true, dynamicImports: ["../node_modules/.pnpm/nuxt@3.12.2_@opentelemetry+api@1.9.0_eslint@9.5.0_typescript@5.5.2_vite@5.3.1_vue-tsc@2.0.22/node_modules/nuxt/dist/app/components/error-404.vue", "../node_modules/.pnpm/nuxt@3.12.2_@opentelemetry+api@1.9.0_eslint@9.5.0_typescript@5.5.2_vite@5.3.1_vue-tsc@2.0.22/node_modules/nuxt/dist/app/components/error-500.vue"] }, "_DlAUqK2U.js": { resourceType: "script", module: true, prefetch: true, preload: true, file: "DlAUqK2U.js", name: "_plugin-vue_export-helper" }, "pages/index.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "BJZjIk6h.js", name: "index", src: "pages/index.vue", isDynamicEntry: true, imports: ["../node_modules/.pnpm/nuxt@3.12.2_@opentelemetry+api@1.9.0_eslint@9.5.0_typescript@5.5.2_vite@5.3.1_vue-tsc@2.0.22/node_modules/nuxt/dist/app/entry.js", "_DlAUqK2U.js"], css: ["index.BNBMb5Dg.css"] }, "index.BNBMb5Dg.css": { file: "index.BNBMb5Dg.css", resourceType: "style", prefetch: true, preload: true } };
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/build/RedirectsPanel-styles-1.mjs-CGm7kT_1.mjs
var d;
var init_RedirectsPanel_styles_1_mjs_CGm7kT_1 = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/build/RedirectsPanel-styles-1.mjs-CGm7kT_1.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    d = ".redirect-container[data-v-a7d0d628]{background-color:#f9f9f9;border:1px solid #ccc;border-radius:10px;font-family:Arial,sans-serif;margin:20px;padding:20px}.redirect-form[data-v-a7d0d628]{display:flex;flex-direction:column}.redirect-textarea[data-v-a7d0d628]{border:1px solid #ccc;border-radius:5px;max-width:500px;padding:10px;width:100%}.save-button[data-v-a7d0d628]{background-color:#007bff;border:none;border-radius:5px;color:#fff;cursor:pointer;margin-top:10px;padding:10px 20px}.save-button[data-v-a7d0d628]:hover{background-color:#0056b3}";
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/build/RedirectsPanel-styles.CC2qrrpd.mjs
var RedirectsPanel_styles_CC2qrrpd_exports = {};
__export(RedirectsPanel_styles_CC2qrrpd_exports, {
  default: () => e3
});
var e3;
var init_RedirectsPanel_styles_CC2qrrpd = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/build/RedirectsPanel-styles.CC2qrrpd.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_RedirectsPanel_styles_1_mjs_CGm7kT_1();
    e3 = [d, d];
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/build/MessagesPanel-styles-1.mjs-B_33QNAT.mjs
var a;
var init_MessagesPanel_styles_1_mjs_B_33QNAT = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/build/MessagesPanel-styles-1.mjs-B_33QNAT.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    a = ".message-container[data-v-d98c083c]{background-color:#f9f9f9;border:1px solid #ccc;border-radius:10px;font-family:Arial,sans-serif;margin:20px;padding:20px}.message-form[data-v-d98c083c]{align-items:center;display:flex;margin-bottom:20px}.message-input[data-v-d98c083c]{border:1px solid #ccc;border-radius:5px;flex-grow:1;margin-right:10px;padding:10px}.send-button[data-v-d98c083c]{background-color:#007bff;border:none;border-radius:5px;color:#fff;cursor:pointer;padding:10px 20px}.send-button[data-v-d98c083c]:hover{background-color:#0056b3}.messages-list[data-v-d98c083c]{max-height:300px;overflow-y:auto;padding-right:10px}.message-item[data-v-d98c083c]{border-bottom:1px solid #ccc;padding:10px}.no-messages[data-v-d98c083c]{color:#888;font-style:italic}";
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/build/MessagesPanel-styles.tGgO7BMA.mjs
var MessagesPanel_styles_tGgO7BMA_exports = {};
__export(MessagesPanel_styles_tGgO7BMA_exports, {
  default: () => e4
});
var e4;
var init_MessagesPanel_styles_tGgO7BMA = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/build/MessagesPanel-styles.tGgO7BMA.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_MessagesPanel_styles_1_mjs_B_33QNAT();
    e4 = [a, a];
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/build/error-404-styles-1.mjs-oe0_7FFH.mjs
var e5;
var init_error_404_styles_1_mjs_oe0_7FFH = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/build/error-404-styles-1.mjs-oe0_7FFH.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    e5 = '.spotlight[data-v-11ded682]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-30vh;filter:blur(20vh);height:40vh}.gradient-border[data-v-11ded682]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative}@media (prefers-color-scheme:light){.gradient-border[data-v-11ded682]{background-color:hsla(0,0%,100%,.3)}.gradient-border[data-v-11ded682]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-11ded682]{background-color:hsla(0,0%,8%,.3)}.gradient-border[data-v-11ded682]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}.gradient-border[data-v-11ded682]:before{background-size:400% auto;border-radius:.5rem;bottom:0;content:"";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-11ded682]:hover:before{background-position:-50% 0;opacity:1}.fixed[data-v-11ded682]{position:fixed}.left-0[data-v-11ded682]{left:0}.right-0[data-v-11ded682]{right:0}.z-10[data-v-11ded682]{z-index:10}.z-20[data-v-11ded682]{z-index:20}.grid[data-v-11ded682]{display:grid}.mb-16[data-v-11ded682]{margin-bottom:4rem}.mb-8[data-v-11ded682]{margin-bottom:2rem}.max-w-520px[data-v-11ded682]{max-width:520px}.min-h-screen[data-v-11ded682]{min-height:100vh}.w-full[data-v-11ded682]{width:100%}.flex[data-v-11ded682]{display:flex}.cursor-pointer[data-v-11ded682]{cursor:pointer}.place-content-center[data-v-11ded682]{place-content:center}.items-center[data-v-11ded682]{align-items:center}.justify-center[data-v-11ded682]{justify-content:center}.overflow-hidden[data-v-11ded682]{overflow:hidden}.bg-white[data-v-11ded682]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-4[data-v-11ded682]{padding-left:1rem;padding-right:1rem}.px-8[data-v-11ded682]{padding-left:2rem;padding-right:2rem}.py-2[data-v-11ded682]{padding-bottom:.5rem;padding-top:.5rem}.text-center[data-v-11ded682]{text-align:center}.text-8xl[data-v-11ded682]{font-size:6rem;line-height:1}.text-xl[data-v-11ded682]{font-size:1.25rem;line-height:1.75rem}.text-black[data-v-11ded682]{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light[data-v-11ded682]{font-weight:300}.font-medium[data-v-11ded682]{font-weight:500}.leading-tight[data-v-11ded682]{line-height:1.25}.font-sans[data-v-11ded682]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased[data-v-11ded682]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-11ded682]{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white[data-v-11ded682]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:px-0[data-v-11ded682]{padding-left:0;padding-right:0}.sm\\:px-6[data-v-11ded682]{padding-left:1.5rem;padding-right:1.5rem}.sm\\:py-3[data-v-11ded682]{padding-bottom:.75rem;padding-top:.75rem}.sm\\:text-4xl[data-v-11ded682]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-11ded682]{font-size:1.25rem;line-height:1.75rem}}';
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/build/error-404-styles.Dd5VdaV1.mjs
var error_404_styles_Dd5VdaV1_exports = {};
__export(error_404_styles_Dd5VdaV1_exports, {
  default: () => e6
});
var e6;
var init_error_404_styles_Dd5VdaV1 = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/build/error-404-styles.Dd5VdaV1.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_error_404_styles_1_mjs_oe0_7FFH();
    e6 = [e5, e5];
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/build/error-500-styles-1.mjs-CrddIVam.mjs
var t;
var init_error_500_styles_1_mjs_CrddIVam = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/build/error-500-styles-1.mjs-CrddIVam.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    t = ".spotlight[data-v-9d5b82de]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}.fixed[data-v-9d5b82de]{position:fixed}.-bottom-1\\/2[data-v-9d5b82de]{bottom:-50%}.left-0[data-v-9d5b82de]{left:0}.right-0[data-v-9d5b82de]{right:0}.grid[data-v-9d5b82de]{display:grid}.mb-16[data-v-9d5b82de]{margin-bottom:4rem}.mb-8[data-v-9d5b82de]{margin-bottom:2rem}.h-1\\/2[data-v-9d5b82de]{height:50%}.max-w-520px[data-v-9d5b82de]{max-width:520px}.min-h-screen[data-v-9d5b82de]{min-height:100vh}.place-content-center[data-v-9d5b82de]{place-content:center}.overflow-hidden[data-v-9d5b82de]{overflow:hidden}.bg-white[data-v-9d5b82de]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-8[data-v-9d5b82de]{padding-left:2rem;padding-right:2rem}.text-center[data-v-9d5b82de]{text-align:center}.text-8xl[data-v-9d5b82de]{font-size:6rem;line-height:1}.text-xl[data-v-9d5b82de]{font-size:1.25rem;line-height:1.75rem}.text-black[data-v-9d5b82de]{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light[data-v-9d5b82de]{font-weight:300}.font-medium[data-v-9d5b82de]{font-weight:500}.leading-tight[data-v-9d5b82de]{line-height:1.25}.font-sans[data-v-9d5b82de]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased[data-v-9d5b82de]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-9d5b82de]{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white[data-v-9d5b82de]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:px-0[data-v-9d5b82de]{padding-left:0;padding-right:0}.sm\\:text-4xl[data-v-9d5b82de]{font-size:2.25rem;line-height:2.5rem}}";
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/build/error-500-styles.DdbSKJOU.mjs
var error_500_styles_DdbSKJOU_exports = {};
__export(error_500_styles_DdbSKJOU_exports, {
  default: () => s
});
var s;
var init_error_500_styles_DdbSKJOU = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/build/error-500-styles.DdbSKJOU.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_error_500_styles_1_mjs_CrddIVam();
    s = [t, t];
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/build/RedirectsPanel-styles.BYHUPE_c.mjs
var RedirectsPanel_styles_BYHUPE_c_exports = {};
__export(RedirectsPanel_styles_BYHUPE_c_exports, {
  default: () => e7
});
var e7;
var init_RedirectsPanel_styles_BYHUPE_c = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/build/RedirectsPanel-styles.BYHUPE_c.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_RedirectsPanel_styles_1_mjs_CGm7kT_1();
    e7 = [d];
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/build/MessagesPanel-styles.S8HN65wa.mjs
var MessagesPanel_styles_S8HN65wa_exports = {};
__export(MessagesPanel_styles_S8HN65wa_exports, {
  default: () => e8
});
var e8;
var init_MessagesPanel_styles_S8HN65wa = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/build/MessagesPanel-styles.S8HN65wa.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_MessagesPanel_styles_1_mjs_B_33QNAT();
    e8 = [a];
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/build/ImageGallery-styles-1.mjs-BM_X48fA.mjs
var a2;
var init_ImageGallery_styles_1_mjs_BM_X48fA = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/build/ImageGallery-styles-1.mjs-BM_X48fA.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    a2 = ".image-uploader[data-v-57088523]{background-color:#f9f9f9;border:1px solid #ccc;border-radius:10px;font-family:Arial,sans-serif;margin:20px;padding:20px}.upload-form[data-v-57088523]{margin-bottom:20px}.upload-label[data-v-57088523]{display:flex;flex-direction:column;margin-bottom:10px}.upload-input[data-v-57088523]{margin-top:5px}.upload-button[data-v-57088523]{background-color:#007bff;border:none;border-radius:5px;color:#fff;cursor:pointer;padding:10px 20px}.upload-button[data-v-57088523]:hover{background-color:#0056b3}.images-container[data-v-57088523]{display:flex;flex-wrap:wrap;gap:20px}.uploaded-image[data-v-57088523]{border:1px solid #ccc;border-radius:10px;cursor:pointer;transition:transform .2s}.uploaded-image[data-v-57088523]:hover{transform:scale(1.05)}";
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/build/ImageGallery-styles.Dg1MvwNX.mjs
var ImageGallery_styles_Dg1MvwNX_exports = {};
__export(ImageGallery_styles_Dg1MvwNX_exports, {
  default: () => a3
});
var a3;
var init_ImageGallery_styles_Dg1MvwNX = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/build/ImageGallery-styles.Dg1MvwNX.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_ImageGallery_styles_1_mjs_BM_X48fA();
    a3 = [a2, a2];
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/build/error-404-styles.DUV3vVQU.mjs
var error_404_styles_DUV3vVQU_exports = {};
__export(error_404_styles_DUV3vVQU_exports, {
  default: () => e9
});
var e9;
var init_error_404_styles_DUV3vVQU = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/build/error-404-styles.DUV3vVQU.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_error_404_styles_1_mjs_oe0_7FFH();
    e9 = [e5];
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/build/error-500-styles.YK1d3zTw.mjs
var error_500_styles_YK1d3zTw_exports = {};
__export(error_500_styles_YK1d3zTw_exports, {
  default: () => s2
});
var s2;
var init_error_500_styles_YK1d3zTw = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/build/error-500-styles.YK1d3zTw.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_error_500_styles_1_mjs_CrddIVam();
    s2 = [t];
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/build/ImageGallery-styles.BUw3Dzvj.mjs
var ImageGallery_styles_BUw3Dzvj_exports = {};
__export(ImageGallery_styles_BUw3Dzvj_exports, {
  default: () => a4
});
var a4;
var init_ImageGallery_styles_BUw3Dzvj = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/build/ImageGallery-styles.BUw3Dzvj.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_ImageGallery_styles_1_mjs_BM_X48fA();
    a4 = [a2];
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/build/styles.mjs
var styles_exports = {};
__export(styles_exports, {
  default: () => e10
});
var interopDefault, e10;
var init_styles = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/build/styles.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    interopDefault = (e20) => e20.default || e20 || [];
    e10 = { "components/RedirectsPanel.vue": () => Promise.resolve().then(() => (init_RedirectsPanel_styles_CC2qrrpd(), RedirectsPanel_styles_CC2qrrpd_exports)).then(interopDefault), "components/MessagesPanel.vue": () => Promise.resolve().then(() => (init_MessagesPanel_styles_tGgO7BMA(), MessagesPanel_styles_tGgO7BMA_exports)).then(interopDefault), "../node_modules/.pnpm/nuxt@3.12.2_@opentelemetry+api@1.9.0_eslint@9.5.0_typescript@5.5.2_vite@5.3.1_vue-tsc@2.0.22/node_modules/nuxt/dist/app/components/error-404.vue": () => Promise.resolve().then(() => (init_error_404_styles_Dd5VdaV1(), error_404_styles_Dd5VdaV1_exports)).then(interopDefault), "../node_modules/.pnpm/nuxt@3.12.2_@opentelemetry+api@1.9.0_eslint@9.5.0_typescript@5.5.2_vite@5.3.1_vue-tsc@2.0.22/node_modules/nuxt/dist/app/components/error-500.vue": () => Promise.resolve().then(() => (init_error_500_styles_DdbSKJOU(), error_500_styles_DdbSKJOU_exports)).then(interopDefault), "components/RedirectsPanel.vue?vue&type=style&index=0&scoped=a7d0d628&lang.css": () => Promise.resolve().then(() => (init_RedirectsPanel_styles_BYHUPE_c(), RedirectsPanel_styles_BYHUPE_c_exports)).then(interopDefault), "components/MessagesPanel.vue?vue&type=style&index=0&scoped=d98c083c&lang.css": () => Promise.resolve().then(() => (init_MessagesPanel_styles_S8HN65wa(), MessagesPanel_styles_S8HN65wa_exports)).then(interopDefault), "components/ImageGallery.vue": () => Promise.resolve().then(() => (init_ImageGallery_styles_Dg1MvwNX(), ImageGallery_styles_Dg1MvwNX_exports)).then(interopDefault), "../node_modules/.pnpm/nuxt@3.12.2_@opentelemetry+api@1.9.0_eslint@9.5.0_typescript@5.5.2_vite@5.3.1_vue-tsc@2.0.22/node_modules/nuxt/dist/app/components/error-404.vue?vue&type=style&index=0&scoped=11ded682&lang.css": () => Promise.resolve().then(() => (init_error_404_styles_DUV3vVQU(), error_404_styles_DUV3vVQU_exports)).then(interopDefault), "../node_modules/.pnpm/nuxt@3.12.2_@opentelemetry+api@1.9.0_eslint@9.5.0_typescript@5.5.2_vite@5.3.1_vue-tsc@2.0.22/node_modules/nuxt/dist/app/components/error-500.vue?vue&type=style&index=0&scoped=9d5b82de&lang.css": () => Promise.resolve().then(() => (init_error_500_styles_YK1d3zTw(), error_500_styles_YK1d3zTw_exports)).then(interopDefault), "components/ImageGallery.vue?vue&type=style&index=0&scoped=57088523&lang.css": () => Promise.resolve().then(() => (init_ImageGallery_styles_BUw3Dzvj(), ImageGallery_styles_BUw3Dzvj_exports)).then(interopDefault) };
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/build/_plugin-vue_export-helper-1tPrXgE0.mjs
var _export_sfc;
var init_plugin_vue_export_helper_1tPrXgE0 = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/build/_plugin-vue_export-helper-1tPrXgE0.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    _export_sfc = (o13, t7) => {
      const c5 = o13.__vccOpts || o13;
      for (const [o14, s8] of t7)
        c5[o14] = s8;
      return c5;
    };
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/build/index-3gsi4ZiL.mjs
var index_3gsi4ZiL_exports = {};
__export(index_3gsi4ZiL_exports, {
  default: () => q
});
function useRequestFetch() {
  var e20;
  return (null == (e20 = function(e21 = useNuxtApp()) {
    var a7;
    return null == (a7 = e21.ssrContext) ? void 0 : a7.event;
  }()) ? void 0 : e20.$fetch) || globalThis.$fetch;
}
function useAsyncData(...e20) {
  var a7, r5, o13, l4, d5, c5, i11, p4, m10;
  const f3 = "string" == typeof e20[e20.length - 1] ? e20.pop() : void 0;
  "string" != typeof e20[0] && e20.unshift(f3);
  let [g3, y5, h7 = {}] = e20;
  if ("string" != typeof g3)
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  if ("function" != typeof y5)
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  const _5 = useNuxtApp(), P5 = y5;
  h7.server = null == (a7 = h7.server) || a7, h7.default = null != (r5 = h7.default) ? r5 : () => Ue.value, h7.getCachedData = null != (o13 = h7.getCachedData) ? o13 : () => _5.isHydrating ? _5.payload.data[g3] : _5.static.data[g3], h7.lazy = null != (l4 = h7.lazy) && l4, h7.immediate = null == (d5 = h7.immediate) || d5, h7.deep = null != (c5 = h7.deep) ? c5 : Ue.deep, h7.dedupe = null != (i11 = h7.dedupe) ? i11 : "cancel";
  const hasCachedData = () => null != h7.getCachedData(g3, _5);
  if (!_5._asyncData[g3] || !h7.immediate) {
    null != (m10 = _5.payload._errors)[g3] || (m10[g3] = Ue.errorValue);
    const e21 = h7.deep ? ref : shallowRef;
    _5._asyncData[g3] = { data: e21(null != (p4 = h7.getCachedData(g3, _5)) ? p4 : h7.default()), pending: ref(!hasCachedData()), error: toRef(_5.payload._errors, g3), status: ref("idle"), _default: h7.default };
  }
  const $5 = { ..._5._asyncData[g3] };
  delete $5._default, $5.refresh = $5.execute = (e21 = {}) => {
    var a8;
    if (_5._asyncDataPromises[g3]) {
      if (isDefer(null != (a8 = e21.dedupe) ? a8 : h7.dedupe))
        return _5._asyncDataPromises[g3];
      _5._asyncDataPromises[g3].cancelled = true;
    }
    if ((e21._initial || _5.isHydrating && false !== e21._initial) && hasCachedData())
      return Promise.resolve(h7.getCachedData(g3, _5));
    $5.pending.value = true, $5.status.value = "pending";
    const t7 = new Promise((e22, a9) => {
      try {
        e22(P5(_5));
      } catch (e23) {
        a9(e23);
      }
    }).then(async (e22) => {
      if (t7.cancelled)
        return _5._asyncDataPromises[g3];
      let a9 = e22;
      h7.transform && (a9 = await h7.transform(e22)), h7.pick && (a9 = function(e23, a10) {
        const t8 = {};
        for (const s8 of a10)
          t8[s8] = e23[s8];
        return t8;
      }(a9, h7.pick)), _5.payload.data[g3] = a9, $5.data.value = a9, $5.error.value = Ue.errorValue, $5.status.value = "success";
    }).catch((e22) => {
      if (t7.cancelled)
        return _5._asyncDataPromises[g3];
      $5.error.value = createError(e22), $5.data.value = unref(h7.default()), $5.status.value = "error";
    }).finally(() => {
      t7.cancelled || ($5.pending.value = false, delete _5._asyncDataPromises[g3]);
    });
    return _5._asyncDataPromises[g3] = t7, _5._asyncDataPromises[g3];
  }, $5.clear = () => function(e21, a8) {
    a8 in e21.payload.data && (e21.payload.data[a8] = void 0);
    a8 in e21.payload._errors && (e21.payload._errors[a8] = Ue.errorValue);
    e21._asyncData[a8] && (e21._asyncData[a8].data.value = e21._asyncData[a8]._default(), e21._asyncData[a8].error.value = Ue.errorValue, e21._asyncData[a8].pending.value = false, e21._asyncData[a8].status.value = "idle");
    a8 in e21._asyncDataPromises && (e21._asyncDataPromises[a8].cancelled = true, e21._asyncDataPromises[a8] = void 0);
  }(_5, g3);
  if (false !== h7.server && _5.payload.serverRendered && h7.immediate) {
    const e21 = $5.refresh({ _initial: true });
    getCurrentInstance() ? Ze(() => e21) : _5.hook("app:created", async () => {
      await e21;
    });
  }
  const R5 = Promise.resolve(_5._asyncDataPromises[g3]).then(() => $5);
  return Object.assign(R5, $5), R5;
}
function useFetch(t7, s8, n4) {
  const [r5 = {}, o13] = "string" == typeof s8 ? [{}, s8] : [s8, n4], l4 = computed(() => toValue(t7)), d5 = r5.key || hash([o13, "string" == typeof l4.value ? l4.value : "", ...generateOptionSegments(r5)]);
  if (!d5 || "string" != typeof d5)
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + d5);
  if (!t7)
    throw new Error("[nuxt] [useFetch] request is missing.");
  const c5 = d5 === o13 ? "$f" + d5 : d5;
  if (!r5.baseURL && "string" == typeof l4.value && "/" === l4.value[0] && "/" === l4.value[1])
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  const { server: i11, lazy: u5, default: p4, transform: m10, pick: v4, watch: f3, immediate: g3, getCachedData: b5, deep: D4, dedupe: x4, ...w6 } = r5, P5 = reactive({ ...Ge, ...w6, cache: "boolean" == typeof r5.cache ? void 0 : r5.cache });
  let $5;
  return useAsyncData(c5, () => {
    var e20;
    null == (e20 = null == $5 ? void 0 : $5.abort) || e20.call($5), $5 = "undefined" != typeof AbortController ? new AbortController() : {};
    const a7 = toValue(r5.timeout);
    let t8;
    a7 && (t8 = setTimeout(() => $5.abort(), a7), $5.signal.onabort = () => clearTimeout(t8));
    let s9 = r5.$fetch || globalThis.$fetch;
    if (!r5.$fetch) {
      "string" == typeof l4.value && "/" === l4.value[0] && (!toValue(r5.baseURL) || "/" === toValue(r5.baseURL)[0]) && (s9 = useRequestFetch());
    }
    return s9(l4.value, { signal: $5.signal, ...P5 }).finally(() => {
      clearTimeout(t8);
    });
  }, { server: i11, lazy: u5, default: p4, transform: m10, pick: v4, immediate: g3, getCachedData: b5, deep: D4, dedupe: x4, watch: false === f3 ? [] : [P5, l4, ...f3 || []] });
}
function generateOptionSegments(e20) {
  var a7;
  const t7 = [(null == (a7 = toValue(e20.method)) ? void 0 : a7.toUpperCase()) || "GET", toValue(e20.baseURL)];
  for (const a8 of [e20.params || e20.query]) {
    const e21 = toValue(a8);
    if (!e21)
      continue;
    const s8 = {};
    for (const [a9, t8] of Object.entries(e21))
      s8[toValue(a9)] = toValue(t8);
    t7.push(s8);
  }
  return t7;
}
var isDefer, P, $, R, C, j, T, F, I, S, k, U, q;
var init_index_3gsi4ZiL = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/build/index-3gsi4ZiL.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_server();
    init_plugin_vue_export_helper_1tPrXgE0();
    init_renderer();
    isDefer = (e20) => "defer" === e20 || false === e20;
    P = defineComponent({ __name: "ImageGallery", __ssrInlineRender: true, async setup(e20) {
      let a7, t7;
      const { data: s8, refresh: n4 } = ([a7, t7] = withAsyncContext(() => useFetch("/api/images", "$Nxggt4fPsR")), a7 = await a7, t7(), a7);
      return (e21, a8, t8, n5) => {
        var r5, o13;
        a8(`<div${ssrRenderAttrs(mergeProps({ class: "image-uploader" }, n5))} data-v-57088523><h3 data-v-57088523>Images</h3><form class="upload-form" data-v-57088523><label class="upload-label" data-v-57088523>Upload an image: <input type="file" name="image" accept="image/jpg,image/png" class="upload-input" data-v-57088523></label><button type="submit" class="upload-button" data-v-57088523>Upload</button></form><div class="images-container" data-v-57088523>`), (null == (r5 = unref(s8)) ? void 0 : r5.length) ? (a8("<p data-v-57088523><!--[-->"), ssrRenderList(unref(s8), (e22) => {
          a8(`<img width="200"${ssrRenderAttr("src", `/images/${e22.pathname}`)}${ssrRenderAttr("alt", e22.pathname)} class="uploaded-image" data-v-57088523>`);
        }), a8("<!--]--></p>")) : a8("<!---->"), (null == (o13 = unref(s8)) ? void 0 : o13.length) ? a8("<p data-v-57088523><i data-v-57088523>Tip: delete an image by double-clicking on it.</i></p>") : a8("<!---->"), a8("</div></div>");
      };
    } });
    $ = P.setup;
    P.setup = (e20, a7) => {
      const t7 = useSSRContext();
      return (t7.modules || (t7.modules = /* @__PURE__ */ new Set())).add("components/ImageGallery.vue"), $ ? $(e20, a7) : void 0;
    };
    R = _export_sfc(P, [["__scopeId", "data-v-57088523"]]);
    C = defineComponent({ __name: "RedirectsPanel", __ssrInlineRender: true, async setup(e20) {
      let a7, t7;
      const { data: s8, refresh: n4 } = ([a7, t7] = withAsyncContext(() => useFetch("/api/redirects", { transform: (e21) => Object.entries(e21).map(([e22, a8]) => `${e22} ${a8}`).join("\n") }, "$qudnCtMtUq")), a7 = await a7, t7(), a7);
      return (e21, a8, t8, n5) => {
        a8(`<div${ssrRenderAttrs(mergeProps({ class: "redirect-container" }, n5))} data-v-a7d0d628><h3 data-v-a7d0d628>Server redirects</h3><form class="redirect-form" data-v-a7d0d628><p data-v-a7d0d628><textarea rows="6" placeholder="/from /to (one redirect per line)" class="redirect-textarea" data-v-a7d0d628>${ssrInterpolate(unref(s8))}</textarea></p><button type="submit" class="save-button" data-v-a7d0d628>Save redirects</button></form></div>`);
      };
    } });
    j = C.setup;
    C.setup = (e20, a7) => {
      const t7 = useSSRContext();
      return (t7.modules || (t7.modules = /* @__PURE__ */ new Set())).add("components/RedirectsPanel.vue"), j ? j(e20, a7) : void 0;
    };
    T = _export_sfc(C, [["__scopeId", "data-v-a7d0d628"]]);
    F = defineComponent({ __name: "MessagesPanel", __ssrInlineRender: true, async setup(e20) {
      let a7, t7;
      const { data: s8, refresh: n4 } = ([a7, t7] = withAsyncContext(() => useFetch("/api/messages", "$0AMhPWytjY")), a7 = await a7, t7(), a7), r5 = ref("");
      return (e21, a8, t8, n5) => {
        var o13;
        a8(`<div${ssrRenderAttrs(mergeProps({ class: "message-container" }, n5))} data-v-d98c083c><h3 data-v-d98c083c>Messages</h3><form class="message-form" data-v-d98c083c><input${ssrRenderAttr("value", unref(r5))} placeholder="Type a message" class="message-input" data-v-d98c083c><button type="submit" class="send-button" data-v-d98c083c>Send</button></form><div class="messages-list" data-v-d98c083c><!--[-->`), ssrRenderList(unref(s8), (e22) => {
          a8(`<p class="message-item" data-v-d98c083c>${ssrInterpolate(e22.text)} - ${ssrInterpolate(e22.created_at ? new Date(e22.created_at).toLocaleString("fr-FR") : "")}</p>`);
        }), a8("<!--]-->"), (null == (o13 = unref(s8)) ? void 0 : o13.length) ? a8("<!---->") : a8('<p class="no-messages" data-v-d98c083c> No messages yet </p>'), a8("</div></div>");
      };
    } });
    I = F.setup;
    F.setup = (e20, a7) => {
      const t7 = useSSRContext();
      return (t7.modules || (t7.modules = /* @__PURE__ */ new Set())).add("components/MessagesPanel.vue"), I ? I(e20, a7) : void 0;
    };
    S = _export_sfc(F, [["__scopeId", "data-v-d98c083c"]]);
    k = {};
    U = k.setup;
    k.setup = (e20, a7) => {
      const t7 = useSSRContext();
      return (t7.modules || (t7.modules = /* @__PURE__ */ new Set())).add("pages/index.vue"), U ? U(e20, a7) : void 0;
    };
    q = _export_sfc(k, [["ssrRender", function(e20, a7, t7, s8) {
      const n4 = R, r5 = T, o13 = S;
      a7(`<main${ssrRenderAttrs(s8)}>`), a7(ssrRenderComponent(n4, null, null, t7)), a7(ssrRenderComponent(r5, null, null, t7)), a7(ssrRenderComponent(o13, null, null, t7)), a7("</main>");
    }]]);
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/build/error-404-DIaoKMev.mjs
var error_404_DIaoKMev_exports = {};
__export(error_404_DIaoKMev_exports, {
  default: () => A
});
function defineNuxtLink(n4) {
  const i11 = n4.componentName || "NuxtLink";
  function resolveTrailingSlashBehavior(e20, t7) {
    if (!e20 || "append" !== n4.trailingSlash && "remove" !== n4.trailingSlash)
      return e20;
    if ("string" == typeof e20)
      return applyTrailingSlashBehavior(e20, n4.trailingSlash);
    const a7 = "path" in e20 && void 0 !== e20.path ? e20.path : t7(e20).path;
    return { ...e20, name: void 0, path: applyTrailingSlashBehavior(a7, n4.trailingSlash) };
  }
  function useNuxtLink(e20) {
    var n5, i12, o13;
    const u5 = useRouter(), c5 = useRuntimeConfig(), p4 = computed(() => !!e20.target && "_self" !== e20.target), v4 = computed(() => {
      const a7 = e20.to || e20.href || "";
      return "string" == typeof a7 && hasProtocol(a7, { acceptRelative: true });
    }), f3 = resolveComponent("RouterLink"), h7 = f3 && "string" != typeof f3 ? f3.useLink : void 0, g3 = computed(() => {
      if (e20.external)
        return true;
      const t7 = e20.to || e20.href || "";
      return "object" != typeof t7 && ("" === t7 || v4.value);
    }), m10 = computed(() => {
      const t7 = e20.to || e20.href || "";
      return g3.value ? t7 : resolveTrailingSlashBehavior(t7, u5.resolve);
    }), x4 = g3.value || null == h7 ? void 0 : h7({ ...e20, to: m10 }), b5 = computed(() => {
      var e21, t7;
      if (!m10.value || v4.value)
        return m10.value;
      if (g3.value) {
        return resolveTrailingSlashBehavior("object" == typeof m10.value ? function(e22) {
          return withQuery(e22.path || "", e22.query || {}) + (e22.hash ? "#" + e22.hash : "");
        }(m10.value) : m10.value, u5.resolve);
      }
      return "object" == typeof m10.value ? null != (e21 = null == (t7 = u5.resolve(m10.value)) ? void 0 : t7.href) ? e21 : null : resolveTrailingSlashBehavior(joinURL(c5.app.baseURL, m10.value), u5.resolve);
    });
    return { to: m10, hasTarget: p4, isAbsoluteUrl: v4, isExternal: g3, href: b5, isActive: null != (n5 = null == x4 ? void 0 : x4.isActive) ? n5 : computed(() => m10.value === u5.currentRoute.value.path), isExactActive: null != (i12 = null == x4 ? void 0 : x4.isExactActive) ? i12 : computed(() => m10.value === u5.currentRoute.value.path), route: null != (o13 = null == x4 ? void 0 : x4.route) ? o13 : computed(() => u5.resolve(m10.value)), async navigate() {
      await navigateTo(b5.value, { replace: e20.replace, external: g3.value || p4.value });
    } };
  }
  return defineComponent({ name: i11, props: { to: { type: [String, Object], default: void 0, required: false }, href: { type: [String, Object], default: void 0, required: false }, target: { type: String, default: void 0, required: false }, rel: { type: String, default: void 0, required: false }, noRel: { type: Boolean, default: void 0, required: false }, prefetch: { type: Boolean, default: void 0, required: false }, noPrefetch: { type: Boolean, default: void 0, required: false }, activeClass: { type: String, default: void 0, required: false }, exactActiveClass: { type: String, default: void 0, required: false }, prefetchedClass: { type: String, default: void 0, required: false }, replace: { type: Boolean, default: void 0, required: false }, ariaCurrentValue: { type: String, default: void 0, required: false }, external: { type: Boolean, default: void 0, required: false }, custom: { type: Boolean, default: void 0, required: false } }, useLink: useNuxtLink, setup(t7, { slots: a7 }) {
    useRouter();
    const { to: r5, href: i12, navigate: o13, isExternal: u5, hasTarget: l4, isAbsoluteUrl: d5 } = useNuxtLink(t7), c5 = ref(false);
    return () => {
      var s8;
      if (!u5.value && !l4.value) {
        const e20 = { ref: void 0, to: r5.value, activeClass: t7.activeClass || n4.activeClass, exactActiveClass: t7.exactActiveClass || n4.exactActiveClass, replace: t7.replace, ariaCurrentValue: t7.ariaCurrentValue, custom: t7.custom };
        return t7.custom || (c5.value && (e20.class = t7.prefetchedClass || n4.prefetchedClass), e20.rel = t7.rel || void 0), h(resolveComponent("RouterLink"), e20, a7.default);
      }
      const p4 = t7.target || null, v4 = ((...e20) => e20.find((e21) => void 0 !== e21))(t7.noRel ? "" : t7.rel, n4.externalRelAttribute, d5.value || l4.value ? "noopener noreferrer" : "") || null;
      return t7.custom ? a7.default ? a7.default({ href: i12.value, navigate: o13, get route() {
        if (!i12.value)
          return;
        const t8 = new URL(i12.value, "http://localhost");
        return { path: t8.pathname, fullPath: t8.pathname, get query() {
          return parseQuery(t8.search);
        }, hash: t8.hash, params: {}, name: void 0, matched: [], redirectedFrom: void 0, meta: {}, href: i12.value };
      }, rel: v4, target: p4, isExternal: u5.value || l4.value, isActive: false, isExactActive: false }) : null : h("a", { ref: void 0, href: i12.value || null, rel: v4, target: p4 }, null == (s8 = a7.default) ? void 0 : s8.call(a7));
    };
  } });
}
function applyTrailingSlashBehavior(e20, a7) {
  const r5 = "append" === a7 ? withTrailingSlash : withoutTrailingSlash;
  return hasProtocol(e20) && !e20.startsWith("http") ? e20 : r5(e20, true);
}
var _, q2, j2, A;
var init_error_404_DIaoKMev = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/build/error-404-DIaoKMev.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_server();
    init_plugin_vue_export_helper_1tPrXgE0();
    init_renderer();
    _ = defineNuxtLink(We);
    q2 = { __name: "error-404", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, version: { type: String, default: "" }, statusCode: { type: Number, default: 404 }, statusMessage: { type: String, default: "Not Found" }, description: { type: String, default: "Sorry, the page you are looking for could not be found." }, backHome: { type: String, default: "Go back home" } }, setup(e20) {
      const t7 = e20;
      return useHead({ title: `${t7.statusCode} - ${t7.statusMessage} | ${t7.appName}`, script: [], style: [{ children: '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (t8, a7, r5, n4) => {
        const i11 = _;
        a7(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, n4))} data-v-11ded682><div class="fixed left-0 right-0 spotlight z-10" data-v-11ded682></div><div class="max-w-520px text-center z-20" data-v-11ded682><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-11ded682>${ssrInterpolate(e20.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-11ded682>${ssrInterpolate(e20.description)}</p><div class="w-full flex items-center justify-center" data-v-11ded682>`), a7(ssrRenderComponent(i11, { to: "/", class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer" }, { default: withCtx((t9, a8, r6, n5) => {
          if (!a8)
            return [createTextVNode(toDisplayString(e20.backHome), 1)];
          a8(`${ssrInterpolate(e20.backHome)}`);
        }), _: 1 }, r5)), a7("</div></div></div>");
      };
    } };
    j2 = q2.setup;
    q2.setup = (e20, t7) => {
      const a7 = useSSRContext();
      return (a7.modules || (a7.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@3.12.2_@opentelemetry+api@1.9.0_eslint@9.5.0_typescript@5.5.2_vite@5.3.1_vue-tsc@2.0.22/node_modules/nuxt/dist/app/components/error-404.vue"), j2 ? j2(e20, t7) : void 0;
    };
    A = _export_sfc(q2, [["__scopeId", "data-v-11ded682"]]);
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/build/error-500-as1Q8Pgv.mjs
var error_500_as1Q8Pgv_exports = {};
__export(error_500_as1Q8Pgv_exports, {
  default: () => u
});
var o, i, u;
var init_error_500_as1Q8Pgv = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/build/error-500-as1Q8Pgv.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_server();
    init_plugin_vue_export_helper_1tPrXgE0();
    init_renderer();
    init_runtime();
    o = { __name: "error-500", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, version: { type: String, default: "" }, statusCode: { type: Number, default: 500 }, statusMessage: { type: String, default: "Server error" }, description: { type: String, default: "This page is temporarily unavailable." } }, setup(t7) {
      const s8 = t7;
      return useHead({ title: `${s8.statusCode} - ${s8.statusMessage} | ${s8.appName}`, script: [], style: [{ children: '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (e20, s9, o13, i11) => {
        s9(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, i11))} data-v-9d5b82de><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-9d5b82de></div><div class="max-w-520px text-center" data-v-9d5b82de><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-9d5b82de>${ssrInterpolate(t7.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-9d5b82de>${ssrInterpolate(t7.description)}</p></div></div>`);
      };
    } };
    i = o.setup;
    o.setup = (e20, t7) => {
      const n4 = useSSRContext();
      return (n4.modules || (n4.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@3.12.2_@opentelemetry+api@1.9.0_eslint@9.5.0_typescript@5.5.2_vite@5.3.1_vue-tsc@2.0.22/node_modules/nuxt/dist/app/components/error-500.vue"), i ? i(e20, t7) : void 0;
    };
    u = _export_sfc(o, [["__scopeId", "data-v-9d5b82de"]]);
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/build/server.mjs
var server_exports = {};
__export(server_exports, {
  a: () => navigateTo,
  b: () => useRuntimeConfig,
  c: () => useHead,
  d: () => useNuxtApp,
  default: () => entry$1,
  e: () => Ue,
  f: () => createError,
  g: () => Ge,
  n: () => We,
  u: () => useRouter
});
function applyToParams(e20, t7) {
  const n4 = {};
  for (const o13 in t7) {
    const r5 = t7[o13];
    n4[o13] = re2(r5) ? r5.map(e20) : e20(r5);
  }
  return n4;
}
function commonEncode(e20) {
  return encodeURI("" + e20).replace(ge, "|").replace(de, "[").replace(pe, "]");
}
function encodeQueryValue(e20) {
  return commonEncode(e20).replace(ue, "%2B").replace(ye, "+").replace(ae, "%23").replace(se, "%26").replace(he, "`").replace(me, "{").replace(ve, "}").replace(fe, "^");
}
function encodeParam(e20) {
  return null == e20 ? "" : function(e21) {
    return commonEncode(e21).replace(ae, "%23").replace(ce, "%3F");
  }(e20).replace(ie, "%2F");
}
function decode(e20) {
  try {
    return decodeURIComponent("" + e20);
  } catch (e21) {
  }
  return "" + e20;
}
function parseURL(e20, t7, n4 = "/") {
  let o13, r5 = {}, a7 = "", s8 = "";
  const i11 = t7.indexOf("#");
  let l4 = t7.indexOf("?");
  return i11 < l4 && i11 >= 0 && (l4 = -1), l4 > -1 && (o13 = t7.slice(0, l4), a7 = t7.slice(l4 + 1, i11 > -1 ? i11 : t7.length), r5 = e20(a7)), i11 > -1 && (o13 = o13 || t7.slice(0, i11), s8 = t7.slice(i11, t7.length)), o13 = function(e21, t8) {
    if (e21.startsWith("/"))
      return e21;
    if (!e21)
      return t8;
    const n5 = t8.split("/"), o14 = e21.split("/"), r6 = o14[o14.length - 1];
    ".." !== r6 && "." !== r6 || o14.push("");
    let a8, s9, i12 = n5.length - 1;
    for (a8 = 0; a8 < o14.length; a8++)
      if (s9 = o14[a8], "." !== s9) {
        if (".." !== s9)
          break;
        i12 > 1 && i12--;
      }
    return n5.slice(0, i12).join("/") + "/" + o14.slice(a8).join("/");
  }(null != o13 ? o13 : t7, n4), { fullPath: o13 + (a7 && "?") + a7 + s8, path: o13, query: r5, hash: decode(s8) };
}
function isSameRouteRecord(e20, t7) {
  return (e20.aliasOf || e20) === (t7.aliasOf || t7);
}
function isSameRouteLocationParams(e20, t7) {
  if (Object.keys(e20).length !== Object.keys(t7).length)
    return false;
  for (const n4 in e20)
    if (!isSameRouteLocationParamsValue(e20[n4], t7[n4]))
      return false;
  return true;
}
function isSameRouteLocationParamsValue(e20, t7) {
  return re2(e20) ? isEquivalentArray(e20, t7) : re2(t7) ? isEquivalentArray(t7, e20) : e20 === t7;
}
function isEquivalentArray(e20, t7) {
  return re2(t7) ? e20.length === t7.length && e20.every((e21, n4) => e21 === t7[n4]) : 1 === e20.length && e20[0] === t7;
}
function createHref(e20, t7) {
  return e20.replace(Ce, "#") + t7;
}
function scrollToPosition(e20) {
  let t7;
  if ("el" in e20) {
    const n4 = e20.el, o13 = "string" == typeof n4 && n4.startsWith("#"), r5 = "string" == typeof n4 ? o13 ? document.getElementById(n4.slice(1)) : document.querySelector(n4) : n4;
    if (!r5)
      return;
    t7 = function(e21, t8) {
      const n5 = document.documentElement.getBoundingClientRect(), o14 = e21.getBoundingClientRect();
      return { behavior: t8.behavior, left: o14.left - n5.left - (t8.left || 0), top: o14.top - n5.top - (t8.top || 0) };
    }(r5, e20);
  } else
    t7 = e20;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t7) : window.scrollTo(null != t7.left ? t7.left : window.scrollX, null != t7.top ? t7.top : window.scrollY);
}
function getScrollKey(e20, t7) {
  return (history.state ? history.state.position - t7 : -1) + e20;
}
function createMemoryHistory(e20 = "") {
  let t7 = [], n4 = [""], o13 = 0;
  function setLocation(e21) {
    o13++, o13 !== n4.length && n4.splice(o13), n4.push(e21);
  }
  const r5 = { location: "", state: {}, base: e20 = function(e21) {
    if (!e21)
      if (ne) {
        const t8 = document.querySelector("base");
        e21 = (e21 = t8 && t8.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "");
      } else
        e21 = "/";
    return "/" !== e21[0] && "#" !== e21[0] && (e21 = "/" + e21), removeTrailingSlash(e21);
  }(e20), createHref: createHref.bind(null, e20), replace(e21) {
    n4.splice(o13--, 1), setLocation(e21);
  }, push(e21, t8) {
    setLocation(e21);
  }, listen: (e21) => (t7.push(e21), () => {
    const n5 = t7.indexOf(e21);
    n5 > -1 && t7.splice(n5, 1);
  }), destroy() {
    t7 = [], n4 = [""], o13 = 0;
  }, go(e21, r6 = true) {
    const a7 = this.location, s8 = e21 < 0 ? we.back : we.forward;
    o13 = Math.max(0, Math.min(o13 + e21, n4.length - 1)), r6 && function(e22, n5, { direction: o14, delta: r7 }) {
      const a8 = { direction: o14, delta: r7, type: Re.pop };
      for (const o15 of t7)
        o15(e22, n5, a8);
    }(this.location, a7, { direction: s8, delta: e21 });
  } };
  return Object.defineProperty(r5, "location", { enumerable: true, get: () => n4[o13] }), r5;
}
function isRouteName(e20) {
  return "string" == typeof e20 || "symbol" == typeof e20;
}
function createRouterError(e20, t7) {
  return oe(new Error(), { type: e20, [_e]: true }, t7);
}
function isNavigationFailure(e20, t7) {
  return e20 instanceof Error && _e in e20 && (null == t7 || !!(e20.type & t7));
}
function compareScoreArray(e20, t7) {
  let n4 = 0;
  for (; n4 < e20.length && n4 < t7.length; ) {
    const o13 = t7[n4] - e20[n4];
    if (o13)
      return o13;
    n4++;
  }
  return e20.length < t7.length ? 1 === e20.length && 80 === e20[0] ? -1 : 1 : e20.length > t7.length ? 1 === t7.length && 80 === t7[0] ? 1 : -1 : 0;
}
function comparePathParserScore(e20, t7) {
  let n4 = 0;
  const o13 = e20.score, r5 = t7.score;
  for (; n4 < o13.length && n4 < r5.length; ) {
    const e21 = compareScoreArray(o13[n4], r5[n4]);
    if (e21)
      return e21;
    n4++;
  }
  if (1 === Math.abs(r5.length - o13.length)) {
    if (isLastScoreNegative(o13))
      return 1;
    if (isLastScoreNegative(r5))
      return -1;
  }
  return r5.length - o13.length;
}
function isLastScoreNegative(e20) {
  const t7 = e20[e20.length - 1];
  return e20.length > 0 && t7[t7.length - 1] < 0;
}
function createRouteRecordMatcher(e20, t7, n4) {
  const o13 = function(e21, t8) {
    const n5 = oe({}, Ee, t8), o14 = [];
    let r6 = n5.start ? "^" : "";
    const a7 = [];
    for (const t9 of e21) {
      const e22 = t9.length ? [] : [90];
      n5.strict && !t9.length && (r6 += "/");
      for (let o15 = 0; o15 < t9.length; o15++) {
        const s9 = t9[o15];
        let i11 = 40 + (n5.sensitive ? 0.25 : 0);
        if (0 === s9.type)
          o15 || (r6 += "/"), r6 += s9.value.replace(Se, "\\$&"), i11 += 40;
        else if (1 === s9.type) {
          const { value: e23, repeatable: n6, optional: l4, regexp: c5 } = s9;
          a7.push({ name: e23, repeatable: n6, optional: l4 });
          const u5 = c5 || Ae;
          if (u5 !== Ae) {
            i11 += 10;
            try {
              new RegExp(`(${u5})`);
            } catch (t10) {
              throw new Error(`Invalid custom RegExp for param "${e23}" (${u5}): ` + t10.message);
            }
          }
          let d5 = n6 ? `((?:${u5})(?:/(?:${u5}))*)` : `(${u5})`;
          o15 || (d5 = l4 && t9.length < 2 ? `(?:/${d5})` : "/" + d5), l4 && (d5 += "?"), r6 += d5, i11 += 20, l4 && (i11 += -8), n6 && (i11 += -20), ".*" === u5 && (i11 += -50);
        }
        e22.push(i11);
      }
      o14.push(e22);
    }
    if (n5.strict && n5.end) {
      const e22 = o14.length - 1;
      o14[e22][o14[e22].length - 1] += 0.7000000000000001;
    }
    n5.strict || (r6 += "/?"), n5.end ? r6 += "$" : n5.strict && (r6 += "(?:/|$)");
    const s8 = new RegExp(r6, n5.sensitive ? "" : "i");
    return { re: s8, score: o14, keys: a7, parse: function(e22) {
      const t9 = e22.match(s8), n6 = {};
      if (!t9)
        return null;
      for (let e23 = 1; e23 < t9.length; e23++) {
        const o15 = t9[e23] || "", r7 = a7[e23 - 1];
        n6[r7.name] = o15 && r7.repeatable ? o15.split("/") : o15;
      }
      return n6;
    }, stringify: function(t9) {
      let n6 = "", o15 = false;
      for (const r7 of e21) {
        o15 && n6.endsWith("/") || (n6 += "/"), o15 = false;
        for (const e22 of r7)
          if (0 === e22.type)
            n6 += e22.value;
          else if (1 === e22.type) {
            const { value: a8, repeatable: s9, optional: i11 } = e22, l4 = a8 in t9 ? t9[a8] : "";
            if (re2(l4) && !s9)
              throw new Error(`Provided param "${a8}" is an array but it is not repeatable (* or + modifiers)`);
            const c5 = re2(l4) ? l4.join("/") : l4;
            if (!c5) {
              if (!i11)
                throw new Error(`Missing required param "${a8}"`);
              r7.length < 2 && (n6.endsWith("/") ? n6 = n6.slice(0, -1) : o15 = true);
            }
            n6 += c5;
          }
      }
      return n6 || "/";
    } };
  }(function(e21) {
    if (!e21)
      return [[]];
    if ("/" === e21)
      return [[Ne]];
    if (!e21.startsWith("/"))
      throw new Error(`Invalid path "${e21}"`);
    function crash(e22) {
      throw new Error(`ERR (${t8})/"${i11}": ${e22}`);
    }
    let t8 = 0, n5 = t8;
    const o14 = [];
    let r6;
    function finalizeSegment() {
      r6 && o14.push(r6), r6 = [];
    }
    let a7, s8 = 0, i11 = "", l4 = "";
    function consumeBuffer() {
      i11 && (0 === t8 ? r6.push({ type: 0, value: i11 }) : 1 === t8 || 2 === t8 || 3 === t8 ? (r6.length > 1 && ("*" === a7 || "+" === a7) && crash(`A repeatable param (${i11}) must be alone in its segment. eg: '/:ids+.`), r6.push({ type: 1, value: i11, regexp: l4, repeatable: "*" === a7 || "+" === a7, optional: "*" === a7 || "?" === a7 })) : crash("Invalid state to consume buffer"), i11 = "");
    }
    function addCharToBuffer() {
      i11 += a7;
    }
    for (; s8 < e21.length; )
      if (a7 = e21[s8++], "\\" !== a7 || 2 === t8)
        switch (t8) {
          case 0:
            "/" === a7 ? (i11 && consumeBuffer(), finalizeSegment()) : ":" === a7 ? (consumeBuffer(), t8 = 1) : addCharToBuffer();
            break;
          case 4:
            addCharToBuffer(), t8 = n5;
            break;
          case 1:
            "(" === a7 ? t8 = 2 : Oe.test(a7) ? addCharToBuffer() : (consumeBuffer(), t8 = 0, "*" !== a7 && "?" !== a7 && "+" !== a7 && s8--);
            break;
          case 2:
            ")" === a7 ? "\\" == l4[l4.length - 1] ? l4 = l4.slice(0, -1) + a7 : t8 = 3 : l4 += a7;
            break;
          case 3:
            consumeBuffer(), t8 = 0, "*" !== a7 && "?" !== a7 && "+" !== a7 && s8--, l4 = "";
            break;
          default:
            crash("Unknown state");
        }
      else
        n5 = t8, t8 = 4;
    return 2 === t8 && crash(`Unfinished custom RegExp for param "${i11}"`), consumeBuffer(), finalizeSegment(), o14;
  }(e20.path), n4), r5 = oe(o13, { record: e20, parent: t7, children: [], alias: [] });
  return t7 && !r5.record.aliasOf == !t7.record.aliasOf && t7.children.push(r5), r5;
}
function createRouterMatcher(e20, t7) {
  const n4 = [], o13 = /* @__PURE__ */ new Map();
  function addRoute(e21, n5, o14) {
    const r5 = !o14, a7 = function(e22) {
      return { path: e22.path, redirect: e22.redirect, name: e22.name, meta: e22.meta || {}, aliasOf: void 0, beforeEnter: e22.beforeEnter, props: normalizeRecordProps(e22), children: e22.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e22 ? e22.components || null : e22.component && { default: e22.component } };
    }(e21);
    a7.aliasOf = o14 && o14.record;
    const s8 = mergeOptions(t7, e21), i11 = [a7];
    if ("alias" in e21) {
      const t8 = "string" == typeof e21.alias ? [e21.alias] : e21.alias;
      for (const e22 of t8)
        i11.push(oe({}, a7, { components: o14 ? o14.record.components : a7.components, path: e22, aliasOf: o14 ? o14.record : a7 }));
    }
    let l4, c5;
    for (const t8 of i11) {
      const { path: i12 } = t8;
      if (n5 && "/" !== i12[0]) {
        const e22 = n5.record.path, o15 = "/" === e22[e22.length - 1] ? "" : "/";
        t8.path = n5.record.path + (i12 && o15 + i12);
      }
      if (l4 = createRouteRecordMatcher(t8, n5, s8), o14 ? o14.alias.push(l4) : (c5 = c5 || l4, c5 !== l4 && c5.alias.push(l4), r5 && e21.name && !isAliasRecord(l4) && removeRoute(e21.name)), isMatchable(l4) && insertMatcher(l4), a7.children) {
        const e22 = a7.children;
        for (let t9 = 0; t9 < e22.length; t9++)
          addRoute(e22[t9], l4, o14 && o14.children[t9]);
      }
      o14 = o14 || l4;
    }
    return c5 ? () => {
      removeRoute(c5);
    } : noop;
  }
  function removeRoute(e21) {
    if (isRouteName(e21)) {
      const t8 = o13.get(e21);
      t8 && (o13.delete(e21), n4.splice(n4.indexOf(t8), 1), t8.children.forEach(removeRoute), t8.alias.forEach(removeRoute));
    } else {
      const t8 = n4.indexOf(e21);
      t8 > -1 && (n4.splice(t8, 1), e21.record.name && o13.delete(e21.record.name), e21.children.forEach(removeRoute), e21.alias.forEach(removeRoute));
    }
  }
  function insertMatcher(e21) {
    const t8 = function(e22, t9) {
      let n5 = 0, o14 = t9.length;
      for (; n5 !== o14; ) {
        const r6 = n5 + o14 >> 1;
        comparePathParserScore(e22, t9[r6]) < 0 ? o14 = r6 : n5 = r6 + 1;
      }
      const r5 = function(e23) {
        let t10 = e23;
        for (; t10 = t10.parent; )
          if (isMatchable(t10) && 0 === comparePathParserScore(e23, t10))
            return t10;
        return;
      }(e22);
      r5 && (o14 = t9.lastIndexOf(r5, o14 - 1));
      return o14;
    }(e21, n4);
    n4.splice(t8, 0, e21), e21.record.name && !isAliasRecord(e21) && o13.set(e21.record.name, e21);
  }
  return t7 = mergeOptions({ strict: false, end: true, sensitive: false }, t7), e20.forEach((e21) => addRoute(e21)), { addRoute, resolve: function(e21, t8) {
    let r5, a7, s8, i11 = {};
    if ("name" in e21 && e21.name) {
      if (r5 = o13.get(e21.name), !r5)
        throw createRouterError(1, { location: e21 });
      s8 = r5.record.name, i11 = oe(paramsFromLocation(t8.params, r5.keys.filter((e22) => !e22.optional).concat(r5.parent ? r5.parent.keys.filter((e22) => e22.optional) : []).map((e22) => e22.name)), e21.params && paramsFromLocation(e21.params, r5.keys.map((e22) => e22.name))), a7 = r5.stringify(i11);
    } else if (null != e21.path)
      a7 = e21.path, r5 = n4.find((e22) => e22.re.test(a7)), r5 && (i11 = r5.parse(a7), s8 = r5.record.name);
    else {
      if (r5 = t8.name ? o13.get(t8.name) : n4.find((e22) => e22.re.test(t8.path)), !r5)
        throw createRouterError(1, { location: e21, currentLocation: t8 });
      s8 = r5.record.name, i11 = oe({}, t8.params, e21.params), a7 = r5.stringify(i11);
    }
    const l4 = [];
    let c5 = r5;
    for (; c5; )
      l4.unshift(c5.record), c5 = c5.parent;
    return { name: s8, path: a7, params: i11, matched: l4, meta: mergeMetaFields(l4) };
  }, removeRoute, clearRoutes: function() {
    n4.length = 0, o13.clear();
  }, getRoutes: function() {
    return n4;
  }, getRecordMatcher: function(e21) {
    return o13.get(e21);
  } };
}
function paramsFromLocation(e20, t7) {
  const n4 = {};
  for (const o13 of t7)
    o13 in e20 && (n4[o13] = e20[o13]);
  return n4;
}
function normalizeRecordProps(e20) {
  const t7 = {}, n4 = e20.props || false;
  if ("component" in e20)
    t7.default = n4;
  else
    for (const o13 in e20.components)
      t7[o13] = "object" == typeof n4 ? n4[o13] : n4;
  return t7;
}
function isAliasRecord(e20) {
  for (; e20; ) {
    if (e20.record.aliasOf)
      return true;
    e20 = e20.parent;
  }
  return false;
}
function mergeMetaFields(e20) {
  return e20.reduce((e21, t7) => oe(e21, t7.meta), {});
}
function mergeOptions(e20, t7) {
  const n4 = {};
  for (const o13 in e20)
    n4[o13] = o13 in t7 ? t7[o13] : e20[o13];
  return n4;
}
function isMatchable({ record: e20 }) {
  return !!(e20.name || e20.components && Object.keys(e20.components).length || e20.redirect);
}
function parseQuery2(e20) {
  const t7 = {};
  if ("" === e20 || "?" === e20)
    return t7;
  const n4 = ("?" === e20[0] ? e20.slice(1) : e20).split("&");
  for (let e21 = 0; e21 < n4.length; ++e21) {
    const o13 = n4[e21].replace(ue, " "), r5 = o13.indexOf("="), a7 = decode(r5 < 0 ? o13 : o13.slice(0, r5)), s8 = r5 < 0 ? null : decode(o13.slice(r5 + 1));
    if (a7 in t7) {
      let e22 = t7[a7];
      re2(e22) || (e22 = t7[a7] = [e22]), e22.push(s8);
    } else
      t7[a7] = s8;
  }
  return t7;
}
function stringifyQuery(e20) {
  let t7 = "";
  for (let n4 in e20) {
    const o13 = e20[n4];
    if (n4 = encodeQueryValue(n4).replace(le, "%3D"), null == o13) {
      void 0 !== o13 && (t7 += (t7.length ? "&" : "") + n4);
      continue;
    }
    (re2(o13) ? o13.map((e21) => e21 && encodeQueryValue(e21)) : [o13 && encodeQueryValue(o13)]).forEach((e21) => {
      void 0 !== e21 && (t7 += (t7.length ? "&" : "") + n4, null != e21 && (t7 += "=" + e21));
    });
  }
  return t7;
}
function normalizeQuery(e20) {
  const t7 = {};
  for (const n4 in e20) {
    const o13 = e20[n4];
    void 0 !== o13 && (t7[n4] = re2(o13) ? o13.map((e21) => null == e21 ? null : "" + e21) : null == o13 ? o13 : "" + o13);
  }
  return t7;
}
function useCallbacks() {
  let e20 = [];
  return { add: function(t7) {
    return e20.push(t7), () => {
      const n4 = e20.indexOf(t7);
      n4 > -1 && e20.splice(n4, 1);
    };
  }, list: () => e20.slice(), reset: function() {
    e20 = [];
  } };
}
function guardToPromiseFn(e20, t7, n4, o13, r5, a7 = (e21) => e21()) {
  const s8 = o13 && (o13.enterCallbacks[r5] = o13.enterCallbacks[r5] || []);
  return () => new Promise((i11, l4) => {
    const next = (e21) => {
      var a8;
      false === e21 ? l4(createRouterError(4, { from: n4, to: t7 })) : e21 instanceof Error ? l4(e21) : "string" == typeof (a8 = e21) || a8 && "object" == typeof a8 ? l4(createRouterError(2, { from: t7, to: e21 })) : (s8 && o13.enterCallbacks[r5] === s8 && "function" == typeof e21 && s8.push(e21), i11());
    }, c5 = a7(() => e20.call(o13 && o13.instances[r5], t7, n4, next));
    let u5 = Promise.resolve(c5);
    e20.length < 3 && (u5 = u5.then(next)), u5.catch((e21) => l4(e21));
  });
}
function extractComponentsGuards(e20, t7, n4, o13, r5 = (e21) => e21()) {
  const a7 = [];
  for (const i11 of e20)
    for (const e21 in i11.components) {
      let l4 = i11.components[e21];
      if ("beforeRouteEnter" === t7 || i11.instances[e21])
        if ("object" == typeof (s8 = l4) || "displayName" in s8 || "props" in s8 || "__vccOpts" in s8) {
          const s9 = (l4.__vccOpts || l4)[t7];
          s9 && a7.push(guardToPromiseFn(s9, n4, o13, i11, e21, r5));
        } else {
          let s9 = l4();
          a7.push(() => s9.then((a8) => {
            if (!a8)
              return Promise.reject(new Error(`Couldn't resolve component "${e21}" at "${i11.path}"`));
            const s10 = (l5 = a8).__esModule || "Module" === l5[Symbol.toStringTag] ? a8.default : a8;
            var l5;
            i11.components[e21] = s10;
            const c5 = (s10.__vccOpts || s10)[t7];
            return c5 && guardToPromiseFn(c5, n4, o13, i11, e21, r5)();
          }));
        }
    }
  var s8;
  return a7;
}
function useLink(e20) {
  const t7 = inject(Me), n4 = inject(He), o13 = computed(() => {
    const n5 = unref(e20.to);
    return t7.resolve(n5);
  }), r5 = computed(() => {
    const { matched: e21 } = o13.value, { length: t8 } = e21, r6 = e21[t8 - 1], a8 = n4.matched;
    if (!r6 || !a8.length)
      return -1;
    const s9 = a8.findIndex(isSameRouteRecord.bind(null, r6));
    if (s9 > -1)
      return s9;
    const i11 = getOriginalPath(e21[t8 - 2]);
    return t8 > 1 && getOriginalPath(r6) === i11 && a8[a8.length - 1].path !== i11 ? a8.findIndex(isSameRouteRecord.bind(null, e21[t8 - 2])) : s9;
  }), a7 = computed(() => r5.value > -1 && function(e21, t8) {
    for (const n5 in t8) {
      const o14 = t8[n5], r6 = e21[n5];
      if ("string" == typeof o14) {
        if (o14 !== r6)
          return false;
      } else if (!re2(r6) || r6.length !== o14.length || o14.some((e22, t9) => e22 !== r6[t9]))
        return false;
    }
    return true;
  }(n4.params, o13.value.params)), s8 = computed(() => r5.value > -1 && r5.value === n4.matched.length - 1 && isSameRouteLocationParams(n4.params, o13.value.params));
  return { route: o13, href: computed(() => o13.value.href), isActive: a7, isExactActive: s8, navigate: function(n5 = {}) {
    return function(e21) {
      if (e21.metaKey || e21.altKey || e21.ctrlKey || e21.shiftKey)
        return;
      if (e21.defaultPrevented)
        return;
      if (void 0 !== e21.button && 0 !== e21.button)
        return;
      if (e21.currentTarget && e21.currentTarget.getAttribute) {
        const t8 = e21.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t8))
          return;
      }
      e21.preventDefault && e21.preventDefault();
      return true;
    }(n5) ? t7[unref(e20.replace) ? "replace" : "push"](unref(e20.to)).catch(noop) : Promise.resolve();
  } };
}
function getOriginalPath(e20) {
  return e20 ? e20.aliasOf ? e20.aliasOf.path : e20.path : "";
}
function normalizeSlot(e20, t7) {
  if (!e20)
    return null;
  const n4 = e20(t7);
  return 1 === n4.length ? n4[0] : n4;
}
function createRouter(e20) {
  const t7 = createRouterMatcher(e20.routes, e20), n4 = e20.parseQuery || parseQuery2, o13 = e20.stringifyQuery || stringifyQuery, r5 = e20.history, a7 = useCallbacks(), s8 = useCallbacks(), i11 = useCallbacks(), l4 = shallowRef(be);
  let c5 = be;
  ne && e20.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u5 = applyToParams.bind(null, (e21) => "" + e21), h7 = applyToParams.bind(null, encodeParam), m10 = applyToParams.bind(null, decode);
  function resolve2(e21, a8) {
    if (a8 = oe({}, a8 || l4.value), "string" == typeof e21) {
      const o14 = parseURL(n4, e21, a8.path), s10 = t7.resolve({ path: o14.path }, a8), i13 = r5.createHref(o14.fullPath);
      return oe(o14, s10, { params: m10(s10.params), hash: decode(o14.hash), redirectedFrom: void 0, href: i13 });
    }
    let s9;
    if (null != e21.path)
      s9 = oe({}, e21, { path: parseURL(n4, e21.path, a8.path).path });
    else {
      const t8 = oe({}, e21.params);
      for (const e22 in t8)
        null == t8[e22] && delete t8[e22];
      s9 = oe({}, e21, { params: h7(t8) }), a8.params = h7(a8.params);
    }
    const i12 = t7.resolve(s9, a8), c6 = e21.hash || "";
    i12.params = u5(m10(i12.params));
    const d5 = function(e22, t8) {
      const n5 = t8.query ? e22(t8.query) : "";
      return t8.path + (n5 && "?") + n5 + (t8.hash || "");
    }(o13, oe({}, e21, { hash: (p4 = c6, commonEncode(p4).replace(me, "{").replace(ve, "}").replace(fe, "^")), path: i12.path }));
    var p4;
    const f3 = r5.createHref(d5);
    return oe({ fullPath: d5, hash: c6, query: o13 === stringifyQuery ? normalizeQuery(e21.query) : e21.query || {} }, i12, { redirectedFrom: void 0, href: f3 });
  }
  function locationAsObject(e21) {
    return "string" == typeof e21 ? parseURL(n4, e21, l4.value.path) : oe({}, e21);
  }
  function checkCanceledNavigation(e21, t8) {
    if (c5 !== e21)
      return createRouterError(8, { from: t8, to: e21 });
  }
  function push(e21) {
    return pushWithRedirect(e21);
  }
  function handleRedirectRecord(e21) {
    const t8 = e21.matched[e21.matched.length - 1];
    if (t8 && t8.redirect) {
      const { redirect: n5 } = t8;
      let o14 = "function" == typeof n5 ? n5(e21) : n5;
      return "string" == typeof o14 && (o14 = o14.includes("?") || o14.includes("#") ? o14 = locationAsObject(o14) : { path: o14 }, o14.params = {}), oe({ query: e21.query, hash: e21.hash, params: null != o14.path ? {} : e21.params }, o14);
    }
  }
  function pushWithRedirect(e21, t8) {
    const n5 = c5 = resolve2(e21), r6 = l4.value, a8 = e21.state, s9 = e21.force, i12 = true === e21.replace, u6 = handleRedirectRecord(n5);
    if (u6)
      return pushWithRedirect(oe(locationAsObject(u6), { state: "object" == typeof u6 ? oe({}, a8, u6.state) : a8, force: s9, replace: i12 }), t8 || n5);
    const d5 = n5;
    let p4;
    return d5.redirectedFrom = t8, !s9 && function(e22, t9, n6) {
      const o14 = t9.matched.length - 1, r7 = n6.matched.length - 1;
      return o14 > -1 && o14 === r7 && isSameRouteRecord(t9.matched[o14], n6.matched[r7]) && isSameRouteLocationParams(t9.params, n6.params) && e22(t9.query) === e22(n6.query) && t9.hash === n6.hash;
    }(o13, r6, n5) && (p4 = createRouterError(16, { to: d5, from: r6 }), handleScroll(r6, r6, true, false)), (p4 ? Promise.resolve(p4) : navigate(d5, r6)).catch((e22) => isNavigationFailure(e22) ? isNavigationFailure(e22, 2) ? e22 : markAsReady(e22) : triggerError(e22, d5, r6)).then((e22) => {
      if (e22) {
        if (isNavigationFailure(e22, 2))
          return pushWithRedirect(oe({ replace: i12 }, locationAsObject(e22.to), { state: "object" == typeof e22.to ? oe({}, a8, e22.to.state) : a8, force: s9 }), t8 || d5);
      } else
        e22 = finalizeNavigation(d5, r6, true, i12, a8);
      return triggerAfterEach(d5, r6, e22), e22;
    });
  }
  function checkCanceledNavigationAndReject(e21, t8) {
    const n5 = checkCanceledNavigation(e21, t8);
    return n5 ? Promise.reject(n5) : Promise.resolve();
  }
  function runWithContext(e21) {
    const t8 = w6.values().next().value;
    return t8 && "function" == typeof t8.runWithContext ? t8.runWithContext(e21) : e21();
  }
  function navigate(e21, t8) {
    let n5;
    const [o14, r6, i12] = function(e22, t9) {
      const n6 = [], o15 = [], r7 = [], a8 = Math.max(t9.matched.length, e22.matched.length);
      for (let s9 = 0; s9 < a8; s9++) {
        const a9 = t9.matched[s9];
        a9 && (e22.matched.find((e23) => isSameRouteRecord(e23, a9)) ? o15.push(a9) : n6.push(a9));
        const i13 = e22.matched[s9];
        i13 && (t9.matched.find((e23) => isSameRouteRecord(e23, i13)) || r7.push(i13));
      }
      return [n6, o15, r7];
    }(e21, t8);
    n5 = extractComponentsGuards(o14.reverse(), "beforeRouteLeave", e21, t8);
    for (const r7 of o14)
      r7.leaveGuards.forEach((o15) => {
        n5.push(guardToPromiseFn(o15, e21, t8));
      });
    const l5 = checkCanceledNavigationAndReject.bind(null, e21, t8);
    return n5.push(l5), runGuardQueue(n5).then(() => {
      n5 = [];
      for (const o15 of a7.list())
        n5.push(guardToPromiseFn(o15, e21, t8));
      return n5.push(l5), runGuardQueue(n5);
    }).then(() => {
      n5 = extractComponentsGuards(r6, "beforeRouteUpdate", e21, t8);
      for (const o15 of r6)
        o15.updateGuards.forEach((o16) => {
          n5.push(guardToPromiseFn(o16, e21, t8));
        });
      return n5.push(l5), runGuardQueue(n5);
    }).then(() => {
      n5 = [];
      for (const o15 of i12)
        if (o15.beforeEnter)
          if (re2(o15.beforeEnter))
            for (const r7 of o15.beforeEnter)
              n5.push(guardToPromiseFn(r7, e21, t8));
          else
            n5.push(guardToPromiseFn(o15.beforeEnter, e21, t8));
      return n5.push(l5), runGuardQueue(n5);
    }).then(() => (e21.matched.forEach((e22) => e22.enterCallbacks = {}), n5 = extractComponentsGuards(i12, "beforeRouteEnter", e21, t8, runWithContext), n5.push(l5), runGuardQueue(n5))).then(() => {
      n5 = [];
      for (const o15 of s8.list())
        n5.push(guardToPromiseFn(o15, e21, t8));
      return n5.push(l5), runGuardQueue(n5);
    }).catch((e22) => isNavigationFailure(e22, 8) ? e22 : Promise.reject(e22));
  }
  function triggerAfterEach(e21, t8, n5) {
    i11.list().forEach((o14) => runWithContext(() => o14(e21, t8, n5)));
  }
  function finalizeNavigation(e21, t8, n5, o14, a8) {
    const s9 = checkCanceledNavigation(e21, t8);
    if (s9)
      return s9;
    const i12 = t8 === be, c6 = ne ? history.state : {};
    n5 && (o14 || i12 ? r5.replace(e21.fullPath, oe({ scroll: i12 && c6 && c6.scroll }, a8)) : r5.push(e21.fullPath, a8)), l4.value = e21, handleScroll(e21, t8, n5, i12), markAsReady();
  }
  let g3;
  function setupListeners() {
    g3 || (g3 = r5.listen((e21, t8, n5) => {
      if (!C5.listening)
        return;
      const o14 = resolve2(e21), a8 = handleRedirectRecord(o14);
      if (a8)
        return void pushWithRedirect(oe(a8, { replace: true }), o14).catch(noop);
      c5 = o14;
      const s9 = l4.value;
      var i12, u6;
      ne && (i12 = getScrollKey(s9.fullPath, n5.delta), u6 = { left: window.scrollX, top: window.scrollY }, ke.set(i12, u6)), navigate(o14, s9).catch((e22) => isNavigationFailure(e22, 12) ? e22 : isNavigationFailure(e22, 2) ? (pushWithRedirect(e22.to, o14).then((e23) => {
        isNavigationFailure(e23, 20) && !n5.delta && n5.type === Re.pop && r5.go(-1, false);
      }).catch(noop), Promise.reject()) : (n5.delta && r5.go(-n5.delta, false), triggerError(e22, o14, s9))).then((e22) => {
        (e22 = e22 || finalizeNavigation(o14, s9, false)) && (n5.delta && !isNavigationFailure(e22, 8) ? r5.go(-n5.delta, false) : n5.type === Re.pop && isNavigationFailure(e22, 20) && r5.go(-1, false)), triggerAfterEach(o14, s9, e22);
      }).catch(noop);
    }));
  }
  let v4, y5 = useCallbacks(), x4 = useCallbacks();
  function triggerError(e21, t8, n5) {
    markAsReady(e21);
    const o14 = x4.list();
    return o14.length ? o14.forEach((o15) => o15(e21, t8, n5)) : console.error(e21), Promise.reject(e21);
  }
  function markAsReady(e21) {
    return v4 || (v4 = !e21, setupListeners(), y5.list().forEach(([t8, n5]) => e21 ? n5(e21) : t8()), y5.reset()), e21;
  }
  function handleScroll(t8, n5, o14, r6) {
    const { scrollBehavior: a8 } = e20;
    if (!ne || !a8)
      return Promise.resolve();
    const s9 = !o14 && function(e21) {
      const t9 = ke.get(e21);
      return ke.delete(e21), t9;
    }(getScrollKey(t8.fullPath, 0)) || (r6 || !o14) && history.state && history.state.scroll || null;
    return nextTick().then(() => a8(t8, n5, s9)).then((e21) => e21 && scrollToPosition(e21)).catch((e21) => triggerError(e21, t8, n5));
  }
  const go = (e21) => r5.go(e21);
  let b5;
  const w6 = /* @__PURE__ */ new Set(), C5 = { currentRoute: l4, listening: true, addRoute: function(e21, n5) {
    let o14, r6;
    return isRouteName(e21) ? (o14 = t7.getRecordMatcher(e21), r6 = n5) : r6 = e21, t7.addRoute(r6, o14);
  }, removeRoute: function(e21) {
    const n5 = t7.getRecordMatcher(e21);
    n5 && t7.removeRoute(n5);
  }, clearRoutes: t7.clearRoutes, hasRoute: function(e21) {
    return !!t7.getRecordMatcher(e21);
  }, getRoutes: function() {
    return t7.getRoutes().map((e21) => e21.record);
  }, resolve: resolve2, options: e20, push, replace: function(e21) {
    return push(oe(locationAsObject(e21), { replace: true }));
  }, go, back: () => go(-1), forward: () => go(1), beforeEach: a7.add, beforeResolve: s8.add, afterEach: i11.add, onError: x4.add, isReady: function() {
    return v4 && l4.value !== be ? Promise.resolve() : new Promise((e21, t8) => {
      y5.add([e21, t8]);
    });
  }, install(e21) {
    e21.component("RouterLink", $e), e21.component("RouterView", Be), e21.config.globalProperties.$router = this, Object.defineProperty(e21.config.globalProperties, "$route", { enumerable: true, get: () => unref(l4) }), ne && !b5 && l4.value === be && (b5 = true, push(r5.location).catch((e22) => {
    }));
    const t8 = {};
    for (const e22 in be)
      Object.defineProperty(t8, e22, { get: () => l4.value[e22], enumerable: true });
    e21.provide(Me, this), e21.provide(He, shallowReactive(t8)), e21.provide(Le, l4);
    const n5 = e21.unmount;
    w6.add(e21), e21.unmount = function() {
      w6.delete(e21), w6.size < 1 && (c5 = be, g3 && g3(), g3 = null, l4.value = be, b5 = false, v4 = false), n5();
    };
  } };
  function runGuardQueue(e21) {
    return e21.reduce((e22, t8) => e22.then(() => runWithContext(t8)), Promise.resolve());
  }
  return C5;
}
function getNuxtAppCtx(e20 = qe) {
  return getContext(e20, { asyncContext: false });
}
function registerPluginHooks(e20, t7) {
  t7.hooks && e20.hooks.addHooks(t7.hooks);
}
function defineNuxtPlugin(e20) {
  if ("function" == typeof e20)
    return e20;
  const t7 = e20._name || e20.name;
  return delete e20.name, Object.assign(e20.setup || (() => {
  }), e20, { [Qe]: true, _name: t7 });
}
function callWithNuxt(e20, t7, n4) {
  const fn2 = () => t7(), o13 = getNuxtAppCtx(e20._name);
  return e20.vueApp.runWithContext(() => o13.callAsync(e20, fn2));
}
function useNuxtApp(e20) {
  const t7 = function(e21) {
    var t8;
    let n4;
    return hasInjectionContext() && (n4 = null == (t8 = getCurrentInstance()) ? void 0 : t8.appContext.app.$nuxt), n4 = n4 || getNuxtAppCtx(e21).tryUse(), n4 || null;
  }(e20);
  if (!t7)
    throw new Error("[nuxt] instance unavailable");
  return t7;
}
function useRuntimeConfig(e20) {
  return useNuxtApp().$config;
}
function defineGetter(e20, t7, n4) {
  Object.defineProperty(e20, t7, { get: () => n4 });
}
function defineNuxtRouteMiddleware(e20) {
  return e20;
}
function resolveUnrefHeadInput(e20, t7 = "") {
  if (e20 instanceof Promise)
    return e20;
  const n4 = "function" == typeof (o13 = e20) ? o13() : unref(o13);
  var o13;
  return e20 && n4 ? Array.isArray(n4) ? n4.map((e21) => resolveUnrefHeadInput(e21, t7)) : "object" == typeof n4 ? Object.fromEntries(Object.entries(n4).map(([e21, t8]) => "titleTemplate" === e21 || e21.startsWith("on") ? [e21, unref(t8)] : [e21, resolveUnrefHeadInput(t8, e21)])) : n4 : n4;
}
function useHead(e20, t7 = {}) {
  const n4 = t7.head || function() {
    if (Je in Ve)
      return Ve[Je]();
    const e21 = inject(De);
    return e21 || getActiveHead();
  }();
  if (n4)
    return n4.ssr ? n4.push(e20, t7) : function(e21, t8, n5 = {}) {
      const o13 = ref(false), r5 = ref({});
      watchEffect(() => {
        r5.value = o13.value ? {} : resolveUnrefHeadInput(t8);
      });
      const a7 = e21.push(r5.value, n5);
      return watch(r5, (e22) => {
        a7.patch(e22);
      }), getCurrentInstance(), a7;
    }(n4, e20, t7);
}
function executeAsync(e20) {
  const t7 = [];
  for (const e21 of tt) {
    const n5 = e21();
    n5 && t7.push(n5);
  }
  const restore = () => {
    for (const e21 of t7)
      e21();
  };
  let n4 = e20();
  return n4 && "object" == typeof n4 && "catch" in n4 && (n4 = n4.catch((e21) => {
    throw restore(), e21;
  })), [n4, restore];
}
function toArray(e20) {
  return Array.isArray(e20) ? e20 : [e20];
}
function generateRouteKey(e20) {
  const t7 = (null == e20 ? void 0 : e20.meta.key) ?? e20.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (t8) => {
    var n4;
    return (null == (n4 = e20.params[t8.slice(1)]) ? void 0 : n4.toString()) || "";
  });
  return "function" == typeof t7 ? t7(e20) : t7;
}
function _getHashElementScrollMarginTop(e20) {
  try {
    const t7 = (void 0).querySelector(e20);
    if (t7)
      return Number.parseFloat(getComputedStyle(t7).scrollMarginTop);
  } catch {
  }
  return 0;
}
var Y, X, Z, getContext, ee, te, ne, oe, noop, re2, ae, se, ie, le, ce, ue, de, pe, fe, he, me, ge, ve, ye, xe, removeTrailingSlash, be, Re, we, Ce, ke, _e, Pe, Ae, Ee, Se, Ne, Oe, je, Te, Me, He, Le, $e, getLinkClass, Be, Fe, We, Ue, Ge, qe, Qe, Ie, Ke, useRouter, navigateTo, ze, useError, showError, createError, De, Ve, Je, Ye, Xe, Ze2, et, tt, nt, ot, rt, at, st, it, lt, ct, ut, dt, pt, ft2, ht, mt, gt, entry$1;
var init_server = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/build/server.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_renderer();
    Y = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {};
    X = "__unctx__";
    Z = Y[X] || (Y[X] = function(e20 = {}) {
      const t7 = {};
      return { get: (n4, o13 = {}) => (t7[n4] || (t7[n4] = function(e21 = {}) {
        let t8, n5 = false;
        const checkConflict = (e22) => {
          if (t8 && t8 !== e22)
            throw new Error("Context conflict");
        };
        let o14;
        if (e21.asyncContext) {
          const t9 = e21.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          t9 ? o14 = new t9() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const _getCurrentInstance = () => {
          if (o14 && void 0 === t8) {
            const e22 = o14.getStore();
            if (void 0 !== e22)
              return e22;
          }
          return t8;
        };
        return { use: () => {
          const e22 = _getCurrentInstance();
          if (void 0 === e22)
            throw new Error("Context is not available");
          return e22;
        }, tryUse: () => _getCurrentInstance(), set: (e22, o15) => {
          o15 || checkConflict(e22), t8 = e22, n5 = true;
        }, unset: () => {
          t8 = void 0, n5 = false;
        }, call: (e22, r5) => {
          checkConflict(e22), t8 = e22;
          try {
            return o14 ? o14.run(e22, r5) : r5();
          } finally {
            n5 || (t8 = void 0);
          }
        }, async callAsync(e22, r5) {
          t8 = e22;
          const onRestore = () => {
            t8 = e22;
          }, onLeave = () => t8 === e22 ? onRestore : void 0;
          te.add(onLeave);
          try {
            const a7 = o14 ? o14.run(e22, r5) : r5();
            return n5 || (t8 = void 0), await a7;
          } finally {
            te.delete(onLeave);
          }
        } };
      }({ ...e20, ...o13 })), t7[n4], t7[n4]) };
    }());
    getContext = (e20, t7 = {}) => Z.get(e20, t7);
    ee = "__unctx_async_handlers__";
    te = Y[ee] || (Y[ee] = /* @__PURE__ */ new Set());
    ne = "undefined" != typeof document;
    oe = Object.assign;
    noop = () => {
    };
    re2 = Array.isArray;
    ae = /#/g;
    se = /&/g;
    ie = /\//g;
    le = /=/g;
    ce = /\?/g;
    ue = /\+/g;
    de = /%5B/g;
    pe = /%5D/g;
    fe = /%5E/g;
    he = /%60/g;
    me = /%7B/g;
    ge = /%7C/g;
    ve = /%7D/g;
    ye = /%20/g;
    xe = /\/$/;
    removeTrailingSlash = (e20) => e20.replace(xe, "");
    be = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
    !function(e20) {
      e20.pop = "pop", e20.push = "push";
    }(Re || (Re = {})), function(e20) {
      e20.back = "back", e20.forward = "forward", e20.unknown = "";
    }(we || (we = {}));
    Ce = /^[^#]+#/;
    ke = /* @__PURE__ */ new Map();
    _e = Symbol("");
    !function(e20) {
      e20[e20.aborted = 4] = "aborted", e20[e20.cancelled = 8] = "cancelled", e20[e20.duplicated = 16] = "duplicated";
    }(Pe || (Pe = {}));
    Ae = "[^/]+?";
    Ee = { sensitive: false, strict: false, start: true, end: true };
    Se = /[.+*?^${}()[\]/\\]/g;
    Ne = { type: 0, value: "" };
    Oe = /[a-zA-Z0-9_]/;
    je = Symbol("");
    Te = Symbol("");
    Me = Symbol("");
    He = Symbol("");
    Le = Symbol("");
    $e = defineComponent({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }, useLink, setup(e20, { slots: t7 }) {
      const n4 = reactive(useLink(e20)), { options: o13 } = inject(Me), r5 = computed(() => ({ [getLinkClass(e20.activeClass, o13.linkActiveClass, "router-link-active")]: n4.isActive, [getLinkClass(e20.exactActiveClass, o13.linkExactActiveClass, "router-link-exact-active")]: n4.isExactActive }));
      return () => {
        const o14 = t7.default && t7.default(n4);
        return e20.custom ? o14 : h("a", { "aria-current": n4.isExactActive ? e20.ariaCurrentValue : null, href: n4.href, onClick: n4.navigate, class: r5.value }, o14);
      };
    } });
    getLinkClass = (e20, t7, n4) => null != e20 ? e20 : null != t7 ? t7 : n4;
    Be = defineComponent({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e20, { attrs: t7, slots: n4 }) {
      const o13 = inject(Le), r5 = computed(() => e20.route || o13.value), a7 = inject(Te, 0), s8 = computed(() => {
        let e21 = unref(a7);
        const { matched: t8 } = r5.value;
        let n5;
        for (; (n5 = t8[e21]) && !n5.components; )
          e21++;
        return e21;
      }), i11 = computed(() => r5.value.matched[s8.value]);
      provide(Te, computed(() => s8.value + 1)), provide(je, i11), provide(Le, r5);
      const l4 = ref();
      return watch(() => [l4.value, i11.value, e20.name], ([e21, t8, n5], [o14, r6, a8]) => {
        t8 && (t8.instances[n5] = e21, r6 && r6 !== t8 && e21 && e21 === o14 && (t8.leaveGuards.size || (t8.leaveGuards = r6.leaveGuards), t8.updateGuards.size || (t8.updateGuards = r6.updateGuards))), !e21 || !t8 || r6 && isSameRouteRecord(t8, r6) && o14 || (t8.enterCallbacks[n5] || []).forEach((t9) => t9(e21));
      }, { flush: "post" }), () => {
        const o14 = r5.value, a8 = e20.name, s9 = i11.value, c5 = s9 && s9.components[a8];
        if (!c5)
          return normalizeSlot(n4.default, { Component: c5, route: o14 });
        const u5 = s9.props[a8], d5 = u5 ? true === u5 ? o14.params : "function" == typeof u5 ? u5(o14) : u5 : null, p4 = h(c5, oe({}, d5, t7, { onVnodeUnmounted: (e21) => {
          e21.component.isUnmounted && (s9.instances[a8] = null);
        }, ref: l4 }));
        return normalizeSlot(n4.default, { Component: p4, route: o14 }) || p4;
      };
    } });
    globalThis.$fetch || (globalThis.$fetch = Ue2.create({ baseURL: baseURL() }));
    Fe = false;
    We = { componentName: "NuxtLink" };
    Ue = { deep: false };
    Ge = {};
    qe = "nuxt-app";
    Qe = "__nuxt_plugin";
    Ie = Symbol("layout-meta");
    Ke = Symbol("route");
    useRouter = () => {
      var e20;
      return null == (e20 = useNuxtApp()) ? void 0 : e20.$router;
    };
    navigateTo = (e20, a7) => {
      e20 || (e20 = "/");
      const i11 = "string" == typeof e20 ? e20 : withQuery(e20.path || "/", e20.query || {}) + (e20.hash || ""), l4 = (null == a7 ? void 0 : a7.external) || hasProtocol(i11, { acceptRelative: true });
      if (l4) {
        if (!(null == a7 ? void 0 : a7.external))
          throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
        const { protocol: e21 } = new URL(i11, "http://localhost");
        if (e21 && isScriptProtocol(e21))
          throw new Error(`Cannot navigate to a URL with '${e21}' protocol.`);
      }
      const c5 = (() => {
        try {
          if (useNuxtApp()._processingMiddleware)
            return true;
        } catch {
          return false;
        }
        return false;
      })(), u5 = useRouter(), d5 = useNuxtApp();
      if (d5.ssrContext) {
        const t7 = "string" == typeof e20 || l4 ? i11 : u5.resolve(e20).fullPath || "/", n4 = l4 ? i11 : joinURL(useRuntimeConfig().app.baseURL, t7), redirect = async function(e21) {
          await d5.callHook("app:redirected");
          const t8 = n4.replace(/"/g, "%22");
          return d5.ssrContext._renderResponse = { statusCode: sanitizeStatusCode((null == a7 ? void 0 : a7.redirectCode) || 302, 302), body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${t8}"></head></html>`, headers: { location: encodeURI(n4) } }, e21;
        };
        return !l4 && c5 ? (u5.afterEach((e21) => e21.fullPath === t7 ? redirect(false) : void 0), e20) : redirect(!c5 && void 0);
      }
      return l4 ? (d5._scope.stop(), (null == a7 ? void 0 : a7.replace) ? (void 0).replace(i11) : (void 0).href = i11, c5 ? !!d5.isHydrating && new Promise(() => {
      }) : Promise.resolve()) : (null == a7 ? void 0 : a7.replace) ? u5.replace(e20) : u5.push(e20);
    };
    ze = "__nuxt_error";
    useError = () => toRef(useNuxtApp().payload, "error");
    showError = (e20) => {
      const t7 = createError(e20);
      try {
        useNuxtApp();
        const e21 = useError();
        0, e21.value = e21.value || t7;
      } catch {
        throw t7;
      }
      return t7;
    };
    createError = (e20) => {
      const t7 = createError$1(e20);
      return Object.defineProperty(t7, ze, { value: true, configurable: false, writable: false }), t7;
    };
    De = "usehead";
    Ve = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    Je = "__unhead_injection_handler__";
    Ye = defineNuxtPlugin({ name: "nuxt:head", enforce: "pre", setup(e20) {
      const t7 = e20.ssrContext.head;
      var n4;
      n4 = () => useNuxtApp().vueApp._context.provides.usehead, Ve[Je] = n4, e20.vueApp.use(t7);
    } });
    Xe = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {};
    Ze2 = "__unctx__";
    Xe[Ze2] || (Xe[Ze2] = function(e20 = {}) {
      const t7 = {};
      return { get: (n4, o13 = {}) => (t7[n4] || (t7[n4] = function(e21 = {}) {
        let t8, n5 = false;
        const checkConflict = (e22) => {
          if (t8 && t8 !== e22)
            throw new Error("Context conflict");
        };
        let o14;
        if (e21.asyncContext) {
          const t9 = e21.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          t9 ? o14 = new t9() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const _getCurrentInstance = () => {
          if (o14 && void 0 === t8) {
            const e22 = o14.getStore();
            if (void 0 !== e22)
              return e22;
          }
          return t8;
        };
        return { use: () => {
          const e22 = _getCurrentInstance();
          if (void 0 === e22)
            throw new Error("Context is not available");
          return e22;
        }, tryUse: () => _getCurrentInstance(), set: (e22, o15) => {
          o15 || checkConflict(e22), t8 = e22, n5 = true;
        }, unset: () => {
          t8 = void 0, n5 = false;
        }, call: (e22, r5) => {
          checkConflict(e22), t8 = e22;
          try {
            return o14 ? o14.run(e22, r5) : r5();
          } finally {
            n5 || (t8 = void 0);
          }
        }, async callAsync(e22, r5) {
          t8 = e22;
          const onRestore = () => {
            t8 = e22;
          }, onLeave = () => t8 === e22 ? onRestore : void 0;
          tt.add(onLeave);
          try {
            const a7 = o14 ? o14.run(e22, r5) : r5();
            return n5 || (t8 = void 0), await a7;
          } finally {
            tt.delete(onLeave);
          }
        } };
      }({ ...e20, ...o13 })), t7[n4], t7[n4]) };
    }());
    et = "__unctx_async_handlers__";
    tt = Xe[et] || (Xe[et] = /* @__PURE__ */ new Set());
    nt = [{ name: "index", path: "/", component: () => Promise.resolve().then(() => (init_index_3gsi4ZiL(), index_3gsi4ZiL_exports)).then((e20) => e20.default || e20) }];
    ot = { hashMode: false, scrollBehaviorType: "auto", ...{ scrollBehavior(e20, t7, n4) {
      var o13;
      const r5 = useNuxtApp(), a7 = (null == (o13 = useRouter().options) ? void 0 : o13.scrollBehaviorType) ?? "auto";
      let s8 = n4 || void 0;
      const i11 = "function" == typeof e20.meta.scrollToTop ? e20.meta.scrollToTop(e20, t7) : e20.meta.scrollToTop;
      if (!s8 && t7 && e20 && false !== i11 && function(e21, t8) {
        return e21 !== t8 && t8 !== be && (generateRouteKey(e21) !== generateRouteKey(t8) || !e21.matched.every((e22, n5) => {
          var o14, r6;
          return e22.components && e22.components.default === (null == (r6 = null == (o14 = t8.matched[n5]) ? void 0 : o14.components) ? void 0 : r6.default);
        }));
      }(e20, t7) && (s8 = { left: 0, top: 0 }), e20.path === t7.path)
        return t7.hash && !e20.hash ? { left: 0, top: 0 } : !!e20.hash && { el: e20.hash, top: _getHashElementScrollMarginTop(e20.hash), behavior: a7 };
      const hasTransition = (e21) => !!(e21.meta.pageTransition ?? Fe), l4 = hasTransition(t7) && hasTransition(e20) ? "page:transition:finish" : "page:finish";
      return new Promise((t8) => {
        r5.hooks.hookOnce(l4, async () => {
          await new Promise((e21) => setTimeout(e21, 0)), e20.hash && (s8 = { el: e20.hash, top: _getHashElementScrollMarginTop(e20.hash), behavior: a7 }), t8(s8);
        });
      });
    } } };
    rt = [defineNuxtRouteMiddleware(async (e20) => {
      var t7;
      let n4, o13;
      if (!(null == (t7 = e20.meta) ? void 0 : t7.validate))
        return;
      useNuxtApp(), useRouter();
      const r5 = ([n4, o13] = executeAsync(() => Promise.resolve(e20.meta.validate(e20))), n4 = await n4, o13(), n4);
      return true !== r5 ? r5 : void 0;
    }), defineNuxtRouteMiddleware(async (e20) => {
    })];
    at = {};
    st = { NuxtError: (e20) => {
      return !!(t7 = e20) && "object" == typeof t7 && ze in t7 && e20.toJSON();
      var t7;
    }, EmptyShallowRef: (e20) => isRef(e20) && isShallow(e20) && !e20.value && ("bigint" == typeof e20.value ? "0n" : JSON.stringify(e20.value) || "_"), EmptyRef: (e20) => isRef(e20) && !e20.value && ("bigint" == typeof e20.value ? "0n" : JSON.stringify(e20.value) || "_"), ShallowRef: (e20) => isRef(e20) && isShallow(e20) && e20.value, ShallowReactive: (e20) => isReactive(e20) && isShallow(e20) && toRaw(e20), Ref: (e20) => isRef(e20) && e20.value, Reactive: (e20) => isReactive(e20) && toRaw(e20) };
    it = [Ye, defineNuxtPlugin({ name: "nuxt:router", enforce: "pre", async setup(e20) {
      var t7, n4, o13, r5;
      let s8, i11, p4 = useRuntimeConfig().app.baseURL;
      ot.hashMode && !p4.includes("#") && (p4 += "#");
      const h7 = (null == (t7 = ot.history) ? void 0 : t7.call(ot, p4)) ?? createMemoryHistory(p4), m10 = (null == (n4 = ot.routes) ? void 0 : n4.call(ot, nt)) ?? nt;
      let g3;
      const v4 = createRouter({ ...ot, scrollBehavior: (e21, t8, n5) => {
        if (t8 !== be) {
          if (ot.scrollBehavior) {
            if (v4.options.scrollBehavior = ot.scrollBehavior, "scrollRestoration" in (void 0).history) {
              const e22 = v4.beforeEach(() => {
                e22(), (void 0).history.scrollRestoration = "manual";
              });
            }
            return ot.scrollBehavior(e21, be, g3 || n5);
          }
        } else
          g3 = n5;
      }, history: h7, routes: m10 });
      e20.vueApp.use(v4);
      const y5 = shallowRef(v4.currentRoute.value);
      v4.afterEach((e21, t8) => {
        y5.value = t8;
      }), Object.defineProperty(e20.vueApp.config.globalProperties, "previousRoute", { get: () => y5.value });
      const x4 = e20.ssrContext.url, b5 = shallowRef(v4.currentRoute.value), syncCurrentRoute = () => {
        b5.value = v4.currentRoute.value;
      };
      e20.hook("page:finish", syncCurrentRoute), v4.afterEach((e21, t8) => {
        var n5, o14, r6, a7;
        (null == (o14 = null == (n5 = e21.matched[0]) ? void 0 : n5.components) ? void 0 : o14.default) === (null == (a7 = null == (r6 = t8.matched[0]) ? void 0 : r6.components) ? void 0 : a7.default) && syncCurrentRoute();
      });
      const R5 = {};
      for (const e21 in b5.value)
        Object.defineProperty(R5, e21, { get: () => b5.value[e21] });
      e20._route = shallowReactive(R5), e20._middleware = e20._middleware || { global: [], named: {} }, useError(), (null == (o13 = e20.ssrContext) ? void 0 : o13.islandContext) || v4.afterEach(async (t8, n5, o14) => {
        delete e20._processingMiddleware, o14 && await e20.callHook("page:loading:end"), 4 !== (null == o14 ? void 0 : o14.type) && (0 === t8.matched.length ? await e20.runWithContext(() => showError(createError$1({ statusCode: 404, fatal: false, statusMessage: `Page not found: ${t8.fullPath}`, data: { path: t8.fullPath } }))) : t8.redirectedFrom && t8.fullPath !== x4 && await e20.runWithContext(() => navigateTo(t8.fullPath || "/")));
      });
      try {
        [s8, i11] = executeAsync(() => v4.push(x4)), await s8, i11(), [s8, i11] = executeAsync(() => v4.isReady()), await s8, i11();
      } catch (t8) {
        [s8, i11] = executeAsync(() => e20.runWithContext(() => showError(t8))), await s8, i11();
      }
      const C5 = v4.currentRoute.value;
      if (syncCurrentRoute(), null == (r5 = e20.ssrContext) ? void 0 : r5.islandContext)
        return { provide: { router: v4 } };
      const k6 = e20.payload.state._layout;
      return v4.beforeEach(async (t8, n5) => {
        var o14, r6;
        if (await e20.callHook("page:loading:start"), t8.meta = reactive(t8.meta), e20.isHydrating && k6 && !isReadonly(t8.meta.layout) && (t8.meta.layout = k6), e20._processingMiddleware = true, !(null == (o14 = e20.ssrContext) ? void 0 : o14.islandContext)) {
          const o15 = /* @__PURE__ */ new Set([...rt, ...e20._middleware.global]);
          for (const e21 of t8.matched) {
            const t9 = e21.meta.middleware;
            if (t9)
              for (const e22 of toArray(t9))
                o15.add(e22);
          }
          {
            const n6 = await e20.runWithContext(() => async function(e21) {
              {
                const t9 = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig().nitro.routeRules }));
                return re({}, ...t9.matchAll(e21).reverse());
              }
            }(t8.path));
            if (n6.appMiddleware)
              for (const e21 in n6.appMiddleware)
                n6.appMiddleware[e21] ? o15.add(e21) : o15.delete(e21);
          }
          for (const s9 of o15) {
            const o16 = "string" == typeof s9 ? e20._middleware.named[s9] || await (null == (r6 = at[s9]) ? void 0 : r6.call(at).then((e21) => e21.default || e21)) : s9;
            if (!o16)
              throw new Error(`Unknown route middleware: '${s9}'.`);
            const i12 = await e20.runWithContext(() => o16(t8, n5));
            if (false === i12 || i12 instanceof Error) {
              const t9 = i12 || createError$1({ statusCode: 404, statusMessage: `Page Not Found: ${x4}` });
              return await e20.runWithContext(() => showError(t9)), false;
            }
            if (true !== i12 && (i12 || false === i12))
              return i12;
          }
        }
      }), v4.onError(async () => {
        delete e20._processingMiddleware, await e20.callHook("page:loading:end");
      }), e20.hooks.hookOnce("app:created", async () => {
        try {
          "name" in C5 && (C5.name = void 0), await v4.replace({ ...C5, force: true }), v4.options.scrollBehavior = ot.scrollBehavior;
        } catch (t8) {
          await e20.runWithContext(() => showError(t8));
        }
      }), { provide: { router: v4 } };
    } }), defineNuxtPlugin({ name: "nuxt:revive-payload:server", setup() {
      for (const n4 in st)
        e20 = n4, t7 = st[n4], useNuxtApp().ssrContext._payloadReducers[e20] = t7;
      var e20, t7;
    } }), defineNuxtPlugin({ name: "nuxt:global-components" })];
    lt = defineComponent({ props: { vnode: { type: Object, required: true }, route: { type: Object, required: true }, vnodeRef: Object, renderKey: String, trackRootNodes: Boolean }, setup(e20) {
      const t7 = e20.renderKey, n4 = e20.route, o13 = {};
      for (const r5 in e20.route)
        Object.defineProperty(o13, r5, { get: () => t7 === e20.renderKey ? e20.route[r5] : n4[r5] });
      return provide(Ke, shallowReactive(o13)), () => h(e20.vnode, { ref: e20.vnodeRef });
    } });
    ct = defineComponent({ name: "NuxtPage", inheritAttrs: false, props: { name: { type: String }, transition: { type: [Boolean, Object], default: void 0 }, keepalive: { type: [Boolean, Object], default: void 0 }, route: { type: Object }, pageKey: { type: [Function, String], default: null } }, setup(e20, { attrs: t7, slots: n4, expose: o13 }) {
      const r5 = useNuxtApp(), a7 = ref(), s8 = inject(Ke, null);
      let i11, l4;
      o13({ pageRef: a7 }), inject(Ie, null);
      const c5 = r5.deferHydration();
      return e20.pageKey && watch(() => e20.pageKey, (e21, t8) => {
        e21 !== t8 && r5.callHook("page:loading:start");
      }), () => h(Be, { name: e20.name, route: e20.route, ...t7 }, { default: (t8) => {
        if (!t8.Component)
          return void c5();
        const o14 = ((e21, t9) => {
          const n5 = e21.route.matched.find((t10) => {
            var n6;
            return (null == (n6 = t10.components) ? void 0 : n6.default) === e21.Component.type;
          }), o15 = t9 ?? (null == n5 ? void 0 : n5.meta.key) ?? (n5 && (r6 = e21.route, n5.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (e22) => {
            var t10;
            return (null == (t10 = r6.params[e22.slice(1)]) ? void 0 : t10.toString()) || "";
          })));
          var r6;
          return "function" == typeof o15 ? o15(e21.route) : o15;
        })(t8, e20.pageKey);
        r5.isHydrating || function(e21, t9, n5) {
          if (!e21)
            return false;
          return t9.matched.findIndex((e22) => {
            var t10;
            return (null == (t10 = e22.components) ? void 0 : t10.default) === (null == n5 ? void 0 : n5.type);
          }) < t9.matched.length - 1;
        }(s8, t8.route, t8.Component) || i11 !== o14 || r5.callHook("page:loading:end"), i11 = o14;
        const d5 = !!(e20.transition ?? t8.route.meta.pageTransition ?? Fe), p4 = d5 && function(e21) {
          const t9 = e21.map((e22) => ({ ...e22, onAfterLeave: e22.onAfterLeave ? toArray(e22.onAfterLeave) : void 0 }));
          return re(...t9);
        }([e20.transition, t8.route.meta.pageTransition, Fe, { onAfterLeave: () => {
          r5.callHook("page:transition:finish", t8.Component);
        } }].filter(Boolean));
        e20.keepalive ?? t8.route.meta.keepalive;
        var f3;
        return l4 = ((e21, t9, n5) => (t9 = true === t9 ? {} : t9, { default: () => {
          var o15;
          return t9 ? h(e21, t9, n5) : null == (o15 = n5.default) ? void 0 : o15.call(n5);
        } }))(Transition, d5 && p4, (f3 = h(Ue3, { suspensible: true, onPending: () => r5.callHook("page:start", t8.Component), onResolve: () => {
          nextTick(() => r5.callHook("page:finish", t8.Component).then(() => r5.callHook("page:loading:end")).finally(c5));
        } }, { default: () => h(lt, { key: o14 || void 0, vnode: n4.default ? h(ft, void 0, n4.default(t8)) : t8.Component, route: t8.route, renderKey: o14 || void 0, trackRootNodes: d5, vnodeRef: a7 }) }), { default: () => f3 })).default(), l4;
      } });
    } });
    ut = defineComponent({ __name: "app", __ssrInlineRender: true, setup: (e20) => (function(e21, t7) {
      const { title: n4, titleTemplate: o13, ...r5 } = e21;
      useHead({ title: n4, titleTemplate: o13, _flatMeta: r5 }, { ...t7, transform(e22) {
        const t8 = unpackMeta({ ...e22._flatMeta });
        return delete e22._flatMeta, { ...e22, meta: t8 };
      } });
    }({ title: "NuxtHub Starter", description: "A Nuxt template to build your full-stack application on the edge." }), (e21, t7, n4, o13) => {
      t7(ssrRenderComponent(ct, o13, null, n4));
    }) });
    dt = ut.setup;
    ut.setup = (e20, t7) => {
      const n4 = useSSRContext();
      return (n4.modules || (n4.modules = /* @__PURE__ */ new Set())).add("app.vue"), dt ? dt(e20, t7) : void 0;
    };
    pt = { __name: "nuxt-error-page", __ssrInlineRender: true, props: { error: Object }, setup(e20) {
      const t7 = e20.error;
      t7.stack && t7.stack.split("\n").splice(1).map((e21) => ({ text: e21.replace("webpack:/", "").replace(".vue", ".js").trim(), internal: e21.includes("node_modules") && !e21.includes(".cache") || e21.includes("internal") || e21.includes("new Promise") })).map((e21) => `<span class="stack${e21.internal ? " internal" : ""}">${e21.text}</span>`).join("\n");
      const n4 = Number(t7.statusCode || 500), o13 = 404 === n4, r5 = t7.statusMessage ?? (o13 ? "Page Not Found" : "Internal Server Error"), a7 = t7.message || t7.toString(), s8 = defineAsyncComponent(() => Promise.resolve().then(() => (init_error_404_DIaoKMev(), error_404_DIaoKMev_exports)).then((e21) => e21.default || e21)), i11 = defineAsyncComponent(() => Promise.resolve().then(() => (init_error_500_as1Q8Pgv(), error_500_as1Q8Pgv_exports)).then((e21) => e21.default || e21)), l4 = o13 ? s8 : i11;
      return (e21, t8, o14, s9) => {
        t8(ssrRenderComponent(unref(l4), mergeProps({ statusCode: unref(n4), statusMessage: unref(r5), description: unref(a7), stack: unref(void 0) }, s9), null, o14));
      };
    } };
    ft2 = pt.setup;
    pt.setup = (e20, t7) => {
      const n4 = useSSRContext();
      return (n4.modules || (n4.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@3.12.2_@opentelemetry+api@1.9.0_eslint@9.5.0_typescript@5.5.2_vite@5.3.1_vue-tsc@2.0.22/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"), ft2 ? ft2(e20, t7) : void 0;
    };
    ht = { __name: "nuxt-root", __ssrInlineRender: true, setup(e20) {
      const IslandRenderer = () => null, t7 = useNuxtApp();
      t7.deferHydration(), t7.ssrContext.url;
      const n4 = false;
      provide(Ke, hasInjectionContext() ? inject(Ke, useNuxtApp()._route) : useNuxtApp()._route), t7.hooks.callHookWith((e21) => e21.map((e22) => e22()), "vue:setup");
      const o13 = useError(), r5 = o13.value && !t7.ssrContext.error;
      onErrorCaptured((e21, n5, o14) => {
        t7.hooks.callHook("vue:error", e21, n5, o14).catch((e22) => console.error("[nuxt] Error in `vue:error` hook", e22));
        {
          const n6 = t7.runWithContext(() => showError(e21));
          return Ze(() => n6), false;
        }
      });
      const a7 = t7.ssrContext.islandContext;
      return (e21, t8, s8, i11) => {
        ssrRenderSuspense(t8, { default: () => {
          unref(r5) ? t8("<div></div>") : unref(o13) ? t8(ssrRenderComponent(unref(pt), { error: unref(o13) }, null, s8)) : unref(a7) ? t8(ssrRenderComponent(unref(IslandRenderer), { context: unref(a7) }, null, s8)) : unref(n4) ? renderVNode(t8, createVNode(resolveDynamicComponent(unref(n4)), null, null), s8) : t8(ssrRenderComponent(unref(ut), null, null, s8));
        }, _: 1 });
      };
    } };
    mt = ht.setup;
    ht.setup = (e20, t7) => {
      const n4 = useSSRContext();
      return (n4.modules || (n4.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@3.12.2_@opentelemetry+api@1.9.0_eslint@9.5.0_typescript@5.5.2_vite@5.3.1_vue-tsc@2.0.22/node_modules/nuxt/dist/app/components/nuxt-root.vue"), mt ? mt(e20, t7) : void 0;
    }, gt = async function(e20) {
      const t7 = createApp(ht), n4 = function(e21) {
        let t8 = 0;
        const n5 = { _name: qe, _scope: effectScope(), provide: void 0, globalName: "nuxt", versions: { get nuxt() {
          return "3.12.2";
        }, get vue() {
          return n5.vueApp.version;
        } }, payload: shallowReactive({ data: shallowReactive({}), state: reactive({}), once: /* @__PURE__ */ new Set(), _errors: shallowReactive({}) }), static: { data: {} }, runWithContext: (e22) => n5._scope.active && !getCurrentScope() ? n5._scope.run(() => callWithNuxt(n5, e22)) : callWithNuxt(n5, e22), isHydrating: false, deferHydration() {
          if (!n5.isHydrating)
            return () => {
            };
          t8++;
          let e22 = false;
          return () => {
            if (!e22)
              return e22 = true, t8--, 0 === t8 ? (n5.isHydrating = false, n5.callHook("app:suspense:resolve")) : void 0;
          };
        }, _asyncDataPromises: {}, _asyncData: shallowReactive({}), _payloadRevivers: {}, ...e21 };
        n5.payload.serverRendered = true, n5.hooks = createHooks(), n5.hook = n5.hooks.hook;
        {
          const contextCaller = async function(e22, t9) {
            for (const o14 of e22)
              await n5.runWithContext(() => o14(...t9));
          };
          n5.hooks.callHook = (e22, ...t9) => n5.hooks.callHookWith(contextCaller, e22, ...t9);
        }
        n5.callHook = n5.hooks.callHook, n5.provide = (e22, t9) => {
          const o14 = "$" + e22;
          defineGetter(n5, o14, t9), defineGetter(n5.vueApp.config.globalProperties, o14, t9);
        }, defineGetter(n5.vueApp, "$nuxt", n5), defineGetter(n5.vueApp.config.globalProperties, "$nuxt", n5), n5.ssrContext && (n5.ssrContext.nuxt = n5, n5.ssrContext._payloadReducers = {}, n5.payload.path = n5.ssrContext.url), n5.ssrContext = n5.ssrContext || {}, n5.ssrContext.payload && Object.assign(n5.payload, n5.ssrContext.payload), n5.ssrContext.payload = n5.payload, n5.ssrContext.config = { public: e21.ssrContext.runtimeConfig.public, app: e21.ssrContext.runtimeConfig.app };
        const o13 = e21.ssrContext.runtimeConfig;
        return n5.provide("config", o13), n5;
      }({ vueApp: t7, ssrContext: e20 });
      try {
        await async function(e21, t8) {
          var n5, o13, r5, a7;
          const s8 = [], i11 = [], l4 = [], c5 = [];
          let u5 = 0;
          async function executePlugin(n6) {
            var o14;
            const r6 = (null == (o14 = n6.dependsOn) ? void 0 : o14.filter((e22) => t8.some((t9) => t9._name === e22) && !s8.includes(e22))) ?? [];
            if (r6.length > 0)
              i11.push([new Set(r6), n6]);
            else {
              const t9 = async function(e22, t10) {
                if ("function" == typeof t10) {
                  const { provide: n7 } = await e22.runWithContext(() => t10(e22)) || {};
                  if (n7 && "object" == typeof n7)
                    for (const t11 in n7)
                      e22.provide(t11, n7[t11]);
                }
              }(e21, n6).then(async () => {
                n6._name && (s8.push(n6._name), await Promise.all(i11.map(async ([e22, t10]) => {
                  e22.has(n6._name) && (e22.delete(n6._name), 0 === e22.size && (u5++, await executePlugin(t10)));
                })));
              });
              n6.parallel ? l4.push(t9.catch((e22) => c5.push(e22))) : await t9;
            }
          }
          for (const r6 of t8)
            (null == (n5 = e21.ssrContext) ? void 0 : n5.islandContext) && false === (null == (o13 = r6.env) ? void 0 : o13.islands) || registerPluginHooks(e21, r6);
          for (const n6 of t8)
            (null == (r5 = e21.ssrContext) ? void 0 : r5.islandContext) && false === (null == (a7 = n6.env) ? void 0 : a7.islands) || await executePlugin(n6);
          if (await Promise.all(l4), u5)
            for (let e22 = 0; e22 < u5; e22++)
              await Promise.all(l4);
          if (c5.length)
            throw c5[0];
        }(n4, it), await n4.hooks.callHook("app:created", t7);
      } catch (e21) {
        await n4.hooks.callHook("app:error", e21), n4.payload.error = n4.payload.error || createError(e21);
      }
      if (null == e20 ? void 0 : e20._renderResponse)
        throw new Error("skipping render");
      return t7;
    };
    entry$1 = (e20) => gt(e20);
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/virtual/_virtual_spa-template.mjs
var virtual_spa_template_exports = {};
__export(virtual_spa_template_exports, {
  template: () => o2
});
var o2;
var init_virtual_spa_template = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/virtual/_virtual_spa-template.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    o2 = "";
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/renderer.mjs
var renderer_exports = {};
__export(renderer_exports, {
  A: () => isReadonly,
  B: () => renderVNode,
  C: () => createVNode,
  D: () => resolveDynamicComponent,
  E: () => isRef,
  F: () => isShallow,
  G: () => isReactive,
  H: () => toRaw,
  I: () => mergeProps,
  J: () => Ze,
  K: () => ft,
  L: () => defineAsyncComponent,
  M: () => withAsyncContext,
  N: () => ssrRenderAttrs,
  O: () => ssrRenderList,
  P: () => ssrInterpolate,
  Q: () => ssrRenderAttr,
  R: () => toValue,
  S: () => Ue3,
  T: () => Transition,
  U: () => withCtx,
  V: () => createTextVNode,
  W: () => toDisplayString,
  X: () => resolveComponent,
  Y: () => Zn,
  a: () => shallowReactive,
  b: () => reactive,
  c: () => computed,
  d: () => defineComponent,
  e: () => baseURL,
  f: () => watchEffect,
  g: () => getCurrentInstance,
  h: () => h,
  i: () => inject,
  j: () => useSSRContext,
  k: () => getActiveHead,
  l: () => createApp,
  m: () => effectScope,
  n: () => nextTick,
  o: () => getCurrentScope,
  p: () => provide,
  q: () => hasInjectionContext,
  r: () => ref,
  s: () => shallowRef,
  t: () => ssrRenderComponent,
  u: () => unref,
  v: () => unpackMeta,
  w: () => watch,
  x: () => onErrorCaptured,
  y: () => ssrRenderSuspense,
  z: () => toRef
});
function baseURL() {
  return useRuntimeConfig2().app.baseURL;
}
function buildAssetsURL(...e20) {
  return joinRelativeURL(publicAssetsURL(), useRuntimeConfig2().app.buildAssetsDir, ...e20);
}
function publicAssetsURL(...e20) {
  const t7 = useRuntimeConfig2().app, n4 = t7.cdnURL || t7.baseURL;
  return e20.length ? joinRelativeURL(n4, ...e20) : n4;
}
function getModuleDependencies(e20, t7) {
  if (t7._dependencies[e20])
    return t7._dependencies[e20];
  const n4 = t7._dependencies[e20] = { scripts: {}, styles: {}, preload: {}, prefetch: {} }, r5 = t7.manifest[e20];
  if (!r5)
    return n4;
  r5.file && (n4.preload[e20] = r5, (r5.isEntry || r5.sideEffects) && (n4.scripts[e20] = r5));
  for (const e21 of r5.css || [])
    n4.styles[e21] = n4.preload[e21] = n4.prefetch[e21] = t7.manifest[e21];
  for (const e21 of r5.assets || [])
    n4.preload[e21] = n4.prefetch[e21] = t7.manifest[e21];
  for (const e21 of r5.imports || []) {
    const r6 = getModuleDependencies(e21, t7);
    Object.assign(n4.styles, r6.styles), Object.assign(n4.preload, r6.preload), Object.assign(n4.prefetch, r6.prefetch);
  }
  const o13 = {};
  for (const e21 in n4.preload) {
    const t8 = n4.preload[e21];
    t8.preload && (o13[e21] = t8);
  }
  return n4.preload = o13, n4;
}
function getRequestDependencies(e20, t7) {
  if (e20._requestDependencies)
    return e20._requestDependencies;
  const n4 = function(e21, t8) {
    const n5 = Array.from(e21).sort().join(",");
    if (t8._dependencySets[n5])
      return t8._dependencySets[n5];
    const r5 = { scripts: {}, styles: {}, preload: {}, prefetch: {} };
    for (const n6 of e21) {
      const e22 = getModuleDependencies(n6, t8);
      Object.assign(r5.scripts, e22.scripts), Object.assign(r5.styles, e22.styles), Object.assign(r5.preload, e22.preload), Object.assign(r5.prefetch, e22.prefetch);
      for (const e23 of t8.manifest[n6]?.dynamicImports || []) {
        const n7 = getModuleDependencies(e23, t8);
        Object.assign(r5.prefetch, n7.scripts), Object.assign(r5.prefetch, n7.styles), Object.assign(r5.prefetch, n7.preload);
      }
    }
    const o13 = {};
    for (const e22 in r5.prefetch) {
      const t9 = r5.prefetch[e22];
      t9.prefetch && (o13[e22] = t9);
    }
    r5.prefetch = o13;
    for (const e22 in r5.preload)
      delete r5.prefetch[e22];
    for (const e22 in r5.styles)
      delete r5.preload[e22], delete r5.prefetch[e22];
    return t8._dependencySets[n5] = r5, r5;
  }(new Set(Array.from([...t7._entrypoints, ...e20.modules || e20._registeredComponents || []])), t7);
  return e20._requestDependencies = n4, n4;
}
function renderStyles(e20, t7) {
  const { styles: n4 } = getRequestDependencies(e20, t7);
  return Object.values(n4).map((e21) => renderLinkToString({ rel: "stylesheet", href: t7.buildAssetsURL(e21.file) })).join("");
}
function getResources(e20, t7) {
  return [...getPreloadLinks(e20, t7), ...getPrefetchLinks(e20, t7)];
}
function renderResourceHints(e20, t7) {
  return getResources(e20, t7).map(renderLinkToString).join("");
}
function renderResourceHeaders(e20, t7) {
  return { link: getResources(e20, t7).map(renderLinkToHeader).join(", ") };
}
function getPreloadLinks(e20, t7) {
  const { preload: n4 } = getRequestDependencies(e20, t7);
  return Object.values(n4).map((e21) => ({ rel: e21.module ? "modulepreload" : "preload", as: e21.resourceType, type: e21.mimeType ?? null, crossorigin: "font" === e21.resourceType || "script" === e21.resourceType || e21.module ? "" : null, href: t7.buildAssetsURL(e21.file) }));
}
function getPrefetchLinks(e20, t7) {
  const { prefetch: n4 } = getRequestDependencies(e20, t7);
  return Object.values(n4).map((e21) => ({ rel: "prefetch", as: e21.resourceType, type: e21.mimeType ?? null, crossorigin: "font" === e21.resourceType || "script" === e21.resourceType || e21.module ? "" : null, href: t7.buildAssetsURL(e21.file) }));
}
function renderScripts(e20, t7) {
  const { scripts: n4 } = getRequestDependencies(e20, t7);
  return Object.values(n4).map((e21) => {
    return n5 = { type: e21.module ? "module" : null, src: t7.buildAssetsURL(e21.file), defer: e21.module ? null : "", crossorigin: "" }, `<script${Object.entries(n5).map(([e22, t8]) => null === t8 ? "" : t8 ? ` ${e22}="${t8}"` : " " + e22).join("")}><\/script>`;
    var n5;
  }).join("");
}
function createRenderer$1(e20, t7) {
  const n4 = function({ manifest: e21, buildAssetsURL: t8 }) {
    const n5 = { buildAssetsURL: t8 || withLeadingSlash, manifest: void 0, updateManifest, _dependencies: void 0, _dependencySets: void 0, _entrypoints: void 0 };
    function updateManifest(e22) {
      const t9 = Object.entries(e22);
      n5.manifest = e22, n5._dependencies = {}, n5._dependencySets = {}, n5._entrypoints = t9.filter((e23) => e23[1].isEntry).map(([e23]) => e23);
    }
    return updateManifest(e21), n5;
  }(t7);
  return { rendererContext: n4, async renderToString(r5) {
    r5._registeredComponents = r5._registeredComponents || /* @__PURE__ */ new Set();
    const o13 = await Promise.resolve(e20).then((e21) => "default" in e21 ? e21.default : e21), s8 = await o13(r5), wrap = (e21) => () => e21(r5, n4);
    return { html: await t7.renderToString(s8, r5), renderResourceHeaders: wrap(renderResourceHeaders), renderResourceHints: wrap(renderResourceHints), renderStyles: wrap(renderStyles), renderScripts: wrap(renderScripts) };
  } };
}
function renderLinkToString(e20) {
  return `<link${Object.entries(e20).map(([e21, t7]) => null === t7 ? "" : t7 ? ` ${e21}="${t7}"` : " " + e21).join("")}>`;
}
function renderLinkToHeader(e20) {
  return `<${e20.href}>${Object.entries(e20).map(([e21, t7]) => "href" === e21 || null === t7 ? "" : t7 ? `; ${e21}="${t7}"` : `; ${e21}`).join("")}`;
}
function is_primitive(e20) {
  return Object(e20) !== e20;
}
function is_plain_object(e20) {
  const t7 = Object.getPrototypeOf(e20);
  return t7 === Object.prototype || null === t7 || Object.getOwnPropertyNames(t7).sort().join("\0") === v;
}
function get_type(e20) {
  return Object.prototype.toString.call(e20).slice(8, -1);
}
function get_escaped_char(e20) {
  switch (e20) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return e20 < " " ? `\\u${e20.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(e20) {
  let t7 = "", n4 = 0;
  const r5 = e20.length;
  for (let o13 = 0; o13 < r5; o13 += 1) {
    const r6 = get_escaped_char(e20[o13]);
    r6 && (t7 += e20.slice(n4, o13) + r6, n4 = o13 + 1);
  }
  return `"${0 === n4 ? e20 : t7 + e20.slice(n4)}"`;
}
function enumerable_symbols(e20) {
  return Object.getOwnPropertySymbols(e20).filter((t7) => Object.getOwnPropertyDescriptor(e20, t7).enumerable);
}
function uneval(e20, t7) {
  const n4 = /* @__PURE__ */ new Map(), r5 = [], o13 = /* @__PURE__ */ new Map();
  !function walk(e21) {
    if ("function" == typeof e21)
      throw new DevalueError("Cannot stringify a function", r5);
    if (!is_primitive(e21)) {
      if (n4.has(e21))
        return void n4.set(e21, n4.get(e21) + 1);
      n4.set(e21, 1);
      switch (get_type(e21)) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          e21.forEach((e22, t8) => {
            r5.push(`[${t8}]`), walk(e22), r5.pop();
          });
          break;
        case "Set":
          Array.from(e21).forEach(walk);
          break;
        case "Map":
          for (const [t8, n5] of e21)
            r5.push(`.get(${is_primitive(t8) ? stringify_primitive$1(t8) : "..."})`), walk(n5), r5.pop();
          break;
        default:
          if (!is_plain_object(e21))
            throw new DevalueError("Cannot stringify arbitrary non-POJOs", r5);
          if (enumerable_symbols(e21).length > 0)
            throw new DevalueError("Cannot stringify POJOs with symbolic keys", r5);
          for (const t8 in e21)
            r5.push(`.${t8}`), walk(e21[t8]), r5.pop();
      }
    }
  }(e20);
  const s8 = /* @__PURE__ */ new Map();
  function stringify3(e21) {
    if (s8.has(e21))
      return s8.get(e21);
    if (is_primitive(e21))
      return stringify_primitive$1(e21);
    if (o13.has(e21))
      return o13.get(e21);
    const t8 = get_type(e21);
    switch (t8) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify3(e21.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(e21.source)}, "${e21.flags}")`;
      case "Date":
        return `new Date(${e21.getTime()})`;
      case "Array":
        const n5 = e21.map((t9, n6) => n6 in e21 ? stringify3(t9) : ""), r6 = 0 === e21.length || e21.length - 1 in e21 ? "" : ",";
        return `[${n5.join(",")}${r6}]`;
      case "Set":
      case "Map":
        return `new ${t8}([${Array.from(e21).map(stringify3).join(",")}])`;
      default:
        const o14 = `{${Object.keys(e21).map((t9) => `${function(e22) {
          return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e22) ? e22 : escape_unsafe_chars(JSON.stringify(e22));
        }(t9)}:${stringify3(e21[t9])}`).join(",")}}`;
        return null === Object.getPrototypeOf(e21) ? Object.keys(e21).length > 0 ? `Object.assign(Object.create(null),${o14})` : "Object.create(null)" : o14;
    }
  }
  Array.from(n4).filter((e21) => e21[1] > 1).sort((e21, t8) => t8[1] - e21[1]).forEach((e21, t8) => {
    s8.set(e21[0], function(e22) {
      let t9 = "";
      do {
        t9 = _2[e22 % _2.length] + t9, e22 = ~~(e22 / _2.length) - 1;
      } while (e22 >= 0);
      return C2.test(t9) ? `${t9}0` : t9;
    }(t8));
  });
  const i11 = stringify3(e20);
  if (s8.size) {
    const e21 = [], t8 = [], n5 = [];
    return s8.forEach((r6, s9) => {
      if (e21.push(r6), o13.has(s9))
        return void n5.push(o13.get(s9));
      if (is_primitive(s9))
        return void n5.push(stringify_primitive$1(s9));
      switch (get_type(s9)) {
        case "Number":
        case "String":
        case "Boolean":
          n5.push(`Object(${stringify3(s9.valueOf())})`);
          break;
        case "RegExp":
          n5.push(s9.toString());
          break;
        case "Date":
          n5.push(`new Date(${s9.getTime()})`);
          break;
        case "Array":
          n5.push(`Array(${s9.length})`), s9.forEach((e22, n6) => {
            t8.push(`${r6}[${n6}]=${stringify3(e22)}`);
          });
          break;
        case "Set":
          n5.push("new Set"), t8.push(`${r6}.${Array.from(s9).map((e22) => `add(${stringify3(e22)})`).join(".")}`);
          break;
        case "Map":
          n5.push("new Map"), t8.push(`${r6}.${Array.from(s9).map(([e22, t9]) => `set(${stringify3(e22)}, ${stringify3(t9)})`).join(".")}`);
          break;
        default:
          n5.push(null === Object.getPrototypeOf(s9) ? "Object.create(null)" : "{}"), Object.keys(s9).forEach((e22) => {
            t8.push(`${r6}${function(e23) {
              return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e23) ? `.${e23}` : `[${escape_unsafe_chars(JSON.stringify(e23))}]`;
            }(e22)}=${stringify3(s9[e22])}`);
          });
      }
    }), t8.push(`return ${i11}`), `(function(${e21.join(",")}){${t8.join(";")}}(${n5.join(",")}))`;
  }
  return i11;
}
function escape_unsafe_char(e20) {
  return y[e20] || e20;
}
function escape_unsafe_chars(e20) {
  return e20.replace(b, escape_unsafe_char);
}
function stringify_primitive$1(e20) {
  if ("string" == typeof e20)
    return stringify_string(e20);
  if (void 0 === e20)
    return "void 0";
  if (0 === e20 && 1 / e20 < 0)
    return "-0";
  const t7 = String(e20);
  return "number" == typeof e20 ? t7.replace(/^(-)?0\./, "$1.") : "bigint" == typeof e20 ? e20 + "n" : t7;
}
function stringify(e20, t7) {
  const n4 = [], r5 = /* @__PURE__ */ new Map(), o13 = [];
  for (const e21 in t7)
    o13.push({ key: e21, fn: t7[e21] });
  const s8 = [];
  let i11 = 0;
  const a7 = function flatten(e21) {
    if ("function" == typeof e21)
      throw new DevalueError("Cannot stringify a function", s8);
    if (r5.has(e21))
      return r5.get(e21);
    if (void 0 === e21)
      return S2;
    if (Number.isNaN(e21))
      return w;
    if (e21 === 1 / 0)
      return R2;
    if (e21 === -1 / 0)
      return T2;
    if (0 === e21 && 1 / e21 < 0)
      return x;
    const t8 = i11++;
    r5.set(e21, t8);
    for (const { key: r6, fn: s9 } of o13) {
      const o14 = s9(e21);
      if (o14)
        return n4[t8] = `["${r6}",${flatten(o14)}]`, t8;
    }
    let a8 = "";
    if (is_primitive(e21))
      a8 = stringify_primitive(e21);
    else {
      switch (get_type(e21)) {
        case "Number":
        case "String":
        case "Boolean":
          a8 = `["Object",${stringify_primitive(e21)}]`;
          break;
        case "BigInt":
          a8 = `["BigInt",${e21}]`;
          break;
        case "Date":
          a8 = `["Date","${!isNaN(e21.getDate()) ? e21.toISOString() : ""}"]`;
          break;
        case "RegExp":
          const { source: t9, flags: n5 } = e21;
          a8 = n5 ? `["RegExp",${stringify_string(t9)},"${n5}"]` : `["RegExp",${stringify_string(t9)}]`;
          break;
        case "Array":
          a8 = "[";
          for (let t10 = 0; t10 < e21.length; t10 += 1)
            t10 > 0 && (a8 += ","), t10 in e21 ? (s8.push(`[${t10}]`), a8 += flatten(e21[t10]), s8.pop()) : a8 += A2;
          a8 += "]";
          break;
        case "Set":
          a8 = '["Set"';
          for (const t10 of e21)
            a8 += `,${flatten(t10)}`;
          a8 += "]";
          break;
        case "Map":
          a8 = '["Map"';
          for (const [t10, n6] of e21)
            s8.push(`.get(${is_primitive(t10) ? stringify_primitive(t10) : "..."})`), a8 += `,${flatten(t10)},${flatten(n6)}`, s8.pop();
          a8 += "]";
          break;
        default:
          if (!is_plain_object(e21))
            throw new DevalueError("Cannot stringify arbitrary non-POJOs", s8);
          if (enumerable_symbols(e21).length > 0)
            throw new DevalueError("Cannot stringify POJOs with symbolic keys", s8);
          if (null === Object.getPrototypeOf(e21)) {
            a8 = '["null"';
            for (const t10 in e21)
              s8.push(`.${t10}`), a8 += `,${stringify_string(t10)},${flatten(e21[t10])}`, s8.pop();
            a8 += "]";
          } else {
            a8 = "{";
            let t10 = false;
            for (const n6 in e21)
              t10 && (a8 += ","), t10 = true, s8.push(`.${n6}`), a8 += `${stringify_string(n6)}:${flatten(e21[n6])}`, s8.pop();
            a8 += "}";
          }
      }
    }
    return n4[t8] = a8, t8;
  }(e20);
  return a7 < 0 ? `${a7}` : `[${n4.join(",")}]`;
}
function stringify_primitive(e20) {
  const t7 = typeof e20;
  return "string" === t7 ? stringify_string(e20) : e20 instanceof String ? stringify_string(e20.toString()) : void 0 === e20 ? S2.toString() : 0 === e20 && 1 / e20 < 0 ? x.toString() : "bigint" === t7 ? `["BigInt","${e20}"]` : String(e20);
}
function makeMap(e20, t7) {
  const n4 = new Set(e20.split(","));
  return (e21) => n4.has(e21);
}
function normalizeStyle(e20) {
  if (j3(e20)) {
    const t7 = {};
    for (let n4 = 0; n4 < e20.length; n4++) {
      const r5 = e20[n4], o13 = isString(r5) ? parseStringStyle(r5) : normalizeStyle(r5);
      if (o13)
        for (const e21 in o13)
          t7[e21] = o13[e21];
    }
    return t7;
  }
  if (isString(e20) || isObject(e20))
    return e20;
}
function parseStringStyle(e20) {
  const t7 = {};
  return e20.replace(W, "").split(U2).forEach((e21) => {
    if (e21) {
      const n4 = e21.split(z);
      n4.length > 1 && (t7[n4[0].trim()] = n4[1].trim());
    }
  }), t7;
}
function normalizeClass(e20) {
  let t7 = "";
  if (isString(e20))
    t7 = e20;
  else if (j3(e20))
    for (let n4 = 0; n4 < e20.length; n4++) {
      const r5 = normalizeClass(e20[n4]);
      r5 && (t7 += r5 + " ");
    }
  else if (isObject(e20))
    for (const n4 in e20)
      e20[n4] && (t7 += n4 + " ");
  return t7.trim();
}
function includeBooleanAttr(e20) {
  return !!e20 || "" === e20;
}
function isRenderableAttrValue(e20) {
  if (null == e20)
    return false;
  const t7 = typeof e20;
  return "string" === t7 || "number" === t7 || "boolean" === t7;
}
function escapeHtml$1(e20) {
  const t7 = "" + e20, n4 = ee2.exec(t7);
  if (!n4)
    return t7;
  let r5, o13, s8 = "", i11 = 0;
  for (o13 = n4.index; o13 < t7.length; o13++) {
    switch (t7.charCodeAt(o13)) {
      case 34:
        r5 = "&quot;";
        break;
      case 38:
        r5 = "&amp;";
        break;
      case 39:
        r5 = "&#39;";
        break;
      case 60:
        r5 = "&lt;";
        break;
      case 62:
        r5 = "&gt;";
        break;
      default:
        continue;
    }
    i11 !== o13 && (s8 += t7.slice(i11, o13)), i11 = o13 + 1, s8 += r5;
  }
  return i11 !== o13 ? s8 + t7.slice(i11, o13) : s8;
}
function effectScope(e20) {
  return new EffectScope(e20);
}
function getCurrentScope() {
  return ne2;
}
function triggerComputed(e20) {
  return e20.value;
}
function preCleanupEffect(e20) {
  e20._trackId++, e20._depsLength = 0;
}
function postCleanupEffect(e20) {
  if (e20.deps.length > e20._depsLength) {
    for (let t7 = e20._depsLength; t7 < e20.deps.length; t7++)
      cleanupDepEffect(e20.deps[t7], e20);
    e20.deps.length = e20._depsLength;
  }
}
function cleanupDepEffect(e20, t7) {
  const n4 = e20.get(t7);
  void 0 !== n4 && t7._trackId !== n4 && (e20.delete(t7), 0 === e20.size && e20.cleanup());
}
function pauseTracking() {
  ie2.push(oe2), oe2 = false;
}
function resetTracking() {
  const e20 = ie2.pop();
  oe2 = void 0 === e20 || e20;
}
function pauseScheduling() {
  se2++;
}
function resetScheduling() {
  for (se2--; !se2 && ae2.length; )
    ae2.shift()();
}
function trackEffect(e20, t7, n4) {
  if (t7.get(e20) !== e20._trackId) {
    t7.set(e20, e20._trackId);
    const n5 = e20.deps[e20._depsLength];
    n5 !== t7 ? (n5 && cleanupDepEffect(n5, e20), e20.deps[e20._depsLength++] = t7) : e20._depsLength++;
  }
}
function triggerEffects(e20, t7, n4) {
  pauseScheduling();
  for (const n5 of e20.keys()) {
    let r5;
    !e20.computed && n5.computed && n5._runnings > 0 && (null != r5 ? r5 : r5 = e20.get(n5) === n5._trackId) ? n5._dirtyLevel = 2 : (n5._dirtyLevel < t7 && (null != r5 ? r5 : r5 = e20.get(n5) === n5._trackId) && (n5._shouldSchedule || (n5._shouldSchedule = 0 === n5._dirtyLevel), n5.computed && 2 === n5._dirtyLevel && (n5._shouldSchedule = true), n5._dirtyLevel = t7), n5._shouldSchedule && (null != r5 ? r5 : r5 = e20.get(n5) === n5._trackId) && (n5.trigger(), n5._runnings && !n5.allowRecurse || 3 === n5._dirtyLevel || (n5._shouldSchedule = false, n5.scheduler && ae2.push(n5.scheduler))));
  }
  resetScheduling();
}
function track(e20, t7, n4) {
  if (oe2 && re3) {
    let t8 = le2.get(e20);
    t8 || le2.set(e20, t8 = /* @__PURE__ */ new Map());
    let r5 = t8.get(n4);
    r5 || t8.set(n4, r5 = createDep(() => t8.delete(n4))), trackEffect(re3, r5);
  }
}
function trigger(e20, t7, n4, r5, o13, s8) {
  const i11 = le2.get(e20);
  if (!i11)
    return;
  let a7 = [];
  if ("clear" === t7)
    a7 = [...i11.values()];
  else if ("length" === n4 && j3(e20)) {
    const e21 = Number(r5);
    i11.forEach((t8, n5) => {
      ("length" === n5 || !isSymbol(n5) && n5 >= e21) && a7.push(t8);
    });
  } else
    switch (void 0 !== n4 && a7.push(i11.get(n4)), t7) {
      case "add":
        j3(e20) ? isIntegerKey(n4) && a7.push(i11.get("length")) : (a7.push(i11.get(ce2)), isMap(e20) && a7.push(i11.get(ue2)));
        break;
      case "delete":
        j3(e20) || (a7.push(i11.get(ce2)), isMap(e20) && a7.push(i11.get(ue2)));
        break;
      case "set":
        isMap(e20) && a7.push(i11.get(ce2));
    }
  pauseScheduling();
  for (const e21 of a7)
    e21 && triggerEffects(e21, 5);
  resetScheduling();
}
function createArrayInstrumentations() {
  const e20 = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t7) => {
    e20[t7] = function(...e21) {
      const n4 = toRaw(this);
      for (let e22 = 0, t8 = this.length; e22 < t8; e22++)
        track(n4, 0, e22 + "");
      const r5 = n4[t7](...e21);
      return -1 === r5 || false === r5 ? n4[t7](...e21.map(toRaw)) : r5;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t7) => {
    e20[t7] = function(...e21) {
      pauseTracking(), pauseScheduling();
      const n4 = toRaw(this)[t7].apply(this, e21);
      return resetScheduling(), resetTracking(), n4;
    };
  }), e20;
}
function hasOwnProperty(e20) {
  isSymbol(e20) || (e20 = String(e20));
  const t7 = toRaw(this);
  return track(t7, 0, e20), t7.hasOwnProperty(e20);
}
function get(e20, t7, n4 = false, r5 = false) {
  const o13 = toRaw(e20 = e20.__v_raw), s8 = toRaw(t7);
  n4 || (hasChanged(t7, s8) && track(o13, 0, t7), track(o13, 0, s8));
  const { has: i11 } = getProto(o13), a7 = r5 ? toShallow : n4 ? toReadonly : toReactive;
  return i11.call(o13, t7) ? a7(e20.get(t7)) : i11.call(o13, s8) ? a7(e20.get(s8)) : void (e20 !== o13 && e20.get(t7));
}
function has(e20, t7 = false) {
  const n4 = this.__v_raw, r5 = toRaw(n4), o13 = toRaw(e20);
  return t7 || (hasChanged(e20, o13) && track(r5, 0, e20), track(r5, 0, o13)), e20 === o13 ? n4.has(e20) : n4.has(e20) || n4.has(o13);
}
function size(e20, t7 = false) {
  return e20 = e20.__v_raw, !t7 && track(toRaw(e20), 0, ce2), Reflect.get(e20, "size", e20);
}
function add(e20) {
  e20 = toRaw(e20);
  const t7 = toRaw(this);
  return getProto(t7).has.call(t7, e20) || (t7.add(e20), trigger(t7, "add", e20, e20)), this;
}
function set(e20, t7) {
  t7 = toRaw(t7);
  const n4 = toRaw(this), { has: r5, get: o13 } = getProto(n4);
  let s8 = r5.call(n4, e20);
  s8 || (e20 = toRaw(e20), s8 = r5.call(n4, e20));
  const i11 = o13.call(n4, e20);
  return n4.set(e20, t7), s8 ? hasChanged(t7, i11) && trigger(n4, "set", e20, t7) : trigger(n4, "add", e20, t7), this;
}
function deleteEntry(e20) {
  const t7 = toRaw(this), { has: n4, get: r5 } = getProto(t7);
  let o13 = n4.call(t7, e20);
  o13 || (e20 = toRaw(e20), o13 = n4.call(t7, e20)), r5 && r5.call(t7, e20);
  const s8 = t7.delete(e20);
  return o13 && trigger(t7, "delete", e20, void 0), s8;
}
function clear() {
  const e20 = toRaw(this), t7 = 0 !== e20.size, n4 = e20.clear();
  return t7 && trigger(e20, "clear", void 0, void 0), n4;
}
function createForEach(e20, t7) {
  return function(n4, r5) {
    const o13 = this, s8 = o13.__v_raw, i11 = toRaw(s8), a7 = t7 ? toShallow : e20 ? toReadonly : toReactive;
    return !e20 && track(i11, 0, ce2), s8.forEach((e21, t8) => n4.call(r5, a7(e21), a7(t8), o13));
  };
}
function createIterableMethod(e20, t7, n4) {
  return function(...r5) {
    const o13 = this.__v_raw, s8 = toRaw(o13), i11 = isMap(s8), a7 = "entries" === e20 || e20 === Symbol.iterator && i11, l4 = "keys" === e20 && i11, c5 = o13[e20](...r5), u5 = n4 ? toShallow : t7 ? toReadonly : toReactive;
    return !t7 && track(s8, 0, l4 ? ue2 : ce2), { next() {
      const { value: e21, done: t8 } = c5.next();
      return t8 ? { value: e21, done: t8 } : { value: a7 ? [u5(e21[0]), u5(e21[1])] : u5(e21), done: t8 };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function createReadonlyMethod(e20) {
  return function(...t7) {
    return "delete" !== e20 && ("clear" === e20 ? void 0 : this);
  };
}
function createInstrumentations() {
  const e20 = { get(e21) {
    return get(this, e21);
  }, get size() {
    return size(this);
  }, has, add, set, delete: deleteEntry, clear, forEach: createForEach(false, false) }, t7 = { get(e21) {
    return get(this, e21, false, true);
  }, get size() {
    return size(this);
  }, has, add, set, delete: deleteEntry, clear, forEach: createForEach(false, true) }, n4 = { get(e21) {
    return get(this, e21, true);
  }, get size() {
    return size(this, true);
  }, has(e21) {
    return has.call(this, e21, true);
  }, add: createReadonlyMethod("add"), set: createReadonlyMethod("set"), delete: createReadonlyMethod("delete"), clear: createReadonlyMethod("clear"), forEach: createForEach(true, false) }, r5 = { get(e21) {
    return get(this, e21, true, true);
  }, get size() {
    return size(this, true);
  }, has(e21) {
    return has.call(this, e21, true);
  }, add: createReadonlyMethod("add"), set: createReadonlyMethod("set"), delete: createReadonlyMethod("delete"), clear: createReadonlyMethod("clear"), forEach: createForEach(true, true) };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o13) => {
    e20[o13] = createIterableMethod(o13, false, false), n4[o13] = createIterableMethod(o13, true, false), t7[o13] = createIterableMethod(o13, false, true), r5[o13] = createIterableMethod(o13, true, true);
  }), [e20, n4, t7, r5];
}
function createInstrumentationGetter(e20, t7) {
  const n4 = t7 ? e20 ? be2 : _e2 : e20 ? ve2 : ye2;
  return (t8, r5, o13) => "__v_isReactive" === r5 ? !e20 : "__v_isReadonly" === r5 ? e20 : "__v_raw" === r5 ? t8 : Reflect.get(hasOwn(n4, r5) && r5 in t8 ? n4 : t8, r5, o13);
}
function reactive(e20) {
  return isReadonly(e20) ? e20 : createReactiveObject(e20, false, he2, ke2, Ae2);
}
function shallowReactive(e20) {
  return createReactiveObject(e20, false, me2, Ce2, we2);
}
function readonly(e20) {
  return createReactiveObject(e20, true, ge2, Se2, Re2);
}
function createReactiveObject(e20, t7, n4, r5, o13) {
  if (!isObject(e20))
    return e20;
  if (e20.__v_raw && (!t7 || !e20.__v_isReactive))
    return e20;
  const s8 = o13.get(e20);
  if (s8)
    return s8;
  const i11 = (a7 = e20).__v_skip || !Object.isExtensible(a7) ? 0 : function(e21) {
    switch (e21) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }(toRawType(a7));
  var a7;
  if (0 === i11)
    return e20;
  const l4 = new Proxy(e20, 2 === i11 ? r5 : n4);
  return o13.set(e20, l4), l4;
}
function isReactive(e20) {
  return isReadonly(e20) ? isReactive(e20.__v_raw) : !(!e20 || !e20.__v_isReactive);
}
function isReadonly(e20) {
  return !(!e20 || !e20.__v_isReadonly);
}
function isShallow(e20) {
  return !(!e20 || !e20.__v_isShallow);
}
function isProxy(e20) {
  return !!e20 && !!e20.__v_raw;
}
function toRaw(e20) {
  const t7 = e20 && e20.__v_raw;
  return t7 ? toRaw(t7) : e20;
}
function trackRefValue(e20) {
  var t7;
  oe2 && re3 && (e20 = toRaw(e20), trackEffect(re3, null != (t7 = e20.dep) ? t7 : e20.dep = createDep(() => e20.dep = void 0, e20 instanceof ComputedRefImpl ? e20 : void 0)));
}
function triggerRefValue(e20, t7 = 5, n4, r5) {
  const o13 = (e20 = toRaw(e20)).dep;
  o13 && triggerEffects(o13, t7);
}
function isRef(e20) {
  return !(!e20 || true !== e20.__v_isRef);
}
function ref(e20) {
  return createRef(e20, false);
}
function shallowRef(e20) {
  return createRef(e20, true);
}
function createRef(e20, t7) {
  return isRef(e20) ? e20 : new RefImpl(e20, t7);
}
function unref(e20) {
  return isRef(e20) ? e20.value : e20;
}
function toValue(e20) {
  return isFunction(e20) ? e20() : unref(e20);
}
function proxyRefs(e20) {
  return isReactive(e20) ? e20 : new Proxy(e20, xe3);
}
function toRef(e20, t7, n4) {
  return isRef(e20) ? e20 : isFunction(e20) ? new GetterRefImpl(e20) : isObject(e20) && arguments.length > 1 ? function(e21, t8, n5) {
    const r5 = e21[t8];
    return isRef(r5) ? r5 : new ObjectRefImpl(e21, t8, n5);
  }(e20, t7, n4) : ref(e20);
}
function callWithErrorHandling(e20, t7, n4, r5) {
  try {
    return r5 ? e20(...r5) : e20();
  } catch (e21) {
    handleError(e21, t7, n4);
  }
}
function callWithAsyncErrorHandling(e20, t7, n4, r5) {
  if (isFunction(e20)) {
    const o13 = callWithErrorHandling(e20, t7, n4, r5);
    return o13 && isPromise(o13) && o13.catch((e21) => {
      handleError(e21, t7, n4);
    }), o13;
  }
  if (j3(e20)) {
    const o13 = [];
    for (let s8 = 0; s8 < e20.length; s8++)
      o13.push(callWithAsyncErrorHandling(e20[s8], t7, n4, r5));
    return o13;
  }
}
function handleError(e20, t7, n4, r5 = true) {
  t7 && t7.vnode;
  if (t7) {
    let r6 = t7.parent;
    const o13 = t7.proxy, s8 = `https://vuejs.org/error-reference/#runtime-${n4}`;
    for (; r6; ) {
      const t8 = r6.ec;
      if (t8) {
        for (let n5 = 0; n5 < t8.length; n5++)
          if (false === t8[n5](e20, o13, s8))
            return;
      }
      r6 = r6.parent;
    }
    const i11 = t7.appContext.config.errorHandler;
    if (i11)
      return pauseTracking(), callWithErrorHandling(i11, null, 10, [e20, o13, s8]), void resetTracking();
  }
  !function(e21, t8, n5, r6 = true) {
    console.error(e21);
  }(e20, 0, 0, r5);
}
function nextTick(e20) {
  const t7 = Ne2 || Le2;
  return e20 ? t7.then(this ? e20.bind(this) : e20) : t7;
}
function queueJob(e20) {
  Oe2.length && Oe2.includes(e20, $e2 && e20.allowRecurse ? Pe2 + 1 : Pe2) || (null == e20.id ? Oe2.push(e20) : Oe2.splice(function(e21) {
    let t7 = Pe2 + 1, n4 = Oe2.length;
    for (; t7 < n4; ) {
      const r5 = t7 + n4 >>> 1, o13 = Oe2[r5], s8 = getId(o13);
      s8 < e21 || s8 === e21 && o13.pre ? t7 = r5 + 1 : n4 = r5;
    }
    return t7;
  }(e20.id), 0, e20), queueFlush());
}
function queueFlush() {
  $e2 || Ee2 || (Ee2 = true, Ne2 = Le2.then(flushJobs));
}
function queuePostFlushCb(e20) {
  j3(e20) ? je2.push(...e20) : He2 && He2.includes(e20, e20.allowRecurse ? Ie2 + 1 : Ie2) || je2.push(e20), queueFlush();
}
function flushPreFlushCbs(e20, t7, n4 = $e2 ? Pe2 + 1 : 0) {
  for (; n4 < Oe2.length; n4++) {
    const t8 = Oe2[n4];
    if (t8 && t8.pre) {
      if (e20 && t8.id !== e20.uid)
        continue;
      Oe2.splice(n4, 1), n4--, t8();
    }
  }
}
function flushPostFlushCbs(e20) {
  if (je2.length) {
    const e21 = [...new Set(je2)].sort((e22, t7) => getId(e22) - getId(t7));
    if (je2.length = 0, He2)
      return void He2.push(...e21);
    for (He2 = e21, Ie2 = 0; Ie2 < He2.length; Ie2++) {
      const e22 = He2[Ie2];
      false !== e22.active && e22();
    }
    He2 = null, Ie2 = 0;
  }
}
function flushJobs(e20) {
  Ee2 = false, $e2 = true, Oe2.sort(comparator);
  try {
    for (Pe2 = 0; Pe2 < Oe2.length; Pe2++) {
      const e21 = Oe2[Pe2];
      e21 && false !== e21.active && callWithErrorHandling(e21, null, 14);
    }
  } finally {
    Pe2 = 0, Oe2.length = 0, flushPostFlushCbs(), $e2 = false, Ne2 = null, (Oe2.length || je2.length) && flushJobs();
  }
}
function emit(e20, t7, ...n4) {
  if (e20.isUnmounted)
    return;
  const r5 = e20.vnode.props || $2;
  let o13 = n4;
  const s8 = t7.startsWith("update:"), i11 = s8 && t7.slice(7);
  if (i11 && i11 in r5) {
    const e21 = `${"modelValue" === i11 ? "model" : i11}Modifiers`, { number: t8, trim: s9 } = r5[e21] || $2;
    s9 && (o13 = n4.map((e22) => isString(e22) ? e22.trim() : e22)), t8 && (o13 = n4.map(looseToNumber));
  }
  let a7, l4 = r5[a7 = B(t7)] || r5[a7 = B(N(t7))];
  !l4 && s8 && (l4 = r5[a7 = B(V(t7))]), l4 && callWithAsyncErrorHandling(l4, e20, 6, o13);
  const c5 = r5[a7 + "Once"];
  if (c5) {
    if (e20.emitted) {
      if (e20.emitted[a7])
        return;
    } else
      e20.emitted = {};
    e20.emitted[a7] = true, callWithAsyncErrorHandling(c5, e20, 6, o13);
  }
}
function normalizeEmitsOptions(e20, t7, n4 = false) {
  const r5 = t7.emitsCache, o13 = r5.get(e20);
  if (void 0 !== o13)
    return o13;
  const s8 = e20.emits;
  let i11 = {}, a7 = false;
  if (__VUE_OPTIONS_API__ && !isFunction(e20)) {
    const extendEmits = (e21) => {
      const n5 = normalizeEmitsOptions(e21, t7, true);
      n5 && (a7 = true, O(i11, n5));
    };
    !n4 && t7.mixins.length && t7.mixins.forEach(extendEmits), e20.extends && extendEmits(e20.extends), e20.mixins && e20.mixins.forEach(extendEmits);
  }
  return s8 || a7 ? (j3(s8) ? s8.forEach((e21) => i11[e21] = null) : O(i11, s8), isObject(e20) && r5.set(e20, i11), i11) : (isObject(e20) && r5.set(e20, null), null);
}
function isEmitListener(e20, t7) {
  return !(!e20 || !isOn(t7)) && (t7 = t7.slice(2).replace(/Once$/, ""), hasOwn(e20, t7[0].toLowerCase() + t7.slice(1)) || hasOwn(e20, V(t7)) || hasOwn(e20, t7));
}
function setCurrentRenderingInstance$1(e20) {
  const t7 = Me2;
  return Me2 = e20, Ve2 = e20 && e20.type.__scopeId || null, t7;
}
function withCtx(e20, t7 = Me2, n4) {
  if (!t7)
    return e20;
  if (e20._n)
    return e20;
  const renderFnWithContext = (...n5) => {
    renderFnWithContext._d && setBlockTracking(-1);
    const r5 = setCurrentRenderingInstance$1(t7);
    let o13;
    try {
      o13 = e20(...n5);
    } finally {
      setCurrentRenderingInstance$1(r5), renderFnWithContext._d && setBlockTracking(1);
    }
    return o13;
  };
  return renderFnWithContext._n = true, renderFnWithContext._c = true, renderFnWithContext._d = true, renderFnWithContext;
}
function renderComponentRoot$1(e20) {
  const { type: t7, vnode: n4, proxy: r5, withProxy: o13, propsOptions: [s8], slots: i11, attrs: a7, emit: l4, render: c5, renderCache: u5, props: d5, data: f3, setupState: g3, ctx: m10, inheritAttrs: y5 } = e20, v4 = setCurrentRenderingInstance$1(e20);
  let _5, b5;
  try {
    if (4 & n4.shapeFlag) {
      const e21 = o13 || r5, t8 = e21;
      _5 = normalizeVNode$1(c5.call(t8, e21, u5, d5, g3, f3, m10)), b5 = a7;
    } else {
      const e21 = t7;
      0, _5 = normalizeVNode$1(e21.length > 1 ? e21(d5, { attrs: a7, slots: i11, emit: l4 }) : e21(d5, null)), b5 = t7.props ? a7 : getFunctionalFallthrough(a7);
    }
  } catch (t8) {
    yt.length = 0, handleError(t8, e20, 1), _5 = createVNode(gt2);
  }
  let C5 = _5;
  if (b5 && false !== y5) {
    const e21 = Object.keys(b5), { shapeFlag: t8 } = C5;
    e21.length && 7 & t8 && (s8 && e21.some(isModelListener) && (b5 = filterModelListeners(b5, s8)), C5 = cloneVNode(C5, b5, false, true));
  }
  return n4.dirs && (C5 = cloneVNode(C5, null, false, true), C5.dirs = C5.dirs ? C5.dirs.concat(n4.dirs) : n4.dirs), n4.transition && (C5.transition = n4.transition), _5 = C5, setCurrentRenderingInstance$1(v4), _5;
}
function hasPropsChanged(e20, t7, n4) {
  const r5 = Object.keys(t7);
  if (r5.length !== Object.keys(e20).length)
    return true;
  for (let o13 = 0; o13 < r5.length; o13++) {
    const s8 = r5[o13];
    if (t7[s8] !== e20[s8] && !isEmitListener(n4, s8))
      return true;
  }
  return false;
}
function updateHOCHostEl({ vnode: e20, parent: t7 }, n4) {
  for (; t7; ) {
    const r5 = t7.subTree;
    if (r5.suspense && r5.suspense.activeBranch === e20 && (r5.el = e20.el), r5 !== e20)
      break;
    (e20 = t7.vnode).el = n4, t7 = t7.parent;
  }
}
function resolveComponent(e20, t7) {
  return resolveAsset(Fe2, e20, true, t7) || e20;
}
function resolveDynamicComponent(e20) {
  return isString(e20) ? resolveAsset(Fe2, e20, false) || e20 : e20 || Be2;
}
function resolveAsset(e20, t7, n4 = true, r5 = false) {
  const o13 = Me2 || Ct;
  if (o13) {
    const n5 = o13.type;
    {
      const e21 = getComponentName(n5, false);
      if (e21 && (e21 === t7 || e21 === N(t7) || e21 === F2(N(t7))))
        return n5;
    }
    const s8 = resolve(o13[e20] || n5[e20], t7) || resolve(o13.appContext[e20], t7);
    return !s8 && r5 ? n5 : s8;
  }
}
function resolve(e20, t7) {
  return e20 && (e20[t7] || e20[N(t7)] || e20[F2(N(t7))]);
}
function triggerEvent(e20, t7) {
  const n4 = e20.props && e20.props[t7];
  isFunction(n4) && n4();
}
function createSuspenseBoundary(e20, t7, n4, r5, o13, s8, i11, a7, l4, c5, u5 = false) {
  const { p: d5, m: f3, um: g3, n: m10, o: { parentNode: y5, remove: v4 } } = c5;
  let _5;
  const b5 = function(e21) {
    const t8 = e21.props && e21.props.suspensible;
    return null != t8 && false !== t8;
  }(e20);
  b5 && t7 && t7.pendingBranch && (_5 = t7.pendingId, t7.deps++);
  const C5 = e20.props ? toNumber(e20.props.timeout) : void 0, S5 = s8, A5 = { vnode: e20, parent: t7, parentComponent: n4, namespace: i11, container: r5, hiddenContainer: o13, deps: 0, pendingId: De2++, timeout: "number" == typeof C5 ? C5 : -1, activeBranch: null, pendingBranch: null, isInFallback: !u5, isHydrating: u5, isUnmounted: false, effects: [], resolve(e21 = false, n5 = false) {
    const { vnode: r6, activeBranch: o14, pendingBranch: i12, pendingId: a8, effects: l5, parentComponent: c6, container: u6 } = A5;
    let d6 = false;
    A5.isHydrating ? A5.isHydrating = false : e21 || (d6 = o14 && i12.transition && "out-in" === i12.transition.mode, d6 && (o14.transition.afterLeave = () => {
      a8 === A5.pendingId && (f3(i12, u6, s8 === S5 ? m10(o14) : s8, 0), queuePostFlushCb(l5));
    }), o14 && (y5(o14.el) !== A5.hiddenContainer && (s8 = m10(o14)), g3(o14, c6, A5, true)), d6 || f3(i12, u6, s8, 0)), setActiveBranch(A5, i12), A5.pendingBranch = null, A5.isInFallback = false;
    let v5 = A5.parent, C6 = false;
    for (; v5; ) {
      if (v5.pendingBranch) {
        v5.effects.push(...l5), C6 = true;
        break;
      }
      v5 = v5.parent;
    }
    C6 || d6 || queuePostFlushCb(l5), A5.effects = [], b5 && t7 && t7.pendingBranch && _5 === t7.pendingId && (t7.deps--, 0 !== t7.deps || n5 || t7.resolve()), triggerEvent(r6, "onResolve");
  }, fallback(e21) {
    if (!A5.pendingBranch)
      return;
    const { vnode: t8, activeBranch: n5, parentComponent: r6, container: o14, namespace: s9 } = A5;
    triggerEvent(t8, "onFallback");
    const i12 = m10(n5), mountFallback = () => {
      A5.isInFallback && (d5(null, e21, o14, i12, r6, null, s9, a7, l4), setActiveBranch(A5, e21));
    }, c6 = e21.transition && "out-in" === e21.transition.mode;
    c6 && (n5.transition.afterLeave = mountFallback), A5.isInFallback = true, g3(n5, r6, null, true), c6 || mountFallback();
  }, move(e21, t8, n5) {
    A5.activeBranch && f3(A5.activeBranch, e21, t8, n5), A5.container = e21;
  }, next: () => A5.activeBranch && m10(A5.activeBranch), registerDep(e21, t8, n5) {
    const r6 = !!A5.pendingBranch;
    r6 && A5.deps++;
    const o14 = e21.vnode.el;
    e21.asyncDep.catch((t9) => {
      handleError(t9, e21, 0);
    }).then((s9) => {
      if (e21.isUnmounted || A5.isUnmounted || A5.pendingId !== e21.suspenseId)
        return;
      e21.asyncResolved = true;
      const { vnode: a8 } = e21;
      handleSetupResult(e21, s9, false), o14 && (a8.el = o14);
      const l5 = !o14 && e21.subTree.el;
      t8(e21, a8, y5(o14 || e21.subTree.el), o14 ? null : m10(e21.subTree), A5, i11, n5), l5 && v4(l5), updateHOCHostEl(e21, a8.el), r6 && 0 == --A5.deps && A5.resolve();
    });
  }, unmount(e21, t8) {
    A5.isUnmounted = true, A5.activeBranch && g3(A5.activeBranch, n4, e21, t8), A5.pendingBranch && g3(A5.pendingBranch, n4, e21, t8);
  } };
  return A5;
}
function normalizeSuspenseSlot(e20) {
  let t7;
  if (isFunction(e20)) {
    const n4 = _t && e20._c;
    n4 && (e20._d = false, function(e21 = false) {
      yt.push(vt = e21 ? null : []);
    }()), e20 = e20(), n4 && (e20._d = true, t7 = vt, yt.pop(), vt = yt[yt.length - 1] || null);
  }
  if (j3(e20)) {
    const t8 = function(e21, t9 = true) {
      let n4;
      for (let t10 = 0; t10 < e21.length; t10++) {
        const r5 = e21[t10];
        if (!isVNode(r5))
          return;
        if (r5.type !== gt2 || "v-if" === r5.children) {
          if (n4)
            return;
          n4 = r5;
        }
      }
      return n4;
    }(e20);
    e20 = t8;
  }
  return e20 = normalizeVNode$1(e20), t7 && !e20.dynamicChildren && (e20.dynamicChildren = t7.filter((t8) => t8 !== e20)), e20;
}
function setActiveBranch(e20, t7) {
  e20.activeBranch = t7;
  const { vnode: n4, parentComponent: r5 } = e20;
  let o13 = t7.el;
  for (; !o13 && t7.component; )
    o13 = (t7 = t7.component.subTree).el;
  n4.el = o13, r5 && r5.subTree === n4 && (r5.vnode.el = o13, updateHOCHostEl(r5, o13));
}
function injectHook(e20, t7, n4 = Ct, r5 = false) {
  if (n4) {
    const o13 = n4[e20] || (n4[e20] = []), s8 = t7.__weh || (t7.__weh = (...r6) => {
      pauseTracking();
      const o14 = setCurrentInstance(n4), s9 = callWithAsyncErrorHandling(t7, n4, e20, r6);
      return o14(), resetTracking(), s9;
    });
    return r5 ? o13.unshift(s8) : o13.push(s8), s8;
  }
}
function onErrorCaptured(e20, t7 = Ct) {
  injectHook("ec", e20, t7);
}
function invokeDirectiveHook(e20, t7, n4, r5) {
  const o13 = e20.dirs, s8 = t7 && t7.dirs;
  for (let i11 = 0; i11 < o13.length; i11++) {
    const a7 = o13[i11];
    s8 && (a7.oldValue = s8[i11].value);
    let l4 = a7.dir[r5];
    l4 && (pauseTracking(), callWithAsyncErrorHandling(l4, n4, 8, [e20.el, a7, e20, t7]), resetTracking());
  }
}
function defineComponent(e20, t7) {
  return isFunction(e20) ? (() => O({ name: e20.name }, t7, { setup: e20 }))() : e20;
}
function defineAsyncComponent(e20) {
  isFunction(e20) && (e20 = { loader: e20 });
  const { loader: t7, loadingComponent: n4, errorComponent: r5, delay: o13 = 200, timeout: s8, suspensible: i11 = true, onError: a7 } = e20;
  let l4, c5 = null, u5 = 0;
  const load = () => {
    let e21;
    return c5 || (e21 = c5 = t7().catch((e22) => {
      if (e22 = e22 instanceof Error ? e22 : new Error(String(e22)), a7)
        return new Promise((t8, n5) => {
          a7(e22, () => t8((u5++, c5 = null, load())), () => n5(e22), u5 + 1);
        });
      throw e22;
    }).then((t8) => e21 !== c5 && c5 ? c5 : (t8 && (t8.__esModule || "Module" === t8[Symbol.toStringTag]) && (t8 = t8.default), l4 = t8, t8)));
  };
  return defineComponent({ name: "AsyncComponentWrapper", __asyncLoader: load, get __asyncResolved() {
    return l4;
  }, setup() {
    const e21 = Ct;
    if (l4)
      return () => createInnerComp(l4, e21);
    const onError = (t9) => {
      c5 = null, handleError(t9, e21, 13, !r5);
    };
    if (i11 && e21.suspense || Rt)
      return load().then((t9) => () => createInnerComp(t9, e21)).catch((e22) => (onError(e22), () => r5 ? createVNode(r5, { error: e22 }) : null));
    const t8 = ref(false), a8 = ref(), u6 = ref(!!o13);
    return o13 && setTimeout(() => {
      u6.value = false;
    }, o13), null != s8 && setTimeout(() => {
      if (!t8.value && !a8.value) {
        const e22 = new Error(`Async component timed out after ${s8}ms.`);
        onError(e22), a8.value = e22;
      }
    }, s8), load().then(() => {
      t8.value = true, e21.parent && isKeepAlive(e21.parent.vnode) && (e21.parent.effect.dirty = true, queueJob(e21.parent.update));
    }).catch((e22) => {
      onError(e22), a8.value = e22;
    }), () => t8.value && l4 ? createInnerComp(l4, e21) : a8.value && r5 ? createVNode(r5, { error: a8.value }) : n4 && !u6.value ? createVNode(n4) : void 0;
  } });
}
function createInnerComp(e20, t7) {
  const { ref: n4, props: r5, children: o13, ce: s8 } = t7.vnode, i11 = createVNode(e20, r5, o13);
  return i11.ref = n4, i11.ce = s8, delete t7.vnode.ce, i11;
}
function normalizePropsOrEmits(e20) {
  return j3(e20) ? e20.reduce((e21, t7) => (e21[t7] = null, e21), {}) : e20;
}
function withAsyncContext(e20) {
  const t7 = getCurrentInstance();
  let n4 = e20();
  return unsetCurrentInstance(), isPromise(n4) && (n4 = n4.catch((e21) => {
    throw setCurrentInstance(t7), e21;
  })), [n4, () => setCurrentInstance(t7)];
}
function applyOptions(e20) {
  const t7 = resolveMergedOptions(e20), n4 = e20.proxy, r5 = e20.ctx;
  tt2 = false, t7.beforeCreate && callHook$1(t7.beforeCreate, e20, "bc");
  const { data: o13, computed: s8, methods: i11, watch: a7, provide: l4, inject: c5, created: u5, beforeMount: d5, mounted: f3, beforeUpdate: g3, updated: m10, activated: y5, deactivated: v4, beforeDestroy: _5, beforeUnmount: b5, destroyed: C5, unmounted: S5, render: A5, renderTracked: w6, renderTriggered: R5, errorCaptured: T5, serverPrefetch: x4, expose: $5, inheritAttrs: E4, components: O4, directives: P5, filters: H4 } = t7;
  if (c5 && function(e21, t8, n5 = NOOP) {
    j3(e21) && (e21 = normalizeInject(e21));
    for (const n6 in e21) {
      const r6 = e21[n6];
      let o14;
      o14 = isObject(r6) ? "default" in r6 ? inject(r6.from || n6, r6.default, true) : inject(r6.from || n6) : inject(r6), isRef(o14) ? Object.defineProperty(t8, n6, { enumerable: true, configurable: true, get: () => o14.value, set: (e22) => o14.value = e22 }) : t8[n6] = o14;
    }
  }(c5, r5, null), i11)
    for (const e21 in i11) {
      const t8 = i11[e21];
      isFunction(t8) && (r5[e21] = t8.bind(n4));
    }
  if (o13) {
    const t8 = o13.call(n4, n4);
    isObject(t8) && (e20.data = reactive(t8));
  }
  if (tt2 = true, s8)
    for (const e21 in s8) {
      const t8 = s8[e21], o14 = isFunction(t8) ? t8.bind(n4, n4) : isFunction(t8.get) ? t8.get.bind(n4, n4) : NOOP, i12 = !isFunction(t8) && isFunction(t8.set) ? t8.set.bind(n4) : NOOP, a8 = computed({ get: o14, set: i12 });
      Object.defineProperty(r5, e21, { enumerable: true, configurable: true, get: () => a8.value, set: (e22) => a8.value = e22 });
    }
  if (a7)
    for (const e21 in a7)
      createWatcher(a7[e21], r5, n4, e21);
  if (l4) {
    const e21 = isFunction(l4) ? l4.call(n4) : l4;
    Reflect.ownKeys(e21).forEach((t8) => {
      provide(t8, e21[t8]);
    });
  }
  function registerLifecycleHook(e21, t8) {
    j3(t8) ? t8.forEach((t9) => e21(t9.bind(n4))) : t8 && e21(t8.bind(n4));
  }
  if (u5 && callHook$1(u5, e20, "c"), registerLifecycleHook(ze2, d5), registerLifecycleHook(We2, f3), registerLifecycleHook(qe2, g3), registerLifecycleHook(Ke2, m10), registerLifecycleHook(onActivated, y5), registerLifecycleHook(onDeactivated, v4), registerLifecycleHook(onErrorCaptured, T5), registerLifecycleHook(Ye2, w6), registerLifecycleHook(Xe2, R5), registerLifecycleHook(Je2, b5), registerLifecycleHook(Ge2, S5), registerLifecycleHook(Ze, x4), j3($5))
    if ($5.length) {
      const t8 = e20.exposed || (e20.exposed = {});
      $5.forEach((e21) => {
        Object.defineProperty(t8, e21, { get: () => n4[e21], set: (t9) => n4[e21] = t9 });
      });
    } else
      e20.exposed || (e20.exposed = {});
  A5 && e20.render === NOOP && (e20.render = A5), null != E4 && (e20.inheritAttrs = E4), O4 && (e20.components = O4), P5 && (e20.directives = P5);
}
function callHook$1(e20, t7, n4) {
  callWithAsyncErrorHandling(j3(e20) ? e20.map((e21) => e21.bind(t7.proxy)) : e20.bind(t7.proxy), t7, n4);
}
function createWatcher(e20, t7, n4, r5) {
  const o13 = r5.includes(".") ? createPathGetter(n4, r5) : () => n4[r5];
  if (isString(e20)) {
    const n5 = t7[e20];
    isFunction(n5) && watch(o13, n5);
  } else if (isFunction(e20))
    watch(o13, e20.bind(n4));
  else if (isObject(e20))
    if (j3(e20))
      e20.forEach((e21) => createWatcher(e21, t7, n4, r5));
    else {
      const r6 = isFunction(e20.handler) ? e20.handler.bind(n4) : t7[e20.handler];
      isFunction(r6) && watch(o13, r6, e20);
    }
}
function resolveMergedOptions(e20) {
  const t7 = e20.type, { mixins: n4, extends: r5 } = t7, { mixins: o13, optionsCache: s8, config: { optionMergeStrategies: i11 } } = e20.appContext, a7 = s8.get(t7);
  let l4;
  return a7 ? l4 = a7 : o13.length || n4 || r5 ? (l4 = {}, o13.length && o13.forEach((e21) => mergeOptions2(l4, e21, i11, true)), mergeOptions2(l4, t7, i11)) : l4 = t7, isObject(t7) && s8.set(t7, l4), l4;
}
function mergeOptions2(e20, t7, n4, r5 = false) {
  const { mixins: o13, extends: s8 } = t7;
  s8 && mergeOptions2(e20, s8, n4, true), o13 && o13.forEach((t8) => mergeOptions2(e20, t8, n4, true));
  for (const o14 in t7)
    if (r5 && "expose" === o14)
      ;
    else {
      const r6 = nt2[o14] || n4 && n4[o14];
      e20[o14] = r6 ? r6(e20[o14], t7[o14]) : t7[o14];
    }
  return e20;
}
function mergeDataFn(e20, t7) {
  return t7 ? e20 ? function() {
    return O(isFunction(e20) ? e20.call(this, this) : e20, isFunction(t7) ? t7.call(this, this) : t7);
  } : t7 : e20;
}
function normalizeInject(e20) {
  if (j3(e20)) {
    const t7 = {};
    for (let n4 = 0; n4 < e20.length; n4++)
      t7[e20[n4]] = e20[n4];
    return t7;
  }
  return e20;
}
function mergeAsArray(e20, t7) {
  return e20 ? [...new Set([].concat(e20, t7))] : t7;
}
function mergeObjectOptions(e20, t7) {
  return e20 ? O(/* @__PURE__ */ Object.create(null), e20, t7) : t7;
}
function mergeEmitsOrPropsOptions(e20, t7) {
  return e20 ? j3(e20) && j3(t7) ? [.../* @__PURE__ */ new Set([...e20, ...t7])] : O(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(e20), normalizePropsOrEmits(null != t7 ? t7 : {})) : t7;
}
function createAppContext() {
  return { app: null, config: { isNativeTag: NO, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
function createAppAPI(e20, t7) {
  return function(n4, r5 = null) {
    isFunction(n4) || (n4 = O({}, n4)), null == r5 || isObject(r5) || (r5 = null);
    const o13 = createAppContext(), s8 = /* @__PURE__ */ new WeakSet();
    let i11 = false;
    const a7 = o13.app = { _uid: rt2++, _component: n4, _props: r5, _container: null, _context: o13, _instance: null, version: xt, get config() {
      return o13.config;
    }, set config(e21) {
    }, use: (e21, ...t8) => (s8.has(e21) || (e21 && isFunction(e21.install) ? (s8.add(e21), e21.install(a7, ...t8)) : isFunction(e21) && (s8.add(e21), e21(a7, ...t8))), a7), mixin: (e21) => (__VUE_OPTIONS_API__ && (o13.mixins.includes(e21) || o13.mixins.push(e21)), a7), component: (e21, t8) => t8 ? (o13.components[e21] = t8, a7) : o13.components[e21], directive: (e21, t8) => t8 ? (o13.directives[e21] = t8, a7) : o13.directives[e21], mount(s9, l4, c5) {
      if (!i11) {
        const u5 = createVNode(n4, r5);
        return u5.appContext = o13, true === c5 ? c5 = "svg" : false === c5 && (c5 = void 0), l4 && t7 ? t7(u5, s9) : e20(u5, s9, c5), i11 = true, a7._container = s9, s9.__vue_app__ = a7, getComponentPublicInstance(u5.component);
      }
    }, unmount() {
      i11 && (e20(null, a7._container), delete a7._container.__vue_app__);
    }, provide: (e21, t8) => (o13.provides[e21] = t8, a7), runWithContext(e21) {
      const t8 = ot2;
      ot2 = a7;
      try {
        return e21();
      } finally {
        ot2 = t8;
      }
    } };
    return a7;
  };
}
function provide(e20, t7) {
  if (Ct) {
    let n4 = Ct.provides;
    const r5 = Ct.parent && Ct.parent.provides;
    r5 === n4 && (n4 = Ct.provides = Object.create(r5)), n4[e20] = t7;
  } else
    ;
}
function inject(e20, t7, n4 = false) {
  const r5 = Ct || Me2;
  if (r5 || ot2) {
    const o13 = r5 ? null == r5.parent ? r5.vnode.appContext && r5.vnode.appContext.provides : r5.parent.provides : ot2._context.provides;
    if (o13 && e20 in o13)
      return o13[e20];
    if (arguments.length > 1)
      return n4 && isFunction(t7) ? t7.call(r5 && r5.proxy) : t7;
  }
}
function hasInjectionContext() {
  return !!(Ct || Me2 || ot2);
}
function setFullProps(e20, t7, n4, r5) {
  const [o13, s8] = e20.propsOptions;
  let i11, a7 = false;
  if (t7)
    for (let l4 in t7) {
      if (I2(l4))
        continue;
      const c5 = t7[l4];
      let u5;
      o13 && hasOwn(o13, u5 = N(l4)) ? s8 && s8.includes(u5) ? (i11 || (i11 = {}))[u5] = c5 : n4[u5] = c5 : isEmitListener(e20.emitsOptions, l4) || l4 in r5 && c5 === r5[l4] || (r5[l4] = c5, a7 = true);
    }
  if (s8) {
    const t8 = toRaw(n4), r6 = i11 || $2;
    for (let i12 = 0; i12 < s8.length; i12++) {
      const a8 = s8[i12];
      n4[a8] = resolvePropValue(o13, t8, a8, r6[a8], e20, !hasOwn(r6, a8));
    }
  }
  return a7;
}
function resolvePropValue(e20, t7, n4, r5, o13, s8) {
  const i11 = e20[n4];
  if (null != i11) {
    const e21 = hasOwn(i11, "default");
    if (e21 && void 0 === r5) {
      const e22 = i11.default;
      if (i11.type !== Function && !i11.skipFactory && isFunction(e22)) {
        const { propsDefaults: s9 } = o13;
        if (n4 in s9)
          r5 = s9[n4];
        else {
          const i12 = setCurrentInstance(o13);
          r5 = s9[n4] = e22.call(null, t7), i12();
        }
      } else
        r5 = e22;
    }
    i11[0] && (s8 && !e21 ? r5 = false : !i11[1] || "" !== r5 && r5 !== V(n4) || (r5 = true));
  }
  return r5;
}
function normalizePropsOptions(e20, t7, n4 = false) {
  const r5 = t7.propsCache, o13 = r5.get(e20);
  if (o13)
    return o13;
  const s8 = e20.props, i11 = {}, a7 = [];
  let l4 = false;
  if (__VUE_OPTIONS_API__ && !isFunction(e20)) {
    const extendProps = (e21) => {
      l4 = true;
      const [n5, r6] = normalizePropsOptions(e21, t7, true);
      O(i11, n5), r6 && a7.push(...r6);
    };
    !n4 && t7.mixins.length && t7.mixins.forEach(extendProps), e20.extends && extendProps(e20.extends), e20.mixins && e20.mixins.forEach(extendProps);
  }
  if (!s8 && !l4)
    return isObject(e20) && r5.set(e20, E), E;
  if (j3(s8))
    for (let e21 = 0; e21 < s8.length; e21++) {
      const t8 = N(s8[e21]);
      validatePropName(t8) && (i11[t8] = $2);
    }
  else if (s8)
    for (const e21 in s8) {
      const t8 = N(e21);
      if (validatePropName(t8)) {
        const n5 = s8[e21], r6 = i11[t8] = j3(n5) || isFunction(n5) ? { type: n5 } : O({}, n5);
        if (r6) {
          const e22 = getTypeIndex(Boolean, r6.type), n6 = getTypeIndex(String, r6.type);
          r6[0] = e22 > -1, r6[1] = n6 < 0 || e22 < n6, (e22 > -1 || hasOwn(r6, "default")) && a7.push(t8);
        }
      }
    }
  const c5 = [i11, a7];
  return isObject(e20) && r5.set(e20, c5), c5;
}
function validatePropName(e20) {
  return "$" !== e20[0] && !I2(e20);
}
function getType(e20) {
  if (null === e20)
    return "null";
  if ("function" == typeof e20)
    return e20.name || "";
  if ("object" == typeof e20) {
    return e20.constructor && e20.constructor.name || "";
  }
  return "";
}
function isSameType(e20, t7) {
  return getType(e20) === getType(t7);
}
function getTypeIndex(e20, t7) {
  return j3(t7) ? t7.findIndex((t8) => isSameType(t8, e20)) : isFunction(t7) && isSameType(t7, e20) ? 0 : -1;
}
function setRef(e20, t7, n4, r5, o13 = false) {
  if (j3(e20))
    return void e20.forEach((e21, s9) => setRef(e21, t7 && (j3(t7) ? t7[s9] : t7), n4, r5, o13));
  if (isAsyncWrapper(r5) && !o13)
    return;
  const s8 = 4 & r5.shapeFlag ? getComponentPublicInstance(r5.component) : r5.el, i11 = o13 ? null : s8, { i: a7, r: l4 } = e20, c5 = t7 && t7.r, u5 = a7.refs === $2 ? a7.refs = {} : a7.refs, d5 = a7.setupState;
  if (null != c5 && c5 !== l4 && (isString(c5) ? (u5[c5] = null, hasOwn(d5, c5) && (d5[c5] = null)) : isRef(c5) && (c5.value = null)), isFunction(l4))
    callWithErrorHandling(l4, a7, 12, [i11, u5]);
  else {
    const t8 = isString(l4), r6 = isRef(l4);
    if (t8 || r6) {
      const doSet = () => {
        if (e20.f) {
          const n5 = t8 ? hasOwn(d5, l4) ? d5[l4] : u5[l4] : l4.value;
          o13 ? j3(n5) && remove(n5, s8) : j3(n5) ? n5.includes(s8) || n5.push(s8) : t8 ? (u5[l4] = [s8], hasOwn(d5, l4) && (d5[l4] = u5[l4])) : (l4.value = [s8], e20.k && (u5[e20.k] = l4.value));
        } else
          t8 ? (u5[l4] = i11, hasOwn(d5, l4) && (d5[l4] = i11)) : r6 && (l4.value = i11, e20.k && (u5[e20.k] = i11));
      };
      i11 ? (doSet.id = -1, queuePostRenderEffect(doSet, n4)) : doSet();
    }
  }
}
function createRenderer(e20) {
  return function(e21, t7) {
    "boolean" != typeof __VUE_OPTIONS_API__ && (getGlobalThis().__VUE_OPTIONS_API__ = true), "boolean" != typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ && (getGlobalThis().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false);
    getGlobalThis().__VUE__ = true;
    const { insert: n4, remove: r5, patchProp: o13, createElement: s8, createText: i11, createComment: a7, setText: l4, setElementText: c5, parentNode: u5, nextSibling: d5, setScopeId: f3 = NOOP, insertStaticContent: g3 } = e21, patch = (e22, t8, n5, r6 = null, o14 = null, s9 = null, i12 = void 0, a8 = null, l5 = !!t8.dynamicChildren) => {
      if (e22 === t8)
        return;
      e22 && !isSameVNodeType(e22, t8) && (r6 = getNextHostNode(e22), unmount(e22, o14, s9, true), e22 = null), -2 === t8.patchFlag && (l5 = false, t8.dynamicChildren = null);
      const { type: c6, ref: u6, shapeFlag: d6 } = t8;
      switch (c6) {
        case ht2:
          processText(e22, t8, n5, r6);
          break;
        case gt2:
          processCommentNode(e22, t8, n5, r6);
          break;
        case mt2:
          null == e22 && mountStaticNode(t8, n5, r6, i12);
          break;
        case ft:
          processFragment(e22, t8, n5, r6, o14, s9, i12, a8, l5);
          break;
        default:
          1 & d6 ? processElement(e22, t8, n5, r6, o14, s9, i12, a8, l5) : 6 & d6 ? processComponent(e22, t8, n5, r6, o14, s9, i12, a8, l5) : (64 & d6 || 128 & d6) && c6.process(e22, t8, n5, r6, o14, s9, i12, a8, l5, y5);
      }
      null != u6 && o14 && setRef(u6, e22 && e22.ref, s9, t8 || e22, !t8);
    }, processText = (e22, t8, r6, o14) => {
      if (null == e22)
        n4(t8.el = i11(t8.children), r6, o14);
      else {
        const n5 = t8.el = e22.el;
        t8.children !== e22.children && l4(n5, t8.children);
      }
    }, processCommentNode = (e22, t8, r6, o14) => {
      null == e22 ? n4(t8.el = a7(t8.children || ""), r6, o14) : t8.el = e22.el;
    }, mountStaticNode = (e22, t8, n5, r6) => {
      [e22.el, e22.anchor] = g3(e22.children, t8, n5, r6, e22.el, e22.anchor);
    }, moveStaticNode = ({ el: e22, anchor: t8 }, r6, o14) => {
      let s9;
      for (; e22 && e22 !== t8; )
        s9 = d5(e22), n4(e22, r6, o14), e22 = s9;
      n4(t8, r6, o14);
    }, removeStaticNode = ({ el: e22, anchor: t8 }) => {
      let n5;
      for (; e22 && e22 !== t8; )
        n5 = d5(e22), r5(e22), e22 = n5;
      r5(t8);
    }, processElement = (e22, t8, n5, r6, o14, s9, i12, a8, l5) => {
      "svg" === t8.type ? i12 = "svg" : "math" === t8.type && (i12 = "mathml"), null == e22 ? mountElement(t8, n5, r6, o14, s9, i12, a8, l5) : patchElement(e22, t8, o14, s9, i12, a8, l5);
    }, mountElement = (e22, t8, r6, i12, a8, l5, u6, d6) => {
      let f4, g4;
      const { props: m11, shapeFlag: y6, transition: v5, dirs: _6 } = e22;
      if (f4 = e22.el = s8(e22.type, l5, m11 && m11.is, m11), 8 & y6 ? c5(f4, e22.children) : 16 & y6 && mountChildren(e22.children, f4, null, i12, a8, resolveChildrenNamespace(e22, l5), u6, d6), _6 && invokeDirectiveHook(e22, null, i12, "created"), setScopeId(f4, e22, e22.scopeId, u6, i12), m11) {
        for (const t9 in m11)
          "value" === t9 || I2(t9) || o13(f4, t9, null, m11[t9], l5, e22.children, i12, a8, unmountChildren);
        "value" in m11 && o13(f4, "value", null, m11.value, l5), (g4 = m11.onVnodeBeforeMount) && invokeVNodeHook(g4, i12, e22);
      }
      _6 && invokeDirectiveHook(e22, null, i12, "beforeMount");
      const b5 = function(e23, t9) {
        return (!e23 || e23 && !e23.pendingBranch) && t9 && !t9.persisted;
      }(a8, v5);
      b5 && v5.beforeEnter(f4), n4(f4, t8, r6), ((g4 = m11 && m11.onVnodeMounted) || b5 || _6) && queuePostRenderEffect(() => {
        g4 && invokeVNodeHook(g4, i12, e22), b5 && v5.enter(f4), _6 && invokeDirectiveHook(e22, null, i12, "mounted");
      }, a8);
    }, setScopeId = (e22, t8, n5, r6, o14) => {
      if (n5 && f3(e22, n5), r6)
        for (let t9 = 0; t9 < r6.length; t9++)
          f3(e22, r6[t9]);
      if (o14) {
        if (t8 === o14.subTree) {
          const t9 = o14.vnode;
          setScopeId(e22, t9, t9.scopeId, t9.slotScopeIds, o14.parent);
        }
      }
    }, mountChildren = (e22, t8, n5, r6, o14, s9, i12, a8, l5 = 0) => {
      for (let c6 = l5; c6 < e22.length; c6++) {
        const l6 = e22[c6] = a8 ? cloneIfMounted(e22[c6]) : normalizeVNode$1(e22[c6]);
        patch(null, l6, t8, n5, r6, o14, s9, i12, a8);
      }
    }, patchElement = (e22, t8, n5, r6, s9, i12, a8) => {
      const l5 = t8.el = e22.el;
      let { patchFlag: u6, dynamicChildren: d6, dirs: f4 } = t8;
      u6 |= 16 & e22.patchFlag;
      const g4 = e22.props || $2, m11 = t8.props || $2;
      let y6;
      if (n5 && toggleRecurse(n5, false), (y6 = m11.onVnodeBeforeUpdate) && invokeVNodeHook(y6, n5, t8, e22), f4 && invokeDirectiveHook(t8, e22, n5, "beforeUpdate"), n5 && toggleRecurse(n5, true), d6 ? patchBlockChildren(e22.dynamicChildren, d6, l5, n5, r6, resolveChildrenNamespace(t8, s9), i12) : a8 || patchChildren(e22, t8, l5, null, n5, r6, resolveChildrenNamespace(t8, s9), i12, false), u6 > 0) {
        if (16 & u6)
          patchProps(l5, t8, g4, m11, n5, r6, s9);
        else if (2 & u6 && g4.class !== m11.class && o13(l5, "class", null, m11.class, s9), 4 & u6 && o13(l5, "style", g4.style, m11.style, s9), 8 & u6) {
          const i13 = t8.dynamicProps;
          for (let t9 = 0; t9 < i13.length; t9++) {
            const a9 = i13[t9], c6 = g4[a9], u7 = m11[a9];
            u7 === c6 && "value" !== a9 || o13(l5, a9, c6, u7, s9, e22.children, n5, r6, unmountChildren);
          }
        }
        1 & u6 && e22.children !== t8.children && c5(l5, t8.children);
      } else
        a8 || null != d6 || patchProps(l5, t8, g4, m11, n5, r6, s9);
      ((y6 = m11.onVnodeUpdated) || f4) && queuePostRenderEffect(() => {
        y6 && invokeVNodeHook(y6, n5, t8, e22), f4 && invokeDirectiveHook(t8, e22, n5, "updated");
      }, r6);
    }, patchBlockChildren = (e22, t8, n5, r6, o14, s9, i12) => {
      for (let a8 = 0; a8 < t8.length; a8++) {
        const l5 = e22[a8], c6 = t8[a8], d6 = l5.el && (l5.type === ft || !isSameVNodeType(l5, c6) || 70 & l5.shapeFlag) ? u5(l5.el) : n5;
        patch(l5, c6, d6, null, r6, o14, s9, i12, true);
      }
    }, patchProps = (e22, t8, n5, r6, s9, i12, a8) => {
      if (n5 !== r6) {
        if (n5 !== $2)
          for (const l5 in n5)
            I2(l5) || l5 in r6 || o13(e22, l5, n5[l5], null, a8, t8.children, s9, i12, unmountChildren);
        for (const l5 in r6) {
          if (I2(l5))
            continue;
          const c6 = r6[l5], u6 = n5[l5];
          c6 !== u6 && "value" !== l5 && o13(e22, l5, u6, c6, a8, t8.children, s9, i12, unmountChildren);
        }
        "value" in r6 && o13(e22, "value", n5.value, r6.value, a8);
      }
    }, processFragment = (e22, t8, r6, o14, s9, a8, l5, c6, u6) => {
      const d6 = t8.el = e22 ? e22.el : i11(""), f4 = t8.anchor = e22 ? e22.anchor : i11("");
      let { patchFlag: g4, dynamicChildren: m11, slotScopeIds: y6 } = t8;
      y6 && (c6 = c6 ? c6.concat(y6) : y6), null == e22 ? (n4(d6, r6, o14), n4(f4, r6, o14), mountChildren(t8.children || [], r6, f4, s9, a8, l5, c6, u6)) : g4 > 0 && 64 & g4 && m11 && e22.dynamicChildren ? (patchBlockChildren(e22.dynamicChildren, m11, r6, s9, a8, l5, c6), (null != t8.key || s9 && t8 === s9.subTree) && traverseStaticChildren(e22, t8, true)) : patchChildren(e22, t8, r6, f4, s9, a8, l5, c6, u6);
    }, processComponent = (e22, t8, n5, r6, o14, s9, i12, a8, l5) => {
      t8.slotScopeIds = a8, null == e22 ? 512 & t8.shapeFlag ? o14.ctx.activate(t8, n5, r6, i12, l5) : mountComponent(t8, n5, r6, o14, s9, i12, l5) : updateComponent(e22, t8, l5);
    }, mountComponent = (e22, t8, n5, r6, o14, s9, i12) => {
      const a8 = e22.component = createComponentInstance$1(e22, r6, o14);
      if (isKeepAlive(e22) && (a8.ctx.renderer = y5), setupComponent$1(a8), a8.asyncDep) {
        if (o14 && o14.registerDep(a8, setupRenderEffect, i12), !e22.el) {
          const e23 = a8.subTree = createVNode(gt2);
          processCommentNode(null, e23, t8, n5);
        }
      } else
        setupRenderEffect(a8, e22, t8, n5, o14, s9, i12);
    }, updateComponent = (e22, t8, n5) => {
      const r6 = t8.component = e22.component;
      if (function(e23, t9, n6) {
        const { props: r7, children: o14, component: s9 } = e23, { props: i12, children: a8, patchFlag: l5 } = t9, c6 = s9.emitsOptions;
        if (t9.dirs || t9.transition)
          return true;
        if (!(n6 && l5 >= 0))
          return !(!o14 && !a8 || a8 && a8.$stable) || r7 !== i12 && (r7 ? !i12 || hasPropsChanged(r7, i12, c6) : !!i12);
        if (1024 & l5)
          return true;
        if (16 & l5)
          return r7 ? hasPropsChanged(r7, i12, c6) : !!i12;
        if (8 & l5) {
          const e24 = t9.dynamicProps;
          for (let t10 = 0; t10 < e24.length; t10++) {
            const n7 = e24[t10];
            if (i12[n7] !== r7[n7] && !isEmitListener(c6, n7))
              return true;
          }
        }
        return false;
      }(e22, t8, n5)) {
        if (r6.asyncDep && !r6.asyncResolved)
          return void updateComponentPreRender(r6, t8, n5);
        r6.next = t8, function(e23) {
          const t9 = Oe2.indexOf(e23);
          t9 > Pe2 && Oe2.splice(t9, 1);
        }(r6.update), r6.effect.dirty = true, r6.update();
      } else
        t8.el = e22.el, r6.vnode = t8;
    }, setupRenderEffect = (e22, t8, n5, r6, o14, s9, i12) => {
      const componentUpdateFn = () => {
        if (e22.isMounted) {
          let { next: t9, bu: n6, u: r7, parent: a9, vnode: l6 } = e22;
          {
            const n7 = locateNonHydratedAsyncRoot(e22);
            if (n7)
              return t9 && (t9.el = l6.el, updateComponentPreRender(e22, t9, i12)), void n7.asyncDep.then(() => {
                e22.isUnmounted || componentUpdateFn();
              });
          }
          let c6, d6 = t9;
          toggleRecurse(e22, false), t9 ? (t9.el = l6.el, updateComponentPreRender(e22, t9, i12)) : t9 = l6, n6 && invokeArrayFns(n6), (c6 = t9.props && t9.props.onVnodeBeforeUpdate) && invokeVNodeHook(c6, a9, t9, l6), toggleRecurse(e22, true);
          const f4 = renderComponentRoot$1(e22), g4 = e22.subTree;
          e22.subTree = f4, patch(g4, f4, u5(g4.el), getNextHostNode(g4), e22, o14, s9), t9.el = f4.el, null === d6 && updateHOCHostEl(e22, f4.el), r7 && queuePostRenderEffect(r7, o14), (c6 = t9.props && t9.props.onVnodeUpdated) && queuePostRenderEffect(() => invokeVNodeHook(c6, a9, t9, l6), o14);
        } else {
          let i13;
          const { el: a9, props: l6 } = t8, { bm: c6, m: u6, parent: d6 } = e22, f4 = isAsyncWrapper(t8);
          if (toggleRecurse(e22, false), c6 && invokeArrayFns(c6), !f4 && (i13 = l6 && l6.onVnodeBeforeMount) && invokeVNodeHook(i13, d6, t8), toggleRecurse(e22, true), a9 && _5) {
            const hydrateSubTree = () => {
              e22.subTree = renderComponentRoot$1(e22), _5(a9, e22.subTree, e22, o14, null);
            };
            f4 ? t8.type.__asyncLoader().then(() => !e22.isUnmounted && hydrateSubTree()) : hydrateSubTree();
          } else {
            const i14 = e22.subTree = renderComponentRoot$1(e22);
            patch(null, i14, n5, r6, e22, o14, s9), t8.el = i14.el;
          }
          if (u6 && queuePostRenderEffect(u6, o14), !f4 && (i13 = l6 && l6.onVnodeMounted)) {
            const e23 = t8;
            queuePostRenderEffect(() => invokeVNodeHook(i13, d6, e23), o14);
          }
          (256 & t8.shapeFlag || d6 && isAsyncWrapper(d6.vnode) && 256 & d6.vnode.shapeFlag) && e22.a && queuePostRenderEffect(e22.a, o14), e22.isMounted = true, t8 = n5 = r6 = null;
        }
      }, a8 = e22.effect = new ReactiveEffect(componentUpdateFn, NOOP, () => queueJob(l5), e22.scope), l5 = e22.update = () => {
        a8.dirty && a8.run();
      };
      l5.id = e22.uid, toggleRecurse(e22, true), l5();
    }, updateComponentPreRender = (e22, t8, n5) => {
      t8.component = e22;
      const r6 = e22.vnode.props;
      e22.vnode = t8, e22.next = null, function(e23, t9, n6, r7) {
        const { props: o14, attrs: s9, vnode: { patchFlag: i12 } } = e23, a8 = toRaw(o14), [l5] = e23.propsOptions;
        let c6 = false;
        if (!(r7 || i12 > 0) || 16 & i12) {
          let r8;
          setFullProps(e23, t9, o14, s9) && (c6 = true);
          for (const s10 in a8)
            t9 && (hasOwn(t9, s10) || (r8 = V(s10)) !== s10 && hasOwn(t9, r8)) || (l5 ? !n6 || void 0 === n6[s10] && void 0 === n6[r8] || (o14[s10] = resolvePropValue(l5, a8, s10, void 0, e23, true)) : delete o14[s10]);
          if (s9 !== a8)
            for (const e24 in s9)
              t9 && hasOwn(t9, e24) || (delete s9[e24], c6 = true);
        } else if (8 & i12) {
          const n7 = e23.vnode.dynamicProps;
          for (let r8 = 0; r8 < n7.length; r8++) {
            let i13 = n7[r8];
            if (isEmitListener(e23.emitsOptions, i13))
              continue;
            const u6 = t9[i13];
            if (l5)
              if (hasOwn(s9, i13))
                u6 !== s9[i13] && (s9[i13] = u6, c6 = true);
              else {
                const t10 = N(i13);
                o14[t10] = resolvePropValue(l5, a8, t10, u6, e23, false);
              }
            else
              u6 !== s9[i13] && (s9[i13] = u6, c6 = true);
          }
        }
        c6 && trigger(e23.attrs, "set", "");
      }(e22, t8.props, r6, n5), updateSlots(e22, t8.children, n5), pauseTracking(), flushPreFlushCbs(e22), resetTracking();
    }, patchChildren = (e22, t8, n5, r6, o14, s9, i12, a8, l5 = false) => {
      const u6 = e22 && e22.children, d6 = e22 ? e22.shapeFlag : 0, f4 = t8.children, { patchFlag: g4, shapeFlag: m11 } = t8;
      if (g4 > 0) {
        if (128 & g4)
          return void patchKeyedChildren(u6, f4, n5, r6, o14, s9, i12, a8, l5);
        if (256 & g4)
          return void patchUnkeyedChildren(u6, f4, n5, r6, o14, s9, i12, a8, l5);
      }
      8 & m11 ? (16 & d6 && unmountChildren(u6, o14, s9), f4 !== u6 && c5(n5, f4)) : 16 & d6 ? 16 & m11 ? patchKeyedChildren(u6, f4, n5, r6, o14, s9, i12, a8, l5) : unmountChildren(u6, o14, s9, true) : (8 & d6 && c5(n5, ""), 16 & m11 && mountChildren(f4, n5, r6, o14, s9, i12, a8, l5));
    }, patchUnkeyedChildren = (e22, t8, n5, r6, o14, s9, i12, a8, l5) => {
      t8 = t8 || E;
      const c6 = (e22 = e22 || E).length, u6 = t8.length, d6 = Math.min(c6, u6);
      let f4;
      for (f4 = 0; f4 < d6; f4++) {
        const r7 = t8[f4] = l5 ? cloneIfMounted(t8[f4]) : normalizeVNode$1(t8[f4]);
        patch(e22[f4], r7, n5, null, o14, s9, i12, a8, l5);
      }
      c6 > u6 ? unmountChildren(e22, o14, s9, true, false, d6) : mountChildren(t8, n5, r6, o14, s9, i12, a8, l5, d6);
    }, patchKeyedChildren = (e22, t8, n5, r6, o14, s9, i12, a8, l5) => {
      let c6 = 0;
      const u6 = t8.length;
      let d6 = e22.length - 1, f4 = u6 - 1;
      for (; c6 <= d6 && c6 <= f4; ) {
        const r7 = e22[c6], u7 = t8[c6] = l5 ? cloneIfMounted(t8[c6]) : normalizeVNode$1(t8[c6]);
        if (!isSameVNodeType(r7, u7))
          break;
        patch(r7, u7, n5, null, o14, s9, i12, a8, l5), c6++;
      }
      for (; c6 <= d6 && c6 <= f4; ) {
        const r7 = e22[d6], c7 = t8[f4] = l5 ? cloneIfMounted(t8[f4]) : normalizeVNode$1(t8[f4]);
        if (!isSameVNodeType(r7, c7))
          break;
        patch(r7, c7, n5, null, o14, s9, i12, a8, l5), d6--, f4--;
      }
      if (c6 > d6) {
        if (c6 <= f4) {
          const e23 = f4 + 1, d7 = e23 < u6 ? t8[e23].el : r6;
          for (; c6 <= f4; )
            patch(null, t8[c6] = l5 ? cloneIfMounted(t8[c6]) : normalizeVNode$1(t8[c6]), n5, d7, o14, s9, i12, a8, l5), c6++;
        }
      } else if (c6 > f4)
        for (; c6 <= d6; )
          unmount(e22[c6], o14, s9, true), c6++;
      else {
        const g4 = c6, m11 = c6, y6 = /* @__PURE__ */ new Map();
        for (c6 = m11; c6 <= f4; c6++) {
          const e23 = t8[c6] = l5 ? cloneIfMounted(t8[c6]) : normalizeVNode$1(t8[c6]);
          null != e23.key && y6.set(e23.key, c6);
        }
        let v5, _6 = 0;
        const b5 = f4 - m11 + 1;
        let C5 = false, S5 = 0;
        const A5 = new Array(b5);
        for (c6 = 0; c6 < b5; c6++)
          A5[c6] = 0;
        for (c6 = g4; c6 <= d6; c6++) {
          const r7 = e22[c6];
          if (_6 >= b5) {
            unmount(r7, o14, s9, true);
            continue;
          }
          let u7;
          if (null != r7.key)
            u7 = y6.get(r7.key);
          else
            for (v5 = m11; v5 <= f4; v5++)
              if (0 === A5[v5 - m11] && isSameVNodeType(r7, t8[v5])) {
                u7 = v5;
                break;
              }
          void 0 === u7 ? unmount(r7, o14, s9, true) : (A5[u7 - m11] = c6 + 1, u7 >= S5 ? S5 = u7 : C5 = true, patch(r7, t8[u7], n5, null, o14, s9, i12, a8, l5), _6++);
        }
        const w6 = C5 ? function(e23) {
          const t9 = e23.slice(), n6 = [0];
          let r7, o15, s10, i13, a9;
          const l6 = e23.length;
          for (r7 = 0; r7 < l6; r7++) {
            const l7 = e23[r7];
            if (0 !== l7) {
              if (o15 = n6[n6.length - 1], e23[o15] < l7) {
                t9[r7] = o15, n6.push(r7);
                continue;
              }
              for (s10 = 0, i13 = n6.length - 1; s10 < i13; )
                a9 = s10 + i13 >> 1, e23[n6[a9]] < l7 ? s10 = a9 + 1 : i13 = a9;
              l7 < e23[n6[s10]] && (s10 > 0 && (t9[r7] = n6[s10 - 1]), n6[s10] = r7);
            }
          }
          s10 = n6.length, i13 = n6[s10 - 1];
          for (; s10-- > 0; )
            n6[s10] = i13, i13 = t9[i13];
          return n6;
        }(A5) : E;
        for (v5 = w6.length - 1, c6 = b5 - 1; c6 >= 0; c6--) {
          const e23 = m11 + c6, d7 = t8[e23], f5 = e23 + 1 < u6 ? t8[e23 + 1].el : r6;
          0 === A5[c6] ? patch(null, d7, n5, f5, o14, s9, i12, a8, l5) : C5 && (v5 < 0 || c6 !== w6[v5] ? move(d7, n5, f5, 2) : v5--);
        }
      }
    }, move = (e22, t8, r6, o14, s9 = null) => {
      const { el: i12, type: a8, transition: l5, children: c6, shapeFlag: u6 } = e22;
      if (6 & u6)
        return void move(e22.component.subTree, t8, r6, o14);
      if (128 & u6)
        return void e22.suspense.move(t8, r6, o14);
      if (64 & u6)
        return void a8.move(e22, t8, r6, y5);
      if (a8 === ft) {
        n4(i12, t8, r6);
        for (let e23 = 0; e23 < c6.length; e23++)
          move(c6[e23], t8, r6, o14);
        return void n4(e22.anchor, t8, r6);
      }
      if (a8 === mt2)
        return void moveStaticNode(e22, t8, r6);
      if (2 !== o14 && 1 & u6 && l5)
        if (0 === o14)
          l5.beforeEnter(i12), n4(i12, t8, r6), queuePostRenderEffect(() => l5.enter(i12), s9);
        else {
          const { leave: e23, delayLeave: o15, afterLeave: s10 } = l5, remove22 = () => n4(i12, t8, r6), performLeave = () => {
            e23(i12, () => {
              remove22(), s10 && s10();
            });
          };
          o15 ? o15(i12, remove22, performLeave) : performLeave();
        }
      else
        n4(i12, t8, r6);
    }, unmount = (e22, t8, n5, r6 = false, o14 = false) => {
      const { type: s9, props: i12, ref: a8, children: l5, dynamicChildren: c6, shapeFlag: u6, patchFlag: d6, dirs: f4, memoIndex: g4 } = e22;
      if (-2 === d6 && (o14 = false), null != a8 && setRef(a8, null, n5, e22, true), null != g4 && (t8.renderCache[g4] = void 0), 256 & u6)
        return void t8.ctx.deactivate(e22);
      const m11 = 1 & u6 && f4, v5 = !isAsyncWrapper(e22);
      let _6;
      if (v5 && (_6 = i12 && i12.onVnodeBeforeUnmount) && invokeVNodeHook(_6, t8, e22), 6 & u6)
        unmountComponent(e22.component, n5, r6);
      else {
        if (128 & u6)
          return void e22.suspense.unmount(n5, r6);
        m11 && invokeDirectiveHook(e22, null, t8, "beforeUnmount"), 64 & u6 ? e22.type.remove(e22, t8, n5, y5, r6) : c6 && (s9 !== ft || d6 > 0 && 64 & d6) ? unmountChildren(c6, t8, n5, false, true) : (s9 === ft && 384 & d6 || !o14 && 16 & u6) && unmountChildren(l5, t8, n5), r6 && remove2(e22);
      }
      (v5 && (_6 = i12 && i12.onVnodeUnmounted) || m11) && queuePostRenderEffect(() => {
        _6 && invokeVNodeHook(_6, t8, e22), m11 && invokeDirectiveHook(e22, null, t8, "unmounted");
      }, n5);
    }, remove2 = (e22) => {
      const { type: t8, el: n5, anchor: o14, transition: s9 } = e22;
      if (t8 === ft)
        return void removeFragment(n5, o14);
      if (t8 === mt2)
        return void removeStaticNode(e22);
      const performRemove = () => {
        r5(n5), s9 && !s9.persisted && s9.afterLeave && s9.afterLeave();
      };
      if (1 & e22.shapeFlag && s9 && !s9.persisted) {
        const { leave: t9, delayLeave: r6 } = s9, performLeave = () => t9(n5, performRemove);
        r6 ? r6(e22.el, performRemove, performLeave) : performLeave();
      } else
        performRemove();
    }, removeFragment = (e22, t8) => {
      let n5;
      for (; e22 !== t8; )
        n5 = d5(e22), r5(e22), e22 = n5;
      r5(t8);
    }, unmountComponent = (e22, t8, n5) => {
      const { bum: r6, scope: o14, update: s9, subTree: i12, um: a8, m: l5, a: c6 } = e22;
      invalidateMount(l5), invalidateMount(c6), r6 && invokeArrayFns(r6), o14.stop(), s9 && (s9.active = false, unmount(i12, e22, t8, n5)), a8 && queuePostRenderEffect(a8, t8), queuePostRenderEffect(() => {
        e22.isUnmounted = true;
      }, t8), t8 && t8.pendingBranch && !t8.isUnmounted && e22.asyncDep && !e22.asyncResolved && e22.suspenseId === t8.pendingId && (t8.deps--, 0 === t8.deps && t8.resolve());
    }, unmountChildren = (e22, t8, n5, r6 = false, o14 = false, s9 = 0) => {
      for (let i12 = s9; i12 < e22.length; i12++)
        unmount(e22[i12], t8, n5, r6, o14);
    }, getNextHostNode = (e22) => 6 & e22.shapeFlag ? getNextHostNode(e22.component.subTree) : 128 & e22.shapeFlag ? e22.suspense.next() : d5(e22.anchor || e22.el);
    let m10 = false;
    const render = (e22, t8, n5) => {
      null == e22 ? t8._vnode && unmount(t8._vnode, null, null, true) : patch(t8._vnode || null, e22, t8, null, null, null, n5), m10 || (m10 = true, flushPreFlushCbs(), flushPostFlushCbs(), m10 = false), t8._vnode = e22;
    }, y5 = { p: patch, um: unmount, m: move, r: remove2, mt: mountComponent, mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, n: getNextHostNode, o: e21 };
    let v4, _5;
    return { render, hydrate: v4, createApp: createAppAPI(render, v4) };
  }(e20);
}
function resolveChildrenNamespace({ type: e20, props: t7 }, n4) {
  return "svg" === n4 && "foreignObject" === e20 || "mathml" === n4 && "annotation-xml" === e20 && t7 && t7.encoding && t7.encoding.includes("html") ? void 0 : n4;
}
function toggleRecurse({ effect: e20, update: t7 }, n4) {
  e20.allowRecurse = t7.allowRecurse = n4;
}
function traverseStaticChildren(e20, t7, n4 = false) {
  const r5 = e20.children, o13 = t7.children;
  if (j3(r5) && j3(o13))
    for (let e21 = 0; e21 < r5.length; e21++) {
      const t8 = r5[e21];
      let s8 = o13[e21];
      1 & s8.shapeFlag && !s8.dynamicChildren && ((s8.patchFlag <= 0 || 32 === s8.patchFlag) && (s8 = o13[e21] = cloneIfMounted(o13[e21]), s8.el = t8.el), n4 || -2 === s8.patchFlag || traverseStaticChildren(t8, s8)), s8.type === ht2 && (s8.el = t8.el);
    }
}
function locateNonHydratedAsyncRoot(e20) {
  const t7 = e20.subTree.component;
  if (t7)
    return t7.asyncDep && !t7.asyncResolved ? t7 : locateNonHydratedAsyncRoot(t7);
}
function invalidateMount(e20) {
  if (e20)
    for (let t7 = 0; t7 < e20.length; t7++)
      e20[t7].active = false;
}
function watchEffect(e20, t7) {
  return doWatch(e20, null, t7);
}
function watch(e20, t7, n4) {
  return doWatch(e20, t7, n4);
}
function doWatch(e20, t7, { immediate: n4, deep: r5, flush: o13, once: s8, onTrack: i11, onTrigger: a7 } = $2) {
  if (t7 && s8) {
    const e21 = t7;
    t7 = (...t8) => {
      e21(...t8), unwatch();
    };
  }
  const l4 = Ct, reactiveGetter = (e21) => true === r5 ? e21 : traverse(e21, false === r5 ? 1 : void 0);
  let c5, u5, d5 = false, f3 = false;
  if (isRef(e20) ? (c5 = () => e20.value, d5 = isShallow(e20)) : isReactive(e20) ? (c5 = () => reactiveGetter(e20), d5 = true) : j3(e20) ? (f3 = true, d5 = e20.some((e21) => isReactive(e21) || isShallow(e21)), c5 = () => e20.map((e21) => isRef(e21) ? e21.value : isReactive(e21) ? reactiveGetter(e21) : isFunction(e21) ? callWithErrorHandling(e21, l4, 2) : void 0)) : c5 = isFunction(e20) ? t7 ? () => callWithErrorHandling(e20, l4, 2) : () => (u5 && u5(), callWithAsyncErrorHandling(e20, l4, 3, [onCleanup])) : NOOP, t7 && r5) {
    const e21 = c5;
    c5 = () => traverse(e21());
  }
  let g3, onCleanup = (e21) => {
    u5 = v4.onStop = () => {
      callWithErrorHandling(e21, l4, 4), u5 = v4.onStop = void 0;
    };
  };
  if (Rt) {
    if (onCleanup = NOOP, t7 ? n4 && callWithAsyncErrorHandling(t7, l4, 3, [c5(), f3 ? [] : void 0, onCleanup]) : c5(), "sync" !== o13)
      return NOOP;
    {
      const e21 = useSSRContext();
      g3 = e21.__watcherHandles || (e21.__watcherHandles = []);
    }
  }
  let m10 = f3 ? new Array(e20.length).fill(at2) : at2;
  const job = () => {
    if (v4.active && v4.dirty)
      if (t7) {
        const e21 = v4.run();
        (r5 || d5 || (f3 ? e21.some((e22, t8) => hasChanged(e22, m10[t8])) : hasChanged(e21, m10))) && (u5 && u5(), callWithAsyncErrorHandling(t7, l4, 3, [e21, m10 === at2 ? void 0 : f3 && m10[0] === at2 ? [] : m10, onCleanup]), m10 = e21);
      } else
        v4.run();
  };
  let y5;
  job.allowRecurse = !!t7, "sync" === o13 ? y5 = job : "post" === o13 ? y5 = () => queuePostRenderEffect(job, l4 && l4.suspense) : (job.pre = true, l4 && (job.id = l4.uid), y5 = () => queueJob(job));
  const v4 = new ReactiveEffect(c5, NOOP, y5), _5 = getCurrentScope(), unwatch = () => {
    v4.stop(), _5 && remove(_5.effects, v4);
  };
  return t7 ? n4 ? job() : m10 = v4.run() : "post" === o13 ? queuePostRenderEffect(v4.run.bind(v4), l4 && l4.suspense) : v4.run(), g3 && g3.push(unwatch), unwatch;
}
function instanceWatch(e20, t7, n4) {
  const r5 = this.proxy, o13 = isString(e20) ? e20.includes(".") ? createPathGetter(r5, e20) : () => r5[e20] : e20.bind(r5, r5);
  let s8;
  isFunction(t7) ? s8 = t7 : (s8 = t7.handler, n4 = t7);
  const i11 = setCurrentInstance(this), a7 = doWatch(o13, s8.bind(r5), n4);
  return i11(), a7;
}
function createPathGetter(e20, t7) {
  const n4 = t7.split(".");
  return () => {
    let t8 = e20;
    for (let e21 = 0; e21 < n4.length && t8; e21++)
      t8 = t8[n4[e21]];
    return t8;
  };
}
function traverse(e20, t7 = 1 / 0, n4) {
  if (t7 <= 0 || !isObject(e20) || e20.__v_skip)
    return e20;
  if ((n4 = n4 || /* @__PURE__ */ new Set()).has(e20))
    return e20;
  if (n4.add(e20), t7--, isRef(e20))
    traverse(e20.value, t7, n4);
  else if (j3(e20))
    for (let r5 = 0; r5 < e20.length; r5++)
      traverse(e20[r5], t7, n4);
  else if (isSet(e20) || isMap(e20))
    e20.forEach((e21) => {
      traverse(e21, t7, n4);
    });
  else if (isPlainObject(e20)) {
    for (const r5 in e20)
      traverse(e20[r5], t7, n4);
    for (const r5 of Object.getOwnPropertySymbols(e20))
      Object.prototype.propertyIsEnumerable.call(e20, r5) && traverse(e20[r5], t7, n4);
  }
  return e20;
}
function onActivated(e20, t7) {
  registerKeepAliveHook(e20, "a", t7);
}
function onDeactivated(e20, t7) {
  registerKeepAliveHook(e20, "da", t7);
}
function registerKeepAliveHook(e20, t7, n4 = Ct) {
  const r5 = e20.__wdc || (e20.__wdc = () => {
    let t8 = n4;
    for (; t8; ) {
      if (t8.isDeactivated)
        return;
      t8 = t8.parent;
    }
    return e20();
  });
  if (injectHook(t7, r5, n4), n4) {
    let e21 = n4.parent;
    for (; e21 && e21.parent; )
      isKeepAlive(e21.parent.vnode) && injectToKeepAliveRoot(r5, t7, n4, e21), e21 = e21.parent;
  }
}
function injectToKeepAliveRoot(e20, t7, n4, r5) {
  const o13 = injectHook(t7, e20, r5, true);
  Ge2(() => {
    remove(r5[t7], o13);
  }, n4);
}
function getLeavingNodesForType(e20, t7) {
  const { leavingVNodes: n4 } = e20;
  let r5 = n4.get(t7.type);
  return r5 || (r5 = /* @__PURE__ */ Object.create(null), n4.set(t7.type, r5)), r5;
}
function resolveTransitionHooks(e20, t7, n4, r5, o13) {
  const { appear: s8, mode: i11, persisted: a7 = false, onBeforeEnter: l4, onEnter: c5, onAfterEnter: u5, onEnterCancelled: d5, onBeforeLeave: f3, onLeave: g3, onAfterLeave: m10, onLeaveCancelled: y5, onBeforeAppear: v4, onAppear: _5, onAfterAppear: b5, onAppearCancelled: C5 } = t7, S5 = String(e20.key), A5 = getLeavingNodesForType(n4, e20), callHook2 = (e21, t8) => {
    e21 && callWithAsyncErrorHandling(e21, r5, 9, t8);
  }, callAsyncHook = (e21, t8) => {
    const n5 = t8[1];
    callHook2(e21, t8), j3(e21) ? e21.every((e22) => e22.length <= 1) && n5() : e21.length <= 1 && n5();
  }, w6 = { mode: i11, persisted: a7, beforeEnter(t8) {
    let r6 = l4;
    if (!n4.isMounted) {
      if (!s8)
        return;
      r6 = v4 || l4;
    }
    t8[lt2] && t8[lt2](true);
    const o14 = A5[S5];
    o14 && isSameVNodeType(e20, o14) && o14.el[lt2] && o14.el[lt2](), callHook2(r6, [t8]);
  }, enter(e21) {
    let t8 = c5, r6 = u5, o14 = d5;
    if (!n4.isMounted) {
      if (!s8)
        return;
      t8 = _5 || c5, r6 = b5 || u5, o14 = C5 || d5;
    }
    let i12 = false;
    const a8 = e21[ct2] = (t9) => {
      i12 || (i12 = true, callHook2(t9 ? o14 : r6, [e21]), w6.delayedLeave && w6.delayedLeave(), e21[ct2] = void 0);
    };
    t8 ? callAsyncHook(t8, [e21, a8]) : a8();
  }, leave(t8, r6) {
    const o14 = String(e20.key);
    if (t8[ct2] && t8[ct2](true), n4.isUnmounting)
      return r6();
    callHook2(f3, [t8]);
    let s9 = false;
    const i12 = t8[lt2] = (n5) => {
      s9 || (s9 = true, r6(), callHook2(n5 ? y5 : m10, [t8]), t8[lt2] = void 0, A5[o14] === e20 && delete A5[o14]);
    };
    A5[o14] = e20, g3 ? callAsyncHook(g3, [t8, i12]) : i12();
  }, clone(e21) {
    const s9 = resolveTransitionHooks(e21, t7, n4, r5, o13);
    return o13 && o13(s9), s9;
  } };
  return w6;
}
function emptyPlaceholder(e20) {
  if (isKeepAlive(e20))
    return (e20 = cloneVNode(e20)).children = null, e20;
}
function getKeepAliveChild(e20) {
  if (!isKeepAlive(e20))
    return e20;
  const { shapeFlag: t7, children: n4 } = e20;
  if (n4) {
    if (16 & t7)
      return n4[0];
    if (32 & t7 && isFunction(n4.default))
      return n4.default();
  }
}
function setTransitionHooks(e20, t7) {
  6 & e20.shapeFlag && e20.component ? setTransitionHooks(e20.component.subTree, t7) : 128 & e20.shapeFlag ? (e20.ssContent.transition = t7.clone(e20.ssContent), e20.ssFallback.transition = t7.clone(e20.ssFallback)) : e20.transition = t7;
}
function getTransitionRawChildren(e20, t7 = false, n4) {
  let r5 = [], o13 = 0;
  for (let s8 = 0; s8 < e20.length; s8++) {
    let i11 = e20[s8];
    const a7 = null == n4 ? i11.key : String(n4) + String(null != i11.key ? i11.key : s8);
    i11.type === ft ? (128 & i11.patchFlag && o13++, r5 = r5.concat(getTransitionRawChildren(i11.children, t7, a7))) : (t7 || i11.type !== gt2) && r5.push(null != a7 ? cloneVNode(i11, { key: a7 }) : i11);
  }
  if (o13 > 1)
    for (let e21 = 0; e21 < r5.length; e21++)
      r5[e21].patchFlag = -2;
  return r5;
}
function setBlockTracking(e20) {
  _t += e20;
}
function isVNode(e20) {
  return !!e20 && true === e20.__v_isVNode;
}
function isSameVNodeType(e20, t7) {
  return e20.type === t7.type && e20.key === t7.key;
}
function cloneVNode(e20, t7, n4 = false, r5 = false) {
  const { props: o13, ref: s8, patchFlag: i11, children: a7, transition: l4 } = e20, c5 = t7 ? mergeProps(o13 || {}, t7) : o13, u5 = { __v_isVNode: true, __v_skip: true, type: e20.type, props: c5, key: c5 && normalizeKey(c5), ref: t7 && t7.ref ? n4 && s8 ? j3(s8) ? s8.concat(normalizeRef(t7)) : [s8, normalizeRef(t7)] : normalizeRef(t7) : s8, scopeId: e20.scopeId, slotScopeIds: e20.slotScopeIds, children: a7, target: e20.target, targetAnchor: e20.targetAnchor, staticCount: e20.staticCount, shapeFlag: e20.shapeFlag, patchFlag: t7 && e20.type !== ft ? -1 === i11 ? 16 : 16 | i11 : i11, dynamicProps: e20.dynamicProps, dynamicChildren: e20.dynamicChildren, appContext: e20.appContext, dirs: e20.dirs, transition: l4, component: e20.component, suspense: e20.suspense, ssContent: e20.ssContent && cloneVNode(e20.ssContent), ssFallback: e20.ssFallback && cloneVNode(e20.ssFallback), el: e20.el, anchor: e20.anchor, ctx: e20.ctx, ce: e20.ce };
  return l4 && r5 && setTransitionHooks(u5, l4.clone(u5)), u5;
}
function createTextVNode(e20 = " ", t7 = 0) {
  return createVNode(ht2, null, e20, t7);
}
function normalizeVNode$1(e20) {
  return null == e20 || "boolean" == typeof e20 ? createVNode(gt2) : j3(e20) ? createVNode(ft, null, e20.slice()) : "object" == typeof e20 ? cloneIfMounted(e20) : createVNode(ht2, null, String(e20));
}
function cloneIfMounted(e20) {
  return null === e20.el && -1 !== e20.patchFlag || e20.memo ? e20 : cloneVNode(e20);
}
function normalizeChildren(e20, t7) {
  let n4 = 0;
  const { shapeFlag: r5 } = e20;
  if (null == t7)
    t7 = null;
  else if (j3(t7))
    n4 = 16;
  else if ("object" == typeof t7) {
    if (65 & r5) {
      const n5 = t7.default;
      return void (n5 && (n5._c && (n5._d = false), normalizeChildren(e20, n5()), n5._c && (n5._d = true)));
    }
    {
      n4 = 32;
      const r6 = t7._;
      r6 || isInternalObject(t7) ? 3 === r6 && Me2 && (1 === Me2.slots._ ? t7._ = 1 : (t7._ = 2, e20.patchFlag |= 1024)) : t7._ctx = Me2;
    }
  } else
    isFunction(t7) ? (t7 = { default: t7, _ctx: Me2 }, n4 = 32) : (t7 = String(t7), 64 & r5 ? (n4 = 16, t7 = [createTextVNode(t7)]) : n4 = 8);
  e20.children = t7, e20.shapeFlag |= n4;
}
function mergeProps(...e20) {
  const t7 = {};
  for (let n4 = 0; n4 < e20.length; n4++) {
    const r5 = e20[n4];
    for (const e21 in r5)
      if ("class" === e21)
        t7.class !== r5.class && (t7.class = normalizeClass([t7.class, r5.class]));
      else if ("style" === e21)
        t7.style = normalizeStyle([t7.style, r5.style]);
      else if (isOn(e21)) {
        const n5 = t7[e21], o13 = r5[e21];
        !o13 || n5 === o13 || j3(n5) && n5.includes(o13) || (t7[e21] = n5 ? [].concat(n5, o13) : o13);
      } else
        "" !== e21 && (t7[e21] = r5[e21]);
  }
  return t7;
}
function invokeVNodeHook(e20, t7, n4, r5 = null) {
  callWithAsyncErrorHandling(e20, t7, 7, [n4, r5]);
}
function createComponentInstance$1(e20, t7, n4) {
  const r5 = e20.type, o13 = (t7 ? t7.appContext : e20.appContext) || bt, s8 = { uid: kt++, vnode: e20, type: r5, parent: t7, appContext: o13, root: null, next: null, subTree: null, effect: null, update: null, scope: new EffectScope(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t7 ? t7.provides : Object.create(o13.provides), accessCache: null, renderCache: [], components: null, directives: null, propsOptions: normalizePropsOptions(r5, o13), emitsOptions: normalizeEmitsOptions(r5, o13), emit: null, emitted: null, propsDefaults: $2, inheritAttrs: r5.inheritAttrs, ctx: $2, data: $2, props: $2, attrs: $2, slots: $2, refs: $2, setupState: $2, setupContext: null, attrsProxy: null, slotsProxy: null, suspense: n4, suspenseId: n4 ? n4.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return s8.ctx = { _: s8 }, s8.root = t7 ? t7.root : s8, s8.emit = emit.bind(null, s8), e20.ce && e20.ce(s8), s8;
}
function isStatefulComponent(e20) {
  return 4 & e20.vnode.shapeFlag;
}
function setupComponent$1(e20, t7 = false) {
  t7 && At(t7);
  const { props: n4, children: r5 } = e20.vnode, o13 = isStatefulComponent(e20);
  !function(e21, t8, n5, r6 = false) {
    const o14 = {}, s9 = createInternalObject();
    e21.propsDefaults = /* @__PURE__ */ Object.create(null), setFullProps(e21, t8, o14, s9);
    for (const t9 in e21.propsOptions[0])
      t9 in o14 || (o14[t9] = void 0);
    n5 ? e21.props = r6 ? o14 : shallowReactive(o14) : e21.type.props ? e21.props = o14 : e21.props = s9, e21.attrs = s9;
  }(e20, n4, o13, t7), initSlots(e20, r5);
  const s8 = o13 ? function(e21, t8) {
    const n5 = e21.type;
    e21.accessCache = /* @__PURE__ */ Object.create(null), e21.proxy = new Proxy(e21.ctx, et2);
    const { setup: r6 } = n5;
    if (r6) {
      const n6 = e21.setupContext = r6.length > 1 ? function(e22) {
        const expose = (t9) => {
          e22.exposed = t9 || {};
        };
        return { attrs: new Proxy(e22.attrs, Tt), slots: e22.slots, emit: e22.emit, expose };
      }(e21) : null, o14 = setCurrentInstance(e21);
      pauseTracking();
      const s9 = callWithErrorHandling(r6, e21, 0, [e21.props, n6]);
      if (resetTracking(), o14(), isPromise(s9)) {
        if (s9.then(unsetCurrentInstance, unsetCurrentInstance), t8)
          return s9.then((n7) => {
            handleSetupResult(e21, n7, t8);
          }).catch((t9) => {
            handleError(t9, e21, 0);
          });
        e21.asyncDep = s9;
      } else
        handleSetupResult(e21, s9, t8);
    } else
      finishComponentSetup(e21, t8);
  }(e20, t7) : void 0;
  return t7 && At(false), s8;
}
function handleSetupResult(e20, t7, n4) {
  isFunction(t7) ? e20.type.__ssrInlineRender ? e20.ssrRender = t7 : e20.render = t7 : isObject(t7) && (e20.setupState = proxyRefs(t7)), finishComponentSetup(e20, n4);
}
function finishComponentSetup(e20, t7, n4) {
  const r5 = e20.type;
  if (!e20.render) {
    if (!t7 && wt && !r5.render) {
      const t8 = r5.template || resolveMergedOptions(e20).template;
      if (t8) {
        const { isCustomElement: n5, compilerOptions: o13 } = e20.appContext.config, { delimiters: s8, compilerOptions: i11 } = r5, a7 = O(O({ isCustomElement: n5, delimiters: s8 }, o13), i11);
        r5.render = wt(t8, a7);
      }
    }
    e20.render = r5.render || NOOP;
  }
  if (__VUE_OPTIONS_API__) {
    const t8 = setCurrentInstance(e20);
    pauseTracking();
    try {
      applyOptions(e20);
    } finally {
      resetTracking(), t8();
    }
  }
}
function getComponentPublicInstance(e20) {
  return e20.exposed ? e20.exposeProxy || (e20.exposeProxy = new Proxy(proxyRefs((t7 = e20.exposed, Object.isExtensible(t7) && def(t7, "__v_skip", true), t7)), { get: (t8, n4) => n4 in t8 ? t8[n4] : n4 in Qe2 ? Qe2[n4](e20) : void 0, has: (e21, t8) => t8 in e21 || t8 in Qe2 })) : e20.proxy;
  var t7;
}
function getComponentName(e20, t7 = true) {
  return isFunction(e20) ? e20.displayName || e20.name : e20.name || t7 && e20.__name;
}
function h(e20, t7, n4) {
  const r5 = arguments.length;
  return 2 === r5 ? isObject(t7) && !j3(t7) ? isVNode(t7) ? createVNode(e20, null, [t7]) : createVNode(e20, t7) : createVNode(e20, null, t7) : (r5 > 3 ? n4 = Array.prototype.slice.call(arguments, 2) : 3 === r5 && isVNode(n4) && (n4 = [n4]), createVNode(e20, t7, n4));
}
function NumberOf(e20) {
  return toNumber(e20);
}
function addTransitionClass(e20, t7) {
  t7.split(/\s+/).forEach((t8) => t8 && e20.classList.add(t8)), (e20[It] || (e20[It] = /* @__PURE__ */ new Set())).add(t7);
}
function removeTransitionClass(e20, t7) {
  t7.split(/\s+/).forEach((t8) => t8 && e20.classList.remove(t8));
  const n4 = e20[It];
  n4 && (n4.delete(t7), n4.size || (e20[It] = void 0));
}
function nextFrame(e20) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e20);
  });
}
function whenTransitionEnds(e20, t7, n4, r5) {
  const o13 = e20._endId = ++Nt, resolveIfNotStale = () => {
    o13 === e20._endId && r5();
  };
  if (n4)
    return setTimeout(resolveIfNotStale, n4);
  const { type: s8, timeout: i11, propCount: a7 } = function(e21, t8) {
    const n5 = window.getComputedStyle(e21), getStyleProperties = (e22) => (n5[e22] || "").split(", "), r6 = getStyleProperties(`${jt}Delay`), o14 = getStyleProperties(`${jt}Duration`), s9 = getTimeout(r6, o14), i12 = getStyleProperties(`${Ht}Delay`), a8 = getStyleProperties(`${Ht}Duration`), l5 = getTimeout(i12, a8);
    let c6 = null, u5 = 0, d5 = 0;
    t8 === jt ? s9 > 0 && (c6 = jt, u5 = s9, d5 = o14.length) : t8 === Ht ? l5 > 0 && (c6 = Ht, u5 = l5, d5 = a8.length) : (u5 = Math.max(s9, l5), c6 = u5 > 0 ? s9 > l5 ? jt : Ht : null, d5 = c6 ? c6 === jt ? o14.length : a8.length : 0);
    const f3 = c6 === jt && /\b(transform|all)(,|$)/.test(getStyleProperties(`${jt}Property`).toString());
    return { type: c6, timeout: u5, propCount: d5, hasTransform: f3 };
  }(e20, t7);
  if (!s8)
    return r5();
  const l4 = s8 + "end";
  let c5 = 0;
  const end = () => {
    e20.removeEventListener(l4, onEnd), resolveIfNotStale();
  }, onEnd = (t8) => {
    t8.target === e20 && ++c5 >= a7 && end();
  };
  setTimeout(() => {
    c5 < a7 && end();
  }, i11 + 1), e20.addEventListener(l4, onEnd);
}
function getTimeout(e20, t7) {
  for (; e20.length < t7.length; )
    e20 = e20.concat(e20);
  return Math.max(...t7.map((t8, n4) => toMs(t8) + toMs(e20[n4])));
}
function toMs(e20) {
  return "auto" === e20 ? 0 : 1e3 * Number(e20.slice(0, -1).replace(",", "."));
}
function setStyle(e20, t7, n4) {
  if (j3(n4))
    n4.forEach((n5) => setStyle(e20, t7, n5));
  else if (null == n4 && (n4 = ""), t7.startsWith("--"))
    e20.setProperty(t7, n4);
  else {
    const r5 = function(e21, t8) {
      const n5 = zt[t8];
      if (n5)
        return n5;
      let r6 = N(t8);
      if ("filter" !== r6 && r6 in e21)
        return zt[t8] = r6;
      r6 = F2(r6);
      for (let n6 = 0; n6 < Ut.length; n6++) {
        const o13 = Ut[n6] + r6;
        if (o13 in e21)
          return zt[t8] = o13;
      }
      return t8;
    }(e20, t7);
    Dt.test(n4) ? e20.setProperty(V(r5), n4.replace(Dt, ""), "important") : e20[r5] = n4;
  }
}
function patchAttr(e20, t7, n4, r5, o13, s8 = G(t7)) {
  r5 && t7.startsWith("xlink:") ? null == n4 ? e20.removeAttributeNS(Wt, t7.slice(6, t7.length)) : e20.setAttributeNS(Wt, t7, n4) : null == n4 || s8 && !includeBooleanAttr(n4) ? e20.removeAttribute(t7) : e20.setAttribute(t7, s8 ? "" : isSymbol(n4) ? String(n4) : n4);
}
function patchEvent(e20, t7, n4, r5, o13 = null) {
  const s8 = e20[qt] || (e20[qt] = {}), i11 = s8[t7];
  if (r5 && i11)
    i11.value = r5;
  else {
    const [n5, a7] = function(e21) {
      let t8;
      if (Kt.test(e21)) {
        let n7;
        for (t8 = {}; n7 = e21.match(Kt); )
          e21 = e21.slice(0, e21.length - n7[0].length), t8[n7[0].toLowerCase()] = true;
      }
      const n6 = ":" === e21[2] ? e21.slice(3) : V(e21.slice(2));
      return [n6, t8];
    }(t7);
    if (r5) {
      const i12 = s8[t7] = function(e21, t8) {
        const invoker = (e22) => {
          if (e22._vts) {
            if (e22._vts <= invoker.attached)
              return;
          } else
            e22._vts = Date.now();
          callWithAsyncErrorHandling(function(e23, t9) {
            if (j3(t9)) {
              const n6 = e23.stopImmediatePropagation;
              return e23.stopImmediatePropagation = () => {
                n6.call(e23), e23._stopped = true;
              }, t9.map((e24) => (t10) => !t10._stopped && e24 && e24(t10));
            }
            return t9;
          }(e22, invoker.value), t8, 5, [e22]);
        };
        return invoker.value = e21, invoker.attached = getNow(), invoker;
      }(r5, o13);
      !function(e21, t8, n6, r6) {
        e21.addEventListener(t8, n6, r6);
      }(e20, n5, i12, a7);
    } else
      i11 && (!function(e21, t8, n6, r6) {
        e21.removeEventListener(t8, n6, r6);
      }(e20, n5, i11, a7), s8[t7] = void 0);
  }
}
function ssrRenderAttrs(e20, t7) {
  let n4 = "";
  for (const o13 in e20) {
    if (Yt(o13) || isOn(o13) || "textarea" === t7 && "value" === o13)
      continue;
    const s8 = e20[o13];
    n4 += "class" === o13 ? ` class="${r5 = s8, escapeHtml$1(normalizeClass(r5))}"` : "style" === o13 ? ` style="${ssrRenderStyle(s8)}"` : ssrRenderDynamicAttr(o13, s8, t7);
  }
  var r5;
  return n4;
}
function ssrRenderDynamicAttr(e20, t7, n4) {
  if (!isRenderableAttrValue(t7))
    return "";
  const r5 = n4 && (n4.indexOf("-") > 0 || q3(n4)) ? e20 : Q[e20] || e20.toLowerCase();
  return Z2(r5) ? includeBooleanAttr(t7) ? ` ${r5}` : "" : function(e21) {
    if (Y2.hasOwnProperty(e21))
      return Y2[e21];
    const t8 = X2.test(e21);
    return t8 && console.error(`unsafe attribute name: ${e21}`), Y2[e21] = !t8;
  }(r5) ? "" === t7 ? ` ${r5}` : ` ${r5}="${escapeHtml$1(t7)}"` : (console.warn(`[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r5}`), "");
}
function ssrRenderAttr(e20, t7) {
  return isRenderableAttrValue(t7) ? ` ${e20}="${escapeHtml$1(t7)}"` : "";
}
function ssrRenderStyle(e20) {
  if (!e20)
    return "";
  if (isString(e20))
    return escapeHtml$1(e20);
  return escapeHtml$1(function(e21) {
    let t7 = "";
    if (!e21 || isString(e21))
      return t7;
    for (const n4 in e21) {
      const r5 = e21[n4];
      (isString(r5) || "number" == typeof r5) && (t7 += `${n4.startsWith("--") ? n4 : V(n4)}:${r5};`);
    }
    return t7;
  }(normalizeStyle(e20)));
}
function ssrRenderComponent(e20, t7 = null, n4 = null, r5 = null, o13) {
  return renderComponentVNode(createVNode(e20, t7, n4), r5, o13);
}
function ssrInterpolate(e20) {
  return escapeHtml$1(toDisplayString(e20));
}
function ssrRenderList(e20, t7) {
  if (j3(e20) || isString(e20))
    for (let n4 = 0, r5 = e20.length; n4 < r5; n4++)
      t7(e20[n4], n4);
  else if ("number" == typeof e20)
    for (let n4 = 0; n4 < e20; n4++)
      t7(n4 + 1, n4);
  else if (isObject(e20))
    if (e20[Symbol.iterator]) {
      const n4 = Array.from(e20);
      for (let e21 = 0, r5 = n4.length; e21 < r5; e21++)
        t7(n4[e21], e21);
    } else {
      const n4 = Object.keys(e20);
      for (let r5 = 0, o13 = n4.length; r5 < o13; r5++) {
        const o14 = n4[r5];
        t7(e20[o14], o14, r5);
      }
    }
}
async function ssrRenderSuspense(e20, { default: t7 }) {
  t7 ? t7() : e20("<!---->");
}
function createBuffer() {
  let e20 = false;
  const t7 = [];
  return { getBuffer: () => t7, push(n4) {
    const r5 = isString(n4);
    e20 && r5 ? t7[t7.length - 1] += n4 : t7.push(n4), e20 = r5, (isPromise(n4) || j3(n4) && n4.hasAsync) && (t7.hasAsync = true);
  } };
}
function renderComponentVNode(e20, t7 = null, n4) {
  const r5 = Qt(e20, t7, null), o13 = tn(r5, true), s8 = isPromise(o13), i11 = r5.sp;
  if (s8 || i11) {
    let e21 = s8 ? o13 : Promise.resolve();
    return i11 && (e21 = e21.then(() => Promise.all(i11.map((e22) => e22.call(r5.proxy)))).catch(NOOP)), e21.then(() => renderComponentSubTree(r5, n4));
  }
  return renderComponentSubTree(r5, n4);
}
function renderComponentSubTree(e20, t7) {
  const n4 = e20.type, { getBuffer: r5, push: o13 } = createBuffer();
  if (isFunction(n4)) {
    let r6 = nn(e20);
    if (!n4.props)
      for (const t8 in e20.attrs)
        t8.startsWith("data-v-") && ((r6.props || (r6.props = {}))[t8] = "");
    renderVNode(o13, e20.subTree = r6, e20, t7);
  } else {
    e20.render && e20.render !== NOOP || e20.ssrRender || n4.ssrRender || !isString(n4.template) || (n4.ssrRender = function(e21, t8) {
      throw new Error("On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions.");
    }(n4.template));
    for (const t8 of e20.scope.effects)
      t8.computed && (t8.computed._dirty = true, t8.computed._cacheable = true);
    const r6 = e20.ssrRender || n4.ssrRender;
    if (r6) {
      let n5 = false !== e20.inheritAttrs ? e20.attrs : void 0, s8 = false, i11 = e20;
      for (; ; ) {
        const e21 = i11.vnode.scopeId;
        e21 && (s8 || (n5 = { ...n5 }, s8 = true), n5[e21] = "");
        const t8 = i11.parent;
        if (!t8 || !t8.subTree || t8.subTree !== i11.vnode)
          break;
        i11 = t8;
      }
      if (t7) {
        s8 || (n5 = { ...n5 });
        const e21 = t7.trim().split(" ");
        for (let t8 = 0; t8 < e21.length; t8++)
          n5[e21[t8]] = "";
      }
      const a7 = en(e20);
      try {
        r6(e20.proxy, o13, e20, n5, e20.props, e20.setupState, e20.data, e20.ctx);
      } finally {
        en(a7);
      }
    } else
      e20.render && e20.render !== NOOP ? renderVNode(o13, e20.subTree = nn(e20), e20, t7) : (n4.name || n4.__file, o13("<!---->"));
  }
  return r5();
}
function renderVNode(e20, t7, n4, r5) {
  const { type: o13, shapeFlag: s8, children: i11 } = t7;
  switch (o13) {
    case ht2:
      e20(escapeHtml$1(i11));
      break;
    case gt2:
      e20(i11 ? `<!--${a7 = i11, a7.replace(te2, "")}-->` : "<!---->");
      break;
    case mt2:
      e20(i11);
      break;
    case ft:
      t7.slotScopeIds && (r5 = (r5 ? r5 + " " : "") + t7.slotScopeIds.join(" ")), e20("<!--[-->"), renderVNodeChildren(e20, i11, n4, r5), e20("<!--]-->");
      break;
    default:
      1 & s8 ? function(e21, t8, n5, r6) {
        const o14 = t8.type;
        let { props: s9, children: i12, shapeFlag: a8, scopeId: l4, dirs: c5 } = t8, u5 = `<${o14}`;
        c5 && (s9 = function(e22, t9, n6) {
          const r7 = [];
          for (let t10 = 0; t10 < n6.length; t10++) {
            const o15 = n6[t10], { dir: { getSSRProps: s10 } } = o15;
            if (s10) {
              const t11 = s10(o15, e22);
              t11 && r7.push(t11);
            }
          }
          return mergeProps(t9 || {}, ...r7);
        }(t8, s9, c5));
        s9 && (u5 += ssrRenderAttrs(s9, o14));
        l4 && (u5 += ` ${l4}`);
        let d5 = n5, f3 = t8;
        for (; d5 && f3 === d5.subTree; )
          f3 = d5.vnode, f3.scopeId && (u5 += ` ${f3.scopeId}`), d5 = d5.parent;
        r6 && (u5 += ` ${r6}`);
        if (e21(u5 + ">"), !K(o14)) {
          let t9 = false;
          s9 && (s9.innerHTML ? (t9 = true, e21(s9.innerHTML)) : s9.textContent ? (t9 = true, e21(escapeHtml$1(s9.textContent))) : "textarea" === o14 && s9.value && (t9 = true, e21(escapeHtml$1(s9.value)))), t9 || (8 & a8 ? e21(escapeHtml$1(i12)) : 16 & a8 && renderVNodeChildren(e21, i12, n5, r6)), e21(`</${o14}>`);
        }
      }(e20, t7, n4, r5) : 6 & s8 ? e20(renderComponentVNode(t7, n4, r5)) : 64 & s8 ? function(e21, t8, n5, r6) {
        const o14 = t8.props && t8.props.to, s9 = t8.props && t8.props.disabled;
        if (!o14)
          return [];
        if (!isString(o14))
          return [];
        !function(e22, t9, n6, r7, o15) {
          e22("<!--teleport start-->");
          const s10 = o15.appContext.provides[it2], i12 = s10.__teleportBuffers || (s10.__teleportBuffers = {}), a8 = i12[n6] || (i12[n6] = []), l4 = a8.length;
          let c5;
          if (r7)
            t9(e22), c5 = "<!--teleport anchor-->";
          else {
            const { getBuffer: e23, push: n7 } = createBuffer();
            t9(n7), n7("<!--teleport anchor-->"), c5 = e23();
          }
          a8.splice(l4, 0, c5), e22("<!--teleport end-->");
        }(e21, (e22) => {
          renderVNodeChildren(e22, t8.children, n5, r6);
        }, o14, s9 || "" === s9, n5);
      }(e20, t7, n4, r5) : 128 & s8 && renderVNode(e20, t7.ssContent, n4, r5);
  }
  var a7;
}
function renderVNodeChildren(e20, t7, n4, r5) {
  for (let o13 = 0; o13 < t7.length; o13++)
    renderVNode(e20, rn(t7[o13]), n4, r5);
}
async function unrollBuffer$1(e20) {
  if (e20.hasAsync) {
    let t7 = "";
    for (let n4 = 0; n4 < e20.length; n4++) {
      let r5 = e20[n4];
      isPromise(r5) && (r5 = await r5), isString(r5) ? t7 += r5 : t7 += await unrollBuffer$1(r5);
    }
    return t7;
  }
  return unrollBufferSync$1(e20);
}
function unrollBufferSync$1(e20) {
  let t7 = "";
  for (let n4 = 0; n4 < e20.length; n4++) {
    let r5 = e20[n4];
    isString(r5) ? t7 += r5 : t7 += unrollBufferSync$1(r5);
  }
  return t7;
}
async function renderToString(e20, t7 = {}) {
  if (on(e20))
    return renderToString(createApp({ render: () => e20 }), t7);
  const n4 = createVNode(e20._component, e20._props);
  n4.appContext = e20._context, e20.provide(it2, t7);
  const r5 = await renderComponentVNode(n4), o13 = await unrollBuffer$1(r5);
  if (await async function(e21) {
    if (e21.__teleportBuffers) {
      e21.teleports = e21.teleports || {};
      for (const t8 in e21.__teleportBuffers)
        e21.teleports[t8] = await unrollBuffer$1(await Promise.all([e21.__teleportBuffers[t8]]));
    }
  }(t7), t7.__watcherHandles)
    for (const e21 of t7.__watcherHandles)
      e21();
  return o13;
}
function hashCode(e20) {
  let t7 = 9;
  for (let n4 = 0; n4 < e20.length; )
    t7 = Math.imul(t7 ^ e20.charCodeAt(n4++), 9 ** 9);
  return (65536 + (t7 ^ t7 >>> 9)).toString(16).substring(1, 8).toLowerCase();
}
function resolveTitleTemplate(e20, t7) {
  return null == e20 ? t7 || null : "function" == typeof e20 ? e20(t7) : e20;
}
function unpackToArray(e20, t7) {
  const n4 = [], r5 = t7.resolveKeyData || ((e21) => e21.key), o13 = t7.resolveValueData || ((e21) => e21.value);
  for (const [s8, i11] of Object.entries(e20))
    n4.push(...(Array.isArray(i11) ? i11 : [i11]).map((e21) => {
      const n5 = { key: s8, value: e21 }, i12 = o13(n5);
      return "object" == typeof i12 ? unpackToArray(i12, t7) : Array.isArray(i12) ? i12 : { ["function" == typeof t7.key ? t7.key(n5) : t7.key]: r5(n5), ["function" == typeof t7.value ? t7.value(n5) : t7.value]: i12 };
    }).flat());
  return n4;
}
function unpackToString(e20, t7) {
  return Object.entries(e20).map(([e21, n4]) => {
    if ("object" == typeof n4 && (n4 = unpackToString(n4, t7)), t7.resolve) {
      const r5 = t7.resolve({ key: e21, value: n4 });
      if (void 0 !== r5)
        return r5;
    }
    return "number" == typeof n4 && (n4 = n4.toString()), "string" == typeof n4 && t7.wrapValue && (n4 = n4.replace(new RegExp(t7.wrapValue, "g"), `\\${t7.wrapValue}`), n4 = `${t7.wrapValue}${n4}${t7.wrapValue}`), `${e21}${t7.keyValueSeparator || ""}${n4}`;
  }).join(t7.entrySeparator || "");
}
function resolveMetaKeyType(e20) {
  const t7 = fixKeyCase(e20).split(":")[0];
  return fn.includes(t7) ? "property" : dn[e20]?.metaKey || "name";
}
function fixKeyCase(e20) {
  const t7 = e20.replace(/([A-Z])/g, "-$1").toLowerCase(), n4 = t7.split("-")[0];
  return fn.includes(n4) || "twitter" === n4 ? e20.replace(/([A-Z])/g, ":$1").toLowerCase() : t7;
}
function changeKeyCasingDeep(e20) {
  if (Array.isArray(e20))
    return e20.map((e21) => changeKeyCasingDeep(e21));
  if ("object" != typeof e20 || Array.isArray(e20))
    return e20;
  const t7 = {};
  for (const [n4, r5] of Object.entries(e20))
    t7[fixKeyCase(n4)] = changeKeyCasingDeep(r5);
  return t7;
}
function resolvePackedMetaObjectValue(e20, t7) {
  const n4 = dn[t7];
  return "refresh" === t7 ? `${e20.seconds};url=${e20.url}` : unpackToString(changeKeyCasingDeep(e20), { keyValueSeparator: "=", entrySeparator: ", ", resolve: ({ value: e21, key: t8 }) => null === e21 ? "" : "boolean" == typeof e21 ? `${t8}` : void 0, ...n4?.unpack });
}
function sanitize(e20) {
  const t7 = {};
  return Object.entries(e20).forEach(([e21, n4]) => {
    "false" !== String(n4) && e21 && (t7[e21] = n4);
  }), t7;
}
function handleObjectEntry(e20, t7) {
  const n4 = sanitize(t7), r5 = fixKeyCase(e20), o13 = resolveMetaKeyType(r5);
  if (hn.includes(r5)) {
    const t8 = {};
    return Object.entries(n4).forEach(([n5, r6]) => {
      t8[`${e20}${"url" === n5 ? "" : `${n5.charAt(0).toUpperCase()}${n5.slice(1)}`}`] = r6;
    }), unpackMeta(t8).sort((e21, t9) => (e21[o13]?.length || 0) - (t9[o13]?.length || 0));
  }
  return [{ [o13]: r5, ...n4 }];
}
function unpackMeta(e20) {
  const t7 = [], n4 = {};
  Object.entries(e20).forEach(([e21, r6]) => {
    if (Array.isArray(r6))
      r6.forEach((n5) => {
        t7.push(..."string" == typeof n5 ? unpackMeta({ [e21]: n5 }) : handleObjectEntry(e21, n5));
      });
    else if ("object" == typeof r6 && r6) {
      if (hn.includes(fixKeyCase(e21)))
        return void t7.push(...handleObjectEntry(e21, r6));
      n4[e21] = sanitize(r6);
    } else
      n4[e21] = r6;
  });
  const r5 = unpackToArray(n4, { key: ({ key: e21 }) => resolveMetaKeyType(e21), value: ({ key: e21 }) => "charset" === e21 ? "charset" : "content", resolveKeyData: ({ key: e21 }) => function(e22) {
    return dn[e22]?.keyValue || fixKeyCase(e22);
  }(e21), resolveValueData: ({ value: e21, key: t8 }) => null === e21 ? "_null" : "object" == typeof e21 ? resolvePackedMetaObjectValue(e21, t8) : "number" == typeof e21 ? e21.toString() : e21 });
  return [...t7, ...r5].map((e21) => ("_null" === e21.content && (e21.content = null), e21));
}
function normaliseStyleClassProps(e20, t7) {
  const n4 = "class" === e20 ? " " : ";";
  return "object" != typeof t7 || Array.isArray(t7) || (t7 = Object.entries(t7).filter(([, e21]) => e21).map(([t8, n5]) => "style" === e20 ? `${t8}:${n5}` : t8)), String(Array.isArray(t7) ? t7.join(n4) : t7)?.split(n4).filter((e21) => e21.trim()).filter(Boolean).join(n4);
}
async function normaliseProps(e20, t7) {
  for (const n4 of Object.keys(e20))
    if (["class", "style"].includes(n4))
      e20[n4] = normaliseStyleClassProps(n4, e20[n4]);
    else if (e20[n4] instanceof Promise && (e20[n4] = await e20[n4]), !t7 && !pn.includes(n4)) {
      const t8 = String(e20[n4]), r5 = n4.startsWith("data-");
      "true" === t8 || "" === t8 ? e20[n4] = !r5 || "true" : e20[n4] || (r5 && "false" === t8 ? e20[n4] = "false" : delete e20[n4]);
    }
  return e20;
}
async function normaliseEntryTags(e20) {
  const t7 = [];
  return Object.entries(e20.resolvedInput).filter(([e21, t8]) => void 0 !== t8 && cn.includes(e21)).forEach(([n4, r5]) => {
    const o13 = function(e21) {
      return Array.isArray(e21) ? e21 : [e21];
    }(r5);
    t7.push(...o13.map((t8) => async function(e21, t9, n5) {
      const r6 = { tag: e21, props: await normaliseProps("object" != typeof t9 || "function" == typeof t9 || t9 instanceof Promise ? { [["script", "noscript", "style"].includes(e21) ? "innerHTML" : "textContent"]: t9 } : { ...t9 }, ["templateParams", "titleTemplate"].includes(e21)) };
      return pn.forEach((e22) => {
        const t10 = void 0 !== r6.props[e22] ? r6.props[e22] : n5[e22];
        void 0 !== t10 && (["innerHTML", "textContent", "children"].includes(e22) && !an.includes(r6.tag) || (r6["children" === e22 ? "innerHTML" : e22] = t10), delete r6.props[e22]);
      }), r6.props.body && (r6.tagPosition = "bodyClose", delete r6.props.body), "script" === r6.tag && "object" == typeof r6.innerHTML && (r6.innerHTML = JSON.stringify(r6.innerHTML), r6.props.type = r6.props.type || "application/json"), Array.isArray(r6.props.content) ? r6.props.content.map((e22) => ({ ...r6, props: { ...r6.props, content: e22 } })) : r6;
    }(n4, t8, e20)).flat());
  }), (await Promise.all(t7)).flat().filter(Boolean).map((t8, n4) => (t8._e = e20._i, e20.mode && (t8._m = e20.mode), t8._p = (e20._i << gn) + n4, t8));
}
function tagWeight(e20) {
  let t7 = 100;
  const n4 = e20.tagPriority;
  return "number" == typeof n4 ? n4 : ("meta" === e20.tag ? ("content-security-policy" === e20.props["http-equiv"] && (t7 = -30), e20.props.charset && (t7 = -20), "viewport" === e20.props.name && (t7 = -15)) : "link" === e20.tag && "preconnect" === e20.props.rel ? t7 = 20 : e20.tag in mn && (t7 = mn[e20.tag]), "string" == typeof n4 && n4 in yn ? t7 + yn[n4] : t7);
}
function processTemplateParams(e20, t7, n4) {
  if ("string" != typeof e20 || !e20.includes("%"))
    return e20;
  let r5 = e20;
  try {
    r5 = decodeURI(e20);
  } catch {
  }
  return (r5.match(/%(\w+\.+\w+)|%(\w+)/g) || []).sort().reverse().forEach((n5) => {
    const r6 = function(e21) {
      let n6;
      return n6 = ["s", "pageTitle"].includes(e21) ? t7.pageTitle : e21.includes(".") ? e21.split(".").reduce((e22, t8) => e22 && e22[t8] || void 0, t7) : t7[e21], void 0 !== n6 && (n6 || "").replace(/"/g, '\\"');
    }(n5.slice(1));
    "string" == typeof r6 && (e20 = e20.replace(new RegExp(`\\${n5}(\\W|$)`, "g"), (e21, t8) => `${r6}${t8}`).trim());
  }), e20.includes(bn) && (e20.endsWith(bn) && (e20 = e20.slice(0, -10).trim()), e20.startsWith(bn) && (e20 = e20.slice(10).trim()), e20 = processTemplateParams(e20 = e20.replace(new RegExp(`\\${bn}\\s*\\${bn}`, "g"), bn), { separator: n4 }, n4)), e20;
}
function encodeAttribute(e20) {
  return String(e20).replace(/"/g, "&quot;");
}
function propsToString(e20) {
  const t7 = [];
  for (const [n4, r5] of Object.entries(e20))
    false !== r5 && null !== r5 && t7.push(true === r5 ? n4 : `${n4}="${encodeAttribute(r5)}"`);
  return `${t7.length > 0 ? " " : ""}${t7.join(" ")}`;
}
function tagToString(e20) {
  const t7 = propsToString(e20.props), n4 = `<${e20.tag}${t7}>`;
  if (!an.includes(e20.tag))
    return sn.includes(e20.tag) ? n4 : `${n4}</${e20.tag}>`;
  let r5 = String(e20.innerHTML || "");
  return e20.textContent && (r5 = String(e20.textContent).replace(/[&<>"'/]/g, (e21) => {
    switch (e21) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#x27;";
      case "/":
        return "&#x2F;";
      default:
        return e21;
    }
  })), sn.includes(e20.tag) ? n4 : `${n4}${r5}</${e20.tag}>`;
}
async function renderSSRHead(e20, t7) {
  const n4 = { shouldRender: true };
  if (await e20.hooks.callHook("ssr:beforeRender", n4), !n4.shouldRender)
    return { headTags: "", bodyTags: "", bodyTagsOpen: "", htmlAttrs: "", bodyAttrs: "" };
  const r5 = { tags: await e20.resolveTags() };
  await e20.hooks.callHook("ssr:render", r5);
  const o13 = function(e21, t8) {
    const n5 = { htmlAttrs: {}, bodyAttrs: {}, tags: { head: [], bodyClose: [], bodyOpen: [] } };
    for (const t9 of e21)
      "htmlAttrs" !== t9.tag && "bodyAttrs" !== t9.tag ? n5.tags[t9.tagPosition || "head"].push(tagToString(t9)) : n5[t9.tag] = { ...n5[t9.tag], ...t9.props };
    const r6 = t8?.omitLineBreaks ? "" : "\n";
    return { headTags: n5.tags.head.join(r6), bodyTags: n5.tags.bodyClose.join(r6), bodyTagsOpen: n5.tags.bodyOpen.join(r6), htmlAttrs: propsToString(n5.htmlAttrs), bodyAttrs: propsToString(n5.bodyAttrs) };
  }(r5.tags, t7), s8 = { tags: r5.tags, html: o13 };
  return await e20.hooks.callHook("ssr:rendered", s8), s8.html;
}
function createServerHead$1(e20 = {}) {
  return On = function(e21 = {}) {
    const t7 = createHooks();
    t7.addHooks(e21.hooks || {}), e21.document = e21.document || void 0;
    const n4 = !e21.document, updated = () => {
      i11.dirty = true, t7.callHook("entries:updated", i11);
    };
    let r5 = 0, o13 = [];
    const s8 = [], i11 = { plugins: s8, dirty: false, resolvedOptions: e21, hooks: t7, headEntries: () => o13, use(e22) {
      const r6 = "function" == typeof e22 ? e22(i11) : e22;
      r6.key && s8.some((e23) => e23.key === r6.key) || (s8.push(r6), filterMode(r6.mode, n4) && t7.addHooks(r6.hooks || {}));
    }, push(e22, s9) {
      delete s9?.head;
      const a7 = { _i: r5++, input: e22, ...s9 };
      return filterMode(a7.mode, n4) && (o13.push(a7), updated()), { dispose() {
        o13 = o13.filter((e23) => e23._i !== a7._i), t7.callHook("entries:updated", i11), updated();
      }, patch(e23) {
        o13 = o13.map((t8) => (t8._i === a7._i && (t8.input = a7.input = e23), t8)), updated();
      } };
    }, async resolveTags() {
      const e22 = { tags: [], entries: [...o13] };
      await t7.callHook("entries:resolve", e22);
      for (const n5 of e22.entries) {
        const r6 = n5.resolvedInput || n5.input;
        if (n5.resolvedInput = await (n5.transform ? n5.transform(r6) : r6), n5.resolvedInput)
          for (const r7 of await normaliseEntryTags(n5)) {
            const o14 = { tag: r7, entry: n5, resolvedOptions: i11.resolvedOptions };
            await t7.callHook("tag:normalise", o14), e22.tags.push(o14.tag);
          }
      }
      return await t7.callHook("tags:beforeResolve", e22), await t7.callHook("tags:resolve", e22), await t7.callHook("tags:afterResolve", e22), e22.tags;
    }, ssr: n4 };
    return [Cn, Sn, EventHandlersPlugin, Rn, Tn, TemplateParamsPlugin, $n, En, ...e21?.plugins || []].forEach((e22) => i11.use(e22)), i11.hooks.callHook("init", i11), i11;
  }(e20);
}
function filterMode(e20, t7) {
  return !e20 || "server" === e20 && t7 || "client" === e20 && !t7;
}
function getActiveHead() {
  return On;
}
function resolveUnrefHeadInput2(e20, t7 = "") {
  if (e20 instanceof Promise)
    return e20;
  const n4 = "function" == typeof (r5 = e20) ? r5() : unref(r5);
  var r5;
  return e20 && n4 ? Array.isArray(n4) ? n4.map((e21) => resolveUnrefHeadInput2(e21, t7)) : "object" == typeof n4 ? Object.fromEntries(Object.entries(n4).map(([e21, t8]) => "titleTemplate" === e21 || e21.startsWith("on") ? [e21, unref(t8)] : [e21, resolveUnrefHeadInput2(t8, e21)])) : n4 : n4;
}
function createServerHead(e20 = {}) {
  const t7 = createServerHead$1(e20);
  return t7.use(Hn), t7.install = function(e21) {
    return { install(t8) {
      jn && (t8.config.globalProperties.$unhead = e21, t8.config.globalProperties.$head = e21, t8.provide(In, e21));
    } }.install;
  }(t7), t7;
}
function lazyCachedFunction(e20) {
  let t7 = null;
  return () => (null === t7 && (t7 = e20().catch((e21) => {
    throw t7 = null, e21;
  })), t7);
}
function normalizeChunks(e20) {
  return e20.filter(Boolean).map((e21) => e21.trim());
}
function joinTags(e20) {
  return e20.join("");
}
function joinAttrs(e20) {
  return 0 === e20.length ? "" : " " + e20.join(" ");
}
function renderPayloadJsonScript(e20) {
  const t7 = e20.data ? stringify(e20.data, e20.ssrContext._payloadReducers) : "", n4 = { type: "application/json", id: e20.id, innerHTML: t7, "data-ssr": !e20.ssrContext.noSSR };
  return e20.src && (n4["data-src"] = e20.src), [n4, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(e20.ssrContext.config)}` }];
}
function splitPayload(e20) {
  const { data: t7, prerenderedAt: n4, ...r5 } = e20.payload;
  return { initial: { ...r5, prerenderedAt: n4 }, payload: { data: t7, prerenderedAt: n4 } };
}
var y, DevalueError, v, _2, b, C2, S2, A2, w, R2, T2, x, $2, E, NOOP, NO, isOn, isModelListener, O, remove, P2, hasOwn, j3, isMap, isSet, isFunction, isString, isSymbol, isObject, isPromise, H, toTypeString, toRawType, isPlainObject, isIntegerKey, I2, cacheStringFunction, L, N, M, V, F2, B, hasChanged, invokeArrayFns, def, looseToNumber, toNumber, D, getGlobalThis, U2, z, W, q3, K, J, G, Z2, X2, Y2, Q, ee2, te2, toDisplayString, replacer, stringifySymbol, ne2, re3, EffectScope, ReactiveEffect, oe2, se2, ie2, ae2, createDep, le2, ce2, ue2, pe2, de2, fe2, BaseReactiveHandler, MutableReactiveHandler, ReadonlyReactiveHandler, he2, ge2, me2, toShallow, getProto, ye2, ve2, _e2, be2, ke2, Ce2, Se2, Ae2, we2, Re2, Te2, toReactive, toReadonly, ComputedRefImpl, RefImpl, xe3, ObjectRefImpl, GetterRefImpl, $e2, Ee2, Oe2, Pe2, je2, He2, Ie2, Le2, Ne2, getId, comparator, Me2, Ve2, getFunctionalFallthrough, filterModelListeners, Fe2, Be2, De2, Ue3, createHook, ze2, We2, qe2, Ke2, Je2, Ge2, Ze, Xe2, Ye2, isAsyncWrapper, getPublicInstance, Qe2, hasSetupBinding, et2, tt2, nt2, rt2, ot2, st2, createInternalObject, isInternalObject, isInternalKey, normalizeSlotValue, normalizeSlot2, normalizeObjectSlots, normalizeVNodeSlots, initSlots, updateSlots, queuePostRenderEffect, it2, useSSRContext, at2, isKeepAlive, lt2, ct2, ut2, pt2, recursiveGetSubtree, dt2, ft, ht2, gt2, mt2, yt, vt, _t, normalizeKey, normalizeRef, createVNode, bt, kt, Ct, getCurrentInstance, St, At, setCurrentInstance, unsetCurrentInstance, wt, Rt, Tt, computed, xt, $t, Et, Ot, Pt, jt, Ht, It, Transition, Lt, callHook, hasExplicitCallback, Nt, Mt, Vt, Ft, Bt, Dt, Ut, zt, Wt, qt, Kt, Jt, Gt, getNow, isNativeOn, Zt, Xt, createApp, Yt, Qt, en, tn, nn, rn, on, sn, an, ln, cn, un, pn, p, k2, dn, fn, hn, gn, mn, yn, vn, _n, bn, kn, Cn, Sn, An, EventHandlersPlugin, wn, Rn, Tn, xn, TemplateParamsPlugin, $n, En, On, Pn, jn, Hn, In, Ln, Nn, Mn, Vn, Fn, getClientManifest, Bn, Dn, Un, zn, Wn, qn, Kn, Jn, Gn, Zn;
var init_renderer = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/renderer.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    globalThis._importMeta_ = globalThis._importMeta_ || { url: "file:///_entry.js", env: {} };
    y = { "<": "\\u003C", "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\u2028": "\\u2028", "\u2029": "\\u2029" };
    DevalueError = class extends Error {
      constructor(e20, t7) {
        super(e20), this.name = "DevalueError", this.path = t7.join("");
      }
    };
    v = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    _2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
    b = /[<\b\f\n\r\t\0\u2028\u2029]/g;
    C2 = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
    S2 = -1;
    A2 = -2;
    w = -3;
    R2 = -4;
    T2 = -5;
    x = -6;
    $2 = {};
    E = [];
    NOOP = () => {
    };
    NO = () => false;
    isOn = (e20) => 111 === e20.charCodeAt(0) && 110 === e20.charCodeAt(1) && (e20.charCodeAt(2) > 122 || e20.charCodeAt(2) < 97);
    isModelListener = (e20) => e20.startsWith("onUpdate:");
    O = Object.assign;
    remove = (e20, t7) => {
      const n4 = e20.indexOf(t7);
      n4 > -1 && e20.splice(n4, 1);
    };
    P2 = Object.prototype.hasOwnProperty;
    hasOwn = (e20, t7) => P2.call(e20, t7);
    j3 = Array.isArray;
    isMap = (e20) => "[object Map]" === toTypeString(e20);
    isSet = (e20) => "[object Set]" === toTypeString(e20);
    isFunction = (e20) => "function" == typeof e20;
    isString = (e20) => "string" == typeof e20;
    isSymbol = (e20) => "symbol" == typeof e20;
    isObject = (e20) => null !== e20 && "object" == typeof e20;
    isPromise = (e20) => (isObject(e20) || isFunction(e20)) && isFunction(e20.then) && isFunction(e20.catch);
    H = Object.prototype.toString;
    toTypeString = (e20) => H.call(e20);
    toRawType = (e20) => toTypeString(e20).slice(8, -1);
    isPlainObject = (e20) => "[object Object]" === toTypeString(e20);
    isIntegerKey = (e20) => isString(e20) && "NaN" !== e20 && "-" !== e20[0] && "" + parseInt(e20, 10) === e20;
    I2 = makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
    cacheStringFunction = (e20) => {
      const t7 = /* @__PURE__ */ Object.create(null);
      return (n4) => t7[n4] || (t7[n4] = e20(n4));
    };
    L = /-(\w)/g;
    N = cacheStringFunction((e20) => e20.replace(L, (e21, t7) => t7 ? t7.toUpperCase() : ""));
    M = /\B([A-Z])/g;
    V = cacheStringFunction((e20) => e20.replace(M, "-$1").toLowerCase());
    F2 = cacheStringFunction((e20) => e20.charAt(0).toUpperCase() + e20.slice(1));
    B = cacheStringFunction((e20) => e20 ? `on${F2(e20)}` : "");
    hasChanged = (e20, t7) => !Object.is(e20, t7);
    invokeArrayFns = (e20, ...t7) => {
      for (let n4 = 0; n4 < e20.length; n4++)
        e20[n4](...t7);
    };
    def = (e20, t7, n4, r5 = false) => {
      Object.defineProperty(e20, t7, { configurable: true, enumerable: false, writable: r5, value: n4 });
    };
    looseToNumber = (e20) => {
      const t7 = parseFloat(e20);
      return isNaN(t7) ? e20 : t7;
    };
    toNumber = (e20) => {
      const t7 = isString(e20) ? Number(e20) : NaN;
      return isNaN(t7) ? e20 : t7;
    };
    getGlobalThis = () => D || (D = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {});
    U2 = /;(?![^(]*\))/g;
    z = /:([^]+)/;
    W = /\/\*[^]*?\*\//g;
    q3 = makeMap("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view");
    K = makeMap("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr");
    J = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
    G = makeMap(J);
    Z2 = makeMap(J + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
    X2 = /[>/="'\u0009\u000a\u000c\u0020]/;
    Y2 = {};
    Q = { acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv" };
    ee2 = /["'&<>]/;
    te2 = /^-?>|<!--|-->|--!>|<!-$/g;
    toDisplayString = (e20) => isString(e20) ? e20 : null == e20 ? "" : j3(e20) || isObject(e20) && (e20.toString === H || !isFunction(e20.toString)) ? JSON.stringify(e20, replacer, 2) : String(e20);
    replacer = (e20, t7) => t7 && t7.__v_isRef ? replacer(e20, t7.value) : isMap(t7) ? { [`Map(${t7.size})`]: [...t7.entries()].reduce((e21, [t8, n4], r5) => (e21[stringifySymbol(t8, r5) + " =>"] = n4, e21), {}) } : isSet(t7) ? { [`Set(${t7.size})`]: [...t7.values()].map((e21) => stringifySymbol(e21)) } : isSymbol(t7) ? stringifySymbol(t7) : !isObject(t7) || j3(t7) || isPlainObject(t7) ? t7 : String(t7);
    stringifySymbol = (e20, t7 = "") => {
      var n4;
      return isSymbol(e20) ? `Symbol(${null != (n4 = e20.description) ? n4 : t7})` : e20;
    };
    EffectScope = class {
      constructor(e20 = false) {
        this.detached = e20, this._active = true, this.effects = [], this.cleanups = [], this.parent = ne2, !e20 && ne2 && (this.index = (ne2.scopes || (ne2.scopes = [])).push(this) - 1);
      }
      get active() {
        return this._active;
      }
      run(e20) {
        if (this._active) {
          const t7 = ne2;
          try {
            return ne2 = this, e20();
          } finally {
            ne2 = t7;
          }
        }
      }
      on() {
        ne2 = this;
      }
      off() {
        ne2 = this.parent;
      }
      stop(e20) {
        if (this._active) {
          let t7, n4;
          for (t7 = 0, n4 = this.effects.length; t7 < n4; t7++)
            this.effects[t7].stop();
          for (t7 = 0, n4 = this.cleanups.length; t7 < n4; t7++)
            this.cleanups[t7]();
          if (this.scopes)
            for (t7 = 0, n4 = this.scopes.length; t7 < n4; t7++)
              this.scopes[t7].stop(true);
          if (!this.detached && this.parent && !e20) {
            const e21 = this.parent.scopes.pop();
            e21 && e21 !== this && (this.parent.scopes[this.index] = e21, e21.index = this.index);
          }
          this.parent = void 0, this._active = false;
        }
      }
    };
    ReactiveEffect = class {
      constructor(e20, t7, n4, r5) {
        this.fn = e20, this.trigger = t7, this.scheduler = n4, this.active = true, this.deps = [], this._dirtyLevel = 5, this._trackId = 0, this._runnings = 0, this._shouldSchedule = false, this._depsLength = 0, function(e21, t8 = ne2) {
          t8 && t8.active && t8.effects.push(e21);
        }(this, r5);
      }
      get dirty() {
        if (2 === this._dirtyLevel)
          return false;
        if (3 === this._dirtyLevel || 4 === this._dirtyLevel) {
          this._dirtyLevel = 1, pauseTracking();
          for (let e20 = 0; e20 < this._depsLength; e20++) {
            const t7 = this.deps[e20];
            if (t7.computed) {
              if (2 === t7.computed.effect._dirtyLevel)
                return resetTracking(), true;
              if (triggerComputed(t7.computed), this._dirtyLevel >= 5)
                break;
            }
          }
          1 === this._dirtyLevel && (this._dirtyLevel = 0), resetTracking();
        }
        return this._dirtyLevel >= 5;
      }
      set dirty(e20) {
        this._dirtyLevel = e20 ? 5 : 0;
      }
      run() {
        if (this._dirtyLevel = 0, !this.active)
          return this.fn();
        let e20 = oe2, t7 = re3;
        try {
          return oe2 = true, re3 = this, this._runnings++, preCleanupEffect(this), this.fn();
        } finally {
          postCleanupEffect(this), this._runnings--, re3 = t7, oe2 = e20;
        }
      }
      stop() {
        this.active && (preCleanupEffect(this), postCleanupEffect(this), this.onStop && this.onStop(), this.active = false);
      }
    };
    oe2 = true;
    se2 = 0;
    ie2 = [];
    ae2 = [];
    createDep = (e20, t7) => {
      const n4 = /* @__PURE__ */ new Map();
      return n4.cleanup = e20, n4.computed = t7, n4;
    };
    le2 = /* @__PURE__ */ new WeakMap();
    ce2 = Symbol("");
    ue2 = Symbol("");
    pe2 = makeMap("__proto__,__v_isRef,__isVue");
    de2 = new Set(Object.getOwnPropertyNames(Symbol).filter((e20) => "arguments" !== e20 && "caller" !== e20).map((e20) => Symbol[e20]).filter(isSymbol));
    fe2 = createArrayInstrumentations();
    BaseReactiveHandler = class {
      constructor(e20 = false, t7 = false) {
        this._isReadonly = e20, this._isShallow = t7;
      }
      get(e20, t7, n4) {
        const r5 = this._isReadonly, o13 = this._isShallow;
        if ("__v_isReactive" === t7)
          return !r5;
        if ("__v_isReadonly" === t7)
          return r5;
        if ("__v_isShallow" === t7)
          return o13;
        if ("__v_raw" === t7)
          return n4 === (r5 ? o13 ? Te2 : Re2 : o13 ? we2 : Ae2).get(e20) || Object.getPrototypeOf(e20) === Object.getPrototypeOf(n4) ? e20 : void 0;
        const s8 = j3(e20);
        if (!r5) {
          if (s8 && hasOwn(fe2, t7))
            return Reflect.get(fe2, t7, n4);
          if ("hasOwnProperty" === t7)
            return hasOwnProperty;
        }
        const i11 = Reflect.get(e20, t7, n4);
        return (isSymbol(t7) ? de2.has(t7) : pe2(t7)) ? i11 : (r5 || track(e20, 0, t7), o13 ? i11 : isRef(i11) ? s8 && isIntegerKey(t7) ? i11 : i11.value : isObject(i11) ? r5 ? readonly(i11) : reactive(i11) : i11);
      }
    };
    MutableReactiveHandler = class extends BaseReactiveHandler {
      constructor(e20 = false) {
        super(false, e20);
      }
      set(e20, t7, n4, r5) {
        let o13 = e20[t7];
        if (!this._isShallow) {
          const t8 = isReadonly(o13);
          if (isShallow(n4) || isReadonly(n4) || (o13 = toRaw(o13), n4 = toRaw(n4)), !j3(e20) && isRef(o13) && !isRef(n4))
            return !t8 && (o13.value = n4, true);
        }
        const s8 = j3(e20) && isIntegerKey(t7) ? Number(t7) < e20.length : hasOwn(e20, t7), i11 = Reflect.set(e20, t7, n4, r5);
        return e20 === toRaw(r5) && (s8 ? hasChanged(n4, o13) && trigger(e20, "set", t7, n4) : trigger(e20, "add", t7, n4)), i11;
      }
      deleteProperty(e20, t7) {
        const n4 = hasOwn(e20, t7);
        e20[t7];
        const r5 = Reflect.deleteProperty(e20, t7);
        return r5 && n4 && trigger(e20, "delete", t7, void 0), r5;
      }
      has(e20, t7) {
        const n4 = Reflect.has(e20, t7);
        return isSymbol(t7) && de2.has(t7) || track(e20, 0, t7), n4;
      }
      ownKeys(e20) {
        return track(e20, 0, j3(e20) ? "length" : ce2), Reflect.ownKeys(e20);
      }
    };
    ReadonlyReactiveHandler = class extends BaseReactiveHandler {
      constructor(e20 = false) {
        super(true, e20);
      }
      set(e20, t7) {
        return true;
      }
      deleteProperty(e20, t7) {
        return true;
      }
    };
    he2 = new MutableReactiveHandler();
    ge2 = new ReadonlyReactiveHandler();
    me2 = new MutableReactiveHandler(true);
    toShallow = (e20) => e20;
    getProto = (e20) => Reflect.getPrototypeOf(e20);
    [ye2, ve2, _e2, be2] = createInstrumentations();
    ke2 = { get: createInstrumentationGetter(false, false) };
    Ce2 = { get: createInstrumentationGetter(false, true) };
    Se2 = { get: createInstrumentationGetter(true, false) };
    Ae2 = /* @__PURE__ */ new WeakMap();
    we2 = /* @__PURE__ */ new WeakMap();
    Re2 = /* @__PURE__ */ new WeakMap();
    Te2 = /* @__PURE__ */ new WeakMap();
    toReactive = (e20) => isObject(e20) ? reactive(e20) : e20;
    toReadonly = (e20) => isObject(e20) ? readonly(e20) : e20;
    ComputedRefImpl = class {
      constructor(e20, t7, n4, r5) {
        this.getter = e20, this._setter = t7, this.dep = void 0, this.__v_isRef = true, this.__v_isReadonly = false, this.effect = new ReactiveEffect(() => e20(this._value), () => triggerRefValue(this, 3 === this.effect._dirtyLevel ? 3 : 4)), this.effect.computed = this, this.effect.active = this._cacheable = !r5, this.__v_isReadonly = n4;
      }
      get value() {
        const e20 = toRaw(this), t7 = e20.effect._dirtyLevel;
        return e20._cacheable && !e20.effect.dirty || !hasChanged(e20._value, e20._value = e20.effect.run()) || 3 !== t7 && triggerRefValue(e20, 5), trackRefValue(e20), e20.effect._dirtyLevel >= 2 && triggerRefValue(e20, 3), e20._value;
      }
      set value(e20) {
        this._setter(e20);
      }
      get _dirty() {
        return this.effect.dirty;
      }
      set _dirty(e20) {
        this.effect.dirty = e20;
      }
    };
    RefImpl = class {
      constructor(e20, t7) {
        this.__v_isShallow = t7, this.dep = void 0, this.__v_isRef = true, this._rawValue = t7 ? e20 : toRaw(e20), this._value = t7 ? e20 : toReactive(e20);
      }
      get value() {
        return trackRefValue(this), this._value;
      }
      set value(e20) {
        const t7 = this.__v_isShallow || isShallow(e20) || isReadonly(e20);
        e20 = t7 ? e20 : toRaw(e20), hasChanged(e20, this._rawValue) && (this._rawValue, this._rawValue = e20, this._value = t7 ? e20 : toReactive(e20), triggerRefValue(this, 5));
      }
    };
    xe3 = { get: (e20, t7, n4) => unref(Reflect.get(e20, t7, n4)), set: (e20, t7, n4, r5) => {
      const o13 = e20[t7];
      return isRef(o13) && !isRef(n4) ? (o13.value = n4, true) : Reflect.set(e20, t7, n4, r5);
    } };
    ObjectRefImpl = class {
      constructor(e20, t7, n4) {
        this._object = e20, this._key = t7, this._defaultValue = n4, this.__v_isRef = true;
      }
      get value() {
        const e20 = this._object[this._key];
        return void 0 === e20 ? this._defaultValue : e20;
      }
      set value(e20) {
        this._object[this._key] = e20;
      }
      get dep() {
        return function(e20, t7) {
          const n4 = le2.get(e20);
          return n4 && n4.get(t7);
        }(toRaw(this._object), this._key);
      }
    };
    GetterRefImpl = class {
      constructor(e20) {
        this._getter = e20, this.__v_isRef = true, this.__v_isReadonly = true;
      }
      get value() {
        return this._getter();
      }
    };
    $e2 = false;
    Ee2 = false;
    Oe2 = [];
    Pe2 = 0;
    je2 = [];
    He2 = null;
    Ie2 = 0;
    Le2 = Promise.resolve();
    Ne2 = null;
    getId = (e20) => null == e20.id ? 1 / 0 : e20.id;
    comparator = (e20, t7) => {
      const n4 = getId(e20) - getId(t7);
      if (0 === n4) {
        if (e20.pre && !t7.pre)
          return -1;
        if (t7.pre && !e20.pre)
          return 1;
      }
      return n4;
    };
    Me2 = null;
    Ve2 = null;
    getFunctionalFallthrough = (e20) => {
      let t7;
      for (const n4 in e20)
        ("class" === n4 || "style" === n4 || isOn(n4)) && ((t7 || (t7 = {}))[n4] = e20[n4]);
      return t7;
    };
    filterModelListeners = (e20, t7) => {
      const n4 = {};
      for (const r5 in e20)
        isModelListener(r5) && r5.slice(9) in t7 || (n4[r5] = e20[r5]);
      return n4;
    };
    Fe2 = "components";
    Be2 = Symbol.for("v-ndc");
    De2 = 0;
    Ue3 = { name: "Suspense", __isSuspense: true, process(e20, t7, n4, r5, o13, s8, i11, a7, l4, c5) {
      if (null == e20)
        !function(e21, t8, n5, r6, o14, s9, i12, a8, l5) {
          const { p: c6, o: { createElement: u5 } } = l5, d5 = u5("div"), f3 = e21.suspense = createSuspenseBoundary(e21, o14, r6, t8, d5, n5, s9, i12, a8, l5);
          c6(null, f3.pendingBranch = e21.ssContent, d5, null, r6, f3, s9, i12), f3.deps > 0 ? (triggerEvent(e21, "onPending"), triggerEvent(e21, "onFallback"), c6(null, e21.ssFallback, t8, n5, r6, null, s9, i12), setActiveBranch(f3, e21.ssFallback)) : f3.resolve(false, true);
        }(t7, n4, r5, o13, s8, i11, a7, l4, c5);
      else {
        if (s8 && s8.deps > 0 && !e20.suspense.isInFallback)
          return t7.suspense = e20.suspense, t7.suspense.vnode = t7, void (t7.el = e20.el);
        !function(e21, t8, n5, r6, o14, s9, i12, a8, { p: l5, um: c6, o: { createElement: u5 } }) {
          const d5 = t8.suspense = e21.suspense;
          d5.vnode = t8, t8.el = e21.el;
          const f3 = t8.ssContent, g3 = t8.ssFallback, { activeBranch: m10, pendingBranch: y5, isInFallback: v4, isHydrating: _5 } = d5;
          if (y5)
            d5.pendingBranch = f3, isSameVNodeType(f3, y5) ? (l5(y5, f3, d5.hiddenContainer, null, o14, d5, s9, i12, a8), d5.deps <= 0 ? d5.resolve() : v4 && (_5 || (l5(m10, g3, n5, r6, o14, null, s9, i12, a8), setActiveBranch(d5, g3)))) : (d5.pendingId = De2++, _5 ? (d5.isHydrating = false, d5.activeBranch = y5) : c6(y5, o14, d5), d5.deps = 0, d5.effects.length = 0, d5.hiddenContainer = u5("div"), v4 ? (l5(null, f3, d5.hiddenContainer, null, o14, d5, s9, i12, a8), d5.deps <= 0 ? d5.resolve() : (l5(m10, g3, n5, r6, o14, null, s9, i12, a8), setActiveBranch(d5, g3))) : m10 && isSameVNodeType(f3, m10) ? (l5(m10, f3, n5, r6, o14, d5, s9, i12, a8), d5.resolve(true)) : (l5(null, f3, d5.hiddenContainer, null, o14, d5, s9, i12, a8), d5.deps <= 0 && d5.resolve()));
          else if (m10 && isSameVNodeType(f3, m10))
            l5(m10, f3, n5, r6, o14, d5, s9, i12, a8), setActiveBranch(d5, f3);
          else if (triggerEvent(t8, "onPending"), d5.pendingBranch = f3, 512 & f3.shapeFlag ? d5.pendingId = f3.component.suspenseId : d5.pendingId = De2++, l5(null, f3, d5.hiddenContainer, null, o14, d5, s9, i12, a8), d5.deps <= 0)
            d5.resolve();
          else {
            const { timeout: e22, pendingId: t9 } = d5;
            e22 > 0 ? setTimeout(() => {
              d5.pendingId === t9 && d5.fallback(g3);
            }, e22) : 0 === e22 && d5.fallback(g3);
          }
        }(e20, t7, n4, r5, o13, i11, a7, l4, c5);
      }
    }, hydrate: function(e20, t7, n4, r5, o13, s8, i11, a7, l4) {
      const c5 = t7.suspense = createSuspenseBoundary(t7, r5, n4, e20.parentNode, document.createElement("div"), null, o13, s8, i11, a7, true), u5 = l4(e20, c5.pendingBranch = t7.ssContent, n4, c5, s8, i11);
      0 === c5.deps && c5.resolve(false, true);
      return u5;
    }, normalize: function(e20) {
      const { shapeFlag: t7, children: n4 } = e20, r5 = 32 & t7;
      e20.ssContent = normalizeSuspenseSlot(r5 ? n4.default : n4), e20.ssFallback = r5 ? normalizeSuspenseSlot(n4.fallback) : createVNode(gt2);
    } };
    createHook = (e20) => (t7, n4 = Ct) => {
      Rt && "sp" !== e20 || injectHook(e20, (...e21) => t7(...e21), n4);
    };
    ze2 = createHook("bm");
    We2 = createHook("m");
    qe2 = createHook("bu");
    Ke2 = createHook("u");
    Je2 = createHook("bum");
    Ge2 = createHook("um");
    Ze = createHook("sp");
    Xe2 = createHook("rtg");
    Ye2 = createHook("rtc");
    isAsyncWrapper = (e20) => !!e20.type.__asyncLoader;
    getPublicInstance = (e20) => e20 ? isStatefulComponent(e20) ? getComponentPublicInstance(e20) : getPublicInstance(e20.parent) : null;
    Qe2 = O(/* @__PURE__ */ Object.create(null), { $: (e20) => e20, $el: (e20) => e20.vnode.el, $data: (e20) => e20.data, $props: (e20) => e20.props, $attrs: (e20) => e20.attrs, $slots: (e20) => e20.slots, $refs: (e20) => e20.refs, $parent: (e20) => getPublicInstance(e20.parent), $root: (e20) => getPublicInstance(e20.root), $emit: (e20) => e20.emit, $options: (e20) => __VUE_OPTIONS_API__ ? resolveMergedOptions(e20) : e20.type, $forceUpdate: (e20) => e20.f || (e20.f = () => {
      e20.effect.dirty = true, queueJob(e20.update);
    }), $nextTick: (e20) => e20.n || (e20.n = nextTick.bind(e20.proxy)), $watch: (e20) => __VUE_OPTIONS_API__ ? instanceWatch.bind(e20) : NOOP });
    hasSetupBinding = (e20, t7) => e20 !== $2 && !e20.__isScriptSetup && hasOwn(e20, t7);
    et2 = { get({ _: e20 }, t7) {
      if ("__v_skip" === t7)
        return true;
      const { ctx: n4, setupState: r5, data: o13, props: s8, accessCache: i11, type: a7, appContext: l4 } = e20;
      let c5;
      if ("$" !== t7[0]) {
        const a8 = i11[t7];
        if (void 0 !== a8)
          switch (a8) {
            case 1:
              return r5[t7];
            case 2:
              return o13[t7];
            case 4:
              return n4[t7];
            case 3:
              return s8[t7];
          }
        else {
          if (hasSetupBinding(r5, t7))
            return i11[t7] = 1, r5[t7];
          if (o13 !== $2 && hasOwn(o13, t7))
            return i11[t7] = 2, o13[t7];
          if ((c5 = e20.propsOptions[0]) && hasOwn(c5, t7))
            return i11[t7] = 3, s8[t7];
          if (n4 !== $2 && hasOwn(n4, t7))
            return i11[t7] = 4, n4[t7];
          __VUE_OPTIONS_API__ && !tt2 || (i11[t7] = 0);
        }
      }
      const u5 = Qe2[t7];
      let d5, f3;
      return u5 ? ("$attrs" === t7 && track(e20.attrs, 0, ""), u5(e20)) : (d5 = a7.__cssModules) && (d5 = d5[t7]) ? d5 : n4 !== $2 && hasOwn(n4, t7) ? (i11[t7] = 4, n4[t7]) : (f3 = l4.config.globalProperties, hasOwn(f3, t7) ? f3[t7] : void 0);
    }, set({ _: e20 }, t7, n4) {
      const { data: r5, setupState: o13, ctx: s8 } = e20;
      return hasSetupBinding(o13, t7) ? (o13[t7] = n4, true) : r5 !== $2 && hasOwn(r5, t7) ? (r5[t7] = n4, true) : !hasOwn(e20.props, t7) && (("$" !== t7[0] || !(t7.slice(1) in e20)) && (s8[t7] = n4, true));
    }, has({ _: { data: e20, setupState: t7, accessCache: n4, ctx: r5, appContext: o13, propsOptions: s8 } }, i11) {
      let a7;
      return !!n4[i11] || e20 !== $2 && hasOwn(e20, i11) || hasSetupBinding(t7, i11) || (a7 = s8[0]) && hasOwn(a7, i11) || hasOwn(r5, i11) || hasOwn(Qe2, i11) || hasOwn(o13.config.globalProperties, i11);
    }, defineProperty(e20, t7, n4) {
      return null != n4.get ? e20._.accessCache[t7] = 0 : hasOwn(n4, "value") && this.set(e20, t7, n4.value, null), Reflect.defineProperty(e20, t7, n4);
    } };
    tt2 = true;
    nt2 = { data: mergeDataFn, props: mergeEmitsOrPropsOptions, emits: mergeEmitsOrPropsOptions, methods: mergeObjectOptions, computed: mergeObjectOptions, beforeCreate: mergeAsArray, created: mergeAsArray, beforeMount: mergeAsArray, mounted: mergeAsArray, beforeUpdate: mergeAsArray, updated: mergeAsArray, beforeDestroy: mergeAsArray, beforeUnmount: mergeAsArray, destroyed: mergeAsArray, unmounted: mergeAsArray, activated: mergeAsArray, deactivated: mergeAsArray, errorCaptured: mergeAsArray, serverPrefetch: mergeAsArray, components: mergeObjectOptions, directives: mergeObjectOptions, watch: function(e20, t7) {
      if (!e20)
        return t7;
      if (!t7)
        return e20;
      const n4 = O(/* @__PURE__ */ Object.create(null), e20);
      for (const r5 in t7)
        n4[r5] = mergeAsArray(e20[r5], t7[r5]);
      return n4;
    }, provide: mergeDataFn, inject: function(e20, t7) {
      return mergeObjectOptions(normalizeInject(e20), normalizeInject(t7));
    } };
    rt2 = 0;
    ot2 = null;
    st2 = {};
    createInternalObject = () => Object.create(st2);
    isInternalObject = (e20) => Object.getPrototypeOf(e20) === st2;
    isInternalKey = (e20) => "_" === e20[0] || "$stable" === e20;
    normalizeSlotValue = (e20) => j3(e20) ? e20.map(normalizeVNode$1) : [normalizeVNode$1(e20)];
    normalizeSlot2 = (e20, t7, n4) => {
      if (t7._n)
        return t7;
      const r5 = withCtx((...e21) => normalizeSlotValue(t7(...e21)), n4);
      return r5._c = false, r5;
    };
    normalizeObjectSlots = (e20, t7, n4) => {
      const r5 = e20._ctx;
      for (const n5 in e20) {
        if (isInternalKey(n5))
          continue;
        const o13 = e20[n5];
        if (isFunction(o13))
          t7[n5] = normalizeSlot2(0, o13, r5);
        else if (null != o13) {
          const e21 = normalizeSlotValue(o13);
          t7[n5] = () => e21;
        }
      }
    };
    normalizeVNodeSlots = (e20, t7) => {
      const n4 = normalizeSlotValue(t7);
      e20.slots.default = () => n4;
    };
    initSlots = (e20, t7) => {
      const n4 = e20.slots = createInternalObject();
      if (32 & e20.vnode.shapeFlag) {
        const e21 = t7._;
        e21 ? (O(n4, t7), def(n4, "_", e21, true)) : normalizeObjectSlots(t7, n4);
      } else
        t7 && normalizeVNodeSlots(e20, t7);
    };
    updateSlots = (e20, t7, n4) => {
      const { vnode: r5, slots: o13 } = e20;
      let s8 = true, i11 = $2;
      if (32 & r5.shapeFlag) {
        const e21 = t7._;
        e21 ? n4 && 1 === e21 ? s8 = false : (O(o13, t7), n4 || 1 !== e21 || delete o13._) : (s8 = !t7.$stable, normalizeObjectSlots(t7, o13)), i11 = t7;
      } else
        t7 && (normalizeVNodeSlots(e20, t7), i11 = { default: 1 });
      if (s8)
        for (const e21 in o13)
          isInternalKey(e21) || null != i11[e21] || delete o13[e21];
    };
    queuePostRenderEffect = function(e20, t7) {
      t7 && t7.pendingBranch ? j3(e20) ? t7.effects.push(...e20) : t7.effects.push(e20) : queuePostFlushCb(e20);
    };
    it2 = Symbol.for("v-scx");
    useSSRContext = () => inject(it2);
    at2 = {};
    isKeepAlive = (e20) => e20.type.__isKeepAlive;
    lt2 = Symbol("_leaveCb");
    ct2 = Symbol("_enterCb");
    ut2 = [Function, Array];
    pt2 = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: ut2, onEnter: ut2, onAfterEnter: ut2, onEnterCancelled: ut2, onBeforeLeave: ut2, onLeave: ut2, onAfterLeave: ut2, onLeaveCancelled: ut2, onBeforeAppear: ut2, onAppear: ut2, onAfterAppear: ut2, onAppearCancelled: ut2 };
    recursiveGetSubtree = (e20) => {
      const t7 = e20.subTree;
      return t7.component ? recursiveGetSubtree(t7.component) : t7;
    };
    dt2 = { name: "BaseTransition", props: pt2, setup(e20, { slots: t7 }) {
      const n4 = getCurrentInstance(), r5 = function() {
        const e21 = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
        return We2(() => {
          e21.isMounted = true;
        }), Je2(() => {
          e21.isUnmounting = true;
        }), e21;
      }();
      return () => {
        const o13 = t7.default && getTransitionRawChildren(t7.default(), true);
        if (!o13 || !o13.length)
          return;
        let s8 = o13[0];
        if (o13.length > 1) {
          for (const e21 of o13)
            if (e21.type !== gt2) {
              s8 = e21;
              break;
            }
        }
        const i11 = toRaw(e20), { mode: a7 } = i11;
        if (r5.isLeaving)
          return emptyPlaceholder(s8);
        const l4 = getKeepAliveChild(s8);
        if (!l4)
          return emptyPlaceholder(s8);
        let c5 = resolveTransitionHooks(l4, i11, r5, n4, (e21) => c5 = e21);
        setTransitionHooks(l4, c5);
        const u5 = n4.subTree, d5 = u5 && getKeepAliveChild(u5);
        if (d5 && d5.type !== gt2 && !isSameVNodeType(l4, d5) && recursiveGetSubtree(n4).type !== gt2) {
          const e21 = resolveTransitionHooks(d5, i11, r5, n4);
          if (setTransitionHooks(d5, e21), "out-in" === a7 && l4.type !== gt2)
            return r5.isLeaving = true, e21.afterLeave = () => {
              r5.isLeaving = false, false !== n4.update.active && (n4.effect.dirty = true, n4.update());
            }, emptyPlaceholder(s8);
          "in-out" === a7 && l4.type !== gt2 && (e21.delayLeave = (e22, t8, n5) => {
            getLeavingNodesForType(r5, d5)[String(d5.key)] = d5, e22[lt2] = () => {
              t8(), e22[lt2] = void 0, delete c5.delayedLeave;
            }, c5.delayedLeave = n5;
          });
        }
        return s8;
      };
    } };
    ft = Symbol.for("v-fgt");
    ht2 = Symbol.for("v-txt");
    gt2 = Symbol.for("v-cmt");
    mt2 = Symbol.for("v-stc");
    yt = [];
    vt = null;
    _t = 1;
    normalizeKey = ({ key: e20 }) => null != e20 ? e20 : null;
    normalizeRef = ({ ref: e20, ref_key: t7, ref_for: n4 }) => ("number" == typeof e20 && (e20 = "" + e20), null != e20 ? isString(e20) || isRef(e20) || isFunction(e20) ? { i: Me2, r: e20, k: t7, f: !!n4 } : e20 : null);
    createVNode = function(e20, t7 = null, n4 = null, r5 = 0, o13 = null, s8 = false) {
      e20 && e20 !== Be2 || (e20 = gt2);
      if (isVNode(e20)) {
        const r6 = cloneVNode(e20, t7, true);
        return n4 && normalizeChildren(r6, n4), _t > 0 && !s8 && vt && (6 & r6.shapeFlag ? vt[vt.indexOf(e20)] = r6 : vt.push(r6)), r6.patchFlag = -2, r6;
      }
      i11 = e20, isFunction(i11) && "__vccOpts" in i11 && (e20 = e20.__vccOpts);
      var i11;
      if (t7) {
        t7 = function(e22) {
          return e22 ? isProxy(e22) || isInternalObject(e22) ? O({}, e22) : e22 : null;
        }(t7);
        let { class: e21, style: n5 } = t7;
        e21 && !isString(e21) && (t7.class = normalizeClass(e21)), isObject(n5) && (isProxy(n5) && !j3(n5) && (n5 = O({}, n5)), t7.style = normalizeStyle(n5));
      }
      const a7 = isString(e20) ? 1 : ((e21) => e21.__isSuspense)(e20) ? 128 : ((e21) => e21.__isTeleport)(e20) ? 64 : isObject(e20) ? 4 : isFunction(e20) ? 2 : 0;
      return function(e21, t8 = null, n5 = null, r6 = 0, o14 = null, s9 = e21 === ft ? 0 : 1, i12 = false, a8 = false) {
        const l4 = { __v_isVNode: true, __v_skip: true, type: e21, props: t8, key: t8 && normalizeKey(t8), ref: t8 && normalizeRef(t8), scopeId: Ve2, slotScopeIds: null, children: n5, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: s9, patchFlag: r6, dynamicProps: o14, dynamicChildren: null, appContext: null, ctx: Me2 };
        return a8 ? (normalizeChildren(l4, n5), 128 & s9 && e21.normalize(l4)) : n5 && (l4.shapeFlag |= isString(n5) ? 8 : 16), _t > 0 && !i12 && vt && (l4.patchFlag > 0 || 6 & s9) && 32 !== l4.patchFlag && vt.push(l4), l4;
      }(e20, t7, n4, r5, o13, a7, s8, true);
    };
    bt = createAppContext();
    kt = 0;
    Ct = null;
    getCurrentInstance = () => Ct || Me2;
    {
      const e20 = getGlobalThis(), registerGlobalSetter = (t7, n4) => {
        let r5;
        return (r5 = e20[t7]) || (r5 = e20[t7] = []), r5.push(n4), (e21) => {
          r5.length > 1 ? r5.forEach((t8) => t8(e21)) : r5[0](e21);
        };
      };
      St = registerGlobalSetter("__VUE_INSTANCE_SETTERS__", (e21) => Ct = e21), At = registerGlobalSetter("__VUE_SSR_SETTERS__", (e21) => Rt = e21);
    }
    setCurrentInstance = (e20) => {
      const t7 = Ct;
      return St(e20), e20.scope.on(), () => {
        e20.scope.off(), St(t7);
      };
    };
    unsetCurrentInstance = () => {
      Ct && Ct.scope.off(), St(null);
    };
    Rt = false;
    Tt = { get: (e20, t7) => (track(e20, 0, ""), e20[t7]) };
    computed = (e20, t7) => {
      const n4 = function(e21, t8, n5 = false) {
        let r5, o13;
        const s8 = isFunction(e21);
        return s8 ? (r5 = e21, o13 = NOOP) : (r5 = e21.get, o13 = e21.set), new ComputedRefImpl(r5, o13, s8 || !o13, n5);
      }(e20, 0, Rt);
      return n4;
    };
    xt = "3.4.30";
    $t = { createComponentInstance: createComponentInstance$1, setupComponent: setupComponent$1, renderComponentRoot: renderComponentRoot$1, setCurrentRenderingInstance: setCurrentRenderingInstance$1, isVNode, normalizeVNode: normalizeVNode$1, getComponentPublicInstance };
    Et = "undefined" != typeof document ? document : null;
    Ot = Et && Et.createElement("template");
    Pt = { insert: (e20, t7, n4) => {
      t7.insertBefore(e20, n4 || null);
    }, remove: (e20) => {
      const t7 = e20.parentNode;
      t7 && t7.removeChild(e20);
    }, createElement: (e20, t7, n4, r5) => {
      const o13 = "svg" === t7 ? Et.createElementNS("http://www.w3.org/2000/svg", e20) : "mathml" === t7 ? Et.createElementNS("http://www.w3.org/1998/Math/MathML", e20) : n4 ? Et.createElement(e20, { is: n4 }) : Et.createElement(e20);
      return "select" === e20 && r5 && null != r5.multiple && o13.setAttribute("multiple", r5.multiple), o13;
    }, createText: (e20) => Et.createTextNode(e20), createComment: (e20) => Et.createComment(e20), setText: (e20, t7) => {
      e20.nodeValue = t7;
    }, setElementText: (e20, t7) => {
      e20.textContent = t7;
    }, parentNode: (e20) => e20.parentNode, nextSibling: (e20) => e20.nextSibling, querySelector: (e20) => Et.querySelector(e20), setScopeId(e20, t7) {
      e20.setAttribute(t7, "");
    }, insertStaticContent(e20, t7, n4, r5, o13, s8) {
      const i11 = n4 ? n4.previousSibling : t7.lastChild;
      if (o13 && (o13 === s8 || o13.nextSibling))
        for (; t7.insertBefore(o13.cloneNode(true), n4), o13 !== s8 && (o13 = o13.nextSibling); )
          ;
      else {
        Ot.innerHTML = "svg" === r5 ? `<svg>${e20}</svg>` : "mathml" === r5 ? `<math>${e20}</math>` : e20;
        const o14 = Ot.content;
        if ("svg" === r5 || "mathml" === r5) {
          const e21 = o14.firstChild;
          for (; e21.firstChild; )
            o14.appendChild(e21.firstChild);
          o14.removeChild(e21);
        }
        t7.insertBefore(o14, n4);
      }
      return [i11 ? i11.nextSibling : t7.firstChild, n4 ? n4.previousSibling : t7.lastChild];
    } };
    jt = "transition";
    Ht = "animation";
    It = Symbol("_vtc");
    Transition = (e20, { slots: t7 }) => h(dt2, function(e21) {
      const t8 = {};
      for (const n5 in e21)
        n5 in Lt || (t8[n5] = e21[n5]);
      if (false === e21.css)
        return t8;
      const { name: n4 = "v", type: r5, duration: o13, enterFromClass: s8 = `${n4}-enter-from`, enterActiveClass: i11 = `${n4}-enter-active`, enterToClass: a7 = `${n4}-enter-to`, appearFromClass: l4 = s8, appearActiveClass: c5 = i11, appearToClass: u5 = a7, leaveFromClass: d5 = `${n4}-leave-from`, leaveActiveClass: f3 = `${n4}-leave-active`, leaveToClass: g3 = `${n4}-leave-to` } = e21, m10 = function(e22) {
        if (null == e22)
          return null;
        if (isObject(e22))
          return [NumberOf(e22.enter), NumberOf(e22.leave)];
        {
          const t9 = NumberOf(e22);
          return [t9, t9];
        }
      }(o13), y5 = m10 && m10[0], v4 = m10 && m10[1], { onBeforeEnter: _5, onEnter: b5, onEnterCancelled: C5, onLeave: S5, onLeaveCancelled: A5, onBeforeAppear: w6 = _5, onAppear: R5 = b5, onAppearCancelled: T5 = C5 } = t8, finishEnter = (e22, t9, n5) => {
        removeTransitionClass(e22, t9 ? u5 : a7), removeTransitionClass(e22, t9 ? c5 : i11), n5 && n5();
      }, finishLeave = (e22, t9) => {
        e22._isLeaving = false, removeTransitionClass(e22, d5), removeTransitionClass(e22, g3), removeTransitionClass(e22, f3), t9 && t9();
      }, makeEnterHook = (e22) => (t9, n5) => {
        const o14 = e22 ? R5 : b5, resolve2 = () => finishEnter(t9, e22, n5);
        callHook(o14, [t9, resolve2]), nextFrame(() => {
          removeTransitionClass(t9, e22 ? l4 : s8), addTransitionClass(t9, e22 ? u5 : a7), hasExplicitCallback(o14) || whenTransitionEnds(t9, r5, y5, resolve2);
        });
      };
      return O(t8, { onBeforeEnter(e22) {
        callHook(_5, [e22]), addTransitionClass(e22, s8), addTransitionClass(e22, i11);
      }, onBeforeAppear(e22) {
        callHook(w6, [e22]), addTransitionClass(e22, l4), addTransitionClass(e22, c5);
      }, onEnter: makeEnterHook(false), onAppear: makeEnterHook(true), onLeave(e22, t9) {
        e22._isLeaving = true;
        const resolve2 = () => finishLeave(e22, t9);
        addTransitionClass(e22, d5), addTransitionClass(e22, f3), document.body.offsetHeight, nextFrame(() => {
          e22._isLeaving && (removeTransitionClass(e22, d5), addTransitionClass(e22, g3), hasExplicitCallback(S5) || whenTransitionEnds(e22, r5, v4, resolve2));
        }), callHook(S5, [e22, resolve2]);
      }, onEnterCancelled(e22) {
        finishEnter(e22, false), callHook(C5, [e22]);
      }, onAppearCancelled(e22) {
        finishEnter(e22, true), callHook(T5, [e22]);
      }, onLeaveCancelled(e22) {
        finishLeave(e22), callHook(A5, [e22]);
      } });
    }(e20), t7);
    Transition.displayName = "Transition";
    Lt = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String };
    Transition.props = O({}, pt2, Lt);
    callHook = (e20, t7 = []) => {
      j3(e20) ? e20.forEach((e21) => e21(...t7)) : e20 && e20(...t7);
    };
    hasExplicitCallback = (e20) => !!e20 && (j3(e20) ? e20.some((e21) => e21.length > 1) : e20.length > 1);
    Nt = 0;
    Mt = Symbol("_vod");
    Vt = Symbol("_vsh");
    Ft = Symbol("");
    Bt = /(^|;)\s*display\s*:/;
    Dt = /\s*!important$/;
    Ut = ["Webkit", "Moz", "ms"];
    zt = {};
    Wt = "http://www.w3.org/1999/xlink";
    qt = Symbol("_vei");
    Kt = /(?:Once|Passive|Capture)$/;
    Jt = 0;
    Gt = Promise.resolve();
    getNow = () => Jt || (Gt.then(() => Jt = 0), Jt = Date.now());
    isNativeOn = (e20) => 111 === e20.charCodeAt(0) && 110 === e20.charCodeAt(1) && e20.charCodeAt(2) > 96 && e20.charCodeAt(2) < 123;
    Zt = O({ patchProp: (e20, t7, n4, r5, o13, s8, i11, a7, l4) => {
      const c5 = "svg" === o13;
      "class" === t7 ? function(e21, t8, n5) {
        const r6 = e21[It];
        r6 && (t8 = (t8 ? [t8, ...r6] : [...r6]).join(" ")), null == t8 ? e21.removeAttribute("class") : n5 ? e21.setAttribute("class", t8) : e21.className = t8;
      }(e20, r5, c5) : "style" === t7 ? function(e21, t8, n5) {
        const r6 = e21.style, o14 = isString(n5);
        let s9 = false;
        if (n5 && !o14) {
          if (t8)
            if (isString(t8))
              for (const e22 of t8.split(";")) {
                const t9 = e22.slice(0, e22.indexOf(":")).trim();
                null == n5[t9] && setStyle(r6, t9, "");
              }
            else
              for (const e22 in t8)
                null == n5[e22] && setStyle(r6, e22, "");
          for (const e22 in n5)
            "display" === e22 && (s9 = true), setStyle(r6, e22, n5[e22]);
        } else if (o14) {
          if (t8 !== n5) {
            const e22 = r6[Ft];
            e22 && (n5 += ";" + e22), r6.cssText = n5, s9 = Bt.test(n5);
          }
        } else
          t8 && e21.removeAttribute("style");
        Mt in e21 && (e21[Mt] = s9 ? r6.display : "", e21[Vt] && (r6.display = "none"));
      }(e20, n4, r5) : isOn(t7) ? isModelListener(t7) || patchEvent(e20, t7, 0, r5, i11) : ("." === t7[0] ? (t7 = t7.slice(1), 1) : "^" === t7[0] ? (t7 = t7.slice(1), 0) : function(e21, t8, n5, r6) {
        if (r6)
          return "innerHTML" === t8 || "textContent" === t8 || !!(t8 in e21 && isNativeOn(t8) && isFunction(n5));
        if ("spellcheck" === t8 || "draggable" === t8 || "translate" === t8)
          return false;
        if ("form" === t8)
          return false;
        if ("list" === t8 && "INPUT" === e21.tagName)
          return false;
        if ("type" === t8 && "TEXTAREA" === e21.tagName)
          return false;
        if ("width" === t8 || "height" === t8) {
          const t9 = e21.tagName;
          if ("IMG" === t9 || "VIDEO" === t9 || "CANVAS" === t9 || "SOURCE" === t9)
            return false;
        }
        if (isNativeOn(t8) && isString(n5))
          return false;
        return t8 in e21;
      }(e20, t7, r5, c5)) ? (!function(e21, t8, n5, r6, o14, s9, i12) {
        if ("innerHTML" === t8 || "textContent" === t8)
          return r6 && i12(r6, o14, s9), void (e21[t8] = null == n5 ? "" : n5);
        const a8 = e21.tagName;
        if ("value" === t8 && "PROGRESS" !== a8 && !a8.includes("-")) {
          const r7 = "OPTION" === a8 ? e21.getAttribute("value") || "" : e21.value, o15 = null == n5 ? "" : String(n5);
          return r7 === o15 && "_value" in e21 || (e21.value = o15), null == n5 && e21.removeAttribute(t8), void (e21._value = n5);
        }
        let l5 = false;
        if ("" === n5 || null == n5) {
          const r7 = typeof e21[t8];
          "boolean" === r7 ? n5 = includeBooleanAttr(n5) : null == n5 && "string" === r7 ? (n5 = "", l5 = true) : "number" === r7 && (n5 = 0, l5 = true);
        }
        try {
          e21[t8] = n5;
        } catch (e22) {
        }
        l5 && e21.removeAttribute(t8);
      }(e20, t7, r5, s8, i11, a7, l4), e20.tagName.includes("-") || "value" !== t7 && "checked" !== t7 && "selected" !== t7 || patchAttr(e20, t7, r5, c5, 0, "value" !== t7)) : ("true-value" === t7 ? e20._trueValue = r5 : "false-value" === t7 && (e20._falseValue = r5), patchAttr(e20, t7, r5, c5));
    } }, Pt);
    createApp = (...e20) => {
      const t7 = (Xt || (Xt = createRenderer(Zt))).createApp(...e20), { mount: n4 } = t7;
      return t7.mount = (e21) => {
        const r5 = function(e22) {
          if (isString(e22)) {
            return document.querySelector(e22);
          }
          return e22;
        }(e21);
        if (!r5)
          return;
        const o13 = t7._component;
        isFunction(o13) || o13.render || o13.template || (o13.template = r5.innerHTML), r5.innerHTML = "";
        const s8 = n4(r5, false, function(e22) {
          if (e22 instanceof SVGElement)
            return "svg";
          if ("function" == typeof MathMLElement && e22 instanceof MathMLElement)
            return "mathml";
        }(r5));
        return r5 instanceof Element && (r5.removeAttribute("v-cloak"), r5.setAttribute("data-v-app", "")), s8;
      }, t7;
    };
    Yt = makeMap(",key,ref,innerHTML,textContent,ref_key,ref_for");
    {
      const e20 = getGlobalThis(), registerGlobalSetter = (t7, n4) => {
        let r5;
        return (r5 = e20[t7]) || (r5 = e20[t7] = []), r5.push(n4), (e21) => {
          r5.length > 1 ? r5.forEach((t8) => t8(e21)) : r5[0](e21);
        };
      };
      registerGlobalSetter("__VUE_INSTANCE_SETTERS__", (e21) => e21), registerGlobalSetter("__VUE_SSR_SETTERS__", (e21) => e21);
    }
    ({ createComponentInstance: Qt, setCurrentRenderingInstance: en, setupComponent: tn, renderComponentRoot: nn, normalizeVNode: rn } = $t);
    ({ isVNode: on } = $t);
    sn = ["meta", "link", "base"];
    an = ["title", "titleTemplate", "script", "style", "noscript"];
    ln = ["base", "meta", "link", "style", "script", "noscript"];
    cn = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"];
    un = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"];
    pn = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"];
    p = (e20) => ({ keyValue: e20, metaKey: "property" });
    k2 = (e20) => ({ keyValue: e20 });
    dn = { appleItunesApp: { unpack: { entrySeparator: ", ", resolve: ({ key: e20, value: t7 }) => `${fixKeyCase(e20)}=${t7}` } }, articleExpirationTime: p("article:expiration_time"), articleModifiedTime: p("article:modified_time"), articlePublishedTime: p("article:published_time"), bookReleaseDate: p("book:release_date"), charset: { metaKey: "charset" }, contentSecurityPolicy: { unpack: { entrySeparator: "; ", resolve: ({ key: e20, value: t7 }) => `${fixKeyCase(e20)} ${t7}` }, metaKey: "http-equiv" }, contentType: { metaKey: "http-equiv" }, defaultStyle: { metaKey: "http-equiv" }, fbAppId: p("fb:app_id"), msapplicationConfig: k2("msapplication-Config"), msapplicationTileColor: k2("msapplication-TileColor"), msapplicationTileImage: k2("msapplication-TileImage"), ogAudioSecureUrl: p("og:audio:secure_url"), ogAudioUrl: p("og:audio"), ogImageSecureUrl: p("og:image:secure_url"), ogImageUrl: p("og:image"), ogSiteName: p("og:site_name"), ogVideoSecureUrl: p("og:video:secure_url"), ogVideoUrl: p("og:video"), profileFirstName: p("profile:first_name"), profileLastName: p("profile:last_name"), profileUsername: p("profile:username"), refresh: { metaKey: "http-equiv", unpack: { entrySeparator: ";", resolve({ key: e20, value: t7 }) {
      if ("seconds" === e20)
        return `${t7}`;
    } } }, robots: { unpack: { entrySeparator: ", ", resolve: ({ key: e20, value: t7 }) => "boolean" == typeof t7 ? `${fixKeyCase(e20)}` : `${fixKeyCase(e20)}:${t7}` } }, xUaCompatible: { metaKey: "http-equiv" } };
    fn = ["og", "book", "article", "profile"];
    hn = ["og:image", "og:video", "og:audio", "twitter:image"];
    gn = 10;
    mn = { base: -10, title: 10 };
    yn = { critical: -80, high: -10, low: 20 };
    vn = [{ prefix: "before:", offset: -1 }, { prefix: "after:", offset: 1 }];
    _n = ["onload", "onerror", "onabort", "onprogress", "onloadstart"];
    bn = "%separator";
    kn = ["templateParams", "htmlAttrs", "bodyAttrs"];
    Cn = { hooks: { "tag:normalise": function({ tag: e20 }) {
      ["hid", "vmid", "key"].forEach((t8) => {
        e20.props[t8] && (e20.key = e20.props[t8], delete e20.props[t8]);
      });
      const t7 = function(e21, t8) {
        const { props: n5, tag: r5 } = e21;
        if (un.includes(r5))
          return r5;
        if ("link" === r5 && "canonical" === n5.rel)
          return "canonical";
        if (n5.charset)
          return "charset";
        const o13 = ["id"];
        "meta" === r5 && o13.push("name", "property", "http-equiv");
        for (const e22 of o13)
          if (void 0 !== n5[e22])
            return `${r5}:${e22}:${String(n5[e22])}`;
        return false;
      }(e20), n4 = t7 || !!e20.key && `${e20.tag}:${e20.key}`;
      n4 && (e20._d = n4);
    }, "tags:resolve": function(e20) {
      const t7 = {};
      e20.tags.forEach((e21) => {
        const n5 = (e21.key ? `${e21.tag}:${e21.key}` : e21._d) || e21._p, r5 = t7[n5];
        if (r5) {
          let o14 = e21?.tagDuplicateStrategy;
          if (!o14 && kn.includes(e21.tag) && (o14 = "merge"), "merge" === o14) {
            const o15 = r5.props;
            return ["class", "style"].forEach((t8) => {
              o15[t8] && (e21.props[t8] ? ("style" !== t8 || o15[t8].endsWith(";") || (o15[t8] += ";"), e21.props[t8] = `${o15[t8]} ${e21.props[t8]}`) : e21.props[t8] = o15[t8]);
            }), void (t7[n5].props = { ...o15, ...e21.props });
          }
          if (e21._e === r5._e)
            return r5._duped = r5._duped || [], e21._d = `${r5._d}:${r5._duped.length + 1}`, void r5._duped.push(e21);
          if (tagWeight(e21) > tagWeight(r5))
            return;
        }
        const o13 = Object.keys(e21.props).length + (e21.innerHTML ? 1 : 0) + (e21.textContent ? 1 : 0);
        ln.includes(e21.tag) && 0 === o13 ? delete t7[n5] : t7[n5] = e21;
      });
      const n4 = [];
      Object.values(t7).forEach((e21) => {
        const t8 = e21._duped;
        delete e21._duped, n4.push(e21), t8 && n4.push(...t8);
      }), e20.tags = n4, e20.tags = e20.tags.filter((e21) => !("meta" === e21.tag && (e21.props.name || e21.props.property) && !e21.props.content));
    } } };
    Sn = { mode: "server", hooks: { "tags:resolve": function(e20) {
      const t7 = {};
      e20.tags.filter((e21) => ["titleTemplate", "templateParams", "title"].includes(e21.tag) && "server" === e21._m).forEach((e21) => {
        t7[e21.tag] = e21.tag.startsWith("title") ? e21.textContent : e21.props;
      }), Object.keys(t7).length && e20.tags.push({ tag: "script", innerHTML: JSON.stringify(t7), props: { id: "unhead:payload", type: "application/json" } });
    } } };
    An = ["script", "link", "bodyAttrs"];
    EventHandlersPlugin = (e20) => ({ hooks: { "tags:resolve": function(t7) {
      for (const n4 of t7.tags.filter((e21) => An.includes(e21.tag)))
        Object.entries(n4.props).forEach(([t8, r5]) => {
          t8.startsWith("on") && "function" == typeof r5 && (e20.ssr && _n.includes(t8) ? n4.props[t8] = `this.dataset.${t8}fired = true` : delete n4.props[t8], n4._eventHandlers = n4._eventHandlers || {}, n4._eventHandlers[t8] = r5);
        }), e20.ssr && n4._eventHandlers && (n4.props.src || n4.props.href) && (n4.key = n4.key || hashCode(n4.props.src || n4.props.href));
    }, "dom:renderTag": function({ $el: e21, tag: t7 }) {
      for (const n4 of Object.keys(e21?.dataset || {}).filter((e22) => _n.some((t8) => `${t8}fired` === e22))) {
        const r5 = n4.replace("fired", "");
        t7._eventHandlers?.[r5]?.call(e21, new Event(r5.replace("on", "")));
      }
    } } });
    wn = ["link", "style", "script", "noscript"];
    Rn = { hooks: { "tag:normalise": ({ tag: e20 }) => {
      e20.key && wn.includes(e20.tag) && (e20.props["data-hid"] = e20._h = hashCode(e20.key));
    } } };
    Tn = { hooks: { "tags:resolve": (e20) => {
      const tagPositionForKey = (t7) => e20.tags.find((e21) => e21._d === t7)?._p;
      for (const { prefix: t7, offset: n4 } of vn)
        for (const r5 of e20.tags.filter((e21) => "string" == typeof e21.tagPriority && e21.tagPriority.startsWith(t7))) {
          const e21 = tagPositionForKey(r5.tagPriority.replace(t7, ""));
          void 0 !== e21 && (r5._p = e21 + n4);
        }
      e20.tags.sort((e21, t7) => e21._p - t7._p).sort((e21, t7) => tagWeight(e21) - tagWeight(t7));
    } } };
    xn = { meta: "content", link: "href", htmlAttrs: "lang" };
    TemplateParamsPlugin = (e20) => ({ hooks: { "tags:resolve": (t7) => {
      const { tags: n4 } = t7, r5 = n4.find((e21) => "title" === e21.tag)?.textContent, o13 = n4.findIndex((e21) => "templateParams" === e21.tag), s8 = -1 !== o13 ? n4[o13].props : {}, i11 = s8.separator || "|";
      delete s8.separator, s8.pageTitle = processTemplateParams(s8.pageTitle || r5 || "", s8, i11);
      for (const e21 of n4.filter((e22) => false !== e22.processTemplateParams)) {
        const t8 = xn[e21.tag];
        t8 && "string" == typeof e21.props[t8] ? e21.props[t8] = processTemplateParams(e21.props[t8], s8, i11) : (true === e21.processTemplateParams || ["titleTemplate", "title"].includes(e21.tag)) && ["innerHTML", "textContent"].forEach((t9) => {
          "string" == typeof e21[t9] && (e21[t9] = processTemplateParams(e21[t9], s8, i11));
        });
      }
      e20._templateParams = s8, e20._separator = i11, t7.tags = n4.filter((e21) => "templateParams" !== e21.tag);
    } } });
    $n = { hooks: { "tags:resolve": (e20) => {
      const { tags: t7 } = e20;
      let n4 = t7.findIndex((e21) => "titleTemplate" === e21.tag);
      const r5 = t7.findIndex((e21) => "title" === e21.tag);
      if (-1 !== r5 && -1 !== n4) {
        const e21 = resolveTitleTemplate(t7[n4].textContent, t7[r5].textContent);
        null !== e21 ? t7[r5].textContent = e21 || t7[r5].textContent : delete t7[r5];
      } else if (-1 !== n4) {
        const e21 = resolveTitleTemplate(t7[n4].textContent);
        null !== e21 && (t7[n4].textContent = e21, t7[n4].tag = "title", n4 = -1);
      }
      -1 !== n4 && delete t7[n4], e20.tags = t7.filter(Boolean);
    } } };
    En = { hooks: { "tags:afterResolve": function(e20) {
      for (const t7 of e20.tags)
        "string" == typeof t7.innerHTML && (t7.innerHTML && ["application/ld+json", "application/json"].includes(t7.props.type) ? t7.innerHTML = t7.innerHTML.replace(/</g, "\\u003C") : t7.innerHTML = t7.innerHTML.replace(new RegExp(`</${t7.tag}`, "g"), `<\\/${t7.tag}`));
    } } };
    Pn = /@import/;
    jn = xt.startsWith("3");
    Hn = { hooks: { "entries:resolve": function(e20) {
      for (const t7 of e20.entries)
        t7.resolvedInput = resolveUnrefHeadInput2(t7.input);
    } } };
    In = "usehead";
    Ln = [(Nn = { track: true }, { hooks: { "tags:beforeResolve": function({ tags: e20 }) {
      for (const t7 of e20) {
        if (t7.tagPosition && "head" !== t7.tagPosition)
          continue;
        if (t7.tagPriority = t7.tagPriority || tagWeight(t7), 100 !== t7.tagPriority)
          continue;
        const isTruthy = (e22) => "" === e22 || true === e22, e21 = "script" === t7.tag, n4 = "link" === t7.tag;
        e21 && isTruthy(t7.props.async) ? t7.tagPriority = 30 : "style" === t7.tag && t7.innerHTML && Pn.test(t7.innerHTML) ? t7.tagPriority = 40 : !e21 || !t7.props.src || isTruthy(t7.props.defer) || isTruthy(t7.props.async) || "module" === t7.props.type || t7.props.type?.endsWith("json") ? n4 && "stylesheet" === t7.props.rel || "style" === t7.tag ? t7.tagPriority = 60 : n4 && ["preload", "modulepreload"].includes(t7.props.rel) ? t7.tagPriority = 70 : e21 && isTruthy(t7.props.defer) && t7.props.src && !isTruthy(t7.props.async) ? t7.tagPriority = 80 : n4 && ["prefetch", "dns-prefetch", "prerender"].includes(t7.props.rel) && (t7.tagPriority = 90) : t7.tagPriority = 50;
      }
      Nn?.track && e20.push({ tag: "htmlAttrs", props: { "data-capo": "" } });
    } } })];
    Mn = {};
    Vn = { meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }, { charset: "utf-8" }], link: [], style: [], script: [], noscript: [] };
    Fn = { id: "teleports" };
    globalThis.__buildAssetsURL = buildAssetsURL, globalThis.__publicAssetsURL = publicAssetsURL;
    getClientManifest = () => Promise.resolve().then(() => (init_client_manifest(), client_manifest_exports)).then((e20) => e20.default || e20).then((e20) => "function" == typeof e20 ? e20() : e20);
    Bn = lazyCachedFunction(() => Promise.resolve().then(() => (init_styles(), styles_exports)).then((e20) => e20.default || e20));
    Dn = lazyCachedFunction(async () => {
      const e20 = await getClientManifest();
      if (!e20)
        throw new Error("client.manifest is not available");
      const t7 = await Promise.resolve().then(() => (init_server(), server_exports)).then((e21) => e21.default || e21);
      if (!t7)
        throw new Error("Server bundle is not available");
      return createRenderer$1(t7, { manifest: e20, renderToString: async function(e21, t8) {
        const n4 = await renderToString(e21, t8);
        return Wn + n4 + qn;
      }, buildAssetsURL });
    });
    Un = lazyCachedFunction(async () => {
      const e20 = await getClientManifest(), t7 = await Promise.resolve().then(() => (init_virtual_spa_template(), virtual_spa_template_exports)).then((e21) => e21.template).catch(() => "").then((e21) => Wn + e21 + qn), n4 = createRenderer$1(() => () => {
      }, { manifest: e20, renderToString: () => t7, buildAssetsURL }), r5 = await n4.renderToString({});
      return { rendererContext: n4.rendererContext, renderToString: (e21) => {
        const t8 = useRuntimeConfig2(e21.event);
        return e21.modules = e21.modules || /* @__PURE__ */ new Set(), e21.payload = { serverRendered: false }, e21.config = { public: t8.public, app: t8.app }, Promise.resolve(r5);
      } };
    });
    zn = `<div${propsToString(Fn)}>`;
    Wn = `<div${propsToString({ id: "__nuxt" })}>`;
    qn = "</div>";
    Kn = /\/_payload.json(\?.*)?$/;
    Jn = (Gn = async (e20) => {
      const t7 = useNitroApp(), n4 = e20.path.startsWith("/__nuxt_error") ? getQuery(e20) : null;
      if (n4 && n4.statusCode && (n4.statusCode = Number.parseInt(n4.statusCode)), n4 && !("__unenv__" in e20.node.req))
        throw createError$1({ statusCode: 404, statusMessage: "Page Not Found: /__nuxt_error" });
      const o13 = false, s8 = void 0;
      let a7 = n4?.url || e20.path;
      const c5 = Kn.test(a7) && true;
      c5 && (a7 = a7.substring(0, a7.lastIndexOf("/")) || "/", e20._path = a7, e20.node.req.url = a7);
      const u5 = getRouteRules(e20), y5 = createServerHead({ plugins: Ln }), v4 = { mode: "server" };
      y5.push(Vn, v4);
      const _5 = { url: a7, event: e20, runtimeConfig: useRuntimeConfig2(e20), noSSR: e20.context.nuxt?.noSSR || false === u5.ssr && true || false, head: y5, error: !!n4, nuxt: void 0, payload: n4 ? { error: n4 } : {}, _payloadReducers: {}, modules: /* @__PURE__ */ new Set(), set _registeredComponents(e21) {
        this.modules = e21;
      }, get _registeredComponents() {
        return this.modules;
      }, islandContext: s8 }, b5 = _5.noSSR ? await Un() : await Dn();
      for (const e21 of await getClientManifest().then((e22) => Object.values(e22).filter((e23) => e23._globalCSS).map((e23) => e23.src)))
        _5.modules.add(e21);
      const C5 = await b5.renderToString(_5).catch(async (e21) => {
        if (_5._renderResponse && "skipping render" === e21.message)
          return {};
        const t8 = !n4 && _5.payload?.error || e21;
        throw await _5.nuxt?.hooks.callHook("app:error", t8), t8;
      });
      if (await _5.nuxt?.hooks.callHook("app:rendered", { ssrContext: _5, renderResult: C5 }), _5._renderResponse)
        return _5._renderResponse;
      if (_5.payload?.error && !n4)
        throw _5.payload.error;
      if (c5) {
        const e21 = function(e22) {
          return { body: stringify(splitPayload(e22).payload, e22._payloadReducers), statusCode: getResponseStatus(e22.event), statusMessage: getResponseStatusText(e22.event), headers: { "content-type": "application/json;charset=utf-8", "x-powered-by": "Nuxt" } };
        }(_5);
        return e21;
      }
      const S5 = await async function(e21) {
        const t8 = await Bn(), n5 = /* @__PURE__ */ new Set();
        for (const r5 of e21)
          if (r5 in t8)
            for (const e22 of await t8[r5]())
              n5.add(e22);
        return Array.from(n5).map((e22) => ({ innerHTML: e22 }));
      }(_5.modules ?? []), A5 = u5.experimentalNoScripts, { styles: w6, scripts: R5 } = getRequestDependencies(_5, b5.rendererContext);
      y5.push({ style: S5 });
      {
        const e21 = [];
        for (const t8 in w6) {
          const n5 = w6[t8];
          e21.push({ rel: "stylesheet", href: b5.rendererContext.buildAssetsURL(n5.file) });
        }
        y5.push({ link: e21 }, v4);
      }
      A5 || (y5.push({ link: getPreloadLinks(_5, b5.rendererContext) }, v4), y5.push({ link: getPrefetchLinks(_5, b5.rendererContext) }, v4), y5.push({ script: renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext: _5, data: _5.payload }) }, { ...v4, tagPosition: "bodyClose", tagPriority: "high" })), u5.experimentalNoScripts || y5.push({ script: Object.values(R5).map((e21) => ({ type: e21.module ? "module" : null, src: b5.rendererContext.buildAssetsURL(e21.file), defer: !e21.module || null, tagPosition: "head", crossorigin: "" })) }, v4);
      const { headTags: T5, bodyTags: x4, bodyTagsOpen: $5, htmlAttrs: E4, bodyAttrs: O4 } = await renderSSRHead(y5, Mn), P5 = { island: o13, htmlAttrs: E4 ? [E4] : [], head: normalizeChunks([T5]), bodyAttrs: O4 ? [O4] : [], bodyPrepend: normalizeChunks([$5, _5.teleports?.body]), body: [C5.html, zn + joinTags([_5.teleports?.[`#${Fn.id}`]]) + "</div>"], bodyAppend: [x4] };
      var j7;
      return await t7.hooks.callHook("render:html", P5, { event: e20 }), { body: (j7 = P5, `<!DOCTYPE html><html${joinAttrs(j7.htmlAttrs)}><head>${joinTags(j7.head)}</head><body${joinAttrs(j7.bodyAttrs)}>${joinTags(j7.bodyPrepend)}${joinTags(j7.body)}${joinTags(j7.bodyAppend)}</body></html>`), statusCode: getResponseStatus(e20), statusMessage: getResponseStatusText(e20), headers: { "content-type": "text/html;charset=utf-8", "x-powered-by": "Nuxt" } };
    }, xe2(async (e20) => {
      if (e20.path.endsWith("/favicon.ico"))
        return setResponseHeader(e20, "Content-Type", "image/x-icon"), send(e20, "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
      const a7 = await Gn(e20);
      if (!a7) {
        const t7 = getResponseStatus(e20);
        return setResponseStatus(e20, 200 === t7 ? 500 : t7), send(e20, "No response returned from render handler: " + e20.path);
      }
      const l4 = useNitroApp();
      return await l4.hooks.callHook("render:response", a7, { event: e20 }), a7.headers && setResponseHeaders(e20, a7.headers), (a7.statusCode || a7.statusMessage) && setResponseStatus(e20, a7.statusCode, a7.statusMessage), a7.body;
    }));
    Zn = Object.freeze(Object.defineProperty({ __proto__: null, default: Jn }, Symbol.toStringTag, { value: "Module" }));
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/cached.get.mjs
var cached_get_exports = {};
__export(cached_get_exports, {
  default: () => t2
});
var t2;
var init_cached_get = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/cached.get.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    t2 = cachedEventHandler(() => ({ now: Date.now() }), { maxAge: 5 });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/virtual/_commonjsHelpers.mjs
function getDefaultExportFromCjs(t7) {
  return t7 && t7.__esModule && Object.prototype.hasOwnProperty.call(t7, "default") ? t7.default : t7;
}
var init_commonjsHelpers = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/virtual/_commonjsHelpers.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/_/index.mjs
function getErrorMap() {
  return r;
}
function addIssueToContext(e20, t7) {
  const a7 = getErrorMap(), s8 = makeIssue({ issueData: t7, data: e20.data, path: e20.path, errorMaps: [e20.common.contextualErrorMap, e20.schemaErrorMap, a7, a7 === errorMap ? void 0 : errorMap].filter((e21) => !!e21) });
  e20.common.issues.push(s8);
}
function __classPrivateFieldGet(e20, t7, a7, s8) {
  if ("function" == typeof t7 ? e20 !== t7 || !s8 : !t7.has(e20))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t7.get(e20);
}
function __classPrivateFieldSet(e20, t7, a7, s8, r5) {
  if ("function" == typeof t7 ? e20 !== t7 || !r5 : !t7.has(e20))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t7.set(e20, a7), a7;
}
function processCreateParams(e20) {
  if (!e20)
    return {};
  const { errorMap: t7, invalid_type_error: a7, required_error: s8, description: r5 } = e20;
  if (t7 && (a7 || s8))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  if (t7)
    return { errorMap: t7, description: r5 };
  return { errorMap: (t8, r6) => {
    var n4, i11;
    const { message: o13 } = e20;
    return "invalid_enum_value" === t8.code ? { message: null != o13 ? o13 : r6.defaultError } : void 0 === r6.data ? { message: null !== (n4 = null != o13 ? o13 : s8) && void 0 !== n4 ? n4 : r6.defaultError } : "invalid_type" !== t8.code ? { message: r6.defaultError } : { message: null !== (i11 = null != o13 ? o13 : a7) && void 0 !== i11 ? i11 : r6.defaultError };
  }, description: r5 };
}
function timeRegexSource(e20) {
  let t7 = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e20.precision ? t7 = `${t7}\\.\\d{${e20.precision}}` : null == e20.precision && (t7 = `${t7}(\\.\\d+)?`), t7;
}
function datetimeRegex(e20) {
  let t7 = `${Z3}T${timeRegexSource(e20)}`;
  const a7 = [];
  return a7.push(e20.local ? "Z?" : "Z"), e20.offset && a7.push("([+-]\\d{2}:?\\d{2})"), t7 = `${t7}(${a7.join("|")})`, new RegExp(`^${t7}$`);
}
function floatSafeRemainder(e20, t7) {
  const a7 = (e20.toString().split(".")[1] || "").length, s8 = (t7.toString().split(".")[1] || "").length, r5 = a7 > s8 ? a7 : s8;
  return parseInt(e20.toFixed(r5).replace(".", "")) % parseInt(t7.toFixed(r5).replace(".", "")) / Math.pow(10, r5);
}
function deepPartialify(e20) {
  if (e20 instanceof ZodObject) {
    const t7 = {};
    for (const a7 in e20.shape) {
      const s8 = e20.shape[a7];
      t7[a7] = ZodOptional.create(deepPartialify(s8));
    }
    return new ZodObject({ ...e20._def, shape: () => t7 });
  }
  return e20 instanceof ZodArray ? new ZodArray({ ...e20._def, type: deepPartialify(e20.element) }) : e20 instanceof ZodOptional ? ZodOptional.create(deepPartialify(e20.unwrap())) : e20 instanceof ZodNullable ? ZodNullable.create(deepPartialify(e20.unwrap())) : e20 instanceof ZodTuple ? ZodTuple.create(e20.items.map((e21) => deepPartialify(e21))) : e20;
}
function mergeValues(t7, s8) {
  const r5 = getParsedType(t7), n4 = getParsedType(s8);
  if (t7 === s8)
    return { valid: true, data: t7 };
  if (r5 === a5.object && n4 === a5.object) {
    const a7 = e11.objectKeys(s8), r6 = e11.objectKeys(t7).filter((e20) => -1 !== a7.indexOf(e20)), n5 = { ...t7, ...s8 };
    for (const e20 of r6) {
      const a8 = mergeValues(t7[e20], s8[e20]);
      if (!a8.valid)
        return { valid: false };
      n5[e20] = a8.data;
    }
    return { valid: true, data: n5 };
  }
  if (r5 === a5.array && n4 === a5.array) {
    if (t7.length !== s8.length)
      return { valid: false };
    const e20 = [];
    for (let a7 = 0; a7 < t7.length; a7++) {
      const r6 = mergeValues(t7[a7], s8[a7]);
      if (!r6.valid)
        return { valid: false };
      e20.push(r6.data);
    }
    return { valid: true, data: e20 };
  }
  return r5 === a5.date && n4 === a5.date && +t7 == +s8 ? { valid: true, data: t7 } : { valid: false };
}
function createZodEnum(e20, t7) {
  return new ZodEnum({ values: e20, typeName: T3.ZodEnum, ...processCreateParams(t7) });
}
function custom(e20, t7 = {}, a7) {
  return e20 ? ZodAny.create().superRefine((s8, r5) => {
    var n4, i11;
    if (!e20(s8)) {
      const e21 = "function" == typeof t7 ? t7(s8) : "string" == typeof t7 ? { message: t7 } : t7, o13 = null === (i11 = null !== (n4 = e21.fatal) && void 0 !== n4 ? n4 : a7) || void 0 === i11 || i11, d5 = "string" == typeof e21 ? { message: e21 } : e21;
      r5.addIssue({ code: "custom", ...d5, fatal: o13 });
    }
  }) : ZodAny.create();
}
var e11, t3, a5, getParsedType, s3, ZodError, errorMap, r, makeIssue, ParseStatus, n, DIRTY, OK, isAborted, isDirty, isValid, isAsync, i2, o3, d2, ParseInputLazyPath, handleResult, ZodType, u2, c, l, p2, h2, m, f, y2, _3, v2, g, Z3, x2, ZodString, ZodNumber, ZodBigInt, ZodBoolean, ZodDate, ZodSymbol, ZodUndefined, ZodNull, ZodAny, ZodUnknown, ZodNever, ZodVoid, ZodArray, ZodObject, ZodUnion, getDiscriminator, ZodDiscriminatedUnion, ZodIntersection, ZodTuple, ZodRecord, ZodMap, ZodSet, ZodFunction, ZodLazy, ZodLiteral, ZodEnum, ZodNativeEnum, ZodPromise, ZodEffects, ZodOptional, ZodNullable, ZodDefault, ZodCatch, ZodNaN, b2, ZodBranded, ZodPipeline, ZodReadonly, k3, T3, C3, w2, I3, P3, N2, S3, O2, E2, j4, R3, A3, L2, M2, $3, D2, z2, U3, V2, B2, F3, K2, W2, q4, G2, J2, Y3, H2, X3, Q2, ee3, te3, ae3, se3, re4, ne3, ie3, oe3;
var init__ = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/_/index.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    !function(e20) {
      e20.assertEqual = (e21) => e21, e20.assertIs = function(e21) {
      }, e20.assertNever = function(e21) {
        throw new Error();
      }, e20.arrayToEnum = (e21) => {
        const t7 = {};
        for (const a7 of e21)
          t7[a7] = a7;
        return t7;
      }, e20.getValidEnumValues = (t7) => {
        const a7 = e20.objectKeys(t7).filter((e21) => "number" != typeof t7[t7[e21]]), s8 = {};
        for (const e21 of a7)
          s8[e21] = t7[e21];
        return e20.objectValues(s8);
      }, e20.objectValues = (t7) => e20.objectKeys(t7).map(function(e21) {
        return t7[e21];
      }), e20.objectKeys = "function" == typeof Object.keys ? (e21) => Object.keys(e21) : (e21) => {
        const t7 = [];
        for (const a7 in e21)
          Object.prototype.hasOwnProperty.call(e21, a7) && t7.push(a7);
        return t7;
      }, e20.find = (e21, t7) => {
        for (const a7 of e21)
          if (t7(a7))
            return a7;
      }, e20.isInteger = "function" == typeof Number.isInteger ? (e21) => Number.isInteger(e21) : (e21) => "number" == typeof e21 && isFinite(e21) && Math.floor(e21) === e21, e20.joinValues = function(e21, t7 = " | ") {
        return e21.map((e22) => "string" == typeof e22 ? `'${e22}'` : e22).join(t7);
      }, e20.jsonStringifyReplacer = (e21, t7) => "bigint" == typeof t7 ? t7.toString() : t7;
    }(e11 || (e11 = {})), function(e20) {
      e20.mergeShapes = (e21, t7) => ({ ...e21, ...t7 });
    }(t3 || (t3 = {}));
    a5 = e11.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
    getParsedType = (e20) => {
      switch (typeof e20) {
        case "undefined":
          return a5.undefined;
        case "string":
          return a5.string;
        case "number":
          return isNaN(e20) ? a5.nan : a5.number;
        case "boolean":
          return a5.boolean;
        case "function":
          return a5.function;
        case "bigint":
          return a5.bigint;
        case "symbol":
          return a5.symbol;
        case "object":
          return Array.isArray(e20) ? a5.array : null === e20 ? a5.null : e20.then && "function" == typeof e20.then && e20.catch && "function" == typeof e20.catch ? a5.promise : "undefined" != typeof Map && e20 instanceof Map ? a5.map : "undefined" != typeof Set && e20 instanceof Set ? a5.set : "undefined" != typeof Date && e20 instanceof Date ? a5.date : a5.object;
        default:
          return a5.unknown;
      }
    };
    s3 = e11.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    ZodError = class extends Error {
      constructor(e20) {
        super(), this.issues = [], this.addIssue = (e21) => {
          this.issues = [...this.issues, e21];
        }, this.addIssues = (e21 = []) => {
          this.issues = [...this.issues, ...e21];
        };
        const t7 = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, t7) : this.__proto__ = t7, this.name = "ZodError", this.issues = e20;
      }
      get errors() {
        return this.issues;
      }
      format(e20) {
        const t7 = e20 || function(e21) {
          return e21.message;
        }, a7 = { _errors: [] }, processError = (e21) => {
          for (const s8 of e21.issues)
            if ("invalid_union" === s8.code)
              s8.unionErrors.map(processError);
            else if ("invalid_return_type" === s8.code)
              processError(s8.returnTypeError);
            else if ("invalid_arguments" === s8.code)
              processError(s8.argumentsError);
            else if (0 === s8.path.length)
              a7._errors.push(t7(s8));
            else {
              let e22 = a7, r5 = 0;
              for (; r5 < s8.path.length; ) {
                const a8 = s8.path[r5];
                r5 === s8.path.length - 1 ? (e22[a8] = e22[a8] || { _errors: [] }, e22[a8]._errors.push(t7(s8))) : e22[a8] = e22[a8] || { _errors: [] }, e22 = e22[a8], r5++;
              }
            }
        };
        return processError(this), a7;
      }
      static assert(e20) {
        if (!(e20 instanceof ZodError))
          throw new Error(`Not a ZodError: ${e20}`);
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, e11.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return 0 === this.issues.length;
      }
      flatten(e20 = (e21) => e21.message) {
        const t7 = {}, a7 = [];
        for (const s8 of this.issues)
          s8.path.length > 0 ? (t7[s8.path[0]] = t7[s8.path[0]] || [], t7[s8.path[0]].push(e20(s8))) : a7.push(e20(s8));
        return { formErrors: a7, fieldErrors: t7 };
      }
      get formErrors() {
        return this.flatten();
      }
    };
    ZodError.create = (e20) => new ZodError(e20);
    errorMap = (t7, r5) => {
      let n4;
      switch (t7.code) {
        case s3.invalid_type:
          n4 = t7.received === a5.undefined ? "Required" : `Expected ${t7.expected}, received ${t7.received}`;
          break;
        case s3.invalid_literal:
          n4 = `Invalid literal value, expected ${JSON.stringify(t7.expected, e11.jsonStringifyReplacer)}`;
          break;
        case s3.unrecognized_keys:
          n4 = `Unrecognized key(s) in object: ${e11.joinValues(t7.keys, ", ")}`;
          break;
        case s3.invalid_union:
          n4 = "Invalid input";
          break;
        case s3.invalid_union_discriminator:
          n4 = `Invalid discriminator value. Expected ${e11.joinValues(t7.options)}`;
          break;
        case s3.invalid_enum_value:
          n4 = `Invalid enum value. Expected ${e11.joinValues(t7.options)}, received '${t7.received}'`;
          break;
        case s3.invalid_arguments:
          n4 = "Invalid function arguments";
          break;
        case s3.invalid_return_type:
          n4 = "Invalid function return type";
          break;
        case s3.invalid_date:
          n4 = "Invalid date";
          break;
        case s3.invalid_string:
          "object" == typeof t7.validation ? "includes" in t7.validation ? (n4 = `Invalid input: must include "${t7.validation.includes}"`, "number" == typeof t7.validation.position && (n4 = `${n4} at one or more positions greater than or equal to ${t7.validation.position}`)) : "startsWith" in t7.validation ? n4 = `Invalid input: must start with "${t7.validation.startsWith}"` : "endsWith" in t7.validation ? n4 = `Invalid input: must end with "${t7.validation.endsWith}"` : e11.assertNever(t7.validation) : n4 = "regex" !== t7.validation ? `Invalid ${t7.validation}` : "Invalid";
          break;
        case s3.too_small:
          n4 = "array" === t7.type ? `Array must contain ${t7.exact ? "exactly" : t7.inclusive ? "at least" : "more than"} ${t7.minimum} element(s)` : "string" === t7.type ? `String must contain ${t7.exact ? "exactly" : t7.inclusive ? "at least" : "over"} ${t7.minimum} character(s)` : "number" === t7.type ? `Number must be ${t7.exact ? "exactly equal to " : t7.inclusive ? "greater than or equal to " : "greater than "}${t7.minimum}` : "date" === t7.type ? `Date must be ${t7.exact ? "exactly equal to " : t7.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t7.minimum))}` : "Invalid input";
          break;
        case s3.too_big:
          n4 = "array" === t7.type ? `Array must contain ${t7.exact ? "exactly" : t7.inclusive ? "at most" : "less than"} ${t7.maximum} element(s)` : "string" === t7.type ? `String must contain ${t7.exact ? "exactly" : t7.inclusive ? "at most" : "under"} ${t7.maximum} character(s)` : "number" === t7.type ? `Number must be ${t7.exact ? "exactly" : t7.inclusive ? "less than or equal to" : "less than"} ${t7.maximum}` : "bigint" === t7.type ? `BigInt must be ${t7.exact ? "exactly" : t7.inclusive ? "less than or equal to" : "less than"} ${t7.maximum}` : "date" === t7.type ? `Date must be ${t7.exact ? "exactly" : t7.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t7.maximum))}` : "Invalid input";
          break;
        case s3.custom:
          n4 = "Invalid input";
          break;
        case s3.invalid_intersection_types:
          n4 = "Intersection results could not be merged";
          break;
        case s3.not_multiple_of:
          n4 = `Number must be a multiple of ${t7.multipleOf}`;
          break;
        case s3.not_finite:
          n4 = "Number must be finite";
          break;
        default:
          n4 = r5.defaultError, e11.assertNever(t7);
      }
      return { message: n4 };
    };
    r = errorMap;
    makeIssue = (e20) => {
      const { data: t7, path: a7, errorMaps: s8, issueData: r5 } = e20, n4 = [...a7, ...r5.path || []], i11 = { ...r5, path: n4 };
      if (void 0 !== r5.message)
        return { ...r5, path: n4, message: r5.message };
      let o13 = "";
      const d5 = s8.filter((e21) => !!e21).slice().reverse();
      for (const e21 of d5)
        o13 = e21(i11, { data: t7, defaultError: o13 }).message;
      return { ...r5, path: n4, message: o13 };
    };
    ParseStatus = class {
      constructor() {
        this.value = "valid";
      }
      dirty() {
        "valid" === this.value && (this.value = "dirty");
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted");
      }
      static mergeArray(e20, t7) {
        const a7 = [];
        for (const s8 of t7) {
          if ("aborted" === s8.status)
            return n;
          "dirty" === s8.status && e20.dirty(), a7.push(s8.value);
        }
        return { status: e20.value, value: a7 };
      }
      static async mergeObjectAsync(e20, t7) {
        const a7 = [];
        for (const e21 of t7) {
          const t8 = await e21.key, s8 = await e21.value;
          a7.push({ key: t8, value: s8 });
        }
        return ParseStatus.mergeObjectSync(e20, a7);
      }
      static mergeObjectSync(e20, t7) {
        const a7 = {};
        for (const s8 of t7) {
          const { key: t8, value: r5 } = s8;
          if ("aborted" === t8.status)
            return n;
          if ("aborted" === r5.status)
            return n;
          "dirty" === t8.status && e20.dirty(), "dirty" === r5.status && e20.dirty(), "__proto__" === t8.value || void 0 === r5.value && !s8.alwaysSet || (a7[t8.value] = r5.value);
        }
        return { status: e20.value, value: a7 };
      }
    };
    n = Object.freeze({ status: "aborted" });
    DIRTY = (e20) => ({ status: "dirty", value: e20 });
    OK = (e20) => ({ status: "valid", value: e20 });
    isAborted = (e20) => "aborted" === e20.status;
    isDirty = (e20) => "dirty" === e20.status;
    isValid = (e20) => "valid" === e20.status;
    isAsync = (e20) => "undefined" != typeof Promise && e20 instanceof Promise;
    "function" == typeof SuppressedError && SuppressedError, function(e20) {
      e20.errToObj = (e21) => "string" == typeof e21 ? { message: e21 } : e21 || {}, e20.toString = (e21) => "string" == typeof e21 ? e21 : null == e21 ? void 0 : e21.message;
    }(i2 || (i2 = {}));
    ParseInputLazyPath = class {
      constructor(e20, t7, a7, s8) {
        this._cachedPath = [], this.parent = e20, this.data = t7, this._path = a7, this._key = s8;
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
      }
    };
    handleResult = (e20, t7) => {
      if (isValid(t7))
        return { success: true, data: t7.value };
      if (!e20.common.issues.length)
        throw new Error("Validation failed but no issues detected.");
      return { success: false, get error() {
        if (this._error)
          return this._error;
        const t8 = new ZodError(e20.common.issues);
        return this._error = t8, this._error;
      } };
    };
    ZodType = class {
      constructor(e20) {
        this.spa = this.safeParseAsync, this._def = e20, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
      }
      get description() {
        return this._def.description;
      }
      _getType(e20) {
        return getParsedType(e20.data);
      }
      _getOrReturnCtx(e20, t7) {
        return t7 || { common: e20.parent.common, data: e20.data, parsedType: getParsedType(e20.data), schemaErrorMap: this._def.errorMap, path: e20.path, parent: e20.parent };
      }
      _processInputParams(e20) {
        return { status: new ParseStatus(), ctx: { common: e20.parent.common, data: e20.data, parsedType: getParsedType(e20.data), schemaErrorMap: this._def.errorMap, path: e20.path, parent: e20.parent } };
      }
      _parseSync(e20) {
        const t7 = this._parse(e20);
        if (isAsync(t7))
          throw new Error("Synchronous parse encountered promise.");
        return t7;
      }
      _parseAsync(e20) {
        const t7 = this._parse(e20);
        return Promise.resolve(t7);
      }
      parse(e20, t7) {
        const a7 = this.safeParse(e20, t7);
        if (a7.success)
          return a7.data;
        throw a7.error;
      }
      safeParse(e20, t7) {
        var a7;
        const s8 = { common: { issues: [], async: null !== (a7 = null == t7 ? void 0 : t7.async) && void 0 !== a7 && a7, contextualErrorMap: null == t7 ? void 0 : t7.errorMap }, path: (null == t7 ? void 0 : t7.path) || [], schemaErrorMap: this._def.errorMap, parent: null, data: e20, parsedType: getParsedType(e20) }, r5 = this._parseSync({ data: e20, path: s8.path, parent: s8 });
        return handleResult(s8, r5);
      }
      async parseAsync(e20, t7) {
        const a7 = await this.safeParseAsync(e20, t7);
        if (a7.success)
          return a7.data;
        throw a7.error;
      }
      async safeParseAsync(e20, t7) {
        const a7 = { common: { issues: [], contextualErrorMap: null == t7 ? void 0 : t7.errorMap, async: true }, path: (null == t7 ? void 0 : t7.path) || [], schemaErrorMap: this._def.errorMap, parent: null, data: e20, parsedType: getParsedType(e20) }, s8 = this._parse({ data: e20, path: a7.path, parent: a7 }), r5 = await (isAsync(s8) ? s8 : Promise.resolve(s8));
        return handleResult(a7, r5);
      }
      refine(e20, t7) {
        const getIssueProperties = (e21) => "string" == typeof t7 || void 0 === t7 ? { message: t7 } : "function" == typeof t7 ? t7(e21) : t7;
        return this._refinement((t8, a7) => {
          const r5 = e20(t8), setError = () => a7.addIssue({ code: s3.custom, ...getIssueProperties(t8) });
          return "undefined" != typeof Promise && r5 instanceof Promise ? r5.then((e21) => !!e21 || (setError(), false)) : !!r5 || (setError(), false);
        });
      }
      refinement(e20, t7) {
        return this._refinement((a7, s8) => !!e20(a7) || (s8.addIssue("function" == typeof t7 ? t7(a7, s8) : t7), false));
      }
      _refinement(e20) {
        return new ZodEffects({ schema: this, typeName: T3.ZodEffects, effect: { type: "refinement", refinement: e20 } });
      }
      superRefine(e20) {
        return this._refinement(e20);
      }
      optional() {
        return ZodOptional.create(this, this._def);
      }
      nullable() {
        return ZodNullable.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return ZodArray.create(this, this._def);
      }
      promise() {
        return ZodPromise.create(this, this._def);
      }
      or(e20) {
        return ZodUnion.create([this, e20], this._def);
      }
      and(e20) {
        return ZodIntersection.create(this, e20, this._def);
      }
      transform(e20) {
        return new ZodEffects({ ...processCreateParams(this._def), schema: this, typeName: T3.ZodEffects, effect: { type: "transform", transform: e20 } });
      }
      default(e20) {
        const t7 = "function" == typeof e20 ? e20 : () => e20;
        return new ZodDefault({ ...processCreateParams(this._def), innerType: this, defaultValue: t7, typeName: T3.ZodDefault });
      }
      brand() {
        return new ZodBranded({ typeName: T3.ZodBranded, type: this, ...processCreateParams(this._def) });
      }
      catch(e20) {
        const t7 = "function" == typeof e20 ? e20 : () => e20;
        return new ZodCatch({ ...processCreateParams(this._def), innerType: this, catchValue: t7, typeName: T3.ZodCatch });
      }
      describe(e20) {
        return new (0, this.constructor)({ ...this._def, description: e20 });
      }
      pipe(e20) {
        return ZodPipeline.create(this, e20);
      }
      readonly() {
        return ZodReadonly.create(this);
      }
      isOptional() {
        return this.safeParse(void 0).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    };
    u2 = /^c[^\s-]{8,}$/i;
    c = /^[0-9a-z]+$/;
    l = /^[0-9A-HJKMNP-TV-Z]{26}$/;
    p2 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
    h2 = /^[a-z0-9_-]{21}$/i;
    m = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
    f = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    _3 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    v2 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    g = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    Z3 = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
    x2 = new RegExp(`^${Z3}$`);
    ZodString = class extends ZodType {
      _parse(t7) {
        this._def.coerce && (t7.data = String(t7.data));
        if (this._getType(t7) !== a5.string) {
          const e20 = this._getOrReturnCtx(t7);
          return addIssueToContext(e20, { code: s3.invalid_type, expected: a5.string, received: e20.parsedType }), n;
        }
        const r5 = new ParseStatus();
        let i11;
        for (const a7 of this._def.checks)
          if ("min" === a7.kind)
            t7.data.length < a7.value && (i11 = this._getOrReturnCtx(t7, i11), addIssueToContext(i11, { code: s3.too_small, minimum: a7.value, type: "string", inclusive: true, exact: false, message: a7.message }), r5.dirty());
          else if ("max" === a7.kind)
            t7.data.length > a7.value && (i11 = this._getOrReturnCtx(t7, i11), addIssueToContext(i11, { code: s3.too_big, maximum: a7.value, type: "string", inclusive: true, exact: false, message: a7.message }), r5.dirty());
          else if ("length" === a7.kind) {
            const e20 = t7.data.length > a7.value, n4 = t7.data.length < a7.value;
            (e20 || n4) && (i11 = this._getOrReturnCtx(t7, i11), e20 ? addIssueToContext(i11, { code: s3.too_big, maximum: a7.value, type: "string", inclusive: true, exact: true, message: a7.message }) : n4 && addIssueToContext(i11, { code: s3.too_small, minimum: a7.value, type: "string", inclusive: true, exact: true, message: a7.message }), r5.dirty());
          } else if ("email" === a7.kind)
            f.test(t7.data) || (i11 = this._getOrReturnCtx(t7, i11), addIssueToContext(i11, { validation: "email", code: s3.invalid_string, message: a7.message }), r5.dirty());
          else if ("emoji" === a7.kind)
            y2 || (y2 = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), y2.test(t7.data) || (i11 = this._getOrReturnCtx(t7, i11), addIssueToContext(i11, { validation: "emoji", code: s3.invalid_string, message: a7.message }), r5.dirty());
          else if ("uuid" === a7.kind)
            p2.test(t7.data) || (i11 = this._getOrReturnCtx(t7, i11), addIssueToContext(i11, { validation: "uuid", code: s3.invalid_string, message: a7.message }), r5.dirty());
          else if ("nanoid" === a7.kind)
            h2.test(t7.data) || (i11 = this._getOrReturnCtx(t7, i11), addIssueToContext(i11, { validation: "nanoid", code: s3.invalid_string, message: a7.message }), r5.dirty());
          else if ("cuid" === a7.kind)
            u2.test(t7.data) || (i11 = this._getOrReturnCtx(t7, i11), addIssueToContext(i11, { validation: "cuid", code: s3.invalid_string, message: a7.message }), r5.dirty());
          else if ("cuid2" === a7.kind)
            c.test(t7.data) || (i11 = this._getOrReturnCtx(t7, i11), addIssueToContext(i11, { validation: "cuid2", code: s3.invalid_string, message: a7.message }), r5.dirty());
          else if ("ulid" === a7.kind)
            l.test(t7.data) || (i11 = this._getOrReturnCtx(t7, i11), addIssueToContext(i11, { validation: "ulid", code: s3.invalid_string, message: a7.message }), r5.dirty());
          else if ("url" === a7.kind)
            try {
              new URL(t7.data);
            } catch (e20) {
              i11 = this._getOrReturnCtx(t7, i11), addIssueToContext(i11, { validation: "url", code: s3.invalid_string, message: a7.message }), r5.dirty();
            }
          else if ("regex" === a7.kind) {
            a7.regex.lastIndex = 0;
            a7.regex.test(t7.data) || (i11 = this._getOrReturnCtx(t7, i11), addIssueToContext(i11, { validation: "regex", code: s3.invalid_string, message: a7.message }), r5.dirty());
          } else if ("trim" === a7.kind)
            t7.data = t7.data.trim();
          else if ("includes" === a7.kind)
            t7.data.includes(a7.value, a7.position) || (i11 = this._getOrReturnCtx(t7, i11), addIssueToContext(i11, { code: s3.invalid_string, validation: { includes: a7.value, position: a7.position }, message: a7.message }), r5.dirty());
          else if ("toLowerCase" === a7.kind)
            t7.data = t7.data.toLowerCase();
          else if ("toUpperCase" === a7.kind)
            t7.data = t7.data.toUpperCase();
          else if ("startsWith" === a7.kind)
            t7.data.startsWith(a7.value) || (i11 = this._getOrReturnCtx(t7, i11), addIssueToContext(i11, { code: s3.invalid_string, validation: { startsWith: a7.value }, message: a7.message }), r5.dirty());
          else if ("endsWith" === a7.kind)
            t7.data.endsWith(a7.value) || (i11 = this._getOrReturnCtx(t7, i11), addIssueToContext(i11, { code: s3.invalid_string, validation: { endsWith: a7.value }, message: a7.message }), r5.dirty());
          else if ("datetime" === a7.kind) {
            datetimeRegex(a7).test(t7.data) || (i11 = this._getOrReturnCtx(t7, i11), addIssueToContext(i11, { code: s3.invalid_string, validation: "datetime", message: a7.message }), r5.dirty());
          } else if ("date" === a7.kind) {
            x2.test(t7.data) || (i11 = this._getOrReturnCtx(t7, i11), addIssueToContext(i11, { code: s3.invalid_string, validation: "date", message: a7.message }), r5.dirty());
          } else if ("time" === a7.kind) {
            new RegExp(`^${timeRegexSource(a7)}$`).test(t7.data) || (i11 = this._getOrReturnCtx(t7, i11), addIssueToContext(i11, { code: s3.invalid_string, validation: "time", message: a7.message }), r5.dirty());
          } else
            "duration" === a7.kind ? m.test(t7.data) || (i11 = this._getOrReturnCtx(t7, i11), addIssueToContext(i11, { validation: "duration", code: s3.invalid_string, message: a7.message }), r5.dirty()) : "ip" === a7.kind ? (o13 = t7.data, ("v4" !== (d5 = a7.version) && d5 || !_3.test(o13)) && ("v6" !== d5 && d5 || !v2.test(o13)) && (i11 = this._getOrReturnCtx(t7, i11), addIssueToContext(i11, { validation: "ip", code: s3.invalid_string, message: a7.message }), r5.dirty())) : "base64" === a7.kind ? g.test(t7.data) || (i11 = this._getOrReturnCtx(t7, i11), addIssueToContext(i11, { validation: "base64", code: s3.invalid_string, message: a7.message }), r5.dirty()) : e11.assertNever(a7);
        var o13, d5;
        return { status: r5.value, value: t7.data };
      }
      _regex(e20, t7, a7) {
        return this.refinement((t8) => e20.test(t8), { validation: t7, code: s3.invalid_string, ...i2.errToObj(a7) });
      }
      _addCheck(e20) {
        return new ZodString({ ...this._def, checks: [...this._def.checks, e20] });
      }
      email(e20) {
        return this._addCheck({ kind: "email", ...i2.errToObj(e20) });
      }
      url(e20) {
        return this._addCheck({ kind: "url", ...i2.errToObj(e20) });
      }
      emoji(e20) {
        return this._addCheck({ kind: "emoji", ...i2.errToObj(e20) });
      }
      uuid(e20) {
        return this._addCheck({ kind: "uuid", ...i2.errToObj(e20) });
      }
      nanoid(e20) {
        return this._addCheck({ kind: "nanoid", ...i2.errToObj(e20) });
      }
      cuid(e20) {
        return this._addCheck({ kind: "cuid", ...i2.errToObj(e20) });
      }
      cuid2(e20) {
        return this._addCheck({ kind: "cuid2", ...i2.errToObj(e20) });
      }
      ulid(e20) {
        return this._addCheck({ kind: "ulid", ...i2.errToObj(e20) });
      }
      base64(e20) {
        return this._addCheck({ kind: "base64", ...i2.errToObj(e20) });
      }
      ip(e20) {
        return this._addCheck({ kind: "ip", ...i2.errToObj(e20) });
      }
      datetime(e20) {
        var t7, a7;
        return "string" == typeof e20 ? this._addCheck({ kind: "datetime", precision: null, offset: false, local: false, message: e20 }) : this._addCheck({ kind: "datetime", precision: void 0 === (null == e20 ? void 0 : e20.precision) ? null : null == e20 ? void 0 : e20.precision, offset: null !== (t7 = null == e20 ? void 0 : e20.offset) && void 0 !== t7 && t7, local: null !== (a7 = null == e20 ? void 0 : e20.local) && void 0 !== a7 && a7, ...i2.errToObj(null == e20 ? void 0 : e20.message) });
      }
      date(e20) {
        return this._addCheck({ kind: "date", message: e20 });
      }
      time(e20) {
        return "string" == typeof e20 ? this._addCheck({ kind: "time", precision: null, message: e20 }) : this._addCheck({ kind: "time", precision: void 0 === (null == e20 ? void 0 : e20.precision) ? null : null == e20 ? void 0 : e20.precision, ...i2.errToObj(null == e20 ? void 0 : e20.message) });
      }
      duration(e20) {
        return this._addCheck({ kind: "duration", ...i2.errToObj(e20) });
      }
      regex(e20, t7) {
        return this._addCheck({ kind: "regex", regex: e20, ...i2.errToObj(t7) });
      }
      includes(e20, t7) {
        return this._addCheck({ kind: "includes", value: e20, position: null == t7 ? void 0 : t7.position, ...i2.errToObj(null == t7 ? void 0 : t7.message) });
      }
      startsWith(e20, t7) {
        return this._addCheck({ kind: "startsWith", value: e20, ...i2.errToObj(t7) });
      }
      endsWith(e20, t7) {
        return this._addCheck({ kind: "endsWith", value: e20, ...i2.errToObj(t7) });
      }
      min(e20, t7) {
        return this._addCheck({ kind: "min", value: e20, ...i2.errToObj(t7) });
      }
      max(e20, t7) {
        return this._addCheck({ kind: "max", value: e20, ...i2.errToObj(t7) });
      }
      length(e20, t7) {
        return this._addCheck({ kind: "length", value: e20, ...i2.errToObj(t7) });
      }
      nonempty(e20) {
        return this.min(1, i2.errToObj(e20));
      }
      trim() {
        return new ZodString({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
      }
      toLowerCase() {
        return new ZodString({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
      }
      toUpperCase() {
        return new ZodString({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
      }
      get isDatetime() {
        return !!this._def.checks.find((e20) => "datetime" === e20.kind);
      }
      get isDate() {
        return !!this._def.checks.find((e20) => "date" === e20.kind);
      }
      get isTime() {
        return !!this._def.checks.find((e20) => "time" === e20.kind);
      }
      get isDuration() {
        return !!this._def.checks.find((e20) => "duration" === e20.kind);
      }
      get isEmail() {
        return !!this._def.checks.find((e20) => "email" === e20.kind);
      }
      get isURL() {
        return !!this._def.checks.find((e20) => "url" === e20.kind);
      }
      get isEmoji() {
        return !!this._def.checks.find((e20) => "emoji" === e20.kind);
      }
      get isUUID() {
        return !!this._def.checks.find((e20) => "uuid" === e20.kind);
      }
      get isNANOID() {
        return !!this._def.checks.find((e20) => "nanoid" === e20.kind);
      }
      get isCUID() {
        return !!this._def.checks.find((e20) => "cuid" === e20.kind);
      }
      get isCUID2() {
        return !!this._def.checks.find((e20) => "cuid2" === e20.kind);
      }
      get isULID() {
        return !!this._def.checks.find((e20) => "ulid" === e20.kind);
      }
      get isIP() {
        return !!this._def.checks.find((e20) => "ip" === e20.kind);
      }
      get isBase64() {
        return !!this._def.checks.find((e20) => "base64" === e20.kind);
      }
      get minLength() {
        let e20 = null;
        for (const t7 of this._def.checks)
          "min" === t7.kind && (null === e20 || t7.value > e20) && (e20 = t7.value);
        return e20;
      }
      get maxLength() {
        let e20 = null;
        for (const t7 of this._def.checks)
          "max" === t7.kind && (null === e20 || t7.value < e20) && (e20 = t7.value);
        return e20;
      }
    };
    ZodString.create = (e20) => {
      var t7;
      return new ZodString({ checks: [], typeName: T3.ZodString, coerce: null !== (t7 = null == e20 ? void 0 : e20.coerce) && void 0 !== t7 && t7, ...processCreateParams(e20) });
    };
    ZodNumber = class extends ZodType {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
      }
      _parse(t7) {
        this._def.coerce && (t7.data = Number(t7.data));
        if (this._getType(t7) !== a5.number) {
          const e20 = this._getOrReturnCtx(t7);
          return addIssueToContext(e20, { code: s3.invalid_type, expected: a5.number, received: e20.parsedType }), n;
        }
        let r5;
        const i11 = new ParseStatus();
        for (const a7 of this._def.checks)
          if ("int" === a7.kind)
            e11.isInteger(t7.data) || (r5 = this._getOrReturnCtx(t7, r5), addIssueToContext(r5, { code: s3.invalid_type, expected: "integer", received: "float", message: a7.message }), i11.dirty());
          else if ("min" === a7.kind) {
            (a7.inclusive ? t7.data < a7.value : t7.data <= a7.value) && (r5 = this._getOrReturnCtx(t7, r5), addIssueToContext(r5, { code: s3.too_small, minimum: a7.value, type: "number", inclusive: a7.inclusive, exact: false, message: a7.message }), i11.dirty());
          } else if ("max" === a7.kind) {
            (a7.inclusive ? t7.data > a7.value : t7.data >= a7.value) && (r5 = this._getOrReturnCtx(t7, r5), addIssueToContext(r5, { code: s3.too_big, maximum: a7.value, type: "number", inclusive: a7.inclusive, exact: false, message: a7.message }), i11.dirty());
          } else
            "multipleOf" === a7.kind ? 0 !== floatSafeRemainder(t7.data, a7.value) && (r5 = this._getOrReturnCtx(t7, r5), addIssueToContext(r5, { code: s3.not_multiple_of, multipleOf: a7.value, message: a7.message }), i11.dirty()) : "finite" === a7.kind ? Number.isFinite(t7.data) || (r5 = this._getOrReturnCtx(t7, r5), addIssueToContext(r5, { code: s3.not_finite, message: a7.message }), i11.dirty()) : e11.assertNever(a7);
        return { status: i11.value, value: t7.data };
      }
      gte(e20, t7) {
        return this.setLimit("min", e20, true, i2.toString(t7));
      }
      gt(e20, t7) {
        return this.setLimit("min", e20, false, i2.toString(t7));
      }
      lte(e20, t7) {
        return this.setLimit("max", e20, true, i2.toString(t7));
      }
      lt(e20, t7) {
        return this.setLimit("max", e20, false, i2.toString(t7));
      }
      setLimit(e20, t7, a7, s8) {
        return new ZodNumber({ ...this._def, checks: [...this._def.checks, { kind: e20, value: t7, inclusive: a7, message: i2.toString(s8) }] });
      }
      _addCheck(e20) {
        return new ZodNumber({ ...this._def, checks: [...this._def.checks, e20] });
      }
      int(e20) {
        return this._addCheck({ kind: "int", message: i2.toString(e20) });
      }
      positive(e20) {
        return this._addCheck({ kind: "min", value: 0, inclusive: false, message: i2.toString(e20) });
      }
      negative(e20) {
        return this._addCheck({ kind: "max", value: 0, inclusive: false, message: i2.toString(e20) });
      }
      nonpositive(e20) {
        return this._addCheck({ kind: "max", value: 0, inclusive: true, message: i2.toString(e20) });
      }
      nonnegative(e20) {
        return this._addCheck({ kind: "min", value: 0, inclusive: true, message: i2.toString(e20) });
      }
      multipleOf(e20, t7) {
        return this._addCheck({ kind: "multipleOf", value: e20, message: i2.toString(t7) });
      }
      finite(e20) {
        return this._addCheck({ kind: "finite", message: i2.toString(e20) });
      }
      safe(e20) {
        return this._addCheck({ kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: i2.toString(e20) })._addCheck({ kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: i2.toString(e20) });
      }
      get minValue() {
        let e20 = null;
        for (const t7 of this._def.checks)
          "min" === t7.kind && (null === e20 || t7.value > e20) && (e20 = t7.value);
        return e20;
      }
      get maxValue() {
        let e20 = null;
        for (const t7 of this._def.checks)
          "max" === t7.kind && (null === e20 || t7.value < e20) && (e20 = t7.value);
        return e20;
      }
      get isInt() {
        return !!this._def.checks.find((t7) => "int" === t7.kind || "multipleOf" === t7.kind && e11.isInteger(t7.value));
      }
      get isFinite() {
        let e20 = null, t7 = null;
        for (const a7 of this._def.checks) {
          if ("finite" === a7.kind || "int" === a7.kind || "multipleOf" === a7.kind)
            return true;
          "min" === a7.kind ? (null === t7 || a7.value > t7) && (t7 = a7.value) : "max" === a7.kind && (null === e20 || a7.value < e20) && (e20 = a7.value);
        }
        return Number.isFinite(t7) && Number.isFinite(e20);
      }
    };
    ZodNumber.create = (e20) => new ZodNumber({ checks: [], typeName: T3.ZodNumber, coerce: (null == e20 ? void 0 : e20.coerce) || false, ...processCreateParams(e20) });
    ZodBigInt = class extends ZodType {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte;
      }
      _parse(t7) {
        this._def.coerce && (t7.data = BigInt(t7.data));
        if (this._getType(t7) !== a5.bigint) {
          const e20 = this._getOrReturnCtx(t7);
          return addIssueToContext(e20, { code: s3.invalid_type, expected: a5.bigint, received: e20.parsedType }), n;
        }
        let r5;
        const i11 = new ParseStatus();
        for (const a7 of this._def.checks)
          if ("min" === a7.kind) {
            (a7.inclusive ? t7.data < a7.value : t7.data <= a7.value) && (r5 = this._getOrReturnCtx(t7, r5), addIssueToContext(r5, { code: s3.too_small, type: "bigint", minimum: a7.value, inclusive: a7.inclusive, message: a7.message }), i11.dirty());
          } else if ("max" === a7.kind) {
            (a7.inclusive ? t7.data > a7.value : t7.data >= a7.value) && (r5 = this._getOrReturnCtx(t7, r5), addIssueToContext(r5, { code: s3.too_big, type: "bigint", maximum: a7.value, inclusive: a7.inclusive, message: a7.message }), i11.dirty());
          } else
            "multipleOf" === a7.kind ? t7.data % a7.value !== BigInt(0) && (r5 = this._getOrReturnCtx(t7, r5), addIssueToContext(r5, { code: s3.not_multiple_of, multipleOf: a7.value, message: a7.message }), i11.dirty()) : e11.assertNever(a7);
        return { status: i11.value, value: t7.data };
      }
      gte(e20, t7) {
        return this.setLimit("min", e20, true, i2.toString(t7));
      }
      gt(e20, t7) {
        return this.setLimit("min", e20, false, i2.toString(t7));
      }
      lte(e20, t7) {
        return this.setLimit("max", e20, true, i2.toString(t7));
      }
      lt(e20, t7) {
        return this.setLimit("max", e20, false, i2.toString(t7));
      }
      setLimit(e20, t7, a7, s8) {
        return new ZodBigInt({ ...this._def, checks: [...this._def.checks, { kind: e20, value: t7, inclusive: a7, message: i2.toString(s8) }] });
      }
      _addCheck(e20) {
        return new ZodBigInt({ ...this._def, checks: [...this._def.checks, e20] });
      }
      positive(e20) {
        return this._addCheck({ kind: "min", value: BigInt(0), inclusive: false, message: i2.toString(e20) });
      }
      negative(e20) {
        return this._addCheck({ kind: "max", value: BigInt(0), inclusive: false, message: i2.toString(e20) });
      }
      nonpositive(e20) {
        return this._addCheck({ kind: "max", value: BigInt(0), inclusive: true, message: i2.toString(e20) });
      }
      nonnegative(e20) {
        return this._addCheck({ kind: "min", value: BigInt(0), inclusive: true, message: i2.toString(e20) });
      }
      multipleOf(e20, t7) {
        return this._addCheck({ kind: "multipleOf", value: e20, message: i2.toString(t7) });
      }
      get minValue() {
        let e20 = null;
        for (const t7 of this._def.checks)
          "min" === t7.kind && (null === e20 || t7.value > e20) && (e20 = t7.value);
        return e20;
      }
      get maxValue() {
        let e20 = null;
        for (const t7 of this._def.checks)
          "max" === t7.kind && (null === e20 || t7.value < e20) && (e20 = t7.value);
        return e20;
      }
    };
    ZodBigInt.create = (e20) => {
      var t7;
      return new ZodBigInt({ checks: [], typeName: T3.ZodBigInt, coerce: null !== (t7 = null == e20 ? void 0 : e20.coerce) && void 0 !== t7 && t7, ...processCreateParams(e20) });
    };
    ZodBoolean = class extends ZodType {
      _parse(e20) {
        this._def.coerce && (e20.data = Boolean(e20.data));
        if (this._getType(e20) !== a5.boolean) {
          const t7 = this._getOrReturnCtx(e20);
          return addIssueToContext(t7, { code: s3.invalid_type, expected: a5.boolean, received: t7.parsedType }), n;
        }
        return OK(e20.data);
      }
    };
    ZodBoolean.create = (e20) => new ZodBoolean({ typeName: T3.ZodBoolean, coerce: (null == e20 ? void 0 : e20.coerce) || false, ...processCreateParams(e20) });
    ZodDate = class extends ZodType {
      _parse(t7) {
        this._def.coerce && (t7.data = new Date(t7.data));
        if (this._getType(t7) !== a5.date) {
          const e20 = this._getOrReturnCtx(t7);
          return addIssueToContext(e20, { code: s3.invalid_type, expected: a5.date, received: e20.parsedType }), n;
        }
        if (isNaN(t7.data.getTime())) {
          return addIssueToContext(this._getOrReturnCtx(t7), { code: s3.invalid_date }), n;
        }
        const r5 = new ParseStatus();
        let i11;
        for (const a7 of this._def.checks)
          "min" === a7.kind ? t7.data.getTime() < a7.value && (i11 = this._getOrReturnCtx(t7, i11), addIssueToContext(i11, { code: s3.too_small, message: a7.message, inclusive: true, exact: false, minimum: a7.value, type: "date" }), r5.dirty()) : "max" === a7.kind ? t7.data.getTime() > a7.value && (i11 = this._getOrReturnCtx(t7, i11), addIssueToContext(i11, { code: s3.too_big, message: a7.message, inclusive: true, exact: false, maximum: a7.value, type: "date" }), r5.dirty()) : e11.assertNever(a7);
        return { status: r5.value, value: new Date(t7.data.getTime()) };
      }
      _addCheck(e20) {
        return new ZodDate({ ...this._def, checks: [...this._def.checks, e20] });
      }
      min(e20, t7) {
        return this._addCheck({ kind: "min", value: e20.getTime(), message: i2.toString(t7) });
      }
      max(e20, t7) {
        return this._addCheck({ kind: "max", value: e20.getTime(), message: i2.toString(t7) });
      }
      get minDate() {
        let e20 = null;
        for (const t7 of this._def.checks)
          "min" === t7.kind && (null === e20 || t7.value > e20) && (e20 = t7.value);
        return null != e20 ? new Date(e20) : null;
      }
      get maxDate() {
        let e20 = null;
        for (const t7 of this._def.checks)
          "max" === t7.kind && (null === e20 || t7.value < e20) && (e20 = t7.value);
        return null != e20 ? new Date(e20) : null;
      }
    };
    ZodDate.create = (e20) => new ZodDate({ checks: [], coerce: (null == e20 ? void 0 : e20.coerce) || false, typeName: T3.ZodDate, ...processCreateParams(e20) });
    ZodSymbol = class extends ZodType {
      _parse(e20) {
        if (this._getType(e20) !== a5.symbol) {
          const t7 = this._getOrReturnCtx(e20);
          return addIssueToContext(t7, { code: s3.invalid_type, expected: a5.symbol, received: t7.parsedType }), n;
        }
        return OK(e20.data);
      }
    };
    ZodSymbol.create = (e20) => new ZodSymbol({ typeName: T3.ZodSymbol, ...processCreateParams(e20) });
    ZodUndefined = class extends ZodType {
      _parse(e20) {
        if (this._getType(e20) !== a5.undefined) {
          const t7 = this._getOrReturnCtx(e20);
          return addIssueToContext(t7, { code: s3.invalid_type, expected: a5.undefined, received: t7.parsedType }), n;
        }
        return OK(e20.data);
      }
    };
    ZodUndefined.create = (e20) => new ZodUndefined({ typeName: T3.ZodUndefined, ...processCreateParams(e20) });
    ZodNull = class extends ZodType {
      _parse(e20) {
        if (this._getType(e20) !== a5.null) {
          const t7 = this._getOrReturnCtx(e20);
          return addIssueToContext(t7, { code: s3.invalid_type, expected: a5.null, received: t7.parsedType }), n;
        }
        return OK(e20.data);
      }
    };
    ZodNull.create = (e20) => new ZodNull({ typeName: T3.ZodNull, ...processCreateParams(e20) });
    ZodAny = class extends ZodType {
      constructor() {
        super(...arguments), this._any = true;
      }
      _parse(e20) {
        return OK(e20.data);
      }
    };
    ZodAny.create = (e20) => new ZodAny({ typeName: T3.ZodAny, ...processCreateParams(e20) });
    ZodUnknown = class extends ZodType {
      constructor() {
        super(...arguments), this._unknown = true;
      }
      _parse(e20) {
        return OK(e20.data);
      }
    };
    ZodUnknown.create = (e20) => new ZodUnknown({ typeName: T3.ZodUnknown, ...processCreateParams(e20) });
    ZodNever = class extends ZodType {
      _parse(e20) {
        const t7 = this._getOrReturnCtx(e20);
        return addIssueToContext(t7, { code: s3.invalid_type, expected: a5.never, received: t7.parsedType }), n;
      }
    };
    ZodNever.create = (e20) => new ZodNever({ typeName: T3.ZodNever, ...processCreateParams(e20) });
    ZodVoid = class extends ZodType {
      _parse(e20) {
        if (this._getType(e20) !== a5.undefined) {
          const t7 = this._getOrReturnCtx(e20);
          return addIssueToContext(t7, { code: s3.invalid_type, expected: a5.void, received: t7.parsedType }), n;
        }
        return OK(e20.data);
      }
    };
    ZodVoid.create = (e20) => new ZodVoid({ typeName: T3.ZodVoid, ...processCreateParams(e20) });
    ZodArray = class extends ZodType {
      _parse(e20) {
        const { ctx: t7, status: r5 } = this._processInputParams(e20), i11 = this._def;
        if (t7.parsedType !== a5.array)
          return addIssueToContext(t7, { code: s3.invalid_type, expected: a5.array, received: t7.parsedType }), n;
        if (null !== i11.exactLength) {
          const e21 = t7.data.length > i11.exactLength.value, a7 = t7.data.length < i11.exactLength.value;
          (e21 || a7) && (addIssueToContext(t7, { code: e21 ? s3.too_big : s3.too_small, minimum: a7 ? i11.exactLength.value : void 0, maximum: e21 ? i11.exactLength.value : void 0, type: "array", inclusive: true, exact: true, message: i11.exactLength.message }), r5.dirty());
        }
        if (null !== i11.minLength && t7.data.length < i11.minLength.value && (addIssueToContext(t7, { code: s3.too_small, minimum: i11.minLength.value, type: "array", inclusive: true, exact: false, message: i11.minLength.message }), r5.dirty()), null !== i11.maxLength && t7.data.length > i11.maxLength.value && (addIssueToContext(t7, { code: s3.too_big, maximum: i11.maxLength.value, type: "array", inclusive: true, exact: false, message: i11.maxLength.message }), r5.dirty()), t7.common.async)
          return Promise.all([...t7.data].map((e21, a7) => i11.type._parseAsync(new ParseInputLazyPath(t7, e21, t7.path, a7)))).then((e21) => ParseStatus.mergeArray(r5, e21));
        const o13 = [...t7.data].map((e21, a7) => i11.type._parseSync(new ParseInputLazyPath(t7, e21, t7.path, a7)));
        return ParseStatus.mergeArray(r5, o13);
      }
      get element() {
        return this._def.type;
      }
      min(e20, t7) {
        return new ZodArray({ ...this._def, minLength: { value: e20, message: i2.toString(t7) } });
      }
      max(e20, t7) {
        return new ZodArray({ ...this._def, maxLength: { value: e20, message: i2.toString(t7) } });
      }
      length(e20, t7) {
        return new ZodArray({ ...this._def, exactLength: { value: e20, message: i2.toString(t7) } });
      }
      nonempty(e20) {
        return this.min(1, e20);
      }
    };
    ZodArray.create = (e20, t7) => new ZodArray({ type: e20, minLength: null, maxLength: null, exactLength: null, typeName: T3.ZodArray, ...processCreateParams(t7) });
    ZodObject = class extends ZodType {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
      }
      _getCached() {
        if (null !== this._cached)
          return this._cached;
        const t7 = this._def.shape(), a7 = e11.objectKeys(t7);
        return this._cached = { shape: t7, keys: a7 };
      }
      _parse(e20) {
        if (this._getType(e20) !== a5.object) {
          const t8 = this._getOrReturnCtx(e20);
          return addIssueToContext(t8, { code: s3.invalid_type, expected: a5.object, received: t8.parsedType }), n;
        }
        const { status: t7, ctx: r5 } = this._processInputParams(e20), { shape: i11, keys: o13 } = this._getCached(), d5 = [];
        if (!(this._def.catchall instanceof ZodNever && "strip" === this._def.unknownKeys))
          for (const e21 in r5.data)
            o13.includes(e21) || d5.push(e21);
        const u5 = [];
        for (const e21 of o13) {
          const t8 = i11[e21], a7 = r5.data[e21];
          u5.push({ key: { status: "valid", value: e21 }, value: t8._parse(new ParseInputLazyPath(r5, a7, r5.path, e21)), alwaysSet: e21 in r5.data });
        }
        if (this._def.catchall instanceof ZodNever) {
          const e21 = this._def.unknownKeys;
          if ("passthrough" === e21)
            for (const e22 of d5)
              u5.push({ key: { status: "valid", value: e22 }, value: { status: "valid", value: r5.data[e22] } });
          else if ("strict" === e21)
            d5.length > 0 && (addIssueToContext(r5, { code: s3.unrecognized_keys, keys: d5 }), t7.dirty());
          else if ("strip" !== e21)
            throw new Error("Internal ZodObject error: invalid unknownKeys value.");
        } else {
          const e21 = this._def.catchall;
          for (const t8 of d5) {
            const a7 = r5.data[t8];
            u5.push({ key: { status: "valid", value: t8 }, value: e21._parse(new ParseInputLazyPath(r5, a7, r5.path, t8)), alwaysSet: t8 in r5.data });
          }
        }
        return r5.common.async ? Promise.resolve().then(async () => {
          const e21 = [];
          for (const t8 of u5) {
            const a7 = await t8.key, s8 = await t8.value;
            e21.push({ key: a7, value: s8, alwaysSet: t8.alwaysSet });
          }
          return e21;
        }).then((e21) => ParseStatus.mergeObjectSync(t7, e21)) : ParseStatus.mergeObjectSync(t7, u5);
      }
      get shape() {
        return this._def.shape();
      }
      strict(e20) {
        return i2.errToObj, new ZodObject({ ...this._def, unknownKeys: "strict", ...void 0 !== e20 ? { errorMap: (t7, a7) => {
          var s8, r5, n4, o13;
          const d5 = null !== (n4 = null === (r5 = (s8 = this._def).errorMap) || void 0 === r5 ? void 0 : r5.call(s8, t7, a7).message) && void 0 !== n4 ? n4 : a7.defaultError;
          return "unrecognized_keys" === t7.code ? { message: null !== (o13 = i2.errToObj(e20).message) && void 0 !== o13 ? o13 : d5 } : { message: d5 };
        } } : {} });
      }
      strip() {
        return new ZodObject({ ...this._def, unknownKeys: "strip" });
      }
      passthrough() {
        return new ZodObject({ ...this._def, unknownKeys: "passthrough" });
      }
      extend(e20) {
        return new ZodObject({ ...this._def, shape: () => ({ ...this._def.shape(), ...e20 }) });
      }
      merge(e20) {
        return new ZodObject({ unknownKeys: e20._def.unknownKeys, catchall: e20._def.catchall, shape: () => ({ ...this._def.shape(), ...e20._def.shape() }), typeName: T3.ZodObject });
      }
      setKey(e20, t7) {
        return this.augment({ [e20]: t7 });
      }
      catchall(e20) {
        return new ZodObject({ ...this._def, catchall: e20 });
      }
      pick(t7) {
        const a7 = {};
        return e11.objectKeys(t7).forEach((e20) => {
          t7[e20] && this.shape[e20] && (a7[e20] = this.shape[e20]);
        }), new ZodObject({ ...this._def, shape: () => a7 });
      }
      omit(t7) {
        const a7 = {};
        return e11.objectKeys(this.shape).forEach((e20) => {
          t7[e20] || (a7[e20] = this.shape[e20]);
        }), new ZodObject({ ...this._def, shape: () => a7 });
      }
      deepPartial() {
        return deepPartialify(this);
      }
      partial(t7) {
        const a7 = {};
        return e11.objectKeys(this.shape).forEach((e20) => {
          const s8 = this.shape[e20];
          t7 && !t7[e20] ? a7[e20] = s8 : a7[e20] = s8.optional();
        }), new ZodObject({ ...this._def, shape: () => a7 });
      }
      required(t7) {
        const a7 = {};
        return e11.objectKeys(this.shape).forEach((e20) => {
          if (t7 && !t7[e20])
            a7[e20] = this.shape[e20];
          else {
            let t8 = this.shape[e20];
            for (; t8 instanceof ZodOptional; )
              t8 = t8._def.innerType;
            a7[e20] = t8;
          }
        }), new ZodObject({ ...this._def, shape: () => a7 });
      }
      keyof() {
        return createZodEnum(e11.objectKeys(this.shape));
      }
    };
    ZodObject.create = (e20, t7) => new ZodObject({ shape: () => e20, unknownKeys: "strip", catchall: ZodNever.create(), typeName: T3.ZodObject, ...processCreateParams(t7) }), ZodObject.strictCreate = (e20, t7) => new ZodObject({ shape: () => e20, unknownKeys: "strict", catchall: ZodNever.create(), typeName: T3.ZodObject, ...processCreateParams(t7) }), ZodObject.lazycreate = (e20, t7) => new ZodObject({ shape: e20, unknownKeys: "strip", catchall: ZodNever.create(), typeName: T3.ZodObject, ...processCreateParams(t7) });
    ZodUnion = class extends ZodType {
      _parse(e20) {
        const { ctx: t7 } = this._processInputParams(e20), a7 = this._def.options;
        if (t7.common.async)
          return Promise.all(a7.map(async (e21) => {
            const a8 = { ...t7, common: { ...t7.common, issues: [] }, parent: null };
            return { result: await e21._parseAsync({ data: t7.data, path: t7.path, parent: a8 }), ctx: a8 };
          })).then(function(e21) {
            for (const t8 of e21)
              if ("valid" === t8.result.status)
                return t8.result;
            for (const a9 of e21)
              if ("dirty" === a9.result.status)
                return t7.common.issues.push(...a9.ctx.common.issues), a9.result;
            const a8 = e21.map((e22) => new ZodError(e22.ctx.common.issues));
            return addIssueToContext(t7, { code: s3.invalid_union, unionErrors: a8 }), n;
          });
        {
          let e21;
          const r5 = [];
          for (const s8 of a7) {
            const a8 = { ...t7, common: { ...t7.common, issues: [] }, parent: null }, n4 = s8._parseSync({ data: t7.data, path: t7.path, parent: a8 });
            if ("valid" === n4.status)
              return n4;
            "dirty" !== n4.status || e21 || (e21 = { result: n4, ctx: a8 }), a8.common.issues.length && r5.push(a8.common.issues);
          }
          if (e21)
            return t7.common.issues.push(...e21.ctx.common.issues), e21.result;
          const i11 = r5.map((e22) => new ZodError(e22));
          return addIssueToContext(t7, { code: s3.invalid_union, unionErrors: i11 }), n;
        }
      }
      get options() {
        return this._def.options;
      }
    };
    ZodUnion.create = (e20, t7) => new ZodUnion({ options: e20, typeName: T3.ZodUnion, ...processCreateParams(t7) });
    getDiscriminator = (t7) => t7 instanceof ZodLazy ? getDiscriminator(t7.schema) : t7 instanceof ZodEffects ? getDiscriminator(t7.innerType()) : t7 instanceof ZodLiteral ? [t7.value] : t7 instanceof ZodEnum ? t7.options : t7 instanceof ZodNativeEnum ? e11.objectValues(t7.enum) : t7 instanceof ZodDefault ? getDiscriminator(t7._def.innerType) : t7 instanceof ZodUndefined ? [void 0] : t7 instanceof ZodNull ? [null] : t7 instanceof ZodOptional ? [void 0, ...getDiscriminator(t7.unwrap())] : t7 instanceof ZodNullable ? [null, ...getDiscriminator(t7.unwrap())] : t7 instanceof ZodBranded || t7 instanceof ZodReadonly ? getDiscriminator(t7.unwrap()) : t7 instanceof ZodCatch ? getDiscriminator(t7._def.innerType) : [];
    ZodDiscriminatedUnion = class extends ZodType {
      _parse(e20) {
        const { ctx: t7 } = this._processInputParams(e20);
        if (t7.parsedType !== a5.object)
          return addIssueToContext(t7, { code: s3.invalid_type, expected: a5.object, received: t7.parsedType }), n;
        const r5 = this.discriminator, i11 = t7.data[r5], o13 = this.optionsMap.get(i11);
        return o13 ? t7.common.async ? o13._parseAsync({ data: t7.data, path: t7.path, parent: t7 }) : o13._parseSync({ data: t7.data, path: t7.path, parent: t7 }) : (addIssueToContext(t7, { code: s3.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [r5] }), n);
      }
      get discriminator() {
        return this._def.discriminator;
      }
      get options() {
        return this._def.options;
      }
      get optionsMap() {
        return this._def.optionsMap;
      }
      static create(e20, t7, a7) {
        const s8 = /* @__PURE__ */ new Map();
        for (const a8 of t7) {
          const t8 = getDiscriminator(a8.shape[e20]);
          if (!t8.length)
            throw new Error(`A discriminator value for key \`${e20}\` could not be extracted from all schema options`);
          for (const r5 of t8) {
            if (s8.has(r5))
              throw new Error(`Discriminator property ${String(e20)} has duplicate value ${String(r5)}`);
            s8.set(r5, a8);
          }
        }
        return new ZodDiscriminatedUnion({ typeName: T3.ZodDiscriminatedUnion, discriminator: e20, options: t7, optionsMap: s8, ...processCreateParams(a7) });
      }
    };
    ZodIntersection = class extends ZodType {
      _parse(e20) {
        const { status: t7, ctx: a7 } = this._processInputParams(e20), handleParsed = (e21, r5) => {
          if (isAborted(e21) || isAborted(r5))
            return n;
          const i11 = mergeValues(e21.value, r5.value);
          return i11.valid ? ((isDirty(e21) || isDirty(r5)) && t7.dirty(), { status: t7.value, value: i11.data }) : (addIssueToContext(a7, { code: s3.invalid_intersection_types }), n);
        };
        return a7.common.async ? Promise.all([this._def.left._parseAsync({ data: a7.data, path: a7.path, parent: a7 }), this._def.right._parseAsync({ data: a7.data, path: a7.path, parent: a7 })]).then(([e21, t8]) => handleParsed(e21, t8)) : handleParsed(this._def.left._parseSync({ data: a7.data, path: a7.path, parent: a7 }), this._def.right._parseSync({ data: a7.data, path: a7.path, parent: a7 }));
      }
    };
    ZodIntersection.create = (e20, t7, a7) => new ZodIntersection({ left: e20, right: t7, typeName: T3.ZodIntersection, ...processCreateParams(a7) });
    ZodTuple = class extends ZodType {
      _parse(e20) {
        const { status: t7, ctx: r5 } = this._processInputParams(e20);
        if (r5.parsedType !== a5.array)
          return addIssueToContext(r5, { code: s3.invalid_type, expected: a5.array, received: r5.parsedType }), n;
        if (r5.data.length < this._def.items.length)
          return addIssueToContext(r5, { code: s3.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), n;
        !this._def.rest && r5.data.length > this._def.items.length && (addIssueToContext(r5, { code: s3.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), t7.dirty());
        const i11 = [...r5.data].map((e21, t8) => {
          const a7 = this._def.items[t8] || this._def.rest;
          return a7 ? a7._parse(new ParseInputLazyPath(r5, e21, r5.path, t8)) : null;
        }).filter((e21) => !!e21);
        return r5.common.async ? Promise.all(i11).then((e21) => ParseStatus.mergeArray(t7, e21)) : ParseStatus.mergeArray(t7, i11);
      }
      get items() {
        return this._def.items;
      }
      rest(e20) {
        return new ZodTuple({ ...this._def, rest: e20 });
      }
    };
    ZodTuple.create = (e20, t7) => {
      if (!Array.isArray(e20))
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new ZodTuple({ items: e20, typeName: T3.ZodTuple, rest: null, ...processCreateParams(t7) });
    };
    ZodRecord = class extends ZodType {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(e20) {
        const { status: t7, ctx: r5 } = this._processInputParams(e20);
        if (r5.parsedType !== a5.object)
          return addIssueToContext(r5, { code: s3.invalid_type, expected: a5.object, received: r5.parsedType }), n;
        const i11 = [], o13 = this._def.keyType, d5 = this._def.valueType;
        for (const e21 in r5.data)
          i11.push({ key: o13._parse(new ParseInputLazyPath(r5, e21, r5.path, e21)), value: d5._parse(new ParseInputLazyPath(r5, r5.data[e21], r5.path, e21)), alwaysSet: e21 in r5.data });
        return r5.common.async ? ParseStatus.mergeObjectAsync(t7, i11) : ParseStatus.mergeObjectSync(t7, i11);
      }
      get element() {
        return this._def.valueType;
      }
      static create(e20, t7, a7) {
        return new ZodRecord(t7 instanceof ZodType ? { keyType: e20, valueType: t7, typeName: T3.ZodRecord, ...processCreateParams(a7) } : { keyType: ZodString.create(), valueType: e20, typeName: T3.ZodRecord, ...processCreateParams(t7) });
      }
    };
    ZodMap = class extends ZodType {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(e20) {
        const { status: t7, ctx: r5 } = this._processInputParams(e20);
        if (r5.parsedType !== a5.map)
          return addIssueToContext(r5, { code: s3.invalid_type, expected: a5.map, received: r5.parsedType }), n;
        const i11 = this._def.keyType, o13 = this._def.valueType, d5 = [...r5.data.entries()].map(([e21, t8], a7) => ({ key: i11._parse(new ParseInputLazyPath(r5, e21, r5.path, [a7, "key"])), value: o13._parse(new ParseInputLazyPath(r5, t8, r5.path, [a7, "value"])) }));
        if (r5.common.async) {
          const e21 = /* @__PURE__ */ new Map();
          return Promise.resolve().then(async () => {
            for (const a7 of d5) {
              const s8 = await a7.key, r6 = await a7.value;
              if ("aborted" === s8.status || "aborted" === r6.status)
                return n;
              "dirty" !== s8.status && "dirty" !== r6.status || t7.dirty(), e21.set(s8.value, r6.value);
            }
            return { status: t7.value, value: e21 };
          });
        }
        {
          const e21 = /* @__PURE__ */ new Map();
          for (const a7 of d5) {
            const s8 = a7.key, r6 = a7.value;
            if ("aborted" === s8.status || "aborted" === r6.status)
              return n;
            "dirty" !== s8.status && "dirty" !== r6.status || t7.dirty(), e21.set(s8.value, r6.value);
          }
          return { status: t7.value, value: e21 };
        }
      }
    };
    ZodMap.create = (e20, t7, a7) => new ZodMap({ valueType: t7, keyType: e20, typeName: T3.ZodMap, ...processCreateParams(a7) });
    ZodSet = class extends ZodType {
      _parse(e20) {
        const { status: t7, ctx: r5 } = this._processInputParams(e20);
        if (r5.parsedType !== a5.set)
          return addIssueToContext(r5, { code: s3.invalid_type, expected: a5.set, received: r5.parsedType }), n;
        const i11 = this._def;
        null !== i11.minSize && r5.data.size < i11.minSize.value && (addIssueToContext(r5, { code: s3.too_small, minimum: i11.minSize.value, type: "set", inclusive: true, exact: false, message: i11.minSize.message }), t7.dirty()), null !== i11.maxSize && r5.data.size > i11.maxSize.value && (addIssueToContext(r5, { code: s3.too_big, maximum: i11.maxSize.value, type: "set", inclusive: true, exact: false, message: i11.maxSize.message }), t7.dirty());
        const o13 = this._def.valueType;
        function finalizeSet(e21) {
          const a7 = /* @__PURE__ */ new Set();
          for (const s8 of e21) {
            if ("aborted" === s8.status)
              return n;
            "dirty" === s8.status && t7.dirty(), a7.add(s8.value);
          }
          return { status: t7.value, value: a7 };
        }
        const d5 = [...r5.data.values()].map((e21, t8) => o13._parse(new ParseInputLazyPath(r5, e21, r5.path, t8)));
        return r5.common.async ? Promise.all(d5).then((e21) => finalizeSet(e21)) : finalizeSet(d5);
      }
      min(e20, t7) {
        return new ZodSet({ ...this._def, minSize: { value: e20, message: i2.toString(t7) } });
      }
      max(e20, t7) {
        return new ZodSet({ ...this._def, maxSize: { value: e20, message: i2.toString(t7) } });
      }
      size(e20, t7) {
        return this.min(e20, t7).max(e20, t7);
      }
      nonempty(e20) {
        return this.min(1, e20);
      }
    };
    ZodSet.create = (e20, t7) => new ZodSet({ valueType: e20, minSize: null, maxSize: null, typeName: T3.ZodSet, ...processCreateParams(t7) });
    ZodFunction = class extends ZodType {
      constructor() {
        super(...arguments), this.validate = this.implement;
      }
      _parse(e20) {
        const { ctx: t7 } = this._processInputParams(e20);
        if (t7.parsedType !== a5.function)
          return addIssueToContext(t7, { code: s3.invalid_type, expected: a5.function, received: t7.parsedType }), n;
        function makeArgsIssue(e21, a7) {
          return makeIssue({ data: e21, path: t7.path, errorMaps: [t7.common.contextualErrorMap, t7.schemaErrorMap, getErrorMap(), errorMap].filter((e22) => !!e22), issueData: { code: s3.invalid_arguments, argumentsError: a7 } });
        }
        function makeReturnsIssue(e21, a7) {
          return makeIssue({ data: e21, path: t7.path, errorMaps: [t7.common.contextualErrorMap, t7.schemaErrorMap, getErrorMap(), errorMap].filter((e22) => !!e22), issueData: { code: s3.invalid_return_type, returnTypeError: a7 } });
        }
        const r5 = { errorMap: t7.common.contextualErrorMap }, i11 = t7.data;
        if (this._def.returns instanceof ZodPromise) {
          const e21 = this;
          return OK(async function(...t8) {
            const a7 = new ZodError([]), s8 = await e21._def.args.parseAsync(t8, r5).catch((e22) => {
              throw a7.addIssue(makeArgsIssue(t8, e22)), a7;
            }), n4 = await Reflect.apply(i11, this, s8);
            return await e21._def.returns._def.type.parseAsync(n4, r5).catch((e22) => {
              throw a7.addIssue(makeReturnsIssue(n4, e22)), a7;
            });
          });
        }
        {
          const e21 = this;
          return OK(function(...t8) {
            const a7 = e21._def.args.safeParse(t8, r5);
            if (!a7.success)
              throw new ZodError([makeArgsIssue(t8, a7.error)]);
            const s8 = Reflect.apply(i11, this, a7.data), n4 = e21._def.returns.safeParse(s8, r5);
            if (!n4.success)
              throw new ZodError([makeReturnsIssue(s8, n4.error)]);
            return n4.data;
          });
        }
      }
      parameters() {
        return this._def.args;
      }
      returnType() {
        return this._def.returns;
      }
      args(...e20) {
        return new ZodFunction({ ...this._def, args: ZodTuple.create(e20).rest(ZodUnknown.create()) });
      }
      returns(e20) {
        return new ZodFunction({ ...this._def, returns: e20 });
      }
      implement(e20) {
        return this.parse(e20);
      }
      strictImplement(e20) {
        return this.parse(e20);
      }
      static create(e20, t7, a7) {
        return new ZodFunction({ args: e20 || ZodTuple.create([]).rest(ZodUnknown.create()), returns: t7 || ZodUnknown.create(), typeName: T3.ZodFunction, ...processCreateParams(a7) });
      }
    };
    ZodLazy = class extends ZodType {
      get schema() {
        return this._def.getter();
      }
      _parse(e20) {
        const { ctx: t7 } = this._processInputParams(e20);
        return this._def.getter()._parse({ data: t7.data, path: t7.path, parent: t7 });
      }
    };
    ZodLazy.create = (e20, t7) => new ZodLazy({ getter: e20, typeName: T3.ZodLazy, ...processCreateParams(t7) });
    ZodLiteral = class extends ZodType {
      _parse(e20) {
        if (e20.data !== this._def.value) {
          const t7 = this._getOrReturnCtx(e20);
          return addIssueToContext(t7, { received: t7.data, code: s3.invalid_literal, expected: this._def.value }), n;
        }
        return { status: "valid", value: e20.data };
      }
      get value() {
        return this._def.value;
      }
    };
    ZodLiteral.create = (e20, t7) => new ZodLiteral({ value: e20, typeName: T3.ZodLiteral, ...processCreateParams(t7) });
    ZodEnum = class extends ZodType {
      constructor() {
        super(...arguments), o3.set(this, void 0);
      }
      _parse(t7) {
        if ("string" != typeof t7.data) {
          const a7 = this._getOrReturnCtx(t7), r5 = this._def.values;
          return addIssueToContext(a7, { expected: e11.joinValues(r5), received: a7.parsedType, code: s3.invalid_type }), n;
        }
        if (__classPrivateFieldGet(this, o3) || __classPrivateFieldSet(this, o3, new Set(this._def.values)), !__classPrivateFieldGet(this, o3).has(t7.data)) {
          const e20 = this._getOrReturnCtx(t7), a7 = this._def.values;
          return addIssueToContext(e20, { received: e20.data, code: s3.invalid_enum_value, options: a7 }), n;
        }
        return OK(t7.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        const e20 = {};
        for (const t7 of this._def.values)
          e20[t7] = t7;
        return e20;
      }
      get Values() {
        const e20 = {};
        for (const t7 of this._def.values)
          e20[t7] = t7;
        return e20;
      }
      get Enum() {
        const e20 = {};
        for (const t7 of this._def.values)
          e20[t7] = t7;
        return e20;
      }
      extract(e20, t7 = this._def) {
        return ZodEnum.create(e20, { ...this._def, ...t7 });
      }
      exclude(e20, t7 = this._def) {
        return ZodEnum.create(this.options.filter((t8) => !e20.includes(t8)), { ...this._def, ...t7 });
      }
    };
    o3 = /* @__PURE__ */ new WeakMap(), ZodEnum.create = createZodEnum;
    ZodNativeEnum = class extends ZodType {
      constructor() {
        super(...arguments), d2.set(this, void 0);
      }
      _parse(t7) {
        const r5 = e11.getValidEnumValues(this._def.values), i11 = this._getOrReturnCtx(t7);
        if (i11.parsedType !== a5.string && i11.parsedType !== a5.number) {
          const t8 = e11.objectValues(r5);
          return addIssueToContext(i11, { expected: e11.joinValues(t8), received: i11.parsedType, code: s3.invalid_type }), n;
        }
        if (__classPrivateFieldGet(this, d2) || __classPrivateFieldSet(this, d2, new Set(e11.getValidEnumValues(this._def.values))), !__classPrivateFieldGet(this, d2).has(t7.data)) {
          const t8 = e11.objectValues(r5);
          return addIssueToContext(i11, { received: i11.data, code: s3.invalid_enum_value, options: t8 }), n;
        }
        return OK(t7.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    d2 = /* @__PURE__ */ new WeakMap(), ZodNativeEnum.create = (e20, t7) => new ZodNativeEnum({ values: e20, typeName: T3.ZodNativeEnum, ...processCreateParams(t7) });
    ZodPromise = class extends ZodType {
      unwrap() {
        return this._def.type;
      }
      _parse(e20) {
        const { ctx: t7 } = this._processInputParams(e20);
        if (t7.parsedType !== a5.promise && false === t7.common.async)
          return addIssueToContext(t7, { code: s3.invalid_type, expected: a5.promise, received: t7.parsedType }), n;
        const r5 = t7.parsedType === a5.promise ? t7.data : Promise.resolve(t7.data);
        return OK(r5.then((e21) => this._def.type.parseAsync(e21, { path: t7.path, errorMap: t7.common.contextualErrorMap })));
      }
    };
    ZodPromise.create = (e20, t7) => new ZodPromise({ type: e20, typeName: T3.ZodPromise, ...processCreateParams(t7) });
    ZodEffects = class extends ZodType {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === T3.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
      _parse(t7) {
        const { status: a7, ctx: s8 } = this._processInputParams(t7), r5 = this._def.effect || null, i11 = { addIssue: (e20) => {
          addIssueToContext(s8, e20), e20.fatal ? a7.abort() : a7.dirty();
        }, get path() {
          return s8.path;
        } };
        if (i11.addIssue = i11.addIssue.bind(i11), "preprocess" === r5.type) {
          const e20 = r5.transform(s8.data, i11);
          if (s8.common.async)
            return Promise.resolve(e20).then(async (e21) => {
              if ("aborted" === a7.value)
                return n;
              const t8 = await this._def.schema._parseAsync({ data: e21, path: s8.path, parent: s8 });
              return "aborted" === t8.status ? n : "dirty" === t8.status || "dirty" === a7.value ? DIRTY(t8.value) : t8;
            });
          {
            if ("aborted" === a7.value)
              return n;
            const t8 = this._def.schema._parseSync({ data: e20, path: s8.path, parent: s8 });
            return "aborted" === t8.status ? n : "dirty" === t8.status || "dirty" === a7.value ? DIRTY(t8.value) : t8;
          }
        }
        if ("refinement" === r5.type) {
          const executeRefinement = (e20) => {
            const t8 = r5.refinement(e20, i11);
            if (s8.common.async)
              return Promise.resolve(t8);
            if (t8 instanceof Promise)
              throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return e20;
          };
          if (false === s8.common.async) {
            const e20 = this._def.schema._parseSync({ data: s8.data, path: s8.path, parent: s8 });
            return "aborted" === e20.status ? n : ("dirty" === e20.status && a7.dirty(), executeRefinement(e20.value), { status: a7.value, value: e20.value });
          }
          return this._def.schema._parseAsync({ data: s8.data, path: s8.path, parent: s8 }).then((e20) => "aborted" === e20.status ? n : ("dirty" === e20.status && a7.dirty(), executeRefinement(e20.value).then(() => ({ status: a7.value, value: e20.value }))));
        }
        if ("transform" === r5.type) {
          if (false === s8.common.async) {
            const e20 = this._def.schema._parseSync({ data: s8.data, path: s8.path, parent: s8 });
            if (!isValid(e20))
              return e20;
            const t8 = r5.transform(e20.value, i11);
            if (t8 instanceof Promise)
              throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return { status: a7.value, value: t8 };
          }
          return this._def.schema._parseAsync({ data: s8.data, path: s8.path, parent: s8 }).then((e20) => isValid(e20) ? Promise.resolve(r5.transform(e20.value, i11)).then((e21) => ({ status: a7.value, value: e21 })) : e20);
        }
        e11.assertNever(r5);
      }
    };
    ZodEffects.create = (e20, t7, a7) => new ZodEffects({ schema: e20, typeName: T3.ZodEffects, effect: t7, ...processCreateParams(a7) }), ZodEffects.createWithPreprocess = (e20, t7, a7) => new ZodEffects({ schema: t7, effect: { type: "preprocess", transform: e20 }, typeName: T3.ZodEffects, ...processCreateParams(a7) });
    ZodOptional = class extends ZodType {
      _parse(e20) {
        return this._getType(e20) === a5.undefined ? OK(void 0) : this._def.innerType._parse(e20);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodOptional.create = (e20, t7) => new ZodOptional({ innerType: e20, typeName: T3.ZodOptional, ...processCreateParams(t7) });
    ZodNullable = class extends ZodType {
      _parse(e20) {
        return this._getType(e20) === a5.null ? OK(null) : this._def.innerType._parse(e20);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodNullable.create = (e20, t7) => new ZodNullable({ innerType: e20, typeName: T3.ZodNullable, ...processCreateParams(t7) });
    ZodDefault = class extends ZodType {
      _parse(e20) {
        const { ctx: t7 } = this._processInputParams(e20);
        let s8 = t7.data;
        return t7.parsedType === a5.undefined && (s8 = this._def.defaultValue()), this._def.innerType._parse({ data: s8, path: t7.path, parent: t7 });
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    ZodDefault.create = (e20, t7) => new ZodDefault({ innerType: e20, typeName: T3.ZodDefault, defaultValue: "function" == typeof t7.default ? t7.default : () => t7.default, ...processCreateParams(t7) });
    ZodCatch = class extends ZodType {
      _parse(e20) {
        const { ctx: t7 } = this._processInputParams(e20), a7 = { ...t7, common: { ...t7.common, issues: [] } }, s8 = this._def.innerType._parse({ data: a7.data, path: a7.path, parent: { ...a7 } });
        return isAsync(s8) ? s8.then((e21) => ({ status: "valid", value: "valid" === e21.status ? e21.value : this._def.catchValue({ get error() {
          return new ZodError(a7.common.issues);
        }, input: a7.data }) })) : { status: "valid", value: "valid" === s8.status ? s8.value : this._def.catchValue({ get error() {
          return new ZodError(a7.common.issues);
        }, input: a7.data }) };
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    ZodCatch.create = (e20, t7) => new ZodCatch({ innerType: e20, typeName: T3.ZodCatch, catchValue: "function" == typeof t7.catch ? t7.catch : () => t7.catch, ...processCreateParams(t7) });
    ZodNaN = class extends ZodType {
      _parse(e20) {
        if (this._getType(e20) !== a5.nan) {
          const t7 = this._getOrReturnCtx(e20);
          return addIssueToContext(t7, { code: s3.invalid_type, expected: a5.nan, received: t7.parsedType }), n;
        }
        return { status: "valid", value: e20.data };
      }
    };
    ZodNaN.create = (e20) => new ZodNaN({ typeName: T3.ZodNaN, ...processCreateParams(e20) });
    b2 = Symbol("zod_brand");
    ZodBranded = class extends ZodType {
      _parse(e20) {
        const { ctx: t7 } = this._processInputParams(e20), a7 = t7.data;
        return this._def.type._parse({ data: a7, path: t7.path, parent: t7 });
      }
      unwrap() {
        return this._def.type;
      }
    };
    ZodPipeline = class extends ZodType {
      _parse(e20) {
        const { status: t7, ctx: a7 } = this._processInputParams(e20);
        if (a7.common.async) {
          return (async () => {
            const e21 = await this._def.in._parseAsync({ data: a7.data, path: a7.path, parent: a7 });
            return "aborted" === e21.status ? n : "dirty" === e21.status ? (t7.dirty(), DIRTY(e21.value)) : this._def.out._parseAsync({ data: e21.value, path: a7.path, parent: a7 });
          })();
        }
        {
          const e21 = this._def.in._parseSync({ data: a7.data, path: a7.path, parent: a7 });
          return "aborted" === e21.status ? n : "dirty" === e21.status ? (t7.dirty(), { status: "dirty", value: e21.value }) : this._def.out._parseSync({ data: e21.value, path: a7.path, parent: a7 });
        }
      }
      static create(e20, t7) {
        return new ZodPipeline({ in: e20, out: t7, typeName: T3.ZodPipeline });
      }
    };
    ZodReadonly = class extends ZodType {
      _parse(e20) {
        const t7 = this._def.innerType._parse(e20), freeze = (e21) => (isValid(e21) && (e21.value = Object.freeze(e21.value)), e21);
        return isAsync(t7) ? t7.then((e21) => freeze(e21)) : freeze(t7);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodReadonly.create = (e20, t7) => new ZodReadonly({ innerType: e20, typeName: T3.ZodReadonly, ...processCreateParams(t7) });
    k3 = { object: ZodObject.lazycreate };
    !function(e20) {
      e20.ZodString = "ZodString", e20.ZodNumber = "ZodNumber", e20.ZodNaN = "ZodNaN", e20.ZodBigInt = "ZodBigInt", e20.ZodBoolean = "ZodBoolean", e20.ZodDate = "ZodDate", e20.ZodSymbol = "ZodSymbol", e20.ZodUndefined = "ZodUndefined", e20.ZodNull = "ZodNull", e20.ZodAny = "ZodAny", e20.ZodUnknown = "ZodUnknown", e20.ZodNever = "ZodNever", e20.ZodVoid = "ZodVoid", e20.ZodArray = "ZodArray", e20.ZodObject = "ZodObject", e20.ZodUnion = "ZodUnion", e20.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e20.ZodIntersection = "ZodIntersection", e20.ZodTuple = "ZodTuple", e20.ZodRecord = "ZodRecord", e20.ZodMap = "ZodMap", e20.ZodSet = "ZodSet", e20.ZodFunction = "ZodFunction", e20.ZodLazy = "ZodLazy", e20.ZodLiteral = "ZodLiteral", e20.ZodEnum = "ZodEnum", e20.ZodEffects = "ZodEffects", e20.ZodNativeEnum = "ZodNativeEnum", e20.ZodOptional = "ZodOptional", e20.ZodNullable = "ZodNullable", e20.ZodDefault = "ZodDefault", e20.ZodCatch = "ZodCatch", e20.ZodPromise = "ZodPromise", e20.ZodBranded = "ZodBranded", e20.ZodPipeline = "ZodPipeline", e20.ZodReadonly = "ZodReadonly";
    }(T3 || (T3 = {}));
    C3 = ZodString.create;
    w2 = ZodNumber.create;
    I3 = ZodNaN.create;
    P3 = ZodBigInt.create;
    N2 = ZodBoolean.create;
    S3 = ZodDate.create;
    O2 = ZodSymbol.create;
    E2 = ZodUndefined.create;
    j4 = ZodNull.create;
    R3 = ZodAny.create;
    A3 = ZodUnknown.create;
    L2 = ZodNever.create;
    M2 = ZodVoid.create;
    $3 = ZodArray.create;
    D2 = ZodObject.create;
    z2 = ZodObject.strictCreate;
    U3 = ZodUnion.create;
    V2 = ZodDiscriminatedUnion.create;
    B2 = ZodIntersection.create;
    F3 = ZodTuple.create;
    K2 = ZodRecord.create;
    W2 = ZodMap.create;
    q4 = ZodSet.create;
    G2 = ZodFunction.create;
    J2 = ZodLazy.create;
    Y3 = ZodLiteral.create;
    H2 = ZodEnum.create;
    X3 = ZodNativeEnum.create;
    Q2 = ZodPromise.create;
    ee3 = ZodEffects.create;
    te3 = ZodOptional.create;
    ae3 = ZodNullable.create;
    se3 = ZodEffects.createWithPreprocess;
    re4 = ZodPipeline.create;
    ne3 = { string: (e20) => ZodString.create({ ...e20, coerce: true }), number: (e20) => ZodNumber.create({ ...e20, coerce: true }), boolean: (e20) => ZodBoolean.create({ ...e20, coerce: true }), bigint: (e20) => ZodBigInt.create({ ...e20, coerce: true }), date: (e20) => ZodDate.create({ ...e20, coerce: true }) };
    ie3 = n;
    oe3 = Object.freeze({ __proto__: null, defaultErrorMap: errorMap, setErrorMap: function(e20) {
      r = e20;
    }, getErrorMap, makeIssue, EMPTY_PATH: [], addIssueToContext, ParseStatus, INVALID: n, DIRTY, OK, isAborted, isDirty, isValid, isAsync, get util() {
      return e11;
    }, get objectUtil() {
      return t3;
    }, ZodParsedType: a5, getParsedType, ZodType, datetimeRegex, ZodString, ZodNumber, ZodBigInt, ZodBoolean, ZodDate, ZodSymbol, ZodUndefined, ZodNull, ZodAny, ZodUnknown, ZodNever, ZodVoid, ZodArray, ZodObject, ZodUnion, ZodDiscriminatedUnion, ZodIntersection, ZodTuple, ZodRecord, ZodMap, ZodSet, ZodFunction, ZodLazy, ZodLiteral, ZodEnum, ZodNativeEnum, ZodPromise, ZodEffects, ZodTransformer: ZodEffects, ZodOptional, ZodNullable, ZodDefault, ZodCatch, ZodNaN, BRAND: b2, ZodBranded, ZodPipeline, ZodReadonly, custom, Schema: ZodType, ZodSchema: ZodType, late: k3, get ZodFirstPartyTypeKind() {
      return T3;
    }, coerce: ne3, any: R3, array: $3, bigint: P3, boolean: N2, date: S3, discriminatedUnion: V2, effect: ee3, enum: H2, function: G2, instanceof: (e20, t7 = { message: `Input not instance of ${e20.name}` }) => custom((t8) => t8 instanceof e20, t7), intersection: B2, lazy: J2, literal: Y3, map: W2, nan: I3, nativeEnum: X3, never: L2, null: j4, nullable: ae3, number: w2, object: D2, oboolean: () => N2().optional(), onumber: () => w2().optional(), optional: te3, ostring: () => C3().optional(), pipeline: re4, preprocess: se3, promise: Q2, record: K2, set: q4, strictObject: z2, string: C3, symbol: O2, transformer: ee3, tuple: F3, undefined: E2, union: U3, unknown: A3, void: M2, NEVER: ie3, ZodIssueCode: s3, quotelessJson: (e20) => JSON.stringify(e20, null, 2).replace(/"([^"]+)":/g, "$1:"), ZodError });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/_/blob.mjs
function Mime$1() {
  this._types = /* @__PURE__ */ Object.create(null), this._extensions = /* @__PURE__ */ Object.create(null);
  for (let a7 = 0; a7 < arguments.length; a7++)
    this.define(arguments[a7]);
  this.define = this.define.bind(this), this.getType = this.getType.bind(this), this.getExtension = this.getExtension.bind(this);
}
function normalizeWindowsPath(a7 = "") {
  return a7 ? a7.replace(/\\/g, "/").replace(w3, (a8) => a8.toUpperCase()) : a7;
}
async function streamToArrayBuffer(a7, i11) {
  const p4 = new Uint8Array(i11);
  let t7 = 0;
  const n4 = a7.getReader();
  for (; ; ) {
    const { done: a8, value: i12 } = await n4.read();
    if (a8)
      break;
    p4.set(i12, t7), t7 += i12.length;
  }
  return p4;
}
function getBlobBinding(a7 = "BLOB") {
  return R4.env[a7] || globalThis.__env__?.[a7] || globalThis[a7];
}
function hubBlob() {
  requireNuxtHubFeature("blob");
  const n4 = useRuntimeConfig2().hub, o13 = getBlobBinding();
  if (n4.remote && n4.projectUrl && !o13)
    return function(i11, n5) {
      requireNuxtHubFeature("blob");
      const o14 = Ne3.create({ baseURL: joinURL(i11, "/api/_hub/blob"), headers: { Authorization: `Bearer ${n5}` } }), e20 = { list: async (a7 = { limit: 1e3 }) => o14("/", { method: "GET", query: a7 }), serve: async (a7, i12) => o14(decodeURI(i12), { method: "GET" }), async put(a7, i12, p4 = {}) {
        const { contentType: t7, contentLength: n6, ...e21 } = p4, l4 = {};
        return t7 && (l4["content-type"] = t7), n6 && (l4["content-length"] = n6), await o14(decodeURI(a7), { method: "PUT", headers: l4, body: i12, query: e21 });
      }, head: async (a7) => await o14(`/head/${decodeURI(a7)}`, { method: "GET" }), async del(a7) {
        Array.isArray(a7) ? await o14("/delete", { method: "POST", body: { pathnames: a7.map((a8) => decodeURI(a8)) } }) : await o14(decodeURI(a7), { method: "DELETE" });
      }, createMultipartUpload: async (a7, i12 = {}) => await o14(`/multipart/${decodeURI(a7)}`, { method: "POST", body: i12 }), resumeMultipartUpload: (a7, i12) => ({ pathname: a7, uploadId: i12, uploadPart: async (p4, t7) => await o14(`/multipart/${decodeURI(a7)}`, { method: "PUT", query: { uploadId: i12, partNumber: p4 }, body: t7 }), async abort() {
        await o14(`/multipart/${decodeURI(a7)}`, { method: "DELETE", query: { uploadId: i12 } });
      }, complete: async (p4) => await o14("/multipart/complete", { method: "POST", query: { pathname: a7, uploadId: i12 }, body: { parts: p4 } }) }), handleUpload: async (a7, i12 = {}) => await o14("/", { method: "POST", body: await readFormData(a7), query: i12 }) };
      return { ...e20, delete: e20.del, handleMultipartUpload: createMultipartUploadHandler(e20) };
    }(n4.projectUrl, n4.projectSecretKey || n4.userToken);
  const m10 = function(a7 = "BLOB") {
    if (z3[a7])
      return z3[a7];
    const i11 = getBlobBinding(a7);
    if (i11)
      return z3[a7] = i11, z3[a7];
    throw createError$1(`Missing Cloudflare ${a7} binding (R2)`);
  }(), r5 = { async list(a7) {
    const i11 = re(a7, { limit: 1e3, include: ["httpMetadata", "customMetadata"], delimiter: a7?.folded ? "/" : void 0 }), p4 = await m10.list(i11), t7 = p4.truncated, n5 = p4.truncated ? p4.cursor : void 0;
    return { blobs: p4.objects.map(mapR2ObjectToBlob), hasMore: t7, cursor: n5, folders: i11.delimiter ? p4.delimitedPrefixes : void 0 };
  }, async serve(a7, i11) {
    const p4 = await m10.get(decodeURI(i11));
    if (!p4)
      throw createError$1({ message: "File not found", statusCode: 404 });
    return ve3(a7, "Content-Type", p4.httpMetadata?.contentType || getContentType(i11)), ve3(a7, "Content-Length", p4.size), ve3(a7, "etag", p4.httpEtag), p4.body;
  }, async put(a7, i11, p4 = {}) {
    a7 = decodeURI(a7);
    const { contentType: n5, contentLength: o14, addRandomSuffix: e20, prefix: l4, ...c5 } = p4, s8 = n5 || i11.type || getContentType(a7), { dir: d5, ext: r6, name: x4 } = parse(a7);
    a7 = joinURL("." === d5 ? "" : d5, e20 ? `${x4}-${randomUUID().split("-")[0]}${r6}` : `${x4}${r6}`), l4 && (a7 = joinURL(l4, a7).replace(/\/+/g, "/").replace(/^\/+/, ""));
    const v4 = { contentType: s8 };
    o14 && (v4.contentLength = o14);
    return mapR2ObjectToBlob(await m10.put(a7, i11, { httpMetadata: v4, customMetadata: c5 }));
  }, async head(a7) {
    const i11 = await m10.head(decodeURI(a7));
    if (!i11)
      throw createError$1({ message: "Blob not found", statusCode: 404 });
    return mapR2ObjectToBlob(i11);
  }, del: async (a7) => Array.isArray(a7) ? await m10.delete(a7.map((a8) => decodeURI(a8))) : await m10.delete(decodeURI(a7)), async createMultipartUpload(a7, i11 = {}) {
    a7 = decodeURI(a7);
    const { contentType: p4, contentLength: n5, addRandomSuffix: o14, prefix: e20, ...l4 } = i11, c5 = p4 || getContentType(a7), { dir: s8, ext: d5, name: r6 } = parse(a7);
    a7 = joinURL("." === s8 ? "" : s8, o14 ? `${r6}-${randomUUID().split("-")[0]}${d5}` : `${r6}${d5}`), e20 && (a7 = joinURL(e20, a7).replace(/\/+/g, "/").replace(/^\/+/, ""));
    const x4 = { contentType: c5 };
    n5 && (x4.contentLength = n5);
    return mapR2MpuToBlobMpu(await m10.createMultipartUpload(a7, { httpMetadata: x4, customMetadata: l4 }));
  }, resumeMultipartUpload: (a7, i11) => mapR2MpuToBlobMpu(m10.resumeMultipartUpload(a7, i11)), async handleUpload(a7, i11 = {}) {
    assertMethod(a7, ["POST", "PUT", "PATCH"]), i11 = re(i11, { formKey: "files", multiple: true });
    const { formKey: p4, multiple: t7, ...n5 } = i11, { maxSize: o14, types: c5, ...m11 } = n5, x4 = (await readFormData(a7)).getAll(p4 || "files");
    if (!x4)
      throw createError$1({ statusCode: 400, message: "Missing files" });
    if (!t7 && x4.length > 1)
      throw createError$1({ statusCode: 400, message: "Multiple files are not allowed" });
    const v4 = [];
    try {
      if (i11.maxSize || i11.types?.length)
        for (const a8 of x4)
          ensureBlob(a8, { maxSize: o14, types: c5 });
      for (const a8 of x4) {
        const i12 = await r5.put(a8.name, a8, m11);
        v4.push(i12);
      }
    } catch (a8) {
      throw createError$1({ statusCode: 500, message: `Storage error: ${a8.message}` });
    }
    return v4;
  } };
  return { ...r5, delete: r5.del, handleMultipartUpload: createMultipartUploadHandler(r5) };
}
function createMultipartUploadHandler(a7) {
  const { createMultipartUpload: i11, resumeMultipartUpload: p4 } = a7, createHandler = async (a8, p5) => {
    const { pathname: t7 } = await getValidatedRouterParams(a8, oe3.object({ pathname: oe3.string().min(1) }).parse);
    try {
      const a9 = await i11(t7, p5);
      return { uploadId: a9.uploadId, pathname: a9.pathname };
    } catch (a9) {
      throw createError$1({ statusCode: 400, message: a9.message });
    }
  }, uploadHandler = async (a8) => {
    const { pathname: i12 } = await getValidatedRouterParams(a8, oe3.object({ pathname: oe3.string().min(1) }).parse), { uploadId: t7, partNumber: n4 } = await getValidatedQuery(a8, oe3.object({ uploadId: oe3.string(), partNumber: oe3.coerce.number() }).parse), o13 = Number(de3(a8, "content-length") || "0"), l4 = getRequestWebStream(a8), c5 = await streamToArrayBuffer(l4, o13), s8 = p4(i12, t7);
    try {
      return await s8.uploadPart(n4, c5);
    } catch (a9) {
      throw createError$1({ status: 400, message: a9.message });
    }
  }, completeHandler = async (a8) => {
    const { pathname: i12 } = await getValidatedRouterParams(a8, oe3.object({ pathname: oe3.string().min(1) }).parse), { uploadId: t7 } = await getValidatedQuery(a8, oe3.object({ uploadId: oe3.string().min(1) }).parse), { parts: n4 } = await readValidatedBody(a8, oe3.object({ parts: oe3.array(oe3.object({ partNumber: oe3.number(), etag: oe3.string() })) }).parse), o13 = p4(i12, t7);
    try {
      return await o13.complete(n4);
    } catch (a9) {
      throw createError$1({ status: 400, message: a9.message });
    }
  }, abortHandler = async (a8) => {
    const { pathname: i12 } = await getValidatedRouterParams(a8, oe3.object({ pathname: oe3.string().min(1) }).parse), { uploadId: t7 } = await getValidatedQuery(a8, oe3.object({ uploadId: oe3.string().min(1) }).parse), n4 = p4(i12, t7);
    try {
      await n4.abort();
    } catch (a9) {
      throw createError$1({ status: 400, message: a9.message });
    }
  };
  return async (a8, i12) => {
    const p5 = await (async (a9, i13) => {
      const p6 = a9.method, { action: t7 } = await getValidatedRouterParams(a9, oe3.object({ action: oe3.enum(["create", "upload", "complete", "abort"]) }).parse);
      if ("create" === t7 && "POST" === p6)
        return { action: t7, data: await createHandler(a9, i13) };
      if ("upload" === t7 && "PUT" === p6)
        return { action: t7, data: await uploadHandler(a9) };
      if ("complete" === t7 && "POST" === p6)
        return { action: t7, data: await completeHandler(a9) };
      if ("abort" === t7 && "DELETE" === p6)
        return { action: t7, data: await abortHandler(a9) };
      throw createError$1({ status: 405 });
    })(a8, i12);
    return p5.data ? a8.respondWith(Response.json(p5.data)) : sendNoContent(a8), p5;
  };
}
function getContentType(a7) {
  return a7 && h3.getType(a7) || "application/octet-stream";
}
function mapR2ObjectToBlob(a7) {
  return { pathname: a7.key, contentType: a7.httpMetadata?.contentType, size: a7.size, uploadedAt: a7.uploaded, customMetadata: a7.customMetadata || {} };
}
function mapR2MpuToBlobMpu(a7) {
  return { pathname: a7.key, uploadId: a7.uploadId, uploadPart: async (i11, p4) => await a7.uploadPart(i11, p4), abort: a7.abort, complete: async (i11) => mapR2ObjectToBlob(await a7.complete(i11)) };
}
function ensureBlob(i11, p4) {
  if (requireNuxtHubFeature("blob"), !p4.maxSize && !p4.types?.length)
    throw createError$1({ statusCode: 400, message: "ensureBlob() requires at least one of maxSize or types to be set." });
  if (p4.maxSize) {
    const a7 = function(a8) {
      const i12 = new RegExp(`^(\\d+)(\\.\\d+)?\\s*(${q5.join("|")})$`, "i"), p5 = a8.match(i12);
      if (!p5)
        throw createError$1({ statusCode: 400, message: `Invalid file size format: ${a8}` });
      const t8 = Number.parseFloat(p5[1]), n4 = p5[3].toUpperCase();
      if (!q5.includes(n4))
        throw createError$1({ statusCode: 400, message: `Invalid file size unit: ${n4}` });
      const o13 = t8 * Math.pow(1024, q5.indexOf(n4));
      return Math.floor(o13);
    }(p4.maxSize);
    if (i11.size > a7)
      throw createError$1({ statusCode: 400, message: `File size must be less than ${p4.maxSize}` });
  }
  const t7 = i11.type.split("/")[0];
  if (p4.types?.length && !p4.types.includes(i11.type) && !p4.types.includes(t7))
    throw createError$1({ statusCode: 400, message: `File type is invalid, must be: ${p4.types.join(", ")}` });
}
var b3, randomUUID, h3, noop2, w3, y3, k4, j5, dirname, parse, z3, q5;
var init_blob = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/_/blob.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_commonjsHelpers();
    init__();
    b3 = globalThis.crypto;
    randomUUID = () => b3.randomUUID();
    Mime$1.prototype.define = function(a7, i11) {
      for (let p4 in a7) {
        let t7 = a7[p4].map(function(a8) {
          return a8.toLowerCase();
        });
        p4 = p4.toLowerCase();
        for (let a8 = 0; a8 < t7.length; a8++) {
          const n4 = t7[a8];
          if ("*" !== n4[0]) {
            if (!i11 && n4 in this._types)
              throw new Error('Attempt to change mapping for "' + n4 + '" extension from "' + this._types[n4] + '" to "' + p4 + '". Pass `force=true` to allow this, otherwise remove "' + n4 + '" from the list of extensions for "' + p4 + '".');
            this._types[n4] = p4;
          }
        }
        if (i11 || !this._extensions[p4]) {
          const a8 = t7[0];
          this._extensions[p4] = "*" !== a8[0] ? a8 : a8.substr(1);
        }
      }
    }, Mime$1.prototype.getType = function(a7) {
      let i11 = (a7 = String(a7)).replace(/^.*[/\\]/, "").toLowerCase(), p4 = i11.replace(/^.*\./, "").toLowerCase(), t7 = i11.length < a7.length;
      return (p4.length < i11.length - 1 || !t7) && this._types[p4] || null;
    }, Mime$1.prototype.getExtension = function(a7) {
      return (a7 = /^\s*([^;\s]*)/.test(a7) && RegExp.$1) && this._extensions[a7.toLowerCase()] || null;
    };
    h3 = { ...getDefaultExportFromCjs(new Mime$1({ "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] }, { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] })) };
    h3.lookup = h3.getType, h3.extension = h3.getExtension;
    noop2 = () => {
    };
    h3.define = noop2, h3.load = noop2, h3.default_type = "application/octet-stream", h3.charsets = { lookup: () => "UTF-8" };
    w3 = /^[A-Za-z]:\//;
    y3 = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
    k4 = /^[A-Za-z]:$/;
    j5 = /.(\.[^./]+)$/;
    dirname = function(a7) {
      const i11 = normalizeWindowsPath(a7).replace(/\/$/, "").split("/").slice(0, -1);
      return 1 === i11.length && k4.test(i11[0]) && (i11[0] += "/"), i11.join("/") || (function(a8) {
        return y3.test(a8);
      }(a7) ? "/" : ".");
    };
    parse = function(a7) {
      const i11 = normalizeWindowsPath(a7).split("/").shift() || "/", p4 = function(a8, i12) {
        const p5 = normalizeWindowsPath(a8).split("/").pop();
        return i12 && p5.endsWith(i12) ? p5.slice(0, -i12.length) : p5;
      }(a7), t7 = function(a8) {
        const i12 = j5.exec(normalizeWindowsPath(a8));
        return i12 && i12[1] || "";
      }(p4);
      return { root: i11, dir: dirname(a7), base: p4, ext: t7, name: p4.slice(0, p4.length - t7.length) };
    };
    z3 = {};
    q5 = ["B", "KB", "MB", "GB"];
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/images/_pathname_.delete.mjs
var pathname_delete_exports = {};
__export(pathname_delete_exports, {
  default: () => e12
});
var e12;
var init_pathname_delete = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/images/_pathname_.delete.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_blob();
    init_commonjsHelpers();
    init__();
    e12 = xe2(async (m10) => {
      const { pathname: e20 } = m10.context.params || {};
      return hubBlob().delete(e20);
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/index.get.mjs
var index_get_exports = {};
__export(index_get_exports, {
  default: () => o4
});
var o4;
var init_index_get = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/index.get.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_blob();
    init_commonjsHelpers();
    init__();
    o4 = xe2(async () => {
      const { blobs: s8 } = await hubBlob().list();
      return s8;
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/images/upload.post.mjs
var upload_post_exports = {};
__export(upload_post_exports, {
  default: () => o5
});
var o5;
var init_upload_post = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/images/upload.post.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_blob();
    init_commonjsHelpers();
    init__();
    o5 = xe2(async (m10) => hubBlob().handleUpload(m10, { multiple: false, maxSize: "8MB", types: ["image/png", "image/jpeg"] }));
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/_/database.mjs
function hubDatabase() {
  if (requireNuxtHubFeature("database"), n2)
    return n2;
  const c5 = useRuntimeConfig2().hub, d5 = R4.env.DB || globalThis.__env__?.DB || globalThis.DB;
  if (c5.remote && c5.projectUrl && !d5)
    return n2 = function(a7, e20) {
      requireNuxtHubFeature("database");
      const t7 = Ne3.create({ baseURL: joinURL(a7, "/api/_hub/database"), method: "POST", headers: { Authorization: `Bearer ${e20}` } });
      return { exec: async (r5) => t7("/exec", { body: { query: r5 } }).catch(handleProxyError), dump: async () => t7("/dump").catch(handleProxyError), prepare(r5) {
        const a8 = { _body: { query: r5, params: [] }, bind: (...e21) => ({ ...a8, _body: { query: r5, params: e21 } }), async all() {
          return t7("/all", { body: this._body }).catch(handleProxyError);
        }, async raw(r6) {
          return t7("/raw", { body: { ...this._body, ...r6 } }).catch(handleProxyError);
        }, async run() {
          return t7("/run", { body: this._body }).catch(handleProxyError);
        }, async first(r6) {
          return t7("/first", { body: { ...this._body, colName: r6 } }).catch(handleProxyError).then((r7) => r7 || null);
        } };
        return a8;
      }, batch: (r5) => t7("/batch", { body: r5.map((r6) => r6._body) }) };
    }(c5.projectUrl, c5.projectSecretKey || c5.userToken), n2;
  if (d5)
    return n2 = d5, n2;
  throw createError$1("Missing Cloudflare DB binding (D1)");
}
function handleProxyError(r5) {
  throw createError$1({ statusCode: r5.statusCode, message: r5.data?.message || r5.message });
}
var n2;
var init_database = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/_/database.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/index.get2.mjs
var index_get2_exports = {};
__export(index_get2_exports, {
  default: () => t4
});
var t4;
var init_index_get2 = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/index.get2.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_database();
    t4 = xe2(async () => {
      const a7 = hubDatabase();
      await a7.exec("CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY, text TEXT, created_at INTEGER)");
      const { results: t7 } = await a7.prepare("SELECT * FROM messages ORDER BY created_at DESC").all();
      return t7;
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/index.post.mjs
var index_post_exports = {};
__export(index_post_exports, {
  default: () => r2
});
var r2;
var init_index_post = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/index.post.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_database();
    r2 = xe2(async (a7) => {
      const { text: r5 } = await readBody(a7), s8 = hubDatabase();
      return await s8.prepare("INSERT INTO messages (text, created_at) VALUES (?1, ?2)").bind(r5, Date.now()).run(), {};
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/index.get3.mjs
var index_get3_exports = {};
__export(index_get3_exports, {
  default: () => e13
});
var e13;
var init_index_get3 = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/index.get3.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    e13 = xe2(async () => await hubKV().get("redirects") || {});
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/index.put.mjs
var index_put_exports = {};
__export(index_put_exports, {
  default: () => r3
});
var r3;
var init_index_put = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/index.put.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    r3 = xe2(async (t7) => {
      const r5 = await readBody(t7);
      return await hubKV().set("redirects", r5), r5;
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/_...feature_.mjs
var feature_exports = {};
__export(feature_exports, {
  default: () => e14
});
var e14;
var init_feature = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/_...feature_.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    e14 = xe2((t7) => {
      const [e20] = (t7.context.params?.feature || "").split("/");
      throw requireNuxtHubFeature(e20), createError$1({ statusCode: 404, message: "Not found" });
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/_/auth.mjs
async function requireNuxtHubAuthorization(r5) {
  const o13 = (de3(r5, "authorization") || "").split(" ")[1];
  if (!o13)
    throw createError$1({ statusCode: 403, message: "Missing Authorization header" });
  const n4 = R4.env.NUXT_HUB_PROJECT_KEY, u5 = R4.env.NUXT_HUB_PROJECT_SECRET_KEY;
  if (!u5 || o13 !== u5) {
    if (u5 && !n4)
      throw createError$1({ statusCode: 401, message: "Invalid secret key" });
    if (n4) {
      if (s4.has(o13))
        return;
      return await Ue2(`/api/projects/${n4}`, { baseURL: R4.env.NUXT_HUB_URL || "https://admin.hub.nuxt.com", method: "HEAD", headers: { authorization: `Bearer ${o13}` } }), void s4.set(o13, true);
    }
    throw createError$1({ statusCode: 401, message: "Missing NUXT_HUB_PROJECT_SECRET_KEY envrionment variable or NUXT_HUB_PROJECT_KEY envrionment variable" });
  }
}
var s4;
var init_auth = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/_/auth.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    s4 = /* @__PURE__ */ new Map();
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/index.head.mjs
var index_head_exports = {};
__export(index_head_exports, {
  default: () => m2
});
var m2;
var init_index_head = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/index.head.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_auth();
    m2 = xe2(async (a7) => (await requireNuxtHubAuthorization(a7), sendNoContent(a7)));
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/manifest.get.mjs
var manifest_get_exports = {};
__export(manifest_get_exports, {
  default: () => i3
});
async function falseIfFail(a7) {
  try {
    const s8 = a7();
    return s8 instanceof Promise ? s8.catch(() => false) : s8;
  } catch (a8) {
    return false;
  }
}
var i3;
var init_manifest_get = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/manifest.get.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_database();
    init_blob();
    init_auth();
    init_commonjsHelpers();
    init__();
    i3 = xe2(async (a7) => {
      await requireNuxtHubAuthorization(a7);
      const { version: i11, cache: c5, analytics: l4, blob: m10, kv: n4, database: f3 } = useRuntimeConfig2().hub, [_5, b5, h7] = await Promise.all([falseIfFail(() => f3 && hubDatabase().exec("PRAGMA table_list")), falseIfFail(() => n4 && hubKV().getKeys("__check__")), falseIfFail(() => m10 && hubBlob().list({ prefix: "__check__" }))]);
      return { version: i11, storage: { database: Boolean(_5), kv: Array.isArray(b5), blob: Array.isArray(h7?.blobs) }, features: { analytics: l4, cache: c5 } };
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/runtime2.mjs
var runtime2_exports = {};
__export(runtime2_exports, {
  default: () => o6
});
function getPaths() {
  const e20 = {};
  for (const t7 of st3) {
    const { route: r5, parameters: s8 } = normalizeRoute(t7.route), a7 = defaultTags(t7.route), o13 = (t7.method || "get").toLowerCase(), n4 = { [o13]: { tags: a7, parameters: s8, responses: { 200: { description: "OK" } } } };
    void 0 === e20[r5] ? e20[r5] = n4 : Object.assign(e20[r5], n4);
  }
  return e20;
}
function normalizeRoute(e20) {
  const t7 = [];
  let r5 = 0;
  const s8 = e20.replace(/:(\w+)/g, (e21, t8) => `{${t8}}`).replace(/\/(\*)\//g, () => `/{param${++r5}}/`).replace(/\*\*{/, "{").replace(/\/(\*\*)$/g, () => `/{*param${++r5}}`), a7 = s8.matchAll(/{(\*?\w+)}/g);
  for (const e21 of a7) {
    const r6 = e21[1];
    t7.some((e22) => e22.name === r6) || t7.push({ name: r6, in: "path", required: true, schema: { type: "string" } });
  }
  return { route: s8, parameters: t7 };
}
function defaultTags(e20) {
  const t7 = [];
  return e20.startsWith("/api/") ? t7.push("API Routes") : e20.startsWith("/_") ? t7.push("Internal") : t7.push("App Routes"), t7;
}
var o6;
var init_runtime2 = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/runtime2.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    o6 = xe2((e20) => {
      const a7 = useRuntimeConfig2()?.app?.baseURL;
      return { openapi: "3.1.0", info: { title: "Nitro Server Routes", version: null }, servers: [{ url: joinURL(getRequestURL(e20).origin, a7), description: "Local Development Server", variables: {} }], paths: getPaths() };
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/openapi.get.mjs
var openapi_get_exports = {};
__export(openapi_get_exports, {
  default: () => e15
});
var e15;
var init_openapi_get = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/openapi.get.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_auth();
    e15 = xe2(async (t7) => {
      await requireNuxtHubAuthorization(t7);
      if (!useRuntimeConfig2().hub.openapi)
        throw createError$1({ statusCode: 422, message: "OpenAPI not configured" });
      const e20 = await Promise.resolve().then(() => (init_runtime2(), runtime2_exports)).then((t8) => t8.default).catch(() => {
      });
      if ("function" != typeof e20)
        throw createError$1({ statusCode: 404, message: "not found" });
      return e20(t7);
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/blob/_...pathname_.delete.mjs
var pathname_delete_exports2 = {};
__export(pathname_delete_exports2, {
  default: () => i4
});
var i4;
var init_pathname_delete2 = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/blob/_...pathname_.delete.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init__();
    init_blob();
    init_auth();
    init_commonjsHelpers();
    i4 = xe2(async (a7) => {
      await requireNuxtHubAuthorization(a7), requireNuxtHubFeature("blob");
      const { pathname: i11 } = await getValidatedRouterParams(a7, oe3.object({ pathname: oe3.string().min(1) }).parse);
      return await hubBlob().delete(i11), sendNoContent(a7);
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/blob/_...pathname_.get.mjs
var pathname_get_exports = {};
__export(pathname_get_exports, {
  default: () => e16
});
var e16;
var init_pathname_get = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/blob/_...pathname_.get.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init__();
    init_blob();
    init_auth();
    init_commonjsHelpers();
    e16 = xe2(async (a7) => {
      await requireNuxtHubAuthorization(a7), requireNuxtHubFeature("blob");
      const { pathname: e20 } = await getValidatedRouterParams(a7, oe3.object({ pathname: oe3.string().min(1) }).parse);
      return hubBlob().serve(a7, e20);
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/blob/_...pathname_.put.mjs
var pathname_put_exports = {};
__export(pathname_put_exports, {
  default: () => c2
});
var c2;
var init_pathname_put = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/blob/_...pathname_.put.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init__();
    init_blob();
    init_auth();
    init_commonjsHelpers();
    c2 = xe2(async (t7) => {
      await requireNuxtHubAuthorization(t7), requireNuxtHubFeature("blob");
      const { pathname: c5 } = await getValidatedRouterParams(t7, oe3.object({ pathname: oe3.string().min(1) }).parse), h7 = getQuery(t7), j7 = de3(t7, "content-type"), u5 = Number(de3(t7, "content-length") || "0"), b5 = { ...h7 };
      b5.contentType || (b5.contentType = j7), b5.contentLength || (b5.contentLength = u5);
      const f3 = getRequestWebStream(t7), l4 = await streamToArrayBuffer(f3, u5);
      return hubBlob().put(c5, l4, b5);
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/blob/delete-folder.post.mjs
var delete_folder_post_exports = {};
__export(delete_folder_post_exports, {
  default: () => e17
});
var e17;
var init_delete_folder_post = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/blob/delete-folder.post.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init__();
    init_blob();
    init_auth();
    init_commonjsHelpers();
    e17 = xe2(async (s8) => {
      await requireNuxtHubAuthorization(s8), requireNuxtHubFeature("blob");
      const { prefix: e20 } = await readValidatedBody(s8, oe3.object({ prefix: oe3.string().min(1) }).parse), p4 = hubBlob();
      let n4;
      const l4 = [];
      do {
        const s9 = await p4.list({ prefix: e20, limit: 1e3, cursor: n4 });
        l4.push(...s9.blobs.map((s10) => s10.pathname)), n4 = s9.cursor;
      } while (n4);
      return await p4.delete(l4), sendNoContent(s8);
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/blob/delete.post.mjs
var delete_post_exports = {};
__export(delete_post_exports, {
  default: () => i5
});
var i5;
var init_delete_post = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/blob/delete.post.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init__();
    init_blob();
    init_auth();
    init_commonjsHelpers();
    i5 = xe2(async (a7) => {
      await requireNuxtHubAuthorization(a7), requireNuxtHubFeature("blob");
      const { pathnames: i11 } = await readValidatedBody(a7, oe3.object({ pathnames: oe3.array(oe3.string().min(1)).min(1) }).parse);
      return await hubBlob().delete(i11), sendNoContent(a7);
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/blob/head/_...pathname_.get.mjs
var pathname_get_exports2 = {};
__export(pathname_get_exports2, {
  default: () => e18
});
var e18;
var init_pathname_get2 = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/blob/head/_...pathname_.get.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init__();
    init_blob();
    init_auth();
    init_commonjsHelpers();
    e18 = xe2(async (a7) => {
      await requireNuxtHubAuthorization(a7), requireNuxtHubFeature("blob");
      const { pathname: e20 } = await getValidatedRouterParams(a7, oe3.object({ pathname: oe3.string().min(1) }).parse);
      return hubBlob().head(e20);
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/index.get.mjs
var index_get_exports2 = {};
__export(index_get_exports2, {
  default: () => m3
});
var m3;
var init_index_get4 = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/index.get.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init__();
    init_blob();
    init_auth();
    init_commonjsHelpers();
    m3 = xe2(async (r5) => {
      await requireNuxtHubAuthorization(r5), requireNuxtHubFeature("blob");
      const m10 = await getValidatedQuery(r5, oe3.object({ folded: oe3.string().toLowerCase().transform((r6) => "true" === r6).optional(), limit: oe3.string().transform((r6) => Number.parseInt(r6)).optional(), prefix: oe3.string().optional(), cursor: oe3.string().optional() }).parse);
      return hubBlob().list(m10);
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/index.post.mjs
var index_post_exports2 = {};
__export(index_post_exports2, {
  default: () => t5
});
var t5;
var init_index_post2 = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/index.post.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_blob();
    init_auth();
    init_commonjsHelpers();
    init__();
    t5 = xe2(async (m10) => {
      await requireNuxtHubAuthorization(m10), requireNuxtHubFeature("blob");
      const t7 = getQuery(m10);
      return hubBlob().handleUpload(m10, { formKey: "files", ...t7, multiple: "false" !== t7.multiple });
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/blob/multipart/_action/_...pathname_.mjs
var pathname_exports = {};
__export(pathname_exports, {
  default: () => s5
});
var s5;
var init_pathname = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/blob/multipart/_action/_...pathname_.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_blob();
    init_auth();
    init_commonjsHelpers();
    init__();
    s5 = xe2(async (a7) => {
      await requireNuxtHubAuthorization(a7), requireNuxtHubFeature("blob");
      const s8 = getQuery(a7);
      return await hubBlob().handleMultipartUpload(a7, { ...s8 });
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/cache/_...key_.delete.mjs
var key_delete_exports = {};
__export(key_delete_exports, {
  default: () => i6
});
var i6;
var init_key_delete = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/cache/_...key_.delete.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_auth();
    i6 = xe2(async (a7) => {
      await requireNuxtHubAuthorization(a7), requireNuxtHubFeature("cache");
      const i11 = getRouterParam(a7, "key") || "";
      if (!/\.[a-z0-9]+$/i.test(i11))
        throw createError$1({ statusCode: 400, message: "Invalid key" });
      const c5 = useStorage("cache:nitro");
      return await c5.removeItem(i11), sendNoContent(a7);
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/cache/_...key_.get.mjs
var key_get_exports = {};
__export(key_get_exports, {
  default: () => d3
});
function plural(e20, r5, s8, a7) {
  var t7 = r5 >= 1.5 * s8;
  return Math.round(e20 / s8) + " " + a7 + (t7 ? "s" : "");
}
var c3, i7, u3, o7, m4, l2, h4, d3;
var init_key_get = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/cache/_...key_.get.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_commonjsHelpers();
    init_runtime();
    init_auth();
    c3 = 1e3;
    i7 = 60 * c3;
    u3 = 60 * i7;
    o7 = 24 * u3;
    m4 = 7 * o7;
    l2 = 365.25 * o7;
    h4 = getDefaultExportFromCjs(function(e20, r5) {
      r5 = r5 || {};
      var s8 = typeof e20;
      if ("string" === s8 && e20.length > 0)
        return function(e21) {
          if ((e21 = String(e21)).length > 100)
            return;
          var r6 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e21);
          if (!r6)
            return;
          var s9 = parseFloat(r6[1]);
          switch ((r6[2] || "ms").toLowerCase()) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return s9 * l2;
            case "weeks":
            case "week":
            case "w":
              return s9 * m4;
            case "days":
            case "day":
            case "d":
              return s9 * o7;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return s9 * u3;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return s9 * i7;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return s9 * c3;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return s9;
            default:
              return;
          }
        }(e20);
      if ("number" === s8 && isFinite(e20))
        return r5.long ? function(e21) {
          var r6 = Math.abs(e21);
          if (r6 >= o7)
            return plural(e21, r6, o7, "day");
          if (r6 >= u3)
            return plural(e21, r6, u3, "hour");
          if (r6 >= i7)
            return plural(e21, r6, i7, "minute");
          if (r6 >= c3)
            return plural(e21, r6, c3, "second");
          return e21 + " ms";
        }(e20) : function(e21) {
          var r6 = Math.abs(e21);
          if (r6 >= o7)
            return Math.round(e21 / o7) + "d";
          if (r6 >= u3)
            return Math.round(e21 / u3) + "h";
          if (r6 >= i7)
            return Math.round(e21 / i7) + "m";
          if (r6 >= c3)
            return Math.round(e21 / c3) + "s";
          return e21 + "ms";
        }(e20);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e20));
    });
    d3 = xe2(async (e20) => {
      await requireNuxtHubAuthorization(e20), requireNuxtHubFeature("cache");
      const r5 = getRouterParam(e20, "key") || "";
      if (/\.[a-z0-9]+$/i.test(r5))
        return await useStorage("cache:nitro").getItem(r5);
      const c5 = useStorage(`cache:nitro:${r5}`), i11 = await c5.getKeys(), u5 = { groups: {}, cache: [] };
      return await Promise.all(i11.map(async (e21) => {
        if (e21.includes(":")) {
          const r7 = e21.split(":")[0];
          return void (u5.groups[r7] = (u5.groups[r7] || 0) + 1);
        }
        const r6 = await c5.getItem(e21);
        if (!r6)
          return;
        const { value: s8, ...a7 } = r6, t7 = { key: e21, ...a7, size: JSON.stringify(r6).length };
        try {
          t7.duration = h4(a7.expires - a7.mtime, { long: true });
        } catch (e22) {
          t7.duration = "unknown";
        }
        u5.cache.push(t7);
      })), u5;
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/cache/_...key_.options.mjs
var key_options_exports = {};
__export(key_options_exports, {
  default: () => m5
});
var m5;
var init_key_options = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/cache/_...key_.options.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_auth();
    m5 = xe2(async (a7) => (await requireNuxtHubAuthorization(a7), sendNoContent(a7)));
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/cache/batch-delete.options.mjs
var batch_delete_options_exports = {};
__export(batch_delete_options_exports, {
  default: () => m6
});
var m6;
var init_batch_delete_options = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/cache/batch-delete.options.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_auth();
    m6 = xe2(async (a7) => (await requireNuxtHubAuthorization(a7), sendNoContent(a7)));
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/cache/batch-delete.post.mjs
var batch_delete_post_exports = {};
__export(batch_delete_post_exports, {
  default: () => o8
});
var o8;
var init_batch_delete_post = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/cache/batch-delete.post.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init__();
    init_auth();
    o8 = xe2(async (a7) => {
      await requireNuxtHubAuthorization(a7), requireNuxtHubFeature("cache");
      const { keys: o13 } = await readValidatedBody(a7, oe3.object({ keys: oe3.array(oe3.string().min(1)).min(1) }).parse), n4 = useStorage("cache:nitro");
      do {
        const a8 = o13.splice(0, 25);
        await Promise.all(a8.map(n4.removeItem));
      } while (o13.length);
      return sendNoContent(a7);
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/cache/clear/_...base_.delete.mjs
var base_delete_exports = {};
__export(base_delete_exports, {
  default: () => r4
});
var r4;
var init_base_delete = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/cache/clear/_...base_.delete.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_auth();
    r4 = xe2(async (a7) => {
      await requireNuxtHubAuthorization(a7), requireNuxtHubFeature("cache");
      const r5 = getRouterParam(a7, "base") || "";
      if (/\.[a-z0-9]+$/i.test(r5))
        throw createError$1({ statusCode: 400, message: "Invalid base" });
      const c5 = useStorage(`cache:nitro:${r5}`), n4 = await c5.getKeys();
      do {
        const a8 = n4.splice(0, 25);
        await Promise.all(a8.map(c5.removeItem));
      } while (n4.length);
      return sendNoContent(a7);
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/cache/clear/_...base_.options.mjs
var base_options_exports = {};
__export(base_options_exports, {
  default: () => m7
});
var m7;
var init_base_options = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/cache/clear/_...base_.options.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_auth();
    m7 = xe2(async (a7) => (await requireNuxtHubAuthorization(a7), sendNoContent(a7)));
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/index.get2.mjs
var index_get2_exports2 = {};
__export(index_get2_exports2, {
  default: () => o9
});
var o9;
var init_index_get22 = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/index.get2.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_auth();
    o9 = xe2(async (t7) => {
      await requireNuxtHubAuthorization(t7), requireNuxtHubFeature("cache");
      const o13 = await useStorage("cache:nitro").getKeys(), c5 = { handlers: 0, functions: 0 };
      for (const t8 of o13) {
        if (!t8.includes(":"))
          continue;
        const [s8] = t8.split(":");
        c5[s8] = (c5[s8] || 0) + 1;
      }
      return c5;
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/database/_command_.post.mjs
var command_post_exports = {};
__export(command_post_exports, {
  default: () => o10
});
var i8, o10;
var init_command_post = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/database/_command_.post.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init__();
    init_database();
    init_auth();
    i8 = oe3.object({ query: oe3.string().min(1).max(1e6).trim(), params: oe3.any().array().default([]) });
    o10 = xe2(async (a7) => {
      await requireNuxtHubAuthorization(a7), requireNuxtHubFeature("database");
      const { command: o13 } = await getValidatedRouterParams(a7, oe3.object({ command: oe3.enum(["first", "all", "raw", "run", "dump", "exec", "batch"]) }).parse), p4 = hubDatabase();
      if ("exec" === o13) {
        const { query: r5 } = await readValidatedBody(a7, i8.pick({ query: true }).parse);
        return p4.exec(r5);
      }
      if ("dump" === o13)
        return p4.dump();
      if ("first" === o13) {
        const { query: r5, params: e20, colName: m10 } = await readValidatedBody(a7, oe3.intersection(i8, oe3.object({ colName: oe3.string().optional() })).parse);
        return m10 ? p4.prepare(r5).bind(...e20).first(m10) : p4.prepare(r5).bind(...e20).first();
      }
      if ("batch" === o13) {
        const r5 = await readValidatedBody(a7, oe3.array(i8).parse);
        return p4.batch(r5.map((a8) => p4.prepare(a8.query).bind(...a8.params)));
      }
      if ("raw" === o13) {
        const { query: r5, params: e20, columnNames: m10 } = await readValidatedBody(a7, oe3.intersection(i8, oe3.object({ columnNames: oe3.boolean().default(false) })).parse);
        return p4.prepare(r5).bind(...e20).raw({ columnNames: m10 });
      }
      const { query: c5, params: u5 } = await readValidatedBody(a7, i8.parse);
      return p4.prepare(c5).bind(...u5)[o13]();
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/database/query.options.mjs
var query_options_exports = {};
__export(query_options_exports, {
  default: () => m8
});
var m8;
var init_query_options = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/database/query.options.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_auth();
    m8 = xe2(async (a7) => (await requireNuxtHubAuthorization(a7), sendNoContent(a7)));
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/database/query.post.mjs
var query_post_exports = {};
__export(query_post_exports, {
  default: () => i9
});
var o11, i9;
var init_query_post = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/database/query.post.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init__();
    init_database();
    init_auth();
    o11 = oe3.object({ query: oe3.string().min(1).max(1e6).trim(), params: oe3.any().array().optional().default([]), mode: oe3.enum(["raw", "all"]).optional().default("all") });
    i9 = xe2(async (a7) => {
      await requireNuxtHubAuthorization(a7), requireNuxtHubFeature("database");
      const { query: t7, params: i11, mode: n4 } = await readValidatedBody(a7, o11.parse);
      return hubDatabase().prepare(t7).bind(...i11)["raw" === n4 ? "raw" : "all"]({ columnNames: true });
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/kv/_...path_.mjs
var path_exports = {};
__export(path_exports, {
  default: () => w4
});
var h5, w4;
var init_path = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/api/_hub/kv/_...path_.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_auth();
    h5 = { GET: "read", HEAD: "read", PUT: "write", DELETE: "write" };
    w4 = xe2(async (w6) => {
      await requireNuxtHubAuthorization(w6), requireNuxtHubFeature("kv");
      return function(d5, u5 = {}) {
        return xe2(async (t7) => {
          const c5 = u5.resolvePath?.(t7) ?? t7.path, w7 = c5.endsWith(":") || c5.endsWith("/"), f3 = w7 ? normalizeBaseKey(c5) : normalizeKey$2(c5);
          if (!(t7.method in h5))
            throw createError$1({ statusCode: 405, statusMessage: `Method Not Allowed: ${t7.method}` });
          try {
            await u5.authorize?.({ type: h5[t7.method], event: t7, key: f3 });
          } catch (t8) {
            throw isError(t8) ? t8 : createError$1({ statusMessage: t8?.message, statusCode: 401, ...t8 });
          }
          if ("GET" === t7.method) {
            if (w7)
              return (await d5.getKeys(f3)).map((t8) => t8.replace(/:/g, "/"));
            const checkNotFound = (t8) => {
              if (null === t8)
                throw createError$1({ statusMessage: "KV value not found", statusCode: 404 });
            };
            if ("application/octet-stream" === getRequestHeader(t7, "accept")) {
              const t8 = await d5.getItemRaw(f3);
              return checkNotFound(t8), t8;
            }
            {
              const t8 = await d5.getItem(f3);
              return checkNotFound(t8), stringify2(t8);
            }
          }
          if ("HEAD" === t7.method) {
            const e20 = await d5.hasItem(f3);
            if (t7.node.res.statusCode = e20 ? 200 : 404, e20) {
              const e21 = await d5.getMeta(f3);
              e21.mtime && setResponseHeader(t7, "last-modified", new Date(e21.mtime).toUTCString());
            }
            return "";
          }
          if ("PUT" === t7.method) {
            if ("application/octet-stream" === getRequestHeader(t7, "content-type")) {
              const e20 = await readRawBody(t7);
              await d5.setItemRaw(f3, e20);
            } else {
              const e20 = await readRawBody(t7, "utf8");
              void 0 !== e20 && await d5.setItem(f3, e20);
            }
            return "OK";
          }
          if ("DELETE" === t7.method)
            return await (w7 ? d5.clear(f3) : d5.removeItem(f3)), "OK";
          throw createError$1({ statusCode: 405, statusMessage: `Method Not Allowed: ${t7.method}` });
        });
      }(hubKV(), { resolvePath: (t7) => t7.context.params.path || "" })(w6);
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/routes/images/_pathname_.get.mjs
var pathname_get_exports3 = {};
__export(pathname_get_exports3, {
  default: () => s6
});
var s6;
var init_pathname_get3 = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/routes/images/_pathname_.get.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_blob();
    init_commonjsHelpers();
    init__();
    s6 = xe2(async (m10) => {
      const { pathname: s8 } = m10.context.params || {};
      return hubBlob().serve(m10, s8);
    });
  }
});

// .wrangler/tmp/pages-nNPccD/chunks/runtime.mjs
function createNotImplementedError(e20) {
  throw new Error(`[unenv] ${e20} is not implemented yet!`);
}
function notImplemented(e20) {
  return Object.assign(() => {
    throw createNotImplementedError(e20);
  }, { __unenv__: true });
}
function toByteArray(e20) {
  let o13;
  const s8 = function(e21) {
    const t7 = e21.length;
    if (t7 % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    let n4 = e21.indexOf("=");
    return -1 === n4 && (n4 = t7), [n4, n4 === t7 ? 0 : 4 - n4 % 4];
  }(e20), a7 = s8[0], i11 = s8[1], u5 = new n3(function(e21, t7, n4) {
    return 3 * (t7 + n4) / 4 - n4;
  }(0, a7, i11));
  let c5 = 0;
  const f3 = i11 > 0 ? a7 - 4 : a7;
  let h7;
  for (h7 = 0; h7 < f3; h7 += 4)
    o13 = t6[e20.charCodeAt(h7)] << 18 | t6[e20.charCodeAt(h7 + 1)] << 12 | t6[e20.charCodeAt(h7 + 2)] << 6 | t6[e20.charCodeAt(h7 + 3)], u5[c5++] = o13 >> 16 & 255, u5[c5++] = o13 >> 8 & 255, u5[c5++] = 255 & o13;
  return 2 === i11 && (o13 = t6[e20.charCodeAt(h7)] << 2 | t6[e20.charCodeAt(h7 + 1)] >> 4, u5[c5++] = 255 & o13), 1 === i11 && (o13 = t6[e20.charCodeAt(h7)] << 10 | t6[e20.charCodeAt(h7 + 1)] << 4 | t6[e20.charCodeAt(h7 + 2)] >> 2, u5[c5++] = o13 >> 8 & 255, u5[c5++] = 255 & o13), u5;
}
function encodeChunk(t7, n4, o13) {
  let s8;
  const a7 = [];
  for (let u5 = n4; u5 < o13; u5 += 3)
    s8 = (t7[u5] << 16 & 16711680) + (t7[u5 + 1] << 8 & 65280) + (255 & t7[u5 + 2]), a7.push(e19[(i11 = s8) >> 18 & 63] + e19[i11 >> 12 & 63] + e19[i11 >> 6 & 63] + e19[63 & i11]);
  var i11;
  return a7.join("");
}
function fromByteArray(t7) {
  let n4;
  const o13 = t7.length, s8 = o13 % 3, a7 = [], i11 = 16383;
  for (let e20 = 0, n5 = o13 - s8; e20 < n5; e20 += i11)
    a7.push(encodeChunk(t7, e20, e20 + i11 > n5 ? n5 : e20 + i11));
  return 1 === s8 ? (n4 = t7[o13 - 1], a7.push(e19[n4 >> 2] + e19[n4 << 4 & 63] + "==")) : 2 === s8 && (n4 = (t7[o13 - 2] << 8) + t7[o13 - 1], a7.push(e19[n4 >> 10] + e19[n4 >> 4 & 63] + e19[n4 << 2 & 63] + "=")), a7.join("");
}
function read(e20, t7, n4, o13, s8) {
  let a7, i11;
  const u5 = 8 * s8 - o13 - 1, c5 = (1 << u5) - 1, f3 = c5 >> 1;
  let h7 = -7, l4 = n4 ? s8 - 1 : 0;
  const d5 = n4 ? -1 : 1;
  let p4 = e20[t7 + l4];
  for (l4 += d5, a7 = p4 & (1 << -h7) - 1, p4 >>= -h7, h7 += u5; h7 > 0; )
    a7 = 256 * a7 + e20[t7 + l4], l4 += d5, h7 -= 8;
  for (i11 = a7 & (1 << -h7) - 1, a7 >>= -h7, h7 += o13; h7 > 0; )
    i11 = 256 * i11 + e20[t7 + l4], l4 += d5, h7 -= 8;
  if (0 === a7)
    a7 = 1 - f3;
  else {
    if (a7 === c5)
      return i11 ? Number.NaN : (p4 ? -1 : 1) * Number.POSITIVE_INFINITY;
    i11 += Math.pow(2, o13), a7 -= f3;
  }
  return (p4 ? -1 : 1) * i11 * Math.pow(2, a7 - o13);
}
function write(e20, t7, n4, o13, s8, a7) {
  let i11, u5, c5, f3 = 8 * a7 - s8 - 1;
  const h7 = (1 << f3) - 1, l4 = h7 >> 1, d5 = 23 === s8 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  let p4 = o13 ? 0 : a7 - 1;
  const m10 = o13 ? 1 : -1, y5 = t7 < 0 || 0 === t7 && 1 / t7 < 0 ? 1 : 0;
  for (t7 = Math.abs(t7), Number.isNaN(t7) || t7 === Number.POSITIVE_INFINITY ? (u5 = Number.isNaN(t7) ? 1 : 0, i11 = h7) : (i11 = Math.floor(Math.log2(t7)), t7 * (c5 = Math.pow(2, -i11)) < 1 && (i11--, c5 *= 2), (t7 += i11 + l4 >= 1 ? d5 / c5 : d5 * Math.pow(2, 1 - l4)) * c5 >= 2 && (i11++, c5 /= 2), i11 + l4 >= h7 ? (u5 = 0, i11 = h7) : i11 + l4 >= 1 ? (u5 = (t7 * c5 - 1) * Math.pow(2, s8), i11 += l4) : (u5 = t7 * Math.pow(2, l4 - 1) * Math.pow(2, s8), i11 = 0)); s8 >= 8; )
    e20[n4 + p4] = 255 & u5, p4 += m10, u5 /= 256, s8 -= 8;
  for (i11 = i11 << s8 | u5, f3 += s8; f3 > 0; )
    e20[n4 + p4] = 255 & i11, p4 += m10, i11 /= 256, f3 -= 8;
  e20[n4 + p4 - m10] |= 128 * y5;
}
function createBuffer2(e20) {
  if (e20 > a6)
    throw new RangeError('The value "' + e20 + '" is invalid for option "size"');
  const t7 = new Uint8Array(e20);
  return Object.setPrototypeOf(t7, Buffer$1.prototype), t7;
}
function Buffer$1(e20, t7, n4) {
  if ("number" == typeof e20) {
    if ("string" == typeof t7)
      throw new TypeError('The "string" argument must be of type string. Received type number');
    return allocUnsafe(e20);
  }
  return from(e20, t7, n4);
}
function from(e20, t7, n4) {
  if ("string" == typeof e20)
    return function(e21, t8) {
      "string" == typeof t8 && "" !== t8 || (t8 = "utf8");
      if (!Buffer$1.isEncoding(t8))
        throw new TypeError("Unknown encoding: " + t8);
      const n5 = 0 | byteLength(e21, t8);
      let o14 = createBuffer2(n5);
      const s9 = o14.write(e21, t8);
      s9 !== n5 && (o14 = o14.slice(0, s9));
      return o14;
    }(e20, t7);
  if (ArrayBuffer.isView(e20))
    return function(e21) {
      if (isInstance(e21, Uint8Array)) {
        const t8 = new Uint8Array(e21);
        return fromArrayBuffer(t8.buffer, t8.byteOffset, t8.byteLength);
      }
      return fromArrayLike(e21);
    }(e20);
  if (null == e20)
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e20);
  if (isInstance(e20, ArrayBuffer) || e20 && isInstance(e20.buffer, ArrayBuffer))
    return fromArrayBuffer(e20, t7, n4);
  if ("undefined" != typeof SharedArrayBuffer && (isInstance(e20, SharedArrayBuffer) || e20 && isInstance(e20.buffer, SharedArrayBuffer)))
    return fromArrayBuffer(e20, t7, n4);
  if ("number" == typeof e20)
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  const o13 = e20.valueOf && e20.valueOf();
  if (null != o13 && o13 !== e20)
    return Buffer$1.from(o13, t7, n4);
  const s8 = function(e21) {
    if (Buffer$1.isBuffer(e21)) {
      const t8 = 0 | checked(e21.length), n5 = createBuffer2(t8);
      return 0 === n5.length || e21.copy(n5, 0, 0, t8), n5;
    }
    if (void 0 !== e21.length)
      return "number" != typeof e21.length || numberIsNaN(e21.length) ? createBuffer2(0) : fromArrayLike(e21);
    if ("Buffer" === e21.type && Array.isArray(e21.data))
      return fromArrayLike(e21.data);
  }(e20);
  if (s8)
    return s8;
  if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e20[Symbol.toPrimitive])
    return Buffer$1.from(e20[Symbol.toPrimitive]("string"), t7, n4);
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e20);
}
function assertSize(e20) {
  if ("number" != typeof e20)
    throw new TypeError('"size" argument must be of type number');
  if (e20 < 0)
    throw new RangeError('The value "' + e20 + '" is invalid for option "size"');
}
function allocUnsafe(e20) {
  return assertSize(e20), createBuffer2(e20 < 0 ? 0 : 0 | checked(e20));
}
function fromArrayLike(e20) {
  const t7 = e20.length < 0 ? 0 : 0 | checked(e20.length), n4 = createBuffer2(t7);
  for (let o13 = 0; o13 < t7; o13 += 1)
    n4[o13] = 255 & e20[o13];
  return n4;
}
function fromArrayBuffer(e20, t7, n4) {
  if (t7 < 0 || e20.byteLength < t7)
    throw new RangeError('"offset" is outside of buffer bounds');
  if (e20.byteLength < t7 + (n4 || 0))
    throw new RangeError('"length" is outside of buffer bounds');
  let o13;
  return o13 = void 0 === t7 && void 0 === n4 ? new Uint8Array(e20) : void 0 === n4 ? new Uint8Array(e20, t7) : new Uint8Array(e20, t7, n4), Object.setPrototypeOf(o13, Buffer$1.prototype), o13;
}
function checked(e20) {
  if (e20 >= a6)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a6.toString(16) + " bytes");
  return 0 | e20;
}
function byteLength(e20, t7) {
  if (Buffer$1.isBuffer(e20))
    return e20.length;
  if (ArrayBuffer.isView(e20) || isInstance(e20, ArrayBuffer))
    return e20.byteLength;
  if ("string" != typeof e20)
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e20);
  const n4 = e20.length, o13 = arguments.length > 2 && true === arguments[2];
  if (!o13 && 0 === n4)
    return 0;
  let s8 = false;
  for (; ; )
    switch (t7) {
      case "ascii":
      case "latin1":
      case "binary":
        return n4;
      case "utf8":
      case "utf-8":
        return utf8ToBytes(e20).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * n4;
      case "hex":
        return n4 >>> 1;
      case "base64":
        return base64ToBytes(e20).length;
      default:
        if (s8)
          return o13 ? -1 : utf8ToBytes(e20).length;
        t7 = ("" + t7).toLowerCase(), s8 = true;
    }
}
function slowToString(e20, t7, n4) {
  let o13 = false;
  if ((void 0 === t7 || t7 < 0) && (t7 = 0), t7 > this.length)
    return "";
  if ((void 0 === n4 || n4 > this.length) && (n4 = this.length), n4 <= 0)
    return "";
  if ((n4 >>>= 0) <= (t7 >>>= 0))
    return "";
  for (e20 || (e20 = "utf8"); ; )
    switch (e20) {
      case "hex":
        return hexSlice(this, t7, n4);
      case "utf8":
      case "utf-8":
        return utf8Slice(this, t7, n4);
      case "ascii":
        return asciiSlice(this, t7, n4);
      case "latin1":
      case "binary":
        return latin1Slice(this, t7, n4);
      case "base64":
        return base64Slice(this, t7, n4);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return utf16leSlice(this, t7, n4);
      default:
        if (o13)
          throw new TypeError("Unknown encoding: " + e20);
        e20 = (e20 + "").toLowerCase(), o13 = true;
    }
}
function swap(e20, t7, n4) {
  const o13 = e20[t7];
  e20[t7] = e20[n4], e20[n4] = o13;
}
function bidirectionalIndexOf(e20, t7, n4, o13, s8) {
  if (0 === e20.length)
    return -1;
  if ("string" == typeof n4 ? (o13 = n4, n4 = 0) : n4 > 2147483647 ? n4 = 2147483647 : n4 < -2147483648 && (n4 = -2147483648), numberIsNaN(n4 = +n4) && (n4 = s8 ? 0 : e20.length - 1), n4 < 0 && (n4 = e20.length + n4), n4 >= e20.length) {
    if (s8)
      return -1;
    n4 = e20.length - 1;
  } else if (n4 < 0) {
    if (!s8)
      return -1;
    n4 = 0;
  }
  if ("string" == typeof t7 && (t7 = Buffer$1.from(t7, o13)), Buffer$1.isBuffer(t7))
    return 0 === t7.length ? -1 : arrayIndexOf(e20, t7, n4, o13, s8);
  if ("number" == typeof t7)
    return t7 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? s8 ? Uint8Array.prototype.indexOf.call(e20, t7, n4) : Uint8Array.prototype.lastIndexOf.call(e20, t7, n4) : arrayIndexOf(e20, [t7], n4, o13, s8);
  throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(e20, t7, n4, o13, s8) {
  let a7, i11 = 1, u5 = e20.length, c5 = t7.length;
  if (void 0 !== o13 && ("ucs2" === (o13 = String(o13).toLowerCase()) || "ucs-2" === o13 || "utf16le" === o13 || "utf-16le" === o13)) {
    if (e20.length < 2 || t7.length < 2)
      return -1;
    i11 = 2, u5 /= 2, c5 /= 2, n4 /= 2;
  }
  function read2(e21, t8) {
    return 1 === i11 ? e21[t8] : e21.readUInt16BE(t8 * i11);
  }
  if (s8) {
    let o14 = -1;
    for (a7 = n4; a7 < u5; a7++)
      if (read2(e20, a7) === read2(t7, -1 === o14 ? 0 : a7 - o14)) {
        if (-1 === o14 && (o14 = a7), a7 - o14 + 1 === c5)
          return o14 * i11;
      } else
        -1 !== o14 && (a7 -= a7 - o14), o14 = -1;
  } else
    for (n4 + c5 > u5 && (n4 = u5 - c5), a7 = n4; a7 >= 0; a7--) {
      let n5 = true;
      for (let o14 = 0; o14 < c5; o14++)
        if (read2(e20, a7 + o14) !== read2(t7, o14)) {
          n5 = false;
          break;
        }
      if (n5)
        return a7;
    }
  return -1;
}
function hexWrite(e20, t7, n4, o13) {
  n4 = Number(n4) || 0;
  const s8 = e20.length - n4;
  o13 ? (o13 = Number(o13)) > s8 && (o13 = s8) : o13 = s8;
  const a7 = t7.length;
  let i11;
  for (o13 > a7 / 2 && (o13 = a7 / 2), i11 = 0; i11 < o13; ++i11) {
    const o14 = Number.parseInt(t7.slice(2 * i11, 2 * i11 + 2), 16);
    if (numberIsNaN(o14))
      return i11;
    e20[n4 + i11] = o14;
  }
  return i11;
}
function utf8Write(e20, t7, n4, o13) {
  return blitBuffer(utf8ToBytes(t7, e20.length - n4), e20, n4, o13);
}
function asciiWrite(e20, t7, n4, o13) {
  return blitBuffer(function(e21) {
    const t8 = [];
    for (let n5 = 0; n5 < e21.length; ++n5)
      t8.push(255 & e21.charCodeAt(n5));
    return t8;
  }(t7), e20, n4, o13);
}
function base64Write(e20, t7, n4, o13) {
  return blitBuffer(base64ToBytes(t7), e20, n4, o13);
}
function ucs2Write(e20, t7, n4, o13) {
  return blitBuffer(function(e21, t8) {
    let n5, o14, s8;
    const a7 = [];
    for (let i11 = 0; i11 < e21.length && !((t8 -= 2) < 0); ++i11)
      n5 = e21.charCodeAt(i11), o14 = n5 >> 8, s8 = n5 % 256, a7.push(s8, o14);
    return a7;
  }(t7, e20.length - n4), e20, n4, o13);
}
function base64Slice(e20, t7, n4) {
  return 0 === t7 && n4 === e20.length ? fromByteArray(e20) : fromByteArray(e20.slice(t7, n4));
}
function utf8Slice(e20, t7, n4) {
  n4 = Math.min(e20.length, n4);
  const o13 = [];
  let s8 = t7;
  for (; s8 < n4; ) {
    const t8 = e20[s8];
    let a7 = null, i11 = t8 > 239 ? 4 : t8 > 223 ? 3 : t8 > 191 ? 2 : 1;
    if (s8 + i11 <= n4) {
      let n5, o14, u5, c5;
      switch (i11) {
        case 1:
          t8 < 128 && (a7 = t8);
          break;
        case 2:
          n5 = e20[s8 + 1], 128 == (192 & n5) && (c5 = (31 & t8) << 6 | 63 & n5, c5 > 127 && (a7 = c5));
          break;
        case 3:
          n5 = e20[s8 + 1], o14 = e20[s8 + 2], 128 == (192 & n5) && 128 == (192 & o14) && (c5 = (15 & t8) << 12 | (63 & n5) << 6 | 63 & o14, c5 > 2047 && (c5 < 55296 || c5 > 57343) && (a7 = c5));
          break;
        case 4:
          n5 = e20[s8 + 1], o14 = e20[s8 + 2], u5 = e20[s8 + 3], 128 == (192 & n5) && 128 == (192 & o14) && 128 == (192 & u5) && (c5 = (15 & t8) << 18 | (63 & n5) << 12 | (63 & o14) << 6 | 63 & u5, c5 > 65535 && c5 < 1114112 && (a7 = c5));
      }
    }
    null === a7 ? (a7 = 65533, i11 = 1) : a7 > 65535 && (a7 -= 65536, o13.push(a7 >>> 10 & 1023 | 55296), a7 = 56320 | 1023 & a7), o13.push(a7), s8 += i11;
  }
  return function(e21) {
    const t8 = e21.length;
    if (t8 <= i10)
      return String.fromCharCode.apply(String, e21);
    let n5 = "", o14 = 0;
    for (; o14 < t8; )
      n5 += String.fromCharCode.apply(String, e21.slice(o14, o14 += i10));
    return n5;
  }(o13);
}
function asciiSlice(e20, t7, n4) {
  let o13 = "";
  n4 = Math.min(e20.length, n4);
  for (let s8 = t7; s8 < n4; ++s8)
    o13 += String.fromCharCode(127 & e20[s8]);
  return o13;
}
function latin1Slice(e20, t7, n4) {
  let o13 = "";
  n4 = Math.min(e20.length, n4);
  for (let s8 = t7; s8 < n4; ++s8)
    o13 += String.fromCharCode(e20[s8]);
  return o13;
}
function hexSlice(e20, t7, n4) {
  const o13 = e20.length;
  (!t7 || t7 < 0) && (t7 = 0), (!n4 || n4 < 0 || n4 > o13) && (n4 = o13);
  let s8 = "";
  for (let o14 = t7; o14 < n4; ++o14)
    s8 += f2[e20[o14]];
  return s8;
}
function utf16leSlice(e20, t7, n4) {
  const o13 = e20.slice(t7, n4);
  let s8 = "";
  for (let e21 = 0; e21 < o13.length - 1; e21 += 2)
    s8 += String.fromCharCode(o13[e21] + 256 * o13[e21 + 1]);
  return s8;
}
function checkOffset(e20, t7, n4) {
  if (e20 % 1 != 0 || e20 < 0)
    throw new RangeError("offset is not uint");
  if (e20 + t7 > n4)
    throw new RangeError("Trying to access beyond buffer length");
}
function checkInt(e20, t7, n4, o13, s8, a7) {
  if (!Buffer$1.isBuffer(e20))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (t7 > s8 || t7 < a7)
    throw new RangeError('"value" argument is out of bounds');
  if (n4 + o13 > e20.length)
    throw new RangeError("Index out of range");
}
function wrtBigUInt64LE(e20, t7, n4, o13, s8) {
  checkIntBI(t7, o13, s8, e20, n4, 7);
  let a7 = Number(t7 & BigInt(4294967295));
  e20[n4++] = a7, a7 >>= 8, e20[n4++] = a7, a7 >>= 8, e20[n4++] = a7, a7 >>= 8, e20[n4++] = a7;
  let i11 = Number(t7 >> BigInt(32) & BigInt(4294967295));
  return e20[n4++] = i11, i11 >>= 8, e20[n4++] = i11, i11 >>= 8, e20[n4++] = i11, i11 >>= 8, e20[n4++] = i11, n4;
}
function wrtBigUInt64BE(e20, t7, n4, o13, s8) {
  checkIntBI(t7, o13, s8, e20, n4, 7);
  let a7 = Number(t7 & BigInt(4294967295));
  e20[n4 + 7] = a7, a7 >>= 8, e20[n4 + 6] = a7, a7 >>= 8, e20[n4 + 5] = a7, a7 >>= 8, e20[n4 + 4] = a7;
  let i11 = Number(t7 >> BigInt(32) & BigInt(4294967295));
  return e20[n4 + 3] = i11, i11 >>= 8, e20[n4 + 2] = i11, i11 >>= 8, e20[n4 + 1] = i11, i11 >>= 8, e20[n4] = i11, n4 + 8;
}
function checkIEEE754(e20, t7, n4, o13, s8, a7) {
  if (n4 + o13 > e20.length)
    throw new RangeError("Index out of range");
  if (n4 < 0)
    throw new RangeError("Index out of range");
}
function writeFloat(e20, t7, n4, o13, s8) {
  return t7 = +t7, n4 >>>= 0, s8 || checkIEEE754(e20, 0, n4, 4), write(e20, t7, n4, o13, 23, 4), n4 + 4;
}
function writeDouble(e20, t7, n4, o13, s8) {
  return t7 = +t7, n4 >>>= 0, s8 || checkIEEE754(e20, 0, n4, 8), write(e20, t7, n4, o13, 52, 8), n4 + 8;
}
function E3(e20, t7, n4) {
  u4[e20] = class extends n4 {
    constructor() {
      super(), Object.defineProperty(this, "message", { value: Reflect.apply(t7, this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e20}]`, this.stack, delete this.name;
    }
    get code() {
      return e20;
    }
    set code(e21) {
      Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: e21, writable: true });
    }
    toString() {
      return `${this.name} [${e20}]: ${this.message}`;
    }
  };
}
function addNumericalSeparator(e20) {
  let t7 = "", n4 = e20.length;
  const o13 = "-" === e20[0] ? 1 : 0;
  for (; n4 >= o13 + 4; n4 -= 3)
    t7 = `_${e20.slice(n4 - 3, n4)}${t7}`;
  return `${e20.slice(0, n4)}${t7}`;
}
function checkIntBI(e20, t7, n4, o13, s8, a7) {
  if (e20 > n4 || e20 < t7) {
    const n5 = "bigint" == typeof t7 ? "n" : "";
    let o14;
    throw o14 = 0 === t7 || t7 === BigInt(0) ? `>= 0${n5} and < 2${n5} ** ${8 * (a7 + 1)}${n5}` : `>= -(2${n5} ** ${8 * (a7 + 1) - 1}${n5}) and < 2 ** ${8 * (a7 + 1) - 1}${n5}`, new u4.ERR_OUT_OF_RANGE("value", o14, e20);
  }
  !function(e21, t8, n5) {
    validateNumber(t8, "offset"), void 0 !== e21[t8] && void 0 !== e21[t8 + n5] || boundsError(t8, e21.length - (n5 + 1));
  }(o13, s8, a7);
}
function validateNumber(e20, t7) {
  if ("number" != typeof e20)
    throw new u4.ERR_INVALID_ARG_TYPE(t7, "number", e20);
}
function boundsError(e20, t7, n4) {
  if (Math.floor(e20) !== e20)
    throw validateNumber(e20, n4), new u4.ERR_OUT_OF_RANGE("offset", "an integer", e20);
  if (t7 < 0)
    throw new u4.ERR_BUFFER_OUT_OF_BOUNDS();
  throw new u4.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${t7}`, e20);
}
function utf8ToBytes(e20, t7) {
  let n4;
  t7 = t7 || Number.POSITIVE_INFINITY;
  const o13 = e20.length;
  let s8 = null;
  const a7 = [];
  for (let i11 = 0; i11 < o13; ++i11) {
    if (n4 = e20.charCodeAt(i11), n4 > 55295 && n4 < 57344) {
      if (!s8) {
        if (n4 > 56319) {
          (t7 -= 3) > -1 && a7.push(239, 191, 189);
          continue;
        }
        if (i11 + 1 === o13) {
          (t7 -= 3) > -1 && a7.push(239, 191, 189);
          continue;
        }
        s8 = n4;
        continue;
      }
      if (n4 < 56320) {
        (t7 -= 3) > -1 && a7.push(239, 191, 189), s8 = n4;
        continue;
      }
      n4 = 65536 + (s8 - 55296 << 10 | n4 - 56320);
    } else
      s8 && (t7 -= 3) > -1 && a7.push(239, 191, 189);
    if (s8 = null, n4 < 128) {
      if ((t7 -= 1) < 0)
        break;
      a7.push(n4);
    } else if (n4 < 2048) {
      if ((t7 -= 2) < 0)
        break;
      a7.push(n4 >> 6 | 192, 63 & n4 | 128);
    } else if (n4 < 65536) {
      if ((t7 -= 3) < 0)
        break;
      a7.push(n4 >> 12 | 224, n4 >> 6 & 63 | 128, 63 & n4 | 128);
    } else {
      if (!(n4 < 1114112))
        throw new Error("Invalid code point");
      if ((t7 -= 4) < 0)
        break;
      a7.push(n4 >> 18 | 240, n4 >> 12 & 63 | 128, n4 >> 6 & 63 | 128, 63 & n4 | 128);
    }
  }
  return a7;
}
function base64ToBytes(e20) {
  return toByteArray(function(e21) {
    if ((e21 = (e21 = e21.split("=")[0]).trim().replace(c4, "")).length < 2)
      return "";
    for (; e21.length % 4 != 0; )
      e21 += "=";
    return e21;
  }(e20));
}
function blitBuffer(e20, t7, n4, o13) {
  let s8;
  for (s8 = 0; s8 < o13 && !(s8 + n4 >= t7.length || s8 >= e20.length); ++s8)
    t7[s8 + n4] = e20[s8];
  return s8;
}
function isInstance(e20, t7) {
  return e20 instanceof t7 || null != e20 && null != e20.constructor && null != e20.constructor.name && e20.constructor.name === t7.name;
}
function numberIsNaN(e20) {
  return e20 != e20;
}
function defineBigIntMethod(e20) {
  return "undefined" == typeof BigInt ? BufferBigIntNotDefined : e20;
}
function BufferBigIntNotDefined() {
  throw new Error("BigInt not supported");
}
function defaultSetTimeout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
function runTimeout(e20) {
  if (d4 === setTimeout)
    return setTimeout(e20, 0);
  if ((d4 === defaultSetTimeout || !d4) && setTimeout)
    return d4 = setTimeout, setTimeout(e20, 0);
  try {
    return d4(e20, 0);
  } catch {
    try {
      return d4.call(null, e20, 0);
    } catch {
      return d4.call(this, e20, 0);
    }
  }
}
function cleanUpNextTick() {
  g2 && m9 && (g2 = false, m9.length > 0 ? y4 = [...m9, ...y4] : b4 = -1, y4.length > 0 && drainQueue());
}
function drainQueue() {
  if (g2)
    return;
  const e20 = runTimeout(cleanUpNextTick);
  g2 = true;
  let t7 = y4.length;
  for (; t7; ) {
    for (m9 = y4, y4 = []; ++b4 < t7; )
      m9 && m9[b4].run();
    b4 = -1, t7 = y4.length;
  }
  m9 = null, g2 = false, function(e21) {
    if (p3 === clearTimeout)
      return clearTimeout(e21);
    if ((p3 === defaultClearTimeout || !p3) && clearTimeout)
      return p3 = clearTimeout, clearTimeout(e21);
    try {
      return p3(e21);
    } catch {
      try {
        return p3.call(null, e21);
      } catch {
        return p3.call(this, e21);
      }
    }
  }(e20);
}
function Item(e20, t7) {
  this.fun = e20, this.array = t7;
}
function noop3() {
  return l3;
}
function encodeQueryValue2(e20) {
  return (t7 = "string" == typeof e20 ? e20 : JSON.stringify(e20), encodeURI("" + t7).replace(j6, "|")).replace($4, "%2B").replace(C4, "+").replace(x3, "%23").replace(I4, "%26").replace(T4, "`").replace(S4, "^").replace(k5, "%2F");
  var t7;
}
function encodeQueryKey(e20) {
  return encodeQueryValue2(e20).replace(A4, "%3D");
}
function decode2(e20 = "") {
  try {
    return decodeURIComponent("" + e20);
  } catch {
    return "" + e20;
  }
}
function decodeQueryValue(e20) {
  return decode2(e20.replace($4, " "));
}
function parseQuery(e20 = "") {
  const t7 = {};
  "?" === e20[0] && (e20 = e20.slice(1));
  for (const n4 of e20.split("&")) {
    const e21 = n4.match(/([^=]+)=?(.*)/) || [];
    if (e21.length < 2)
      continue;
    const o13 = decode2(e21[1].replace($4, " "));
    if ("__proto__" === o13 || "constructor" === o13)
      continue;
    const s8 = decodeQueryValue(e21[2] || "");
    void 0 === t7[o13] ? t7[o13] = s8 : Array.isArray(t7[o13]) ? t7[o13].push(s8) : t7[o13] = [t7[o13], s8];
  }
  return t7;
}
function stringifyQuery2(e20) {
  return Object.keys(e20).filter((t7) => void 0 !== e20[t7]).map((t7) => {
    return n4 = t7, "number" != typeof (o13 = e20[t7]) && "boolean" != typeof o13 || (o13 = String(o13)), o13 ? Array.isArray(o13) ? o13.map((e21) => `${encodeQueryKey(n4)}=${encodeQueryValue2(e21)}`).join("&") : `${encodeQueryKey(n4)}=${encodeQueryValue2(o13)}` : encodeQueryKey(n4);
    var n4, o13;
  }).filter(Boolean).join("&");
}
function hasProtocol(e20, t7 = {}) {
  return "boolean" == typeof t7 && (t7 = { acceptRelative: t7 }), t7.strict ? O3.test(e20) : L3.test(e20) || !!t7.acceptRelative && N3.test(e20);
}
function isScriptProtocol(e20) {
  return !!e20 && U4.test(e20);
}
function hasTrailingSlash(e20 = "", t7) {
  return t7 ? M3.test(e20) : e20.endsWith("/");
}
function withoutTrailingSlash(e20 = "", t7) {
  if (!t7)
    return (hasTrailingSlash(e20) ? e20.slice(0, -1) : e20) || "/";
  if (!hasTrailingSlash(e20, true))
    return e20 || "/";
  let n4 = e20, o13 = "";
  const s8 = e20.indexOf("#");
  s8 >= 0 && (n4 = e20.slice(0, s8), o13 = e20.slice(s8));
  const [a7, ...i11] = n4.split("?");
  return ((a7.endsWith("/") ? a7.slice(0, -1) : a7) || "/") + (i11.length > 0 ? `?${i11.join("?")}` : "") + o13;
}
function withTrailingSlash(e20 = "", t7) {
  if (!t7)
    return e20.endsWith("/") ? e20 : e20 + "/";
  if (hasTrailingSlash(e20, true))
    return e20 || "/";
  let n4 = e20, o13 = "";
  const s8 = e20.indexOf("#");
  if (s8 >= 0 && (n4 = e20.slice(0, s8), o13 = e20.slice(s8), !n4))
    return o13;
  const [a7, ...i11] = n4.split("?");
  return a7 + "/" + (i11.length > 0 ? `?${i11.join("?")}` : "") + o13;
}
function withLeadingSlash(e20 = "") {
  return function(e21 = "") {
    return e21.startsWith("/");
  }(e20) ? e20 : "/" + e20;
}
function withoutBase(e20, t7) {
  if (isEmptyURL(t7))
    return e20;
  const n4 = withoutTrailingSlash(t7);
  if (!e20.startsWith(n4))
    return e20;
  const o13 = e20.slice(n4.length);
  return "/" === o13[0] ? o13 : "/" + o13;
}
function withQuery(e20, t7) {
  const n4 = parseURL2(e20), o13 = { ...parseQuery(n4.search), ...t7 };
  return n4.search = stringifyQuery2(o13), function(e21) {
    const t8 = e21.pathname || "", n5 = e21.search ? (e21.search.startsWith("?") ? "" : "?") + e21.search : "", o14 = e21.hash || "", s8 = e21.auth ? e21.auth + "@" : "", a7 = e21.host || "", i11 = e21.protocol || e21[P4] ? (e21.protocol || "") + "//" : "";
    return i11 + s8 + a7 + t8 + n5 + o14;
  }(n4);
}
function getQuery$1(e20) {
  return parseQuery(parseURL2(e20).search);
}
function isEmptyURL(e20) {
  return !e20 || "/" === e20;
}
function joinURL(e20, ...t7) {
  let n4 = e20 || "";
  for (const e21 of t7.filter((e22) => function(e23) {
    return e23 && "/" !== e23;
  }(e22)))
    if (n4) {
      const t8 = e21.replace(H3, "");
      n4 = withTrailingSlash(n4) + t8;
    } else
      n4 = e21;
  return n4;
}
function joinRelativeURL(...e20) {
  const t7 = /\/(?!\/)/, n4 = e20.filter(Boolean), o13 = [];
  let s8 = 0;
  for (const e21 of n4)
    if (e21 && "/" !== e21) {
      for (const [n5, a8] of e21.split(t7).entries())
        if (a8 && "." !== a8)
          if (".." !== a8)
            1 === n5 && o13[o13.length - 1]?.endsWith(":/") ? o13[o13.length - 1] += "/" + a8 : (o13.push(a8), s8++);
          else {
            if (1 === o13.length && hasProtocol(o13[0]))
              continue;
            o13.pop(), s8--;
          }
    }
  let a7 = o13.join("/");
  return s8 >= 0 ? n4[0]?.startsWith("/") && !a7.startsWith("/") ? a7 = "/" + a7 : n4[0]?.startsWith("./") && !a7.startsWith("./") && (a7 = "./" + a7) : a7 = "../".repeat(-1 * s8) + a7, n4[n4.length - 1]?.endsWith("/") && !a7.endsWith("/") && (a7 += "/"), a7;
}
function parseURL2(e20 = "", t7) {
  const n4 = e20.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (n4) {
    const [, e21, t8 = ""] = n4;
    return { protocol: e21.toLowerCase(), pathname: t8, href: e21 + t8, auth: "", host: "", search: "", hash: "" };
  }
  if (!hasProtocol(e20, { acceptRelative: true }))
    return parsePath(e20);
  const [, o13 = "", s8, a7 = ""] = e20.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [], [, i11 = "", u5 = ""] = a7.match(/([^#/?]*)(.*)?/) || [], { pathname: c5, search: f3, hash: h7 } = parsePath(u5.replace(/\/(?=[A-Za-z]:)/, ""));
  return { protocol: o13.toLowerCase(), auth: s8 ? s8.slice(0, Math.max(0, s8.length - 1)) : "", host: i11, pathname: c5, search: f3, hash: h7, [P4]: !o13 };
}
function parsePath(e20 = "") {
  const [t7 = "", n4 = "", o13 = ""] = (e20.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: t7, search: n4, hash: o13 };
}
function objectHash(e20, t7) {
  const n4 = createHasher(t7 = t7 ? { ...z4, ...t7 } : z4);
  return n4.dispatch(e20), n4.toString();
}
function createHasher(e20) {
  let t7 = "", n4 = /* @__PURE__ */ new Map();
  const write2 = (e21) => {
    t7 += e21;
  };
  return { toString: () => t7, getContext: () => n4, dispatch(t8) {
    e20.replacer && (t8 = e20.replacer(t8));
    return this[null === t8 ? "null" : typeof t8](t8);
  }, object(t8) {
    if (t8 && "function" == typeof t8.toJSON)
      return this.object(t8.toJSON());
    const o13 = Object.prototype.toString.call(t8);
    let s8 = "";
    const a7 = o13.length;
    s8 = a7 < 10 ? "unknown:[" + o13 + "]" : o13.slice(8, a7 - 1), s8 = s8.toLowerCase();
    let i11 = null;
    if (void 0 !== (i11 = n4.get(t8)))
      return this.dispatch("[CIRCULAR:" + i11 + "]");
    if (n4.set(t8, n4.size), void 0 !== h6 && h6.isBuffer && h6.isBuffer(t8))
      return write2("buffer:"), write2(t8.toString("utf8"));
    if ("object" !== s8 && "function" !== s8 && "asyncfunction" !== s8)
      this[s8] ? this[s8](t8) : e20.ignoreUnknown || this.unkown(t8, s8);
    else {
      let n5 = Object.keys(t8);
      e20.unorderedObjects && (n5 = n5.sort());
      let o14 = [];
      false === e20.respectType || isNativeFunction(t8) || (o14 = q6), e20.excludeKeys && (n5 = n5.filter((t9) => !e20.excludeKeys(t9)), o14 = o14.filter((t9) => !e20.excludeKeys(t9))), write2("object:" + (n5.length + o14.length) + ":");
      const dispatchForKey = (n6) => {
        this.dispatch(n6), write2(":"), e20.excludeValues || this.dispatch(t8[n6]), write2(",");
      };
      for (const e21 of n5)
        dispatchForKey(e21);
      for (const e21 of o14)
        dispatchForKey(e21);
    }
  }, array(t8, o13) {
    if (o13 = void 0 === o13 ? false !== e20.unorderedArrays : o13, write2("array:" + t8.length + ":"), !o13 || t8.length <= 1) {
      for (const e21 of t8)
        this.dispatch(e21);
      return;
    }
    const s8 = /* @__PURE__ */ new Map(), a7 = t8.map((t9) => {
      const n5 = createHasher(e20);
      n5.dispatch(t9);
      for (const [e21, t10] of n5.getContext())
        s8.set(e21, t10);
      return n5.toString();
    });
    return n4 = s8, a7.sort(), this.array(a7, false);
  }, date: (e21) => write2("date:" + e21.toJSON()), symbol: (e21) => write2("symbol:" + e21.toString()), unkown(e21, t8) {
    if (write2(t8), e21)
      return write2(":"), e21 && "function" == typeof e21.entries ? this.array(Array.from(e21.entries()), true) : void 0;
  }, error: (e21) => write2("error:" + e21.toString()), boolean: (e21) => write2("bool:" + e21), string(e21) {
    write2("string:" + e21.length + ":"), write2(e21);
  }, function(t8) {
    write2("fn:"), isNativeFunction(t8) ? this.dispatch("[native]") : this.dispatch(t8.toString()), false !== e20.respectFunctionNames && this.dispatch("function-name:" + String(t8.name)), e20.respectFunctionProperties && this.object(t8);
  }, number: (e21) => write2("number:" + e21), xml: (e21) => write2("xml:" + e21.toString()), null: () => write2("Null"), undefined: () => write2("Undefined"), regexp: (e21) => write2("regex:" + e21.toString()), uint8array(e21) {
    return write2("uint8array:"), this.dispatch(Array.prototype.slice.call(e21));
  }, uint8clampedarray(e21) {
    return write2("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(e21));
  }, int8array(e21) {
    return write2("int8array:"), this.dispatch(Array.prototype.slice.call(e21));
  }, uint16array(e21) {
    return write2("uint16array:"), this.dispatch(Array.prototype.slice.call(e21));
  }, int16array(e21) {
    return write2("int16array:"), this.dispatch(Array.prototype.slice.call(e21));
  }, uint32array(e21) {
    return write2("uint32array:"), this.dispatch(Array.prototype.slice.call(e21));
  }, int32array(e21) {
    return write2("int32array:"), this.dispatch(Array.prototype.slice.call(e21));
  }, float32array(e21) {
    return write2("float32array:"), this.dispatch(Array.prototype.slice.call(e21));
  }, float64array(e21) {
    return write2("float64array:"), this.dispatch(Array.prototype.slice.call(e21));
  }, arraybuffer(e21) {
    return write2("arraybuffer:"), this.dispatch(new Uint8Array(e21));
  }, url: (e21) => write2("url:" + e21.toString()), map(t8) {
    write2("map:");
    const n5 = [...t8];
    return this.array(n5, false !== e20.unorderedSets);
  }, set(t8) {
    write2("set:");
    const n5 = [...t8];
    return this.array(n5, false !== e20.unorderedSets);
  }, file(e21) {
    return write2("file:"), this.dispatch([e21.name, e21.size, e21.type, e21.lastModfied]);
  }, blob() {
    if (e20.ignoreUnknown)
      return write2("[blob]");
    throw new Error('Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n');
  }, domwindow: () => write2("domwindow"), bigint: (e21) => write2("bigint:" + e21.toString()), process: () => write2("process"), timer: () => write2("timer"), pipe: () => write2("pipe"), tcp: () => write2("tcp"), udp: () => write2("udp"), tty: () => write2("tty"), statwatcher: () => write2("statwatcher"), securecontext: () => write2("securecontext"), connection: () => write2("connection"), zlib: () => write2("zlib"), context: () => write2("context"), nodescript: () => write2("nodescript"), httpparser: () => write2("httpparser"), dataview: () => write2("dataview"), signal: () => write2("signal"), fsevent: () => write2("fsevent"), tlswrap: () => write2("tlswrap") };
}
function isNativeFunction(e20) {
  return "function" == typeof e20 && Function.prototype.toString.call(e20).slice(-D3) === K3;
}
function hash(e20, t7 = {}) {
  const n4 = "string" == typeof e20 ? e20 : objectHash(e20, t7);
  return (o13 = n4, new SHA256().finalize(o13).toString(F4)).slice(0, 10);
  var o13;
}
function createRouter$1(e20 = {}) {
  const t7 = { options: e20, rootNode: createRadixNode(), staticRoutesMap: {} }, normalizeTrailingSlash = (t8) => e20.strictTrailingSlash ? t8 : t8.replace(/\/$/, "") || "/";
  if (e20.routes)
    for (const n4 in e20.routes)
      insert(t7, normalizeTrailingSlash(n4), e20.routes[n4]);
  return { ctx: t7, lookup: (e21) => function(e22, t8) {
    const n4 = e22.staticRoutesMap[t8];
    if (n4)
      return n4.data;
    const o13 = t8.split("/"), s8 = {};
    let a7 = false, i11 = null, u5 = e22.rootNode, c5 = null;
    for (let e23 = 0; e23 < o13.length; e23++) {
      const t9 = o13[e23];
      null !== u5.wildcardChildNode && (i11 = u5.wildcardChildNode, c5 = o13.slice(e23).join("/"));
      const n5 = u5.children.get(t9);
      if (void 0 === n5) {
        if (u5 && u5.placeholderChildren.length > 1) {
          const t10 = o13.length - e23;
          u5 = u5.placeholderChildren.find((e24) => e24.maxDepth === t10) || null;
        } else
          u5 = u5.placeholderChildren[0] || null;
        if (!u5)
          break;
        u5.paramName && (s8[u5.paramName] = t9), a7 = true;
      } else
        u5 = n5;
    }
    null !== u5 && null !== u5.data || null === i11 || (u5 = i11, s8[u5.paramName || "_"] = c5, a7 = true);
    if (!u5)
      return null;
    if (a7)
      return { ...u5.data, params: a7 ? s8 : void 0 };
    return u5.data;
  }(t7, normalizeTrailingSlash(e21)), insert: (e21, n4) => insert(t7, normalizeTrailingSlash(e21), n4), remove: (e21) => function(e22, t8) {
    let n4 = false;
    const o13 = t8.split("/");
    let s8 = e22.rootNode;
    for (const e23 of o13)
      if (s8 = s8.children.get(e23), !s8)
        return n4;
    if (s8.data) {
      const e23 = o13.at(-1) || "";
      s8.data = null, 0 === Object.keys(s8.children).length && s8.parent && (s8.parent.children.delete(e23), s8.parent.wildcardChildNode = null, s8.parent.placeholderChildren = []), n4 = true;
    }
    return n4;
  }(t7, normalizeTrailingSlash(e21)) };
}
function insert(e20, t7, n4) {
  let o13 = true;
  const s8 = t7.split("/");
  let a7 = e20.rootNode, i11 = 0;
  const u5 = [a7];
  for (const e21 of s8) {
    let t8;
    if (t8 = a7.children.get(e21))
      a7 = t8;
    else {
      const n5 = getNodeType(e21);
      t8 = createRadixNode({ type: n5, parent: a7 }), a7.children.set(e21, t8), n5 === Y4.PLACEHOLDER ? (t8.paramName = "*" === e21 ? "_" + i11++ : e21.slice(1), a7.placeholderChildren.push(t8), o13 = false) : n5 === Y4.WILDCARD && (a7.wildcardChildNode = t8, t8.paramName = e21.slice(3) || "_", o13 = false), u5.push(t8), a7 = t8;
    }
  }
  for (const [e21, t8] of u5.entries())
    t8.maxDepth = Math.max(u5.length - e21, t8.maxDepth || 0);
  return a7.data = n4, true === o13 && (e20.staticRoutesMap[t7] = a7), a7;
}
function createRadixNode(e20 = {}) {
  return { type: e20.type || Y4.NORMAL, maxDepth: 0, parent: e20.parent || null, children: /* @__PURE__ */ new Map(), data: e20.data || null, paramName: e20.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function getNodeType(e20) {
  return e20.startsWith("**") ? Y4.WILDCARD : ":" === e20[0] || "*" === e20 ? Y4.PLACEHOLDER : Y4.NORMAL;
}
function toRouteMatcher(e20) {
  return function(e21, t7) {
    return { ctx: { table: e21 }, matchAll: (n4) => _matchRoutes(n4, e21, t7) };
  }(_routerNodeToTable("", e20.ctx.rootNode), e20.ctx.options.strictTrailingSlash);
}
function _matchRoutes(e20, t7, n4) {
  true !== n4 && e20.endsWith("/") && (e20 = e20.slice(0, -1) || "/");
  const o13 = [];
  for (const [n5, s9] of _sortRoutesMap(t7.wildcard))
    (e20 === n5 || e20.startsWith(n5 + "/")) && o13.push(s9);
  for (const [n5, s9] of _sortRoutesMap(t7.dynamic))
    if (e20.startsWith(n5 + "/")) {
      const t8 = "/" + e20.slice(n5.length).split("/").splice(2).join("/");
      o13.push(..._matchRoutes(t8, s9));
    }
  const s8 = t7.static.get(e20);
  return s8 && o13.push(s8), o13.filter(Boolean);
}
function _sortRoutesMap(e20) {
  return [...e20.entries()].sort((e21, t7) => e21[0].length - t7[0].length);
}
function _routerNodeToTable(e20, t7) {
  const n4 = { static: /* @__PURE__ */ new Map(), wildcard: /* @__PURE__ */ new Map(), dynamic: /* @__PURE__ */ new Map() };
  return function _addNode(e21, t8) {
    if (e21)
      if (t8.type !== Y4.NORMAL || e21.includes("*") || e21.includes(":")) {
        if (t8.type === Y4.WILDCARD)
          n4.wildcard.set(e21.replace("/**", ""), t8.data);
        else if (t8.type === Y4.PLACEHOLDER) {
          const o13 = _routerNodeToTable("", t8);
          return t8.data && o13.static.set("/", t8.data), void n4.dynamic.set(e21.replace(/\/\*|\/:\w+/, ""), o13);
        }
      } else
        t8.data && n4.static.set(e21, t8.data);
    for (const [n5, o13] of t8.children.entries())
      _addNode(`${e21}/${n5}`.replace("//", "/"), o13);
  }(e20, t7), n4;
}
function jsonParseTransform(e20, t7) {
  if (!("__proto__" === e20 || "constructor" === e20 && t7 && "object" == typeof t7 && "prototype" in t7))
    return t7;
  !function(e21) {
    console.warn(`[destr] Dropping "${e21}" key to prevent prototype pollution.`);
  }(e20);
}
function destr(e20, t7 = {}) {
  if ("string" != typeof e20)
    return e20;
  const n4 = e20.trim();
  if ('"' === e20[0] && e20.endsWith('"') && !e20.includes("\\"))
    return n4.slice(1, -1);
  if (n4.length <= 9) {
    const e21 = n4.toLowerCase();
    if ("true" === e21)
      return true;
    if ("false" === e21)
      return false;
    if ("undefined" === e21)
      return;
    if ("null" === e21)
      return null;
    if ("nan" === e21)
      return Number.NaN;
    if ("infinity" === e21)
      return Number.POSITIVE_INFINITY;
    if ("-infinity" === e21)
      return Number.NEGATIVE_INFINITY;
  }
  if (!te4.test(e20)) {
    if (t7.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return e20;
  }
  try {
    if (X4.test(e20) || ee4.test(e20)) {
      if (t7.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e20, jsonParseTransform);
    }
    return JSON.parse(e20);
  } catch (n5) {
    if (t7.strict)
      throw n5;
    return e20;
  }
}
function isPlainObject2(e20) {
  if (null === e20 || "object" != typeof e20)
    return false;
  const t7 = Object.getPrototypeOf(e20);
  return (null === t7 || t7 === Object.prototype || null === Object.getPrototypeOf(t7)) && (!(Symbol.iterator in e20) && (!(Symbol.toStringTag in e20) || "[object Module]" === Object.prototype.toString.call(e20)));
}
function _defu(e20, t7, n4 = ".", o13) {
  if (!isPlainObject2(t7))
    return _defu(e20, {}, n4, o13);
  const s8 = Object.assign({}, t7);
  for (const t8 in e20) {
    if ("__proto__" === t8 || "constructor" === t8)
      continue;
    const a7 = e20[t8];
    null != a7 && (o13 && o13(s8, t8, a7, n4) || (Array.isArray(a7) && Array.isArray(s8[t8]) ? s8[t8] = [...a7, ...s8[t8]] : isPlainObject2(a7) && isPlainObject2(s8[t8]) ? s8[t8] = _defu(a7, s8[t8], (n4 ? `${n4}.` : "") + t8.toString(), o13) : s8[t8] = a7));
  }
  return s8;
}
function createDefu(e20) {
  return (...t7) => t7.reduce((t8, n4) => _defu(t8, n4, "", e20), {});
}
function _addListener(e20, t7, n4, o13) {
  _checkListener(n4), void 0 !== e20._events.newListener && e20.emit("newListener", t7, n4.listener || n4), e20._events[t7] || (e20._events[t7] = []), o13 ? e20._events[t7].unshift(n4) : e20._events[t7].push(n4);
  const s8 = _getMaxListeners(e20);
  if (s8 > 0 && e20._events[t7].length > s8 && !e20._events[t7].warned) {
    e20._events[t7].warned = true;
    const n5 = new Error(`[unenv] Possible EventEmitter memory leak detected. ${e20._events[t7].length} ${t7} listeners added. Use emitter.setMaxListeners() to increase limit`);
    n5.name = "MaxListenersExceededWarning", n5.emitter = e20, n5.type = t7, n5.count = e20._events[t7]?.length, console.warn(n5);
  }
  return e20;
}
function _wrapOnce(e20, t7, n4) {
  let o13 = false;
  const wrapper = (...s8) => {
    if (!o13)
      return e20.removeListener(t7, wrapper), o13 = true, 0 === s8.length ? n4.call(e20) : n4.apply(e20, s8);
  };
  return wrapper.listener = n4, wrapper;
}
function _getMaxListeners(e20) {
  return e20._maxListeners ?? se4.defaultMaxListeners;
}
function _listeners(e20, t7, n4) {
  let o13 = e20._events[t7];
  return "function" == typeof o13 && (o13 = [o13]), n4 ? o13.map((e21) => e21.listener || e21) : o13;
}
function _checkListener(e20) {
  if ("function" != typeof e20)
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e20);
}
function getDuplex() {
  return Object.assign(ce3.prototype, ie4.prototype), Object.assign(ce3.prototype, ue3.prototype), ce3;
}
function _distinct(e20) {
  const t7 = {};
  for (const [n4, o13] of Object.entries(e20))
    n4 && (t7[n4] = (Array.isArray(o13) ? o13 : [o13]).filter(Boolean));
  return t7;
}
function hasProp(e20, t7) {
  try {
    return t7 in e20;
  } catch {
    return false;
  }
}
function createError$1(e20) {
  if ("string" == typeof e20)
    return new H3Error(e20);
  if (isError(e20))
    return e20;
  const t7 = new H3Error(e20.message ?? e20.statusMessage ?? "", { cause: e20.cause || e20 });
  if (hasProp(e20, "stack"))
    try {
      Object.defineProperty(t7, "stack", { get: () => e20.stack });
    } catch {
      try {
        t7.stack = e20.stack;
      } catch {
      }
    }
  if (e20.data && (t7.data = e20.data), e20.statusCode ? t7.statusCode = sanitizeStatusCode(e20.statusCode, t7.statusCode) : e20.status && (t7.statusCode = sanitizeStatusCode(e20.status, t7.statusCode)), e20.statusMessage ? t7.statusMessage = e20.statusMessage : e20.statusText && (t7.statusMessage = e20.statusText), t7.statusMessage) {
    const e21 = t7.statusMessage;
    sanitizeStatusMessage(t7.statusMessage) !== e21 && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
  }
  return void 0 !== e20.fatal && (t7.fatal = e20.fatal), void 0 !== e20.unhandled && (t7.unhandled = e20.unhandled), t7;
}
function isError(e20) {
  return true === e20?.constructor?.__h3_error__;
}
async function validateData(e20, t7) {
  try {
    const n4 = await t7(e20);
    if (false === n4)
      throw createValidationError();
    return true === n4 ? e20 : n4 ?? e20;
  } catch (e21) {
    throw createValidationError(e21);
  }
}
function createValidationError(e20) {
  throw createError$1({ status: 400, statusMessage: "Validation Error", message: e20?.message || "Validation Error", data: e20 });
}
function getQuery(e20) {
  return getQuery$1(e20.path || "");
}
function getValidatedQuery(e20, t7) {
  return validateData(getQuery(e20), t7);
}
function getRouterParams(e20, t7 = {}) {
  let n4 = e20.context.params || {};
  if (t7.decode) {
    n4 = { ...n4 };
    for (const e21 in n4)
      n4[e21] = decode2(n4[e21]);
  }
  return n4;
}
function getValidatedRouterParams(e20, t7, n4 = {}) {
  return validateData(getRouterParams(e20, n4), t7);
}
function getRouterParam(e20, t7, n4 = {}) {
  return getRouterParams(e20, n4)[t7];
}
function assertMethod(e20, t7, n4) {
  if (!function(e21, t8, n5) {
    if ("string" == typeof t8) {
      if (e21.method === t8)
        return true;
    } else if (t8.includes(e21.method))
      return true;
    return false;
  }(e20, t7))
    throw createError$1({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
}
function getRequestHeaders(e20) {
  const t7 = {};
  for (const n4 in e20.node.req.headers) {
    const o13 = e20.node.req.headers[n4];
    t7[n4] = Array.isArray(o13) ? o13.filter(Boolean).join(", ") : o13;
  }
  return t7;
}
function getRequestHeader(e20, t7) {
  return getRequestHeaders(e20)[t7.toLowerCase()];
}
function getRequestURL(e20, t7 = {}) {
  const n4 = function(e21, t8 = {}) {
    if (t8.xForwardedHost) {
      const t9 = e21.node.req.headers["x-forwarded-host"];
      if (t9)
        return t9;
    }
    return e21.node.req.headers.host || "localhost";
  }(e20, t7), o13 = function(e21, t8 = {}) {
    return false !== t8.xForwardedProto && "https" === e21.node.req.headers["x-forwarded-proto"] || e21.node.req.connection?.encrypted ? "https" : "http";
  }(e20, t7), s8 = (e20.node.req.originalUrl || e20.path).replace(/^[/\\]+/g, "/");
  return new URL(s8, `${o13}://${n4}`);
}
function readRawBody(e20, t7 = "utf8") {
  assertMethod(e20, ye3);
  const n4 = e20._requestBody || e20.web?.request?.body || e20.node.req[pe3] || e20.node.req.rawBody || e20.node.req.body;
  if (n4) {
    const e21 = Promise.resolve(n4).then((e22) => h6.isBuffer(e22) ? e22 : "function" == typeof e22.pipeTo ? new Promise((t8, n5) => {
      const o14 = [];
      e22.pipeTo(new WritableStream({ write(e23) {
        o14.push(e23);
      }, close() {
        t8(h6.concat(o14));
      }, abort(e23) {
        n5(e23);
      } })).catch(n5);
    }) : "function" == typeof e22.pipe ? new Promise((t8, n5) => {
      const o14 = [];
      e22.on("data", (e23) => {
        o14.push(e23);
      }).on("end", () => {
        t8(h6.concat(o14));
      }).on("error", n5);
    }) : e22.constructor === Object ? h6.from(JSON.stringify(e22)) : h6.from(e22));
    return t7 ? e21.then((e22) => e22.toString(t7)) : e21;
  }
  if (!Number.parseInt(e20.node.req.headers["content-length"] || "") && !String(e20.node.req.headers["transfer-encoding"] ?? "").split(",").map((e21) => e21.trim()).filter(Boolean).includes("chunked"))
    return Promise.resolve(void 0);
  const o13 = e20.node.req[pe3] = new Promise((t8, n5) => {
    const o14 = [];
    e20.node.req.on("error", (e21) => {
      n5(e21);
    }).on("data", (e21) => {
      o14.push(e21);
    }).on("end", () => {
      t8(h6.concat(o14));
    });
  });
  return t7 ? o13.then((e21) => e21.toString(t7)) : o13;
}
async function readBody(e20, t7 = {}) {
  const n4 = e20.node.req;
  if (hasProp(n4, me3))
    return n4[me3];
  const o13 = n4.headers["content-type"] || "", s8 = await readRawBody(e20);
  let a7;
  return a7 = "application/json" === o13 ? _parseJSON(s8, t7.strict ?? true) : o13.startsWith("application/x-www-form-urlencoded") ? function(e21) {
    const t8 = new URLSearchParams(e21), n5 = /* @__PURE__ */ Object.create(null);
    for (const [e22, o14] of t8.entries())
      hasProp(n5, e22) ? (Array.isArray(n5[e22]) || (n5[e22] = [n5[e22]]), n5[e22].push(o14)) : n5[e22] = o14;
    return n5;
  }(s8) : o13.startsWith("text/") ? s8 : _parseJSON(s8, t7.strict ?? false), n4[me3] = a7, a7;
}
async function readValidatedBody(e20, t7) {
  return validateData(await readBody(e20, { strict: true }), t7);
}
async function readFormData(e20) {
  return await function(e21) {
    return e21.web?.request || new Request(getRequestURL(e21), { duplex: "half", method: e21.method, headers: e21.headers, body: getRequestWebStream(e21) });
  }(e20).formData();
}
function getRequestWebStream(e20) {
  if (!ye3.includes(e20.method))
    return;
  const t7 = e20.web?.request?.body || e20._requestBody;
  if (t7)
    return t7;
  return pe3 in e20.node.req || "rawBody" in e20.node.req || "body" in e20.node.req || "__unenv__" in e20.node.req ? new ReadableStream({ async start(t8) {
    const n4 = await readRawBody(e20, false);
    n4 && t8.enqueue(n4), t8.close();
  } }) : new ReadableStream({ start: (t8) => {
    e20.node.req.on("data", (e21) => {
      t8.enqueue(e21);
    }), e20.node.req.on("end", () => {
      t8.close();
    }), e20.node.req.on("error", (e21) => {
      t8.error(e21);
    });
  } });
}
function _parseJSON(e20 = "", t7) {
  if (e20)
    try {
      return destr(e20, { strict: t7 });
    } catch {
      throw createError$1({ statusCode: 400, statusMessage: "Bad Request", message: "Invalid JSON body" });
    }
}
function handleCacheHeaders(e20, t7) {
  const n4 = ["public", ...t7.cacheControls || []];
  let o13 = false;
  if (void 0 !== t7.maxAge && n4.push("max-age=" + +t7.maxAge, "s-maxage=" + +t7.maxAge), t7.modifiedTime) {
    const n5 = new Date(t7.modifiedTime), s8 = e20.node.req.headers["if-modified-since"];
    e20.node.res.setHeader("last-modified", n5.toUTCString()), s8 && new Date(s8) >= t7.modifiedTime && (o13 = true);
  }
  if (t7.etag) {
    e20.node.res.setHeader("etag", t7.etag);
    e20.node.req.headers["if-none-match"] === t7.etag && (o13 = true);
  }
  return e20.node.res.setHeader("cache-control", n4.join(", ")), !!o13 && (e20.node.res.statusCode = 304, e20.handled || e20.node.res.end(), true);
}
function sanitizeStatusMessage(e20 = "") {
  return e20.replace(be3, "");
}
function sanitizeStatusCode(e20, t7 = 200) {
  return e20 ? ("string" == typeof e20 && (e20 = Number.parseInt(e20, 10)), e20 < 100 || e20 > 999 ? t7 : e20) : t7;
}
function splitCookiesString(e20) {
  if (Array.isArray(e20))
    return e20.flatMap((e21) => splitCookiesString(e21));
  if ("string" != typeof e20)
    return [];
  const t7 = [];
  let n4, o13, s8, a7, i11, u5 = 0;
  const skipWhitespace = () => {
    for (; u5 < e20.length && /\s/.test(e20.charAt(u5)); )
      u5 += 1;
    return u5 < e20.length;
  };
  for (; u5 < e20.length; ) {
    for (n4 = u5, i11 = false; skipWhitespace(); )
      if (o13 = e20.charAt(u5), "," === o13) {
        for (s8 = u5, u5 += 1, skipWhitespace(), a7 = u5; u5 < e20.length && (o13 = e20.charAt(u5), "=" !== o13 && ";" !== o13 && "," !== o13); )
          u5 += 1;
        u5 < e20.length && "=" === e20.charAt(u5) ? (i11 = true, u5 = a7, t7.push(e20.slice(n4, s8)), n4 = u5) : u5 = s8 + 1;
      } else
        u5 += 1;
    (!i11 || u5 >= e20.length) && t7.push(e20.slice(n4, e20.length));
  }
  return t7;
}
function send(e20, t7, n4) {
  return n4 && function(e21, t8) {
    t8 && 304 !== e21.node.res.statusCode && !e21.node.res.getHeader("content-type") && e21.node.res.setHeader("content-type", t8);
  }(e20, n4), new Promise((n5) => {
    we3(() => {
      e20.handled || e20.node.res.end(t7), n5();
    });
  });
}
function sendNoContent(e20, t7) {
  if (e20.handled)
    return;
  t7 || 200 === e20.node.res.statusCode || (t7 = e20.node.res.statusCode);
  const n4 = sanitizeStatusCode(t7, 204);
  204 === n4 && e20.node.res.removeHeader("content-length"), e20.node.res.writeHead(n4), e20.node.res.end();
}
function setResponseStatus(e20, t7, n4) {
  t7 && (e20.node.res.statusCode = sanitizeStatusCode(t7, e20.node.res.statusCode)), n4 && (e20.node.res.statusMessage = sanitizeStatusMessage(n4));
}
function getResponseStatus(e20) {
  return e20.node.res.statusCode;
}
function getResponseStatusText(e20) {
  return e20.node.res.statusMessage;
}
function sendRedirect(e20, t7, n4 = 302) {
  e20.node.res.statusCode = sanitizeStatusCode(n4, e20.node.res.statusCode), e20.node.res.setHeader("location", t7);
  return send(e20, `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${t7.replace(/"/g, "%22")}"></head></html>`, ge3.html);
}
function setResponseHeaders(e20, t7) {
  for (const [n4, o13] of Object.entries(t7))
    e20.node.res.setHeader(n4, o13);
}
function setResponseHeader(e20, t7, n4) {
  e20.node.res.setHeader(t7, n4);
}
function sendStream(e20, t7) {
  if (!t7 || "object" != typeof t7)
    throw new Error("[h3] Invalid stream provided.");
  if (e20.node.res._data = t7, !e20.node.res.socket)
    return e20._handled = true, Promise.resolve();
  if (hasProp(t7, "pipeTo") && "function" == typeof t7.pipeTo)
    return t7.pipeTo(new WritableStream({ write(t8) {
      e20.node.res.write(t8);
    } })).then(() => {
      e20.node.res.end();
    });
  if (hasProp(t7, "pipe") && "function" == typeof t7.pipe)
    return new Promise((n4, o13) => {
      t7.pipe(e20.node.res), t7.on && (t7.on("end", () => {
        e20.node.res.end(), n4();
      }), t7.on("error", (e21) => {
        o13(e21);
      })), e20.node.res.on("close", () => {
        t7.abort && t7.abort();
      });
    });
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(e20, t7) {
  for (const [n4, o13] of t7.headers)
    "set-cookie" === n4 ? e20.node.res.appendHeader(n4, splitCookiesString(o13)) : e20.node.res.setHeader(n4, o13);
  if (t7.status && (e20.node.res.statusCode = sanitizeStatusCode(t7.status, e20.node.res.statusCode)), t7.statusText && (e20.node.res.statusMessage = sanitizeStatusMessage(t7.statusText)), t7.redirected && e20.node.res.setHeader("location", t7.url), t7.body)
    return sendStream(e20, t7.body);
  e20.node.res.end();
}
async function proxyRequest(e20, t7, n4 = {}) {
  let o13, s8;
  Be3.has(e20.method) && (n4.streamRequest ? (o13 = getRequestWebStream(e20), s8 = "half") : o13 = await readRawBody(e20, false).catch(() => {
  }));
  const a7 = n4.fetchOptions?.method || e20.method, i11 = function(e21, ...t8) {
    const n5 = t8.filter(Boolean);
    if (0 === n5.length)
      return e21;
    const o14 = new Headers(e21);
    for (const e22 of n5)
      for (const [t9, n6] of Object.entries(e22))
        void 0 !== n6 && o14.set(t9, n6);
    return o14;
  }(getProxyRequestHeaders(e20), n4.fetchOptions?.headers, n4.headers);
  return async function(e21, t8, n5 = {}) {
    let o14;
    try {
      o14 = await _getFetch(n5.fetch)(t8, { headers: n5.headers, ignoreResponseError: true, ...n5.fetchOptions });
    } catch (e22) {
      throw createError$1({ status: 502, statusMessage: "Bad Gateway", cause: e22 });
    }
    e21.node.res.statusCode = sanitizeStatusCode(o14.status, e21.node.res.statusCode), e21.node.res.statusMessage = sanitizeStatusMessage(o14.statusText);
    const s9 = [];
    for (const [t9, n6] of o14.headers.entries())
      "content-encoding" !== t9 && "content-length" !== t9 && ("set-cookie" !== t9 ? e21.node.res.setHeader(t9, n6) : s9.push(...splitCookiesString(n6)));
    s9.length > 0 && e21.node.res.setHeader("set-cookie", s9.map((e22) => (n5.cookieDomainRewrite && (e22 = rewriteCookieProperty(e22, n5.cookieDomainRewrite, "domain")), n5.cookiePathRewrite && (e22 = rewriteCookieProperty(e22, n5.cookiePathRewrite, "path")), e22)));
    n5.onResponse && await n5.onResponse(e21, o14);
    if (void 0 !== o14._data)
      return o14._data;
    if (e21.handled)
      return;
    if (false === n5.sendStream) {
      const t9 = new Uint8Array(await o14.arrayBuffer());
      return e21.node.res.end(t9);
    }
    if (o14.body)
      for await (const t9 of o14.body)
        e21.node.res.write(t9);
    return e21.node.res.end();
  }(e20, t7, { ...n4, fetchOptions: { method: a7, body: o13, duplex: s8, ...n4.fetchOptions, headers: i11 } });
}
function getProxyRequestHeaders(e20) {
  const t7 = /* @__PURE__ */ Object.create(null), n4 = getRequestHeaders(e20);
  for (const e21 in n4)
    Ee3.has(e21) || (t7[e21] = n4[e21]);
  return t7;
}
function fetchWithEvent(e20, t7, n4, o13) {
  return _getFetch(o13?.fetch)(t7, { ...n4, context: n4?.context || e20.context, headers: { ...getProxyRequestHeaders(e20), ...n4?.headers } });
}
function _getFetch(e20) {
  if (e20)
    return e20;
  if (globalThis.fetch)
    return globalThis.fetch;
  throw new Error("fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js.");
}
function rewriteCookieProperty(e20, t7, n4) {
  const o13 = "string" == typeof t7 ? { "*": t7 } : t7;
  return e20.replace(new RegExp(`(;\\s*${n4}=)([^;]+)`, "gi"), (e21, t8, n5) => {
    let s8;
    if (n5 in o13)
      s8 = o13[n5];
    else {
      if (!("*" in o13))
        return e21;
      s8 = o13["*"];
    }
    return s8 ? t8 + s8 : "";
  });
}
function isEvent(e20) {
  return hasProp(e20, "__is_event__");
}
function createEvent(e20, t7) {
  return new H3Event(e20, t7);
}
function defineEventHandler(e20) {
  if ("function" == typeof e20)
    return e20.__is_handler__ = true, e20;
  const t7 = { onRequest: _normalizeArray(e20.onRequest), onBeforeResponse: _normalizeArray(e20.onBeforeResponse) }, _handler = (n4) => async function(e21, t8, n5) {
    if (n5.onRequest) {
      for (const t9 of n5.onRequest)
        if (await t9(e21), e21.handled)
          return;
    }
    const o13 = await t8(e21), s8 = { body: o13 };
    if (n5.onBeforeResponse)
      for (const t9 of n5.onBeforeResponse)
        await t9(e21, s8);
    return s8.body;
  }(n4, e20.handler, t7);
  return _handler.__is_handler__ = true, _handler.__resolve__ = e20.handler.__resolve__, _handler.__websocket__ = e20.websocket, _handler;
}
function _normalizeArray(e20) {
  return e20 ? Array.isArray(e20) ? e20 : [e20] : void 0;
}
function isEventHandler(e20) {
  return hasProp(e20, "__is_handler__");
}
function toEventHandler(e20, t7, n4) {
  return isEventHandler(e20) || console.warn("[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.", n4 && "/" !== n4 ? `
     Route: ${n4}` : "", `
     Handler: ${e20}`), e20;
}
function createApp2(e20 = {}) {
  const t7 = [], n4 = function(e21, t8) {
    const n5 = t8.debug ? 2 : void 0;
    return xe2(async (o14) => {
      o14.node.req.originalUrl = o14.node.req.originalUrl || o14.node.req.url || "/";
      const s9 = o14._path || o14.node.req.url || "/";
      let a8;
      t8.onRequest && await t8.onRequest(o14);
      for (const i11 of e21) {
        if (i11.route.length > 1) {
          if (!s9.startsWith(i11.route))
            continue;
          a8 = s9.slice(i11.route.length) || "/";
        } else
          a8 = s9;
        if (i11.match && !i11.match(a8, o14))
          continue;
        o14._path = a8, o14.node.req.url = a8;
        const e22 = await i11.handler(o14), u5 = void 0 === e22 ? void 0 : await e22;
        if (void 0 !== u5) {
          const e23 = { body: u5 };
          return t8.onBeforeResponse && (o14._onBeforeResponseCalled = true, await t8.onBeforeResponse(o14, e23)), await handleHandlerResponse(o14, e23.body, n5), void (t8.onAfterResponse && (o14._onAfterResponseCalled = true, await t8.onAfterResponse(o14, e23)));
        }
        if (o14.handled)
          return void (t8.onAfterResponse && (o14._onAfterResponseCalled = true, await t8.onAfterResponse(o14, void 0)));
      }
      if (!o14.handled)
        throw createError$1({ statusCode: 404, statusMessage: `Cannot find any path matching ${o14.path || "/"}.` });
      t8.onAfterResponse && (o14._onAfterResponseCalled = true, await t8.onAfterResponse(o14, void 0));
    });
  }(t7, e20), o13 = function(e21) {
    return async (t8) => {
      let n5;
      for (const o14 of e21) {
        if ("/" === o14.route && !o14.handler.__resolve__)
          continue;
        if (!t8.startsWith(o14.route))
          continue;
        if (n5 = t8.slice(o14.route.length) || "/", o14.match && !o14.match(n5, void 0))
          continue;
        let e22 = { route: o14.route, handler: o14.handler };
        if (e22.handler.__resolve__) {
          const t9 = await e22.handler.__resolve__(n5);
          if (!t9)
            continue;
          e22 = { ...e22, ...t9, route: joinURL(e22.route || "/", t9.route || "/") };
        }
        return e22;
      }
    };
  }(t7);
  n4.__resolve__ = o13;
  const s8 = function(e21) {
    let t8;
    return () => (t8 || (t8 = e21()), t8);
  }(() => {
    return t8 = o13, { ...e20.websocket, async resolve(e21) {
      const { pathname: n5 } = parseURL2(e21.url || "/"), o14 = await t8(n5);
      return o14?.handler?.__websocket__ || {};
    } };
    var t8;
  }), a7 = { use: (e21, t8, n5) => use(a7, e21, t8, n5), resolve: o13, handler: n4, stack: t7, options: e20, get websocket() {
    return s8();
  } };
  return a7;
}
function use(e20, t7, n4, o13) {
  if (Array.isArray(t7))
    for (const s8 of t7)
      use(e20, s8, n4, o13);
  else if (Array.isArray(n4))
    for (const s8 of n4)
      use(e20, t7, s8, o13);
  else
    "string" == typeof t7 ? e20.stack.push(normalizeLayer({ ...o13, route: t7, handler: n4 })) : "function" == typeof t7 ? e20.stack.push(normalizeLayer({ ...n4, handler: t7 })) : e20.stack.push(normalizeLayer({ ...t7 }));
  return e20;
}
function normalizeLayer(e20) {
  let t7 = e20.handler;
  return t7.handler && (t7 = t7.handler), e20.lazy ? t7 = lazyEventHandler(t7) : isEventHandler(t7) || (t7 = toEventHandler(t7, 0, e20.route)), { route: withoutTrailingSlash(e20.route), match: e20.match, handler: t7 };
}
function handleHandlerResponse(e20, t7, n4) {
  if (null === t7)
    return sendNoContent(e20);
  if (t7) {
    if (o13 = t7, "undefined" != typeof Response && o13 instanceof Response)
      return sendWebResponse(e20, t7);
    if (function(e21) {
      if (!e21 || "object" != typeof e21)
        return false;
      if ("function" == typeof e21.pipe) {
        if ("function" == typeof e21._read)
          return true;
        if ("function" == typeof e21.abort)
          return true;
      }
      return "function" == typeof e21.pipeTo;
    }(t7))
      return sendStream(e20, t7);
    if (t7.buffer)
      return send(e20, t7);
    if (t7.arrayBuffer && "function" == typeof t7.arrayBuffer)
      return t7.arrayBuffer().then((n5) => send(e20, h6.from(n5), t7.type));
    if (t7 instanceof Error)
      throw createError$1(t7);
    if ("function" == typeof t7.end)
      return true;
  }
  var o13;
  const s8 = typeof t7;
  if ("string" === s8)
    return send(e20, t7, ge3.html);
  if ("object" === s8 || "boolean" === s8 || "number" === s8)
    return send(e20, JSON.stringify(t7, void 0, n4), ge3.json);
  if ("bigint" === s8)
    return send(e20, t7.toString(), ge3.json);
  throw createError$1({ statusCode: 500, statusMessage: `[h3] Cannot send ${s8} as response.` });
}
function toNodeListener(e20) {
  return async function(t7, n4) {
    const o13 = createEvent(t7, n4);
    try {
      await e20.handler(o13);
    } catch (t8) {
      const n5 = createError$1(t8);
      if (isError(t8) || (n5.unhandled = true), setResponseStatus(o13, n5.statusCode, n5.statusMessage), e20.options.onError && await e20.options.onError(n5, o13), o13.handled)
        return;
      (n5.unhandled || n5.fatal) && console.error("[h3]", n5.fatal ? "[fatal]" : "[unhandled]", n5), e20.options.onBeforeResponse && !o13._onBeforeResponseCalled && await e20.options.onBeforeResponse(o13, { body: n5 }), await function(e21, t9, n6) {
        if (e21.handled)
          return;
        const o14 = isError(t9) ? t9 : createError$1(t9), s8 = { statusCode: o14.statusCode, statusMessage: o14.statusMessage, stack: [], data: o14.data };
        if (n6 && (s8.stack = (o14.stack || "").split("\n").map((e22) => e22.trim())), e21.handled)
          return;
        setResponseStatus(e21, Number.parseInt(o14.statusCode), o14.statusMessage), e21.node.res.setHeader("content-type", ge3.json), e21.node.res.end(JSON.stringify(s8, void 0, 2));
      }(o13, n5, !!e20.options.debug), e20.options.onAfterResponse && !o13._onAfterResponseCalled && await e20.options.onAfterResponse(o13, { body: n5 });
    }
  };
}
function isPayloadMethod(e20 = "GET") {
  return ke3.has(e20.toUpperCase());
}
function mergeFetchOptions(e20, t7, n4 = globalThis.Headers) {
  const o13 = { ...t7, ...e20 };
  if (t7?.params && e20?.params && (o13.params = { ...t7?.params, ...e20?.params }), t7?.query && e20?.query && (o13.query = { ...t7?.query, ...e20?.query }), t7?.headers && e20?.headers) {
    o13.headers = new n4(t7?.headers || {});
    for (const [t8, s8] of new n4(e20?.headers || {}))
      o13.headers.set(t8, s8);
  }
  return o13;
}
function createFetch$1(e20 = {}) {
  const { fetch: t7 = globalThis.fetch, Headers: n4 = globalThis.Headers, AbortController: o13 = globalThis.AbortController } = e20;
  async function onError(e21) {
    const t8 = e21.error && "AbortError" === e21.error.name && !e21.options.timeout || false;
    if (false !== e21.options.retry && !t8) {
      let t9;
      t9 = "number" == typeof e21.options.retry ? e21.options.retry : isPayloadMethod(e21.options.method) ? 0 : 1;
      const n6 = e21.response && e21.response.status || 500;
      if (t9 > 0 && (Array.isArray(e21.options.retryStatusCodes) ? e21.options.retryStatusCodes.includes(n6) : Se3.has(n6))) {
        const n7 = e21.options.retryDelay || 0;
        return n7 > 0 && await new Promise((e22) => setTimeout(e22, n7)), $fetchRaw(e21.request, { ...e21.options, retry: t9 - 1 });
      }
    }
    const n5 = function(e22) {
      const t9 = e22.error?.message || e22.error?.toString() || "", n6 = e22.request?.method || e22.options?.method || "GET", o14 = e22.request?.url || String(e22.request) || "/", s8 = `[${n6}] ${JSON.stringify(o14)}`, a7 = e22.response ? `${e22.response.status} ${e22.response.statusText}` : "<no response>", i11 = new FetchError(`${s8}: ${a7}${t9 ? ` ${t9}` : ""}`, e22.error ? { cause: e22.error } : void 0);
      for (const t10 of ["request", "options", "response"])
        Object.defineProperty(i11, t10, { get: () => e22[t10] });
      for (const [t10, n7] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]])
        Object.defineProperty(i11, t10, { get: () => e22.response && e22.response[n7] });
      return i11;
    }(e21);
    throw Error.captureStackTrace && Error.captureStackTrace(n5, $fetchRaw), n5;
  }
  const $fetchRaw = async function(s8, a7 = {}) {
    const i11 = { request: s8, options: mergeFetchOptions(a7, e20.defaults, n4), response: void 0, error: void 0 };
    let u5;
    if (i11.options.method = i11.options.method?.toUpperCase(), i11.options.onRequest && await i11.options.onRequest(i11), "string" == typeof i11.request && (i11.options.baseURL && (i11.request = function(e21, t8) {
      if (isEmptyURL(t8) || hasProtocol(e21))
        return e21;
      const n5 = withoutTrailingSlash(t8);
      return e21.startsWith(n5) ? e21 : joinURL(n5, e21);
    }(i11.request, i11.options.baseURL)), (i11.options.query || i11.options.params) && (i11.request = withQuery(i11.request, { ...i11.options.params, ...i11.options.query }))), i11.options.body && isPayloadMethod(i11.options.method) && (!function(e21) {
      if (void 0 === e21)
        return false;
      const t8 = typeof e21;
      return "string" === t8 || "number" === t8 || "boolean" === t8 || null === t8 || "object" === t8 && (!!Array.isArray(e21) || !e21.buffer && (e21.constructor && "Object" === e21.constructor.name || "function" == typeof e21.toJSON));
    }(i11.options.body) ? ("pipeTo" in i11.options.body && "function" == typeof i11.options.body.pipeTo || "function" == typeof i11.options.body.pipe) && ("duplex" in i11.options || (i11.options.duplex = "half")) : (i11.options.body = "string" == typeof i11.options.body ? i11.options.body : JSON.stringify(i11.options.body), i11.options.headers = new n4(i11.options.headers || {}), i11.options.headers.has("content-type") || i11.options.headers.set("content-type", "application/json"), i11.options.headers.has("accept") || i11.options.headers.set("accept", "application/json"))), !i11.options.signal && i11.options.timeout) {
      const e21 = new o13();
      u5 = setTimeout(() => e21.abort(), i11.options.timeout), i11.options.signal = e21.signal;
    }
    try {
      i11.response = await t7(i11.request, i11.options);
    } catch (e21) {
      return i11.error = e21, i11.options.onRequestError && await i11.options.onRequestError(i11), await onError(i11);
    } finally {
      u5 && clearTimeout(u5);
    }
    if (i11.response.body && !Te3.has(i11.response.status) && "HEAD" !== i11.options.method) {
      const e21 = (i11.options.parseResponse ? "json" : i11.options.responseType) || function(e22 = "") {
        if (!e22)
          return "json";
        const t8 = e22.split(";").shift() || "";
        return $e3.test(t8) ? "json" : Ae3.has(t8) || t8.startsWith("text/") ? "text" : "blob";
      }(i11.response.headers.get("content-type") || "");
      switch (e21) {
        case "json": {
          const e22 = await i11.response.text(), t8 = i11.options.parseResponse || destr;
          i11.response._data = t8(e22);
          break;
        }
        case "stream":
          i11.response._data = i11.response.body;
          break;
        default:
          i11.response._data = await i11.response[e21]();
      }
    }
    return i11.options.onResponse && await i11.options.onResponse(i11), !i11.options.ignoreResponseError && i11.response.status >= 400 && i11.response.status < 600 ? (i11.options.onResponseError && await i11.options.onResponseError(i11), await onError(i11)) : i11.response;
  }, $fetch = async function(e21, t8) {
    return (await $fetchRaw(e21, t8))._data;
  };
  return $fetch.raw = $fetchRaw, $fetch.native = (...e21) => t7(...e21), $fetch.create = (t8 = {}) => createFetch$1({ ...e20, defaults: { ...e20.defaults, ...t8 } }), $fetch;
}
function flatHooks(e20, t7 = {}, n4) {
  for (const o13 in e20) {
    const s8 = e20[o13], a7 = n4 ? `${n4}:${o13}` : o13;
    "object" == typeof s8 && null !== s8 ? flatHooks(s8, t7, a7) : "function" == typeof s8 && (t7[a7] = s8);
  }
  return t7;
}
function serialTaskCaller(e20, t7) {
  const n4 = t7.shift(), o13 = Pe3(n4);
  return e20.reduce((e21, n5) => e21.then(() => o13.run(() => n5(...t7))), Promise.resolve());
}
function parallelTaskCaller(e20, t7) {
  const n4 = t7.shift(), o13 = Pe3(n4);
  return Promise.all(e20.map((e21) => o13.run(() => e21(...t7))));
}
function callEachWith(e20, t7) {
  for (const n4 of [...e20])
    n4(t7);
}
function createHooks() {
  return new Hookable();
}
function klona(e20) {
  if ("object" != typeof e20)
    return e20;
  var t7, n4, o13 = Object.prototype.toString.call(e20);
  if ("[object Object]" === o13) {
    if (e20.constructor !== Object && "function" == typeof e20.constructor)
      for (t7 in n4 = new e20.constructor(), e20)
        e20.hasOwnProperty(t7) && n4[t7] !== e20[t7] && (n4[t7] = klona(e20[t7]));
    else
      for (t7 in n4 = {}, e20)
        "__proto__" === t7 ? Object.defineProperty(n4, t7, { value: klona(e20[t7]), configurable: true, enumerable: true, writable: true }) : n4[t7] = klona(e20[t7]);
    return n4;
  }
  if ("[object Array]" === o13) {
    for (t7 = e20.length, n4 = Array(t7); t7--; )
      n4[t7] = klona(e20[t7]);
    return n4;
  }
  return "[object Set]" === o13 ? (n4 = /* @__PURE__ */ new Set(), e20.forEach(function(e21) {
    n4.add(klona(e21));
  }), n4) : "[object Map]" === o13 ? (n4 = /* @__PURE__ */ new Map(), e20.forEach(function(e21, t8) {
    n4.set(klona(t8), klona(e21));
  }), n4) : "[object Date]" === o13 ? /* @__PURE__ */ new Date(+e20) : "[object RegExp]" === o13 ? ((n4 = new RegExp(e20.source, e20.flags)).lastIndex = e20.lastIndex, n4) : "[object DataView]" === o13 ? new e20.constructor(klona(e20.buffer)) : "[object ArrayBuffer]" === o13 ? e20.slice(0) : "Array]" === o13.slice(-6) ? new e20.constructor(e20) : e20;
}
function isUppercase(e20 = "") {
  if (!ze3.test(e20))
    return e20 !== e20.toLowerCase();
}
function kebabCase(e20, t7) {
  return e20 ? (Array.isArray(e20) ? e20 : function(e21, t8) {
    const n4 = qe3, o13 = [];
    if (!e21 || "string" != typeof e21)
      return o13;
    let s8, a7, i11 = "";
    for (const t9 of e21) {
      const e22 = n4.includes(t9);
      if (true === e22) {
        o13.push(i11), i11 = "", s8 = void 0;
        continue;
      }
      const u5 = isUppercase(t9);
      if (false === a7) {
        if (false === s8 && true === u5) {
          o13.push(i11), i11 = t9, s8 = u5;
          continue;
        }
        if (true === s8 && false === u5 && i11.length > 1) {
          const e23 = i11.at(-1);
          o13.push(i11.slice(0, Math.max(0, i11.length - 1))), i11 = e23 + t9, s8 = u5;
          continue;
        }
      }
      i11 += t9, s8 = u5, a7 = e22;
    }
    return o13.push(i11), o13;
  }(e20)).map((e21) => e21.toLowerCase()).join(t7) : "";
}
function getEnv(e20, t7) {
  const n4 = (o13 = e20, kebabCase(o13 || "", "_")).toUpperCase();
  var o13;
  return destr(R4.env[t7.prefix + n4] ?? R4.env[t7.altPrefix + n4]);
}
function _isObject(e20) {
  return "object" == typeof e20 && !Array.isArray(e20);
}
function applyEnv(e20, t7, n4 = "") {
  for (const o13 in e20) {
    const s8 = n4 ? `${n4}_${o13}` : o13, a7 = getEnv(s8, t7);
    _isObject(e20[o13]) ? _isObject(a7) ? (e20[o13] = { ...e20[o13], ...a7 }, applyEnv(e20[o13], t7, s8)) : void 0 === a7 ? applyEnv(e20[o13], t7, s8) : e20[o13] = a7 ?? e20[o13] : e20[o13] = a7 ?? e20[o13], t7.envExpansion && "string" == typeof e20[o13] && (e20[o13] = e20[o13].replace(Ke3, (e21, t8) => R4.env[t8] || e21));
  }
  return e20;
}
function useRuntimeConfig2(e20) {
  if (!e20)
    return Ve3;
  if (e20.context.nitro.runtimeConfig)
    return e20.context.nitro.runtimeConfig;
  const t7 = klona(We3);
  return applyEnv(t7, Fe3), e20.context.nitro.runtimeConfig = t7, t7;
}
function _deepFreeze(e20) {
  const t7 = Object.getOwnPropertyNames(e20);
  for (const n4 of t7) {
    const t8 = e20[n4];
    t8 && "object" == typeof t8 && _deepFreeze(t8);
  }
  return Object.freeze(e20);
}
function asyncCall(e20, ...t7) {
  try {
    return (n4 = e20(...t7)) && "function" == typeof n4.then ? n4 : Promise.resolve(n4);
  } catch (e21) {
    return Promise.reject(e21);
  }
  var n4;
}
function stringify2(e20) {
  if (function(e21) {
    const t7 = typeof e21;
    return null === e21 || "object" !== t7 && "function" !== t7;
  }(e20))
    return String(e20);
  if (function(e21) {
    const t7 = Object.getPrototypeOf(e21);
    return !t7 || t7.isPrototypeOf(Object);
  }(e20) || Array.isArray(e20))
    return JSON.stringify(e20);
  if ("function" == typeof e20.toJSON)
    return stringify2(e20.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (void 0 === typeof h6)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
function normalizeKey$2(e20) {
  return e20 ? e20.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function joinKeys$1(...e20) {
  return normalizeKey$2(e20.join(":"));
}
function normalizeBaseKey(e20) {
  return (e20 = normalizeKey$2(e20)) ? e20 + ":" : "";
}
function createStorage(e20 = {}) {
  const t7 = { mounts: { "": e20.driver || memory() }, mountpoints: [""], watching: false, watchListeners: [], unwatch: {} }, getMount = (e21) => {
    for (const n5 of t7.mountpoints)
      if (e21.startsWith(n5))
        return { base: n5, relativeKey: e21.slice(n5.length), driver: t7.mounts[n5] };
    return { base: "", relativeKey: e21, driver: t7.mounts[""] };
  }, getMounts = (e21, n5) => t7.mountpoints.filter((t8) => t8.startsWith(e21) || n5 && e21.startsWith(t8)).map((n6) => ({ relativeBase: e21.length > n6.length ? e21.slice(n6.length) : void 0, mountpoint: n6, driver: t7.mounts[n6] })), onChange = (e21, n5) => {
    if (t7.watching) {
      n5 = normalizeKey$2(n5);
      for (const o13 of t7.watchListeners)
        o13(e21, n5);
    }
  }, stopWatch = async () => {
    if (t7.watching) {
      for (const e21 in t7.unwatch)
        await t7.unwatch[e21]();
      t7.unwatch = {}, t7.watching = false;
    }
  }, runBatch = (e21, t8, n5) => {
    const o13 = /* @__PURE__ */ new Map(), getBatch = (e22) => {
      let t9 = o13.get(e22.base);
      return t9 || (t9 = { driver: e22.driver, base: e22.base, items: [] }, o13.set(e22.base, t9)), t9;
    };
    for (const n6 of e21) {
      const e22 = "string" == typeof n6, o14 = normalizeKey$2(e22 ? n6 : n6.key), s8 = e22 ? void 0 : n6.value, a7 = e22 || !n6.options ? t8 : { ...t8, ...n6.options }, i11 = getMount(o14);
      getBatch(i11).items.push({ key: o14, value: s8, relativeKey: i11.relativeKey, options: a7 });
    }
    return Promise.all([...o13.values()].map((e22) => n5(e22))).then((e22) => e22.flat());
  }, n4 = { hasItem(e21, t8 = {}) {
    e21 = normalizeKey$2(e21);
    const { relativeKey: n5, driver: o13 } = getMount(e21);
    return asyncCall(o13.hasItem, n5, t8);
  }, getItem(e21, t8 = {}) {
    e21 = normalizeKey$2(e21);
    const { relativeKey: n5, driver: o13 } = getMount(e21);
    return asyncCall(o13.getItem, n5, t8).then((e22) => destr(e22));
  }, getItems: (e21, t8) => runBatch(e21, t8, (e22) => e22.driver.getItems ? asyncCall(e22.driver.getItems, e22.items.map((e23) => ({ key: e23.relativeKey, options: e23.options })), t8).then((t9) => t9.map((t10) => ({ key: joinKeys$1(e22.base, t10.key), value: destr(t10.value) }))) : Promise.all(e22.items.map((t9) => asyncCall(e22.driver.getItem, t9.relativeKey, t9.options).then((e23) => ({ key: t9.key, value: destr(e23) }))))), getItemRaw(e21, t8 = {}) {
    e21 = normalizeKey$2(e21);
    const { relativeKey: n5, driver: o13 } = getMount(e21);
    return o13.getItemRaw ? asyncCall(o13.getItemRaw, n5, t8) : asyncCall(o13.getItem, n5, t8).then((e22) => function(e23) {
      return "string" != typeof e23 ? e23 : e23.startsWith(Qe3) ? (checkBufferSupport(), h6.from(e23.slice(Qe3.length), "base64")) : e23;
    }(e22));
  }, async setItem(e21, t8, o13 = {}) {
    if (void 0 === t8)
      return n4.removeItem(e21);
    e21 = normalizeKey$2(e21);
    const { relativeKey: s8, driver: a7 } = getMount(e21);
    a7.setItem && (await asyncCall(a7.setItem, s8, stringify2(t8), o13), a7.watch || onChange("update", e21));
  }, async setItems(e21, t8) {
    await runBatch(e21, t8, async (e22) => {
      if (e22.driver.setItems)
        return asyncCall(e22.driver.setItems, e22.items.map((e23) => ({ key: e23.relativeKey, value: stringify2(e23.value), options: e23.options })), t8);
      e22.driver.setItem && await Promise.all(e22.items.map((t9) => asyncCall(e22.driver.setItem, t9.relativeKey, stringify2(t9.value), t9.options)));
    });
  }, async setItemRaw(e21, t8, o13 = {}) {
    if (void 0 === t8)
      return n4.removeItem(e21, o13);
    e21 = normalizeKey$2(e21);
    const { relativeKey: s8, driver: a7 } = getMount(e21);
    if (a7.setItemRaw)
      await asyncCall(a7.setItemRaw, s8, t8, o13);
    else {
      if (!a7.setItem)
        return;
      await asyncCall(a7.setItem, s8, function(e22) {
        if ("string" == typeof e22)
          return e22;
        checkBufferSupport();
        const t9 = h6.from(e22).toString("base64");
        return Qe3 + t9;
      }(t8), o13);
    }
    a7.watch || onChange("update", e21);
  }, async removeItem(e21, t8 = {}) {
    "boolean" == typeof t8 && (t8 = { removeMeta: t8 }), e21 = normalizeKey$2(e21);
    const { relativeKey: n5, driver: o13 } = getMount(e21);
    o13.removeItem && (await asyncCall(o13.removeItem, n5, t8), (t8.removeMeta || t8.removeMata) && await asyncCall(o13.removeItem, n5 + "$", t8), o13.watch || onChange("remove", e21));
  }, async getMeta(e21, t8 = {}) {
    "boolean" == typeof t8 && (t8 = { nativeOnly: t8 }), e21 = normalizeKey$2(e21);
    const { relativeKey: n5, driver: o13 } = getMount(e21), s8 = /* @__PURE__ */ Object.create(null);
    if (o13.getMeta && Object.assign(s8, await asyncCall(o13.getMeta, n5, t8)), !t8.nativeOnly) {
      const e22 = await asyncCall(o13.getItem, n5 + "$", t8).then((e23) => destr(e23));
      e22 && "object" == typeof e22 && ("string" == typeof e22.atime && (e22.atime = new Date(e22.atime)), "string" == typeof e22.mtime && (e22.mtime = new Date(e22.mtime)), Object.assign(s8, e22));
    }
    return s8;
  }, setMeta(e21, t8, n5 = {}) {
    return this.setItem(e21 + "$", t8, n5);
  }, removeMeta(e21, t8 = {}) {
    return this.removeItem(e21 + "$", t8);
  }, async getKeys(e21, t8 = {}) {
    e21 = normalizeBaseKey(e21);
    const n5 = getMounts(e21, true);
    let o13 = [];
    const s8 = [];
    for (const e22 of n5) {
      const n6 = (await asyncCall(e22.driver.getKeys, e22.relativeBase, t8)).map((t9) => e22.mountpoint + normalizeKey$2(t9)).filter((e23) => !o13.some((t9) => e23.startsWith(t9)));
      s8.push(...n6), o13 = [e22.mountpoint, ...o13.filter((t9) => !t9.startsWith(e22.mountpoint))];
    }
    return e21 ? s8.filter((t9) => t9.startsWith(e21) && !t9.endsWith("$")) : s8.filter((e22) => !e22.endsWith("$"));
  }, async clear(e21, t8 = {}) {
    e21 = normalizeBaseKey(e21), await Promise.all(getMounts(e21, false).map(async (e22) => {
      if (e22.driver.clear)
        return asyncCall(e22.driver.clear, e22.relativeBase, t8);
      if (e22.driver.removeItem) {
        const n5 = await e22.driver.getKeys(e22.relativeBase || "", t8);
        return Promise.all(n5.map((n6) => e22.driver.removeItem(n6, t8)));
      }
    }));
  }, async dispose() {
    await Promise.all(Object.values(t7.mounts).map((e21) => dispose(e21)));
  }, watch: async (e21) => (await (async () => {
    if (!t7.watching) {
      t7.watching = true;
      for (const e22 in t7.mounts)
        t7.unwatch[e22] = await watch2(t7.mounts[e22], onChange, e22);
    }
  })(), t7.watchListeners.push(e21), async () => {
    t7.watchListeners = t7.watchListeners.filter((t8) => t8 !== e21), 0 === t7.watchListeners.length && await stopWatch();
  }), async unwatch() {
    t7.watchListeners = [], await stopWatch();
  }, mount(e21, o13) {
    if ((e21 = normalizeBaseKey(e21)) && t7.mounts[e21])
      throw new Error(`already mounted at ${e21}`);
    return e21 && (t7.mountpoints.push(e21), t7.mountpoints.sort((e22, t8) => t8.length - e22.length)), t7.mounts[e21] = o13, t7.watching && Promise.resolve(watch2(o13, onChange, e21)).then((n5) => {
      t7.unwatch[e21] = n5;
    }).catch(console.error), n4;
  }, async unmount(e21, n5 = true) {
    (e21 = normalizeBaseKey(e21)) && t7.mounts[e21] && (t7.watching && e21 in t7.unwatch && (t7.unwatch[e21](), delete t7.unwatch[e21]), n5 && await dispose(t7.mounts[e21]), t7.mountpoints = t7.mountpoints.filter((t8) => t8 !== e21), delete t7.mounts[e21]);
  }, getMount(e21 = "") {
    e21 = normalizeKey$2(e21) + ":";
    const t8 = getMount(e21);
    return { driver: t8.driver, base: t8.base };
  }, getMounts(e21 = "", t8 = {}) {
    e21 = normalizeKey$2(e21);
    return getMounts(e21, t8.parents).map((e22) => ({ driver: e22.driver, base: e22.mountpoint }));
  } };
  return n4;
}
function watch2(e20, t7, n4) {
  return e20.watch ? e20.watch((e21, o13) => t7(e21, n4 + o13)) : () => {
  };
}
async function dispose(e20) {
  "function" == typeof e20.dispose && await asyncCall(e20.dispose);
}
function normalizeKey2(e20) {
  return e20 ? e20.replace(/[/\\]/g, ":").replace(/^:|:$/g, "") : "";
}
function createError2(e20, t7, n4) {
  return new Error(`[unstorage] [${e20}] ${t7}`, n4);
}
function getKVBinding(e20 = "STORAGE") {
  return function(e21) {
    let t7 = "[binding]";
    if ("string" == typeof e21 && (t7 = e21, e21 = globalThis[t7] || globalThis.__env__?.[t7]), !e21)
      throw createError2("cloudflare", `Invalid binding \`${t7}\`: \`${e21}\``);
    for (const n4 of ["get", "put", "delete"])
      if (!(n4 in e21))
        throw createError2("cloudflare", `Invalid binding \`${t7}\`: \`${n4}\` key is missing`);
    return e21;
  }(e20);
}
function useStorage(e20 = "") {
  return e20 ? function(e21, t7) {
    if (!(t7 = normalizeBaseKey(t7)))
      return e21;
    const n4 = { ...e21 };
    for (const o13 of Je3)
      n4[o13] = (n5 = "", ...s8) => e21[o13](t7 + n5, ...s8);
    return n4.getKeys = (n5 = "", ...o13) => e21.getKeys(t7 + n5, ...o13).then((e22) => e22.map((e23) => e23.slice(t7.length))), n4;
  }(Ye3, e20) : Ye3;
}
function getKey(...e20) {
  return e20.length > 0 ? hash(e20, {}) : "";
}
function escapeKey(e20) {
  return String(e20).replace(/\W/g, "");
}
function cloneWithProxy(e20, t7) {
  return new Proxy(e20, { get: (e21, n4, o13) => n4 in t7 ? t7[n4] : Reflect.get(e21, n4, o13), set: (e21, n4, o13, s8) => n4 in t7 ? (t7[n4] = o13, true) : Reflect.set(e21, n4, o13, s8) });
}
function getRouteRules(e20) {
  return e20.context._nitro = e20.context._nitro || {}, e20.context._nitro.routeRules || (e20.context._nitro.routeRules = getRouteRulesForPath(withoutBase(e20.path.split("?")[0], useRuntimeConfig2().app.baseURL))), e20.context._nitro.routeRules;
}
function getRouteRulesForPath(e20) {
  return re({}, ...et3.matchAll(e20).reverse());
}
function requireNuxtHubFeature(e20) {
  const t7 = useRuntimeConfig2().hub;
  if (!t7[e20])
    throw createError$1({ statusCode: 422, statusMessage: "Unprocessable Entity", message: rt3[e20] });
  if (t7.remote && !t7.remoteManifest?.features?.[e20] && !t7.remoteManifest?.storage?.[e20]) {
    throw createError$1({ statusCode: 422, statusMessage: "Unprocessable Entity", message: `NuxtHub \`${e20}\` is not enabled in the remote project. Deploy a new version with \`${e20}\` enabled and try again.
Read more at \`https://hub.nuxt.com/docs/getting-started/remote-storage\`` });
  }
}
function hubKV() {
  if (requireNuxtHubFeature("kv"), nt3)
    return nt3;
  const e20 = useRuntimeConfig2().hub, t7 = R4.env.KV || globalThis.__env__?.KV || globalThis.KV;
  if (e20.remote && e20.projectUrl && !t7)
    return function(e21, t8) {
      requireNuxtHubFeature("kv");
      const n4 = createStorage({ driver: httpDriver({ base: joinURL(e21, "/api/_hub/kv/"), headers: { Authorization: `Bearer ${t8}` } }) });
      return { keys: n4.getKeys, get: n4.getItem, set: n4.setItem, has: n4.hasItem, del: n4.removeItem, ...n4 };
    }(e20.projectUrl, e20.projectSecretKey || e20.userToken);
  if (t7) {
    const e21 = createStorage({ driver: cloudflareKVBindingDriver({ binding: t7 }) });
    return nt3 = { keys: e21.getKeys, get: e21.getItem, set: e21.setItem, has: e21.hasItem, del: e21.removeItem, ...e21 }, nt3;
  }
  throw createError$1("Missing Cloudflare KV binding (KV)");
}
function hasReqHeader(e20, t7, n4) {
  const o13 = getRequestHeader(e20, t7);
  return o13 && "string" == typeof o13 && o13.toLowerCase().includes(n4);
}
function joinHeaders(e20) {
  return Array.isArray(e20) ? e20.join(", ") : String(e20);
}
function normalizeCookieHeader(e20 = "") {
  return splitCookiesString(joinHeaders(e20));
}
function normalizeCookieHeaders(e20) {
  const t7 = new Headers();
  for (const [n4, o13] of e20)
    if ("set-cookie" === n4)
      for (const e21 of normalizeCookieHeader(o13))
        t7.append("set-cookie", e21);
    else
      t7.set(n4, joinHeaders(o13));
  return t7;
}
var e19, t6, n3, o12, s7, a6, i10, u4, c4, f2, h6, l3, d4, p3, m9, y4, g2, b4, w5, _4, _getEnv, v3, B3, R4, x3, I4, k5, A4, $4, S4, T4, j6, C4, O3, L3, N3, U4, M3, H3, P4, z4, q6, K3, D3, WordArray, W3, F4, V3, Q3, BufferedBlockAlgorithm, Hasher, J3, Z4, G3, SHA256, Y4, X4, ee4, te4, re, ne4, oe4, se4, ae4, _Readable, ie4, ue3, ce3, fe3, he3, Socket, IncomingMessage, ServerResponse, le3, __publicField$2, H3Error, de3, pe3, me3, ye3, ge3, be3, we3, _e3, ve3, Be3, Ee3, Re3, __publicField, H3Event, xe2, lazyEventHandler, Ie3, FetchError, ke3, Ae3, $e3, Se3, Te3, je3, Ce3, Oe3, Le3, Ne3, Ue2, Me3, He3, Pe3, Hookable, ze3, qe3, Ke3, De3, We3, Fe3, Ve3, Qe3, Je3, memory, Ze3, normalizeKey$1, Ge3, cloudflareKVBindingDriver, Ye3, Xe3, cachedFunction, cachedEventHandler, et3, tt3, errorHandler, httpDriver, rt3, nt3, _lazy_FfAYom, ot3, st3, at3, useNitroApp, it3, ut3, ct3, ft3;
var init_runtime = __esm({
  ".wrangler/tmp/pages-nNPccD/chunks/runtime.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    e19 = [];
    t6 = [];
    n3 = "undefined" == typeof Uint8Array ? Array : Uint8Array;
    o12 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (let n4 = 0, s8 = 64; n4 < s8; ++n4)
      e19[n4] = o12[n4], t6[o12.charCodeAt(n4)] = n4;
    t6["-".charCodeAt(0)] = 62, t6["_".charCodeAt(0)] = 63;
    s7 = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
    a6 = 2147483647;
    Buffer$1.TYPED_ARRAY_SUPPORT = function() {
      try {
        const e20 = new Uint8Array(1), t7 = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(t7, Uint8Array.prototype), Object.setPrototypeOf(e20, t7), 42 === e20.foo();
      } catch {
        return false;
      }
    }(), Buffer$1.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This environment lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(Buffer$1.prototype, "parent", { enumerable: true, get: function() {
      if (Buffer$1.isBuffer(this))
        return this.buffer;
    } }), Object.defineProperty(Buffer$1.prototype, "offset", { enumerable: true, get: function() {
      if (Buffer$1.isBuffer(this))
        return this.byteOffset;
    } }), Buffer$1.poolSize = 8192, Buffer$1.from = function(e20, t7, n4) {
      return from(e20, t7, n4);
    }, Object.setPrototypeOf(Buffer$1.prototype, Uint8Array.prototype), Object.setPrototypeOf(Buffer$1, Uint8Array), Buffer$1.alloc = function(e20, t7, n4) {
      return function(e21, t8, n5) {
        return assertSize(e21), e21 <= 0 ? createBuffer2(e21) : void 0 !== t8 ? "string" == typeof n5 ? createBuffer2(e21).fill(t8, n5) : createBuffer2(e21).fill(t8) : createBuffer2(e21);
      }(e20, t7, n4);
    }, Buffer$1.allocUnsafe = function(e20) {
      return allocUnsafe(e20);
    }, Buffer$1.allocUnsafeSlow = function(e20) {
      return allocUnsafe(e20);
    }, Buffer$1.isBuffer = function(e20) {
      return null != e20 && true === e20._isBuffer && e20 !== Buffer$1.prototype;
    }, Buffer$1.compare = function(e20, t7) {
      if (isInstance(e20, Uint8Array) && (e20 = Buffer$1.from(e20, e20.offset, e20.byteLength)), isInstance(t7, Uint8Array) && (t7 = Buffer$1.from(t7, t7.offset, t7.byteLength)), !Buffer$1.isBuffer(e20) || !Buffer$1.isBuffer(t7))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (e20 === t7)
        return 0;
      let n4 = e20.length, o13 = t7.length;
      for (let s8 = 0, a7 = Math.min(n4, o13); s8 < a7; ++s8)
        if (e20[s8] !== t7[s8]) {
          n4 = e20[s8], o13 = t7[s8];
          break;
        }
      return n4 < o13 ? -1 : o13 < n4 ? 1 : 0;
    }, Buffer$1.isEncoding = function(e20) {
      switch (String(e20).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    }, Buffer$1.concat = function(e20, t7) {
      if (!Array.isArray(e20))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === e20.length)
        return Buffer$1.alloc(0);
      let n4;
      if (void 0 === t7)
        for (t7 = 0, n4 = 0; n4 < e20.length; ++n4)
          t7 += e20[n4].length;
      const o13 = Buffer$1.allocUnsafe(t7);
      let s8 = 0;
      for (n4 = 0; n4 < e20.length; ++n4) {
        let t8 = e20[n4];
        if (isInstance(t8, Uint8Array))
          s8 + t8.length > o13.length ? (Buffer$1.isBuffer(t8) || (t8 = Buffer$1.from(t8.buffer, t8.byteOffset, t8.byteLength)), t8.copy(o13, s8)) : Uint8Array.prototype.set.call(o13, t8, s8);
        else {
          if (!Buffer$1.isBuffer(t8))
            throw new TypeError('"list" argument must be an Array of Buffers');
          t8.copy(o13, s8);
        }
        s8 += t8.length;
      }
      return o13;
    }, Buffer$1.byteLength = byteLength, Buffer$1.prototype._isBuffer = true, Buffer$1.prototype.swap16 = function() {
      const e20 = this.length;
      if (e20 % 2 != 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let t7 = 0; t7 < e20; t7 += 2)
        swap(this, t7, t7 + 1);
      return this;
    }, Buffer$1.prototype.swap32 = function() {
      const e20 = this.length;
      if (e20 % 4 != 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let t7 = 0; t7 < e20; t7 += 4)
        swap(this, t7, t7 + 3), swap(this, t7 + 1, t7 + 2);
      return this;
    }, Buffer$1.prototype.swap64 = function() {
      const e20 = this.length;
      if (e20 % 8 != 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let t7 = 0; t7 < e20; t7 += 8)
        swap(this, t7, t7 + 7), swap(this, t7 + 1, t7 + 6), swap(this, t7 + 2, t7 + 5), swap(this, t7 + 3, t7 + 4);
      return this;
    }, Buffer$1.prototype.toString = function() {
      const e20 = this.length;
      return 0 === e20 ? "" : 0 === arguments.length ? utf8Slice(this, 0, e20) : Reflect.apply(slowToString, this, arguments);
    }, Buffer$1.prototype.toLocaleString = Buffer$1.prototype.toString, Buffer$1.prototype.equals = function(e20) {
      if (!Buffer$1.isBuffer(e20))
        throw new TypeError("Argument must be a Buffer");
      return this === e20 || 0 === Buffer$1.compare(this, e20);
    }, Buffer$1.prototype.inspect = function() {
      let e20 = "";
      return e20 = this.toString("hex", 0, 50).replace(/(.{2})/g, "$1 ").trim(), this.length > 50 && (e20 += " ... "), "<Buffer " + e20 + ">";
    }, s7 && (Buffer$1.prototype[s7] = Buffer$1.prototype.inspect), Buffer$1.prototype.compare = function(e20, t7, n4, o13, s8) {
      if (isInstance(e20, Uint8Array) && (e20 = Buffer$1.from(e20, e20.offset, e20.byteLength)), !Buffer$1.isBuffer(e20))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e20);
      if (void 0 === t7 && (t7 = 0), void 0 === n4 && (n4 = e20 ? e20.length : 0), void 0 === o13 && (o13 = 0), void 0 === s8 && (s8 = this.length), t7 < 0 || n4 > e20.length || o13 < 0 || s8 > this.length)
        throw new RangeError("out of range index");
      if (o13 >= s8 && t7 >= n4)
        return 0;
      if (o13 >= s8)
        return -1;
      if (t7 >= n4)
        return 1;
      if (this === e20)
        return 0;
      let a7 = (s8 >>>= 0) - (o13 >>>= 0), i11 = (n4 >>>= 0) - (t7 >>>= 0);
      const u5 = Math.min(a7, i11), c5 = this.slice(o13, s8), f3 = e20.slice(t7, n4);
      for (let e21 = 0; e21 < u5; ++e21)
        if (c5[e21] !== f3[e21]) {
          a7 = c5[e21], i11 = f3[e21];
          break;
        }
      return a7 < i11 ? -1 : i11 < a7 ? 1 : 0;
    }, Buffer$1.prototype.includes = function(e20, t7, n4) {
      return -1 !== this.indexOf(e20, t7, n4);
    }, Buffer$1.prototype.indexOf = function(e20, t7, n4) {
      return bidirectionalIndexOf(this, e20, t7, n4, true);
    }, Buffer$1.prototype.lastIndexOf = function(e20, t7, n4) {
      return bidirectionalIndexOf(this, e20, t7, n4, false);
    }, Buffer$1.prototype.write = function(e20, t7, n4, o13) {
      if (void 0 === t7)
        o13 = "utf8", n4 = this.length, t7 = 0;
      else if (void 0 === n4 && "string" == typeof t7)
        o13 = t7, n4 = this.length, t7 = 0;
      else {
        if (!Number.isFinite(t7))
          throw new TypeError("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        t7 >>>= 0, Number.isFinite(n4) ? (n4 >>>= 0, void 0 === o13 && (o13 = "utf8")) : (o13 = n4, n4 = void 0);
      }
      const s8 = this.length - t7;
      if ((void 0 === n4 || n4 > s8) && (n4 = s8), e20.length > 0 && (n4 < 0 || t7 < 0) || t7 > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      o13 || (o13 = "utf8");
      let a7 = false;
      for (; ; )
        switch (o13) {
          case "hex":
            return hexWrite(this, e20, t7, n4);
          case "utf8":
          case "utf-8":
            return utf8Write(this, e20, t7, n4);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, e20, t7, n4);
          case "base64":
            return base64Write(this, e20, t7, n4);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, e20, t7, n4);
          default:
            if (a7)
              throw new TypeError("Unknown encoding: " + o13);
            o13 = ("" + o13).toLowerCase(), a7 = true;
        }
    }, Buffer$1.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    i10 = 4096;
    Buffer$1.prototype.slice = function(e20, t7) {
      const n4 = this.length;
      (e20 = Math.trunc(e20)) < 0 ? (e20 += n4) < 0 && (e20 = 0) : e20 > n4 && (e20 = n4), (t7 = void 0 === t7 ? n4 : Math.trunc(t7)) < 0 ? (t7 += n4) < 0 && (t7 = 0) : t7 > n4 && (t7 = n4), t7 < e20 && (t7 = e20);
      const o13 = this.subarray(e20, t7);
      return Object.setPrototypeOf(o13, Buffer$1.prototype), o13;
    }, Buffer$1.prototype.readUintLE = Buffer$1.prototype.readUIntLE = function(e20, t7, n4) {
      e20 >>>= 0, t7 >>>= 0, n4 || checkOffset(e20, t7, this.length);
      let o13 = this[e20], s8 = 1, a7 = 0;
      for (; ++a7 < t7 && (s8 *= 256); )
        o13 += this[e20 + a7] * s8;
      return o13;
    }, Buffer$1.prototype.readUintBE = Buffer$1.prototype.readUIntBE = function(e20, t7, n4) {
      e20 >>>= 0, t7 >>>= 0, n4 || checkOffset(e20, t7, this.length);
      let o13 = this[e20 + --t7], s8 = 1;
      for (; t7 > 0 && (s8 *= 256); )
        o13 += this[e20 + --t7] * s8;
      return o13;
    }, Buffer$1.prototype.readUint8 = Buffer$1.prototype.readUInt8 = function(e20, t7) {
      return e20 >>>= 0, t7 || checkOffset(e20, 1, this.length), this[e20];
    }, Buffer$1.prototype.readUint16LE = Buffer$1.prototype.readUInt16LE = function(e20, t7) {
      return e20 >>>= 0, t7 || checkOffset(e20, 2, this.length), this[e20] | this[e20 + 1] << 8;
    }, Buffer$1.prototype.readUint16BE = Buffer$1.prototype.readUInt16BE = function(e20, t7) {
      return e20 >>>= 0, t7 || checkOffset(e20, 2, this.length), this[e20] << 8 | this[e20 + 1];
    }, Buffer$1.prototype.readUint32LE = Buffer$1.prototype.readUInt32LE = function(e20, t7) {
      return e20 >>>= 0, t7 || checkOffset(e20, 4, this.length), (this[e20] | this[e20 + 1] << 8 | this[e20 + 2] << 16) + 16777216 * this[e20 + 3];
    }, Buffer$1.prototype.readUint32BE = Buffer$1.prototype.readUInt32BE = function(e20, t7) {
      return e20 >>>= 0, t7 || checkOffset(e20, 4, this.length), 16777216 * this[e20] + (this[e20 + 1] << 16 | this[e20 + 2] << 8 | this[e20 + 3]);
    }, Buffer$1.prototype.readBigUInt64LE = defineBigIntMethod(function(e20) {
      validateNumber(e20 >>>= 0, "offset");
      const t7 = this[e20], n4 = this[e20 + 7];
      void 0 !== t7 && void 0 !== n4 || boundsError(e20, this.length - 8);
      const o13 = t7 + 256 * this[++e20] + 65536 * this[++e20] + this[++e20] * 2 ** 24, s8 = this[++e20] + 256 * this[++e20] + 65536 * this[++e20] + n4 * 2 ** 24;
      return BigInt(o13) + (BigInt(s8) << BigInt(32));
    }), Buffer$1.prototype.readBigUInt64BE = defineBigIntMethod(function(e20) {
      validateNumber(e20 >>>= 0, "offset");
      const t7 = this[e20], n4 = this[e20 + 7];
      void 0 !== t7 && void 0 !== n4 || boundsError(e20, this.length - 8);
      const o13 = t7 * 2 ** 24 + 65536 * this[++e20] + 256 * this[++e20] + this[++e20], s8 = this[++e20] * 2 ** 24 + 65536 * this[++e20] + 256 * this[++e20] + n4;
      return (BigInt(o13) << BigInt(32)) + BigInt(s8);
    }), Buffer$1.prototype.readIntLE = function(e20, t7, n4) {
      e20 >>>= 0, t7 >>>= 0, n4 || checkOffset(e20, t7, this.length);
      let o13 = this[e20], s8 = 1, a7 = 0;
      for (; ++a7 < t7 && (s8 *= 256); )
        o13 += this[e20 + a7] * s8;
      return s8 *= 128, o13 >= s8 && (o13 -= Math.pow(2, 8 * t7)), o13;
    }, Buffer$1.prototype.readIntBE = function(e20, t7, n4) {
      e20 >>>= 0, t7 >>>= 0, n4 || checkOffset(e20, t7, this.length);
      let o13 = t7, s8 = 1, a7 = this[e20 + --o13];
      for (; o13 > 0 && (s8 *= 256); )
        a7 += this[e20 + --o13] * s8;
      return s8 *= 128, a7 >= s8 && (a7 -= Math.pow(2, 8 * t7)), a7;
    }, Buffer$1.prototype.readInt8 = function(e20, t7) {
      return e20 >>>= 0, t7 || checkOffset(e20, 1, this.length), 128 & this[e20] ? -1 * (255 - this[e20] + 1) : this[e20];
    }, Buffer$1.prototype.readInt16LE = function(e20, t7) {
      e20 >>>= 0, t7 || checkOffset(e20, 2, this.length);
      const n4 = this[e20] | this[e20 + 1] << 8;
      return 32768 & n4 ? 4294901760 | n4 : n4;
    }, Buffer$1.prototype.readInt16BE = function(e20, t7) {
      e20 >>>= 0, t7 || checkOffset(e20, 2, this.length);
      const n4 = this[e20 + 1] | this[e20] << 8;
      return 32768 & n4 ? 4294901760 | n4 : n4;
    }, Buffer$1.prototype.readInt32LE = function(e20, t7) {
      return e20 >>>= 0, t7 || checkOffset(e20, 4, this.length), this[e20] | this[e20 + 1] << 8 | this[e20 + 2] << 16 | this[e20 + 3] << 24;
    }, Buffer$1.prototype.readInt32BE = function(e20, t7) {
      return e20 >>>= 0, t7 || checkOffset(e20, 4, this.length), this[e20] << 24 | this[e20 + 1] << 16 | this[e20 + 2] << 8 | this[e20 + 3];
    }, Buffer$1.prototype.readBigInt64LE = defineBigIntMethod(function(e20) {
      validateNumber(e20 >>>= 0, "offset");
      const t7 = this[e20], n4 = this[e20 + 7];
      void 0 !== t7 && void 0 !== n4 || boundsError(e20, this.length - 8);
      const o13 = this[e20 + 4] + 256 * this[e20 + 5] + 65536 * this[e20 + 6] + (n4 << 24);
      return (BigInt(o13) << BigInt(32)) + BigInt(t7 + 256 * this[++e20] + 65536 * this[++e20] + this[++e20] * 2 ** 24);
    }), Buffer$1.prototype.readBigInt64BE = defineBigIntMethod(function(e20) {
      validateNumber(e20 >>>= 0, "offset");
      const t7 = this[e20], n4 = this[e20 + 7];
      void 0 !== t7 && void 0 !== n4 || boundsError(e20, this.length - 8);
      const o13 = (t7 << 24) + 65536 * this[++e20] + 256 * this[++e20] + this[++e20];
      return (BigInt(o13) << BigInt(32)) + BigInt(this[++e20] * 2 ** 24 + 65536 * this[++e20] + 256 * this[++e20] + n4);
    }), Buffer$1.prototype.readFloatLE = function(e20, t7) {
      return e20 >>>= 0, t7 || checkOffset(e20, 4, this.length), read(this, e20, true, 23, 4);
    }, Buffer$1.prototype.readFloatBE = function(e20, t7) {
      return e20 >>>= 0, t7 || checkOffset(e20, 4, this.length), read(this, e20, false, 23, 4);
    }, Buffer$1.prototype.readDoubleLE = function(e20, t7) {
      return e20 >>>= 0, t7 || checkOffset(e20, 8, this.length), read(this, e20, true, 52, 8);
    }, Buffer$1.prototype.readDoubleBE = function(e20, t7) {
      return e20 >>>= 0, t7 || checkOffset(e20, 8, this.length), read(this, e20, false, 52, 8);
    }, Buffer$1.prototype.writeUintLE = Buffer$1.prototype.writeUIntLE = function(e20, t7, n4, o13) {
      if (e20 = +e20, t7 >>>= 0, n4 >>>= 0, !o13) {
        checkInt(this, e20, t7, n4, Math.pow(2, 8 * n4) - 1, 0);
      }
      let s8 = 1, a7 = 0;
      for (this[t7] = 255 & e20; ++a7 < n4 && (s8 *= 256); )
        this[t7 + a7] = e20 / s8 & 255;
      return t7 + n4;
    }, Buffer$1.prototype.writeUintBE = Buffer$1.prototype.writeUIntBE = function(e20, t7, n4, o13) {
      if (e20 = +e20, t7 >>>= 0, n4 >>>= 0, !o13) {
        checkInt(this, e20, t7, n4, Math.pow(2, 8 * n4) - 1, 0);
      }
      let s8 = n4 - 1, a7 = 1;
      for (this[t7 + s8] = 255 & e20; --s8 >= 0 && (a7 *= 256); )
        this[t7 + s8] = e20 / a7 & 255;
      return t7 + n4;
    }, Buffer$1.prototype.writeUint8 = Buffer$1.prototype.writeUInt8 = function(e20, t7, n4) {
      return e20 = +e20, t7 >>>= 0, n4 || checkInt(this, e20, t7, 1, 255, 0), this[t7] = 255 & e20, t7 + 1;
    }, Buffer$1.prototype.writeUint16LE = Buffer$1.prototype.writeUInt16LE = function(e20, t7, n4) {
      return e20 = +e20, t7 >>>= 0, n4 || checkInt(this, e20, t7, 2, 65535, 0), this[t7] = 255 & e20, this[t7 + 1] = e20 >>> 8, t7 + 2;
    }, Buffer$1.prototype.writeUint16BE = Buffer$1.prototype.writeUInt16BE = function(e20, t7, n4) {
      return e20 = +e20, t7 >>>= 0, n4 || checkInt(this, e20, t7, 2, 65535, 0), this[t7] = e20 >>> 8, this[t7 + 1] = 255 & e20, t7 + 2;
    }, Buffer$1.prototype.writeUint32LE = Buffer$1.prototype.writeUInt32LE = function(e20, t7, n4) {
      return e20 = +e20, t7 >>>= 0, n4 || checkInt(this, e20, t7, 4, 4294967295, 0), this[t7 + 3] = e20 >>> 24, this[t7 + 2] = e20 >>> 16, this[t7 + 1] = e20 >>> 8, this[t7] = 255 & e20, t7 + 4;
    }, Buffer$1.prototype.writeUint32BE = Buffer$1.prototype.writeUInt32BE = function(e20, t7, n4) {
      return e20 = +e20, t7 >>>= 0, n4 || checkInt(this, e20, t7, 4, 4294967295, 0), this[t7] = e20 >>> 24, this[t7 + 1] = e20 >>> 16, this[t7 + 2] = e20 >>> 8, this[t7 + 3] = 255 & e20, t7 + 4;
    }, Buffer$1.prototype.writeBigUInt64LE = defineBigIntMethod(function(e20, t7 = 0) {
      return wrtBigUInt64LE(this, e20, t7, BigInt(0), BigInt("0xffffffffffffffff"));
    }), Buffer$1.prototype.writeBigUInt64BE = defineBigIntMethod(function(e20, t7 = 0) {
      return wrtBigUInt64BE(this, e20, t7, BigInt(0), BigInt("0xffffffffffffffff"));
    }), Buffer$1.prototype.writeIntLE = function(e20, t7, n4, o13) {
      if (e20 = +e20, t7 >>>= 0, !o13) {
        const o14 = Math.pow(2, 8 * n4 - 1);
        checkInt(this, e20, t7, n4, o14 - 1, -o14);
      }
      let s8 = 0, a7 = 1, i11 = 0;
      for (this[t7] = 255 & e20; ++s8 < n4 && (a7 *= 256); )
        e20 < 0 && 0 === i11 && 0 !== this[t7 + s8 - 1] && (i11 = 1), this[t7 + s8] = Math.trunc(e20 / a7) - i11 & 255;
      return t7 + n4;
    }, Buffer$1.prototype.writeIntBE = function(e20, t7, n4, o13) {
      if (e20 = +e20, t7 >>>= 0, !o13) {
        const o14 = Math.pow(2, 8 * n4 - 1);
        checkInt(this, e20, t7, n4, o14 - 1, -o14);
      }
      let s8 = n4 - 1, a7 = 1, i11 = 0;
      for (this[t7 + s8] = 255 & e20; --s8 >= 0 && (a7 *= 256); )
        e20 < 0 && 0 === i11 && 0 !== this[t7 + s8 + 1] && (i11 = 1), this[t7 + s8] = Math.trunc(e20 / a7) - i11 & 255;
      return t7 + n4;
    }, Buffer$1.prototype.writeInt8 = function(e20, t7, n4) {
      return e20 = +e20, t7 >>>= 0, n4 || checkInt(this, e20, t7, 1, 127, -128), e20 < 0 && (e20 = 255 + e20 + 1), this[t7] = 255 & e20, t7 + 1;
    }, Buffer$1.prototype.writeInt16LE = function(e20, t7, n4) {
      return e20 = +e20, t7 >>>= 0, n4 || checkInt(this, e20, t7, 2, 32767, -32768), this[t7] = 255 & e20, this[t7 + 1] = e20 >>> 8, t7 + 2;
    }, Buffer$1.prototype.writeInt16BE = function(e20, t7, n4) {
      return e20 = +e20, t7 >>>= 0, n4 || checkInt(this, e20, t7, 2, 32767, -32768), this[t7] = e20 >>> 8, this[t7 + 1] = 255 & e20, t7 + 2;
    }, Buffer$1.prototype.writeInt32LE = function(e20, t7, n4) {
      return e20 = +e20, t7 >>>= 0, n4 || checkInt(this, e20, t7, 4, 2147483647, -2147483648), this[t7] = 255 & e20, this[t7 + 1] = e20 >>> 8, this[t7 + 2] = e20 >>> 16, this[t7 + 3] = e20 >>> 24, t7 + 4;
    }, Buffer$1.prototype.writeInt32BE = function(e20, t7, n4) {
      return e20 = +e20, t7 >>>= 0, n4 || checkInt(this, e20, t7, 4, 2147483647, -2147483648), e20 < 0 && (e20 = 4294967295 + e20 + 1), this[t7] = e20 >>> 24, this[t7 + 1] = e20 >>> 16, this[t7 + 2] = e20 >>> 8, this[t7 + 3] = 255 & e20, t7 + 4;
    }, Buffer$1.prototype.writeBigInt64LE = defineBigIntMethod(function(e20, t7 = 0) {
      return wrtBigUInt64LE(this, e20, t7, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), Buffer$1.prototype.writeBigInt64BE = defineBigIntMethod(function(e20, t7 = 0) {
      return wrtBigUInt64BE(this, e20, t7, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), Buffer$1.prototype.writeFloatLE = function(e20, t7, n4) {
      return writeFloat(this, e20, t7, true, n4);
    }, Buffer$1.prototype.writeFloatBE = function(e20, t7, n4) {
      return writeFloat(this, e20, t7, false, n4);
    }, Buffer$1.prototype.writeDoubleLE = function(e20, t7, n4) {
      return writeDouble(this, e20, t7, true, n4);
    }, Buffer$1.prototype.writeDoubleBE = function(e20, t7, n4) {
      return writeDouble(this, e20, t7, false, n4);
    }, Buffer$1.prototype.copy = function(e20, t7, n4, o13) {
      if (!Buffer$1.isBuffer(e20))
        throw new TypeError("argument should be a Buffer");
      if (n4 || (n4 = 0), o13 || 0 === o13 || (o13 = this.length), t7 >= e20.length && (t7 = e20.length), t7 || (t7 = 0), o13 > 0 && o13 < n4 && (o13 = n4), o13 === n4)
        return 0;
      if (0 === e20.length || 0 === this.length)
        return 0;
      if (t7 < 0)
        throw new RangeError("targetStart out of bounds");
      if (n4 < 0 || n4 >= this.length)
        throw new RangeError("Index out of range");
      if (o13 < 0)
        throw new RangeError("sourceEnd out of bounds");
      o13 > this.length && (o13 = this.length), e20.length - t7 < o13 - n4 && (o13 = e20.length - t7 + n4);
      const s8 = o13 - n4;
      return this === e20 && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t7, n4, o13) : Uint8Array.prototype.set.call(e20, this.subarray(n4, o13), t7), s8;
    }, Buffer$1.prototype.fill = function(e20, t7, n4, o13) {
      if ("string" == typeof e20) {
        if ("string" == typeof t7 ? (o13 = t7, t7 = 0, n4 = this.length) : "string" == typeof n4 && (o13 = n4, n4 = this.length), void 0 !== o13 && "string" != typeof o13)
          throw new TypeError("encoding must be a string");
        if ("string" == typeof o13 && !Buffer$1.isEncoding(o13))
          throw new TypeError("Unknown encoding: " + o13);
        if (1 === e20.length) {
          const t8 = e20.charCodeAt(0);
          ("utf8" === o13 && t8 < 128 || "latin1" === o13) && (e20 = t8);
        }
      } else
        "number" == typeof e20 ? e20 &= 255 : "boolean" == typeof e20 && (e20 = Number(e20));
      if (t7 < 0 || this.length < t7 || this.length < n4)
        throw new RangeError("Out of range index");
      if (n4 <= t7)
        return this;
      let s8;
      if (t7 >>>= 0, n4 = void 0 === n4 ? this.length : n4 >>> 0, e20 || (e20 = 0), "number" == typeof e20)
        for (s8 = t7; s8 < n4; ++s8)
          this[s8] = e20;
      else {
        const a7 = Buffer$1.isBuffer(e20) ? e20 : Buffer$1.from(e20, o13), i11 = a7.length;
        if (0 === i11)
          throw new TypeError('The value "' + e20 + '" is invalid for argument "value"');
        for (s8 = 0; s8 < n4 - t7; ++s8)
          this[s8 + t7] = a7[s8 % i11];
      }
      return this;
    };
    u4 = {};
    E3("ERR_BUFFER_OUT_OF_BOUNDS", function(e20) {
      return e20 ? `${e20} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError), E3("ERR_INVALID_ARG_TYPE", function(e20, t7) {
      return `The "${e20}" argument must be of type number. Received type ${typeof t7}`;
    }, TypeError), E3("ERR_OUT_OF_RANGE", function(e20, t7, n4) {
      let o13 = `The value of "${e20}" is out of range.`, s8 = n4;
      return Number.isInteger(n4) && Math.abs(n4) > 2 ** 32 ? s8 = addNumericalSeparator(String(n4)) : "bigint" == typeof n4 && (s8 = String(n4), (n4 > BigInt(2) ** BigInt(32) || n4 < -(BigInt(2) ** BigInt(32))) && (s8 = addNumericalSeparator(s8)), s8 += "n"), o13 += ` It must be ${t7}. Received ${s8}`, o13;
    }, RangeError);
    c4 = /[^\w+/-]/g;
    f2 = function() {
      const e20 = "0123456789abcdef", t7 = Array.from({ length: 256 });
      for (let n4 = 0; n4 < 16; ++n4) {
        const o13 = 16 * n4;
        for (let s8 = 0; s8 < 16; ++s8)
          t7[o13 + s8] = e20[n4] + e20[s8];
      }
      return t7;
    }();
    h6 = globalThis.Buffer || Buffer$1;
    notImplemented("buffer.resolveObjectURL"), notImplemented("buffer.transcode"), notImplemented("buffer.isUtf8"), notImplemented("buffer.isAscii");
    l3 = {};
    !function() {
      try {
        d4 = "function" == typeof setTimeout ? setTimeout : defaultSetTimeout;
      } catch {
        d4 = defaultSetTimeout;
      }
      try {
        p3 = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
      } catch {
        p3 = defaultClearTimeout;
      }
    }();
    y4 = [];
    g2 = false;
    b4 = -1;
    l3.nextTick = function(e20) {
      const t7 = Array.from({ length: arguments.length - 1 });
      if (arguments.length > 1)
        for (let e21 = 1; e21 < arguments.length; e21++)
          t7[e21 - 1] = arguments[e21];
      y4.push(new Item(e20, t7)), 1 !== y4.length || g2 || runTimeout(drainQueue);
    }, Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    }, l3.title = "unenv";
    w5 = /* @__PURE__ */ Object.create(null);
    _4 = globalThis.process?.env;
    _getEnv = (e20) => _4 || globalThis.__env__ || (e20 ? w5 : globalThis);
    l3.env = new Proxy(w5, { get: (e20, t7) => _getEnv()[t7] ?? w5[t7], has: (e20, t7) => t7 in _getEnv() || t7 in w5, set: (e20, t7, n4) => (_getEnv(true)[t7] = n4, true), deleteProperty(e20, t7) {
      delete _getEnv(true)[t7];
    }, ownKeys() {
      const e20 = _getEnv();
      return Object.keys(e20);
    } }), l3.argv = [], l3.version = "", l3.versions = {}, l3.on = noop3, l3.addListener = noop3, l3.once = noop3, l3.off = noop3, l3.removeListener = noop3, l3.removeAllListeners = noop3, l3.emit = noop3, l3.prependListener = noop3, l3.prependOnceListener = noop3, l3.listeners = function(e20) {
      return [];
    }, l3.binding = function(e20) {
      throw new Error("[unenv] process.binding is not supported");
    };
    v3 = "/";
    l3.cwd = function() {
      return v3;
    }, l3.chdir = function(e20) {
      v3 = e20;
    }, l3.umask = function() {
      return 0;
    };
    B3 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {};
    B3.process = B3.process || l3;
    R4 = B3.process;
    x3 = /#/g;
    I4 = /&/g;
    k5 = /\//g;
    A4 = /=/g;
    $4 = /\+/g;
    S4 = /%5e/gi;
    T4 = /%60/gi;
    j6 = /%7c/gi;
    C4 = /%20/gi;
    O3 = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
    L3 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
    N3 = /^([/\\]\s*){2,}[^/\\]/;
    U4 = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
    M3 = /\/$|\/\?|\/#/;
    H3 = /^\.?\//;
    P4 = Symbol.for("ufo:protocolRelative");
    z4 = Object.freeze({ ignoreUnknown: false, respectType: false, respectFunctionNames: false, respectFunctionProperties: false, unorderedObjects: true, unorderedArrays: false, unorderedSets: false, excludeKeys: void 0, excludeValues: void 0, replacer: void 0 });
    q6 = Object.freeze(["prototype", "__proto__", "constructor"]);
    K3 = "[native code] }";
    D3 = K3.length;
    WordArray = class {
      constructor(e20, t7) {
        e20 = this.words = e20 || [], this.sigBytes = void 0 === t7 ? 4 * e20.length : t7;
      }
      toString(e20) {
        return (e20 || W3).stringify(this);
      }
      concat(e20) {
        if (this.clamp(), this.sigBytes % 4)
          for (let t7 = 0; t7 < e20.sigBytes; t7++) {
            const n4 = e20.words[t7 >>> 2] >>> 24 - t7 % 4 * 8 & 255;
            this.words[this.sigBytes + t7 >>> 2] |= n4 << 24 - (this.sigBytes + t7) % 4 * 8;
          }
        else
          for (let t7 = 0; t7 < e20.sigBytes; t7 += 4)
            this.words[this.sigBytes + t7 >>> 2] = e20.words[t7 >>> 2];
        return this.sigBytes += e20.sigBytes, this;
      }
      clamp() {
        this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4);
      }
      clone() {
        return new WordArray([...this.words]);
      }
    };
    W3 = { stringify(e20) {
      const t7 = [];
      for (let n4 = 0; n4 < e20.sigBytes; n4++) {
        const o13 = e20.words[n4 >>> 2] >>> 24 - n4 % 4 * 8 & 255;
        t7.push((o13 >>> 4).toString(16), (15 & o13).toString(16));
      }
      return t7.join("");
    } };
    F4 = { stringify(e20) {
      const t7 = [];
      for (let n4 = 0; n4 < e20.sigBytes; n4 += 3) {
        const o13 = (e20.words[n4 >>> 2] >>> 24 - n4 % 4 * 8 & 255) << 16 | (e20.words[n4 + 1 >>> 2] >>> 24 - (n4 + 1) % 4 * 8 & 255) << 8 | e20.words[n4 + 2 >>> 2] >>> 24 - (n4 + 2) % 4 * 8 & 255;
        for (let s8 = 0; s8 < 4 && 8 * n4 + 6 * s8 < 8 * e20.sigBytes; s8++)
          t7.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(o13 >>> 6 * (3 - s8) & 63));
      }
      return t7.join("");
    } };
    V3 = { parse(e20) {
      const t7 = e20.length, n4 = [];
      for (let o13 = 0; o13 < t7; o13++)
        n4[o13 >>> 2] |= (255 & e20.charCodeAt(o13)) << 24 - o13 % 4 * 8;
      return new WordArray(n4, t7);
    } };
    Q3 = { parse: (e20) => V3.parse(unescape(encodeURIComponent(e20))) };
    BufferedBlockAlgorithm = class {
      constructor() {
        this._data = new WordArray(), this._nDataBytes = 0, this._minBufferSize = 0, this.blockSize = 16;
      }
      reset() {
        this._data = new WordArray(), this._nDataBytes = 0;
      }
      _append(e20) {
        "string" == typeof e20 && (e20 = Q3.parse(e20)), this._data.concat(e20), this._nDataBytes += e20.sigBytes;
      }
      _doProcessBlock(e20, t7) {
      }
      _process(e20) {
        let t7, n4 = this._data.sigBytes / (4 * this.blockSize);
        n4 = e20 ? Math.ceil(n4) : Math.max((0 | n4) - this._minBufferSize, 0);
        const o13 = n4 * this.blockSize, s8 = Math.min(4 * o13, this._data.sigBytes);
        if (o13) {
          for (let e21 = 0; e21 < o13; e21 += this.blockSize)
            this._doProcessBlock(this._data.words, e21);
          t7 = this._data.words.splice(0, o13), this._data.sigBytes -= s8;
        }
        return new WordArray(t7, s8);
      }
    };
    Hasher = class extends BufferedBlockAlgorithm {
      update(e20) {
        return this._append(e20), this._process(), this;
      }
      finalize(e20) {
        e20 && this._append(e20);
      }
    };
    J3 = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225];
    Z4 = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];
    G3 = [];
    SHA256 = class extends Hasher {
      constructor() {
        super(...arguments), this._hash = new WordArray([...J3]);
      }
      reset() {
        super.reset(), this._hash = new WordArray([...J3]);
      }
      _doProcessBlock(e20, t7) {
        const n4 = this._hash.words;
        let o13 = n4[0], s8 = n4[1], a7 = n4[2], i11 = n4[3], u5 = n4[4], c5 = n4[5], f3 = n4[6], h7 = n4[7];
        for (let n5 = 0; n5 < 64; n5++) {
          if (n5 < 16)
            G3[n5] = 0 | e20[t7 + n5];
          else {
            const e21 = G3[n5 - 15], t8 = (e21 << 25 | e21 >>> 7) ^ (e21 << 14 | e21 >>> 18) ^ e21 >>> 3, o14 = G3[n5 - 2], s9 = (o14 << 15 | o14 >>> 17) ^ (o14 << 13 | o14 >>> 19) ^ o14 >>> 10;
            G3[n5] = t8 + G3[n5 - 7] + s9 + G3[n5 - 16];
          }
          const l4 = o13 & s8 ^ o13 & a7 ^ s8 & a7, d5 = (o13 << 30 | o13 >>> 2) ^ (o13 << 19 | o13 >>> 13) ^ (o13 << 10 | o13 >>> 22), p4 = h7 + ((u5 << 26 | u5 >>> 6) ^ (u5 << 21 | u5 >>> 11) ^ (u5 << 7 | u5 >>> 25)) + (u5 & c5 ^ ~u5 & f3) + Z4[n5] + G3[n5];
          h7 = f3, f3 = c5, c5 = u5, u5 = i11 + p4 | 0, i11 = a7, a7 = s8, s8 = o13, o13 = p4 + (d5 + l4) | 0;
        }
        n4[0] = n4[0] + o13 | 0, n4[1] = n4[1] + s8 | 0, n4[2] = n4[2] + a7 | 0, n4[3] = n4[3] + i11 | 0, n4[4] = n4[4] + u5 | 0, n4[5] = n4[5] + c5 | 0, n4[6] = n4[6] + f3 | 0, n4[7] = n4[7] + h7 | 0;
      }
      finalize(e20) {
        super.finalize(e20);
        const t7 = 8 * this._nDataBytes, n4 = 8 * this._data.sigBytes;
        return this._data.words[n4 >>> 5] |= 128 << 24 - n4 % 32, this._data.words[14 + (n4 + 64 >>> 9 << 4)] = Math.floor(t7 / 4294967296), this._data.words[15 + (n4 + 64 >>> 9 << 4)] = t7, this._data.sigBytes = 4 * this._data.words.length, this._process(), this._hash;
      }
    };
    Y4 = { NORMAL: 0, WILDCARD: 1, PLACEHOLDER: 2 };
    X4 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
    ee4 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    te4 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    re = createDefu();
    ne4 = createDefu((e20, t7, n4) => {
      if (void 0 !== e20[t7] && "function" == typeof n4)
        return e20[t7] = n4(e20[t7]), true;
    });
    oe4 = 10;
    se4 = class {
      __unenv__ = true;
      _events = /* @__PURE__ */ Object.create(null);
      _maxListeners;
      static get defaultMaxListeners() {
        return oe4;
      }
      static set defaultMaxListeners(e20) {
        if ("number" != typeof e20 || e20 < 0 || Number.isNaN(e20))
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e20 + ".");
        oe4 = e20;
      }
      setMaxListeners(e20) {
        if ("number" != typeof e20 || e20 < 0 || Number.isNaN(e20))
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e20 + ".");
        return this._maxListeners = e20, this;
      }
      getMaxListeners() {
        return _getMaxListeners(this);
      }
      emit(e20, ...t7) {
        if (!this._events[e20] || 0 === this._events[e20].length)
          return false;
        if ("error" === e20) {
          let e21;
          if (t7.length > 0 && (e21 = t7[0]), e21 instanceof Error)
            throw e21;
          const n4 = new Error("Unhandled error." + (e21 ? " (" + e21.message + ")" : ""));
          throw n4.context = e21, n4;
        }
        for (const n4 of this._events[e20])
          (n4.listener || n4).apply(this, t7);
        return true;
      }
      addListener(e20, t7) {
        return _addListener(this, e20, t7, false);
      }
      on(e20, t7) {
        return _addListener(this, e20, t7, false);
      }
      prependListener(e20, t7) {
        return _addListener(this, e20, t7, true);
      }
      once(e20, t7) {
        return this.on(e20, _wrapOnce(this, e20, t7));
      }
      prependOnceListener(e20, t7) {
        return this.prependListener(e20, _wrapOnce(this, e20, t7));
      }
      removeListener(e20, t7) {
        return function(e21, t8, n4) {
          if (_checkListener(n4), !e21._events[t8] || 0 === e21._events[t8].length)
            return e21;
          const o13 = e21._events[t8].length;
          if (e21._events[t8] = e21._events[t8].filter((e22) => e22 !== n4), o13 === e21._events[t8].length)
            return e21;
          e21._events.removeListener && e21.emit("removeListener", t8, n4.listener || n4);
          0 === e21._events[t8].length && delete e21._events[t8];
          return e21;
        }(this, e20, t7);
      }
      off(e20, t7) {
        return this.removeListener(e20, t7);
      }
      removeAllListeners(e20) {
        return function(e21, t7) {
          if (!e21._events[t7] || 0 === e21._events[t7].length)
            return e21;
          if (e21._events.removeListener)
            for (const n4 of e21._events[t7])
              e21.emit("removeListener", t7, n4.listener || n4);
          return delete e21._events[t7], e21;
        }(this, e20);
      }
      listeners(e20) {
        return _listeners(this, e20, true);
      }
      rawListeners(e20) {
        return _listeners(this, e20, false);
      }
      listenerCount(e20) {
        return this.rawListeners(e20).length;
      }
      eventNames() {
        return Object.keys(this._events);
      }
    };
    ae4 = globalThis.EventEmitter || se4;
    _Readable = class extends ae4 {
      __unenv__ = true;
      readableEncoding = null;
      readableEnded = true;
      readableFlowing = false;
      readableHighWaterMark = 0;
      readableLength = 0;
      readableObjectMode = false;
      readableAborted = false;
      readableDidRead = false;
      closed = false;
      errored = null;
      readable = false;
      destroyed = false;
      static from(e20, t7) {
        return new _Readable(t7);
      }
      constructor(e20) {
        super();
      }
      _read(e20) {
      }
      read(e20) {
      }
      setEncoding(e20) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      isPaused() {
        return true;
      }
      unpipe(e20) {
        return this;
      }
      unshift(e20, t7) {
      }
      wrap(e20) {
        return this;
      }
      push(e20, t7) {
        return false;
      }
      _destroy(e20, t7) {
        this.removeAllListeners();
      }
      destroy(e20) {
        return this.destroyed = true, this._destroy(e20), this;
      }
      pipe(e20, t7) {
        return {};
      }
      compose(e20, t7) {
        throw new Error("[unenv] Method not implemented.");
      }
      [Symbol.asyncDispose]() {
        return this.destroy(), Promise.resolve();
      }
      async *[Symbol.asyncIterator]() {
        throw createNotImplementedError("Readable.asyncIterator");
      }
      iterator(e20) {
        throw createNotImplementedError("Readable.iterator");
      }
      map(e20, t7) {
        throw createNotImplementedError("Readable.map");
      }
      filter(e20, t7) {
        throw createNotImplementedError("Readable.filter");
      }
      forEach(e20, t7) {
        throw createNotImplementedError("Readable.forEach");
      }
      reduce(e20, t7, n4) {
        throw createNotImplementedError("Readable.reduce");
      }
      find(e20, t7) {
        throw createNotImplementedError("Readable.find");
      }
      findIndex(e20, t7) {
        throw createNotImplementedError("Readable.findIndex");
      }
      some(e20, t7) {
        throw createNotImplementedError("Readable.some");
      }
      toArray(e20) {
        throw createNotImplementedError("Readable.toArray");
      }
      every(e20, t7) {
        throw createNotImplementedError("Readable.every");
      }
      flatMap(e20, t7) {
        throw createNotImplementedError("Readable.flatMap");
      }
      drop(e20, t7) {
        throw createNotImplementedError("Readable.drop");
      }
      take(e20, t7) {
        throw createNotImplementedError("Readable.take");
      }
      asIndexedPairs(e20) {
        throw createNotImplementedError("Readable.asIndexedPairs");
      }
    };
    ie4 = globalThis.Readable || _Readable;
    ue3 = globalThis.Writable || class extends ae4 {
      __unenv__ = true;
      writable = true;
      writableEnded = false;
      writableFinished = false;
      writableHighWaterMark = 0;
      writableLength = 0;
      writableObjectMode = false;
      writableCorked = 0;
      closed = false;
      errored = null;
      writableNeedDrain = false;
      destroyed = false;
      _data;
      _encoding = "utf-8";
      constructor(e20) {
        super();
      }
      pipe(e20, t7) {
        return {};
      }
      _write(e20, t7, n4) {
        if (this.writableEnded)
          n4 && n4();
        else {
          if (void 0 === this._data)
            this._data = e20;
          else {
            const n5 = "string" == typeof this._data ? h6.from(this._data, this._encoding || t7 || "utf8") : this._data, o13 = "string" == typeof e20 ? h6.from(e20, t7 || this._encoding || "utf8") : e20;
            this._data = h6.concat([n5, o13]);
          }
          this._encoding = t7, n4 && n4();
        }
      }
      _writev(e20, t7) {
      }
      _destroy(e20, t7) {
      }
      _final(e20) {
      }
      write(e20, t7, n4) {
        const o13 = "string" == typeof t7 ? this._encoding : "utf-8", s8 = "function" == typeof t7 ? t7 : "function" == typeof n4 ? n4 : void 0;
        return this._write(e20, o13, s8), true;
      }
      setDefaultEncoding(e20) {
        return this;
      }
      end(e20, t7, n4) {
        const o13 = "function" == typeof e20 ? e20 : "function" == typeof t7 ? t7 : "function" == typeof n4 ? n4 : void 0;
        if (this.writableEnded)
          return o13 && o13(), this;
        const s8 = e20 === o13 ? void 0 : e20;
        if (s8) {
          const e21 = t7 === o13 ? void 0 : t7;
          this.write(s8, e21, o13);
        }
        return this.writableEnded = true, this.writableFinished = true, this.emit("close"), this.emit("finish"), this;
      }
      cork() {
      }
      uncork() {
      }
      destroy(e20) {
        return this.destroyed = true, delete this._data, this.removeAllListeners(), this;
      }
      compose(e20, t7) {
        throw new Error("[h3] Method not implemented.");
      }
    };
    ce3 = class {
      allowHalfOpen = true;
      _destroy;
      constructor(e20 = new ie4(), t7 = new ue3()) {
        Object.assign(this, e20), Object.assign(this, t7), this._destroy = function(...e21) {
          return function(...t8) {
            for (const n4 of e21)
              n4(...t8);
          };
        }(e20._destroy, t7._destroy);
      }
    };
    fe3 = getDuplex();
    he3 = globalThis.Duplex || fe3;
    Socket = class extends he3 {
      __unenv__ = true;
      bufferSize = 0;
      bytesRead = 0;
      bytesWritten = 0;
      connecting = false;
      destroyed = false;
      pending = false;
      localAddress = "";
      localPort = 0;
      remoteAddress = "";
      remoteFamily = "";
      remotePort = 0;
      autoSelectFamilyAttemptedAddresses = [];
      readyState = "readOnly";
      constructor(e20) {
        super();
      }
      write(e20, t7, n4) {
        return false;
      }
      connect(e20, t7, n4) {
        return this;
      }
      end(e20, t7, n4) {
        return this;
      }
      setEncoding(e20) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      setTimeout(e20, t7) {
        return this;
      }
      setNoDelay(e20) {
        return this;
      }
      setKeepAlive(e20, t7) {
        return this;
      }
      address() {
        return {};
      }
      unref() {
        return this;
      }
      ref() {
        return this;
      }
      destroySoon() {
        this.destroy();
      }
      resetAndDestroy() {
        const e20 = new Error("ERR_SOCKET_CLOSED");
        return e20.code = "ERR_SOCKET_CLOSED", this.destroy(e20), this;
      }
    };
    IncomingMessage = class extends ie4 {
      __unenv__ = {};
      aborted = false;
      httpVersion = "1.1";
      httpVersionMajor = 1;
      httpVersionMinor = 1;
      complete = true;
      connection;
      socket;
      headers = {};
      trailers = {};
      method = "GET";
      url = "/";
      statusCode = 200;
      statusMessage = "";
      closed = false;
      errored = null;
      readable = false;
      constructor(e20) {
        super(), this.socket = this.connection = e20 || new Socket();
      }
      get rawHeaders() {
        return function(e20) {
          const t7 = [];
          for (const n4 in e20)
            if (Array.isArray(e20[n4]))
              for (const o13 of e20[n4])
                t7.push(n4, o13);
            else
              t7.push(n4, e20[n4]);
          return t7;
        }(this.headers);
      }
      get rawTrailers() {
        return [];
      }
      setTimeout(e20, t7) {
        return this;
      }
      get headersDistinct() {
        return _distinct(this.headers);
      }
      get trailersDistinct() {
        return _distinct(this.trailers);
      }
    };
    ServerResponse = class extends ue3 {
      __unenv__ = true;
      statusCode = 200;
      statusMessage = "";
      upgrading = false;
      chunkedEncoding = false;
      shouldKeepAlive = false;
      useChunkedEncodingByDefault = false;
      sendDate = false;
      finished = false;
      headersSent = false;
      strictContentLength = false;
      connection = null;
      socket = null;
      req;
      _headers = {};
      constructor(e20) {
        super(), this.req = e20;
      }
      assignSocket(e20) {
        e20._httpMessage = this, this.socket = e20, this.connection = e20, this.emit("socket", e20), this._flush();
      }
      _flush() {
        this.flushHeaders();
      }
      detachSocket(e20) {
      }
      writeContinue(e20) {
      }
      writeHead(e20, t7, n4) {
        e20 && (this.statusCode = e20), "string" == typeof t7 && (this.statusMessage = t7, t7 = void 0);
        const o13 = n4 || t7;
        if (o13)
          if (Array.isArray(o13))
            ;
          else
            for (const e21 in o13)
              this.setHeader(e21, o13[e21]);
        return this.headersSent = true, this;
      }
      writeProcessing() {
      }
      setTimeout(e20, t7) {
        return this;
      }
      appendHeader(e20, t7) {
        e20 = e20.toLowerCase();
        const n4 = this._headers[e20], o13 = [...Array.isArray(n4) ? n4 : [n4], ...Array.isArray(t7) ? t7 : [t7]].filter(Boolean);
        return this._headers[e20] = o13.length > 1 ? o13 : o13[0], this;
      }
      setHeader(e20, t7) {
        return this._headers[e20.toLowerCase()] = t7, this;
      }
      getHeader(e20) {
        return this._headers[e20.toLowerCase()];
      }
      getHeaders() {
        return this._headers;
      }
      getHeaderNames() {
        return Object.keys(this._headers);
      }
      hasHeader(e20) {
        return e20.toLowerCase() in this._headers;
      }
      removeHeader(e20) {
        delete this._headers[e20.toLowerCase()];
      }
      addTrailers(e20) {
      }
      flushHeaders() {
      }
      writeEarlyHints(e20, t7) {
        "function" == typeof t7 && t7();
      }
    };
    le3 = Object.defineProperty;
    __publicField$2 = (e20, t7, n4) => (((e21, t8, n5) => {
      t8 in e21 ? le3(e21, t8, { enumerable: true, configurable: true, writable: true, value: n5 }) : e21[t8] = n5;
    })(e20, "symbol" != typeof t7 ? t7 + "" : t7, n4), n4);
    H3Error = class extends Error {
      constructor(e20, t7 = {}) {
        super(e20, t7), __publicField$2(this, "statusCode", 500), __publicField$2(this, "fatal", false), __publicField$2(this, "unhandled", false), __publicField$2(this, "statusMessage"), __publicField$2(this, "data"), __publicField$2(this, "cause"), t7.cause && !this.cause && (this.cause = t7.cause);
      }
      toJSON() {
        const e20 = { message: this.message, statusCode: sanitizeStatusCode(this.statusCode, 500) };
        return this.statusMessage && (e20.statusMessage = sanitizeStatusMessage(this.statusMessage)), void 0 !== this.data && (e20.data = this.data), e20;
      }
    };
    __publicField$2(H3Error, "__h3_error__", true);
    de3 = getRequestHeader;
    pe3 = Symbol.for("h3RawBody");
    me3 = Symbol.for("h3ParsedBody");
    ye3 = ["PATCH", "POST", "PUT", "DELETE"];
    ge3 = { html: "text/html", json: "application/json" };
    be3 = /[^\u0009\u0020-\u007E]/g;
    we3 = "undefined" == typeof setImmediate ? (e20) => e20() : setImmediate;
    _e3 = setResponseHeaders;
    ve3 = setResponseHeader;
    Be3 = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
    Ee3 = /* @__PURE__ */ new Set(["transfer-encoding", "connection", "keep-alive", "upgrade", "expect", "host", "accept"]);
    Re3 = Object.defineProperty;
    __publicField = (e20, t7, n4) => (((e21, t8, n5) => {
      t8 in e21 ? Re3(e21, t8, { enumerable: true, configurable: true, writable: true, value: n5 }) : e21[t8] = n5;
    })(e20, "symbol" != typeof t7 ? t7 + "" : t7, n4), n4);
    H3Event = class {
      constructor(e20, t7) {
        __publicField(this, "__is_event__", true), __publicField(this, "node"), __publicField(this, "web"), __publicField(this, "context", {}), __publicField(this, "_method"), __publicField(this, "_path"), __publicField(this, "_headers"), __publicField(this, "_requestBody"), __publicField(this, "_handled", false), __publicField(this, "_onBeforeResponseCalled"), __publicField(this, "_onAfterResponseCalled"), this.node = { req: e20, res: t7 };
      }
      get method() {
        return this._method || (this._method = (this.node.req.method || "GET").toUpperCase()), this._method;
      }
      get path() {
        return this._path || this.node.req.url || "/";
      }
      get headers() {
        return this._headers || (this._headers = function(e20) {
          const t7 = new Headers();
          for (const [n4, o13] of Object.entries(e20))
            if (Array.isArray(o13))
              for (const e21 of o13)
                t7.append(n4, e21);
            else
              o13 && t7.set(n4, o13);
          return t7;
        }(this.node.req.headers)), this._headers;
      }
      get handled() {
        return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
      }
      respondWith(e20) {
        return Promise.resolve(e20).then((e21) => sendWebResponse(this, e21));
      }
      toString() {
        return `[${this.method}] ${this.path}`;
      }
      toJSON() {
        return this.toString();
      }
      get req() {
        return this.node.req;
      }
      get res() {
        return this.node.res;
      }
    };
    xe2 = defineEventHandler;
    lazyEventHandler = function(e20) {
      let t7, n4;
      const resolveHandler = () => n4 ? Promise.resolve(n4) : (t7 || (t7 = Promise.resolve(e20()).then((e21) => {
        const t8 = e21.default || e21;
        if ("function" != typeof t8)
          throw new TypeError("Invalid lazy handler result. It should be a function:", t8);
        return n4 = { handler: toEventHandler(e21.default || e21) }, n4;
      })), t7), o13 = xe2((e21) => n4 ? n4.handler(e21) : resolveHandler().then((t8) => t8.handler(e21)));
      return o13.__resolve__ = resolveHandler, o13;
    };
    Ie3 = ["connect", "delete", "get", "head", "options", "post", "put", "trace", "patch"];
    FetchError = class extends Error {
      constructor(e20, t7) {
        super(e20, t7), this.name = "FetchError", t7?.cause && !this.cause && (this.cause = t7.cause);
      }
    };
    ke3 = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
    Ae3 = /* @__PURE__ */ new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
    $e3 = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
    Se3 = /* @__PURE__ */ new Set([408, 409, 425, 429, 500, 502, 503, 504]);
    Te3 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    je3 = function() {
      if ("undefined" != typeof globalThis)
        return globalThis;
      if ("undefined" != typeof self)
        return self;
      if ("undefined" != typeof global)
        return global;
      throw new Error("unable to locate global object");
    }();
    Ce3 = je3.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!")));
    Oe3 = je3.Headers;
    Le3 = je3.AbortController;
    Ne3 = createFetch$1({ fetch: Ce3, Headers: Oe3, AbortController: Le3 });
    Ue2 = Ne3;
    Me3 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    He3 = { run: (e20) => e20() };
    Pe3 = void 0 !== console.createTask ? console.createTask : () => He3;
    Hookable = class {
      constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
      }
      hook(e20, t7, n4 = {}) {
        if (!e20 || "function" != typeof t7)
          return () => {
          };
        const o13 = e20;
        let s8;
        for (; this._deprecatedHooks[e20]; )
          s8 = this._deprecatedHooks[e20], e20 = s8.to;
        if (s8 && !n4.allowDeprecated) {
          let e21 = s8.message;
          e21 || (e21 = `${o13} hook has been deprecated` + (s8.to ? `, please use ${s8.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(e21) || (console.warn(e21), this._deprecatedMessages.add(e21));
        }
        if (!t7.name)
          try {
            Object.defineProperty(t7, "name", { get: () => "_" + e20.replace(/\W+/g, "_") + "_hook_cb", configurable: true });
          } catch {
          }
        return this._hooks[e20] = this._hooks[e20] || [], this._hooks[e20].push(t7), () => {
          t7 && (this.removeHook(e20, t7), t7 = void 0);
        };
      }
      hookOnce(e20, t7) {
        let n4, _function = (...e21) => ("function" == typeof n4 && n4(), n4 = void 0, _function = void 0, t7(...e21));
        return n4 = this.hook(e20, _function), n4;
      }
      removeHook(e20, t7) {
        if (this._hooks[e20]) {
          const n4 = this._hooks[e20].indexOf(t7);
          -1 !== n4 && this._hooks[e20].splice(n4, 1), 0 === this._hooks[e20].length && delete this._hooks[e20];
        }
      }
      deprecateHook(e20, t7) {
        this._deprecatedHooks[e20] = "string" == typeof t7 ? { to: t7 } : t7;
        const n4 = this._hooks[e20] || [];
        delete this._hooks[e20];
        for (const t8 of n4)
          this.hook(e20, t8);
      }
      deprecateHooks(e20) {
        Object.assign(this._deprecatedHooks, e20);
        for (const t7 in e20)
          this.deprecateHook(t7, e20[t7]);
      }
      addHooks(e20) {
        const t7 = flatHooks(e20), n4 = Object.keys(t7).map((e21) => this.hook(e21, t7[e21]));
        return () => {
          for (const e21 of n4.splice(0, n4.length))
            e21();
        };
      }
      removeHooks(e20) {
        const t7 = flatHooks(e20);
        for (const e21 in t7)
          this.removeHook(e21, t7[e21]);
      }
      removeAllHooks() {
        for (const e20 in this._hooks)
          delete this._hooks[e20];
      }
      callHook(e20, ...t7) {
        return t7.unshift(e20), this.callHookWith(serialTaskCaller, e20, ...t7);
      }
      callHookParallel(e20, ...t7) {
        return t7.unshift(e20), this.callHookWith(parallelTaskCaller, e20, ...t7);
      }
      callHookWith(e20, t7, ...n4) {
        const o13 = this._before || this._after ? { name: t7, args: n4, context: {} } : void 0;
        this._before && callEachWith(this._before, o13);
        const s8 = e20(t7 in this._hooks ? [...this._hooks[t7]] : [], n4);
        return s8 instanceof Promise ? s8.finally(() => {
          this._after && o13 && callEachWith(this._after, o13);
        }) : (this._after && o13 && callEachWith(this._after, o13), s8);
      }
      beforeEach(e20) {
        return this._before = this._before || [], this._before.push(e20), () => {
          if (void 0 !== this._before) {
            const t7 = this._before.indexOf(e20);
            -1 !== t7 && this._before.splice(t7, 1);
          }
        };
      }
      afterEach(e20) {
        return this._after = this._after || [], this._after.push(e20), () => {
          if (void 0 !== this._after) {
            const t7 = this._after.indexOf(e20);
            -1 !== t7 && this._after.splice(t7, 1);
          }
        };
      }
    };
    ze3 = /\d/;
    qe3 = ["-", "_", "/", "."];
    Ke3 = /{{(.*?)}}/g;
    De3 = ne4({ nuxt: {} });
    We3 = { app: { baseURL: "/", buildId: "7fc3e6ed-0e28-42c8-829c-d5c34a01cdb4", buildAssetsDir: "/_nuxt/", cdnURL: "" }, nitro: { envPrefix: "NUXT_", routeRules: { "/__nuxt_error": { cache: false }, "/_nuxt/builds/meta/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } }, "/_nuxt/builds/**": { headers: { "cache-control": "public, max-age=1, immutable" } }, "/_nuxt/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } } } }, public: {}, hub: { projectUrl: "", projectSecretKey: "", url: "https://admin.hub.nuxt.com", projectKey: "", userToken: "", remote: "", remoteManifest: "", dir: ".data/hub", analytics: false, blob: true, cache: true, database: true, kv: true, version: "0.6.17", env: "production", openapi: true } };
    Fe3 = { prefix: "NITRO_", altPrefix: We3.nitro.envPrefix ?? R4.env.NITRO_ENV_PREFIX ?? "_", envExpansion: We3.nitro.envExpansion ?? R4.env.NITRO_ENV_EXPANSION ?? false };
    Ve3 = _deepFreeze(applyEnv(klona(We3), Fe3));
    _deepFreeze(klona(De3)), new Proxy(/* @__PURE__ */ Object.create(null), { get: (e20, t7) => {
      console.warn("Please use `useRuntimeConfig()` instead of accessing config directly.");
      const n4 = useRuntimeConfig2();
      if (t7 in n4)
        return n4[t7];
    } });
    Qe3 = "base64:";
    Je3 = ["hasItem", "getItem", "getItemRaw", "setItem", "setItemRaw", "removeItem", "getMeta", "setMeta", "removeMeta", "getKeys", "clear", "mount", "unmount"];
    memory = () => {
      const e20 = /* @__PURE__ */ new Map();
      return { name: "memory", options: {}, hasItem: (t7) => e20.has(t7), getItem: (t7) => e20.get(t7) ?? null, getItemRaw: (t7) => e20.get(t7) ?? null, setItem(t7, n4) {
        e20.set(t7, n4);
      }, setItemRaw(t7, n4) {
        e20.set(t7, n4);
      }, removeItem(t7) {
        e20.delete(t7);
      }, getKeys: () => Array.from(e20.keys()), clear() {
        e20.clear();
      }, dispose() {
        e20.clear();
      } };
    };
    Ze3 = {};
    normalizeKey$1 = function(e20) {
      return e20 ? e20.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
    };
    Ge3 = { getKeys: () => Promise.resolve(Object.keys(Ze3)), hasItem: (e20) => (e20 = normalizeKey$1(e20), Promise.resolve(e20 in Ze3)), getItem: (e20) => (e20 = normalizeKey$1(e20), Promise.resolve(Ze3[e20] ? Ze3[e20].import() : null)), getMeta: (e20) => (e20 = normalizeKey$1(e20), Promise.resolve(Ze3[e20] ? Ze3[e20].meta : {})) };
    cloudflareKVBindingDriver = (e20) => {
      const r5 = (t7 = "") => e20.base ? function(...e21) {
        return e21.map(normalizeKey2).filter(Boolean).join(":");
      }(e20.base, t7) : t7;
      async function getKeys(t7 = "") {
        t7 = r5(t7);
        const n4 = getKVBinding(e20.binding);
        return (await n4.list(t7 ? { prefix: t7 } : void 0)).keys.map((e21) => e21.name);
      }
      return { name: "cloudflare-kv-binding", options: e20, async hasItem(t7) {
        t7 = r5(t7);
        const n4 = getKVBinding(e20.binding);
        return null !== await n4.get(t7);
      }, getItem(t7) {
        t7 = r5(t7);
        return getKVBinding(e20.binding).get(t7);
      }, setItem(t7, n4) {
        t7 = r5(t7);
        return getKVBinding(e20.binding).put(t7, n4);
      }, removeItem(t7) {
        t7 = r5(t7);
        return getKVBinding(e20.binding).delete(t7);
      }, getKeys: () => getKeys().then((t7) => t7.map((t8) => e20.base ? t8.slice(e20.base.length) : t8)), async clear(t7) {
        const n4 = getKVBinding(e20.binding), o13 = await getKeys(t7);
        await Promise.all(o13.map((e21) => n4.delete(e21)));
      } };
    };
    Ye3 = createStorage({});
    Ye3.mount("/assets", Ge3), Ye3.mount("cache", cloudflareKVBindingDriver({ driver: "cloudflare-kv-binding", binding: "CACHE", base: "cache" }));
    Xe3 = { name: "_", base: "/cache", swr: true, maxAge: 1 };
    cachedFunction = function(e20, t7 = {}) {
      t7 = { ...Xe3, ...t7 };
      const n4 = {}, o13 = t7.group || "nitro/functions", s8 = t7.name || e20.name || "_", a7 = t7.integrity || hash([e20, t7]), i11 = t7.validate || ((e21) => void 0 !== e21.value);
      return async (...u5) => {
        if (await t7.shouldBypassCache?.(...u5))
          return e20(...u5);
        const c5 = await (t7.getKey || getKey)(...u5), f3 = await t7.shouldInvalidateCache?.(...u5), h7 = await async function(e21, u6, c6, f4) {
          const h8 = [t7.base, o13, s8, e21 + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
          let l5 = await useStorage().getItem(h8) || {};
          if ("object" != typeof l5) {
            l5 = {};
            const e22 = new Error("Malformed data read from cache.");
            console.error("[nitro] [cache]", e22), useNitroApp().captureError(e22, { event: f4, tags: ["cache"] });
          }
          const d5 = 1e3 * (t7.maxAge ?? t7.maxAge ?? 0);
          d5 && (l5.expires = Date.now() + d5);
          const p4 = c6 || l5.integrity !== a7 || d5 && Date.now() - (l5.mtime || 0) > d5 || false === i11(l5), m10 = p4 ? (async () => {
            const o14 = n4[e21];
            o14 || (void 0 !== l5.value && (t7.staleMaxAge || 0) >= 0 && false === t7.swr && (l5.value = void 0, l5.integrity = void 0, l5.mtime = void 0, l5.expires = void 0), n4[e21] = Promise.resolve(u6()));
            try {
              l5.value = await n4[e21];
            } catch (t8) {
              throw o14 || delete n4[e21], t8;
            }
            if (!o14 && (l5.mtime = Date.now(), l5.integrity = a7, delete n4[e21], false !== i11(l5))) {
              const e22 = useStorage().setItem(h8, l5).catch((e23) => {
                console.error("[nitro] [cache] Cache write error.", e23), useNitroApp().captureError(e23, { event: f4, tags: ["cache"] });
              });
              f4 && f4.waitUntil && f4.waitUntil(e22);
            }
          })() : Promise.resolve();
          return void 0 === l5.value ? await m10 : p4 && f4 && f4.waitUntil && f4.waitUntil(m10), t7.swr && false !== i11(l5) ? (m10.catch((e22) => {
            console.error("[nitro] [cache] SWR handler error.", e22), useNitroApp().captureError(e22, { event: f4, tags: ["cache"] });
          }), l5) : m10.then(() => l5);
        }(c5, () => e20(...u5), f3, u5[0] && isEvent(u5[0]) ? u5[0] : void 0);
        let l4 = h7.value;
        return t7.transform && (l4 = await t7.transform(h7, ...u5) || l4), l4;
      };
    };
    cachedEventHandler = function(e20, t7 = Xe3) {
      const n4 = (t7.varies || []).filter(Boolean).map((e21) => e21.toLowerCase()).sort(), o13 = { ...t7, getKey: async (e21) => {
        const o14 = await t7.getKey?.(e21);
        if (o14)
          return escapeKey(o14);
        const s9 = e21.node.req.originalUrl || e21.node.req.url || e21.path;
        return [`${escapeKey(decodeURI(parseURL2(s9).pathname)).slice(0, 16) || "index"}.${hash(s9)}`, ...n4.map((t8) => [t8, e21.node.req.headers[t8]]).map(([e22, t8]) => `${escapeKey(e22)}.${hash(t8)}`)].join(":");
      }, validate: (e21) => !!e21.value && (!(e21.value.code >= 400) && (void 0 !== e21.value.body && ("undefined" !== e21.value.headers.etag && "undefined" !== e21.value.headers["last-modified"]))), group: t7.group || "nitro/handlers", integrity: t7.integrity || hash([e20, t7]) }, s8 = cachedFunction(async (o14) => {
        const s9 = {};
        for (const e21 of n4)
          s9[e21] = o14.node.req.headers[e21];
        const a7 = cloneWithProxy(o14.node.req, { headers: s9 }), i11 = {};
        let u5;
        const c5 = createEvent(a7, cloneWithProxy(o14.node.res, { statusCode: 200, writableEnded: false, writableFinished: false, headersSent: false, closed: false, getHeader: (e21) => i11[e21], setHeader(e21, t8) {
          return i11[e21] = t8, this;
        }, getHeaderNames: () => Object.keys(i11), hasHeader: (e21) => e21 in i11, removeHeader(e21) {
          delete i11[e21];
        }, getHeaders: () => i11, end(e21, t8, n5) {
          return "string" == typeof e21 && (u5 = e21), "function" == typeof t8 && t8(), "function" == typeof n5 && n5(), this;
        }, write(e21, t8, n5) {
          return "string" == typeof e21 && (u5 = e21), "function" == typeof t8 && t8(), "function" == typeof n5 && n5(), this;
        }, writeHead(e21, t8) {
          if (this.statusCode = e21, t8)
            for (const e22 in t8)
              this.setHeader(e22, t8[e22]);
          return this;
        } }));
        c5.fetch = (e21, t8) => fetchWithEvent(c5, e21, t8, { fetch: useNitroApp().localFetch }), c5.$fetch = (e21, t8) => fetchWithEvent(c5, e21, t8, { fetch: globalThis.$fetch }), c5.context = o14.context;
        const f3 = await e20(c5) || u5, h7 = c5.node.res.getHeaders();
        h7.etag = String(h7.Etag || h7.etag || `W/"${hash(f3)}"`), h7["last-modified"] = String(h7["Last-Modified"] || h7["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString());
        const l4 = [];
        t7.swr ? (t7.maxAge && l4.push(`s-maxage=${t7.maxAge}`), t7.staleMaxAge ? l4.push(`stale-while-revalidate=${t7.staleMaxAge}`) : l4.push("stale-while-revalidate")) : t7.maxAge && l4.push(`max-age=${t7.maxAge}`), l4.length > 0 && (h7["cache-control"] = l4.join(", "));
        return { code: c5.node.res.statusCode, headers: h7, body: f3 };
      }, o13);
      return defineEventHandler(async (n5) => {
        if (t7.headersOnly) {
          if (handleCacheHeaders(n5, { maxAge: t7.maxAge }))
            return;
          return e20(n5);
        }
        const o14 = await s8(n5);
        if (n5.node.res.headersSent || n5.node.res.writableEnded)
          return o14.body;
        if (!handleCacheHeaders(n5, { modifiedTime: new Date(o14.headers["last-modified"]), etag: o14.headers.etag, maxAge: t7.maxAge })) {
          n5.node.res.statusCode = o14.code;
          for (const e21 in o14.headers) {
            const t8 = o14.headers[e21];
            "set-cookie" === e21 ? n5.node.res.appendHeader(e21, splitCookiesString(t8)) : n5.node.res.setHeader(e21, t8);
          }
          return o14.body;
        }
      });
    };
    et3 = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig2().nitro.routeRules }));
    tt3 = [];
    errorHandler = async function(e20, t7) {
      const { stack: n4, statusCode: o13, statusMessage: s8, message: a7 } = function(e21) {
        const t8 = "function" == typeof R4.cwd ? R4.cwd() : "/", n5 = (e21.stack || "").split("\n").splice(1).filter((e22) => e22.includes("at ")).map((e22) => ({ text: e22.replace(t8 + "/", "./").replace("webpack:/", "").replace("file://", "").trim(), internal: e22.includes("node_modules") && !e22.includes(".cache") || e22.includes("internal") || e22.includes("new Promise") })), o14 = e21.statusCode || 500, s9 = e21.statusMessage ?? (404 === o14 ? "Not Found" : ""), a8 = e21.message || e21.toString();
        return { stack: n5, statusCode: o14, statusMessage: s9, message: a8 };
      }(e20), i11 = { url: t7.path, statusCode: o13, statusMessage: s8, message: a7, stack: "", data: e20.data };
      if (e20.unhandled || e20.fatal) {
        const t8 = ["[nuxt]", "[request error]", e20.unhandled && "[unhandled]", e20.fatal && "[fatal]", 200 !== Number(i11.statusCode) && `[${i11.statusCode}]`].filter(Boolean).join(" ");
        console.error(t8, i11.message + "\n" + n4.map((e21) => "  " + e21.text).join("  \n"));
      }
      if (t7.handled)
        return;
      if (setResponseStatus(t7, 200 !== i11.statusCode && i11.statusCode || 500, i11.statusMessage), function(e21) {
        if (hasReqHeader(e21, "accept", "text/html"))
          return false;
        return hasReqHeader(e21, "accept", "application/json") || hasReqHeader(e21, "user-agent", "curl/") || hasReqHeader(e21, "user-agent", "httpie/") || hasReqHeader(e21, "sec-fetch-mode", "cors") || e21.path.startsWith("/api/") || e21.path.endsWith(".json");
      }(t7))
        return setResponseHeader(t7, "Content-Type", "application/json"), send(t7, JSON.stringify(i11));
      const u5 = getRequestHeaders(t7), c5 = t7.path.startsWith("/__nuxt_error") || !!u5["x-nuxt-error"] ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig2(t7).app.baseURL, "/__nuxt_error"), i11), { headers: { ...u5, "x-nuxt-error": "true" }, redirect: "manual" }).catch(() => null);
      if (!c5) {
        const { template: e21 } = await Promise.resolve().then(() => (init_error_500(), error_500_exports));
        if (t7.handled)
          return;
        return setResponseHeader(t7, "Content-Type", "text/html;charset=UTF-8"), send(t7, e21(i11));
      }
      const f3 = await c5.text();
      if (!t7.handled) {
        for (const [e21, n5] of c5.headers.entries())
          setResponseHeader(t7, e21, n5);
        return setResponseStatus(t7, c5.status && 200 !== c5.status ? c5.status : void 0, c5.statusText), send(t7, f3);
      }
    };
    httpDriver = (e20) => {
      const r5 = (t7 = "") => joinURL(e20.base, t7.replace(/:/g, "/")), rBase = (t7 = "") => joinURL(e20.base, (t7 || "/").replace(/:/g, "/"), ":"), catchFetchError = (e21, t7 = null) => {
        if (404 === e21?.response?.status)
          return t7;
        throw e21;
      };
      return { name: "http", options: e20, hasItem: (t7, n4) => Ue2(r5(t7), { method: "HEAD", headers: { ...e20.headers, ...n4.headers } }).then(() => true).catch((e21) => catchFetchError(e21, false)), getItem: async (t7, n4 = {}) => await Ue2(r5(t7), { headers: { ...e20.headers, ...n4.headers } }).catch(catchFetchError), getItemRaw: async (t7, n4) => await Ue2(r5(t7), { headers: { accept: "application/octet-stream", ...e20.headers, ...n4.headers } }).catch(catchFetchError), async getMeta(t7, n4) {
        const o13 = await Ue2.raw(r5(t7), { method: "HEAD", headers: { ...e20.headers, ...n4.headers } });
        let s8;
        const a7 = o13.headers.get("last-modified");
        return a7 && (s8 = new Date(a7)), { status: o13.status, mtime: s8 };
      }, async setItem(t7, n4, o13) {
        await Ue2(r5(t7), { method: "PUT", body: n4, headers: { ...e20.headers, ...o13?.headers } });
      }, async setItemRaw(t7, n4, o13) {
        await Ue2(r5(t7), { method: "PUT", body: n4, headers: { "content-type": "application/octet-stream", ...e20.headers, ...o13.headers } });
      }, async removeItem(t7, n4) {
        await Ue2(r5(t7), { method: "DELETE", headers: { ...e20.headers, ...n4.headers } });
      }, async getKeys(t7, n4) {
        const o13 = await Ue2(rBase(t7), { headers: { ...e20.headers, ...n4.headers } });
        return Array.isArray(o13) ? o13 : [];
      }, async clear(t7, n4) {
        await Ue2(rBase(t7), { method: "DELETE", headers: { ...e20.headers, ...n4.headers } });
      } };
    };
    rt3 = { analytics: ["NuxtHub Analytics is not enabled, set `hub.analytics = true` in your `nuxt.config.ts`"].join("\n"), blob: ["NuxtHub Blob is not enabled, set `hub.blob = true` in your `nuxt.config.ts`", "Read more at `https://hub.nuxt.com/docs/storage/blob`"].join("\n"), cache: ["NuxtHub Cache is not enabled, set `hub.cache = true` in your `nuxt.config.ts`"].join("\n"), database: ["NuxtHub Database is not enabled, set `hub.database = true` in your `nuxt.config.ts`", "Read more at `https://hub.nuxt.com/docs/storage/database`"].join("\n"), kv: ["NuxtHub KV is not enabled, set `hub.kv = true` in your `nuxt.config.ts`", "Read more at `https://hub.nuxt.com/docs/storage/kv`"].join("\n") };
    _lazy_FfAYom = () => Promise.resolve().then(() => (init_renderer(), renderer_exports)).then(function(e20) {
      return e20.Y;
    });
    ot3 = [{ route: "", handler: xe2(async (e20) => {
      const { pathname: t7 } = parseURL2(e20.path), n4 = await hubKV().get("redirects");
      if (null == n4 ? void 0 : n4[t7])
        return sendRedirect(e20, n4[t7]);
    }), lazy: false, middleware: true, method: void 0 }, { route: "/api/cached", handler: () => Promise.resolve().then(() => (init_cached_get(), cached_get_exports)), lazy: true, middleware: false, method: "get" }, { route: "/api/images/:pathname", handler: () => Promise.resolve().then(() => (init_pathname_delete(), pathname_delete_exports)), lazy: true, middleware: false, method: "delete" }, { route: "/api/images", handler: () => Promise.resolve().then(() => (init_index_get(), index_get_exports)), lazy: true, middleware: false, method: "get" }, { route: "/api/images/upload", handler: () => Promise.resolve().then(() => (init_upload_post(), upload_post_exports)), lazy: true, middleware: false, method: "post" }, { route: "/api/messages", handler: () => Promise.resolve().then(() => (init_index_get2(), index_get2_exports)), lazy: true, middleware: false, method: "get" }, { route: "/api/messages", handler: () => Promise.resolve().then(() => (init_index_post(), index_post_exports)), lazy: true, middleware: false, method: "post" }, { route: "/api/redirects", handler: () => Promise.resolve().then(() => (init_index_get3(), index_get3_exports)), lazy: true, middleware: false, method: "get" }, { route: "/api/redirects", handler: () => Promise.resolve().then(() => (init_index_put(), index_put_exports)), lazy: true, middleware: false, method: "put" }, { route: "/api/_hub/**:feature", handler: () => Promise.resolve().then(() => (init_feature(), feature_exports)), lazy: true, middleware: false, method: void 0 }, { route: "/api/_hub", handler: () => Promise.resolve().then(() => (init_index_head(), index_head_exports)), lazy: true, middleware: false, method: "head" }, { route: "/api/_hub/manifest", handler: () => Promise.resolve().then(() => (init_manifest_get(), manifest_get_exports)), lazy: true, middleware: false, method: "get" }, { route: "/api/_hub/openapi", handler: () => Promise.resolve().then(() => (init_openapi_get(), openapi_get_exports)), lazy: true, middleware: false, method: "get" }, { route: "/api/_hub/blob/**:pathname", handler: () => Promise.resolve().then(() => (init_pathname_delete2(), pathname_delete_exports2)), lazy: true, middleware: false, method: "delete" }, { route: "/api/_hub/blob/**:pathname", handler: () => Promise.resolve().then(() => (init_pathname_get(), pathname_get_exports)), lazy: true, middleware: false, method: "get" }, { route: "/api/_hub/blob/**:pathname", handler: () => Promise.resolve().then(() => (init_pathname_put(), pathname_put_exports)), lazy: true, middleware: false, method: "put" }, { route: "/api/_hub/blob/delete-folder", handler: () => Promise.resolve().then(() => (init_delete_folder_post(), delete_folder_post_exports)), lazy: true, middleware: false, method: "post" }, { route: "/api/_hub/blob/delete", handler: () => Promise.resolve().then(() => (init_delete_post(), delete_post_exports)), lazy: true, middleware: false, method: "post" }, { route: "/api/_hub/blob/head/**:pathname", handler: () => Promise.resolve().then(() => (init_pathname_get2(), pathname_get_exports2)), lazy: true, middleware: false, method: "get" }, { route: "/api/_hub/blob", handler: () => Promise.resolve().then(() => (init_index_get4(), index_get_exports2)), lazy: true, middleware: false, method: "get" }, { route: "/api/_hub/blob", handler: () => Promise.resolve().then(() => (init_index_post2(), index_post_exports2)), lazy: true, middleware: false, method: "post" }, { route: "/api/_hub/blob/multipart/:action/**:pathname", handler: () => Promise.resolve().then(() => (init_pathname(), pathname_exports)), lazy: true, middleware: false, method: void 0 }, { route: "/api/_hub/cache/**:key", handler: () => Promise.resolve().then(() => (init_key_delete(), key_delete_exports)), lazy: true, middleware: false, method: "delete" }, { route: "/api/_hub/cache/**:key", handler: () => Promise.resolve().then(() => (init_key_get(), key_get_exports)), lazy: true, middleware: false, method: "get" }, { route: "/api/_hub/cache/**:key", handler: () => Promise.resolve().then(() => (init_key_options(), key_options_exports)), lazy: true, middleware: false, method: "options" }, { route: "/api/_hub/cache/batch-delete", handler: () => Promise.resolve().then(() => (init_batch_delete_options(), batch_delete_options_exports)), lazy: true, middleware: false, method: "options" }, { route: "/api/_hub/cache/batch-delete", handler: () => Promise.resolve().then(() => (init_batch_delete_post(), batch_delete_post_exports)), lazy: true, middleware: false, method: "post" }, { route: "/api/_hub/cache/clear/**:base", handler: () => Promise.resolve().then(() => (init_base_delete(), base_delete_exports)), lazy: true, middleware: false, method: "delete" }, { route: "/api/_hub/cache/clear/**:base", handler: () => Promise.resolve().then(() => (init_base_options(), base_options_exports)), lazy: true, middleware: false, method: "options" }, { route: "/api/_hub/cache", handler: () => Promise.resolve().then(() => (init_index_get22(), index_get2_exports2)), lazy: true, middleware: false, method: "get" }, { route: "/api/_hub/database/:command", handler: () => Promise.resolve().then(() => (init_command_post(), command_post_exports)), lazy: true, middleware: false, method: "post" }, { route: "/api/_hub/database/query", handler: () => Promise.resolve().then(() => (init_query_options(), query_options_exports)), lazy: true, middleware: false, method: "options" }, { route: "/api/_hub/database/query", handler: () => Promise.resolve().then(() => (init_query_post(), query_post_exports)), lazy: true, middleware: false, method: "post" }, { route: "/api/_hub/kv/**:path", handler: () => Promise.resolve().then(() => (init_path(), path_exports)), lazy: true, middleware: false, method: void 0 }, { route: "/images/:pathname", handler: () => Promise.resolve().then(() => (init_pathname_get3(), pathname_get_exports3)), lazy: true, middleware: false, method: "get" }, { route: "/__nuxt_error", handler: _lazy_FfAYom, lazy: true, middleware: false, method: void 0 }, { route: "/**", handler: _lazy_FfAYom, lazy: true, middleware: false, method: void 0 }];
    st3 = [{ route: "/api/cached", method: "get" }, { route: "/api/images/:pathname", method: "delete" }, { route: "/api/images", method: "get" }, { route: "/api/images/upload", method: "post" }, { route: "/api/messages", method: "get" }, { route: "/api/messages", method: "post" }, { route: "/api/redirects", method: "get" }, { route: "/api/redirects", method: "put" }, { route: "/api/_hub/**:feature" }, { route: "/api/_hub", method: "head" }, { route: "/api/_hub/manifest", method: "get" }, { route: "/api/_hub/openapi", method: "get" }, { route: "/api/_hub/blob/**:pathname", method: "delete" }, { route: "/api/_hub/blob/**:pathname", method: "get" }, { route: "/api/_hub/blob/**:pathname", method: "put" }, { route: "/api/_hub/blob/delete-folder", method: "post" }, { route: "/api/_hub/blob/delete", method: "post" }, { route: "/api/_hub/blob/head/**:pathname", method: "get" }, { route: "/api/_hub/blob", method: "get" }, { route: "/api/_hub/blob", method: "post" }, { route: "/api/_hub/blob/multipart/:action/**:pathname" }, { route: "/api/_hub/cache/**:key", method: "delete" }, { route: "/api/_hub/cache/**:key", method: "get" }, { route: "/api/_hub/cache/**:key", method: "options" }, { route: "/api/_hub/cache/batch-delete", method: "options" }, { route: "/api/_hub/cache/batch-delete", method: "post" }, { route: "/api/_hub/cache/clear/**:base", method: "delete" }, { route: "/api/_hub/cache/clear/**:base", method: "options" }, { route: "/api/_hub/cache", method: "get" }, { route: "/api/_hub/database/:command", method: "post" }, { route: "/api/_hub/database/query", method: "options" }, { route: "/api/_hub/database/query", method: "post" }, { route: "/api/_hub/kv/**:path" }, { route: "/images/:pathname", method: "get" }, { route: "/__nuxt_error" }];
    at3 = function() {
      const e20 = useRuntimeConfig2(), t7 = createHooks(), captureError = (e21, n5 = {}) => {
        const o14 = t7.callHookParallel("error", e21, n5).catch((e22) => {
          console.error("Error while capturing another error", e22);
        });
        if (n5.event && isEvent(n5.event)) {
          const t8 = n5.event.context.nitro?.errors;
          t8 && t8.push({ error: e21, context: n5 }), n5.event.waitUntil && n5.event.waitUntil(o14);
        }
      }, n4 = createApp2({ debug: destr(false), onError: (e21, t8) => (captureError(e21, { event: t8, tags: ["request"] }), errorHandler(e21, t8)), onRequest: async (e21) => {
        await at3.hooks.callHook("request", e21).catch((t8) => {
          captureError(t8, { event: e21, tags: ["request"] });
        });
      }, onBeforeResponse: async (e21, t8) => {
        await at3.hooks.callHook("beforeResponse", e21, t8).catch((t9) => {
          captureError(t9, { event: e21, tags: ["request", "response"] });
        });
      }, onAfterResponse: async (e21, t8) => {
        await at3.hooks.callHook("afterResponse", e21, t8).catch((t9) => {
          captureError(t9, { event: e21, tags: ["request", "response"] });
        });
      } }), o13 = function(e21 = {}) {
        const t8 = createRouter$1({}), n5 = {};
        let o14;
        const s9 = {}, addRoute = (e22, o15, a9) => {
          let i12 = n5[e22];
          if (i12 || (n5[e22] = i12 = { path: e22, handlers: {} }, t8.insert(e22, i12)), Array.isArray(a9))
            for (const t9 of a9)
              addRoute(e22, o15, t9);
          else
            i12.handlers[a9] = toEventHandler(o15, 0, e22);
          return s9;
        };
        s9.use = s9.add = (e22, t9, n6) => addRoute(e22, t9, n6 || "all");
        for (const e22 of Ie3)
          s9[e22] = (t9, n6) => s9.add(t9, n6, e22);
        const matchHandler = (e22 = "/", n6 = "get") => {
          const s10 = e22.indexOf("?");
          -1 !== s10 && (e22 = e22.slice(0, Math.max(0, s10)));
          const a9 = t8.lookup(e22);
          if (!a9 || !a9.handlers)
            return { error: createError$1({ statusCode: 404, name: "Not Found", statusMessage: `Cannot find any route matching ${e22 || "/"}.` }) };
          let i12 = a9.handlers[n6] || a9.handlers.all;
          if (!i12) {
            o14 || (o14 = toRouteMatcher(t8));
            const s11 = o14.matchAll(e22).reverse();
            for (const e23 of s11) {
              if (e23.handlers[n6]) {
                i12 = e23.handlers[n6], a9.handlers[n6] = a9.handlers[n6] || i12;
                break;
              }
              if (e23.handlers.all) {
                i12 = e23.handlers.all, a9.handlers.all = a9.handlers.all || i12;
                break;
              }
            }
          }
          return i12 ? { matched: a9, handler: i12 } : { error: createError$1({ statusCode: 405, name: "Method Not Allowed", statusMessage: `Method ${n6} is not allowed on this route.` }) };
        }, a8 = e21.preemptive || e21.preemtive;
        return s9.handler = xe2((e22) => {
          const t9 = matchHandler(e22.path, e22.method.toLowerCase());
          if ("error" in t9) {
            if (a8)
              throw t9.error;
            return;
          }
          e22.context.matchedRoute = t9.matched;
          const n6 = t9.matched.params || {};
          return e22.context.params = n6, Promise.resolve(t9.handler(e22)).then((e23) => void 0 === e23 && a8 ? null : e23);
        }), s9.handler.__resolve__ = async (e22) => {
          e22 = withLeadingSlash(e22);
          const t9 = matchHandler(e22);
          if ("error" in t9)
            return;
          let n6 = { route: t9.matched.path, handler: t9.handler };
          if (t9.handler.__resolve__) {
            const o15 = await t9.handler.__resolve__(e22);
            if (!o15)
              return;
            n6 = { ...n6, ...o15 };
          }
          return n6;
        }, s9;
      }({ preemptive: true }), s8 = (a7 = toNodeListener(n4), function(e21) {
        const t8 = new IncomingMessage(), n5 = new ServerResponse(t8);
        if (t8.url = e21.url || "/", t8.method = e21.method || "GET", t8.headers = {}, e21.headers) {
          const n6 = "function" == typeof e21.headers.entries ? e21.headers.entries() : Object.entries(e21.headers);
          for (const [e22, o14] of n6)
            o14 && (t8.headers[e22.toLowerCase()] = o14);
        }
        return t8.headers.host = t8.headers.host || e21.host || "localhost", t8.connection.encrypted = t8.connection.encrypted || "https" === e21.protocol, t8.body = e21.body || null, t8.__unenv__ = e21.context, a7(t8, n5).then(() => {
          let e22 = n5._data;
          (Me3.has(n5.statusCode) || "HEAD" === t8.method.toUpperCase()) && (e22 = null, delete n5._headers["content-length"]);
          const o14 = { body: e22, headers: n5._headers, status: n5.statusCode, statusText: n5.statusMessage };
          return t8.destroy(), n5.destroy(), o14;
        });
      });
      var a7;
      const i11 = function(e21, t8 = global.fetch) {
        return async function(n5, o14) {
          const s9 = n5.toString();
          if (!s9.startsWith("/"))
            return t8(s9, o14);
          try {
            const t9 = await e21({ url: s9, ...o14 });
            return new Response(t9.body, { status: t9.status, statusText: t9.statusText, headers: Object.fromEntries(Object.entries(t9.headers).map(([e22, t10]) => [e22, Array.isArray(t10) ? t10.join(",") : String(t10) || ""])) });
          } catch (e22) {
            return new Response(e22.toString(), { status: Number.parseInt(e22.statusCode || e22.code) || 500, statusText: e22.statusText });
          }
        };
      }(s8, globalThis.fetch), localFetch = (e21, t8) => i11(e21, t8).then((e22) => function(e23) {
        if (!e23.headers.has("set-cookie"))
          return e23;
        return new Response(e23.body, { status: e23.status, statusText: e23.statusText, headers: normalizeCookieHeaders(e23.headers) });
      }(e22)), u5 = createFetch$1({ fetch: localFetch, Headers: Oe3, defaults: { baseURL: e20.app.baseURL } });
      var c5;
      globalThis.$fetch = u5, n4.use((c5 = { localFetch }, xe2((e21) => {
        const t8 = getRouteRules(e21);
        if (t8.headers && _e3(e21, t8.headers), t8.redirect) {
          let n5 = t8.redirect.to;
          if (n5.endsWith("/**")) {
            let o14 = e21.path;
            const s9 = t8.redirect._redirectStripBase;
            s9 && (o14 = withoutBase(o14, s9)), n5 = joinURL(n5.slice(0, -3), o14);
          } else
            e21.path.includes("?") && (n5 = withQuery(n5, getQuery$1(e21.path)));
          return sendRedirect(e21, n5, t8.redirect.statusCode);
        }
        if (t8.proxy) {
          let n5 = t8.proxy.to;
          if (n5.endsWith("/**")) {
            let o14 = e21.path;
            const s9 = t8.proxy._proxyStripBase;
            s9 && (o14 = withoutBase(o14, s9)), n5 = joinURL(n5.slice(0, -3), o14);
          } else
            e21.path.includes("?") && (n5 = withQuery(n5, getQuery$1(e21.path)));
          return proxyRequest(e21, n5, { fetch: c5.localFetch, ...t8.proxy });
        }
      }))), n4.use(xe2((e21) => {
        e21.context.nitro = e21.context.nitro || { errors: [] };
        const t8 = e21.node.req?.__unenv__;
        t8 && Object.assign(e21.context, t8), e21.fetch = (t9, n5) => fetchWithEvent(e21, t9, n5, { fetch: localFetch }), e21.$fetch = (t9, n5) => fetchWithEvent(e21, t9, n5, { fetch: u5 }), e21.waitUntil = (n5) => {
          e21.context.nitro._waitUntilPromises || (e21.context.nitro._waitUntilPromises = []), e21.context.nitro._waitUntilPromises.push(n5), t8?.waitUntil && t8.waitUntil(n5);
        }, e21.captureError = (t9, n5) => {
          captureError(t9, { event: e21, ...n5 });
        };
      }));
      for (const t8 of ot3) {
        let s9 = t8.lazy ? lazyEventHandler(t8.handler) : t8.handler;
        if (t8.middleware || !t8.route) {
          const o14 = (e20.app.baseURL + (t8.route || "/")).replace(/\/+/g, "/");
          n4.use(o14, s9);
        } else {
          const e21 = getRouteRulesForPath(t8.route.replace(/:\w+|\*\*/g, "_"));
          e21.cache && (s9 = cachedEventHandler(s9, { group: "nitro/routes", ...e21.cache })), o13.use(t8.route, s9, t8.method);
        }
      }
      n4.use(e20.app.baseURL, o13.handler);
      const f3 = { hooks: t7, h3App: n4, router: o13, localCall: s8, localFetch, captureError };
      for (const e21 of tt3)
        try {
          e21(f3);
        } catch (e22) {
          throw captureError(e22, { tags: ["plugin"] }), e22;
        }
      return f3;
    }();
    useNitroApp = () => at3;
    it3 = /post|put|patch/i;
    ut3 = { "/favicon.ico": { type: "image/vnd.microsoft.icon", etag: '"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI"', mtime: "2024-06-27T15:27:23.252Z", size: 4286, path: "../favicon.ico" }, "/hub.config.json": { type: "application/json", etag: '"5b-tnqTW3fw9eI1Q0+/zw8DpJ8uTtE"', mtime: "2024-06-27T15:27:23.252Z", size: 91, path: "../hub.config.json" }, "/_nuxt/BJZjIk6h.js": { type: "text/javascript; charset=utf-8", etag: '"4382-B6APK66c+xn4Mkf4vJeMD8NR6Gk"', mtime: "2024-06-27T15:27:23.250Z", size: 17282, path: "../_nuxt/BJZjIk6h.js" }, "/_nuxt/CdsKhjXL.js": { type: "text/javascript; charset=utf-8", etag: '"ace-ogxelAH618axTEzXDQqXdCelI+0"', mtime: "2024-06-27T15:27:23.250Z", size: 2766, path: "../_nuxt/CdsKhjXL.js" }, "/_nuxt/D135UVqM.js": { type: "text/javascript; charset=utf-8", etag: '"26bb3-9OaBZds88SbLuFRfhjfLtiHBlDs"', mtime: "2024-06-27T15:27:23.250Z", size: 158643, path: "../_nuxt/D135UVqM.js" }, "/_nuxt/DKRany1Z.js": { type: "text/javascript; charset=utf-8", etag: '"2036-LKN2lOcE71FT43nbxz4h5zdsekU"', mtime: "2024-06-27T15:27:23.250Z", size: 8246, path: "../_nuxt/DKRany1Z.js" }, "/_nuxt/DlAUqK2U.js": { type: "text/javascript; charset=utf-8", etag: '"5b-eFCz/UrraTh721pgAl0VxBNR1es"', mtime: "2024-06-27T15:27:23.250Z", size: 91, path: "../_nuxt/DlAUqK2U.js" }, "/_nuxt/error-404.DKsLBFUu.css": { type: "text/css; charset=utf-8", etag: '"de4-zlkaIR/QmaichCQwDNdChe77D/c"', mtime: "2024-06-27T15:27:23.250Z", size: 3556, path: "../_nuxt/error-404.DKsLBFUu.css" }, "/_nuxt/error-500.f8jQXIot.css": { type: "text/css; charset=utf-8", etag: '"75c-7MFaZ2yf8j10jEwaaPrxJMBQD/Y"', mtime: "2024-06-27T15:27:23.250Z", size: 1884, path: "../_nuxt/error-500.f8jQXIot.css" }, "/_nuxt/index.BNBMb5Dg.css": { type: "text/css; charset=utf-8", etag: '"820-42GXJqFxvdRMRlUYFFXZad47gBo"', mtime: "2024-06-27T15:27:23.251Z", size: 2080, path: "../_nuxt/index.BNBMb5Dg.css" }, "/_nuxt/builds/latest.json": { type: "application/json", etag: '"47-Bi1yubEKt0sPfqEF48lpUJjxkfw"', mtime: "2024-06-27T15:27:23.248Z", size: 71, path: "../_nuxt/builds/latest.json" }, "/_nuxt/builds/meta/7fc3e6ed-0e28-42c8-829c-d5c34a01cdb4.json": { type: "application/json", etag: '"8b-mMeNILvZLIxCVPrrwZLBpL9n83A"', mtime: "2024-06-27T15:27:23.246Z", size: 139, path: "../_nuxt/builds/meta/7fc3e6ed-0e28-42c8-829c-d5c34a01cdb4.json" } };
    ct3 = { "/_nuxt/builds/meta": { maxAge: 31536e3 }, "/_nuxt/builds": { maxAge: 1 }, "/_nuxt": { maxAge: 31536e3 } };
    ft3 = { async fetch(e20, t7, n4) {
      const o13 = new URL(e20.url);
      if (t7.ASSETS && function(e21 = "") {
        if (ut3[e21])
          return true;
        for (const t8 in ct3)
          if (e21.startsWith(t8))
            return true;
        return false;
      }(o13.pathname))
        return t7.ASSETS.fetch(e20);
      let s8;
      return function(e21) {
        return it3.test(e21.method);
      }(e20) && (s8 = h6.from(await e20.arrayBuffer())), globalThis.__env__ = t7, at3.localFetch(o13.pathname + o13.search, { context: { cf: e20.cf, waitUntil: (e21) => n4.waitUntil(e21), cloudflare: { request: e20, env: t7, context: n4 } }, host: o13.hostname, protocol: o13.protocol, method: e20.method, headers: e20.headers, body: s8 });
    }, scheduled(e20, t7, n4) {
    } };
  }
});

// .wrangler/tmp/bundle-KFpKCp/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/bundle-KFpKCp/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/pages-nNPccD/w6fnqavi1w.js
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/pages-nNPccD/bundledWorker-0.8900686347181348.mjs
init_checked_fetch();
init_modules_watch_stub();
init_runtime();
globalThis._importMeta_ = { url: "file:///_entry.js", env: {} };

// node_modules/.pnpm/wrangler@3.62.0/node_modules/wrangler/templates/pages-dev-util.ts
init_checked_fetch();
init_modules_watch_stub();
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}

// .wrangler/tmp/pages-nNPccD/w6fnqavi1w.js
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/_nuxt/*",
    "/favicon.ico",
    "/hub.config.json"
  ]
};
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (ft3.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return ft3.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};

// node_modules/.pnpm/wrangler@3.62.0/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_checked_fetch();
init_modules_watch_stub();
var drainBody = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e20) {
      console.error("Failed to drain the unused request body.", e20);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/.pnpm/wrangler@3.62.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_checked_fetch();
init_modules_watch_stub();
function reduceError(e20) {
  return {
    name: e20?.name,
    message: e20?.message ?? String(e20),
    stack: e20?.stack,
    cause: e20?.cause === void 0 ? void 0 : reduceError(e20.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e20) {
    const error = reduceError(e20);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-KFpKCp/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_dev_pipeline_default;

// node_modules/.pnpm/wrangler@3.62.0/node_modules/wrangler/templates/middleware/common.ts
init_checked_fetch();
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-KFpKCp/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  };
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=w6fnqavi1w.js.map

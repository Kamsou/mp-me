// <define:__ROUTES__>
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

// node_modules/.pnpm/wrangler@3.62.0/node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/Users/camillecoutens/Desktop/my-todo-of-the-day/.wrangler/tmp/pages-nNPccD/bundledWorker-0.8900686347181348.mjs";
import { isRoutingRuleMatch } from "/Users/camillecoutens/Desktop/my-todo-of-the-day/node_modules/.pnpm/wrangler@3.62.0/node_modules/wrangler/templates/pages-dev-util.ts";
export * from "/Users/camillecoutens/Desktop/my-todo-of-the-day/.wrangler/tmp/pages-nNPccD/bundledWorker-0.8900686347181348.mjs";
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
        if (worker.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return worker.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=w6fnqavi1w.js.map

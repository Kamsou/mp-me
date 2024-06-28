import{e as a,a as s,l as t,b as e,m as o,s as r}from"../../../../runtime.mjs";import{r as m}from"../../../../_/auth.mjs";const i=a((async a=>{await m(a),s("cache");const i=t(a,"key")||"";if(!/\.[a-z0-9]+$/i.test(i))throw e({statusCode:400,message:"Invalid key"});const c=o("cache:nitro");return await c.removeItem(i),r(a)}));export{i as default};
//# sourceMappingURL=_...key_.delete.mjs.map

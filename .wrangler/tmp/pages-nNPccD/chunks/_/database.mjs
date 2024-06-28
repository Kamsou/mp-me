import{a as r,u as a,p as e,b as t,o,n as s}from"../runtime.mjs";let n;function hubDatabase(){if(r("database"),n)return n;const c=a().hub,d=e.env.DB||globalThis.__env__?.DB||globalThis.DB;if(c.remote&&c.projectUrl&&!d)return n=function(a,e){r("database");const t=o.create({baseURL:s(a,"/api/_hub/database"),method:"POST",headers:{Authorization:`Bearer ${e}`}});return{exec:async r=>t("/exec",{body:{query:r}}).catch(handleProxyError),dump:async()=>t("/dump").catch(handleProxyError),prepare(r){const a={_body:{query:r,params:[]},bind:(...e)=>({...a,_body:{query:r,params:e}}),async all(){return t("/all",{body:this._body}).catch(handleProxyError)},async raw(r){return t("/raw",{body:{...this._body,...r}}).catch(handleProxyError)},async run(){return t("/run",{body:this._body}).catch(handleProxyError)},async first(r){return t("/first",{body:{...this._body,colName:r}}).catch(handleProxyError).then((r=>r||null))}};return a},batch:r=>t("/batch",{body:r.map((r=>r._body))})}}(c.projectUrl,c.projectSecretKey||c.userToken),n;if(d)return n=d,n;throw t("Missing Cloudflare DB binding (D1)")}function handleProxyError(r){throw t({statusCode:r.statusCode,message:r.data?.message||r.message})}export{hubDatabase as h};
//# sourceMappingURL=database.mjs.map

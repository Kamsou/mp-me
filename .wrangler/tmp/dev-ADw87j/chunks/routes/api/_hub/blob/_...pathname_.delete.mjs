import{e as a,a as t,g as m,s}from"../../../../runtime.mjs";import{z as r}from"../../../../_/index.mjs";import{h as o}from"../../../../_/blob.mjs";import{r as e}from"../../../../_/auth.mjs";import"../../../../virtual/_commonjsHelpers.mjs";const i=a((async a=>{await e(a),t("blob");const{pathname:i}=await m(a,r.object({pathname:r.string().min(1)}).parse);return await o().delete(i),s(a)}));export{i as default};
//# sourceMappingURL=_...pathname_.delete.mjs.map
import{a as s}from"./index-CLEzbj5F.js";import{r as m}from"./entry-preview-BJZ9JW0y.js";import"./iframe-yqyOgBwr.js";import"../sb-preview/runtime.js";var n={},a;function c(){if(a)return n;a=1;var e=m();return n.createRoot=e.createRoot,n.hydrateRoot=e.hydrateRoot,n}var R=c(),i=new Map;function v(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var p=({callback:e,children:t})=>{let r=s.useRef();return s.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,t=null;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}});var y=async(e,t,r)=>{let o=await f(t,r);if(v()){o.render(e);return}let{promise:u,resolve:l}=Promise.withResolvers();return o.render(s.createElement(p,{callback:l},e)),u},g=(e,t)=>{let r=i.get(e);r&&(r.unmount(),i.delete(e))},f=async(e,t)=>{let r=i.get(e);return r||(r=R.createRoot(e,t),i.set(e,r)),r};export{y as renderElement,g as unmountElement};

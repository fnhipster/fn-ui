import{C as i}from"./utils-CG_vfxgm.js";const d={title:"components/fn-head",tags:["autodocs"],parameters:{layout:"centered"},render:({innerHTML:s,...o})=>{const t=i("fn-head",o);return t.innerHTML=s,t},argTypes:{}},e={args:{innerHTML:`
      <h1 slot="hero">Post title goes here</h1>
      <div slot="ctas">
        <fn-timeago date="${Date.now()}"></fn-timeago>
        <fn-share></fn-share>
      </div>
    `}};var r,n,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    innerHTML: /* html */\`
      <h1 slot="hero">Post title goes here</h1>
      <div slot="ctas">
        <fn-timeago date="\${Date.now()}"></fn-timeago>
        <fn-share></fn-share>
      </div>
    \`
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const c=["Primary"];export{e as Primary,c as __namedExportsOrder,d as default};

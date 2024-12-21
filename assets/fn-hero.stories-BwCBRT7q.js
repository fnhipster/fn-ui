import{C as h}from"./utils-CG_vfxgm.js";const g={title:"components/fn-hero",tags:["autodocs"],parameters:{layout:"fullscreen"},render:({innerHTML:c,...n})=>{const t=h("fn-hero",n);return t.innerHTML=c,t},argTypes:{}},e={args:{innerHTML:`
    <fn-image slot="image">
      <img src="https://picsum.photos/seed/picsum/960/530" alt="placeholder image" width="960" height="530"/>
    </fn-image>
    <h1 slot="title">Hero Title</h1>
  `}},s={args:{innerHTML:`
    <fn-image slot="image" poster="https://picsum.photos/seed/picsum/960/530">
      <picture>
        <source type="image/webp" srcset="https://picsum.photos/seed/picsum/960/530" media="(min-width: 600px)">
        <source type="image/webp" srcset="https://picsum.photos/seed/picsum/660/230">
        <source type="image/jpeg" srcset="https://picsum.photos/seed/picsum/960/530" media="(min-width: 600px)">
        <img loading="lazy" alt="" src="https://picsum.photos/seed/picsum/960/530" width="960" height="530">
      </picture>
    </fn-image>
    <h1 slot="title">Hero Title</h1>
  `}};var i,p,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    innerHTML: /* html */\`
    <fn-image slot="image">
      <img src="https://picsum.photos/seed/picsum/960/530" alt="placeholder image" width="960" height="530"/>
    </fn-image>
    <h1 slot="title">Hero Title</h1>
  \`
  }
}`,...(r=(p=e.parameters)==null?void 0:p.docs)==null?void 0:r.source}}};var o,m,a;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    innerHTML: /* html */\`
    <fn-image slot="image" poster="https://picsum.photos/seed/picsum/960/530">
      <picture>
        <source type="image/webp" srcset="https://picsum.photos/seed/picsum/960/530" media="(min-width: 600px)">
        <source type="image/webp" srcset="https://picsum.photos/seed/picsum/660/230">
        <source type="image/jpeg" srcset="https://picsum.photos/seed/picsum/960/530" media="(min-width: 600px)">
        <img loading="lazy" alt="" src="https://picsum.photos/seed/picsum/960/530" width="960" height="530">
      </picture>
    </fn-image>
    <h1 slot="title">Hero Title</h1>
  \`
  }
}`,...(a=(m=s.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const d=["Primary","Picture"];export{s as Picture,e as Primary,d as __namedExportsOrder,g as default};

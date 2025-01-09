import{C as h}from"./utils-CG_vfxgm.js";const c={title:"components/fn-image",tags:["autodocs"],parameters:{layout:"centered"},render:({innerHTML:d,...o})=>{const i=h("fn-image",o);return i.innerHTML=d,i},argTypes:{}},e={args:{poster:"https://picsum.photos/200/300",innerHTML:`
      <img loading="lazy" src="https://picsum.photos/200/300" width="200" height="300" alt="Test">
    `}},t={args:{poster:"https://main--fnhipster--fnhipster.hlx.page/media_1b4686fe3b45056f4b32885097dca821867370de5.png?width=100&format=webply&optimize=high",innerHTML:`
    <picture>
        <source type="image/webp" srcset="https://main--fnhipster--fnhipster.hlx.page/media_1b4686fe3b45056f4b32885097dca821867370de5.png?width=2000&#x26;format=webply&#x26;optimize=medium" media="(min-width: 600px)">
        <source type="image/webp" srcset="https://main--fnhipster--fnhipster.hlx.page/media_1b4686fe3b45056f4b32885097dca821867370de5.png?width=750&#x26;format=webply&#x26;optimize=medium">
        <source type="image/png" srcset="https://main--fnhipster--fnhipster.hlx.page/media_1b4686fe3b45056f4b32885097dca821867370de5.png?width=2000&#x26;format=png&#x26;optimize=medium" media="(min-width: 600px)">
        <img loading="lazy" alt="Image auto generated with Apple Intelligence" src="./media_1b4686fe3b45056f4b32885097dca821867370de5.png?width=750&#x26;format=png&#x26;optimize=medium" width="1024" height="1024">
    </picture>`.trim()}};var p,a,r;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    poster: 'https://picsum.photos/200/300',
    innerHTML: \`
      <img loading="lazy" src="https://picsum.photos/200/300" width="200" height="300" alt="Test">
    \`
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var s,m,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    poster: 'https://main--fnhipster--fnhipster.hlx.page/media_1b4686fe3b45056f4b32885097dca821867370de5.png?width=100&format=webply&optimize=high',
    innerHTML: \`
    <picture>
        <source type="image/webp" srcset="https://main--fnhipster--fnhipster.hlx.page/media_1b4686fe3b45056f4b32885097dca821867370de5.png?width=2000&#x26;format=webply&#x26;optimize=medium" media="(min-width: 600px)">
        <source type="image/webp" srcset="https://main--fnhipster--fnhipster.hlx.page/media_1b4686fe3b45056f4b32885097dca821867370de5.png?width=750&#x26;format=webply&#x26;optimize=medium">
        <source type="image/png" srcset="https://main--fnhipster--fnhipster.hlx.page/media_1b4686fe3b45056f4b32885097dca821867370de5.png?width=2000&#x26;format=png&#x26;optimize=medium" media="(min-width: 600px)">
        <img loading="lazy" alt="Image auto generated with Apple Intelligence" src="./media_1b4686fe3b45056f4b32885097dca821867370de5.png?width=750&#x26;format=png&#x26;optimize=medium" width="1024" height="1024">
    </picture>\`.trim()
  }
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const f=["Primary","EDS"];export{t as EDS,e as Primary,f as __namedExportsOrder,c as default};

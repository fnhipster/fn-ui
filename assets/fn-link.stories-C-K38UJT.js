import{C as f}from"./utils-CG_vfxgm.js";const m={title:"components/fn-link",tags:["autodocs"],parameters:{layout:"centered"},render:({innerHTML:i,...c})=>{const n=f("fn-link",c);return n.innerHTML=i,n},argTypes:{}},e={args:{href:"/foo",target:"_blank",innerHTML:"Hello World",disabled:!1,button:!1}},r={args:{href:"/foo",target:"_blank",innerHTML:"Hello World",disabled:!1,button:!0}};var a,o,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    href: '/foo',
    target: '_blank',
    innerHTML: 'Hello World',
    disabled: false,
    button: false
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var s,l,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    href: '/foo',
    target: '_blank',
    innerHTML: 'Hello World',
    disabled: false,
    button: true
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const p=["Primary","Button"];export{r as Button,e as Primary,p as __namedExportsOrder,m as default};

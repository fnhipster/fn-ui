import{C as p}from"./utils-CG_vfxgm.js";const H={title:"components/fn-link",tags:["autodocs"],parameters:{layout:"centered"},render:({innerHTML:m,...b})=>{const n=p("fn-link",b);return n.innerHTML=m,n},argTypes:{}},e={args:{href:"/foo",target:"_blank",innerHTML:"<a>Hello World</a>",disabled:!1,button:!1,focus:!1}},a={args:{href:"/foo",target:"_blank",innerHTML:"<a>Hello World</a>",disabled:!1,button:!0,focus:!1}},r={args:{href:"/foo",target:"_blank",innerHTML:"<a><em>H</em>ello World</a>",disabled:!1,button:!1,focus:!1}};var o,s,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    href: '/foo',
    target: '_blank',
    innerHTML: '<a>Hello World</a>',
    disabled: false,
    button: false,
    focus: false
  }
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var l,f,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    href: '/foo',
    target: '_blank',
    innerHTML: '<a>Hello World</a>',
    disabled: false,
    button: true,
    focus: false
  }
}`,...(c=(f=a.parameters)==null?void 0:f.docs)==null?void 0:c.source}}};var d,u,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    href: '/foo',
    target: '_blank',
    innerHTML: '<a><em>H</em>ello World</a>',
    disabled: false,
    button: false,
    focus: false
  }
}`,...(i=(u=r.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const k=["Primary","Button","Shortcut"];export{a as Button,e as Primary,r as Shortcut,k as __namedExportsOrder,H as default};

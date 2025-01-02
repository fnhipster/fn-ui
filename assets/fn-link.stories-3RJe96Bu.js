import{C as _}from"./utils-CG_vfxgm.js";const L={title:"components/fn-link",tags:["autodocs"],parameters:{layout:"centered"},render:({innerHTML:H,...k})=>{const o=_("fn-link",k);return o.innerHTML=H,o},argTypes:{}},e={args:{href:"/foo",target:"_blank",innerHTML:"<a>Hello World</a>",disabled:!1,button:!1,fill:!1,focus:!1}},a={args:{href:"/foo",target:"_blank",innerHTML:"<a>Hello World</a>",disabled:!1,button:!0,fill:!0,focus:!1}},r={args:{innerHTML:'<a href: "/foo" target="_blank"><em>H</em>ello World</a>',disabled:!1,button:!1,focus:!1}},s={args:{innerHTML:'<a href: "/foo" target="_blank"><em>H</em>ello World</a>',disabled:!1,button:!1,focus:!0}};var n,t,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    href: '/foo',
    target: '_blank',
    innerHTML: '<a>Hello World</a>',
    disabled: false,
    button: false,
    fill: false,
    focus: false
  }
}`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var f,c,u;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    href: '/foo',
    target: '_blank',
    innerHTML: '<a>Hello World</a>',
    disabled: false,
    button: true,
    fill: true,
    focus: false
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,i,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    innerHTML: '<a href: "/foo" target="_blank"><em>H</em>ello World</a>',
    disabled: false,
    button: false,
    focus: false
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var b,g,p;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    innerHTML: '<a href: "/foo" target="_blank"><em>H</em>ello World</a>',
    disabled: false,
    button: false,
    focus: true
  }
}`,...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const T=["Primary","Button","Shortcut","Focused"];export{a as Button,s as Focused,e as Primary,r as Shortcut,T as __namedExportsOrder,L as default};

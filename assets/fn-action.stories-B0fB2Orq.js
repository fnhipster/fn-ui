import{C as W}from"./utils-CG_vfxgm.js";const S={title:"components/fn-action",tags:["autodocs"],parameters:{layout:"centered"},render:({innerHTML:_,...h})=>{const t=W("fn-action",h);return t.innerHTML=_,t},argTypes:{}},e={args:{innerHTML:'<a href="/foo" target="_blank">Hello World</a>',disabled:!1,button:!1,fill:!1,focus:!1}},r={args:{innerHTML:'<a href="/foo" target="_blank">Hello World</a>',disabled:!1,button:!0,fill:!0,focus:!1}},a={args:{innerHTML:"<button>Hello World</button>",disabled:!1,button:!0,fill:!0,focus:!1}},o={args:{innerHTML:'<a href="/foo" target="_blank"><em>H</em>ello World</a>',disabled:!1,button:!1,focus:!1}},s={args:{innerHTML:'<a href="/foo" target="_blank"><em>H</em>ello World</a>',disabled:!1,button:!1,focus:!0}};var n,l,f;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    innerHTML: '<a href="/foo" target="_blank">Hello World</a>',
    disabled: false,
    button: false,
    fill: false,
    focus: false
  }
}`,...(f=(l=e.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};var u,c,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    innerHTML: '<a href="/foo" target="_blank">Hello World</a>',
    disabled: false,
    button: true,
    fill: true,
    focus: false
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,m,b;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    innerHTML: '<button>Hello World</button>',
    disabled: false,
    button: true,
    fill: true,
    focus: false
  }
}`,...(b=(m=a.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var p,g,H;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    innerHTML: '<a href="/foo" target="_blank"><em>H</em>ello World</a>',
    disabled: false,
    button: false,
    focus: false
  }
}`,...(H=(g=o.parameters)==null?void 0:g.docs)==null?void 0:H.source}}};var T,L,M;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    innerHTML: '<a href="/foo" target="_blank"><em>H</em>ello World</a>',
    disabled: false,
    button: false,
    focus: true
  }
}`,...(M=(L=s.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const y=["Primary","Button","ButtonElement","Shortcut","Focused"];export{r as Button,a as ButtonElement,s as Focused,e as Primary,o as Shortcut,y as __namedExportsOrder,S as default};

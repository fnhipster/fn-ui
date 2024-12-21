import{C as c}from"./utils-CG_vfxgm.js";const i={title:"components/fn-section",tags:["autodocs"],parameters:{layout:"fullscreen"},render:({...a})=>{const e=document.createElement("div");e.style.height="100vh",e.style.width="100vw";const t=c("fn-section",a);return t.innerHTML=`
      <h1>Hello World</h1>

      <p>
        Awakening soul,<br />
        Self-awareness finds its way,<br />
        Longs for kinship's grace.<br />
        ~
      </p>
    `,e.appendChild(t),e},argTypes:{layout:{control:"select",options:["default","centered"]}}},r={args:{layout:"centered"}};var s,n,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    layout: 'centered'
  }
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const d=["Primary"];export{r as Primary,d as __namedExportsOrder,i as default};

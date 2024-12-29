import{C as i}from"./utils-CG_vfxgm.js";const o={title:"components/fn-menu",tags:["autodocs"],parameters:{layout:"fullscreen"},render:({...a})=>{const r=i("fn-menu",a);return r.innerHTML=`
      <ul slot="links">
        <li>
          <a>
            <fn-link href="/#one">First article title</fn-link>
          </a>
        </li>

        <li>
          <a>
            <fn-link href="/#two">Here is a scond article title</fn-link>
          </a>
        </li>

        <li>
          <a>
            <fn-link href="/#three">Let's finish with a third article</fn-link>
          </a>
        </li>
      </ul>
    `,r},argTypes:{}},e={args:{selected:0}};var n,t,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    selected: 0
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const c=["Primary"];export{e as Primary,c as __namedExportsOrder,o as default};

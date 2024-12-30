import{C as i}from"./utils-CG_vfxgm.js";const f={title:"components/fn-header",tags:["autodocs"],parameters:{layout:"fullscreen"},render:({innerHTML:t,...s})=>{const e=i("fn-header",s);return e.innerHTML=t,e},argTypes:{}},n={args:{innerHTML:`
      <nav slot="nav">
        <fn-link href="/prev" decoration="none">
          <a>
            <em>P</em>rev
          </a>
        </fn-link>

        <fn-link href="/next" decoration="none">
          <a>
            <em>N</em>ext
          </a>
        </fn-link>
      </nav>
    `}};var r,a,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    innerHTML: \`
      <nav slot="nav">
        <fn-link href="/prev" decoration="none">
          <a>
            <em>P</em>rev
          </a>
        </fn-link>

        <fn-link href="/next" decoration="none">
          <a>
            <em>N</em>ext
          </a>
        </fn-link>
      </nav>
    \`
  }
}`,...(o=(a=n.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const l=["Primary"];export{n as Primary,l as __namedExportsOrder,f as default};

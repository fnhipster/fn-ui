import{C as m}from"./utils-CG_vfxgm.js";const i={title:"components/fn-header",tags:["autodocs"],parameters:{layout:"fullscreen"},render:({innerHTML:t,...o})=>{const e=m("fn-header",o);return e.innerHTML=t,e},argTypes:{}},n={args:{innerHTML:`
      <nav slot="nav">
        <fn-link>
          <a href="/prev">
            <em>P</em>rev
          </a>
        </fn-link>

        <fn-link>
          <a href="/next">
            <em>N</em>ext
          </a>
        </fn-link>
      </nav>
    `}};var r,a,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    innerHTML: \`
      <nav slot="nav">
        <fn-link>
          <a href="/prev">
            <em>P</em>rev
          </a>
        </fn-link>

        <fn-link>
          <a href="/next">
            <em>N</em>ext
          </a>
        </fn-link>
      </nav>
    \`
  }
}`,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const l=["Primary"];export{n as Primary,l as __namedExportsOrder,i as default};

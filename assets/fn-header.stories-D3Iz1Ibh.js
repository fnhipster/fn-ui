import{C as m}from"./utils-CG_vfxgm.js";const f={title:"components/fn-header",tags:["autodocs"],parameters:{layout:"fullscreen"},render:({innerHTML:o,...s})=>{const e=m("fn-header",s);return e.innerHTML=o,e},argTypes:{}},n={args:{innerHTML:`
      <nav slot="nav">
        <fn-action>
          <a href="/prev">
            <em>P</em>rev
          </a>
        </fn-action>

        <fn-action>
          <a href="/next">
            <em>N</em>ext
          </a>
        </fn-action>
      </nav>
    `}};var a,r,t;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    innerHTML: \`
      <nav slot="nav">
        <fn-action>
          <a href="/prev">
            <em>P</em>rev
          </a>
        </fn-action>

        <fn-action>
          <a href="/next">
            <em>N</em>ext
          </a>
        </fn-action>
      </nav>
    \`
  }
}`,...(t=(r=n.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const i=["Primary"];export{n as Primary,i as __namedExportsOrder,f as default};

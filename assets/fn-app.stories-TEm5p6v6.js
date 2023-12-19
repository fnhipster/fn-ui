import{C as m}from"./utils-tdRvqGzf.js";import"./fn-header-EhLKetUb.js";import"./fn-content-8dPzMN-V.js";import"./fn-footer-R2rd6NPE.js";import"./fn-logo-RDFmdBMZ.js";import"./fn-link-fbIxC-i2.js";import"./fn-binary-sFT9UnJZ.js";const o="fn-app";class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
      <style>
          :host {
            animation: glitch 0.5s linear;  
            box-sizing: border-box;
            display: grid; 
            font-size: 10px;
            grid-auto-rows: auto 1fr auto;  
            margin: 0 auto; 
            max-width: 100rem; 
            min-height: 100vh; 
            padding: 0 var(--margin); 
            transform-origin: top center; 
            width: 100%;
            color: var(--color-fg);
          }

          @keyframes glitch {          
            /* Glitch */
            0%,
            40%,
            44%,
            58%,
            61%,
            65%,
            69%,
            73%,
            100% {
              transform: skewX(0deg);
            }
            41% {
              transform: skewX(1deg);
            }
            42% {
              transform: skewX(-1deg);
            }
            59% {
              transform: skewX(3.5deg) skewY(1deg);
            }
            60% {
              transform: skewX(-3.5deg) skewY(-1deg);
            }
            63% {
              transform: skewX(1deg) skewY(-0.5deg);
            }
            70% {
              transform: skewX(-3deg) skewY(-2deg);
            }
            71% {
              transform: skewX(1deg) skewY(-1deg);
            }
          }
      </style>

      <slot name="header"></slot>
      <slot name="main"></slot>
      <slot name="footer"></slot>
    `}}customElements.get(o)||customElements.define(o,i);const w={title:"components/fn-app",tags:["autodocs"],parameters:{layout:"fullscreen"},render:({...r})=>{const t=m("fn-app",r);return t.innerHTML=`
      <fn-header slot="header" menu="#" next="#"></fn-header>
      <main slot="main">
        <fn-content>
          <h1>HELLO WORLD</h1>
          <p>
            Awakening soul,<br>
            Self-awareness finds its way,<br>
            Longs for kinship's grace. <br>
            ~
          </p>
      </fn-content>
      </main>
      <fn-footer slot="footer" message="Hello World!"></fn-footer>
    `,t},argTypes:{}},e={args:{}};var s,n,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const u=["Primary"];export{e as Primary,u as __namedExportsOrder,w as default};

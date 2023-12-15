var h=Object.defineProperty;var m=(s,e,t)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var n=(s,e,t)=>(m(s,typeof e!="symbol"?e+"":e,t),t);import{C as u}from"./utils-tdRvqGzf.js";const a="fn-image";class g extends HTMLElement{constructor(){super();n(this,"slot",null);this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
      <style>
        :host {
          background: currentColor;
          display: inline-block;
          line-height: 0;
        }

        .wrapper {
          position: relative;
          display: inline-block;
          opacity: 0;
          transition: opacity 100ms ease-in-out;
        }

        .glow {
          filter: blur(15px);
          opacity: 0.75;
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
          z-index: -1;
        }

        .glow img {
          width: 100%;
          height: 100%;
        }
      </style>
      
      <div class="wrapper">
          <slot></slot>    
      </div>
    `}connectedCallback(){this.shadowRoot.querySelector("slot").addEventListener("slotchange",this.initialize.bind(this))}disconnectedCallback(){this.shadowRoot.querySelector("slot").removeEventListener("slotchange",this.initialize.bind(this))}initialize(){const t=this.shadowRoot.querySelector(".wrapper"),p=this.querySelector(":scope > img, :scope > picture"),r=this.querySelector("img");if(!r)return;const i=p.cloneNode(!0);i.classList.add("glow"),i.setAttribute("aria-hidden","true"),t.append(i),r.addEventListener("load",()=>{t.style.opacity=1})}}customElements.get(a)||customElements.define(a,g);const b={title:"components/fn-image",tags:["autodocs"],parameters:{layout:"centered"},render:({...s})=>{const e=u("fn-image",s),t=Object.assign(document.createElement("img"),{width:200,height:300,src:"https://picsum.photos/200/300"});return e.appendChild(t),e},argTypes:{}},o={args:{}};var c,l,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const f=["Primary"];export{o as Primary,f as __namedExportsOrder,b as default};

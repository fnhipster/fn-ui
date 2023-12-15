var h=Object.defineProperty;var g=(s,t,e)=>t in s?h(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var n=(s,t,e)=>(g(s,typeof t!="symbol"?t+"":t,e),e);import{C as u}from"./utils-tdRvqGzf.js";const c="fn-image";class y extends HTMLElement{constructor(){super();n(this,"slot",null);this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
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
    `}connectedCallback(){var e;this.slot=this.shadowRoot.querySelector("slot"),(e=this.slot)==null||e.addEventListener("slotchange",()=>{const i=this.shadowRoot.querySelector(".wrapper"),m=this.querySelector(":scope > img, :scope > picture"),a=this.querySelector("img");if(!a)return;const r=m.cloneNode(!0);r.classList.add("glow"),r.setAttribute("aria-hidden","true"),i.append(r),a.addEventListener("load",()=>{i.style.opacity=1})})}disconnectedCallback(){var e;(e=this.slot)==null||e.removeEventListener("slotchange")}}customElements.get(c)||customElements.define(c,y);const b={title:"components/fn-image",tags:["autodocs"],parameters:{layout:"centered"},render:({...s})=>{const t=u("fn-image",s),e=Object.assign(document.createElement("img"),{width:200,height:300,src:"https://picsum.photos/200/300"});return t.appendChild(e),t},argTypes:{}},o={args:{}};var l,d,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const E=["Primary"];export{o as Primary,E as __namedExportsOrder,b as default};

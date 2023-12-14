import{C as p}from"./utils-tdRvqGzf.js";const a="fn-image";class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
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
          transition: opacity 0.3s ease-in-out;
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
    `}connectedCallback(){const e=this.shadowRoot.querySelector(".wrapper"),o=this.querySelector(":scope > img, :scope > picture"),i=this.querySelector("img");if(!i)return;const s=o.cloneNode(!0);s.classList.add("glow"),s.setAttribute("aria-hidden","true"),e.append(s),i.addEventListener("load",()=>{e.style.opacity=1})}}customElements.get(a)||customElements.define(a,d);const g={title:"components/fn-image",tags:["autodocs"],parameters:{layout:"centered"},render:({...r})=>{const e=p("fn-image",r),o=Object.assign(document.createElement("img"),{width:200,height:300,src:"https://picsum.photos/200/300"});return e.appendChild(o),e},argTypes:{}},t={args:{}};var n,c,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {}
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const u=["Primary"];export{t as Primary,u as __namedExportsOrder,g as default};

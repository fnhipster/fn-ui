var h=Object.defineProperty;var m=(i,t,e)=>t in i?h(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var a=(i,t,e)=>(m(i,typeof t!="symbol"?t+"":t,e),e);import{C as u}from"./utils-tdRvqGzf.js";const c="fn-image";class g extends HTMLElement{constructor(){super();a(this,"initialized",!1);a(this,"mutationObserver",new MutationObserver(e=>{e.forEach(s=>{s.type==="childList"&&s.target===this&&this.initialize()})}));this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
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
    `}connectedCallback(){this.initialize(),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}initialize(){if(this.initialized)return;console.log("Image initialized",this.getAttribute("src"));const e=this.shadowRoot.querySelector(".wrapper"),s=this.querySelector(":scope > img, :scope > picture"),n=this.querySelector("img");if(!n)return;const o=s.cloneNode(!0);o.classList.add("glow"),o.setAttribute("aria-hidden","true"),e.append(o),n.addEventListener("load",()=>{e.style.opacity=1,this.initialized=!0})}disconnectedCallback(){this.mutationObserver.disconnect()}}customElements.get(c)||customElements.define(c,g);const f={title:"components/fn-image",tags:["autodocs"],parameters:{layout:"centered"},render:({...i})=>{const t=u("fn-image",i),e=Object.assign(document.createElement("img"),{width:200,height:300,src:"https://picsum.photos/200/300"});return t.appendChild(e),t},argTypes:{}},r={args:{}};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const w=["Primary"];export{r as Primary,w as __namedExportsOrder,f as default};

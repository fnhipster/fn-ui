import{C as i}from"./utils-tdRvqGzf.js";const r="fn-columns";class d extends HTMLElement{static get observedAttributes(){return["columns"]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
      <style>
        :host {
          --gap: var(--spacing-sm);
          display: grid;
          grid-gap: var(--gap);
          --columns: 1;
        }

       
        @media (width >= 650px) {
          :host {
            --gap: var(--spacing-md);
            --columns: var(--size);
          }
        }
      </style>

      <slot name="row"></slot>
    `}connectedCallback(){this.style.setProperty("--size",this.children[0].children.length),[...this.children].forEach(e=>{e.style.setProperty("display","grid"),e.style.setProperty("grid-gap","var(--gap)"),e.style.setProperty("grid-template-columns","repeat(var(--columns), 1fr)")})}}customElements.get(r)||customElements.define(r,d);const c={title:"components/fn-columns",tags:["autodocs"],parameters:{layout:"centered"},render:({...t})=>{const e=i("fn-columns",t);return e.innerHTML=`
      <div slot="row">
        <div>1.1</div>
        <div>1.2</div>
      </div>

      <div slot="row">
        <div>2.1</div>
        <div>2.2</div>
      </div>

      <div slot="row">
        <div>3.1</div>
        <div>3.2</div>
      </div>
    `,e},argTypes:{}},s={args:{}};var o,a,n;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {}
}`,...(n=(a=s.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const m=["Primary"];export{s as Primary,m as __namedExportsOrder,c as default};

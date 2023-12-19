import{C as m}from"./utils-tdRvqGzf.js";const r="fn-hero";class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          position: relative;
          margin-left: calc(var(--margin) * -1);
          width: calc(100% + var(--margin) * 2);
        }

        .title::slotted(h1) {
          bottom: 0.1em;
          box-sizing: border-box;
          display: inline;
          font: var(--font-heading) !important;
          font-size: 7rem !important;
          left: 0;
          margin: 0 !important;
          max-width: 90%;
          padding: var(--margin);
          position: absolute;
          text-shadow: 0 0 .8em var(--color-bg);
          text-transform: uppercase !important;
        }

        
      </style>

          
      <slot class="image" name="image"></slot>
      <slot class="title" name="title"></slot>
    `}}customElements.get(r)||customElements.define(r,l);const p={title:"components/fn-hero",tags:["autodocs"],parameters:{layout:"centered"},render:({title:e,...n})=>{const o=m("fn-hero",n);return o.innerHTML=`
      <fn-image slot="image" >
        <img src="https://picsum.photos/seed/picsum/960/530" alt="placeholder image" width="960" height="530"/>
      </fn-image>
        
      <h1 slot="title">${e}</h1>
    `,o},argTypes:{}},t={args:{title:"Hero Title"}};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'Hero Title'
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const d=["Primary"];export{t as Primary,d as __namedExportsOrder,p as default};

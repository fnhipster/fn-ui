import{C as m}from"./utils-tdRvqGzf.js";const a="fn-hero";class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
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
          font-family: var(--typography-heading) !important;
          font-size: 7rem !important;
          left: 0;
          margin: 0 !important;
          max-width: 90%;
          padding: var(--margin);
          position: absolute;
          text-shadow: 0 0 .8em var(--color-bg);
          text-transform: uppercase !important;
          line-height: 1 !important;
        }

        
      </style>

          
      <slot class="image" name="image"></slot>
      <slot class="title" name="title"></slot>
    `}}customElements.get(a)||customElements.define(a,l);const p={title:"components/fn-hero",tags:["autodocs"],parameters:{layout:"centered"},render:({title:e,...n})=>{const o=m("fn-hero",n);return o.innerHTML=`
      <fn-image slot="image" >
        <img src="https://picsum.photos/seed/picsum/960/530" alt="placeholder image" width="960" height="530"/>
      </fn-image>
        
      <h1 slot="title">${e}</h1>
    `,o},argTypes:{}},t={args:{title:"Hero Title"}};var r,s,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    title: 'Hero Title'
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const d=["Primary"];export{t as Primary,d as __namedExportsOrder,p as default};

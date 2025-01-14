import{v as S}from"./v4-CQkTLCs1.js";import{C as L}from"./utils-CG_vfxgm.js";const{addons:x}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:D}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:m}=__STORYBOOK_MODULE_GLOBAL__;var A="storybook/actions",P=`${A}/action-event`,I={depth:10,clearOnStoryChange:!0,limit:50},_=(t,n)=>{let e=Object.getPrototypeOf(t);return!e||n(e)?e:_(e,n)},j=t=>!!(typeof t=="object"&&t&&_(t,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof t.persist=="function"),M=t=>{if(j(t)){let n=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));n.persist();let e=Object.getOwnPropertyDescriptor(n,"view"),r=e==null?void 0:e.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...e,value:Object.create(r.constructor.prototype)}),n}return t},V=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?S():Date.now().toString(36)+Math.random().toString(36).substring(2);function s(t,n={}){let e={...I,...n},r=function(...c){var p,l;if(n.implicit){let h=(p="__STORYBOOK_PREVIEW__"in m?m.__STORYBOOK_PREVIEW__:void 0)==null?void 0:p.storyRenders.find(i=>i.phase==="playing"||i.phase==="rendering");if(h){let i=!((l=window==null?void 0:window.FEATURES)!=null&&l.disallowImplicitActionsInRenderV8),g=new D({phase:h.phase,name:t,deprecated:i});if(i)console.warn(g);else throw g}}let O=x.getChannel(),E=V(),k=5,d=c.map(M),T=c.length>1?d:d[0],R={id:E,count:0,data:{name:t,args:T},options:{...e,maxDepth:k+(e.depth||3),allowFunction:e.allowFunction||!1}};O.emit(P,R)};return r.isAction=!0,r.implicit=n.implicit,r}const W={title:"components/fn-section",tags:["autodocs"],parameters:{layout:"fullscreen"},render:({innerHTML:t,...n})=>{const e=document.createElement("div");e.style.height="100vh",e.style.width="100vw";const r=L("fn-section",n);return r.innerHTML=t,r.addEventListener("viewed",s("viewed")),r.addEventListener("active",s("active")),r.addEventListener("inactive",s("inactive")),e.appendChild(r),e},argTypes:{layout:{control:"select",options:["default","centered"]},"track-viewed":{control:"boolean"}}},a={args:{layout:"centered",innerHTML:`
      <h1>Hello World</h1>

      <p>
        Awakening soul,<br />
        Self-awareness finds its way,<br />
        Longs for kinship's grace.<br />
        ~
      </p>
    `}},o={args:{innerHTML:`
      <div>
        <p style="margin-bottom: 30vh; background: red;">
          This is a paragraph of text that will be tracked when it is viewed
        </p>
        <p style="margin-bottom: 30vh; background: red;">
          This is a paragraph of text that will be tracked when it is viewed
        </p>
        <p style="margin-bottom: 30vh; background: red;">
          This is a paragraph of text that will be tracked when it is viewed
        </p>
        <p style="margin-bottom: 30vh; background: red;">
          This is a paragraph of text that will be tracked when it is viewed
        </p>
        <p style="margin-bottom: 30vh; background: red;">
          This is a paragraph of text that will be tracked when it is viewed
        </p>
      </div>
    `}};var w,u,b;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    layout: 'centered',
    innerHTML: /* html */\`
      <h1>Hello World</h1>

      <p>
        Awakening soul,<br />
        Self-awareness finds its way,<br />
        Longs for kinship's grace.<br />
        ~
      </p>
    \`
  }
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var v,f,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    innerHTML: \`
      <div>
        <p style="margin-bottom: 30vh; background: red;">
          This is a paragraph of text that will be tracked when it is viewed
        </p>
        <p style="margin-bottom: 30vh; background: red;">
          This is a paragraph of text that will be tracked when it is viewed
        </p>
        <p style="margin-bottom: 30vh; background: red;">
          This is a paragraph of text that will be tracked when it is viewed
        </p>
        <p style="margin-bottom: 30vh; background: red;">
          This is a paragraph of text that will be tracked when it is viewed
        </p>
        <p style="margin-bottom: 30vh; background: red;">
          This is a paragraph of text that will be tracked when it is viewed
        </p>
      </div>
    \`
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const C=["Primary","Long"];export{o as Long,a as Primary,C as __namedExportsOrder,W as default};

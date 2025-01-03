import{v as R}from"./v4-CQkTLCs1.js";import{C as x}from"./utils-CG_vfxgm.js";const{addons:S}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:D}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:g}=__STORYBOOK_MODULE_GLOBAL__;var L="storybook/actions",P=`${L}/action-event`,I={depth:10,clearOnStoryChange:!0,limit:50},f=(t,r)=>{let e=Object.getPrototypeOf(t);return!e||r(e)?e:f(e,r)},A=t=>!!(typeof t=="object"&&t&&f(t,r=>/^Synthetic(?:Base)?Event$/.test(r.constructor.name))&&typeof t.persist=="function"),j=t=>{if(A(t)){let r=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));r.persist();let e=Object.getOwnPropertyDescriptor(r,"view"),i=e==null?void 0:e.value;return typeof i=="object"&&(i==null?void 0:i.constructor.name)==="Window"&&Object.defineProperty(r,"view",{...e,value:Object.create(i.constructor.prototype)}),r}return t},M=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?R():Date.now().toString(36)+Math.random().toString(36).substring(2);function V(t,r={}){let e={...I,...r},i=function(...s){var p,c;if(r.implicit){let h=(p="__STORYBOOK_PREVIEW__"in g?g.__STORYBOOK_PREVIEW__:void 0)==null?void 0:p.storyRenders.find(a=>a.phase==="playing"||a.phase==="rendering");if(h){let a=!((c=window==null?void 0:window.FEATURES)!=null&&c.disallowImplicitActionsInRenderV8),l=new D({phase:h.phase,name:t,deprecated:a});if(a)console.warn(l);else throw l}}let y=S.getChannel(),O=M(),T=5,d=s.map(j),E=s.length>1?d:d[0],k={id:O,count:0,data:{name:t,args:E},options:{...e,maxDepth:T+(e.depth||3),allowFunction:e.allowFunction||!1}};y.emit(P,k)};return i.isAction=!0,i.implicit=r.implicit,i}const H={title:"components/fn-viewed",tags:["autodocs"],parameters:{layout:"centered"},render:({innerHTML:t,...r})=>{const e=x("fn-viewed",r);return e.innerHTML=t,e.addEventListener("viewed",V("viewed")),e},argTypes:{}},n={args:{innerHTML:"<div>This is a paragraph of text that will be tracked when it is viewed</div>"}},o={args:{innerHTML:`
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
    `}};var m,w,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    innerHTML: '<div>This is a paragraph of text that will be tracked when it is viewed</div>'
  }
}`,...(v=(w=n.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var b,u,_;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(_=(u=o.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};const K=["Primary","Long"];export{o as Long,n as Primary,K as __namedExportsOrder,H as default};

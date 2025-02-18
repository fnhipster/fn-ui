import{C as d}from"./utils-CG_vfxgm.js";const p={title:"components/fn-mermaid",tags:["autodocs"],parameters:{layout:"fullscreen"},render:({innerHTML:n,...i})=>{const a=d("fn-mermaid",i);return a.innerHTML=n,a},argTypes:{}},r={args:{innerHTML:`
    <pre slot="code">
      sequenceDiagram
        participant Board as Cutting Board
        participant Fridge
        participant Grill
        participant Smoker
        Board ->> Board: score fat cap <br>(optional)
        Board ->> Board: dry brine with salt
        Board ->> Fridge: refrigerate uncovered <br>(24h)
        Fridge -->> Board: temper at room temp <br>(30 min)
        Board ->> Smoker: indirect cook <br>(~45–90 min at 225–250°F, ‘til 115–125°F internal)
        Smoker -->> Board: rest <br>(10–15 min)
        Board ->> Board: cut into steaks <br>(follow the grain)
        Board ->> Board: season with salt &#x26; pepper
        Board ->> Grill: sear steaks <br>(~2–3 min per side)
        Grill -->> Board: rest <br>(5–10 min)
        Board ->> Board: slice against the grain
        Board ->> Board: serve &#x26; enjoy
      </pre>
    `.trim()}};var e,o,t;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    innerHTML: \`
    <pre slot="code">
      sequenceDiagram
        participant Board as Cutting Board
        participant Fridge
        participant Grill
        participant Smoker
        Board ->> Board: score fat cap <br>(optional)
        Board ->> Board: dry brine with salt
        Board ->> Fridge: refrigerate uncovered <br>(24h)
        Fridge -->> Board: temper at room temp <br>(30 min)
        Board ->> Smoker: indirect cook <br>(~45–90 min at 225–250°F, ‘til 115–125°F internal)
        Smoker -->> Board: rest <br>(10–15 min)
        Board ->> Board: cut into steaks <br>(follow the grain)
        Board ->> Board: season with salt &#x26; pepper
        Board ->> Grill: sear steaks <br>(~2–3 min per side)
        Grill -->> Board: rest <br>(5–10 min)
        Board ->> Board: slice against the grain
        Board ->> Board: serve &#x26; enjoy
      </pre>
    \`.trim()
  }
}`,...(t=(o=r.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const m=["Primary"];export{r as Primary,m as __namedExportsOrder,p as default};

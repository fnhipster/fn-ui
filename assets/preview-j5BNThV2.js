var M=Object.defineProperty;var S=(i,s,e)=>s in i?M(i,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[s]=e;var n=(i,s,e)=>S(i,typeof s!="symbol"?s+"":s,e);import{N as H}from"./index-B0EJvtKl.js";import"./_commonjsHelpers-Cpj98o6Y.js";const T="fn-binary";class $ extends HTMLElement{constructor(){super();n(this,"playing");n(this,"current",0);n(this,"binary",[]);n(this,"intersectionObserver",new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?this.play():this.stop()})}));this.attachShadow({mode:"open"})}static get observedAttributes(){return["message"]}connectedCallback(){this.intersectionObserver.observe(this),this.addEventListener("mouseenter",this.stop),this.addEventListener("mouseleave",this.play)}disconnectedCallback(){this.stop(),this.intersectionObserver.unobserve(this),this.removeEventListener("mouseenter",this.stop),this.removeEventListener("mouseleave",this.play)}attributeChangedCallback(e,t,o){if(t!==o&&e==="message"){const a=this.getAttribute("message");this.binary=a.split("").map(r=>r.charCodeAt(0).toString(2).padStart(8,"0"))}}play(){if(this.playing)return;const e=this.binary.length-1;this.render(this.binary[this.current]),this.playing=setInterval(()=>{this.current===e?this.current=0:this.current+=1,this.render(this.binary[this.current])},2e3)}stop(){clearInterval(this.playing),this.playing=void 0}render(e){e&&(this.shadowRoot.innerHTML=e)}}customElements.define(T,$);const R="fn-footer",u=document.createElement("template");u.innerHTML=`
  <style>
    :host {
      align-items: center;
      display: flex;
    }

    footer {
      align-items: center;
      display: flex;
      font: var(--font-accent);
      font-size: 1.4rem;
      gap: var(--spacing-sm);
      justify-content: space-between;
      padding: var(--margin);
      text-transform: uppercase;
      width: 100%;
    }
  </style>
    
  <footer class="fnh-footer">
    <fn-binary></fn-binary>
    <span>© ${new Date().getUTCFullYear()}, fnhipster</span>
  </footer>
`;class A extends HTMLElement{static get observedAttributes(){return["message"]}constructor(){super(),this.attachShadow({mode:"open"}).appendChild(u.content.cloneNode(!0))}attributeChangedCallback(s,e,t){if(e!==t)switch(s){case"message":this.renderMessage(t);break}}renderMessage(s){this.shadowRoot.querySelector("fn-binary").setAttribute("message",s)}}customElements.define(R,A);const N="fn-logo",g=document.createElement("template");g.innerHTML=`
  <style>
    :host {
      display: flex;
      align-items: center;
    }
    
    svg {
      height: 1em;
    }
  </style>

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.23 7.81">
    <defs>
      <style>
        .logo-triangle,
        .logo-cursor {
          fill: currentColor;
        }

        .logo-triangle {
          animation: glitch 4s ease-in-out infinite alternate;
          transform: skewX(0deg);
          transform-origin: center;
        }

        .logo-cursor {
          animation: blink 1s ease-in-out infinite alternate;
        }

        @keyframes glitch {
          0%,
          40%,
          44%,
          58%,
          61%,
          65%,
          69%,
          73%,
          100% {
            transform: skewX(0deg);
          }

          41% {
            transform: skewX(10deg);
          }

          42% {
            transform: skewX(-10deg);
          }

          59% {
            transform: skewX(35deg) skewY(10deg);
          }

          60% {
            transform: skewX(-35deg) skewY(-10deg);
          }

          63% {
            transform: skewX(10deg) skewY(-5deg);
          }

          70% {
            transform: skewX(-30deg) skewY(-20deg);
          }

          71% {
            transform: skewX(10deg) skewY(-10deg);
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: 0;
          }
        }
      </style>
    </defs>
    <path
      class="logo-triangle"
      d="m3.47,0l3.47,6.01H0L3.47,0Zm1.93,5.18l-1.93-3.5-1.97,3.5h3.9Z"
    />
    <path class="logo-cursor" d="m12.23,7.21v.6l-5.3-.02v-.6l5.3.02Z" />
  </svg>
`;class D extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(g.content.cloneNode(!0))}}customElements.define(N,D);const _="fn-action",f=document.createElement("template");f.innerHTML=`
  <style>
    ::slotted(a),
    ::slotted(button) {
      color: var(--color-fg, currentColor);
      background: none;
      border: none;
      text-decoration: var(--decoration, underline);
      outline-offset: 0.2rem;
      transition: transform 50ms ease-in;
      padding: 0;
    }


    ::slotted(a:not([aria-disabled])),
    ::slotted(button:not(:disabled)) {
      cursor: var(--cursor-pointer, pointer);
    }

    ::slotted(a:not([aria-disabled]):hover),
    ::slotted(button:not(:disabled):hover) {
      outline: 0.2rem solid var(--color-fg);
    }

    ::slotted(.button) {
      display: inline-flex;
      font: var(--font-accent);
      justify-content: center;
      letter-spacing: 0.05em;
      text-decoration: none;
      text-transform: uppercase;
    }
  
    ::slotted(.button.fill) {
      background: var(--color-fg);
      color: var(--color-bg);
      padding: var(--spacing-xs) var(--spacing-sm);
      position: relative;
    }

    ::slotted(.button.fill)::after {
      content: '';
      background-color: var(--color-fg);
      opacity: 0.35;
      transform: translateY(3px) translateX(3px);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    ::slotted(.button.fill:hover), 
    ::slotted(.button.fill:focus) {
      outline: 0.2rem solid var(--color-fg);
    }

    ::slotted(a:not([aria-disabled]):not(.fill):focus),
    ::slotted(button:not(:disabled):not(.fill):focus),
    ::slotted(a:not([aria-disabled]):not(.fill):active),
    ::slotted(button:not(:disabled):not(.fill):active),
    ::slotted(a:not([aria-disabled]).pressed),
    ::slotted(button:not(:disabled).pressed) {
      color: var(--color-bg);
      background: var(--color-fg);
      outline: none;
    }

    ::slotted(a:not([aria-disabled]):focus),
    ::slotted(button:not(:disabled):focus) {
      cursor: var(--cursor-pointer, pointer) !important;
    }

    ::slotted(a:not([aria-disabled]):active), 
    ::slotted(button:not(:disabled):active), 
    ::slotted(a:not([aria-disabled]).pressed), 
    ::slotted(button:not(:disabled).pressed) {
      transform: translateY(1px) scale(0.97);
      cursor: var(--cursor-pointer-click, pointer) !important;
      outline: none !important;
    }

    ::slotted(a[aria-disabled]),
    ::slotted(button:disabled) {
      opacity: 0.5;
      pointer-events: none;
    }
  </style>

  <slot></slot>
`;class m extends HTMLElement{constructor(){super();n(this,"elem",null);n(this,"pressing",!1);n(this,"prefetched",!1);n(this,"shortcut",null);n(this,"href");this.attachShadow({mode:"open"}).appendChild(f.content.cloneNode(!0))}static get observedAttributes(){return["prefetch","disabled","decoration","button","fill","focus"]}connectedCallback(){var e;this.elem=this.querySelector("a, button"),this.shortcut=(e=this.elem.querySelector("em"))==null?void 0:e.textContent,this.href=this.elem.getAttribute("href"),this._handleMouseDown=this.handleMouseDown.bind(this),this._handleKeyDown=this.handleKeyDown.bind(this),this._handleKeyUp=this.handleKeyUp.bind(this),this._handleShortcutKeyDown=this.handleShortcutKeyDown.bind(this),this._handleShortcutKeyUp=this.handleShowtcutKeyUp.bind(this),this.elem.addEventListener("mousedown",this._handleMouseDown),this.elem.addEventListener("keydown",this._handleKeyDown),this.elem.addEventListener("keyup",this._handleKeyUp),this.shortcut&&(document.addEventListener("keydown",this._handleShortcutKeyDown),document.addEventListener("keyup",this._handleShortcutKeyUp)),m.observedAttributes.forEach(t=>{this.hasAttribute(t)&&this.attributeChangedCallback(t,null,this.getAttribute(t))})}disconnectedCallback(){this.elem.removeEventListener("mousedown",this._handleMouseDown),this.elem.removeEventListener("keydown",this._handleKeyDown),this.elem.removeEventListener("keyup",this._handleKeyUp),this.shortcut&&(document.removeEventListener("keydown",this._handleShortcutKeyDown),document.removeEventListener("keyup",this._handleShortcutKeyUp))}attributeChangedCallback(e,t,o){if(this.elem)switch(e){case"disabled":this.handleDisable(o==="true");break;case"decoration":this.style.setProperty("--decoration",o);break;case"button":o==="true"?this.elem.classList.add("button"):this.elem.classList.remove("button");break;case"focus":o==="true"&&this.elem.focus();break;case"fill":o==="true"?this.elem.classList.add("fill"):this.elem.classList.remove("fill");break}}handleShortcutKeyDown(e){this.pressing||e.key.toLowerCase()===this.shortcut.toLowerCase()&&(this.pressing=!0,this.elem.classList.add("pressed"),this.href&&this.handlePrefetch(this.href))}handleShowtcutKeyUp(e){this.pressing&&e.key.toLowerCase()===this.shortcut.toLowerCase()&&(this.elem.classList.remove("pressed"),this.elem.click(),this.pressing=!1)}handleMouseDown(){this.href&&this.handlePrefetch(this.href)}handleKeyDown(e){if(!this.pressing){switch(e.key){case"Enter":e.preventDefault(),this.elem.classList.add("pressed"),this.href&&this.handlePrefetch(this.href);break}this.pressing=!0}}handleKeyUp(e){e.key==="Enter"&&(e.preventDefault(),this.elem.classList.remove("pressed"),this.elem.click()),this.pressing=!1}handlePrefetch(e){if(this.dataset.prefetched||!e||e.startsWith("#")||/^(http|https):\/\/[^ "]+$/.test(e)&&new URL(e).origin!==window.origin)return;const t=Object.assign(document.createElement("link"),{rel:"prefetch",href:e});document.head.append(t),this.dataset.prefetched=!0}handleDisable(e=!0){e===!0?this.elem.tagName==="A"?(this.elem.setAttribute("aria-disabled",!0),this.elem.removeAttribute("href")):this.elem.setAttribute("disabled",!0):this.elem.tagName==="A"?(this.elem.removeAttribute("aria-disabled"),this.elem.setAttribute("href",this.href)):this.elem.removeAttribute("disabled")}}customElements.define(_,m);const I="fn-header",b=document.createElement("template");b.innerHTML=`
  <style>
    :host {
      align-items: center;
      display: flex;
    }

    header {
      align-items: center;
      display: flex;
      justify-content: space-between;
      width: 100%;
      box-sizing: border-box;
      padding: var(--margin);
    }

    fn-logo {
      font-size: 3rem;
    }

    ::slotted(nav) {
      display: flex;
      gap: var(--spacing-md);
      font: var(--font-accent);
      text-transform: uppercase;
      font-size: 1.4rem;
    }
  </style>

  <header>
    <fn-action aria-label="go to start of the line" button="true">
      <a href="/">
        <fn-logo aria-label="fnhipster.com"></fn-logo>
      </a>
    </fn-action>

    <slot name="nav"></slot>
  </header>
`;class K extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(b.content.cloneNode(!0))}}customElements.define(I,K);const P="fn-image",w=document.createElement("template");w.innerHTML=`
  <style>
    :host {
      --corner: 1rem;
      --transition-after-loaded: opacity .35s ease-in .5s;
      display: inline-block;
      line-height: 0;
    }

    .wrapper {
      position: relative;
      display: inline-block;
      width: 100%;
    }

    .glow {
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0;
      transition: var(--transition-after-loaded);
    }

    .glow.loaded {
      opacity: 1;
    }

    .poster {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: var(--transition-after-loaded);  
    }

    .loaded .poster {
      opacity: 0;
    }

    .poster, .glow {
      user-select: none;
    }

    .inline-wrapper {
      background: var(--color-fg);
      clip-path: polygon(0 var(--corner),var(--corner) 0,calc(100% - var(--corner)) 0,100% var(--corner),100% calc(100% - var(--corner)),calc(100% - var(--corner)) 100%,var(--corner) 100%,0 calc(100% - var(--corner)));
    }
  </style>

  <div class="wrapper">
    <div class="inline-wrapper">
      <canvas id="poster" class="poster" aria-hidden></canvas>
      <slot class="image"></slot>
    </div>
    <canvas id="glow" class="glow" aria-hidden></canvas>
  </div>
`;class q extends HTMLElement{constructor(){super();n(this,"loaded",!1);n(this,"observer",new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(this.shadowRoot.querySelector(".wrapper").classList.add("loaded"),this.handleGlow(),this.loaded=!0,this.observer.disconnect())})}));this.attachShadow({mode:"open"}).appendChild(w.content.cloneNode(!0))}async connectedCallback(){var t,o;if(this.loaded)return;this.image=this.querySelector("img"),this._handlePoster=this.handlePoster.bind(this),this._handleLoad=()=>{this.observer.observe(this.image)};const e=this.getAttribute("poster");e&&(this.poster=new Image,this.poster.src=e,this.poster.complete?this._handlePoster():this.poster.addEventListener("load",this._handlePoster)),(t=this.image)!=null&&t.complete?this._handleLoad():(o=this.image)==null||o.addEventListener("load",this._handleLoad)}disconnectedCallback(){var e,t;(e=this.image)==null||e.removeEventListener("load",this._handleLoad),(t=this.poster)==null||t.removeEventListener("load",this._handlePoster),this.observer.disconnect()}handlePoster(){const e=this.shadowRoot.querySelector("canvas#poster"),t=e.getContext("2d"),{width:o,height:a}=this.image;e.width=o,e.height=a;const r=.05,d=e.width*r,l=e.height*r;t.drawImage(this.poster,0,0,d,l),t.msImageSmoothingEnabled=!1,t.mozImageSmoothingEnabled=!1,t.webkitImageSmoothingEnabled=!1,t.imageSmoothingEnabled=!1,t.drawImage(e,0,0,d,l,0,0,e.width,e.height);const h=getComputedStyle(this).getPropertyValue("--color-fg");t.globalCompositeOperation="color",t.fillStyle=h,t.fillRect(0,0,e.width,e.height),e.classList.add("loaded")}handleGlow(){const e=this.shadowRoot.querySelector("canvas#glow"),t=e.getContext("2d"),{width:o,height:a}=this.image;e.width=o,e.height=a,e.style.filter="blur(1.5rem) opacity(0.5)",t.drawImage(this.image,0,0,o,a),e.classList.add("loaded")}}customElements.define(P,q);const z="fn-columns",v=document.createElement("template");v.innerHTML=`
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
`;class U extends HTMLElement{static get observedAttributes(){return["columns"]}constructor(){super(),this.attachShadow({mode:"open"}).appendChild(v.content.cloneNode(!0))}connectedCallback(){this.style.setProperty("--size",this.children[0].children.length),[...this.children].forEach(s=>{s.style.setProperty("display","grid"),s.style.setProperty("grid-gap","var(--gap)"),s.style.setProperty("grid-template-columns","repeat(var(--columns), 1fr)")})}}customElements.define(z,U);const V="fn-hero",y=document.createElement("template");y.innerHTML=`
  <style>
    :host {
      display: block;
      position: relative;
      line-height: 0;
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

    fn-image {
      display: block;
    }

    .image::slotted(*) {
      width: 100%;
      height: auto;
      display: block;
    }    
  </style>

  <slot class="image" name="image"></slot>
    
  <slot class="title" name="title"></slot>
`;class X extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(y.content.cloneNode(!0))}connectedCallback(){this.image=this.querySelector("img"),this.image.style.width="100%",this.image.style.height="auto"}}customElements.define(V,X);const j="fn-section",k=document.createElement("template");k.innerHTML=`
  <style>
    :host {
      max-width: 70rem;
      align-self: center;
    }

    :host([layout="centered"]) {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
    }

    slot {
      display: block;
    }
  </style>

  <slot></slot>
`;class O extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(k.content.cloneNode(!0))}}customElements.define(j,O);const Y="fn-timeago",C=document.createElement("template");C.innerHTML=`
  <style>
    :host {
      font: var(--font-accent);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  </style>
    
  <time class="fnh-timeago"></time>
`;class p extends HTMLElement{constructor(){super();n(this,"timeElement",null);this.attachShadow({mode:"open"}).appendChild(C.content.cloneNode(!0)),this.timeElement=this.shadowRoot.querySelector("time")}static get observedAttributes(){return["date"]}attributeChangedCallback(e,t,o){if(e==="date"){const a=parseInt(o,10),r=new Date(a);this.timeElement.setAttribute("datetime",r.toISOString()),this.timeElement.textContent=p.timeAgo(o)}}static timeAgo(e){const o=Date.now()-e,a=Math.floor(o/1e3),r=Math.floor(a/60),d=Math.floor(r/60),l=Math.floor(d/24),c=Math.floor(l/30),h=Math.floor(l/365);return a<60?"just now":r<60?`${r} minute${r!==1?"s":""} ago`:d<24?`${d} hour${d!==1?"s":""} ago`:l<30?`${l} day${l!==1?"s":""} ago`:c<12?`${c} month${c!==1?"s":""} ago`:`${h} year${h!==1?"s":""} ago`}}customElements.define(Y,p);const Z="fn-head",L=document.createElement("template");L.innerHTML=`
  <style>
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-xs);
    }

    ::slotted(h1),
    ::slotted(h2),
    ::slotted(h3),
    ::slotted(h4),
    ::slotted(p) {
      margin: 0 !important;
      padding: 0 !important;
    }

    ::slotted([slot="ctas"]) {
      display: flex;
      gap: var(--spacing-sm);
      align-items: center;
      line-height: 0;
    }
  </style>

  <slot name="hero"></slot>
  <slot name="ctas" class="ctas"></slot>
`;class B extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(L.content.cloneNode(!0))}}customElements.define(Z,B);const F="fn-icon",E=document.createElement("template");E.innerHTML=`
  <style>
    :host {
      display: inline-flex;
      align-items: center;
      line-height: 0;
    }

    :host(.disabled) {
      opacity: 0.5;
    }
    
    span {
      line-height: 0;
    }
  </style>
  <span></span>
`;class W extends HTMLElement{constructor(){super();n(this,"icons",{external:`
      <svg fill="currentColor" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 3.5L8.5 9 7 7.5 12.5 2H10V0h6v6h-2V3.5zM6 0v2H2v12h12v-4h2v6H0V0h6z" fill-rule="evenodd"/>
      </svg>
    `,link:`
      <svg width="1.2em" height="1.2em" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M200.66,352H144a96,96,0,0,1,0-192h55.41" style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"/>
        <path d="M312.59,160H368a96,96,0,0,1,0,192H311.34" style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"/>
        <line x1="169.07" y1="256" x2="344.93" y2="256" style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"/>
      </svg>
    `,viewed:`
      <svg width="1.4em" height="1.4em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4933 6.93502C15.8053 7.20743 15.8374 7.68122 15.565 7.99325L7.70786 16.9933C7.56543 17.1564 7.35943 17.25 7.14287 17.25C6.9263 17.25 6.72031 17.1564 6.57788 16.9933L3.43502 13.3933C3.16261 13.0812 3.19473 12.6074 3.50677 12.335C3.8188 12.0626 4.29259 12.0947 4.565 12.4068L7.14287 15.3596L14.435 7.00677C14.7074 6.69473 15.1812 6.66261 15.4933 6.93502Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5175 7.01946C20.8174 7.30513 20.829 7.77986 20.5433 8.07981L11.9716 17.0798C11.8201 17.2389 11.6065 17.3235 11.3872 17.3114C11.1679 17.2993 10.9649 17.1917 10.8318 17.0169L10.4035 16.4544C10.1526 16.1249 10.2163 15.6543 10.5458 15.4034C10.8289 15.1878 11.2161 15.2044 11.4787 15.4223L19.4571 7.04531C19.7428 6.74537 20.2175 6.73379 20.5175 7.01946Z" fill="currentColor"/>
      </svg>
    `,rss:`
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 1H1V3H3C8.52285 3 13 7.47715 13 13V15H15V13C15 6.37258 9.62742 1 3 1Z" fill="currentColor"/>
      <path d="M3 6H1V8H3C5.76142 8 8 10.2386 8 13V15H10V13C10 9.13401 6.86599 6 3 6Z" fill="currentColor"/>
      <path d="M3 15C4.10457 15 5 14.1046 5 13C5 11.8954 4.10457 11 3 11C1.89543 11 1 11.8954 1 13C1 14.1046 1.89543 15 3 15Z" fill="currentColor"/>
    </svg>
    `});this.attachShadow({mode:"open"}).appendChild(E.content.cloneNode(!0))}static get observedAttributes(){return["icon","disabled","label"]}attributeChangedCallback(e,t,o){e==="icon"&&(this.shadowRoot.querySelector("span").innerHTML=this.icons[o]),e==="disabled"&&this.classList.toggle("disabled",o==="true"),e==="label"&&this.shadowRoot.querySelector("svg").setAttribute("aria-label",o)}}customElements.define(F,W);const G="fn-viewed",x=document.createElement("template");x.innerHTML=`
  <style>
    :host {
      display: contents;
    }
  </style>
  <slot></slot>
`;class J extends HTMLElement{constructor(){super();n(this,"_state","idle");n(this,"timer",null);n(this,"root",null);n(this,"observer",new IntersectionObserver(e=>{const{isIntersecting:t}=e[0];t&&this.state==="idle"?(this.state="viewing",this.startTimer()):!t&&this.state==="viewing"?(this.state="idle",this.stopTimer()):this.stopTimer()},{threshold:.1}));this.attachShadow({mode:"open"}).appendChild(x.content.cloneNode(!0))}static get observedAttributes(){return["disabled"]}connectedCallback(){this.root=this.querySelector(":scope > *"),this.getAttribute("disabled")!=="true"&&this.observer.observe(this.root)}disconnectedCallback(){this.stopTimer(),this.observer.disconnect()}get time(){return this.textContent.trim().split(" ").filter(t=>!!t&&t!==`
`).length*50}get state(){return this._state}set state(e){this._state=e,this.setAttribute("data-state",e),this.dispatchEvent(new CustomEvent(e,{bubbles:!0}))}attributeChangedCallback(e,t,o){if(e==="disabled"){if(t===o)return;o==="true"?(this.stopTimer(),this.observer.disconnect()):this.observer.observe(this.root)}}startTimer(){this.timer=setTimeout(()=>{this.setAsViewed()},this.time)}stopTimer(){clearTimeout(this.timer)}setAsViewed(){this.observer.disconnect(),this.state="viewed"}}customElements.define(G,J);const se={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},docs:{theme:H.dark}}};export{se as default};

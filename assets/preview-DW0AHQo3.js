var T=Object.defineProperty;var N=(n,o,t)=>o in n?T(n,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[o]=t;var a=(n,o,t)=>N(n,typeof o!="symbol"?o+"":o,t);import{N as P}from"./index-B0EJvtKl.js";import"./_commonjsHelpers-Cpj98o6Y.js";const U="fn-binary";class I extends HTMLElement{constructor(){super();a(this,"playing");a(this,"current",0);a(this,"binary",[]);a(this,"intersectionObserver",new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting?this.play():this.stop()})}));this.attachShadow({mode:"open"})}static get observedAttributes(){return["message"]}connectedCallback(){this.intersectionObserver.observe(this),this.addEventListener("mouseenter",this.stop),this.addEventListener("mouseleave",this.play)}disconnectedCallback(){this.stop(),this.intersectionObserver.unobserve(this),this.removeEventListener("mouseenter",this.stop),this.removeEventListener("mouseleave",this.play)}attributeChangedCallback(t,e,s){if(e!==s&&t==="message"){const i=this.getAttribute("message");this.binary=i.split("").map(r=>r.charCodeAt(0).toString(2).padStart(8,"0"))}}play(){if(this.playing)return;const t=this.binary.length-1;this.render(this.binary[this.current]),this.playing=setInterval(()=>{this.current===t?this.current=0:this.current+=1,this.render(this.binary[this.current])},2e3)}stop(){clearInterval(this.playing),this.playing=void 0}render(t){t&&(this.shadowRoot.innerHTML=t)}}customElements.define(U,I);const B="fn-footer",m=document.createElement("template");m.innerHTML=`
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
`;class j extends HTMLElement{static get observedAttributes(){return["message"]}constructor(){super(),this.attachShadow({mode:"open"}).appendChild(m.content.cloneNode(!0))}attributeChangedCallback(o,t,e){if(t!==e)switch(o){case"message":this.renderMessage(e);break}}renderMessage(o){this.shadowRoot.querySelector("fn-binary").setAttribute("message",o)}}customElements.define(B,j);const q="fn-logo",u=document.createElement("template");u.innerHTML=`
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
`;class z extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(u.content.cloneNode(!0))}}customElements.define(q,z);const D="fn-link",f=document.createElement("template");f.innerHTML=`
  <style>
    ::slotted(a) {
      color: var(--color-fg, currentColor);
      position: relative;
      text-decoration: var(--decoration, underline);
      transition: transform 0.1s linear;    
      display: inline-flex;
      justify-content: center;  
    }

    ::slotted(a)::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      outline: 0.2rem solid var(--color-fg);
      top: 0;
      left: 0;
      box-sizing: border-box;
      opacity: 0;
      transition: opacity 200ms ease-out;
      z-index: -1;
    }

    ::slotted(a)::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: var(--color-fg);
      opacity: 0;
      transition: opacity 0.2s linear;
      z-index: -1;
      outline: 0.2rem solid var(--color-fg);
    }

    ::slotted(a:focus) {
      outline: none;
    }

    ::slotted(a:not([aria-disabled])) {
      cursor: var(--cursor-pointer, pointer);
    }

    ::slotted(a:hover:not([aria-disabled]):not(.button))::before {
      opacity: 1;
    }

    ::slotted(.button:hover:not([aria-disabled]))::before {
      opacity: 0.5;
      outline-offset: 0.2rem;
    }

    ::slotted(a.pressed:not([aria-disabled])),
    ::slotted(a:not([aria-disabled]):active) {
      transform: translateY(1px) scale(0.95);
      cursor: var(--cursor-pointer-click, pointer);
    }

    ::slotted(a:not([aria-disabled]):focus),
    ::slotted(a.pressed:not([aria-disabled])),
    ::slotted(a:not([aria-disabled]):active) {
      color: var(--color-bg);
    }

    ::slotted(.button:not([aria-disabled]):focus)::before {
      opacity: 0.5;
      outline-offset: 0.2rem;
    }

    ::slotted(a:not([aria-disabled]):not(.button):focus)::after,
    ::slotted(a.pressed:not([aria-disabled]):not(.button)),
    ::slotted(a:not([aria-disabled]):not(.button):active)::after {
      opacity: 1;
    }

    ::slotted(a.button.pressed:not([aria-disabled])) {
      opacity: 0.8;
    }
    
    ::slotted(a[aria-disabled]), ::slotted(.button[disabled]) {
      opacity: 0.4;
    }

    ::slotted(.button) {
      background: var(--color-fg);
      color: var(--color-bg);
      display: inline-flex;
      font: var(--font-accent);
      gap: var(--spacing-xs); 
      justify-content: center;
      letter-spacing: 0.05em;
      padding: var(--spacing-xs) var(--spacing-sm);
      text-decoration: none;
      text-transform: uppercase;
    }

    ::slotted(.button)::before {
      opacity: 0;
    }

    ::slotted(.button)::after {
      opacity: 1;
      transform: translateY(2px) translateX(5px);
      opacity: 0.35;
      width: 95%;
      height: 95%;
    }
  </style>

  <slot></slot>
`;class p extends HTMLElement{constructor(){super();a(this,"linkElement",null);a(this,"pressing",!1);a(this,"prefetched",!1);this.attachShadow({mode:"open"}).appendChild(f.content.cloneNode(!0))}static get observedAttributes(){return["href","target","prefetch","disabled","decoration","button"]}connectedCallback(){this.linkElement=this.querySelector("a"),this._handlePrefetch=this.handlePrefetch.bind(this),this._handleKeyDown=this.handleKeyDown.bind(this),this._handleKeyUp=this.handleKeyUp.bind(this),this.linkElement.addEventListener("mousedown",this._handlePrefetch),this.linkElement.addEventListener("keydown",this._handleKeyDown),this.linkElement.addEventListener("keyup",this._handleKeyUp),p.observedAttributes.forEach(t=>{this.hasAttribute(t)&&this.attributeChangedCallback(t,null,this.getAttribute(t))})}disconnectedCallback(){this.linkElement.removeEventListener("mousedown",this._handlePrefetch),this.linkElement.removeEventListener("keydown",this._handleKeyDown),this.linkElement.removeEventListener("keyup",this._handleKeyUp)}attributeChangedCallback(t,e,s){if(this.linkElement)switch(t){case"disabled":this.handleDisable(s==="true");break;case"decoration":this.style.setProperty("--decoration",s);break;case"button":s==="true"?this.linkElement.classList.add("button"):this.linkElement.classList.remove("button");break;default:this.linkElement.setAttribute(t,s);break}}handleKeyDown(t){if(!this.pressing){switch(t.key){case"Enter":t.preventDefault(),this.linkElement.classList.add("pressed"),this.handlePrefetch(t);break}this.pressing=!0}}handleKeyUp(t){t.key==="Enter"&&(t.preventDefault(),this.linkElement.classList.remove("pressed"),this.linkElement.click()),this.pressing=!1}handlePrefetch(t){const e=t.currentTarget.getAttribute("href")||"";if(this.dataset.prefetched||!e||e.startsWith("#")||/^(http|https):\/\/[^ "]+$/.test(e)&&new URL(e).origin!==window.origin)return;const s=Object.assign(document.createElement("link"),{rel:"prefetch",href:e});document.head.append(s),this.dataset.prefetched=!0}handleDisable(t=!0){t===!0?(this.linkElement.setAttribute("aria-disabled",!0),this.linkElement.removeAttribute("href")):(this.linkElement.removeAttribute("aria-disabled"),this.linkElement.setAttribute("href",this.getAttribute("href")))}}customElements.define(D,p);const V="fn-header",v=document.createElement("template");v.innerHTML=`
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

    nav {
      display: flex;
      gap: var(--spacing-md);
      font: var(--font-accent);
      text-transform: uppercase;
      font-size: 1.4rem;
    }
  </style>

  <header>
    <fn-link href="/" aria-label="go to start of the line" prefetch>
      <a>
        <fn-logo aria-label="fnhipster.com"></fn-logo>
      </a>
    </fn-link>

    <nav>
      <fn-link id="prev" decoration="none" prefetch>
        <a>
          Prev
        </a>
      </fn-link>

      <fn-link id="menu" decoration="none">
        <a>
          Go To
        </a>
      </fn-link>

      <fn-link id="next" decoration="none" prefetch>
        <a>
          Next
        </a>
      </fn-link>
    </nav>
  </header>
`;class _ extends HTMLElement{static get observedAttributes(){return["next","prev","menu"]}constructor(){super(),this.attachShadow({mode:"open"}).appendChild(v.content.cloneNode(!0))}connectedCallback(){const o=this.getAttribute("prev"),t=this.getAttribute("next"),e=this.getAttribute("menu");o||this.setAttribute("prev",""),t||this.setAttribute("next",""),e||this.setAttribute("menu","")}attributeChangedCallback(o,t,e){if(t!==e)switch(o){case"next":this.handleUpdateLink("next",e);break;case"prev":this.handleUpdateLink("prev",e);break;case"menu":this.handleUpdateLink("menu",e);break}}handleUpdateLink(o,t){const e=this.shadowRoot.querySelector(`#${o}`);e.setAttribute("href",t||""),t?e.removeAttribute("disabled"):e.setAttribute("disabled","true")}}customElements.define(V,_);const O="fn-image",w=document.createElement("template");w.innerHTML=`
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
`;class K extends HTMLElement{constructor(){super();a(this,"loaded",!1);a(this,"observer",new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(this.shadowRoot.querySelector(".wrapper").classList.add("loaded"),this.handleGlow(),this.loaded=!0,this.observer.disconnect())})}));this.attachShadow({mode:"open"}).appendChild(w.content.cloneNode(!0))}async connectedCallback(){var e,s;if(this.loaded)return;this.image=this.querySelector("img"),this._handlePoster=this.handlePoster.bind(this),this._handleLoad=()=>{this.observer.observe(this.image)};const t=this.getAttribute("poster");t&&(this.poster=new Image,this.poster.src=t,this.poster.complete?this._handlePoster():this.poster.addEventListener("load",this._handlePoster)),(e=this.image)!=null&&e.complete?this._handleLoad():(s=this.image)==null||s.addEventListener("load",this._handleLoad)}disconnectedCallback(){var t,e;(t=this.image)==null||t.removeEventListener("load",this._handleLoad),(e=this.poster)==null||e.removeEventListener("load",this._handlePoster),this.observer.disconnect()}handlePoster(){const t=this.shadowRoot.querySelector("canvas#poster"),e=t.getContext("2d"),{width:s,height:i}=this.image;t.width=s,t.height=i;const r=.05,h=t.width*r,l=t.height*r;e.drawImage(this.poster,0,0,h,l),e.msImageSmoothingEnabled=!1,e.mozImageSmoothingEnabled=!1,e.webkitImageSmoothingEnabled=!1,e.imageSmoothingEnabled=!1,e.drawImage(t,0,0,h,l,0,0,t.width,t.height);const d=getComputedStyle(this).getPropertyValue("--color-fg");e.globalCompositeOperation="color",e.fillStyle=d,e.fillRect(0,0,t.width,t.height),t.classList.add("loaded")}handleGlow(){const t=this.shadowRoot.querySelector("canvas#glow"),e=t.getContext("2d"),{width:s,height:i}=this.image;t.width=s,t.height=i,t.style.filter="blur(1.5rem) opacity(0.5)",e.drawImage(this.image,0,0,s,i),t.classList.add("loaded")}}customElements.define(O,K);const X="fn-columns",b=document.createElement("template");b.innerHTML=`
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
`;class Y extends HTMLElement{static get observedAttributes(){return["columns"]}constructor(){super(),this.attachShadow({mode:"open"}).appendChild(b.content.cloneNode(!0))}connectedCallback(){this.style.setProperty("--size",this.children[0].children.length),[...this.children].forEach(o=>{o.style.setProperty("display","grid"),o.style.setProperty("grid-gap","var(--gap)"),o.style.setProperty("grid-template-columns","repeat(var(--columns), 1fr)")})}}customElements.define(X,Y);const Z="fn-hero",y=document.createElement("template");y.innerHTML=`
  <style>
    :host {
      display: block;
      position: relative;
      /*
      margin-left: calc(var(--margin) * -1);
      width: calc(100% + var(--margin) * 2);
      */
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
`;class F extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(y.content.cloneNode(!0))}connectedCallback(){this.image=this.querySelector("img"),this.image.style.width="100%",this.image.style.height="auto"}}customElements.define(Z,F);const G="fn-menu",x=document.createElement("template");x.innerHTML=`
  <style>
      ul {
        display: grid;
      }

  </style>
    
  <nav>
    <slot name="links"></slot>
  </nav>
`;class W extends HTMLElement{static get observedAttributes(){return["selected"]}constructor(){super(),this.attachShadow({mode:"open"}).appendChild(x.content.cloneNode(!0))}attributeChangedCallback(o,t,e){if(t!==e)switch(o){case"selected":this.handleSelected(parseInt(e,10));break}}handleSelected(o){const t=this.querySelectorAll("fn-link");t==null||t.forEach((e,s)=>{s===o?e.setAttribute("selected",""):e.removeAttribute("selected")})}}customElements.define(G,W);const J="fn-section",k=document.createElement("template");k.innerHTML=`
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
`;class Q extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(k.content.cloneNode(!0))}}customElements.define(J,Q);const tt="fn-button",E=document.createElement("template");E.innerHTML=`
  <style>
    .fnh-button {
      line-height: inherit;
      background: none;
      border: 0 none;
      padding: var(--spacing-xs);
      color: var(--color-fg, currentColor);
      display: inline-block;
      position: relative;
      transition: transform 0.1s linear;          
    }

    .fnh-button::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      outline: 0.2rem solid var(--color-fg);
      top: 0;
      left: 0;
      box-sizing: border-box;
      opacity: 0;
      transition: opacity 200ms ease-out;
      z-index: -1;
    }

    .fnh-button::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: var(--color-fg);
      opacity: 0;
      transition: opacity 0.2s linear;
      z-index: -1;
      outline: 0.2rem solid var(--color-fg);
    }

    .fnh-button:focus {
      outline: none;
    }

    .fnh-button:not([aria-disabled]) {
      cursor: var(--cursor-pointer, pointer);
    }

    .fnh-button:hover:not([aria-disabled])::before {
      opacity: 1;
    }

    .fnh-button:not([aria-disabled]):active {
      transform: translateY(1px) scale(0.95);
      cursor: var(--cursor-pointer-click, pointer);
    }

    .fnh-button:not([aria-disabled]):focus,
    .fnh-button:not([aria-disabled]):active {
      color: var(--color-bg);
    }

    .fnh-button:not([aria-disabled]):focus::after,
    .fnh-button:not([aria-disabled]):active::after {
      opacity: 1;
    }

    .fnh-button[aria-disabled] {
      opacity: 0.4;
    }

    slot {
      display: inline-block;
    }
  </style>
    
  <button class="fnh-button">
    <slot></slot>
  </button>
`;class et extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(E.content.cloneNode(!0))}}customElements.define(tt,et);const ot="fn-share",L=document.createElement("template");L.innerHTML=`
  <style>
    .fnh-share {
      line-height: 0;
    }
  </style>
    
  <fn-button class="fnh-share">
    <svg width="1.2em" height="1.2em" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M200.66,352H144a96,96,0,0,1,0-192h55.41" style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"/>
      <path d="M312.59,160H368a96,96,0,0,1,0,192H311.34" style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"/>
      <line x1="169.07" y1="256" x2="344.93" y2="256" style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"/>
    </svg>
  </fn-button>
`;class st extends HTMLElement{static get observedAttributes(){return["title","text","url"]}constructor(){super(),this.attachShadow({mode:"open"}).appendChild(L.content.cloneNode(!0))}connectedCallback(){this.shadowRoot.querySelector(".fnh-share").addEventListener("click",this.share.bind(this))}share(){navigator.share?navigator.share({title:this.getAttribute("title"),text:this.getAttribute("text"),url:this.getAttribute("url")}):navigator.clipboard.writeText(this.getAttribute("url"))}}customElements.define(ot,st);const nt="fn-timeago",C=document.createElement("template");C.innerHTML=`
  <style>
    :host {
      font: var(--font-accent);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  </style>
    
  <time class="fnh-timeago"></time>
`;class g extends HTMLElement{constructor(){super();a(this,"timeElement",null);this.attachShadow({mode:"open"}).appendChild(C.content.cloneNode(!0)),this.timeElement=this.shadowRoot.querySelector("time")}static get observedAttributes(){return["date"]}attributeChangedCallback(t,e,s){if(t==="date"){const i=parseInt(s,10),r=new Date(i);this.timeElement.setAttribute("datetime",r.toISOString()),this.timeElement.textContent=g.timeAgo(s)}}static timeAgo(t){const s=Date.now()-t,i=Math.floor(s/1e3),r=Math.floor(i/60),h=Math.floor(r/60),l=Math.floor(h/24),c=Math.floor(l/30),d=Math.floor(l/365);return i<60?"just now":r<60?`${r} minute${r!==1?"s":""} ago`:h<24?`${h} hour${h!==1?"s":""} ago`:l<30?`${l} day${l!==1?"s":""} ago`:c<12?`${c} month${c!==1?"s":""} ago`:`${d} year${d!==1?"s":""} ago`}}customElements.define(nt,g);const it="fn-head",$=document.createElement("template");$.innerHTML=`
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
      opacity: 0.65;
      line-height: 0;
    }
  </style>

  <slot name="hero"></slot>
  <slot name="ctas" class="ctas"></slot>
`;class rt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild($.content.cloneNode(!0))}}customElements.define(it,rt);const at="fn-icon",H=document.createElement("template");H.innerHTML=`
  <style>
    :host {
      display: inline-flex;
      align-items: center;
      line-height: 0;
    }
    
    span {
      line-height: 0;
    }
  </style>
  <span></span>
`;class lt extends HTMLElement{constructor(){super();a(this,"icons",{external:`
      <svg fill="currentColor" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 3.5L8.5 9 7 7.5 12.5 2H10V0h6v6h-2V3.5zM6 0v2H2v12h12v-4h2v6H0V0h6z" fill-rule="evenodd"/>
      </svg>
    `,link:`
      <svg width="1.2em" height="1.2em" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M200.66,352H144a96,96,0,0,1,0-192h55.41" style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"/>
        <path d="M312.59,160H368a96,96,0,0,1,0,192H311.34" style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"/>
        <line x1="169.07" y1="256" x2="344.93" y2="256" style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"/>
      </svg>
    `});this.attachShadow({mode:"open"}).appendChild(H.content.cloneNode(!0))}static get observedAttributes(){return["icon"]}attributeChangedCallback(t,e,s){t==="icon"&&(this.shadowRoot.querySelector("span").innerHTML=this.icons[s])}}customElements.define(at,lt);function ht(n="default"){const o=document.documentElement,t=getComputedStyle(o).getPropertyValue("--color-bg"),e=getComputedStyle(o).getPropertyValue("--color-fg"),s={default:`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.89 25.09" width="20.89" height="30.09">
        <g fill="${e}" stroke="${t}">
          <path d="M14.62,14.62v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33V0H0v22.47h2.64v-1.33h1.33v-1.33h1.33v-1.33h1.33v2.64h1.33v2.64h1.33v1.33h2.64v-1.33h1.33v-2.64h-1.33v-2.64h-1.33v-1.33h5.28v-2.64h-1.33l.07.12Z"/>
        </g>
      </svg>
    `,defaultClick:`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.44 29.11" width="20.44" height="29.11">
        <g fill="${e}">
          <rect x="3.61" y="1.7" width="1.25" height="1.25" transform="translate(.77 5.69) rotate(-72.88)"/>
          <rect x="2.8" y=".16" width="1.25" height="1.25" transform="translate(1.67 3.82) rotate(-72.88)"/>
          <rect x="7.22" y="2.54" width="1.25" height="1.25" transform="translate(-.61 3.41) rotate(-23.62)"/>
          <rect x="7.88" y=".93" width="1.25" height="1.25" transform="translate(.09 3.54) rotate(-23.62)"/>
          <rect x="1.86" y="5.21" width="1.25" height="1.25" transform="translate(-2.33 1.71) rotate(-26.34)"/>
          <rect x=".21" y="4.64" width="1.25" height="1.25" transform="translate(-2.25 .92) rotate(-26.34)"/>
        </g>
        
        <g fill="${e}" stroke="${t}">
          <path d="M19.18,18.64v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v22.47h2.64v-1.33h1.33v-1.33h1.33v-1.33h1.33v2.64h1.33v2.64h1.33v1.33h2.64v-1.33h1.33v-2.64h-1.33v-2.64h-1.33v-1.33h5.28v-2.64h-1.33l.07.12Z"/>
        </g>
      </svg>
    `,pointer:`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.05 27.03" width="25.05" height="32.03">
        <g fill="${e}" stroke="${t}">
          <path d="M19.76,11.25v-1.26h-1.26v-1.26h-2.5v-1.26h-3.76v-1.26h-2.02V1.26h-1.26V0h-2.98v1.26h-1.26v10.93h-.6l-.03-1.22H0l.03,4.04h.99v1.26h1.26v2.5h1.26v2.5h1.26v2.5h1.26v3.27h12.49v-3.27h1.26v-3.76h1.26l-.07-9.11h-1.26l.04.36Z"/>
        </g>

        <g fill="${t}">
          <rect x="5.1" y="1.87" width="1.18" height="14.07"/>
          <rect x="6.28" y=".7" width="2.34" height="1.18"/>
          <rect x="8.62" y="1.87" width="1.18" height="10.55"/>
          <rect x="9.79" y="6.55" width="2.34" height="1.18"/>
          <rect x="12.13" y="8.9" width="1.18" height="3.52"/>
          <rect x="12.13" y="7.73" width="3.52" height="1.18"/>
          <rect x="15.65" y="10.08" width="1.18" height="3.51"/>
          <rect x="15.65" y="8.9" width="2.34" height="1.18"/>
          <rect x="18" y="10.08" width="1.18" height="1.18"/>
          <rect x="19.18" y="11.24" width="1.18" height="8.21"/>
          <rect x="18" y="19.45" width="1.18" height="3.52"/>
          <rect x="16.83" y="22.97" width="1.18" height="3.52"/>
          <rect x="6.28" y="25.31" width="10.55" height="1.18"/>
          <rect x="3.94" y="12.42" width="1.18" height="1.18"/>
          <rect x=".42" y="11.24" width="3.52" height="1.18"/>
          <rect x=".42" y="12.42" width="1.18" height="2.34"/>
          <rect x="1.59" y="14.76" width="1.18" height="1.18"/>
          <rect x="2.76" y="15.94" width="1.18" height="2.34"/>
          <rect x="3.94" y="18.28" width="1.18" height="2.34"/>
          <rect x="5.1" y="20.63" width="1.18" height="2.34"/>
          <rect x="6.28" y="22.97" width="1.18" height="2.34"/>
        </g>
      </svg>
    `,pointerClick:`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.05 31.65" width="21.05" height="31.65">
        <g fill="${e}">
          <rect x="4.42" y="1.61" width="1.18" height="1.18" transform="translate(.72 5.39) rotate(-72.88)"/>
          <rect x="3.65" y=".15" width="1.18" height="1.18" transform="translate(1.58 3.62) rotate(-72.88)"/>
          <rect x="7.81" y="2.41" width="1.18" height="1.18" transform="translate(-.58 3.22) rotate(-23.62)"/>
          <rect x="8.44" y=".88" width="1.18" height="1.18" transform="translate(.08 3.34) rotate(-23.62)"/>
          <rect x="2.76" y="4.92" width="1.18" height="1.18" transform="translate(-2.2 1.61) rotate(-26.34)"/>
          <rect x="1.2" y="4.38" width="1.18" height="1.18" transform="translate(-2.12 .87) rotate(-26.34)"/>
        </g>

        <g fill="${e}" stroke="${t}">
          <path class="cls-1" d="M19.76,15.87v-1.26h-1.26v-1.26h-2.5v-1.26h-3.76v-1.26h-2.02v-4.97h-1.26v-1.26h-2.98v1.26h-1.26v10.93h-.6l-.03-1.22H0l.03,4.04h.99v1.26h1.26v2.5h1.26v2.5h1.26v2.5h1.26v3.27h12.49v-3.27h1.26v-3.76h1.26l-.07-9.11h-1.26l.04.36Z"/>
        </g>
        
        <g fill="${t}">
          <rect x="5.1" y="6.49" width="1.18" height="14.07"/>
          <rect x="6.28" y="5.33" width="2.34" height="1.18"/>
          <rect x="8.62" y="6.49" width="1.18" height="10.55"/>
          <rect x="9.79" y="11.18" width="2.34" height="1.18"/>
          <rect x="12.13" y="13.52" width="1.18" height="3.52"/>
          <rect x="12.13" y="12.36" width="3.52" height="1.18"/>
          <rect x="15.65" y="14.7" width="1.18" height="3.51"/>
          <rect x="15.65" y="13.52" width="2.34" height="1.18"/>
          <rect x="18" y="14.7" width="1.18" height="1.18"/>
          <rect x="19.18" y="15.86" width="1.18" height="8.21"/>
          <rect x="18" y="24.07" width="1.18" height="3.52"/>
          <rect x="16.83" y="27.59" width="1.18" height="3.52"/>
          <rect x="6.28" y="29.94" width="10.55" height="1.18"/>
          <rect x="3.94" y="17.04" width="1.18" height="1.18"/>
          <rect x=".42" y="15.86" width="3.52" height="1.18"/>
          <rect x=".42" y="17.04" width="1.18" height="2.34"/>
          <rect x="1.59" y="19.39" width="1.18" height="1.18"/>
          <rect x="2.76" y="20.56" width="1.18" height="2.34"/>
          <rect x="3.94" y="22.91" width="1.18" height="2.34"/>
          <rect x="5.1" y="25.25" width="1.18" height="2.34"/>
          <rect x="6.28" y="27.59" width="1.18" height="2.34"/>
        </g>
      </svg>
    `,text:`
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.14 32.67" width="10.14" height="30.67">
      <polygon fill="${e}" points=".15 32.54 .15 30.88 1.55 30.88 1.55 29.48 5.26 29.48 5.26 26.57 2.93 26.57 2.93 25.38 5.26 25.38 5.26 3.2 2.91 3.2 2.91 3.19 1.53 3.19 1.53 1.78 .12 1.78 .12 .13 1.78 .13 1.78 1.53 3.19 1.53 3.19 2 8.94 2 8.94 1.53 10.34 1.53 10.34 .13 12 .13 12 1.79 10.6 1.79 10.6 3.19 9.22 3.19 9.1 3.2 6.92 3.2 6.92 25.38 9.24 25.38 9.24 26.57 6.92 26.57 6.92 29.48 10.62 29.48 10.62 30.88 12.02 30.88 12.02 32.54 10.36 32.54 10.36 31.14 8.96 31.14 8.96 30.68 3.21 30.68 3.21 31.14 1.81 31.14 1.81 32.54 .15 32.54"/>
      <path fill="${t}" d="M1.66.25v1.4h1.41v.47h6v-.47h1.4V.25h1.41v1.41h-1.4v1.4h-1.38s-2.3,0-2.3,0v22.43h2.33v.95h-2.33v3.16h3.7v1.4h1.4v1.41h-1.41v-1.4h-1.4v-.46H3.09v.46h-1.41v1.4H.27v-1.41h1.41v-1.4h3.7v-3.16h-2.33v-.95h2.33V3.07h-2.35s-1.38,0-1.38,0v-1.4H.25V.25h1.41M1.91,0H0v1.91h1.41v1.4h1.63s2.1,0,2.1,0v21.93h-2.33v1.45h2.33v2.66H1.43v1.4H.02v1.91h1.91v-1.4h1.41v-.46h5.5v.46h1.4v1.4h1.91v-1.91h-1.4v-1.4h-3.7v-2.66h2.33v-1.45h-2.33V3.32h2.3s1.13,0,1.13,0h.25v-1.4h1.4V0h-1.91v1.4h-1.4v.47H3.32v-.47h-1.41V0h0Z"/>
    </svg>
    `},i=new Blob([s[n]],{type:"image/svg+xml"}),r=URL.createObjectURL(i),h=new Blob([s[`${n}Click`]],{type:"image/svg+xml"}),l=URL.createObjectURL(h),c=new Blob([s.pointer],{type:"image/svg+xml"}),d=URL.createObjectURL(c),R=new Blob([s.pointerClick],{type:"image/svg+xml"}),M=URL.createObjectURL(R),S=new Blob([s.text],{type:"image/svg+xml"}),A=URL.createObjectURL(S);o.style.setProperty("--cursor-default",`url(${r}), auto`),o.style.setProperty("--cursor-default-click",`url(${l}), auto`),o.style.setProperty("--cursor-pointer",`url(${d}), auto`),o.style.setProperty("--cursor-pointer-click",`url(${M}), auto`),o.style.setProperty("--cursor-text",`url(${A}), auto`)}function ct(){ht()}document.addEventListener("DOMContentLoaded",ct);const mt={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},docs:{theme:P.dark}}};export{mt as default};

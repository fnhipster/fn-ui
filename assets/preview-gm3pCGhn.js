var C=Object.defineProperty;var $=(r,s,e)=>s in r?C(r,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[s]=e;var n=(r,s,e)=>$(r,typeof s!="symbol"?s+"":s,e);import{N as R}from"./index-B0EJvtKl.js";import"./_commonjsHelpers-Cpj98o6Y.js";const S="fn-binary";class H extends HTMLElement{constructor(){super();n(this,"playing");n(this,"current",0);n(this,"binary",[]);n(this,"intersectionObserver",new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?this.play():this.stop()})}));this.attachShadow({mode:"open"})}static get observedAttributes(){return["message"]}connectedCallback(){this.intersectionObserver.observe(this),this.addEventListener("mouseenter",this.stop),this.addEventListener("mouseleave",this.play)}disconnectedCallback(){this.stop(),this.intersectionObserver.unobserve(this),this.removeEventListener("mouseenter",this.stop),this.removeEventListener("mouseleave",this.play)}attributeChangedCallback(e,t,i){if(t!==i&&e==="message"){const o=this.getAttribute("message");this.binary=o.split("").map(a=>a.charCodeAt(0).toString(2).padStart(8,"0"))}}play(){if(this.playing)return;const e=this.binary.length-1;this.render(this.binary[this.current]),this.playing=setInterval(()=>{this.current===e?this.current=0:this.current+=1,this.render(this.binary[this.current])},2e3)}stop(){clearInterval(this.playing),this.playing=void 0}render(e){e&&(this.shadowRoot.innerHTML=e)}}customElements.define(S,H);const M="fn-footer",g=document.createElement("template");g.innerHTML=`
  <style>
    :host {
      align-items: center;
      display: flex;
    }

    footer {
      align-items: center;
      display: flex;
      font-size: 1.4rem;
      font: var(--font-accent);
      gap: var(--spacing-sm);
      justify-content: space-between;
      padding: var(--margin);
      text-transform: uppercase;
      width: 100%;
    }
  </style>
    
  <footer className="fnh-footer">
    <fn-binary></fn-binary>
    <span>© ${new Date().getUTCFullYear()}, fnhipster</span>
  </footer>
`;class A extends HTMLElement{static get observedAttributes(){return["message"]}constructor(){super(),this.attachShadow({mode:"open"}).appendChild(g.content.cloneNode(!0))}attributeChangedCallback(s,e,t){if(e!==t)switch(s){case"message":this.renderMessage(t);break}}renderMessage(s){this.shadowRoot.querySelector("fn-binary").setAttribute("message",s)}}customElements.define(M,A);const P="fn-logo",m=document.createElement("template");m.innerHTML=`
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
`;class U extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(m.content.cloneNode(!0))}}customElements.define(P,U);const T="fn-link",p=document.createElement("template");p.innerHTML=`
  <style>

    .link {
      color: var(--color-fg, currentColor);
      display: inline-block;
      position: relative;
      text-decoration: var(--decoration, underline);
      transition: transform 0.1s linear;          
    }

    .link::before {
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

    .link::after {
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

    .link:focus {
      outline: none;
    }

    .link:not([aria-disabled]) {
      cursor: var(--cursor-pointer, pointer);
    }

    .link:hover:not([aria-disabled])::before {
      opacity: 1;
    }

    .link.pressed:not([aria-disabled]),
    .link:not([aria-disabled]):active {
      transform: translateY(1px) scale(0.95);
      cursor: var(--cursor-pointer-click, pointer);
    }

    .link:not([aria-disabled]):focus,
    .link.pressed:not([aria-disabled]),
    .link:not([aria-disabled]):active {
      color: var(--color-bg);
    }

    .link:not([aria-disabled]):focus::after,
    .link.pressed:not([aria-disabled]),
    .link:not([aria-disabled]):active::after {
      opacity: 1;
    }

    .link[aria-disabled] {
      opacity: 0.4;
    }

  </style>

  <a class="link">
    <slot></slot>
  </a>
`;class N extends HTMLElement{constructor(){super();n(this,"linkElement",null);n(this,"pressing",!1);n(this,"prefetched",!1);this.attachShadow({mode:"open"}).appendChild(p.content.cloneNode(!0)),this.linkElement=this.shadowRoot.querySelector(".link")}static get observedAttributes(){return["href","target","prefetch","disabled","decoration"]}connectedCallback(){this._handlePrefetch=this.handlePrefetch.bind(this),this._handleKeyDown=this.handleKeyDown.bind(this),this._handleKeyUp=this.handleKeyUp.bind(this),this.linkElement.addEventListener("mousedown",this._handlePrefetch),this.linkElement.addEventListener("keydown",this._handleKeyDown),this.linkElement.addEventListener("keyup",this._handleKeyUp)}disconnectedCallback(){this.linkElement.removeEventListener("mousedown",this._handlePrefetch),this.linkElement.removeEventListener("keydown",this._handleKeyDown),this.linkElement.removeEventListener("keyup",this._handleKeyUp)}attributeChangedCallback(e,t,i){if(t!==i)switch(e){case"disabled":this.handleDisable(i==="true");break;case"prefetch":i==="true"&&this.handlePrefetch();break;case"decoration":this.style.setProperty("--decoration",i);break;default:this.linkElement.setAttribute(e,i);break}}handleKeyDown(e){if(!this.pressing){switch(e.key){case"Enter":e.preventDefault(),this.linkElement.classList.add("pressed"),this.handlePrefetch(e);break}this.pressing=!0}}handleKeyUp(e){e.key==="Enter"&&(e.preventDefault(),this.linkElement.classList.remove("pressed"),this.linkElement.click()),this.pressing=!1}handlePrefetch(e){const t=e.currentTarget.getAttribute("href")||"";if(this.dataset.prefetched||!t||t.startsWith("#")||/^(http|https):\/\/[^ "]+$/.test(t))return;const i=Object.assign(document.createElement("link"),{rel:"prefetch",href:t});document.head.append(i),this.dataset.prefetched=!0}handleDisable(e=!0){e===!0?(this.linkElement.setAttribute("aria-disabled",!0),this.linkElement.removeAttribute("href")):(this.linkElement.removeAttribute("aria-disabled"),this.linkElement.setAttribute("href",this.getAttribute("href")))}}customElements.define(T,N);const I="fn-header",v=document.createElement("template");v.innerHTML=`
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
      <fn-logo aria-label="fnhipster.com"></fn-logo>
    </fn-link>

    <nav>
      <fn-link id="prev" decoration="none" prefetch>
        Prev
      </fn-link>

      <fn-link id="menu" decoration="none">
        Go To
      </fn-link>

      <fn-link id="next" decoration="none" prefetch>
        Next
      </fn-link>
    </nav>
  </header>
`;class B extends HTMLElement{static get observedAttributes(){return["next","prev","menu"]}constructor(){super(),this.attachShadow({mode:"open"}).appendChild(v.content.cloneNode(!0))}connectedCallback(){const s=this.getAttribute("prev"),e=this.getAttribute("next"),t=this.getAttribute("menu");s||this.setAttribute("prev",""),e||this.setAttribute("next",""),t||this.setAttribute("menu","")}attributeChangedCallback(s,e,t){if(e!==t)switch(s){case"next":this.handleUpdateLink("next",t);break;case"prev":this.handleUpdateLink("prev",t);break;case"menu":this.handleUpdateLink("menu",t);break}}handleUpdateLink(s,e){const t=this.shadowRoot.querySelector(`#${s}`);t.setAttribute("href",e||""),e?t.removeAttribute("disabled"):t.setAttribute("disabled","true")}}customElements.define(I,B);const _="fn-image",u=document.createElement("template");u.innerHTML=`
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
`;class z extends HTMLElement{constructor(){super();n(this,"loaded",!1);n(this,"observer",new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(this.shadowRoot.querySelector(".wrapper").classList.add("loaded"),this.handleGlow(),this.loaded=!0,this.observer.disconnect())})}));this.attachShadow({mode:"open"}).appendChild(u.content.cloneNode(!0))}async connectedCallback(){var t,i;if(this.loaded)return;this.image=this.querySelector("img"),this._handlePoster=this.handlePoster.bind(this),this._handleLoad=()=>{this.observer.observe(this.image)};const e=this.getAttribute("poster");e&&(this.poster=new Image,this.poster.src=e,this.poster.complete?this._handlePoster():this.poster.addEventListener("load",this._handlePoster)),(t=this.image)!=null&&t.complete?this._handleLoad():(i=this.image)==null||i.addEventListener("load",this._handleLoad)}disconnectedCallback(){var e,t;(e=this.image)==null||e.removeEventListener("load",this._handleLoad),(t=this.poster)==null||t.removeEventListener("load",this._handlePoster),this.observer.disconnect()}handlePoster(){const e=this.shadowRoot.querySelector("canvas#poster"),t=e.getContext("2d"),{width:i,height:o}=this.image;e.width=i,e.height=o;const a=.05,h=e.width*a,l=e.height*a;t.drawImage(this.poster,0,0,h,l),t.msImageSmoothingEnabled=!1,t.mozImageSmoothingEnabled=!1,t.webkitImageSmoothingEnabled=!1,t.imageSmoothingEnabled=!1,t.drawImage(e,0,0,h,l,0,0,e.width,e.height);const c=getComputedStyle(this).getPropertyValue("--color-fg");t.globalCompositeOperation="color",t.fillStyle=c,t.fillRect(0,0,e.width,e.height),e.classList.add("loaded")}handleGlow(){const e=this.shadowRoot.querySelector("canvas#glow"),t=e.getContext("2d"),{width:i,height:o}=this.image;e.width=i,e.height=o,e.style.filter="blur(1.5rem) opacity(0.5)",t.drawImage(this.image,0,0,i,o),e.classList.add("loaded")}}customElements.define(_,z);const O="fn-columns",f=document.createElement("template");f.innerHTML=`
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
`;class D extends HTMLElement{static get observedAttributes(){return["columns"]}constructor(){super(),this.attachShadow({mode:"open"}).appendChild(f.content.cloneNode(!0))}connectedCallback(){this.style.setProperty("--size",this.children[0].children.length),[...this.children].forEach(s=>{s.style.setProperty("display","grid"),s.style.setProperty("grid-gap","var(--gap)"),s.style.setProperty("grid-template-columns","repeat(var(--columns), 1fr)")})}}customElements.define(O,D);const V="fn-hero",w=document.createElement("template");w.innerHTML=`
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
`;class K extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(w.content.cloneNode(!0))}connectedCallback(){this.image=this.querySelector("img"),this.image.style.width="100%",this.image.style.height="auto"}}customElements.define(V,K);const j="fn-menu",y=document.createElement("template");y.innerHTML=`
  <style>
      ul {
        display: grid;
      }

  </style>
    
  <nav>
    <slot name="links"></slot>
  </nav>
`;class q extends HTMLElement{static get observedAttributes(){return["selected"]}constructor(){super(),this.attachShadow({mode:"open"}).appendChild(y.content.cloneNode(!0))}attributeChangedCallback(s,e,t){if(e!==t)switch(s){case"selected":this.handleSelected(parseInt(t,10));break}}handleSelected(s){const e=this.querySelectorAll("fn-link");e==null||e.forEach((t,i)=>{i===s?t.setAttribute("selected",""):t.removeAttribute("selected")})}}customElements.define(j,q);const X="fn-section",b=document.createElement("template");b.innerHTML=`
  <style>
    :host([layout="centered"]) {
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    slot {
      display: block;
    }
  </style>

  <slot></slot>
`;class Z extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(b.content.cloneNode(!0))}}customElements.define(X,Z);function Y(r="default"){const s=document.documentElement,e=getComputedStyle(s).getPropertyValue("--color-bg"),t=getComputedStyle(s).getPropertyValue("--color-fg"),i={default:`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.89 25.09" width="20.89" height="30.09">
        <g fill="${t}" stroke="${e}">
          <path d="M14.62,14.62v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33V0H0v22.47h2.64v-1.33h1.33v-1.33h1.33v-1.33h1.33v2.64h1.33v2.64h1.33v1.33h2.64v-1.33h1.33v-2.64h-1.33v-2.64h-1.33v-1.33h5.28v-2.64h-1.33l.07.12Z"/>
        </g>
      </svg>
    `,defaultClick:`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.44 29.11" width="20.44" height="29.11">
        <g fill="${t}">
          <rect x="3.61" y="1.7" width="1.25" height="1.25" transform="translate(.77 5.69) rotate(-72.88)"/>
          <rect x="2.8" y=".16" width="1.25" height="1.25" transform="translate(1.67 3.82) rotate(-72.88)"/>
          <rect x="7.22" y="2.54" width="1.25" height="1.25" transform="translate(-.61 3.41) rotate(-23.62)"/>
          <rect x="7.88" y=".93" width="1.25" height="1.25" transform="translate(.09 3.54) rotate(-23.62)"/>
          <rect x="1.86" y="5.21" width="1.25" height="1.25" transform="translate(-2.33 1.71) rotate(-26.34)"/>
          <rect x=".21" y="4.64" width="1.25" height="1.25" transform="translate(-2.25 .92) rotate(-26.34)"/>
        </g>
        
        <g fill="${t}" stroke="${e}">
          <path d="M19.18,18.64v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v22.47h2.64v-1.33h1.33v-1.33h1.33v-1.33h1.33v2.64h1.33v2.64h1.33v1.33h2.64v-1.33h1.33v-2.64h-1.33v-2.64h-1.33v-1.33h5.28v-2.64h-1.33l.07.12Z"/>
        </g>
      </svg>
    `,pointer:`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.05 27.03" width="25.05" height="32.03">
        <g fill="${t}" stroke="${e}">
          <path d="M19.76,11.25v-1.26h-1.26v-1.26h-2.5v-1.26h-3.76v-1.26h-2.02V1.26h-1.26V0h-2.98v1.26h-1.26v10.93h-.6l-.03-1.22H0l.03,4.04h.99v1.26h1.26v2.5h1.26v2.5h1.26v2.5h1.26v3.27h12.49v-3.27h1.26v-3.76h1.26l-.07-9.11h-1.26l.04.36Z"/>
        </g>

        <g fill="${e}">
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
        <g fill="${t}">
          <rect x="4.42" y="1.61" width="1.18" height="1.18" transform="translate(.72 5.39) rotate(-72.88)"/>
          <rect x="3.65" y=".15" width="1.18" height="1.18" transform="translate(1.58 3.62) rotate(-72.88)"/>
          <rect x="7.81" y="2.41" width="1.18" height="1.18" transform="translate(-.58 3.22) rotate(-23.62)"/>
          <rect x="8.44" y=".88" width="1.18" height="1.18" transform="translate(.08 3.34) rotate(-23.62)"/>
          <rect x="2.76" y="4.92" width="1.18" height="1.18" transform="translate(-2.2 1.61) rotate(-26.34)"/>
          <rect x="1.2" y="4.38" width="1.18" height="1.18" transform="translate(-2.12 .87) rotate(-26.34)"/>
        </g>

        <g fill="${t}" stroke="${e}">
          <path class="cls-1" d="M19.76,15.87v-1.26h-1.26v-1.26h-2.5v-1.26h-3.76v-1.26h-2.02v-4.97h-1.26v-1.26h-2.98v1.26h-1.26v10.93h-.6l-.03-1.22H0l.03,4.04h.99v1.26h1.26v2.5h1.26v2.5h1.26v2.5h1.26v3.27h12.49v-3.27h1.26v-3.76h1.26l-.07-9.11h-1.26l.04.36Z"/>
        </g>
        
        <g fill="${e}">
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
      <polygon fill="${t}" points=".15 32.54 .15 30.88 1.55 30.88 1.55 29.48 5.26 29.48 5.26 26.57 2.93 26.57 2.93 25.38 5.26 25.38 5.26 3.2 2.91 3.2 2.91 3.19 1.53 3.19 1.53 1.78 .12 1.78 .12 .13 1.78 .13 1.78 1.53 3.19 1.53 3.19 2 8.94 2 8.94 1.53 10.34 1.53 10.34 .13 12 .13 12 1.79 10.6 1.79 10.6 3.19 9.22 3.19 9.1 3.2 6.92 3.2 6.92 25.38 9.24 25.38 9.24 26.57 6.92 26.57 6.92 29.48 10.62 29.48 10.62 30.88 12.02 30.88 12.02 32.54 10.36 32.54 10.36 31.14 8.96 31.14 8.96 30.68 3.21 30.68 3.21 31.14 1.81 31.14 1.81 32.54 .15 32.54"/>
      <path fill="${e}" d="M1.66.25v1.4h1.41v.47h6v-.47h1.4V.25h1.41v1.41h-1.4v1.4h-1.38s-2.3,0-2.3,0v22.43h2.33v.95h-2.33v3.16h3.7v1.4h1.4v1.41h-1.41v-1.4h-1.4v-.46H3.09v.46h-1.41v1.4H.27v-1.41h1.41v-1.4h3.7v-3.16h-2.33v-.95h2.33V3.07h-2.35s-1.38,0-1.38,0v-1.4H.25V.25h1.41M1.91,0H0v1.91h1.41v1.4h1.63s2.1,0,2.1,0v21.93h-2.33v1.45h2.33v2.66H1.43v1.4H.02v1.91h1.91v-1.4h1.41v-.46h5.5v.46h1.4v1.4h1.91v-1.91h-1.4v-1.4h-3.7v-2.66h2.33v-1.45h-2.33V3.32h2.3s1.13,0,1.13,0h.25v-1.4h1.4V0h-1.91v1.4h-1.4v.47H3.32v-.47h-1.41V0h0Z"/>
    </svg>
    `},o=new Blob([i[r]],{type:"image/svg+xml"}),a=URL.createObjectURL(o),h=new Blob([i[`${r}Click`]],{type:"image/svg+xml"}),l=URL.createObjectURL(h),d=new Blob([i.pointer],{type:"image/svg+xml"}),c=URL.createObjectURL(d),k=new Blob([i.pointerClick],{type:"image/svg+xml"}),x=URL.createObjectURL(k),E=new Blob([i.text],{type:"image/svg+xml"}),L=URL.createObjectURL(E);s.style.setProperty("--cursor-default",`url(${a}), auto`),s.style.setProperty("--cursor-default-click",`url(${l}), auto`),s.style.setProperty("--cursor-pointer",`url(${c}), auto`),s.style.setProperty("--cursor-pointer-click",`url(${x}), auto`),s.style.setProperty("--cursor-text",`url(${L}), auto`)}function F(){Y()}document.addEventListener("DOMContentLoaded",F);const Q={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},docs:{theme:R.dark}}};export{Q as default};

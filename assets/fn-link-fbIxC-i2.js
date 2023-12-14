var l=Object.defineProperty;var o=(n,t,e)=>t in n?l(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var r=(n,t,e)=>(o(n,typeof t!="symbol"?t+"":t,e),e);const a="fn-link";class d extends HTMLElement{constructor(){super();r(this,"linkElement",null);r(this,"pressing",!1);r(this,"prefetched",!1);this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
      <style>
   
        .link {
          color: var(--color-fg, currentColor);
          display: inline-block;
          position: relative;
          text-decoration: var(--decoration, underline);
          transition: transform 0.2s linear;          
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
          cursor: pointer;
        }

        .link:hover:not([aria-disabled])::before {
          opacity: 1;
        }

        .link.pressed:not([aria-disabled]),
        .link:not([aria-disabled]):active {
          transform: translateY(2px) scale(0.9);
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
    `,this.linkElement=this.shadowRoot.querySelector(".link")}static get observedAttributes(){return["href","target","prefetch","disabled","decoration"]}connectedCallback(){this.linkElement.addEventListener("mousedown",this.handlePrefetch.bind(this)),this.linkElement.addEventListener("keydown",this.handleKeyDown.bind(this)),this.linkElement.addEventListener("keyup",this.handleKeyUp.bind(this))}disconnectedCallback(){this.linkElement.removeEventListener("mousedown",this.handlePrefetch.bind(this)),this.linkElement.removeEventListener("keydown",this.handleKeyDown.bind(this)),this.linkElement.removeEventListener("keyup",this.handleKeyUp.bind(this))}attributeChangedCallback(e,s,i){if(s!==i)switch(e){case"disabled":this.handleDisable(i==="true");break;case"prefetch":i==="true"&&this.handlePrefetch();break;case"decoration":this.style.setProperty("--decoration",i);break;default:this.linkElement.setAttribute(e,i);break}}handleKeyDown(e){if(!this.pressing){switch(e.key){case"Enter":e.preventDefault(),this.linkElement.classList.add("pressed"),this.handlePrefetch(e);break}this.pressing=!0}}handleKeyUp(e){e.key==="Enter"&&(e.preventDefault(),this.linkElement.classList.remove("pressed"),this.linkElement.click()),this.pressing=!1}handlePrefetch(e){const s=e.currentTarget.getAttribute("href")||"";if(this.dataset.prefetched||!s||s.startsWith("#")||/^[^/]+\/[^/].*$|^\/[^/].*$/gmi.test(s)===!1)return;const i=Object.assign(document.createElement("link"),{rel:"prefetch",href:s});document.head.append(i),this.dataset.prefetched=!0}handleDisable(e=!0){e===!0?(this.linkElement.setAttribute("aria-disabled",!0),this.linkElement.removeAttribute("href")):(this.linkElement.removeAttribute("aria-disabled"),this.linkElement.setAttribute("href",this.getAttribute("href")))}}customElements.get(a)||customElements.define(a,d);

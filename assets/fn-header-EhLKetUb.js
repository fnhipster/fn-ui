import"./fn-logo-RDFmdBMZ.js";import"./fn-link-fbIxC-i2.js";const i="fn-header";class a extends HTMLElement{static get observedAttributes(){return["next","prev","menu"]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
      <style>
          header {
            align-items: center;
            display: flex;
            justify-content: space-between;
            padding: var(--spacing-sm) 0;
          }

          fn-logo {
            font-size: 2rem;
          }

          nav {
            display: flex;
            gap: var(--spacing-md);
            font: var(--font-accent);
            text-transform: uppercase;
          }

          @media (width >= 650px) {
            header {
              padding: var(--spacing-md) 0;
            }
          }
      </style>
      
      <header>
        <fn-link href="/" aria-label="go to start of the line">
          <fn-logo aria-label="fnhipster.com"></fn-logo>
        </fn-link>

        <nav>
          <fn-link id="prev" decoration="none">
            Prev
          </fn-link>

          <fn-link id="menu" decoration="none">
            Go To
          </fn-link>

          <fn-link id="next" decoration="none">
            Next
          </fn-link>
        </nav>
      </header> 
    `}connectedCallback(){const n=this.getAttribute("prev"),t=this.getAttribute("next"),e=this.getAttribute("menu");n||this.setAttribute("prev",""),t||this.setAttribute("next",""),e||this.setAttribute("menu","")}attributeChangedCallback(n,t,e){if(t!==e)switch(n){case"next":this.handleUpdateLink("next",e);break;case"prev":this.handleUpdateLink("prev",e);break;case"menu":this.handleUpdateLink("menu",e);break}}handleUpdateLink(n,t){const e=this.shadowRoot.querySelector(`#${n}`);e.setAttribute("href",t||""),t?e.removeAttribute("disabled"):e.setAttribute("disabled","true")}}customElements.get(i)||customElements.define(i,a);

import"./fn-binary-flkvMwlJ.js";const a="fn-footer";class n extends HTMLElement{static get observedAttributes(){return["message"]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
      <style>
          footer {
            align-items: center;
            display: flex;
            font-family: var(--typography-accent);
            font-size: 1.8rem;
            justify-content: space-between;
            text-transform: uppercase;
            gap: var(--spacing-sm);
            padding: var(--spacing-sm) 0;
          }

          @media (width >= 650px) {
            footer {
              padding: var(--spacing-md) 0;
            }
          }
      </style>
        
      <footer className="fnh-footer">
        <fn-binary></fn-binary>
        <span>© ${new Date().getUTCFullYear()}, fnhipster</span>
      </footer>
    `}attributeChangedCallback(e,t,s){if(t!==s)switch(e){case"message":this.renderMessage(s);break}}renderMessage(e){const t=this.shadowRoot.querySelector("fn-binary");t.innerHTML=e}}customElements.get(a)||customElements.define(a,n);

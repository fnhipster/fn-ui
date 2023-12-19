const e="fn-content";class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
      <style>
        :host {
          font: var(--font);
          color: var(--color-fg);
        }

        strong {
          font-weight: var(--font-bold);
          text-shadow: 0 0 0.2rem currentColor;
        }

        h1,
        h2,
        h3 {
          font: var(--font-heading);
          text-transform: uppercase;
          margin: var(--spacing-md) 0;
          word-spacing: -0.25em;
        }

        h1 {
          font-size: var(--font-heading-xl);
        }

        h2 {
          font-size: var(--font-heading-lg);
        }

        h3 {
          font-size: var(--font-heading-md);
        }

        p {
          margin: var(--spacing-md) 0;
        }

        img,
        video,
        iframe {
          max-inline-size: 100%;
          block-size: auto;
        }

        hr {
          border-color: var(--color-fg);
          border-style: solid;
          border-width: 0.3rem;
          max-width: 20rem;
          display: inline-block;
          width: 100%;
          margin: var(--spacing-md) 0;
        }

        blockquote {
          font-size: 1.2em;
          line-height: 1.3;
          font-style: italic;
          margin: 0;
          padding: var(--spacing-md);
          border-left: 0.5em solid;
        }
      </style>
    `}connectedCallback(){[...this.children].forEach(o=>{this.shadowRoot.appendChild(o)})}}customElements.get(e)||customElements.define(e,t);

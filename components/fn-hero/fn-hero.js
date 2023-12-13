const tagName = 'fn-hero';

export default class Hero extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = /* html */ `
      <style>
        :host {
          display: flex;
          flex-direction: column;
          
        }

        slot[name="title"] {
          font-family: var(--typography-heading);
          text-transform: uppercase;
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
      </style>

          
      <slot name="image"></slot>
      <slot name="title"></slot>
      <hr />
    `;
  }
}

if (!customElements.get(tagName)) customElements.define(tagName, Hero);

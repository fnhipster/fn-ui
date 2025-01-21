const tagName = 'fn-head';

const template = document.createElement('template');

template.innerHTML = /* html */ `
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

  <slot name="cover"></slot>
  <slot name="hero"></slot>
  <slot name="ctas" class="ctas"></slot>
`;

export default class Head extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define(tagName, Head);

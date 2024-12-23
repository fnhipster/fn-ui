const tagName = 'fn-section';

const template = document.createElement('template');

template.innerHTML = /* html */ `
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
        text-align: center;
    }

    slot {
      display: block;
    }
  </style>

  <slot></slot>
`;

export default class Section extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define(tagName, Section);

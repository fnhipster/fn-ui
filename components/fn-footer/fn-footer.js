import '../fn-binary/fn-binary.js';

const tagName = 'fn-footer';

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>
    :host {
      align-items: center;
      display: flex;
    }

    footer {
      align-items: center;
      display: flex;
      font: var(--font-accent);
      letter-spacing: 0.05em;
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
`;

export default class Footer extends HTMLElement {
  static get observedAttributes() {
    return ['message'];
  }

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  attributeChangedCallback(name, prev, next) {
    if (prev === next) return;

    switch (name) {
      case 'message':
        this.renderMessage(next);
        break;

      default:
        break;
    }
  }

  renderMessage(message) {
    const element = this.shadowRoot.querySelector('fn-binary');
    element.setAttribute('message', message);
  }
}

customElements.define(tagName, Footer);

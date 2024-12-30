import '../fn-logo/fn-logo.js';
import '../fn-link/fn-link.js';

const tagName = 'fn-header';

const template = document.createElement('template');
template.innerHTML = /* html */ `
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

    ::slotted(nav) {
      display: flex;
      gap: var(--spacing-md);
      font: var(--font-accent);
      text-transform: uppercase;
      font-size: 1.4rem;
    }
  </style>

  <header>
    <fn-link href="/" aria-label="go to start of the line">
      <a>
        <fn-logo aria-label="fnhipster.com"></fn-logo>
      </a>
    </fn-link>

    <slot name="nav"></slot>
  </header>
`;

export default class Header extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define(tagName, Header);

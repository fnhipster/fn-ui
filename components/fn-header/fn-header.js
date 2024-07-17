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
`;

export default class Header extends HTMLElement {
  static get observedAttributes() {
    return ['next', 'prev', 'menu'];
  }

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const prev = this.getAttribute('prev');
    const next = this.getAttribute('next');
    const menu = this.getAttribute('menu');

    // trigger attributeChangedCallback on empty
    if (!prev) this.setAttribute('prev', '');
    if (!next) this.setAttribute('next', '');
    if (!menu) this.setAttribute('menu', '');
  }

  attributeChangedCallback(name, prev, next) {
    if (prev === next) return;

    switch (name) {
      case 'next':
        this.handleUpdateLink('next', next);
        break;

      case 'prev':
        this.handleUpdateLink('prev', next);
        break;

      case 'menu':
        this.handleUpdateLink('menu', next);
        break;

      default:
        break;
    }
  }

  handleUpdateLink(id, href) {
    const element = this.shadowRoot.querySelector(`#${id}`);
    element.setAttribute('href', href || '');

    if (!href) {
      element.setAttribute('disabled', 'true');
    } else {
      element.removeAttribute('disabled');
    }
  }
}

customElements.define(tagName, Header);

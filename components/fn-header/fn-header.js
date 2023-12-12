const tagName = 'fn-header';

export default class Header extends HTMLElement {
  static get observedAttributes() {
    return ['next', 'prev', 'menu'];
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = /* html */ `
    <style>
        header {
          align-items: center;
          display: flex;
          justify-content: space-between;
          font: var(--typography-accent);
        }

        fn-logo {
          font-size: 3rem;
        }

        nav {
          display: flex;
          gap: var(--spacing-md);
        }
    </style>
    
    <header>
      <fn-link href="/" aria-label="go to start of the line">
        <fn-logo aria-label="fnhipster.com"></fn-logo>
      </fn-link>

      <nav>
        <fn-link id="prev">
          Prev
        </fn-link>

        <fn-link id="menu">
          Go To
        </fn-link>

        <fn-link id="next">
          Next
        </fn-link>
      </nav>
    </header> 
`;
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

if (!customElements.get(tagName)) customElements.define(tagName, Header);

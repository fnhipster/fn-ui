import '../fn-logo/fn-logo.js';
import '../fn-action/fn-action.js';

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

    nav {
      display: flex;
      gap: var(--spacing-md);
      font: var(--font-accent);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-size: 1.4rem;
    }

    fn-action a > em, fn-action button > em {
      background-color: var(--color-fg);
      color: var(--color-bg);
      font-style: normal;
      transition: inherit;
    }
  </style>

  <header>
    <fn-action aria-label="go to start of the line" button="true">
      <a href="/">
        <fn-logo aria-label="fnhipster.com"></fn-logo>
      </a>
    </fn-action>

    <nav></nav>
  </header>
`;

export default class Header extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.addEventListener('set-nav', this.handleSetNav);
  }

  disconnectedCallback() {
    this.removeEventListener('set-nav', this.handleSetNav);
  }

  handleSetNav({ detail }) {
    const nav = this.shadowRoot.querySelector('nav');
    nav.innerHTML = '';

    detail?.forEach(({
      label,
      shortcut,
      disabled,
      href,
      mount,
    }) => {
      const tag = href ? 'a' : 'button';
      const navLink = document.createRange().createContextualFragment(`
        <fn-action button="true" disabled="${disabled}">
          <${tag} ${href ? `href=${href}` : ''}>
            ${label.replace(shortcut, `<em>${shortcut}</em>`)}
          </${tag}>
        </fn-action>
      `);

      const action = navLink.querySelector('fn-action');

      mount?.(action);

      nav.appendChild(action);
    });
  }
}

customElements.define(tagName, Header);

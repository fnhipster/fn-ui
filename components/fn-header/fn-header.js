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
      text-transform: uppercase;
      font-size: 1.4rem;
    }

    fn-action a > em {
      background-color: var(--color-fg);
      color: var(--color-bg);
      font-style: normal;
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
      callback,
    }) => {
      const navLink = document.createRange().createContextualFragment(`
        <fn-action button="true" disabled="${disabled}" data-umami-event="nav-link-click" data-umami-event-url="${href}">
          <a href="${href}">
            ${label.replace(shortcut, `<em>${shortcut}</em>`)}
          </a>
        </fn-action>
      `);

      const action = navLink.querySelector('fn-action');

      if (callback) {
        action.addEventListener('click', (e) => {
          e.preventDefault();
          callback();
        });
      }

      nav.appendChild(action);
    });
  }
}

customElements.define(tagName, Header);

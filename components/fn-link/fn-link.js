const tagName = 'fn-link';

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>
    .link {
      color: var(--color-fg, currentColor);
      display: inline-block;
      position: relative;
      text-decoration: var(--decoration, underline);
      transition: transform 0.1s linear;          
    }

    .link::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      outline: 0.2rem solid var(--color-fg);
      top: 0;
      left: 0;
      box-sizing: border-box;
      opacity: 0;
      transition: opacity 200ms ease-out;
      z-index: -1;
    }

    .link::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: var(--color-fg);
      opacity: 0;
      transition: opacity 0.2s linear;
      z-index: -1;
      outline: 0.2rem solid var(--color-fg);
    }

    .link:focus {
      outline: none;
    }

    .link:not([aria-disabled]) {
      cursor: var(--cursor-pointer, pointer);
    }

    .link:hover:not([aria-disabled]):not(.button)::before {
      opacity: 1;
    }

    .button:hover:not([aria-disabled])::before {
      opacity: 0.5;
    }

    .link.pressed:not([aria-disabled]),
    .link:not([aria-disabled]):active {
      transform: translateY(1px) scale(0.95);
      cursor: var(--cursor-pointer-click, pointer);
    }

    .link:not([aria-disabled]):focus,
    .link.pressed:not([aria-disabled]),
    .link:not([aria-disabled]):active {
      color: var(--color-bg);
    }

    .button:not([aria-disabled]):focus::before {
      opacity: 0.5;
      outline-offset: 0.2rem;
    }

    .link:not([aria-disabled]):not(.button):focus::after,
    .link.pressed:not([aria-disabled]):not(.button),
    .link:not([aria-disabled]):not(.button):active::after {
      opacity: 1;
    }

    .button.pressed:not([aria-disabled]) {
      opacity: 0.8;
    }

    .link[aria-disabled], .button[disabled] {
      opacity: 0.4;
    }

    .button {
      padding: var(--spacing-xs) var(--spacing-sm);
      background: var(--color-fg);
      color: var(--color-bg);
      text-decoration: none;
      font: var(--font-accent);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .button::before {
      opacity: 0;
    }

    .button::after {
      transform: translateY(3px) translateX(4px);
      opacity: 0.35;
      width: 95%;
      height: 95%;
    }

  </style>

  <a class="link">
    <slot></slot>
  </a>
`;

export default class Link extends HTMLElement {
  linkElement = null;

  pressing = false;

  prefetched = false;

  static get observedAttributes() {
    return ['href', 'target', 'prefetch', 'disabled', 'decoration', 'button'];
  }

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(template.content.cloneNode(true));

    this.linkElement = this.shadowRoot.querySelector('a');
  }

  connectedCallback() {
    this._handlePrefetch = this.handlePrefetch.bind(this);
    this._handleKeyDown = this.handleKeyDown.bind(this);
    this._handleKeyUp = this.handleKeyUp.bind(this);

    // add event listeners
    this.linkElement.addEventListener('mousedown', this._handlePrefetch);
    this.linkElement.addEventListener('keydown', this._handleKeyDown);
    this.linkElement.addEventListener('keyup', this._handleKeyUp);
  }

  disconnectedCallback() {
    // remove event listeners
    this.linkElement.removeEventListener('mousedown', this._handlePrefetch);
    this.linkElement.removeEventListener('keydown', this._handleKeyDown);
    this.linkElement.removeEventListener('keyup', this._handleKeyUp);
  }

  attributeChangedCallback(name, prev, next) {
    switch (name) {
      case 'disabled':
        this.handleDisable(next === 'true');
        break;

      case 'prefetch':
        if (next === 'true') this.handlePrefetch();
        break;

      case 'decoration':
        this.style.setProperty('--decoration', next);
        break;

      case 'button':
        if (next === 'true') {
          this.linkElement.classList.add('button');
        } else {
          this.linkElement.classList.remove('button');
        }
        break;

      // default to setting the attribute on the a tag
      default:
        this.linkElement.setAttribute(name, next);
        break;
    }
  }

  handleKeyDown(event) {
    if (this.pressing) return;

    switch (event.key) {
      case 'Enter':
        event.preventDefault();
        this.linkElement.classList.add('pressed');
        this.handlePrefetch(event);
        break;

      default:
        break;
    }

    this.pressing = true;
  }

  handleKeyUp(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.linkElement.classList.remove('pressed');
      this.linkElement.click();
    }

    this.pressing = false;
  }

  handlePrefetch(event) {
    const href = event.currentTarget.getAttribute('href') || '';

    // check if the prefetched link is already in the document
    if (this.dataset.prefetched) return;

    if (!href) return;

    // prefetch only relative links
    if (href.startsWith('#')) return;
    if (/^(http|https):\/\/[^ "]+$/.test(href)) return;

    const prefetchTag = Object.assign(document.createElement('link'), {
      rel: 'prefetch',
      href,
    });

    document.head.append(prefetchTag);
    this.dataset.prefetched = true;
  }

  handleDisable(state = true) {
    if (state === true) {
      this.linkElement.setAttribute('aria-disabled', true);
      this.linkElement.removeAttribute('href');
    } else {
      this.linkElement.removeAttribute('aria-disabled');
      this.linkElement.setAttribute('href', this.getAttribute('href'));
    }
  }
}

customElements.define(tagName, Link);

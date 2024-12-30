const tagName = 'fn-link';

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>
    ::slotted(a) {
      color: var(--color-fg, currentColor);
      position: relative;
      text-decoration: var(--decoration, underline);
      transition: transform 0.1s linear;    
      display: inline-flex;
      justify-content: center;  
    }

    ::slotted(a)::before {
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

    ::slotted(a)::after {
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

    ::slotted(a:focus) {
      outline: none;
    }

    ::slotted(a:not([aria-disabled])) {
      cursor: var(--cursor-pointer, pointer);
    }

    ::slotted(a:hover:not([aria-disabled]):not(.button))::before {
      opacity: 1;
    }

    ::slotted(.button:hover:not([aria-disabled]))::before {
      opacity: 0.5;
      outline-offset: 0.2rem;
    }

    ::slotted(a.pressed:not([aria-disabled])),
    ::slotted(a:not([aria-disabled]):active) {
      transform: translateY(1px) scale(0.95);
      cursor: var(--cursor-pointer-click, pointer);
    }

    ::slotted(a:not([aria-disabled]):focus),
    ::slotted(a.pressed:not([aria-disabled])),
    ::slotted(a:not([aria-disabled]):active) {
      color: var(--color-bg);
    }

    ::slotted(.button:not([aria-disabled]):focus)::before {
      opacity: 0.5;
      outline-offset: 0.2rem;
    }

    ::slotted(a:not([aria-disabled]):not(.button):focus)::after,
    ::slotted(a.pressed:not([aria-disabled]):not(.button))::after,
    ::slotted(a:not([aria-disabled]):not(.button):active)::after {
      opacity: 1;
    }

    ::slotted(a.button.pressed:not([aria-disabled])) {
      opacity: 0.8;
    }
    
    ::slotted(a[aria-disabled]), ::slotted(.button[disabled]) {
      opacity: 0.4;
    }

    ::slotted(.button) {
      background: var(--color-fg);
      color: var(--color-bg);
      display: inline-flex;
      font: var(--font-accent);
      gap: var(--spacing-xs); 
      justify-content: center;
      letter-spacing: 0.05em;
      padding: var(--spacing-xs) var(--spacing-sm);
      text-decoration: none;
      text-transform: uppercase;
    }

    ::slotted(.button)::before {
      opacity: 0;
    }

    ::slotted(.button)::after {
      opacity: 1;
      transform: translateY(2px) translateX(5px);
      opacity: 0.35;
      width: 95%;
      height: 95%;
    }    
  </style>

  <slot></slot>
`;

export default class Link extends HTMLElement {
  linkElement = null;

  pressing = false;

  prefetched = false;

  shortcut = null;

  static get observedAttributes() {
    return ['href', 'target', 'prefetch', 'disabled', 'decoration', 'button', 'focus'];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.linkElement = this.querySelector('a');
    this.shortcut = this.linkElement.querySelector('em')?.textContent;

    this._handlePrefetch = this.handlePrefetch.bind(this);
    this._handleKeyDown = this.handleKeyDown.bind(this);
    this._handleKeyUp = this.handleKeyUp.bind(this);
    this._handleShortcutKeyDown = this.handleShortcutKeyDown.bind(this);
    this._handleShortcutKeyUp = this.handleShowtcutKeyUp.bind(this);

    // add event listeners
    this.linkElement.addEventListener('mousedown', this._handlePrefetch);
    this.linkElement.addEventListener('keydown', this._handleKeyDown);
    this.linkElement.addEventListener('keyup', this._handleKeyUp);

    // listen to keydown that matches the shortcut
    if (this.shortcut) {
      document.addEventListener('keydown', this._handleShortcutKeyDown);
      document.addEventListener('keyup', this._handleShortcutKeyUp);
    }

    // this.decorateShortcut();

    // trigger attributeChangedCallback for initial values
    Link.observedAttributes.forEach((attr) => {
      if (this.hasAttribute(attr)) {
        this.attributeChangedCallback(attr, null, this.getAttribute(attr));
      }
    });
  }

  disconnectedCallback() {
    // remove event listeners
    this.linkElement.removeEventListener('mousedown', this._handlePrefetch);
    this.linkElement.removeEventListener('keydown', this._handleKeyDown);
    this.linkElement.removeEventListener('keyup', this._handleKeyUp);

    if (this.shortcut) {
      document.removeEventListener('keydown', this._handleShortcutKeyDown);
      document.removeEventListener('keyup', this._handleShortcutKeyUp);
    }
  }

  attributeChangedCallback(name, prev, next) {
    if (!this.linkElement) return;

    switch (name) {
      case 'disabled':
        this.handleDisable(next === 'true');
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

      case 'focus':
        if (next === 'true') {
          this.linkElement.focus();
        }
        break;

      // default to setting the attribute on the a tag
      default:
        this.linkElement.setAttribute(name, next);
        break;
    }
  }

  handleShortcutKeyDown(event) {
    if (this.pressing) return;
    if (event.key.toLowerCase() === this.shortcut.toLowerCase()) {
      this.pressing = true;
      this.linkElement.classList.add('pressed');
      this.handlePrefetch(event);
    }
  }

  handleShowtcutKeyUp(event) {
    if (!this.pressing) return;

    if (event.key.toLowerCase() === this.shortcut.toLowerCase()) {
      this.linkElement.classList.remove('pressed');
      this.linkElement.click();
      this.pressing = false;
    }
  }

  decorateShortcut() {
    if (!this.shortcut) return;
    // find first letter that matches shortcut in link text and wrap it in a span
    const sI = this.linkElement.textContent.toLowerCase().indexOf(this.shortcut.toLowerCase());
    const text = this.linkElement.textContent;
    const before = text.slice(0, sI);
    const after = text.slice(sI + this.shortcut.length);
    this.linkElement.innerHTML = `${before}<em class="link-shortcut">${this.shortcut}</em>${after}`;
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

  handlePrefetch() {
    const href = this.linkElement.getAttribute('href') || '';

    // check if the prefetched link is already in the document
    if (this.dataset.prefetched) return;

    if (!href) return;

    // prefetch only relative links
    if (href.startsWith('#')) return;
    if (/^(http|https):\/\/[^ "]+$/.test(href) && new URL(href).origin !== window.origin) return;

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

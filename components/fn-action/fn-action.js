const tagName = 'fn-action';

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>  
    :host {
      display: inline-block;
    }
    
    ::slotted(a),
    ::slotted(button) {
      color: var(--color-fg, currentColor);
      background: none;
      border: none;
      text-decoration: var(--decoration, underline);
      outline-offset: 0.2rem;
      transition: transform 50ms ease-in, background-color 200ms ease, color 200ms ease;
      padding: 0;
      width: 100%;
      box-sizing: border-box;
    }


    ::slotted(a:not([aria-disabled])),
    ::slotted(button:not(:disabled)) {
      cursor: var(--cursor-pointer, pointer);
    }

    ::slotted(a:not([aria-disabled]):hover),
    ::slotted(button:not(:disabled):hover) {
      outline: 0.2rem solid var(--color-fg);
    }

    ::slotted(.button) {
      display: inline-flex;
      font: var(--font-accent);
      letter-spacing: 0.05em;
      font-size: var(--font-accent-md);
      justify-content: center;
      text-decoration: none;
      text-transform: uppercase;
    }
  
    ::slotted(.button.fill) {
      background: var(--color-fg);
      color: var(--color-bg);
      padding: var(--spacing-xs) var(--spacing-sm);
      position: relative;
    }

    ::slotted(.button.fill)::after {
      content: '';
      background-color: color-mix(in srgb, var(--color-fg) 30%, var(--color-bg));
      transform: translateY(0.3rem) translateX(0.3rem);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }

    ::slotted(.button.fill:hover), 
    ::slotted(.button.fill:focus) {
      outline: 0.2rem solid var(--color-fg);
    }

    ::slotted(a:not([aria-disabled]):not(.fill):focus),
    ::slotted(button:not(:disabled):not(.fill):focus),
    ::slotted(a:not([aria-disabled]):not(.fill):active),
    ::slotted(button:not(:disabled):not(.fill):active),
    ::slotted(a:not([aria-disabled]).pressed),
    ::slotted(button:not(:disabled).pressed) {
      color: var(--color-bg);
      background: var(--color-fg);
      outline: none;
    }

    ::slotted(a:not([aria-disabled]):focus),
    ::slotted(button:not(:disabled):focus) {
      cursor: var(--cursor-pointer, pointer) !important;
    }

    ::slotted(a:not([aria-disabled]):active), 
    ::slotted(button:not(:disabled):active), 
    ::slotted(a:not([aria-disabled]).pressed), 
    ::slotted(button:not(:disabled).pressed) {
      transform: translateY(1px) scale(0.97);
      cursor: var(--cursor-pointer-click, pointer) !important;
      outline: none !important;
    }

    ::slotted(a:not([aria-disabled]):active)::after, 
    ::slotted(button:not(:disabled):active)::after, 
    ::slotted(a:not([aria-disabled]).pressed)::after, 
    ::slotted(button:not(:disabled).pressed)::after {
      opacity: 0;
    }

    ::slotted(a[aria-disabled]),
    ::slotted(button:disabled) {
      opacity: 0.5;
      pointer-events: none;
    }
  </style>

  <slot></slot>
`;

export default class Action extends HTMLElement {
  elem = null;

  pressing = false;

  shortcut = null;

  disabled = false;

  ignoreElements = ['input', 'textarea', 'select'];

  href;

  static get observedAttributes() {
    return [
      'disabled',
      'decoration',
      'button',
      'fill',
      'focus',
    ];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.elem = this.querySelector('a, button');
    this.shortcut = this.elem.querySelector('em')?.textContent;

    this._handleMouseDown = this.handleMouseDown.bind(this);
    this._handleKeyDown = this.handleKeyDown.bind(this);
    this._handleKeyUp = this.handleKeyUp.bind(this);
    this._handleShortcutKeyDown = this.handleShortcutKeyDown.bind(this);
    this._handleShortcutKeyUp = this.handleShortcutKeyUp.bind(this);

    // add event listeners
    this.elem.addEventListener('mousedown', this._handleMouseDown);
    this.elem.addEventListener('keydown', this._handleKeyDown);
    this.elem.addEventListener('keyup', this._handleKeyUp);

    // listen to keydown that matches the shortcut
    if (this.shortcut) {
      document.addEventListener('keydown', this._handleShortcutKeyDown);
      document.addEventListener('keyup', this._handleShortcutKeyUp);
    }

    // trigger attributeChangedCallback for initial values
    Action.observedAttributes.forEach((attr) => {
      if (this.hasAttribute(attr)) {
        this.attributeChangedCallback(attr, null, this.getAttribute(attr));
      }
    });
  }

  disconnectedCallback() {
    // remove event listeners
    this.elem.removeEventListener('mousedown', this._handleMouseDown);
    this.elem.removeEventListener('keydown', this._handleKeyDown);
    this.elem.removeEventListener('keyup', this._handleKeyUp);

    if (this.shortcut) {
      document.removeEventListener('keydown', this._handleShortcutKeyDown);
      document.removeEventListener('keyup', this._handleShortcutKeyUp);
    }
  }

  attributeChangedCallback(name, prev, next) {
    if (!this.elem) return;

    switch (name) {
      case 'disabled':
        this.handleDisable(next === 'true');
        break;

      case 'decoration':
        this.style.setProperty('--decoration', next);
        break;

      case 'button':
        if (next === 'true') {
          this.elem.classList.add('button');
        } else {
          this.elem.classList.remove('button');
        }
        break;

      case 'focus':
        if (next === 'true') {
          this.elem.focus();
        }
        break;

      case 'fill':
        if (next === 'true') {
          this.elem.classList.add('fill');
        } else {
          this.elem.classList.remove('fill');
        }
        break;

      default:
        break;
    }
  }

  handleShortcutKeyDown(event) {
    const [origin] = event.composedPath();
    if (this.ignoreElements.includes(origin.tagName.toLowerCase())) return;
    if (this.disabled) return;
    if (this.pressing) return;
    if (event.key.toLowerCase() === this.shortcut.toLowerCase()) {
      const href = this.elem.getAttribute('href');

      this.pressing = true;
      this.elem.classList.add('pressed');
      if (href) {
        this.handlePrefetch(href);
      }
    }
  }

  handleShortcutKeyUp(event) {
    if (this.ignoreElements.includes(event.target.tagName.toLowerCase())) return;
    if (this.disabled) return;
    if (!this.pressing) return;

    if (event.key.toLowerCase() === this.shortcut.toLowerCase()) {
      this.elem.classList.remove('pressed');
      this.elem.click();
      this.pressing = false;
    }
  }

  handleMouseDown() {
    if (this.disabled) return;
    const href = this.elem.getAttribute('href');

    if (href) {
      this.handlePrefetch(href);
    }
  }

  handleKeyDown(event) {
    if (this.disabled) return;
    if (this.pressing) return;

    const href = this.elem.getAttribute('href');

    switch (event.key) {
      case 'Enter':
        event.preventDefault();
        this.elem.classList.add('pressed');

        if (href) {
          this.handlePrefetch(href);
        }

        break;

      default:
        break;
    }

    this.pressing = true;
  }

  handleKeyUp(event) {
    if (this.disabled) return;

    if (event.key === 'Enter') {
      event.preventDefault();
      this.elem.classList.remove('pressed');
      this.elem.click();
    }

    this.pressing = false;
  }

  handlePrefetch(href) {
    // check if the prefetched link is already in the document
    if (this.dataset.prefetched) return;

    if (!href) return;

    // prefetch only relative links
    if (href.startsWith('#')) return;
    if (
      /^(http|https):\/\/[^ "]+$/.test(href) &&
      new URL(href).origin !== window.origin
    ) return;

    const prefetchTag = Object.assign(document.createElement('link'), {
      rel: 'prefetch',
      href,
    });

    document.head.append(prefetchTag);
    this.dataset.prefetched = true;
  }

  handleDisable(state = true) {
    this.disabled = state;

    if (state === true) {
      if (this.elem.tagName === 'A') {
        this.elem.setAttribute('aria-disabled', true);
        this.elem.removeAttribute('href');
      } else {
        this.elem.setAttribute('disabled', true);
      }
    } else if (this.elem.tagName === 'A') {
      const href = this.elem.getAttribute('href');
      this.elem.removeAttribute('aria-disabled');
      this.elem.setAttribute('href', href);
    } else {
      this.elem.removeAttribute('disabled');
    }
  }
}

customElements.define(tagName, Action);

const tagName = 'fn-image';

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>
    :host {
      background: currentColor;
      display: inline-block;
      line-height: 0;
    }

    .wrapper {
      position: relative;
      display: inline-block;
      opacity: 0;
      transition: opacity 100ms ease-in-out;
    }

    .glow {
      filter: blur(1.1rem) opacity(0.5);
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: -1;
      height: 100%;
    }

    .glow img {
      width: 100%;
      height: 100%;
    }

    .wrapper {
      width: 100%;
      display: block;
    }
  </style>

  <div class="wrapper">
    <slot class="image"></slot>
  </div>
`;

export default class Image extends HTMLElement {
  slot = null;

  initialized = false;

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.image = this.querySelector('img');

    if (this.image?.complete && this.initialized === false) {
      this.initialize();
    } else {
      this.image?.addEventListener('load', this.initialize.bind(this));
    }
  }

  disconnectedCallback() {
    this.image?.removeEventListener('load', this.initialize);
  }

  initialize() {
    this.initialized = true;

    const wrapper = this.shadowRoot.querySelector('.wrapper');
    const child = this.querySelector(':scope > img, :scope > picture');
    const img = this.querySelector('img');

    if (!img) return;

    // glow effect
    const glow = child.cloneNode(true);
    glow.classList.add('glow');
    glow.setAttribute('aria-hidden', 'true');
    wrapper.append(glow);

    wrapper.style.opacity = 1;
  }
}

customElements.define(tagName, Image);

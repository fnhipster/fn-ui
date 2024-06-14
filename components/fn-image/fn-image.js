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
      filter: blur(2rem) opacity(0.5);
      transform: scaleX(-1);
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: -1;
    }

    .wrapper {
      width: 100%;
      display: block;
    }
  </style>

  <div class="wrapper">
      <slot class="image"></slot>
      <canvas class="glow" aria-hidden></canvas>
  </div>
`;

export default class Image extends HTMLElement {
  slot = null;

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.image = this.querySelector('img');

    if (this.image?.complete) {
      this.initialize();
    } else {
      this.image?.addEventListener('load', this.initialize.bind(this));
    }
  }

  disconnectedCallback() {
    this.image?.removeEventListener('load', this.initialize);
  }

  initialize() {
    const wrapper = this.shadowRoot.querySelector('.wrapper');

    const canvas = this.shadowRoot.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    if (ctx) {
      // Set the canvas width and height to match the image
      const { width, height } = this.image;

      canvas.width = width;
      canvas.height = height;

      // Translate to the center of the canvas
      ctx.translate(width, 0);

      // Scale the x by -1, effectively flipping the context
      ctx.scale(-1, 1);

      // Draw the image to the canvas
      ctx.drawImage(this.image, 0, 0, width, height);
    }

    wrapper.style.opacity = 1;
  }
}

customElements.define(tagName, Image);

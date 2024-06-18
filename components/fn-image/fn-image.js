const tagName = 'fn-image';

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>
    :host {
      --transition-loaded: opacity 250ms ease-in;
      --transition-after-loaded: opacity 250ms ease-out 250ms;
      background: currentColor;
      display: inline-block;
      line-height: 0;
    }

    .wrapper {
      position: relative;
      display: inline-block;
      transition: var(--transition-loaded);
      width: 100%;
      opacity: 0;
    }

    .wrapper.loaded {
      opacity: 1;
    }

    .glow {
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0;
      transition: var(--transition-after-loaded);
    }

    .glow.loaded {
      opacity: 1;
    }

    .poster {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: var(--transition-after-loaded);
    }

    .poster.loaded {
      opacity: 0;
    }

    .poster, .glow {
      user-select: none;
    }
  </style>

  <div class="wrapper">
    <canvas id="poster" class="poster" aria-hidden></canvas>
    <slot class="image"></slot>
    <canvas id="glow" class="glow" aria-hidden></canvas>
  </div>
`;

export default class Image extends HTMLElement {
  loaded = false;

  intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!this.loaded && entry.isIntersecting) {
        this.load();
      }
    });
  });

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.image = this.querySelector('img');

    // initialize on image load
    if (this.image?.complete) {
      this.initialize();
    } else {
      this.image?.addEventListener('load', this.initialize.bind(this));
    }
  }

  disconnectedCallback() {
    // remove event listeners
    this.image?.removeEventListener('load', this.initialize.bind(this));

    // stop observing intersection
    this.intersectionObserver.unobserve(this);
  }

  initialize() {
    // observe intersection
    this.intersectionObserver.observe(this);
  }

  load() {
    this.loaded = true;
    
    const wrapper = this.shadowRoot.querySelector('.wrapper');

    this.poster();
    this.glow();

    wrapper.classList.add('loaded');
    console.log('Loaded', this.image);
  }

  poster() {
    const canvas = this.shadowRoot.querySelector('canvas#poster');
    const ctx = canvas.getContext('2d');

    // Set the canvas width and height to match the image
    const { width, height } = this.image;
    canvas.width = width;
    canvas.height = height;

    // Draw the image to the canvas
    const pixels = 0.2;
    const w = width * pixels;
    const h = height * pixels;

    ctx.drawImage(this.image, 0, 0, w, h);

    // turn off image aliasing
    ctx.msImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    // draw the image back to the canvas
    ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);

    // transition the poster canvas
    canvas.classList.add('loaded');
  }

  glow() {
    const canvas = this.shadowRoot.querySelector('canvas#glow');
    const ctx = canvas.getContext('2d');

    // Set the canvas width and height to match the image
    const { width, height } = this.image;
    canvas.width = width;
    canvas.height = height;

    // apply a blur filter to the image
    canvas.style.filter = 'blur(1.5rem) opacity(0.5)';

    ctx.drawImage(this.image, 0, 0, width, height);

    canvas.classList.add('loaded');
  }
}

customElements.define(tagName, Image);

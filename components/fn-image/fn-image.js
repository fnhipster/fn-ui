const tagName = 'fn-image';

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>
    :host {
      --transition-after-loaded: opacity 250ms ease-out;
      background: var(--color-fg);
      display: inline-block;
      line-height: 0;
    }

    .wrapper {
      position: relative;
      display: inline-block;
      width: 100%;
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

    .loaded .poster {
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

export default class FnImage extends HTMLElement {
  loaded = false;

  poster = false;

  posterSrc = null;

  glow = false;

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  async connectedCallback() {
    if (this.loaded) return;

    this.image = this.querySelector('img');

    this.posterSrc = this.getAttribute('poster') ?? null;

    if (this.posterSrc && !this.poster) await this.loadPoster();

    if (this.image?.complete) {
      this.load();
    } else {
      this.image?.addEventListener('load', this.load.bind(this));
    }
  }

  disconnectedCallback() {
    // remove event listeners
    this.image?.removeEventListener('load', this.load.bind(this));
  }

  load() {
    const wrapper = this.shadowRoot.querySelector('.wrapper');

    wrapper.classList.add('loaded');

    console.log('Loaded', this.image);
    this.loaded = true;
    
    if (!this.glow) this.loadGlow();
  }

  async loadPoster() {
    return new Promise((resolve) => {
      const canvas = this.shadowRoot.querySelector('canvas#poster');
      const ctx = canvas.getContext('2d');

      // Set the canvas width and height to match the image
      const { width, height } = this.image;
      canvas.width = width;
      canvas.height = height;

      // Download poster image
      const poster = new Image();
      poster.src = this.posterSrc;

      // TODO: move to add
      poster.onload = () => {        
        // Draw the image to the canvas
        const pixels = 0.05;
        const w = width * pixels;
        const h = height * pixels;

        ctx.drawImage(poster, 0, 0, w, h);

        // turn off image aliasing
        ctx.msImageSmoothingEnabled = false;
        ctx.mozImageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.imageSmoothingEnabled = false;

        // draw the image back to the canvas
        ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);

        // tint
        const computedStyle = getComputedStyle(this);
        const color = computedStyle.getPropertyValue('--color-fg');
        ctx.globalCompositeOperation = 'color';
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        this.poster = true;
        canvas.classList.add('loaded');
        resolve();
        console.log('Loaded poster', this.poster);
      };
    });
  }

  // TODO
  loadGlow() {
    const canvas = this.shadowRoot.querySelector('canvas#glow');
    const ctx = canvas.getContext('2d');

    // Set the canvas width and height to match the image
    const { width, height } = this.image;
    canvas.width = width;
    canvas.height = height;

    // apply a blur filter to the image
    canvas.style.filter = 'blur(1.5rem) opacity(0.5)';

    ctx.drawImage(this.image, 0, 0, width, height);

    this.glow = true;
    canvas.classList.add('loaded');
    console.log('Loaded glow');
  }
}

customElements.define(tagName, FnImage);

const tagName = 'fn-image';

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>
    :host {
      --corner: 1rem;
      --transition-after-loaded: opacity .35s ease-in .5s;
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

    .inline-wrapper {
      background: var(--color-fg);
      clip-path: polygon(0 var(--corner),var(--corner) 0,calc(100% - var(--corner)) 0,100% var(--corner),100% calc(100% - var(--corner)),calc(100% - var(--corner)) 100%,var(--corner) 100%,0 calc(100% - var(--corner)));
    }
  </style>

  <div class="wrapper">
    <div class="inline-wrapper">
      <canvas id="poster" class="poster" aria-hidden></canvas>
      <slot class="image"></slot>
    </div>
    <canvas id="glow" class="glow" aria-hidden></canvas>
  </div>
`;

export default class FnImage extends HTMLElement {
  loaded = false;

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const wrapper = this.shadowRoot.querySelector('.wrapper');

        wrapper.classList.add('loaded');

        this.handleGlow();

        this.loaded = true;

        this.observer.disconnect();
      }
    });
  });

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  async connectedCallback() {
    if (this.loaded) return;

    this.image = this.querySelector('img');

    this._handlePoster = this.handlePoster.bind(this);

    this._handleLoad = () => {
      this.observer.observe(this.image);
    };

    // Poster
    const poster = this.getAttribute('poster');

    if (poster) {
      this.image?.style.setProperty('visibility', 'hidden');
      this.poster = new Image();
      this.poster.src = poster;

      if (this.poster.complete) {
        this._handlePoster();
      } else {
        this.poster.addEventListener('load', this._handlePoster);
      }
    }

    // Image
    if (this.image?.complete) {
      this._handleLoad();
    } else {
      this.image?.addEventListener('load', this._handleLoad);
    }
  }

  disconnectedCallback() {
    // remove event listeners
    this.image?.removeEventListener('load', this._handleLoad);
    this.poster?.removeEventListener('load', this._handlePoster);

    // disconnect the observer
    this.observer.disconnect();
  }

  handlePoster() {
    const canvas = this.shadowRoot.querySelector('canvas#poster');
    const ctx = canvas.getContext('2d');

    // Set the canvas width and height to match the image
    const { width, height } = this.image;
    canvas.width = width;
    canvas.height = height;

    // Draw the image to the canvas
    const pixels = 0.05;
    const w = canvas.width * pixels;
    const h = canvas.height * pixels;

    ctx.drawImage(this.poster, 0, 0, w, h);

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

    canvas.classList.add('loaded');
    this.image.style?.setProperty('visibility', 'visible');
  }

  handleGlow() {
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

customElements.define(tagName, FnImage);

const tagName = 'fn-icon';

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>
    :host {
      display: inline-flex;
      align-items: center;
      line-height: 0;
    }

    :host(.disabled) {
      opacity: 0.5;
    }
    
    span {
      line-height: 0;
    }

    :host([active]) svg {
      fill: currentColor;
    }
  </style>
  <span></span>
`;

export default class Icon extends HTMLElement {
  icons = {
    heart: () => import('./icons/heart.js'),
    external: () => import('./icons/external.js'),
    link: () => import('./icons/link.js'),
    viewed: () => import('./icons/viewed.js'),
    rss: () => import('./icons/rss.js'),
    spotify: () => import('./icons/spotify.js'),
    dreams: () => import('./icons/dreams.js'),
    constructs: () => import('./icons/constructs.js'),
    echoes: () => import('./icons/echoes.js'),
    'apple-music': () => import('./icons/apple-music.js'),
  };

  static get observedAttributes() {
    return ['icon', 'disabled', 'label', 'width', 'height'];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.setAttribute('role', 'img');
  }

  attributeChangedCallback(name, prev, next) {
    const $svg = this.shadowRoot.querySelector('svg');
    if (name === 'icon') {
      this.icons[next.toLowerCase()]()
        .then((icon) => {
          this.shadowRoot.querySelector('span').innerHTML = icon.default?.trim();
          this.shadowRoot.querySelector('svg').setAttribute('width', this.getAttribute('width') || '1em');
          this.shadowRoot.querySelector('svg').setAttribute('height', this.getAttribute('height') || '1em');
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.warn('Icon not found', error);
        });
    }

    if (name === 'disabled') {
      // eslint-disable-next-line wc/no-self-class
      this.classList.toggle('disabled', next === 'true');
    }

    if (name === 'label') {
      this.setAttribute('aria-label', next);
    }

    if (name === 'width') {
      if ($svg) {
        $svg.setAttribute('width', next);
      }
    }

    if (name === 'height') {
      if ($svg) {
        $svg.setAttribute('height', next);
      }
    }
  }
}

customElements.define(tagName, Icon);

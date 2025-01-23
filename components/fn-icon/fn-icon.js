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
    'apple-music': () => import('./icons/apple-music.js'),
  };

  static get observedAttributes() {
    return ['icon', 'disabled', 'label'];
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
    if (name === 'icon') {
      this.icons[next.toLowerCase()]()
        .then((icon) => {
          this.shadowRoot.querySelector('span').innerHTML = icon.default?.trim();
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
  }
}

customElements.define(tagName, Icon);

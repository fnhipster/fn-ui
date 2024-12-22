import '../fn-button/fn-button.js';

const tagName = 'fn-share';

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>
    .fnh-share svg {
      width: 1em;
      height: 1em;
    }
  </style>
    
  <fn-button class="fnh-share">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 206.36 203.48">
      <defs>
        <style>
          .cls-1 {
            stroke-linecap: square;
            stroke-linejoin: bevel;
          }

          .cls-1, .cls-2 {
            fill: none;
            stroke: currentColor;
            stroke-width: 14px;
          }

          .cls-2 {
            stroke-miterlimit: 10;
          }
        </style>
      </defs>
      <polyline class="cls-2" points="105.7 30.05 7 30.05 7 196.48 177.03 196.48 177.03 92.02"/>
      <polyline class="cls-1" points="92.02 116.51 199.36 7 133.08 7"/>
      <line class="cls-1" x1="199.36" y1="78.33" x2="199.36" y2="7"/>
    </svg>
  </fn-button>
`;

export default class Share extends HTMLElement {
  static get observedAttributes() {
    return ['title', 'text', 'url'];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('.fnh-share').addEventListener('click', this.share.bind(this));
  }

  share() {
    if (navigator.share) {
      navigator.share({
        title: this.getAttribute('title'),
        text: this.getAttribute('text'),
        url: this.getAttribute('url'),
      });
    } else {
      navigator.clipboard.writeText(this.getAttribute('url'));
    }
  }
}

customElements.define(tagName, Share);

import '../fn-button/fn-button.js';

const tagName = 'fn-share';

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>
    .fnh-share {
      line-height: 0;
    }
  </style>
    
  <fn-button class="fnh-share">
    <svg width="1.2em" height="1.2em" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M200.66,352H144a96,96,0,0,1,0-192h55.41" style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"/>
      <path d="M312.59,160H368a96,96,0,0,1,0,192H311.34" style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"/>
      <line x1="169.07" y1="256" x2="344.93" y2="256" style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"/>
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
    this.shadowRoot
      .querySelector('.fnh-share')
      .addEventListener('click', this.share.bind(this));
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

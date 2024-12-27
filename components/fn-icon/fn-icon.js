const tagName = 'fn-icon';

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>
    :host {
      display: inline-flex;
      align-items: center;
      line-height: 0;
    }
    
    span {
      line-height: 0;
    }
  </style>
  <span></span>
`;

export default class Icon extends HTMLElement {
  icons = {
    external: /* html */ `
      <svg fill="currentColor" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 3.5L8.5 9 7 7.5 12.5 2H10V0h6v6h-2V3.5zM6 0v2H2v12h12v-4h2v6H0V0h6z" fill-rule="evenodd"/>
      </svg>
    `,
    link: /* html */ `
      <svg width="1.2em" height="1.2em" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M200.66,352H144a96,96,0,0,1,0-192h55.41" style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"/>
        <path d="M312.59,160H368a96,96,0,0,1,0,192H311.34" style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"/>
        <line x1="169.07" y1="256" x2="344.93" y2="256" style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"/>
      </svg>
    `,
  };

  static get observedAttributes() {
    return ['icon'];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  attributeChangedCallback(name, prev, next) {
    if (name === 'icon') {
      this.shadowRoot.querySelector('span').innerHTML = this.icons[next];
    }
  }
}

customElements.define(tagName, Icon);

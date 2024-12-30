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
    viewed: /* html */ `
      <svg width="1.4em" height="1.4em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4933 6.93502C15.8053 7.20743 15.8374 7.68122 15.565 7.99325L7.70786 16.9933C7.56543 17.1564 7.35943 17.25 7.14287 17.25C6.9263 17.25 6.72031 17.1564 6.57788 16.9933L3.43502 13.3933C3.16261 13.0812 3.19473 12.6074 3.50677 12.335C3.8188 12.0626 4.29259 12.0947 4.565 12.4068L7.14287 15.3596L14.435 7.00677C14.7074 6.69473 15.1812 6.66261 15.4933 6.93502Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5175 7.01946C20.8174 7.30513 20.829 7.77986 20.5433 8.07981L11.9716 17.0798C11.8201 17.2389 11.6065 17.3235 11.3872 17.3114C11.1679 17.2993 10.9649 17.1917 10.8318 17.0169L10.4035 16.4544C10.1526 16.1249 10.2163 15.6543 10.5458 15.4034C10.8289 15.1878 11.2161 15.2044 11.4787 15.4223L19.4571 7.04531C19.7428 6.74537 20.2175 6.73379 20.5175 7.01946Z" fill="currentColor"/>
      </svg>
    `,
  };

  static get observedAttributes() {
    return ['icon', 'disabled'];
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

    if (name === 'disabled') {
      this.style.opacity = next ? 0.5 : 1;
    }
  }
}

customElements.define(tagName, Icon);

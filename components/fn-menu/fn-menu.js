import '../fn-binary/fn-binary.js';

const tagName = 'fn-menu';

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>
      ul {
        display: grid;
      }

  </style>
    
  <nav>
    <slot name="links"></slot>
  </nav>
`;

export default class Menu extends HTMLElement {
  static get observedAttributes() {
    return ['selected'];
  }

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  // connectedCallback() {
  //   const selected = this.getAttribute('selected');

  //   if (selected) {
  //     this.handleSelected(parseInt(selected, 10));
  //   }
  // }

  attributeChangedCallback(name, prev, next) {
    if (prev === next) return;

    switch (name) {
      case 'selected':
        this.handleSelected(parseInt(next, 10));
        break;
      default:
        break;
    }
  }

  handleSelected(selected) {
    const links = this.querySelectorAll('fn-link');

    links?.forEach((link, index) => {
      if (index === selected) {
        link.setAttribute('selected', '');
      } else {
        link.removeAttribute('selected');
      }
    });
  }
}

customElements.define(tagName, Menu);

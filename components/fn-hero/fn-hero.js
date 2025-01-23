const tagName = 'fn-hero';

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>
    :host {
      display: block;
      position: relative;
      line-height: 0;
    }

    .title {
      bottom: 0;
      box-sizing: border-box;
      display: inline;
      left: 0;
      width: 100%;
      padding: 0 var(--margin);
      position: absolute;
      text-shadow: 0 0 .8em var(--color-bg);
    }

    fn-image {
      display: block;
    }

    .image::slotted(*) {
      width: 100%;
      height: auto;
      display: block;
    }    
  </style>

  <slot class="image" name="image"></slot>
    
  <slot class="title" name="title"></slot>
`;

export default class Hero extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.image = this.querySelector('img');

    this.image.style.width = '100%';
    this.image.style.height = 'auto';
  }
}

customElements.define(tagName, Hero);

const tagName = 'fn-hero';

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>
    :host {
      display: block;
      position: relative;
      /*
      margin-left: calc(var(--margin) * -1);
      width: calc(100% + var(--margin) * 2);
      */
      line-height: 0;
    }

    .title::slotted(h1) {
      bottom: 0.1em;
      box-sizing: border-box;
      display: inline;
      font: var(--font-heading) !important;
      font-size: 7rem !important;
      left: 0;
      margin: 0 !important;
      max-width: 90%;
      padding: var(--margin);
      position: absolute;
      text-shadow: 0 0 .8em var(--color-bg);
      text-transform: uppercase !important;
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

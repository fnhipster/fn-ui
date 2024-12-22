const tagName = 'fn-button';

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>
    .fnh-button {
      background: none;
      border: 0 none;
      padding: var(--spacing-xs);
      color: var(--color-fg, currentColor);
      display: inline-block;
      position: relative;
      transition: transform 0.1s linear;          
    }

    .fnh-button::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      outline: 0.2rem solid var(--color-fg);
      top: 0;
      left: 0;
      box-sizing: border-box;
      opacity: 0;
      transition: opacity 200ms ease-out;
      z-index: -1;
    }

    .fnh-button::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: var(--color-fg);
      opacity: 0;
      transition: opacity 0.2s linear;
      z-index: -1;
      outline: 0.2rem solid var(--color-fg);
    }

    .fnh-button:focus {
      outline: none;
    }

    .fnh-button:not([aria-disabled]) {
      cursor: var(--cursor-pointer, pointer);
    }

    .fnh-button:hover:not([aria-disabled])::before {
      opacity: 1;
    }

    .fnh-button:not([aria-disabled]):active {
      transform: translateY(1px) scale(0.95);
      cursor: var(--cursor-pointer-click, pointer);
    }

    .fnh-button:not([aria-disabled]):focus,
    .fnh-button:not([aria-disabled]):active {
      color: var(--color-bg);
    }

    .fnh-button:not([aria-disabled]):focus::after,
    .fnh-button:not([aria-disabled]):active::after {
      opacity: 1;
    }

    .fnh-button[aria-disabled] {
      opacity: 0.4;
    }

    slot {
      display: inline-block;
    }
  </style>
    
  <button class="fnh-button">
    <slot></slot>
  </button>
`;

export default class Button extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define(tagName, Button);

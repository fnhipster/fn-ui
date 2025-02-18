import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11.4.1/+esm';

const tagName = 'fn-mermaid';
const template = document.createElement('template');

template.innerHTML = /* html */ `
  <slot name="code"></slot>
`;

export default class Mermaid extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const pre = this.querySelector('pre');

    if (!pre) {
      throw new Error('fn-mermaid: no <pre> element found');
    }

    this.init();

    mermaid.run({
      nodes: [pre],
      securityLevel: 'loose',
    });
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
    const primaryColor = this.getAttribute('primary-color') || getComputedStyle(document.documentElement).getPropertyValue('--color-fg').trim();
    const primaryTextColor = this.getAttribute('secondary-color') || getComputedStyle(document.documentElement).getPropertyValue('--color-bg').trim();
    const primaryBorderColor = primaryColor;
    const lineColor = primaryColor;
    const secondaryColor = this.getAttribute('secondary-color') || getComputedStyle(document.documentElement).getPropertyValue('--color-bg').trim();
    const tertiaryColor = secondaryColor;
    const fontFamily = getComputedStyle(this).getPropertyValue('--font-family').trim();
    const textColor = primaryColor;
    const actorLineColor = `color-mix(in srgb, ${primaryColor} 40%, ${secondaryColor})`;

    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      themeVariables: {
        primaryColor,
        primaryTextColor,
        primaryBorderColor,
        lineColor,
        secondaryColor,
        tertiaryColor,
        fontFamily,
        textColor,
        actorLineColor,
      },
    });
  }
}

customElements.define(tagName, Mermaid);

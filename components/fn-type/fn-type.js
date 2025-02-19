const tagName = 'fn-type';

export default class Type extends HTMLElement {
  minSpeed = 30; // Minimum delay in ms

  maxSpeed = 100; // Maximum delay in ms

  wait = 0; // Delay before starting in ms

  ellipsis = '…';

  nodes = [];

  timer = null;

  static get observedAttributes() {
    return ['disabled'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.minSpeed = Number(this.getAttribute('min-speed')) || this.minSpeed;
    this.maxSpeed = Number(this.getAttribute('max-speed')) || this.maxSpeed;
    this.wait = Number(this.getAttribute('wait')) || this.wait;
    this.ellipsis = this.getAttribute('ellipsis') || this.ellipsis;
    this.nodes = [...this.childNodes];
    this.innerHTML = '';

    this.attributeChangedCallback('disabled', null, this.getAttribute('disabled') ?? 'false');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'disabled' && oldValue !== newValue) {
      if (newValue === 'true') {
        clearTimeout(this.timer);
      } else {
        this.typeWriter(this.shadowRoot, this.nodes);
      }
    }
  }

  disconnectedCallback() {
    clearTimeout(this.timer);
  }

  get randomDelay() {
    return (
      Math.floor(Math.random() * (this.maxSpeed - this.minSpeed + 1)) + this.minSpeed
    );
  }

  typeWriter(parent, next, index = 0) {
    if (index >= next.length) return;

    const node = next[index];
    const delay = this.randomDelay;

    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      let i = 0;

      const typeText = () => {
        if (i < text.length) {
          const char = text.charAt(i);
          parent.append(char);
          // eslint-disable-next-line no-plusplus
          i++;
          this.timer = setTimeout(typeText, delay * (char === this.ellipsis
            ? 10
            : 1
          )); // Random delay per character
        } else {
          this.typeWriter(parent, next, index + 1); // Move to the next node
        }
      };

      typeText();
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const elem = document.createElement(node.tagName);
      [...node.attributes].forEach(attr => elem.setAttribute(attr.name, attr.value));
      parent.appendChild(elem);
      // Recursively type the child nodes
      this.typeWriter(elem, Array.from(node.childNodes));
      // Move to the next node
      this.timer = setTimeout(() => this.typeWriter(parent, next, index + 1), delay);
    }
  }
}

customElements.define(tagName, Type);

const tagName = 'fn-type';

export default class Type extends HTMLElement {
  minSpeed = 30; // Minimum delay in ms

  maxSpeed = 100; // Maximum delay in ms

  wait = 0; // Delay before starting in ms

  ellipsis = '…';

  nodes = [];

  timer = null;

  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setTimeout(() => this.typeWriter(this.shadowRoot, this.nodes), this.wait);
      this.observer.disconnect();
    }
  }, { threshold: 1 });

  static get observedAttributes() {
    return [];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.minSpeed = this.getAttribute('min-speed') || this.minSpeed;
    this.maxSpeed = this.getAttribute('max-speed') || this.maxSpeed;
    this.wait = this.getAttribute('wait') || this.wait;
    this.ellipsis = this.getAttribute('ellipsis') || this.ellipsis;
    this.nodes = [...this.childNodes];
    this.innerHTML = '';
    this.observer.observe(this);
  }

  disconnectedCallback() {
    this.observer.disconnect();
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

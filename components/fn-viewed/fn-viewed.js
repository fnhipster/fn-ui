const tagName = 'fn-viewed';

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>
    :host {
      display: contents;
    }
  </style>
  <slot></slot>
`;

export default class Viewed extends HTMLElement {
  _state = 'idle'; // idle, viewing, viewed

  timer = null;

  root = null;

  static get observedAttributes() {
    return ['disabled'];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.root = this.querySelector(':scope > *');

    if (this.getAttribute('disabled') === 'true') return;

    this.observer.observe(this.root);
  }

  disconnectedCallback() {
    this.stopTimer();
    this.observer.disconnect();
  }

  get time() {
    const estimatedWordCount = this.textContent
      .trim()
      .split(' ')
      .filter((w) => !!w && w !== '\n').length;

    return estimatedWordCount * 50;
  }

  get state() {
    return this._state;
  }

  set state(value) {
    this._state = value;
    this.setAttribute('data-state', value);
    this.dispatchEvent(new CustomEvent(value, { bubbles: true }));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'disabled') {
      if (oldValue === newValue) return;

      if (newValue === 'true') {
        this.stopTimer();
        this.observer.disconnect();
      } else {
        this.observer.observe(this.root);
      }
    }
  }

  observer = new IntersectionObserver(
    (entries) => {
      const { isIntersecting } = entries[0];

      if (isIntersecting && this.state === 'idle') {
        // detect if started viewing
        this.state = 'viewing';
        this.startTimer();
      } else if (!isIntersecting && this.state === 'viewing') {
        // detect if stopped viewing
        this.state = 'idle';
        this.stopTimer();
      } else {
        // detect if viewed
        this.stopTimer();
      }
    },
    {
      threshold: 1,
    },
  );

  startTimer() {
    this.timer = setTimeout(() => {
      this.setAsViewed();
    }, this.time);
  }

  stopTimer() {
    clearTimeout(this.timer);
  }

  setAsViewed() {
    this.observer.disconnect();
    this.state = 'viewed';
  }
}

customElements.define(tagName, Viewed);

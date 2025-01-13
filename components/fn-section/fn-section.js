const tagName = 'fn-section';

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>    
    .wrapper {
      display: flex;
      max-width: 70rem;
      align-items: start;
      justify-self: center;
    }

    :host([layout="centered"]) .wrapper {
      display: flex;
      align-items: center;
      min-height: 60vh;
      text-align: center;
    }

    slot {
      display: block;
      justify-self: center;
      align-self: center;
    }

    .indicator {
      position: sticky;
      top: 0;
      height: 60vh;
      z-index: -1;
      width: 1px;
      margin-left: -1px;
    }
  </style>

  <div class="wrapper">
    <slot></slot>
  </div>
`;

export default class Section extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.dispatchEvent(new CustomEvent('active'));
      } else {
        this.dispatchEvent(new CustomEvent('inactive'));
      }
    });
  }, {
    threshold: 1,
  });

  connectedCallback() {
    this.$indicator = document.createElement('div');
    this.$indicator.classList.add('indicator');
    this.shadowRoot.querySelector('.wrapper').appendChild(this.$indicator);
    this.observer.observe(this.$indicator);
  }

  disconnectedCallback() {
    this.observer.disconnect();
  }
}

customElements.define(tagName, Section);

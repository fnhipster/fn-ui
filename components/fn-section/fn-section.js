const tagName = 'fn-section';

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>    
    .wrapper {
      display: flex;
      align-items: start;
    }

    :host([layout="centered"]) .wrapper {
      min-height: 60vh;
      text-align: center;
      justify-content: center;
    }

    .content {
      align-self: center;
      flex: 1;
    }

    .indicator.active {
      position: sticky;
      top: 0;
      height: 60vh;
      z-index: -1;
      width: 1px;
      margin-left: -1px;
    }
  </style>

  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <div class="indicator"></div>
  </div>
`;

export default class Section extends HTMLElement {
  _state = 'idle'; // idle, viewing, viewed

  timer = null;

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // emit event
        this.dispatchEvent(new CustomEvent('visibility', { detail: entry.isIntersecting }));

        // track viewed
        if (entry.isIntersecting && this.state === 'idle') {
          // detect if started viewing
          this.state = 'viewing';
          this.startTimer();
        } else if (!entry.isIntersecting && this.state === 'viewing') {
          // detect if stopped viewing
          this.state = 'idle';
          this.stopTimer();
        } else {
          // detect if viewed
          this.stopTimer();
        }
      });
    },
    {
      threshold: 1,
    }
  );

  connectedCallback() {
    if (this.getAttribute('track-visibility') === 'true') {
      const $indicator = this.shadowRoot.querySelector('.indicator');
      $indicator.classList.add('active');
      this.observer.observe($indicator);
    }
  }

  disconnectedCallback() {
    if (this.getAttribute('track-visibility') === 'true') {
      this.observer.disconnect();
      this.stopTimer();
    }
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
    this.dispatchEvent(new CustomEvent(value));
  }

  startTimer() {
    this.timer = setTimeout(() => {
      this.state = 'viewed';
    }, this.time);
  }

  stopTimer() {
    clearTimeout(this.timer);
  }
}

customElements.define(tagName, Section);

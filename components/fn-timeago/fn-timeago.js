const tagName = 'fn-timeago';

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>
    :host {
      font: var(--font-accent);
      font-size: var(--font-accent-sm);
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
  </style>
    
  <time class="fnh-timeago"></time>
`;

export default class TimeAgo extends HTMLElement {
  timeElement = null;

  static get observedAttributes() {
    return ['date'];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
    this.timeElement = this.shadowRoot.querySelector('time');
  }

  attributeChangedCallback(name, prev, next) {
    if (name === 'date') {
      const unixTimestamp = parseInt(next, 10);
      const date = new Date(unixTimestamp);
      this.timeElement.setAttribute('datetime', date.toISOString());
      this.timeElement.textContent = TimeAgo.timeAgo(next);
    }
  }

  static timeAgo(date) {
    const now = Date.now();
    const timeDifference = now - date; // Convert timestamp to milliseconds
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) return 'just now';
    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    if (days < 30) return `${days} day${days !== 1 ? 's' : ''} ago`;
    if (months < 12) return `${months} month${months !== 1 ? 's' : ''} ago`;
    return `${years} year${years !== 1 ? 's' : ''} ago`;
  }
}

customElements.define(tagName, TimeAgo);

const tagName = 'fn-playlist';

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>
    :host > div {
      position: relative;
    }

    .wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-lg);
      justify-content: var(--align, center);
      align-items: var(--valign, center);
      padding: var(--spacing-xl);
    }

    ::slotted([slot="cover"]) {
      max-width: 100%;
      max-height: 100%;
    }

    ::slotted([slot="title"]) {
      font: var(--font-heading);
      margin: 0;
    }

    ::slotted([slot="songs"]) {
      font: var(--font-accent);
      list-style: decimal-leading-zero;
      list-style-position: inside;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-sm);
    }

    footer {
      display: grid;
      grid-auto-columns: max-content;
      grid-auto-flow: column;
      gap: var(--spacing-sm);
    }

    footer > fn-action {
      display: inline-flex;
    }

    footer > fn-action > a {
      flex-grow: 1;
      gap: var(--spacing-xs);
    }
  </style>
    
  <div>
    <slot name="cover"></slot>

    <div class="wrapper">
      <header>
        <slot name="title"></slot>
      </header>

      <slot name="songs"></slot>

      <footer>
        <fn-action id="spotify-link" button="true">
          <a href="">
            <fn-icon icon="spotify"></fn-icon>
            Listen on Spotify
          </a>
        </fn-action> 
        <fn-action id="apple-music-link" button="true">
          <a href="">
            <fn-icon icon="apple-music"></fn-icon>
            Listen on Apple Music
          </a>
        </fn-action>
      </footer>
    </div>
  </div>
`;

export default class Playlist extends HTMLElement {
  static get observedAttributes() {
    return ['valign', 'align', 'apple-music-url', 'spotify-url'];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    // trigger attributeChangedCallback to set initial values
    this.attributeChangedCallback('valign', null, this.getAttribute('valign'));
    this.attributeChangedCallback('align', null, this.getAttribute('align'));
    this.attributeChangedCallback('apple-music-url', null, this.getAttribute('apple-music-url'));
    this.attributeChangedCallback('spotify-url', null, this.getAttribute('spotify-url'));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'valign') {
      const values = {
        top: 'flex-start',
        center: 'center',
        bottom: 'flex-end',
      };

      this.style.setProperty('--valign', values[newValue]);
    }

    if (name === 'align') {
      const values = {
        left: 'flex-start',
        center: 'center',
        right: 'flex-end',
      };
      this.style.setProperty('--align', values[newValue]);
    }

    if (name === 'apple-music-url') {
      const appleMusicLink = this.shadowRoot.querySelector('#apple-music-link');
      appleMusicLink.querySelector('a').setAttribute('href', newValue);
      appleMusicLink.style.setProperty('display', newValue ? 'inline-flex' : 'none');
    }

    if (name === 'spotify-url') {
      const spotifyLink = this.shadowRoot.querySelector('#spotify-link');
      spotifyLink.querySelector('a').setAttribute('href', newValue);
      spotifyLink.style.setProperty('display', newValue ? 'inline-flex' : 'none');
    }
  }
}

customElements.define(tagName, Playlist);

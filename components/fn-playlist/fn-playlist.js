const tagName = 'fn-playlist';

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>
    :host {
      container-type: inline-size;
      display: block;
    }

    ol {
      font: var(--font-accent);
      font-size: var(--font-accent-lg);
      list-style: decimal-leading-zero;
      list-style-position: inside;
      margin: 0;
      padding: 0;
    }

    ol ::slotted(li) {
      position: relative;
      padding: var(--spacing-sm);
      counter-increment: item-number;
      display: grid;
      grid-template-columns: 1.7em auto;
      grid-template-rows: max-content max-content;
    }

    ol ::slotted(li)::before {
      content: counter(item-number) ". ";
      grid-column: 1; 
      grid-row: 1 / span 2;
      opacity: 0.5;
    }

    ol ::slotted(li:nth-child(odd))::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--color-fg);
      opacity: 0.1;
    }


    footer {
      display: grid;
      gap: var(--spacing-sm);
      margin-top: var(--spacing-sm);
    }

    footer > fn-action {
      display: inline-flex;
    }

    footer > fn-action > a {
      flex-grow: 1;
      gap: var(--spacing-xs);
    }

    @container (min-width: 650px) {
      ol ::slotted(li) {
        gap: var(--spacing-md);
        grid-template-columns: 1.7em 1fr 1fr;
        grid-template-rows: 1fr;
      }

      ol ::slotted(li)::before {
        grid-column: 1; 
        grid-row: 1;
      }
      
      footer {
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
      }
    }
  </style>
    
  <div>
    <div class="wrapper">  
      <ol>
        <slot name="song"></slot>
      </ol>

      <footer>
        <fn-action id="spotify-link" button="true" fill="true">
          <a href="" target="_blank" rel="noopener">
            <fn-icon icon="spotify"></fn-icon>
            Listen on Spotify
          </a>
        </fn-action> 
        <fn-action id="apple-music-link" button="true" fill="true">
          <a href="" target="_blank" rel="noopener">
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
    return ['apple-music-url', 'spotify-url'];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    // trigger attributeChangedCallback to set initial values
    this.attributeChangedCallback('apple-music-url', null, this.getAttribute('apple-music-url'));
    this.attributeChangedCallback('spotify-url', null, this.getAttribute('spotify-url'));
  }

  attributeChangedCallback(name, oldValue, newValue) {
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

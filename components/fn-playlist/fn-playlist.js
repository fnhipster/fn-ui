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
      letter-spacing: 0.05em;
      font-size: var(--font-accent-md);
      list-style: decimal-leading-zero;
      list-style-position: inside;
      margin: 0;
      padding: 0;
      -ms-overflow-style: none;  /* Internet Explorer 10+ */
      scrollbar-width: none;  /* Firefox */
    }

    ol::-webkit-scrollbar { 
      display: none;  /* Safari and Chrome */
    }

    .compact ol {
      display: grid;
      grid-auto-flow: column;
      grid-template-rows: repeat(2, auto);
      grid-auto-columns: 90%;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      gap: var(--spacing-sm);
    }

    ol ::slotted(li) {
      position: relative;
      padding: var(--spacing-sm) var(--spacing-xs);
      counter-increment: item-number;
      display: grid;
      align-items: center;
      grid-template-columns: 1.7em auto;
      grid-template-rows: max-content max-content;
      grid-column-gap: var(--spacing-xs);
    }

    .compact ol ::slotted(li) {
      scroll-snap-align: center;
    }

    ol ::slotted(li:not(:empty))::before {
      content: counter(item-number) ". ";
      grid-column: 1; 
      grid-row: 1 / span 2;
      opacity: 0.5;
    }

    ol ::slotted(li)::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--color-fg);
      opacity: 0.1;
    }

    ol ::slotted(li:empty)::after {
      opacity: 0.05;
    }

    .wrapper:not(.compact) ol ::slotted(li:nth-child(even))::after {
      background: none;
    }

    ol ::slotted(strong) {
      font-weight: 400;
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

    @container (min-width: 450px) {
      footer {
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
      }
    }

    @container (min-width: 600px) {
      ol ::slotted(li) {
        grid-template-columns: 1.7em 1fr 1fr;
        grid-template-rows: 1fr;
        padding: var(--spacing-sm);
      }

      ol ::slotted(li)::before {
        grid-column: 1; 
        grid-row: 1;
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
    this.attributeChangedCallback('variant', null, this.getAttribute('variant'));
    this.attributeChangedCallback('apple-music-url', null, this.getAttribute('apple-music-url'));
    this.attributeChangedCallback('spotify-url', null, this.getAttribute('spotify-url'));

    // if compact, add an empty li to the end of the list if there are an odd number of songs
    if (this.getAttribute('variant') === 'compact') {
      const songs = this.querySelectorAll('[slot="song"]');
      if (songs.length % 2 === 1) {
        const emptyLi = document.createElement('li');
        emptyLi.setAttribute('aria-hidden', 'true');
        emptyLi.setAttribute('slot', 'song');
        this.appendChild(emptyLi);
      }
    }
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

    if (name === 'variant') {
      this.shadowRoot.querySelector('.wrapper').classList.toggle('compact', newValue === 'compact');
    }
  }
}

customElements.define(tagName, Playlist);

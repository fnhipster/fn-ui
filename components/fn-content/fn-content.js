const tagName = 'fn-content';

export default class Content extends HTMLElement {
  constructor() {
    super();

    const styles = /* css */ `
      fn-content {
        font-family: var(--typography-body);
        font-size: 1.8rem;
      }

      fn-content strong {
        font-weight: 600;
        text-shadow: 0 0 0.2rem currentColor;
      }

      fn-content h1,
      fn-content h2,
      fn-content h3,
      fn-content h4,
      fn-content h5,
      fn-content h6 {
        font-family: var(--typography-heading);
        margin: var(--spacing-lg) 0;
        text-transform: uppercase;
      }

      fn-content h1 {
        font-size: 4rem;
      }

      fn-content h2 {
        font-size: 2.9rem;
      }

      fn-content h3 {
        font-size: 2.8rem;
      }

      fn-content h4 {
        font-size: 2.7rem;
      }

      fn-content h5 {
        font-size: 2.6rem;
      }

      fn-content h6 {
        font-size: 2.5rem;
      }

      fn-content img,
      fn-content video,
      fn-content iframe {
        max-inline-size: 100%;
        block-size: auto;
      }

      fn-content hr {
        border-color: var(--color-fg);
        border-style: solid;
        border-width: 0.3rem;
        max-width: 20rem;
        display: inline-block;
        width: 100%;
        margin: var(--spacing-md) 0;
      }

      fn-content blockquote {
        font-size: 1.2em;
        line-height: 1.3;
        font-style: italic;
        margin: 0;
        padding: var(--spacing-md);
        border-left: 0.5em solid;
      }
    `;

    const sheet = new CSSStyleSheet();
    sheet.replaceSync(styles);
    document.adoptedStyleSheets = [sheet];
  }
}

if (!customElements.get(tagName)) customElements.define(tagName, Content);

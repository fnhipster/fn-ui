export { default as Binary } from './fn-binary/fn-binary.js';
export { default as Footer } from './fn-footer/fn-footer.js';
export { default as Header } from './fn-header/fn-header.js';
export { default as Image } from './fn-image/fn-image.js';
export { default as Link } from './fn-link/fn-link.js';
export { default as Logo } from './fn-logo/fn-logo.js';
export { default as Columns } from './fn-columns/fn-columns.js';
export { default as Hero } from './fn-hero/fn-hero.js';
export { default as Section } from './fn-section/fn-section.js';
export { default as Share } from './fn-share/fn-share.js';
export { default as Button } from './fn-button/fn-button.js';
export { default as TimeAgo } from './fn-timeago/fn-timeago.js';
export { default as Head } from './fn-head/fn-head.js';
export { default as Icon } from './fn-icon/fn-icon.js';

/** Cursors */
function makeCursor(cursor = 'default') {
  const doc = document.documentElement;

  const fg = getComputedStyle(doc).getPropertyValue('--color-bg');
  const bg = getComputedStyle(doc).getPropertyValue('--color-fg');

  const cursors = {
    default: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.89 25.09" width="20.89" height="30.09">
        <g fill="${bg}" stroke="${fg}">
          <path d="M14.62,14.62v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33V0H0v22.47h2.64v-1.33h1.33v-1.33h1.33v-1.33h1.33v2.64h1.33v2.64h1.33v1.33h2.64v-1.33h1.33v-2.64h-1.33v-2.64h-1.33v-1.33h5.28v-2.64h-1.33l.07.12Z"/>
        </g>
      </svg>
    `,
    defaultClick: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.44 29.11" width="20.44" height="29.11">
        <g fill="${bg}">
          <rect x="3.61" y="1.7" width="1.25" height="1.25" transform="translate(.77 5.69) rotate(-72.88)"/>
          <rect x="2.8" y=".16" width="1.25" height="1.25" transform="translate(1.67 3.82) rotate(-72.88)"/>
          <rect x="7.22" y="2.54" width="1.25" height="1.25" transform="translate(-.61 3.41) rotate(-23.62)"/>
          <rect x="7.88" y=".93" width="1.25" height="1.25" transform="translate(.09 3.54) rotate(-23.62)"/>
          <rect x="1.86" y="5.21" width="1.25" height="1.25" transform="translate(-2.33 1.71) rotate(-26.34)"/>
          <rect x=".21" y="4.64" width="1.25" height="1.25" transform="translate(-2.25 .92) rotate(-26.34)"/>
        </g>
        
        <g fill="${bg}" stroke="${fg}">
          <path d="M19.18,18.64v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v-1.33h-1.33v22.47h2.64v-1.33h1.33v-1.33h1.33v-1.33h1.33v2.64h1.33v2.64h1.33v1.33h2.64v-1.33h1.33v-2.64h-1.33v-2.64h-1.33v-1.33h5.28v-2.64h-1.33l.07.12Z"/>
        </g>
      </svg>
    `,
    pointer: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.05 27.03" width="25.05" height="32.03">
        <g fill="${bg}" stroke="${fg}">
          <path d="M19.76,11.25v-1.26h-1.26v-1.26h-2.5v-1.26h-3.76v-1.26h-2.02V1.26h-1.26V0h-2.98v1.26h-1.26v10.93h-.6l-.03-1.22H0l.03,4.04h.99v1.26h1.26v2.5h1.26v2.5h1.26v2.5h1.26v3.27h12.49v-3.27h1.26v-3.76h1.26l-.07-9.11h-1.26l.04.36Z"/>
        </g>

        <g fill="${fg}">
          <rect x="5.1" y="1.87" width="1.18" height="14.07"/>
          <rect x="6.28" y=".7" width="2.34" height="1.18"/>
          <rect x="8.62" y="1.87" width="1.18" height="10.55"/>
          <rect x="9.79" y="6.55" width="2.34" height="1.18"/>
          <rect x="12.13" y="8.9" width="1.18" height="3.52"/>
          <rect x="12.13" y="7.73" width="3.52" height="1.18"/>
          <rect x="15.65" y="10.08" width="1.18" height="3.51"/>
          <rect x="15.65" y="8.9" width="2.34" height="1.18"/>
          <rect x="18" y="10.08" width="1.18" height="1.18"/>
          <rect x="19.18" y="11.24" width="1.18" height="8.21"/>
          <rect x="18" y="19.45" width="1.18" height="3.52"/>
          <rect x="16.83" y="22.97" width="1.18" height="3.52"/>
          <rect x="6.28" y="25.31" width="10.55" height="1.18"/>
          <rect x="3.94" y="12.42" width="1.18" height="1.18"/>
          <rect x=".42" y="11.24" width="3.52" height="1.18"/>
          <rect x=".42" y="12.42" width="1.18" height="2.34"/>
          <rect x="1.59" y="14.76" width="1.18" height="1.18"/>
          <rect x="2.76" y="15.94" width="1.18" height="2.34"/>
          <rect x="3.94" y="18.28" width="1.18" height="2.34"/>
          <rect x="5.1" y="20.63" width="1.18" height="2.34"/>
          <rect x="6.28" y="22.97" width="1.18" height="2.34"/>
        </g>
      </svg>
    `,
    pointerClick: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.05 31.65" width="21.05" height="31.65">
        <g fill="${bg}">
          <rect x="4.42" y="1.61" width="1.18" height="1.18" transform="translate(.72 5.39) rotate(-72.88)"/>
          <rect x="3.65" y=".15" width="1.18" height="1.18" transform="translate(1.58 3.62) rotate(-72.88)"/>
          <rect x="7.81" y="2.41" width="1.18" height="1.18" transform="translate(-.58 3.22) rotate(-23.62)"/>
          <rect x="8.44" y=".88" width="1.18" height="1.18" transform="translate(.08 3.34) rotate(-23.62)"/>
          <rect x="2.76" y="4.92" width="1.18" height="1.18" transform="translate(-2.2 1.61) rotate(-26.34)"/>
          <rect x="1.2" y="4.38" width="1.18" height="1.18" transform="translate(-2.12 .87) rotate(-26.34)"/>
        </g>

        <g fill="${bg}" stroke="${fg}">
          <path class="cls-1" d="M19.76,15.87v-1.26h-1.26v-1.26h-2.5v-1.26h-3.76v-1.26h-2.02v-4.97h-1.26v-1.26h-2.98v1.26h-1.26v10.93h-.6l-.03-1.22H0l.03,4.04h.99v1.26h1.26v2.5h1.26v2.5h1.26v2.5h1.26v3.27h12.49v-3.27h1.26v-3.76h1.26l-.07-9.11h-1.26l.04.36Z"/>
        </g>
        
        <g fill="${fg}">
          <rect x="5.1" y="6.49" width="1.18" height="14.07"/>
          <rect x="6.28" y="5.33" width="2.34" height="1.18"/>
          <rect x="8.62" y="6.49" width="1.18" height="10.55"/>
          <rect x="9.79" y="11.18" width="2.34" height="1.18"/>
          <rect x="12.13" y="13.52" width="1.18" height="3.52"/>
          <rect x="12.13" y="12.36" width="3.52" height="1.18"/>
          <rect x="15.65" y="14.7" width="1.18" height="3.51"/>
          <rect x="15.65" y="13.52" width="2.34" height="1.18"/>
          <rect x="18" y="14.7" width="1.18" height="1.18"/>
          <rect x="19.18" y="15.86" width="1.18" height="8.21"/>
          <rect x="18" y="24.07" width="1.18" height="3.52"/>
          <rect x="16.83" y="27.59" width="1.18" height="3.52"/>
          <rect x="6.28" y="29.94" width="10.55" height="1.18"/>
          <rect x="3.94" y="17.04" width="1.18" height="1.18"/>
          <rect x=".42" y="15.86" width="3.52" height="1.18"/>
          <rect x=".42" y="17.04" width="1.18" height="2.34"/>
          <rect x="1.59" y="19.39" width="1.18" height="1.18"/>
          <rect x="2.76" y="20.56" width="1.18" height="2.34"/>
          <rect x="3.94" y="22.91" width="1.18" height="2.34"/>
          <rect x="5.1" y="25.25" width="1.18" height="2.34"/>
          <rect x="6.28" y="27.59" width="1.18" height="2.34"/>
        </g>
      </svg>
    `,
    text: `
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.14 32.67" width="10.14" height="30.67">
      <polygon fill="${bg}" points=".15 32.54 .15 30.88 1.55 30.88 1.55 29.48 5.26 29.48 5.26 26.57 2.93 26.57 2.93 25.38 5.26 25.38 5.26 3.2 2.91 3.2 2.91 3.19 1.53 3.19 1.53 1.78 .12 1.78 .12 .13 1.78 .13 1.78 1.53 3.19 1.53 3.19 2 8.94 2 8.94 1.53 10.34 1.53 10.34 .13 12 .13 12 1.79 10.6 1.79 10.6 3.19 9.22 3.19 9.1 3.2 6.92 3.2 6.92 25.38 9.24 25.38 9.24 26.57 6.92 26.57 6.92 29.48 10.62 29.48 10.62 30.88 12.02 30.88 12.02 32.54 10.36 32.54 10.36 31.14 8.96 31.14 8.96 30.68 3.21 30.68 3.21 31.14 1.81 31.14 1.81 32.54 .15 32.54"/>
      <path fill="${fg}" d="M1.66.25v1.4h1.41v.47h6v-.47h1.4V.25h1.41v1.41h-1.4v1.4h-1.38s-2.3,0-2.3,0v22.43h2.33v.95h-2.33v3.16h3.7v1.4h1.4v1.41h-1.41v-1.4h-1.4v-.46H3.09v.46h-1.41v1.4H.27v-1.41h1.41v-1.4h3.7v-3.16h-2.33v-.95h2.33V3.07h-2.35s-1.38,0-1.38,0v-1.4H.25V.25h1.41M1.91,0H0v1.91h1.41v1.4h1.63s2.1,0,2.1,0v21.93h-2.33v1.45h2.33v2.66H1.43v1.4H.02v1.91h1.91v-1.4h1.41v-.46h5.5v.46h1.4v1.4h1.91v-1.91h-1.4v-1.4h-3.7v-2.66h2.33v-1.45h-2.33V3.32h2.3s1.13,0,1.13,0h.25v-1.4h1.4V0h-1.91v1.4h-1.4v.47H3.32v-.47h-1.41V0h0Z"/>
    </svg>
    `,
  };

  // convert svg to data url
  const defaultBlob = new Blob([cursors[cursor]], { type: 'image/svg+xml' });
  const defaultURI = URL.createObjectURL(defaultBlob);

  const defaultClickBlob = new Blob([cursors[`${cursor}Click`]], { type: 'image/svg+xml' });
  const defaultClickURI = URL.createObjectURL(defaultClickBlob);

  const pointerBlob = new Blob([cursors.pointer], { type: 'image/svg+xml' });
  const pointerURI = URL.createObjectURL(pointerBlob);

  const pointerClickBlob = new Blob([cursors.pointerClick], { type: 'image/svg+xml' });
  const pointerClickURI = URL.createObjectURL(pointerClickBlob);

  const textBlob = new Blob([cursors.text], { type: 'image/svg+xml' });
  const textURI = URL.createObjectURL(textBlob);

  doc.style.setProperty('--cursor-default', `url(${defaultURI}), auto`);
  doc.style.setProperty('--cursor-default-click', `url(${defaultClickURI}), auto`);
  doc.style.setProperty('--cursor-pointer', `url(${pointerURI}), auto`);
  doc.style.setProperty('--cursor-pointer-click', `url(${pointerClickURI}), auto`);
  doc.style.setProperty('--cursor-text', `url(${textURI}), auto`);
}

function init() {
  makeCursor();
}

document.addEventListener('DOMContentLoaded', init);

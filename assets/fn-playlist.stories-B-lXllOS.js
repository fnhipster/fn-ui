import{C as e}from"./utils-CG_vfxgm.js";const a={title:"components/fn-playlist",tags:["autodocs"],parameters:{layout:"padded"},render:({innerHTML:r,...l})=>{const s=e("fn-playlist",l);return s.innerHTML=r,s.style.setProperty("max-width","70rem"),s},argTypes:{}},t={args:{"apple-music-url":"https://music.apple.com/us/playlist/playlist-name/pl.u-76oNkXoT9G","spotify-url":"https://open.spotify.com/playlist/playlist-id",align:"center",valign:"center",innerHTML:`
      <fn-image slot="cover" poster="https://picsum.photos/100/100">
        <img loading="lazy" src="https://picsum.photos/700/700" width="700" height="700" alt="Test">
      </fn-image>

      <h1 slot="title">Playlist Title</h1>

      <ul slot="songs">
        <li><strong>Song 1</strong> by Some Artist</li>
        <li><strong>Song 2</strong> by Some Artist</li>
        <li><strong>Song 3</strong> by Some Artist</li>
        <li><strong>Song 4</strong> by Some Artist</li>
        <li><strong>Song 5</strong> by Some Artist</li>
        <li><strong>Song 6</strong> by Some Artist</li>
        <li><strong>Song 7</strong> by Some Artist</li>
        <li><strong>Song 8</strong> by Some Artist</li>
        <li><strong>Song 9</strong> by Some Artist</li>
        <li><strong>Song 10</strong> by Some Artist</li
      </ul>
    `}};var o,n,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    'apple-music-url': 'https://music.apple.com/us/playlist/playlist-name/pl.u-76oNkXoT9G',
    'spotify-url': 'https://open.spotify.com/playlist/playlist-id',
    align: 'center',
    valign: 'center',
    innerHTML: \`
      <fn-image slot="cover" poster="https://picsum.photos/100/100">
        <img loading="lazy" src="https://picsum.photos/700/700" width="700" height="700" alt="Test">
      </fn-image>

      <h1 slot="title">Playlist Title</h1>

      <ul slot="songs">
        <li><strong>Song 1</strong> by Some Artist</li>
        <li><strong>Song 2</strong> by Some Artist</li>
        <li><strong>Song 3</strong> by Some Artist</li>
        <li><strong>Song 4</strong> by Some Artist</li>
        <li><strong>Song 5</strong> by Some Artist</li>
        <li><strong>Song 6</strong> by Some Artist</li>
        <li><strong>Song 7</strong> by Some Artist</li>
        <li><strong>Song 8</strong> by Some Artist</li>
        <li><strong>Song 9</strong> by Some Artist</li>
        <li><strong>Song 10</strong> by Some Artist</li
      </ul>
    \`
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const m=["Primary"];export{t as Primary,m as __namedExportsOrder,a as default};

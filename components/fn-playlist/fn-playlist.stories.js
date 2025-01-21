import { CustomElement } from '../../.storybook/utils.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'components/fn-playlist',
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  render: ({ innerHTML, ...args }) => {
    const element = CustomElement('fn-playlist', args);
    element.innerHTML = innerHTML;
    return element;
  },
  argTypes: { },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    'apple-music-url': 'https://music.apple.com/us/playlist/playlist-name/pl.u-76oNkXoT9G',
    'spotify-url': 'https://open.spotify.com/playlist/playlist-id',
    innerHTML: `
      <li slot="song"><strong>Song 1</strong> by Some Artist</li>
      <li slot="song"><strong>Song 2</strong> by Some Artist</li>
      <li slot="song"><strong>Song 3</strong> by Some Artist</li>
      <li slot="song"><strong>Song 4</strong> by Some Artist</li>
      <li slot="song"><strong>Song 5</strong> by Some Artist</li>
      <li slot="song"><strong>Song 6</strong> by Some Artist</li>
      <li slot="song"><strong>Song 7</strong> by Some Artist</li>
      <li slot="song"><strong>Song 8</strong> by Some Artist</li>
      <li slot="song"><strong>Song 9</strong> by Some Artist</li>
      <li slot="song"><strong>Song 10</strong> by Some Artist</li>
    `,
  },
};

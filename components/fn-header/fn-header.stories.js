import { CustomElement } from '../../.storybook/utils.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'components/fn-header',
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  render: ({ innerHTML, ...args }) => {
    const elm = CustomElement('fn-header', args);
    elm.innerHTML = innerHTML;
    return elm;
  },
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    innerHTML: `
      <nav slot="nav">
        <fn-link>
          <a href="/prev">
            <em>P</em>rev
          </a>
        </fn-link>

        <fn-link>
          <a href="/next">
            <em>N</em>ext
          </a>
        </fn-link>
      </nav>
    `,
  },
};

import { CustomElement } from '../../.storybook/utils.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'components/fn-head',
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  render: ({ innerHTML, ...args }) => {
    const element = CustomElement('fn-head', args);
    element.innerHTML = innerHTML;
    return element;
  },
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    innerHTML: /* html */ `
      <h1 slot="hero">Post title goes here</h1>
      <div slot="ctas">
        <fn-timeago date="${Date.now()}"></fn-timeago>
        <fn-share></fn-share>
      </div>
    `,
  },
};

import { CustomElement } from '../../.storybook/utils.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'components/fn-icon',
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  render: ({ ...args }) => CustomElement('fn-icon', args),
  argTypes: { },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const icon = {
  args: {
    icon: 'link',
  },
};

export const external = {
  args: {
    icon: 'external',
  },
};

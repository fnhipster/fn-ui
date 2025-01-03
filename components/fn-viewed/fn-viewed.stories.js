import { action } from '@storybook/addon-actions';
import { CustomElement } from '../../.storybook/utils.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'components/fn-viewed',
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  render: ({ innerHTML, ...args }) => {
    const elem = CustomElement('fn-viewed', args);
    elem.innerHTML = innerHTML;
    elem.addEventListener('viewed', action('viewed'));
    return elem;
  },
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    innerHTML: '<div>This is a paragraph of text that will be tracked when it is viewed</div>',
  },
};

export const Long = {
  args: {
    innerHTML: `
      <div>
        <p style="margin-bottom: 30vh; background: red;">
          This is a paragraph of text that will be tracked when it is viewed
        </p>
        <p style="margin-bottom: 30vh; background: red;">
          This is a paragraph of text that will be tracked when it is viewed
        </p>
        <p style="margin-bottom: 30vh; background: red;">
          This is a paragraph of text that will be tracked when it is viewed
        </p>
        <p style="margin-bottom: 30vh; background: red;">
          This is a paragraph of text that will be tracked when it is viewed
        </p>
        <p style="margin-bottom: 30vh; background: red;">
          This is a paragraph of text that will be tracked when it is viewed
        </p>
      </div>
    `,
  },
};

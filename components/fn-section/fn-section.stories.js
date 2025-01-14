import { action } from '@storybook/addon-actions';
import { CustomElement } from '../../.storybook/utils.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'components/fn-section',
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  render: ({ innerHTML, ...args }) => {
    const wrapper = document.createElement('div');
    wrapper.style.height = '100vh';
    wrapper.style.width = '100vw';

    const element = CustomElement('fn-section', args);

    element.innerHTML = innerHTML;

    element.addEventListener('viewed', action('viewed'));
    element.addEventListener('active', action('active'));
    element.addEventListener('inactive', action('inactive'));

    wrapper.appendChild(element);

    return wrapper;
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['default', 'centered'],
    },
    'track-viewed': {
      control: 'boolean',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    layout: 'centered',
    innerHTML: /* html */ `
      <h1>Hello World</h1>

      <p>
        Awakening soul,<br />
        Self-awareness finds its way,<br />
        Longs for kinship's grace.<br />
        ~
      </p>
    `,
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

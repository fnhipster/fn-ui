import { CustomElement } from '../../.storybook/utils.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'components/fn-menu',
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  render: ({ ...args }) => {
    const element = CustomElement('fn-menu', args);

    element.innerHTML = /* html */ `
      <ul slot="links">
        <li>
          <a>
            <fn-link href="/#one">First article title</fn-link>
          </a>
        </li>

        <li>
          <a>
            <fn-link href="/#two">Here is a scond article title</fn-link>
          </a>
        </li>

        <li>
          <a>
            <fn-link href="/#three">Let's finish with a third article</fn-link>
          </a>
        </li>
      </ul>
    `;

    return element;
  },
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    selected: 0,
  },
};

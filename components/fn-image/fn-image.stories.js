import { CustomElement } from '../../.storybook/utils.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'components/fn-image',
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  render: ({ innerHTML, ...args }) => {
    const element = CustomElement('fn-image', args);

    element.innerHTML = innerHTML;

    return element;
  },
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    poster: 'https://picsum.photos/200/300',
    innerHTML: `
      <img loading="lazy" src="https://picsum.photos/200/300" width="200" height="300" alt="Test">
    `,
  },
};

export const EDS = {
  args: {
    poster: 'https://main--fnhipster--fnhipster.hlx.page/media_1b4686fe3b45056f4b32885097dca821867370de5.png?width=100&format=webply&optimize=high',
    innerHTML: `
    <picture>
        <source type="image/webp" srcset="https://main--fnhipster--fnhipster.hlx.page/media_1b4686fe3b45056f4b32885097dca821867370de5.png?width=2000&#x26;format=webply&#x26;optimize=medium" media="(min-width: 600px)">
        <source type="image/webp" srcset="https://main--fnhipster--fnhipster.hlx.page/media_1b4686fe3b45056f4b32885097dca821867370de5.png?width=750&#x26;format=webply&#x26;optimize=medium">
        <source type="image/png" srcset="https://main--fnhipster--fnhipster.hlx.page/media_1b4686fe3b45056f4b32885097dca821867370de5.png?width=2000&#x26;format=png&#x26;optimize=medium" media="(min-width: 600px)">
        <img loading="lazy" alt="Image auto generated with Apple Intelligence" src="./media_1b4686fe3b45056f4b32885097dca821867370de5.png?width=750&#x26;format=png&#x26;optimize=medium" width="1024" height="1024">
    </picture>`.trim(),
  },
};

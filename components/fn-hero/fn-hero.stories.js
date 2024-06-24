import { CustomElement } from '../../.storybook/utils.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'components/fn-hero',
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  render: ({ innerHTML, ...args }) => {
    const element = CustomElement('fn-hero', args);

    element.innerHTML = innerHTML;

    return element;
  },
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    innerHTML: /* html */ `
    <fn-image slot="image">
      <img src="https://picsum.photos/seed/picsum/960/530" alt="placeholder image" width="960" height="530"/>
    </fn-image>
    <h1 slot="title">Hero Title</h1>
  `,
  },
};

export const Picture = {
  args: {
    innerHTML: /* html */ `
    <fn-image slot="image" poster="https://picsum.photos/seed/picsum/960/530">
      <picture>
        <source type="image/webp" srcset="https://picsum.photos/seed/picsum/960/530" media="(min-width: 600px)">
        <source type="image/webp" srcset="https://picsum.photos/seed/picsum/660/230">
        <source type="image/jpeg" srcset="https://picsum.photos/seed/picsum/960/530" media="(min-width: 600px)">
        <img loading="lazy" alt="" src="https://picsum.photos/seed/picsum/960/530" width="960" height="530">
      </picture>
    </fn-image>
    <h1 slot="title">Hero Title</h1>
  `,
  },
};

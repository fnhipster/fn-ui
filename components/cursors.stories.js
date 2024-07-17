
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'styles/cursors',
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  render: () => {
    const base = document.createElement('div');
    base.style.width = '100px';
    base.style.height = '100px';
    base.style.display = 'flex';
    base.style.background = 'var(--color-bg)';
    base.style.alignItems = 'center';
    base.style.justifyContent = 'center';

    const defaultCursor = base.cloneNode(true);
    defaultCursor.style.cursor = 'var(--cursor-default)';
    defaultCursor.innerText = 'default';

    const defaultClickCursor = base.cloneNode(true);
    defaultClickCursor.style.cursor = 'var(--cursor-default-click)';
    defaultClickCursor.innerText = 'default (click)';

    const pointerCursor = base.cloneNode(true);
    pointerCursor.style.cursor = 'var(--cursor-pointer)';
    pointerCursor.innerText = 'pointer';

    const textCursor = base.cloneNode(true);
    textCursor.style.cursor = 'var(--cursor-pointer-click)';
    textCursor.innerText = 'pointer (click)';

    const textClickCursor = base.cloneNode(true);
    textClickCursor.style.cursor = 'var(--cursor-text)';
    textClickCursor.innerText = 'text';

    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.gap = '1rem';

    wrapper.appendChild(defaultCursor);
    wrapper.appendChild(defaultClickCursor);
    wrapper.appendChild(pointerCursor);
    wrapper.appendChild(textCursor);
    wrapper.appendChild(textClickCursor);

    return wrapper;
  },
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: { },
};

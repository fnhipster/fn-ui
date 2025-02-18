import { CustomElement } from '../../.storybook/utils.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'components/fn-mermaid',
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  render: ({ innerHTML, ...args }) => {
    const elem = CustomElement('fn-mermaid', args);
    elem.innerHTML = innerHTML;
    return elem;
  },
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    innerHTML: `
    <pre slot="code">
      sequenceDiagram
        participant Board as Cutting Board
        participant Fridge
        participant Grill
        participant Smoker
        Board ->> Board: score fat cap <br>(optional)
        Board ->> Board: dry brine with salt
        Board ->> Fridge: refrigerate uncovered <br>(24h)
        Fridge -->> Board: temper at room temp <br>(30 min)
        Board ->> Smoker: indirect cook <br>(~45–90 min at 225–250°F, ‘til 115–125°F internal)
        Smoker -->> Board: rest <br>(10–15 min)
        Board ->> Board: cut into steaks <br>(follow the grain)
        Board ->> Board: season with salt &#x26; pepper
        Board ->> Grill: sear steaks <br>(~2–3 min per side)
        Grill -->> Board: rest <br>(5–10 min)
        Board ->> Board: slice against the grain
        Board ->> Board: serve &#x26; enjoy
      </pre>
    `.trim(),
  },
};

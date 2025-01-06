import { themes } from '@storybook/theming';
import { applyTheme } from '../components/index.js';
import '../components/index.js';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;

applyTheme('#ffb000', '#111111)');

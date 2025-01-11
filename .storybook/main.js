/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../**/*.mdx",
    "../**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook"
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {},
  staticDirs: [{ from: '../styles', to: '/styles' }],
  previewHead: (head) => `
    ${head}
    <link rel="stylesheet" href="styles/fn.css">
    <link rel="stylesheet" href="styles/fonts.css">

    <script type="module">
      import { applyTheme } from '../components/index.js';
      applyTheme('#ffb000', '#111111');
    </script>

    <style>
      :root {
        background: var(--color-bg);
        color: var(--color-fg);
      }
    </style>
`,
};
export default config;


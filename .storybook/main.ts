import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: "tag",
  },
  refs: {
    'design-system': {
      title: 'Next UI',
      url: 'https://storiesv2.nextui.org',
    },
  },
};

export default config;

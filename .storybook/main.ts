import path from 'path';
import { fileURLToPath } from 'url';
import type { StorybookConfig } from '@storybook/react-vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],

  typescript: {
    reactDocgen: 'react-docgen',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  core: {
    disableTelemetry: true
  },

  refs: {
    'design-system': {
      title: 'HeroUI',
      url: 'https://storybook-v3.heroui.com/',
    },
  },

  viteFinal: (config) => {
    config.resolve ??= {};
    config.resolve.alias = {
      ...config.resolve.alias as object,
      'next/navigation': path.resolve(__dirname, './mocks/next-navigation.ts'),
    };
    return config;
  },
};

export default config;

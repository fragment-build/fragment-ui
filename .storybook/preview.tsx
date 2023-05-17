import 'tailwindcss/tailwind.css';
import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { Preview } from '@storybook/react';

export const decorators = [
  (Story) => (
    <NextUIProvider>
      <Story />
    </NextUIProvider>
  ),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

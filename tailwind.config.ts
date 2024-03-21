import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';
import { fragmentui } from './src/tailwind.plugin';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    fragmentui(),
    nextui({
      themes: {
        dark: {
          colors: {
            background: '#131316',
          }
        },
      },
    }),
  ],
};

export default config;

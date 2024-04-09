import type { Config } from 'tailwindcss';
import { withTailwindFragment } from './src/tailwind.plugin';

const config: Config = withTailwindFragment({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
});

export default config;

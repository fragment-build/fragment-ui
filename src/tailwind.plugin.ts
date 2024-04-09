import { NextUIPluginConfig, nextui } from "@nextui-org/react";
import defaultsDeep from "lodash.defaultsdeep";
import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"
import { withTV } from 'tailwind-variants/transformer';

export const fragmentui = () => plugin(function({ addBase, config }) {
  addBase({
    'h1': {
      fontSize: config('theme.fontSize.3xl'),
      fontWeight: config('theme.fontWeight.semibold'),
    },
    'h2': {
      fontSize: config('theme.fontSize.2xl'),
      fontWeight: config('theme.fontWeight.semibold'),
    },
    'h3': {
      fontSize: config('theme.fontSize.xl'),
      fontWeight: config('theme.fontWeight.semibold'),
    },
  });
});

interface TailwindFragmentOptions {
  nextUIPluginConfig?: NextUIPluginConfig;
}

export const withTailwindFragment = (config: Config, options?: TailwindFragmentOptions): Config => withTV({
  darkMode: 'class',
  ...config,
  plugins: [
    ...(config.plugins ?? []),
    fragmentui(),
    nextui(defaultsDeep(options?.nextUIPluginConfig ?? {}, {
      themes: {
        dark: {
          colors: {
            background: '#131316',
          }
        },
      },
    })),
  ],
});

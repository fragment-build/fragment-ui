import { HeroUIPluginConfig, heroui } from '@heroui/react';
import defaultsDeep from 'lodash.defaultsdeep';
import { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin'

export const fragmentui = () => plugin(function({ addBase, theme }) {
  addBase({
    'h1': {
      fontSize: theme('fontSize.3xl'),
      fontWeight: theme('fontWeight.semibold'),
    },
    'h2': {
      fontSize: theme('fontSize.2xl'),
      fontWeight: theme('fontWeight.semibold'),
    },
    'h3': {
      fontSize: theme('fontSize.xl'),
      fontWeight: theme('fontWeight.semibold'),
    },
    '.apexcharts-yaxis-label, .apexcharts-xaxis-label': {
      fill: 'currentColor !important',
    },
    '.apexcharts-legend-text': {
      color: 'inherit !important',
    },
    '.apexcharts-datalabel-label, .apexcharts-datalabel-value': {
      fill: 'currentColor !important',
    },
    '.apexcharts-tracks .apexcharts-radialbar-area': {
      stroke: theme('colors.content2'),
    },
    '.apexcharts-gridline': {
      stroke: theme('colors.content4'),
    },
    '.apexcharts-pie-area': {
      stroke: theme('colors.content1'),
      transitionProperty: theme('transitionProperty.opacity'),
      transitionDuration: theme('transitionDuration.250'),
      filter: 'none !important',
      '&:hover': {
        opacity: theme('opacity.hover'),
      },
    },
    '.apexcharts-pie .apexcharts-datalabels rect': {
      fill: String(theme('colors.content1')),
    },
    '.apexcharts-pie-label': {
      fill: 'currentColor !important',
    },
    '.apexcharts-tooltip-series-group': {
      backgroundColor: 'inherit !important'
    }
  });
});

interface TailwindFragmentOptions {
  heroUIPluginConfig?: HeroUIPluginConfig;
}

export const withTailwindFragment = (config: Config, options?: TailwindFragmentOptions): Config => ({
  darkMode: 'class',
  ...config,
  plugins: [
    ...(config.plugins ?? []),
    fragmentui(),
    heroui(defaultsDeep(options?.heroUIPluginConfig ?? {}, {
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

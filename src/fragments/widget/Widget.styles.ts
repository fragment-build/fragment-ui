import { tv } from 'tailwind-variants';

export const widget = tv({
  slots: {
    base: 'fragment-widget',
    header: 'fragment-widget__header',
    headerStartContent: 'fragment-widget__header-start',
    heading: 'fragment-widget__heading',
    title: 'fragment-widget__title',
    description: 'fragment-widget__description',
    headerEndContent: 'fragment-widget__header-end',
    content: 'fragment-widget__content',
    footer: 'fragment-widget__footer',
  },
  variants: {
    size: {
      sm: { base: 'fragment-widget--sm' },
      md: { base: 'fragment-widget--md' },
      lg: { base: 'fragment-widget--lg' },
      full: { base: 'fragment-widget--full' },
    },
    padding: {
      none: { base: 'fragment-widget--flush' },
      sm: { base: 'fragment-widget--padding-sm' },
      md: {},
    },
  },
  defaultVariants: {
    size: 'sm',
    padding: 'md',
  },
});

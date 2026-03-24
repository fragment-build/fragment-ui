import { tv } from 'tailwind-variants';

export const widget = tv({
  slots: {
    base: 'fragment-widget',
    header: 'fragment-widget__header',
    headerEndContent: 'fragment-widget__header-end',
    content: 'fragment-widget__content',
  },
  variants: {
    size: {
      sm: { base: 'fragment-widget--sm' },
      md: { base: 'fragment-widget--md' },
      lg: { base: 'fragment-widget--lg' },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

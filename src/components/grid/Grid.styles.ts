import { tv } from 'tailwind-variants';

export const grid = tv({
  slots: {
    base: 'fragment-grid',
  },
  variants: {
    size: {
      sm: { base: 'fragment-grid--sm' },
      md: { base: 'fragment-grid--md' },
      lg: { base: 'fragment-grid--lg' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

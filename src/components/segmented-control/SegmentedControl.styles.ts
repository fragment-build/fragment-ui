import { tv } from 'tailwind-variants';

export const segmentedControl = tv({
  slots: {
    base: 'fragment-segmented-control',
    item: 'fragment-segmented-control__item',
  },
  variants: {
    size: {
      sm: { base: 'fragment-segmented-control--sm' },
      md: {},
    },
    fullWidth: {
      true: { base: 'fragment-segmented-control--full-width' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

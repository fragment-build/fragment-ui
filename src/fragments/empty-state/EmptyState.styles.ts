import { tv } from 'tailwind-variants';

export const emptyState = tv({
  slots: {
    base: 'fragment-empty-state',
    icon: 'fragment-empty-state__icon',
    title: 'fragment-empty-state__title',
    description: 'fragment-empty-state__description',
    actions: 'fragment-empty-state__actions',
  },
  variants: {
    size: {
      sm: { base: 'fragment-empty-state--sm' },
      md: {},
    },
    bordered: {
      true: { base: 'fragment-empty-state--bordered' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

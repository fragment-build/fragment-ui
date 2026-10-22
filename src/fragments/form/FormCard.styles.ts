import { tv } from 'tailwind-variants';

export const formCard = tv({
  slots: {
    base: 'fragment-form-card',
    header: 'fragment-form-card__header',
    heading: 'fragment-form-card__heading',
    title: 'fragment-form-card__title',
    description: 'fragment-form-card__description',
    headerEnd: 'fragment-form-card__header-end',
    body: 'fragment-form-card__body',
    footer: 'fragment-form-card__footer',
  },
  variants: {
    variant: {
      default: {},
      danger: { base: 'fragment-form-card--danger' },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

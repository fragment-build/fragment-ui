import { tv } from 'tailwind-variants';

export const formSection = tv({
  slots: {
    base: 'fragment-form-section',
    main: 'fragment-form-section__main',
    info: 'fragment-form-section__info',
    content: 'fragment-form-section__content',
    description: 'fragment-form-section__description',
  },
  variants: {
    direction: {
      horizontal: { base: 'fragment-form-section--horizontal' },
      vertical: { base: 'fragment-form-section--vertical' },
    },
    fullWidth: {
      true: { base: 'fragment-form-section--full-width' },
    },
  },
  defaultVariants: {
    direction: 'vertical',
    fullWidth: false,
  },
});

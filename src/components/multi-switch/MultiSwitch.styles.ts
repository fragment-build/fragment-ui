import { tv } from 'tailwind-variants';

export const multiSwitch = tv({
  slots: {
    button: 'fragment-multi-switch__button',
  },
  variants: {
    size: {
      sm: { button: 'fragment-multi-switch__button--sm' },
      md: { button: 'fragment-multi-switch__button--md' },
      lg: { button: 'fragment-multi-switch__button--lg' },
    },
  },
});

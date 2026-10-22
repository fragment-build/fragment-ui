import { tv } from 'tailwind-variants';

export const saveBar = tv({
  slots: {
    base: 'fragment-save-bar',
    bar: 'fragment-save-bar__bar',
    message: 'fragment-save-bar__message',
    actions: 'fragment-save-bar__actions',
  },
  variants: {
    isVisible: {
      true: { base: 'fragment-save-bar--visible' },
      false: {},
    },
  },
});

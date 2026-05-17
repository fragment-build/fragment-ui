import { tv } from 'tailwind-variants';

export const shell = tv({
  slots: {
    base: 'fragment-shell',
    main: 'fragment-shell__main',
  },
  variants: {
    direction: {
      horizontal: {
        base: 'fragment-shell--horizontal',
      },
      vertical: {
        base: 'fragment-shell--vertical',
      },
    },
  },
});

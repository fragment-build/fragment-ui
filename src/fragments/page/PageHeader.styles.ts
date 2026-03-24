import { tv } from 'tailwind-variants';

export const pageHeader = tv({
  slots: {
    base: 'fragment-page-header',
    description: 'fragment-page-header__description',
    actions: 'fragment-page-header__actions',
  },
});

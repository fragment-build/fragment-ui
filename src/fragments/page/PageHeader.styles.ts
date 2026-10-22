import { tv } from 'tailwind-variants';

export const pageHeader = tv({
  slots: {
    base: 'fragment-page-header',
    row: 'fragment-page-header__row',
    heading: 'fragment-page-header__heading',
    eyebrow: 'fragment-page-header__eyebrow',
    title: 'fragment-page-header__title',
    description: 'fragment-page-header__description',
    actions: 'fragment-page-header__actions',
    footer: 'fragment-page-header__footer',
  },
  variants: {
    hasFooter: {
      true: { base: 'fragment-page-header--with-footer' },
    },
  },
});

import { tv } from 'tailwind-variants';

export const navbar = tv({
  slots: {
    topbar: 'fragment-navbar__topbar',
    end: 'fragment-navbar__end',
    bottomNav: 'fragment-navbar__bottom-nav',
    bottomNavButton: 'fragment-navbar__bottom-nav-button',
  },
});

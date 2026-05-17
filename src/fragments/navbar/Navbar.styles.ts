import { tv } from 'tailwind-variants';

export const navbar = tv({
  slots: {
    topbar: 'fragment-navbar__topbar',
    tabs: 'fragment-navbar__tabs',
    tab: 'fragment-navbar__tab',
    end: 'fragment-navbar__end',
    bottomNav: 'fragment-navbar__bottom-nav',
    bottomNavBadge: 'fragment-navbar__bottom-nav-badge',
  },
});

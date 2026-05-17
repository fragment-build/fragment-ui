import { tv } from 'tailwind-variants';

export const sidebar = tv({
  slots: {
    base: 'fragment-sidebar',
    collapsed: 'fragment-sidebar__collapsed',
    collapsedBody: 'fragment-sidebar__collapsed-body',
    collapsedFooter: 'fragment-sidebar__collapsed-footer',
    expanded: 'fragment-sidebar__expanded',
    expandedBody: 'fragment-sidebar__expanded-body',
    expandedFooter: 'fragment-sidebar__expanded-footer',
    placeholder: 'fragment-sidebar__placeholder',
    layoutButtonWrapper: 'fragment-sidebar__layout-button-wrapper',
    layoutButton: 'fragment-sidebar__layout-button',
    bottomNav: 'fragment-sidebar__bottom-nav',
    bottomNavModalBody: 'fragment-sidebar__modal-body',
    bottomNavModalFooter: 'fragment-sidebar__modal-footer',
  },
  variants: {
    layout: {
      auto: { base: 'fragment-sidebar--auto' },
      collapsed: { base: 'fragment-sidebar--collapsed' },
      expanded: { base: 'fragment-sidebar--expanded' },
    },
  },
});

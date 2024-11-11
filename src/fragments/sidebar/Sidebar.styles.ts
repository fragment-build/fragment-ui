import { tv } from "@nextui-org/react";


export const sidebar = tv({
  slots: {
    base: 'hidden md:flex',
    collapsed: 'fixed top-0 left-0 border-r-[1px] border-default-100 flex flex-col h-screen bg-content1 gap-8 transition-all',
    collapsedBody: 'w-20 items-center flex flex-col gap-8 px-3 pt-8 overflow-y-auto flex-1',
    collapsedFooter: 'w-20 items-center flex flex-col gap-8 px-3 pb-8',
    expanded: 'fixed top-0 left-0 border-r-[1px] border-default-100 flex flex-col h-screen bg-content1 gap-8 overflow-hidden transition-all',
    expandedBody: 'w-72 flex flex-col gap-8 px-3 pt-8 overflow-y-auto flex-1',
    expandedFooter: 'w-72 flex flex-col gap-8 px-3 pb-8',
    placeholder: 'transition-all h-screen',
    layoutButtonWrapper: 'fixed top-6 transition-all',
    layoutButton: 'h-6 w-6 min-w-6 bg-default-100',
    bottomNav: 'fixed md:hidden z-50 bottom-0 bg-background flex w-full gap-2 px-2 py-1 border-t-[1px] border-default-100 [&>*:nth-child(n+5):not(:last-child)]:hidden',
    bottomNavButton: 'h-12 flex-1',
    bottomNavMenuButton: 'flex-col gap-0 h-12 flex-1',
    bottomNavModalBase: 'max-w-full m-0 sm:m-0 h-full',
    bottomNavModalWrapper: 'pb-14 z-40',
    bottomNavModalBackdrop: 'z-40',
    bottomNavModalBody: 'flex flex-col gap-8',
    bottomNavModalFooter: 'flex flex-col gap-8',
  },
  variants: {
    layout: {
      auto: {
        expanded: 'w-20 opacity-0 pointer-events-none xl:w-72 xl:opacity-100 xl:pointer-events-auto',
        placeholder: 'w-20 opacity-0 pointer-events-none xl:w-72 xl:opacity-100 xl:pointer-events-auto',
        layoutButtonWrapper: 'left-20 translate-x-1/2 rotate-180 xl:left-72 xl:-translate-x-1/2 xl:rotate-0',
        collapsed: 'xl:opacity-0',
      },
      collapsed: {
        expanded: 'w-20 opacity-0 pointer-events-none',
        placeholder: 'w-20 opacity-0 pointer-events-none',
        layoutButtonWrapper: 'left-20 translate-x-1/2 rotate-180',
      },
      expanded: {
        collapsed: 'opacity-0',
        expanded: 'w-72',
        placeholder: 'w-72',
        layoutButtonWrapper: 'left-72 -translate-x-1/2',
      },
    },
  },
  defaultVariants: {
    layout: 'auto',
  },
});
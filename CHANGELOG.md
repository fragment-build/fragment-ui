# Changelog

All notable changes to this project are documented in this file.

## 3.3.0

### Added

- **Themable Sidebar and Navbar surfaces.** The `Sidebar` rail and the `Navbar` topbar now
  paint their own surface instead of showing through to `<body>`, so they can be themed
  independently of the page:
  - `--sidebar` / `--sidebar-foreground` — the sidebar rail (collapsed and expanded) and its
    mobile bottom nav.
  - `--navbar` / `--navbar-foreground` — the navbar topbar and its mobile bottom nav.

  All four default to `var(--background)` / `var(--foreground)`, so a theme that declares none
  of them renders exactly as it did in 3.2.x, in both light and dark.
- Matching Tailwind utilities via `@theme inline`: `bg-sidebar`, `text-sidebar-foreground`,
  `bg-navbar`, `text-navbar-foreground`.
- Optional escape hatches for rails that contrast with the page, both defaulting to their
  page-level role so they are inert until set:
  - `--sidebar-default` — hover ground of collapsible nav groups (was hard-wired to
    `--default`).
  - `--sidebar-accent-soft-foreground` — ink of the active nav item and active group (was
    hard-wired to `--accent-soft-foreground`, which is mixed against the *page* foreground).

### Changed

- The sidebar tree guides and the accordion trigger label now derive from
  `--sidebar-foreground` instead of `--foreground`. Identical output by default.
- `.fragment-sidebar__bottom-nav` and `.fragment-navbar__bottom-nav` use `bg-sidebar` /
  `bg-navbar` in place of the hardcoded `bg-background`.

### Notes

- The active nav pill keeps using `--accent-soft`, which is a translucent colour mix; it
  composites over the rail's own surface and so follows `--sidebar` without any change.
- `.fragment-sidebar__placeholder` is deliberately left transparent — it is the in-flow spacer
  behind the fixed rail, not a surface.

# Changelog

All notable changes to this project are documented in this file.

## 4.0.0

A dashboard-density release. Nothing is removed from the API, but the look changes for every
consumer, which is why this is a major version: check your screens after upgrading.

### Changed (visual)

- **Type scale.** Tailwind's own `text-xs` / `text-sm` (12 / 14px) instead of the pinned 13 / 15px,
  and body copy at `text-sm`. Base headings are tighter: `h1` 2xl, `h2` lg, `h3` base, `h4` sm.
- **Controls at HeroUI's own size.** The oversized field padding (`px-6 py-4`) and the 48px
  buttons are gone; fields keep a hairline border and no shadow.
- **Shell.** Tighter gutters (`px-4` → `lg:px-10`, `pt-8`) and a 1600px content cap.
- **Sidebar.** 256px expanded / 64px collapsed rail, 36px items, quiet group labels for
  `navigation` items with a `label`, the footer behind a hairline. The mobile bottom nav now
  lists every navigation group, not only the first.
- **Tabs.** Default tabs are a segmented control on `--default`. Secondary (underline) tabs size to
  their label and sit left; with no `<Tabs.Indicator>` rendered, the underline is drawn in CSS —
  the animated indicator can stick on its first frame when the selection is set during hydration.
- **Cards** keep the hairline and take an optional lift from `--fragment-card-shadow`.
- **Tables.** The primary table is one flat card: frame, header band, row dividers, a visible
  row hover. HeroUI's grey frame with a white card inset is gone.
- **PageHeader / Widget / FormSection** typography and spacing to match.

### Added

- `StatCard` — a KPI tile: label, value, optional delta (with `sentiment` for metrics where down
  is good), hint, help tooltip, icon, loading skeleton.
- `EmptyState` — icon, title, description and actions; `sm` size and a `bordered` variant.
- `SegmentedControl` — two to five exclusive options shown at once, on `ToggleButtonGroup`.
- `FormCard` — a settings group on its own card, with `titleEndContent`, `footer` and a `danger`
  variant.
- `SaveBar` — a sticky save bar that appears with unsaved changes and takes no room when hidden.
- `CodeSnippet` `variant="block"` with a titled header, and `copyLabel` / `copiedLabel` for i18n.
- `PageHeader` `eyebrow` and `footer` slots; `title` accepts any node.
- `Widget` `description`, `footer`, `padding` (`none` | `sm` | `md`), `size="full"`, `className`.
- `FormSection` `titleEndContent`.
- `--fragment-card-shadow` token.

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

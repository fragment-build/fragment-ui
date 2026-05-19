<div align="center">
  <img style="height: 100px; margin-bottom: 10px;" src="public/assets/logo.svg" alt="Logo - Fragment UI" />
</div>
<div align="center">
  <h1>Fragment UI (Work in Progress)</h1>
  <p>Create SaaS UIs with a simple and straightforward design system and component library</p>
  <a href="https://www.npmjs.org/package/@fragment-build/ui">
    <img alt="NPM package version" src="https://img.shields.io/npm/v/@fragment-build/ui?label=npm&logo=npm">
  </a>
  <a href="https://fragment-build.github.io/fragment-ui/">
    <img alt="Fragment UI Storybook" src="https://raw.githubusercontent.com/storybookjs/brand/main/badge/badge-storybook.svg">
  </a>
</div>
<div align="center" style="margin: 20px">
  <a href="https://discord.gg/A4GrRkgpym">
    <img alt="Fragment UI Discord Server" src="https://img.shields.io/badge/join_discord_-7289da.svg?style=for-the-badge&logo=discord&logoColor=white">
  </a>
</div>

---

Fragment UI is a design system and React component library which provides already compositioned views for many SaaS apps which are completely customizable with our powerful theme system.

### Table of Contents
- [✨ Features](#-features)
- [✨ Components](#-components)
- [⏳ Installation](#-installation)
- [🔧 Configuration](#-configuration)
    - [`linkComponent`](#linkcomponent)
  - [Next.js 13+](#nextjs-13)
- [🤝 Contributing](#-contributing)
- [👨‍💻 Development](#-development)
- [🤝 Community support](#-community-support)
- [📝 License](#-license)
- [🔧 Built with](#-built-with)

## ✨ Features

- **Global theme file** with design tokens for colors, padding, margin, border-radius
- **Global event system:** Hook into every click event to trigger analytics/tracking events. All events are already pre-labeled but can be customized.
- **Accessibility:** All components are already prepared using aria labels and you can also easily use tab to navigate through them
- **Light / Dark mode compatible:** By design we're supporting ☀️ Light / 🌙 Dark modes
- **Interactive Theme Builder (soon):** A user interface to create your custom theme file with a real-time preview
- **Native i18n support (soon):** All components are localized by default but o course you can override this behavior

## ✨ Components

- Roles- & Permission Management
- User Management
- Team/Organization management with Invites
- Payment/Subscription Management
- Auth pages: Login, Signup, Password reset, Email confirmation
- Dashboard View with Sidebar and Topbar
- User Settings

## ⏳ Installation

1. Setup Tailwind CSS  
[Installation Guide](https://tailwindcss.com/docs/installation)

2. Install Fragment UI and its peer dependencies
```bash
npm install -S @fragment-build/ui @heroui/react @heroui/styles @teispace/next-themes
```

As a next step you must configure the library the way you want to. See [**Configuration**](#🔧-configuration) section.

All done. Enjoy 🎉

## 🔧 Configuration

Import the HeroUI styles and Fragment UI styles in your global CSS file:

```ts
// src/main.css

@import 'tailwindcss';
@import "@heroui/styles";
@import "@fragment-build/ui";
```

Add `FragmentUIProvider` at the root of your application:

```tsx
import React from 'react';
import { FragmentUIProvider } from '@fragment-build/ui';

function App() {
  return (
    <FragmentUIProvider>
      <YourApplication />
    </FragmentUIProvider>
  );
}
```

#### `linkComponent`

Fragment UI renders navigation links internally (e.g. in `Navbar`, `Sidebar`). By default it uses a plain `<a>` tag. Pass a `linkComponent` to use your router's link component instead so navigation stays client-side:

```tsx
import Link from 'next/link';
import { FragmentUIProvider } from '@fragment-build/ui';

function App() {
  return (
    <FragmentUIProvider linkComponent={Link}>
      <YourApplication />
    </FragmentUIProvider>
  );
}
```

Any component that accepts an `href` prop works — React Router's `<Link>`, TanStack Router's `<Link>`, etc.

### Next.js 13+

You need to [setup Tailwind 4 using PostCSS](https://tailwindcss.com/docs/installation/framework-guides/nextjs)

```ts
// postcss.config.mjs

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

Set up your root layout with server-side theme reading to avoid flash of unstyled content:

```tsx
// app/layout.tsx
import { FragmentUIProvider } from '@fragment-build/ui';
import { ThemeProvider } from '@teispace/next-themes';
import { getTheme } from '@teispace/next-themes/server';

export default async function RootLayout({ children }) {
  const initialTheme = await getTheme();

  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" initialTheme={initialTheme ?? undefined}>
          <FragmentUIProvider>
            {children}
          </FragmentUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

Toggle the theme in a client component using the `useTheme` hook:

```tsx
// components/ThemeToggle.tsx
'use client';
import { useTheme } from '@teispace/next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle theme
    </button>
  );
}
```

Or use the built-in `ThemeSwitch` component:

```tsx
import { ThemeSwitch } from '@fragment-build/ui';

<ThemeSwitch />
```

## 🤝 Contributing

Feel free to fork and make a Pull Request to this project. All the input is warmly welcome!

To increase the amount of PRs being merged asap, we have some guidelines:

1. **Bugfixes**: If it's just a small fix you can just create a PR for it and explain your thoughts if necessary, otherwise use GitHub or Discord to start a discussion before you put a lot of effort into code changes.
2. **Features**: If you want to add new features, please use GitHub or Discord to start a discussion and we can figure out design and architectural decisions together.
3. **Breaking Changes**: Please use the `next-major` branch as your base and target branch for your contributions.


## 👨‍💻 Development
- Clone repository

    ```bash
    git clone git@github.com:fragment-build/fragment-ui.git
    cd fragment-ui
    npm install
    ```

- Run storybook

    ```bash
    npm run storybook
    ```

## 🤝 Community support

For additional help, you can use one of these channels to ask a question:

- [Discord](https://discord.gg/A4GrRkgpym) We're present on official Fragment UI Discord. Feel free to use our channels or reach out to us directly.
- [GitHub](https://github.com/fragment-build/fragment-ui) (Bug reports, Contributions, Questions and Discussions)

## 📝 License

[Apollo 2.0 License](LICENSE.md) Copyright (c) solyd GmbH

## 🔧 Built with

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HeroUI](https://img.shields.io/badge/heroui-000000.svg?style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TailwindVariants](https://img.shields.io/badge/tailwind_variants_-000000.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
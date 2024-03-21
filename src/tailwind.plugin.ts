import plugin from "tailwindcss/plugin"

export const fragmentui = () => plugin(function({ addBase, config }) {
  addBase({
    'h1': {
      fontSize: config('theme.fontSize.3xl'),
      fontWeight: config('theme.fontWeight.semibold'),
    },
    'h2': {
      fontSize: config('theme.fontSize.2xl'),
      fontWeight: config('theme.fontWeight.bold'),
    },
    'h3': {
      fontSize: config('theme.fontSize.xl'),
      fontWeight: config('theme.fontWeight.bold'),
    },
  })
});

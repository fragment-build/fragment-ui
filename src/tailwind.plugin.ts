import plugin from 'tailwindcss/plugin';

export const fragmentui = (): ReturnType<typeof plugin> => plugin(function({ addBase, theme }) {
  addBase({
    'h1': {
      fontSize: theme('fontSize.3xl'),
      fontWeight: theme('fontWeight.semibold'),
    },
    'h2': {
      fontSize: theme('fontSize.2xl'),
      fontWeight: theme('fontWeight.semibold'),
    },
    'h3': {
      fontSize: theme('fontSize.xl'),
      fontWeight: theme('fontWeight.semibold'),
    },
  });
});

// @teispace/next-themes imports useServerInsertedHTML from next/navigation for
// Next.js SSR support. Storybook runs in a pure browser/Vite context where
// next/navigation doesn't exist, so we stub it out to prevent the build error.
export const useServerInsertedHTML = () => {};

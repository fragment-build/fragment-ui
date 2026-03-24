import { ThemeProvider } from 'next-themes';

interface FragmentUIProviderProps {
  children: React.ReactNode;
}

export const FragmentUIProvider: React.FC<FragmentUIProviderProps> = ({
  children,
}) => {
  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  );
};

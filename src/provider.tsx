import { ThemeProvider } from 'next-themes';
import { FragmentUIContext, type LinkComponent } from './context';

interface FragmentUIProviderProps {
  children: React.ReactNode;
  linkComponent?: LinkComponent;
}

export const FragmentUIProvider: React.FC<FragmentUIProviderProps> = ({
  children,
  linkComponent = 'a',
}) => {
  return (
    <FragmentUIContext.Provider value={{ linkComponent }}>
      <ThemeProvider attribute="class">
        {children}
      </ThemeProvider>
    </FragmentUIContext.Provider>
  );
};

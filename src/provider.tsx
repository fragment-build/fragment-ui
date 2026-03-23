import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import defaultsDeep from 'lodash.defaultsdeep';
import { FragmentUIContext, defaultContext } from './context';

interface FragmentUIProviderProps {
  defaults?: FragmentUIContext['defaults'];
  children: React.ReactNode;
}

export const FragmentUIProvider: React.FC<FragmentUIProviderProps> = ({
  children,
  defaults,
}) => {
  const initContext = defaults ? defaultsDeep({ defaults }, defaultContext) : defaultContext;
  const [context, setContext] = useState(initContext);

  useEffect(() => {
    if (!defaults) return;
    setContext(defaultsDeep({ defaults }, defaultContext));
  }, [defaults]);

  return (
    <FragmentUIContext.Provider value={context}>
      <ThemeProvider attribute="class">
        {children}
      </ThemeProvider>
    </FragmentUIContext.Provider>
  );
};

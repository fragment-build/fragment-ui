import { HeroUIProvider, HeroUIProviderProps } from '@heroui/react';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import defaultsDeep from 'lodash.defaultsdeep';
import { FragmentUIContext, defaultContext } from './context';

interface FragmentUIProviderProps extends HeroUIProviderProps {
  defaults?: FragmentUIContext['defaults'];
}

export const FragmentUIProvider: React.FC<FragmentUIProviderProps> = ({
  children,
  defaults,
  ...rest
}) => {
  const initContext = defaults ? defaultsDeep({ defaults }, defaultContext) : defaultContext;
  const [context, setContext] = useState(initContext);

  useEffect(() => {
    if (!defaults) return;
    setContext(defaultsDeep({ defaults }, defaultContext));
  }, [defaults]);

  return (
    <FragmentUIContext.Provider value={context}>
      <HeroUIProvider {...rest}>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </HeroUIProvider>
    </FragmentUIContext.Provider>
  );
};

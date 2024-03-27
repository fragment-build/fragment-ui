import { NextUIProvider, NextUIProviderProps } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import defaultsDeep from "lodash.defaultsdeep";
import { FragmentUIContext, defaultContext } from "./context";

interface FragmentUIProviderProps {
  children: React.ReactNode;
  locale?: NextUIProviderProps['locale'];
  navigate?: NextUIProviderProps['navigate'];
  defaults?: FragmentUIContext['defaults']
}

export const FragmentUIProvider: React.FC<FragmentUIProviderProps> = ({
  children,
  defaults,
  ...rest
}) => {
  const initContext = defaults ? defaultsDeep(defaultContext, { defaults }) : defaultContext;
  const [context, setContext] = useState(initContext);

  useEffect(() => {
    if (!defaults) return;
    setContext(defaultsDeep(defaultContext, { defaults }));
  }, [defaults]);

  return (
    <FragmentUIContext.Provider value={context}>
      <NextUIProvider {...rest}>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </NextUIProvider>
    </FragmentUIContext.Provider>
  );
}

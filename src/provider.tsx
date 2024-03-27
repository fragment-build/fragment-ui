import { NextUIProvider, NextUIProviderProps } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import deepMerge from "deepmerge";
import { FragmentUIContext, defaultContext } from "./context";

interface FragmentUIProviderProps {
  children: React.ReactNode;
  locale?: NextUIProviderProps['locale'];
  navigate?: NextUIProviderProps['navigate'];
  defaults?: FragmentUIContext['defaults']
}

export const FragmentUIProvider: React.FC<FragmentUIProviderProps> = ({
  children,
  defaults = {},
  ...rest
}) => {
  const [context, setContext] = useState(defaultContext);

  useEffect(() => {
    setContext((oldContext) => deepMerge(oldContext, { defaults }))
  }, [defaults])

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

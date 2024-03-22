import { NextUIProvider, NextUIProviderProps } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import deepMerge from "deepmerge";
import { FragmentUIContext, defaultContext } from "./context";

interface FragmentUIProviderProps {
  children: React.ReactNode;
  useNextJS?: boolean;
  locale?: NextUIProviderProps['locale'];
  navigate?: NextUIProviderProps['navigate'];
  defaults?: FragmentUIContext['defaults']
}

export const FragmentUIProvider: React.FC<FragmentUIProviderProps> = ({
  children,
  useNextJS = false,
  defaults = {},
  ...rest
}) => {
  const [context, setContext] = useState(defaultContext);

  useEffect(() => {
    setContext(deepMerge(context, { defaults }))
  }, [defaults])

  const render = useNextJS
    ? <ThemeProvider attribute="class" defaultTheme="dark">{children}</ThemeProvider>
    : children;

  return (
    <FragmentUIContext.Provider value={context}>
      <NextUIProvider {...rest}>{render}</NextUIProvider>
    </FragmentUIContext.Provider>
  );
}

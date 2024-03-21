import { NextUIProvider, NextUIProviderProps } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

interface FragmentUIProviderProps {
  children: React.ReactNode;
  useNextJS?: boolean;
  locale?: NextUIProviderProps['locale'];
  navigate?: NextUIProviderProps['navigate'];
}

export const FragmentUIProvider: React.FC<FragmentUIProviderProps> = ({
  children,
  useNextJS = false,
  ...rest
}) => {
  const render = useNextJS ? (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  ) : children;

  return <NextUIProvider {...rest}>{render}</NextUIProvider>;
}

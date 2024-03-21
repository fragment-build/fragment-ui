import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

interface FragmentUIProviderProps {
  children: React.ReactNode;
  useNextJS?: boolean;
}

export const FragmentUIProvider: React.FC<FragmentUIProviderProps> = ({
  children,
  useNextJS = false,
}) => {
  const render = useNextJS ? (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  ) : children;

  return <NextUIProvider>{render}</NextUIProvider>;
}

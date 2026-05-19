'use client';

import { useTheme } from '@teispace/next-themes';
import { IconMoon, IconSun } from '@tabler/icons-react';
import  { Button, type ButtonProps } from '@heroui/react';

export type ThemeSwitchProps = ButtonProps;

export const ThemeSwitch: React.FC<ThemeSwitchProps> = (props) => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button isIconOnly size="sm" variant="tertiary" onPress={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')} {...props}>
      {resolvedTheme === 'light' ? <IconSun size={18} /> : <IconMoon size={18} />}
    </Button>
  );
};

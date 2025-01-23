import { useTheme } from 'next-themes';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { Button } from '../base';
import { ButtonProps } from '@heroui/react';
import { useEffect, useState } from 'react';

/**
 * Primary UI component for selecting a color
 */

export type ThemeSwitchProps = ButtonProps;

export const ThemeSwitch: React.FC<ThemeSwitchProps> = (props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted) return null;

  return (
    <Button isIconOnly size="sm" onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')} {...props}>
      {theme === 'light' ? <IconSun size={18} /> : <IconMoon size={18} />}
    </Button>
  );
};

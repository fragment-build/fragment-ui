import { useTheme } from 'next-themes';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { Button } from '../base';
import { ButtonProps } from '@nextui-org/react';

/**
 * Primary UI component for selecting a color
 */

export interface ThemeSwitchProps extends ButtonProps {
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = (props) => {
  const { theme, setTheme } = useTheme()

  return (
    <Button isIconOnly size="sm" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} {...props}>
      {theme === 'light' ? <IconSun size={18} /> : <IconMoon size={18} />}
    </Button>
  )
};

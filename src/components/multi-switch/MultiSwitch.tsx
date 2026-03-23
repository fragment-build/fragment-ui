import { forwardRef, useEffect, useState } from 'react';
import { withFragment } from '../../withFragment';
import { IconCheck, IconSlash, IconX } from '@tabler/icons-react';
import { Button, ButtonGroup, type ButtonGroupProps } from '@heroui/react';
import { tv } from 'tailwind-variants';

/**
 * Primary UI component for selecting a color
 */

export interface MultiSwitchProps extends Omit<ButtonGroupProps, 'className'> {
  defaultValue?: number;
  onValueChange: (value: number) => void;
  variant?: 'outline' | 'tertiary';
}

const multiSwitch = tv({
  slots: {
    button: 'min-w-0',
  },
  variants: {
    size: {
      sm: {
        button: 'px-3'
      },
      md: {
        button: 'px-4'
      },
      lg: {
        button: 'px-5'
      }
    },
  },
});

export const MultiSwitch = withFragment(forwardRef<HTMLInputElement, MultiSwitchProps>(({
  defaultValue,
  onValueChange,
  size = 'md',
  variant = 'outline',
  ...props
}, ref) => {
  const [value, setValue] = useState(defaultValue ?? 0);
  const { button } = multiSwitch({ size });

  useEffect(() => onValueChange && onValueChange(value), [value, onValueChange]);

  return (
    <>
      <input ref={ref} value={value} type="number" className="hidden" min={0} max={2} required />
      <ButtonGroup size={size} {...props}>
        <Button className={button()} onPress={() => setValue(0)} variant={value === 0 ? 'danger' : variant}><IconX size={20} /></Button>
        <Button className={button()} onPress={() => setValue(1)} variant={value === 1 ? 'tertiary' : variant}><IconSlash size={20} /></Button>
        <Button className={button()} onPress={() => setValue(2)} variant={value === 2 ? 'primary' : variant}><IconCheck size={20} /></Button>
      </ButtonGroup>
    </>
  );
}), 'multiSwitch');

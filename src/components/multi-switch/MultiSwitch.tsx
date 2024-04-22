import { forwardRef, useEffect, useState } from 'react';
import { Button, ButtonGroup } from '../base';
import { withFragment } from '../../withFragment';
import { IconCheck, IconSlash, IconX } from '@tabler/icons-react';
import { ButtonGroupProps, tv } from '@nextui-org/react';

/**
 * Primary UI component for selecting a color
 */

export interface MultiSwitchProps extends Omit<ButtonGroupProps, 'className'> {
  defaultValue?: number;
  onValueChange: (value: number) => void;
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
    }
  },
});

export const MultiSwitch = withFragment(forwardRef<HTMLInputElement, MultiSwitchProps>(({
  defaultValue,
  onValueChange,
  size = 'md',
  ...props
}, ref) => {
  const [value, setValue] = useState(defaultValue ?? 0);
  const { button } = multiSwitch({ size });

  useEffect(() => onValueChange && onValueChange(value), [value, onValueChange]);

  return (
    <>
      <input ref={ref} value={value} type="number" className="hidden" min={0} max={2} required />
      <ButtonGroup size={size} {...props}>
        <Button className={button()} onClick={() => setValue(0)} {...value === 0 ? { color: 'danger' } : {}}><IconX size={20} /></Button>
        <Button className={button()} onClick={() => setValue(1)} {...value === 1 ? { color: 'default', variant: 'solid' } : {}}><IconSlash size={20} /></Button>
        <Button className={button()} onClick={() => setValue(2)} {...value === 2 ? { color: 'success' } : {}}><IconCheck size={20} /></Button>
      </ButtonGroup>
    </>
  );
}), 'multiSwitch');

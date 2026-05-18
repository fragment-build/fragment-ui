'use client';

import { forwardRef } from 'react';
import { IconCheck, IconSlash, IconX } from '@tabler/icons-react';
import { ToggleButton, ToggleButtonGroup, type ToggleButtonGroup as ToggleButtonGroupType } from '@heroui/react';

export interface MultiSwitchProps extends Omit<ToggleButtonGroupType['RootProps'], 'defaultSelectedKeys' | 'onSelectionChange' | 'selectionMode' | 'disallowEmptySelection'> {
  defaultValue?: number;
  onValueChange: (value: number) => void;
}

export const MultiSwitch = forwardRef<HTMLDivElement, MultiSwitchProps>(({
  defaultValue = 1,
  onValueChange,
  size = 'md',
  ...props
}, ref) => (
  <ToggleButtonGroup
    ref={ref}
    className="fragment-multi-switch"
    selectionMode="single"
    disallowEmptySelection
    defaultSelectedKeys={[String(defaultValue)]}
    onSelectionChange={(keys) => onValueChange(Number([...keys][0]))}
    size={size}
    {...props}
  >
    <ToggleButton id="0" isIconOnly className="fragment-multi-switch__btn--danger"><IconX /></ToggleButton>
    <ToggleButton id="1" isIconOnly className="fragment-multi-switch__btn--neutral">
      <IconSlash />
    </ToggleButton>
    <ToggleButton id="2" isIconOnly>
      <IconCheck />
    </ToggleButton>
  </ToggleButtonGroup>
));

'use client';

import { Avatar, AvatarProps } from '@nextui-org/react';
import { useEffect, useState } from 'react';

/**
 * Primary UI component for selecting a color
 */

interface ColorSelectorProps {
  values: string[];
  defaultValue?: string;
  onValueChange: (color: string) => void;
  color?: AvatarProps['color'];
  size?: AvatarProps['size'];
  icon?: React.ReactNode;
}

export const ColorSelector: React.FC<ColorSelectorProps> = ({ values, defaultValue, onValueChange, icon, ...rest }) => {
  const [value, setValue] = useState(defaultValue && values.includes(defaultValue) ? defaultValue : values[0]);

  useEffect(() => onValueChange(value), [value, onValueChange]);

  return (
    <div className='flex gap-4'>
      {values.map((color) => (
        <Avatar
          as="button"
          showFallback
          fallback={value === color && icon ? icon : <></>}
          style={{ backgroundColor: color }}
          classNames={{ base: 'shrink-0' }}
          isBordered={value === color}
          onClick={() => setValue(color) }
          {...rest}
        />
      ))}
    </div>
  );
};

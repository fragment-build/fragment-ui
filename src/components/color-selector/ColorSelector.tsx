import { type AvatarProps } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { Avatar, Button } from '../base';
import { withFragment } from '../../withFragment';

/**
 * Primary UI component for selecting a color
 */

export interface ColorSelectorProps {
  values: string[];
  defaultValue?: string;
  onValueChange: (color: string) => void;
  color?: AvatarProps['color'];
  size?: AvatarProps['size'];
  icon?: React.ReactNode;
}

export const ColorSelector: React.FC<ColorSelectorProps> = withFragment(({ values, defaultValue, onValueChange, icon, ...rest }) => {
  const [value, setValue] = useState(defaultValue && values.includes(defaultValue) ? defaultValue : values[0]);

  useEffect(() => onValueChange(value), [value, onValueChange]);

  return (
    <div className='flex gap-3'>
      {values.map((color) => (
        <Button radius="full" size={rest.size} isIconOnly disableRipple className="overflow-visible">
          <Avatar
            showFallback
            fallback={value === color && icon ? icon : <></>}
            style={{ backgroundColor: color }}
            classNames={{ base: 'shrink-0' }}
            isBordered={value === color}
            onClick={() => setValue(color) }
            {...rest}
          />
        </Button>
      ))}
    </div>
  );
}, 'colorSelector');

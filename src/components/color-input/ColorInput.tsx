'use client';

import { Avatar, Input, InputProps } from '@nextui-org/react';
import { useEffect, useMemo, useState } from 'react';

/**
 * Primary UI component for selecting a color
 */

interface ColorInputProps extends InputProps {}

export const ColorInput: React.FC<ColorInputProps> = ({
  defaultValue,
  label = 'Color',
  errorMessage = "Please enter a valid color in hex format e.g. #f3f or #ff33ff",
  onValueChange,
  isInvalid,
  ...rest
}) => {
  const [value, setValue] = useState(defaultValue || '#7d7d7d');

  useEffect(() => onValueChange && onValueChange(value), [value, onValueChange]);

  const validateHexColor = (value: string) => value.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/i);

  const invalid = useMemo(() => {
    if (value === "") return false;

    return validateHexColor(value) && !isInvalid ? false : true;
  }, [value, isInvalid]);

  return (
    <Input
      {...rest}
      label={label}
      type="text"
      value={value}
      onValueChange={setValue}
      isInvalid={invalid}
      errorMessage={invalid && errorMessage}
      endContent={(
        <Avatar
          as="button"
          size="sm"
          showFallback
          fallback={<input type='color' className="w-full h-full opacity-0 cursor-pointer" onChange={(e) => setValue(e.currentTarget.value)} />}
          style={{ backgroundColor: value }}
          classNames={{ base: 'shrink-0', fallback: 'w-full h-full' }}
        />
      )}
    />
  );
};
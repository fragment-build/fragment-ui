import type { InputProps } from '@heroui/react';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { Avatar, Input } from '../base';
import { withFragment } from '../../withFragment';

/**
 * Primary UI component for selecting a color
 */

export interface ColorInputProps extends InputProps {
  placeholderValue?: string;
};

export const ColorInput: React.FC<ColorInputProps> = withFragment(({
  defaultValue,
  placeholderValue,
  label = 'Color',
  errorMessage = 'Please enter a valid color in hex format e.g. #f3f or #ff33ff',
  onValueChange,
  isInvalid,
  value: controlledValue,
  placeholder,
  ...rest
}: ColorInputProps) => {
  const [value, setValue] = useState<string | (readonly string[] & string) | undefined>(controlledValue || defaultValue);

  useEffect(() => onValueChange && onValueChange(value || ''), [value, onValueChange]);

  useEffect(() => setValue(controlledValue), [controlledValue]);

  const validateHexColor = (value: string) => value.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/i);

  const invalid = useMemo(() => {
    if (!value) return false;

    return validateHexColor(value) && !isInvalid ? false : true;
  }, [value, isInvalid]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (rest.onChange) rest.onChange(e);
    setValue(e.currentTarget.value);
  };

  return (
    <Input
      {...rest}
      label={label}
      type="text"
      value={value}
      onValueChange={setValue}
      isInvalid={invalid}
      errorMessage={invalid && errorMessage}
      placeholder={placeholder || placeholderValue}
      endContent={(
        <Avatar
          as="button"
          size="sm"
          showFallback
          fallback={(
            <input
              type="color"
              className="w-full h-full opacity-0 cursor-pointer"
              value={placeholderValue && !value ? placeholderValue : value}
              onChange={handleOnChange}
            />
          )}
          style={{ backgroundColor: value || placeholderValue }}
          classNames={{ base: 'shrink-0 self-center -mb-0.5', fallback: 'w-full h-full' }}
        />
      )}
    />
  );
}, 'colorInput');

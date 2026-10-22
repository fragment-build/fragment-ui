'use client';

/**
 * A small set of mutually exclusive options shown all at once: a time range, a view mode, a metric.
 * A Select hides the alternatives behind a click; for two to five short options this keeps them
 * visible and one click apart.
 */

import { ToggleButton, ToggleButtonGroup } from '@heroui/react';
import { segmentedControl } from './SegmentedControl.styles';

export interface SegmentedControlOption<K extends string> {
  id: K;
  label: React.ReactNode;
  icon?: React.ReactNode;
  isDisabled?: boolean;
}

export interface SegmentedControlProps<K extends string> {
  options: SegmentedControlOption<K>[];
  value: K;
  onChange: (value: K) => void;
  'aria-label': string;
  size?: 'sm' | 'md';
  fullWidth?: boolean;
  className?: string;
}

export const SegmentedControl = <K extends string>({
  options, value, onChange, size, fullWidth, className, ...props
}: SegmentedControlProps<K>) => {
  const v = segmentedControl({ size, fullWidth });

  return (
    <ToggleButtonGroup
      aria-label={props['aria-label']}
      className={v.base({ className })}
      disallowEmptySelection
      isDetached
      onSelectionChange={(keys) => {
        const next = [...keys][0];
        if (next !== undefined) onChange(String(next) as K);
      }}
      selectedKeys={[value]}
      selectionMode="single"
    >
      {options.map((option) => (
        <ToggleButton className={v.item()} id={option.id} isDisabled={option.isDisabled} key={option.id}>
          {option.icon}
          {option.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

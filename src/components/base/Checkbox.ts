import {
  Checkbox as HeroCheckbox,
  Checkbox as HeroCheckboxGroup,
} from '@heroui/react';
import { withFragment } from '../../withFragment';

export const Checkbox = withFragment(HeroCheckbox, 'checkbox');
export const CheckboxGroup = withFragment(HeroCheckboxGroup, 'checkboxGroup');

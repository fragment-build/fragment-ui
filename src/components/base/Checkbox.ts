import {
  Checkbox as NextCheckbox,
  Checkbox as NextCheckboxGroup,
} from '@nextui-org/react';
import { withFragment } from '../../withFragment';

export const Checkbox = withFragment(NextCheckbox, 'checkbox');
export const CheckboxGroup = withFragment(NextCheckboxGroup, 'checkboxGroup');

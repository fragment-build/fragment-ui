import {
  Checkbox as HeroCheckbox,
  Checkbox as HeroCheckboxGroup,
} from '@heroui/checkbox';
import { withFragment } from '../../withFragment';

export const Checkbox = withFragment(HeroCheckbox, 'checkbox');
export const CheckboxGroup = withFragment(HeroCheckboxGroup, 'checkboxGroup');

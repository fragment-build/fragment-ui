import {
  Select as NextSelect,
  SelectItem as NextSelectItem,
  SelectSection as NextSelectSection,
} from '@nextui-org/react'
import { withFragment } from '../../withFragment'

export const Select = withFragment(NextSelect, 'select');
export const SelectItem = withFragment(NextSelectItem, 'selectItem');
export const SelectSection = withFragment(NextSelectSection, 'selectSection');

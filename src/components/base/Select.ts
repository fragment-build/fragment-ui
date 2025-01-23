import {
  Select as HeroSelect,
  SelectItem as HeroSelectItem,
  SelectSection as HeroSelectSection,
} from '@heroui/react'
import { withFragment } from '../../withFragment'

export const Select = withFragment(HeroSelect, 'select');
export const SelectItem = withFragment(HeroSelectItem, 'selectItem');
export const SelectSection = withFragment(HeroSelectSection, 'selectSection');

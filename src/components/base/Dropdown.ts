import {
  Dropdown as HeroDropdown,
  DropdownItem as HeroDropdownItem,
  DropdownMenu as HeroDropdownMenu,
  DropdownSection as HeroDropdownSection,
  DropdownTrigger as HeroDropdownTrigger,
} from '@heroui/react'
import { withFragment } from '../../withFragment'

export const Dropdown = withFragment(HeroDropdown, 'dropdown');
export const DropdownItem = withFragment(HeroDropdownItem, 'dropdownItem');
export const DropdownMenu = withFragment(HeroDropdownMenu, 'dropdownMenu');
export const DropdownSection = withFragment(HeroDropdownSection, 'dropdownSection');
export const DropdownTrigger = withFragment(HeroDropdownTrigger, 'dropdownTrigger');

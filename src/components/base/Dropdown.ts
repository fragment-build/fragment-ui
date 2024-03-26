import {
  Dropdown as NextDropdown,
  DropdownItem as NextDropdownItem,
  DropdownMenu as NextDropdownMenu,
  DropdownSection as NextDropdownSection,
  DropdownTrigger as NextDropdownTrigger,
} from '@nextui-org/react'
import { withFragment } from '../../withFragment'

export const Dropdown = withFragment(NextDropdown, 'dropdown');
export const DropdownItem = withFragment(NextDropdownItem, 'dropdownItem');
export const DropdownMenu = withFragment(NextDropdownMenu, 'dropdownMenu');
export const DropdownSection = withFragment(NextDropdownSection, 'dropdownSection');
export const DropdownTrigger = withFragment(NextDropdownTrigger, 'dropdownTrigger');

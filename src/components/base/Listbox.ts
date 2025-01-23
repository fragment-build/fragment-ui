import {
  Listbox as HeroListbox,
  ListboxItem as HeroListboxItem,
  ListboxSection as HeroListboxSection,
} from '@heroui/react'
import { withFragment } from '../../withFragment'

export const Listbox = withFragment(HeroListbox, 'listbox');
export const ListboxItem = withFragment(HeroListboxItem, 'listboxItem');
export const ListboxSection = withFragment(HeroListboxSection, 'listboxSection');

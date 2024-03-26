import {
  Listbox as NextListbox,
  ListboxItem as NextListboxItem,
  ListboxSection as NextListboxSection,
} from '@nextui-org/react'
import { withFragment } from '../../withFragment'

export const Listbox = withFragment(NextListbox, 'listbox');
export const ListboxItem = withFragment(NextListboxItem, 'listboxItem');
export const ListboxSection = withFragment(NextListboxSection, 'listboxSection');

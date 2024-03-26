import {
  Autocomplete as NextAutocomplete,
  AutocompleteItem as NextAutocompleteItem,
  AutocompleteSection as NextAutocompleteSection,
} from '@nextui-org/react'
import { withFragment } from '../../withFragment'

export const Autocomplete = withFragment(NextAutocomplete, 'autocomplete');
export const AutocompleteItem = withFragment(NextAutocompleteItem, 'autocompleteItem');
export const AutocompleteSection = withFragment(NextAutocompleteSection, 'autocompleteSection');

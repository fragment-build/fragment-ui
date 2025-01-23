import {
  Autocomplete as HeroAutocomplete,
  AutocompleteItem as HeroAutocompleteItem,
  AutocompleteSection as HeroAutocompleteSection,
} from '@heroui/react'
import { withFragment } from '../../withFragment'

export const Autocomplete = withFragment(HeroAutocomplete, 'autocomplete');
export const AutocompleteItem = withFragment(HeroAutocompleteItem, 'autocompleteItem');
export const AutocompleteSection = withFragment(HeroAutocompleteSection, 'autocompleteSection');

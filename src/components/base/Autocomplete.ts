import {
  Autocomplete as HeroAutocomplete,
  AutocompleteItem as HeroAutocompleteItem,
  AutocompleteSection as HeroAutocompleteSection,
} from '@heroui/autocomplete'
import { withFragment } from '../../withFragment'

export const Autocomplete = withFragment(HeroAutocomplete, 'autocomplete');
export const AutocompleteItem = withFragment(HeroAutocompleteItem, 'autocompleteItem');
export const AutocompleteSection = withFragment(HeroAutocompleteSection, 'autocompleteSection');

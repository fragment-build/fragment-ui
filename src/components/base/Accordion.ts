import {
  Accordion as HeroAccordion,
  AccordionItem as HeroAccordionItem,
} from '@heroui/accordion'
import { withFragment } from '../../withFragment'

export const Accordion = withFragment(HeroAccordion, 'accordion');
export const AccordionItem = withFragment(HeroAccordionItem, 'accordionItem');

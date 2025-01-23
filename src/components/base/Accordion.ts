import {
  Accordion as HeroAccordion,
  AccordionItem as HeroAccordionItem,
} from '@heroui/react'
import { withFragment } from '../../withFragment'

export const Accordion = withFragment(HeroAccordion, 'accordion');
export const AccordionItem = withFragment(HeroAccordionItem, 'accordionItem');

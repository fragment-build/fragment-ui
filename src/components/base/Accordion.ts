import {
  Accordion as NextAccordion,
  AccordionItem as NextAccordionItem,
} from '@nextui-org/react'
import { withFragment } from '../../withFragment'

export const Accordion = withFragment(NextAccordion, 'accordion');
export const AccordionItem = withFragment(NextAccordionItem, 'accordionItem');

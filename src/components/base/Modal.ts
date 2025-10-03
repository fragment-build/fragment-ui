import {
  Modal as HeroModal,
  ModalBody as HeroModalBody,
  ModalContent as HeroModalContent,
  ModalFooter as HeroModalFooter,
  ModalHeader as HeroModalHeader,
} from '@heroui/modal'
import { withFragment } from '../../withFragment'

export const Modal = withFragment(HeroModal, 'modal');
export const ModalBody = withFragment(HeroModalBody, 'modalBody');
export const ModalContent = withFragment(HeroModalContent, 'modalContent');
export const ModalFooter = withFragment(HeroModalFooter, 'modalFooter');
export const ModalHeader = withFragment(HeroModalHeader, 'modalHeader');

import {
  Modal as NextModal,
  ModalBody as NextModalBody,
  ModalContent as NextModalContent,
  ModalFooter as NextModalFooter,
  ModalHeader as NextModalHeader,
} from '@nextui-org/react'
import { withFragment } from '../../withFragment'

export const Modal = withFragment(NextModal, 'modal');
export const ModalBody = withFragment(NextModalBody, 'modalBody');
export const ModalContent = withFragment(NextModalContent, 'modalContent');
export const ModalFooter = withFragment(NextModalFooter, 'modalFooter');
export const ModalHeader = withFragment(NextModalHeader, 'modalHeader');

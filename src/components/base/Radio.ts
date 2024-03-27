import {
  Radio as NextRadio,
  RadioGroup as NextRadioGroup,
} from '@nextui-org/react'
import { withFragment } from '../../withFragment'

export const Radio = withFragment(NextRadio, 'radio');
export const RadioGroup = withFragment(NextRadioGroup, 'radioGroup');

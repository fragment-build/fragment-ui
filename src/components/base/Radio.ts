import {
  Radio as HeroRadio,
  RadioGroup as HeroRadioGroup,
} from '@heroui/react'
import { withFragment } from '../../withFragment'

export const Radio = withFragment(HeroRadio, 'radio');
export const RadioGroup = withFragment(HeroRadioGroup, 'radioGroup');

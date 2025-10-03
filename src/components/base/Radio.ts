import {
  Radio as HeroRadio,
  RadioGroup as HeroRadioGroup,
} from '@heroui/radio'
import { withFragment } from '../../withFragment'

export const Radio = withFragment(HeroRadio, 'radio');
export const RadioGroup = withFragment(HeroRadioGroup, 'radioGroup');

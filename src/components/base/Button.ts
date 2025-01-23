import { Button as HeroButton, ButtonGroup as HeroButtonGroup } from '@heroui/react'
import { withFragment } from '../../withFragment'

export const Button = withFragment(HeroButton, 'button');
export const ButtonGroup = withFragment(HeroButtonGroup, 'buttonGroup');

import { Button as HeroButton, ButtonGroup as HeroButtonGroup } from '@heroui/button'
import { withFragment } from '../../withFragment'

export const Button = withFragment(HeroButton, 'button');
export const ButtonGroup = withFragment(HeroButtonGroup, 'buttonGroup');

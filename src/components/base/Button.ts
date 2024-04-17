import { Button as NextButton, ButtonGroup as NextButtonGroup } from '@nextui-org/react'
import { withFragment } from '../../withFragment'

export const Button = withFragment(NextButton, 'button');
export const ButtonGroup = withFragment(NextButtonGroup, 'buttonGroup');

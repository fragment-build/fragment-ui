import { User as HeroUser } from '@heroui/react'
import { withFragment } from '../../withFragment'

export const User = withFragment(HeroUser, 'user');

import { User as HeroUser } from '@heroui/user'
import { withFragment } from '../../withFragment'

export const User = withFragment(HeroUser, 'user');

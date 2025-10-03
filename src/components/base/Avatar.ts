import {
  Avatar as HeroAvatar,
  AvatarGroup as HeroAvatarGroup,
} from '@heroui/avatar'
import { withFragment } from '../../withFragment'

export const Avatar = withFragment(HeroAvatar, 'avatar');
export const AvatarGroup = withFragment(HeroAvatarGroup, 'avatarGroup');

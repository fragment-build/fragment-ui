import {
  Avatar as NextAvatar,
  AvatarGroup as NextAvatarGroup,
} from '@nextui-org/react'
import { withFragment } from '../../withFragment'

export const Avatar = withFragment(NextAvatar, 'avatar');
export const AvatarGroup = withFragment(NextAvatarGroup, 'avatarGroup');

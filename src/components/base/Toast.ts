import { Toast as HeroToast } from '@heroui/react'
import { withFragment } from '../../withFragment'

export { ToastProvider } from '@heroui/react';
export const Toast = withFragment(HeroToast, 'toast');

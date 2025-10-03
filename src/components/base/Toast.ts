import { Toast as HeroToast } from '@heroui/toast'
import { withFragment } from '../../withFragment'

export { ToastProvider } from '@heroui/toast';
export const Toast = withFragment(HeroToast, 'toast');

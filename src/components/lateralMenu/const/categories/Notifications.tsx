import { EwpLateralMenuItem } from '../../models/menu.ts';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EwpLateralMenuNotifications from '../../notifications/components/EwpLateralMenuNotifications.tsx';

export const USER_NOTIFICATIONS: EwpLateralMenuItem = {
  key: 8000,
  title: 'notifications',
  link: '/notifications',
  reload: false,
  icon: <NotificationsIcon />,
  submenu: <EwpLateralMenuNotifications />,
};

import { MenuItem } from '../../models/menu.ts';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EwpLateralMenuNotifications from '../../../notifications/components/EwpLateralMenuNotifications.tsx';

export const USER_NOTIFICATIONS: MenuItem = {
  key: 8000,
  title: 'notifications',
  link: '/notifications',
  icon: <NotificationsIcon />,
  submenu: <EwpLateralMenuNotifications />,
};

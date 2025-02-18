import { MenuItem } from '../../models/menu.ts';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Notifications from '../../../notifications/components/Notifications.tsx';

export const USER_NOTIFICATIONS: MenuItem = {
  key: 8000,
  title: 'notifications',
  link: '/notifications',
  icon: <NotificationsIcon />,
  submenu: <Notifications />,
};

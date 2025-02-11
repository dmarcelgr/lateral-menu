import { MenuItem } from '../../models/menu.ts';
import { Notifications } from '@mui/icons-material';
import NotificationsComponent from '../../../notifications/components/notifications/NotificationsComponent.tsx';

export const USER_NOTIFICATIONS: MenuItem = {
  key: 8000,
  title: 'notifications',
  link: '/notifications',
  icon: <Notifications />,
  submenu: <NotificationsComponent />,
};

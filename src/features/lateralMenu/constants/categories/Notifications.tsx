import { MenuItem } from '../../interfaces/menuInterface.ts';
import { Notifications } from '@mui/icons-material';

export const UserNotifications: MenuItem = {
  key: 8000,
  title: 'notifications',
  link: '/notifications',
  icon: <Notifications />,
  submenu: [],
};

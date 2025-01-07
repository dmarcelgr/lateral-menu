import { MenuItem } from '../../interfaces/menuInterface.ts';
import { Mail } from '@mui/icons-material';

export const Messages: MenuItem = {
  key: 7000,
  title: 'inbox',
  link: '/inbox',
  icon: <Mail />,
  submenu: [],
};

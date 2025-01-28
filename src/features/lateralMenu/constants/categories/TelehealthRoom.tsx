import { MenuItem } from '../../models/menu.ts';
import { Videocam } from '@mui/icons-material';

export const TELEHEALTH_ROOM: MenuItem = {
  key: 5000,
  title: 'telehealth',
  link: '/waiting-room',
  icon: <Videocam />,
  submenu: [],
};

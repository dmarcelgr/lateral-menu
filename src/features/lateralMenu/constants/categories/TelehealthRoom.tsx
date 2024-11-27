import { MenuItem } from '../../interfaces/menuInterface.ts';
import { Videocam } from '@mui/icons-material';

export const TelehealthRoom: MenuItem = {
  key: 5000,
  title: 'telehealth',
  link: '/waiting-room',
  icon: <Videocam />,
  submenu: [],
};

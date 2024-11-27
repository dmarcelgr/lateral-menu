import { MenuItem } from '../../interfaces/menuInterface.ts';
import { Search } from '@mui/icons-material';

export const PatientSearch: MenuItem = {
  key: 6000,
  title: 'search',
  link: '#search',
  icon: <Search />,
  submenu: [],
};

import { MenuItem } from '../../models/menu.ts';
import { Search } from '@mui/icons-material';

export const PATIENT_SEARCH: MenuItem = {
  key: 6000,
  title: 'search',
  link: '#search',
  icon: <Search />,
  submenu: [],
};

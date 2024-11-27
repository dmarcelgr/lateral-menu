import { MenuItem } from '../../interfaces/menuInterface.ts';
import { ReportsIcon, UsersGroupIcon } from '../../../../assets/icons';
import { Person, Today } from '@mui/icons-material';

export const Patients: MenuItem = {
  key: 1000,
  title: 'patients',
  link: '/patients',
  icon: <UsersGroupIcon />,
  submenu: [
    {
      key: 1001,
      title: 'create_a_new_patient',
      link: '',
      icon: <Person />,
    },
    {
      key: 1002,
      title: 'patient_list',
      link: '',
      icon: <UsersGroupIcon />,
    },
    {
      key: 1003,
      title: 'appointments',
      icon: <Today />,
      link: ' ',
    },
    {
      key: 1004,
      title: 'Reports',
      icon: <ReportsIcon />,
      link: ' ',
    },
  ],
};

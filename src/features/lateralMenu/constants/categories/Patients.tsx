import { MenuItem } from '../../models/menu.ts';
import { ReportsIcon, UsersGroupIcon } from '../../../../assets/icons';
import { Person, Today } from '@mui/icons-material';

export const PATIENTS: MenuItem = {
  key: 1000,
  title: 'patients',
  link: 'patients',
  icon: <UsersGroupIcon />,
  submenu: [
    {
      key: 1001,
      title: 'create_a_new_patient',
      link: 'patients/edit/detail',
      icon: <Person />,
    },
    {
      key: 1002,
      title: 'patient_list',
      link: 'patients/list',
      icon: <UsersGroupIcon />,
    },
    {
      key: 1003,
      title: 'appointments',
      icon: <Today />,
      link: 'patients/appointments',
    },
    {
      key: 1004,
      title: 'Reports',
      icon: <ReportsIcon />,
      link: 'patients/reports/medicare-time-tracking',
    },
  ],
};

import { EwpLateralMenuItem } from '../../models/menu.ts';
import { ReportsIcon, UsersGroupIcon } from '../../../../assets/icons';
import { Person, Today } from '@mui/icons-material';

export const PATIENTS: EwpLateralMenuItem = {
  key: 1000,
  title: 'patients',
  link: 'patients',
  reload: false,
  icon: <UsersGroupIcon />,
  submenu: [
    {
      key: 1001,
      title: 'create_a_new_patient',
      link: '/en/patients/#/edit//detail/',
      reload: true,
      icon: <Person />,
    },
    {
      key: 1002,
      title: 'patient_list',
      link: '/en/patients/#/list/',
      reload: true,
      icon: <UsersGroupIcon />,
    },
    {
      key: 1003,
      title: 'appointments',
      link: '/en/patients/#/appointments/',
      reload: true,
      icon: <Today />,
    },
    {
      key: 1004,
      title: 'Reports',
      link: '/en/patients/#/reports/medicare-time-tracking',
      reload: true,
      icon: <ReportsIcon />,
    },
  ],
};

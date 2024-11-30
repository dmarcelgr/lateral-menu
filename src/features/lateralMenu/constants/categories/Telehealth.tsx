import { MenuItem } from '../../interfaces/menuInterface.ts';
import { ScheduleIcon, TelehealthIcon } from '../../../../assets/icons';
import { Today } from '@mui/icons-material';

export const Telehealth: MenuItem = {
  key: 2000,
  title: 'Telehealth',
  link: '/telehealth',
  icon: <TelehealthIcon />,
  submenu: [
    {
      key: 2001,
      title: 'Telehealth Dashboard',
      link: 'dashboard/medicaltelehealth/home',
      icon: <TelehealthIcon />,
    },
    {
      key: 2002,
      title: 'schedule',
      link: 'patients/schedule/22',
      icon: <ScheduleIcon />,
    },
    {
      key: 2003,
      title: 'appointments',
      link: 'patients/appointments',
      icon: <Today />,
    },
  ],
};

import { EwpLateralMenuItem } from '../../models/menu.ts';
import { ScheduleIcon, TelehealthIcon } from '../../../../assets/icons';
import { Today } from '@mui/icons-material';

export const TELEHEALTH: EwpLateralMenuItem = {
  key: 2000,
  title: 'Telehealth',
  link: '/telehealth',
  reload: false,
  icon: <TelehealthIcon />,
  submenu: [
    {
      key: 2001,
      title: 'Telehealth Dashboard',
      link: '/en/dashboard/medicaltelehealth/#/home',
      reload: true,
      icon: <TelehealthIcon />,
    },
    {
      key: 2002,
      title: 'schedule',
      link: '/en/patients/#/schedule/6//',
      reload: true,
      icon: <ScheduleIcon />,
    },
    {
      key: 2003,
      title: 'appointments',
      link: '/en/patients/#/appointments/',
      reload: true,
      icon: <Today />,
    },
  ],
};

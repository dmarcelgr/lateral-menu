import { MenuItem } from '../../models/menu.ts';
import {
  AccountCircle,
  Badge,
  DevicesOther,
  Info,
  Lock,
  Password,
  Person,
  Shield,
  SwitchAccount,
} from '@mui/icons-material';

export const USER_PROFILE: MenuItem = {
  key: 9000,
  title: 'user',
  link: '/user',
  icon: <AccountCircle />,
  submenu: [
    {
      key: 9001,
      title: 'profile',
      link: 'patients/auth/profile/system_settings',
      icon: <Person />,
    },
    {
      key: 9002,
      title: 'security_questions',
      link: 'patients/auth/profile/security_questions',
      icon: <Shield />,
    },
    {
      key: 9003,
      title: 'password',
      link: 'patients/auth/profile/change_password',
      icon: <Password />,
    },
    {
      key: 9004,
      title: 'medical_devices',
      link: 'patients/prs/medicaldevice/list',
      icon: <DevicesOther />,
    },
    {
      key: 9005,
      title: 'about_us',
      link: 'language',
      icon: <Info />,
    },
    {
      key: 9006,
      title: 'administrative',
      link: 'admin/users/list',
      icon: <Badge />,
    },
    {
      key: 9007,
      title: 'change_account',
      link: 'login/chooseprovideraccount',
      icon: <SwitchAccount />,
    },
    {
      key: 9008,
      title: 'log_out',
      link: 'auth/logout',
      icon: <Lock />,
    },
  ],
};

import { EwpLateralMenuItem } from '../../models/menu.ts';
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

export const USER_PROFILE: EwpLateralMenuItem = {
  key: 9000,
  title: 'user',
  link: '/user',
  reload: false,
  icon: <AccountCircle />,
  submenu: [
    {
      key: 9001,
      title: 'profile',
      link: '/en/patients/#/auth/profile/?currentSubmenu=system_settings',
      reload: true,
      icon: <Person />,
    },
    {
      key: 9002,
      title: 'security_questions',
      link: '/en/patients/#/auth/profile/?currentSubmenu=security_questions',
      reload: true,
      icon: <Shield />,
    },
    {
      key: 9003,
      title: 'password',
      link: '/en/patients/#/auth/profile/?currentSubmenu=change_password',
      reload: true,
      icon: <Password />,
    },
    {
      key: 9004,
      title: 'medical_devices',
      link: '/en/patients/#/prs//medicaldevice/list/',
      reload: true,
      icon: <DevicesOther />,
    },
    {
      key: 9005,
      title: 'about_us',
      link: '/en/language/',
      reload: true,
      icon: <Info />,
    },
    {
      key: 9006,
      title: 'administrative',
      link: '/en/admin/users/#/list/',
      reload: true,
      icon: <Badge />,
    },
    {
      key: 9007,
      title: 'change_account',
      link: '/login/chooseprovideraccount/',
      reload: true,
      icon: <SwitchAccount />,
    },
    {
      key: 9008,
      title: 'log_out',
      link: '/en/auth/logout/',
      reload: true,
      icon: <Lock />,
    },
  ],
};

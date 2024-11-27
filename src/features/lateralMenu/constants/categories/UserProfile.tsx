import { MenuItem } from '../../interfaces/menuInterface.ts';
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

export const UserProfile: MenuItem = {
  key: 9000,
  title: 'user',
  link: '/user',
  icon: <AccountCircle />,
  submenu: [
    {
      key: 9001,
      title: 'profile',
      link: '',
      icon: <Person />,
    },
    {
      key: 9002,
      title: 'security_questions',
      link: '',
      icon: <Shield />,
    },
    {
      key: 9003,
      title: 'password',
      link: '',
      icon: <Password />,
    },
    {
      key: 9004,
      title: 'medical_devices',
      link: '',
      icon: <DevicesOther />,
    },
    {
      key: 9005,
      title: 'about_us',
      link: '',
      icon: <Info />,
    },
    {
      key: 9006,
      title: 'administrative',
      link: '',
      icon: <Badge />,
    },
    {
      key: 9007,
      title: 'change_account',
      link: '',
      icon: <SwitchAccount />,
    },
    {
      key: 9008,
      title: 'log_out',
      link: '',
      icon: <Lock />,
    },
  ],
};

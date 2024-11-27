import { MenuItem } from '../../interfaces/menuInterface.ts';
import {
  Assignment,
  DevicesOther,
  Favorite,
  LibraryBooks,
  MonitorHeart,
  RequestQuote,
} from '@mui/icons-material';
import { ChartIcon } from '../../../../assets/icons';

export const RemotePatientMonitoring: MenuItem = {
  key: 3000,
  title: 'remote_patient_monitoring',
  link: '/rpm',
  icon: <Favorite />,
  submenu: [
    {
      key: 3001,
      title: 'rpm_dashboard',
      link: '',
      icon: <Favorite />,
    },
    {
      key: 3002,
      title: 'rpm_statistics',
      link: '',
      icon: <MonitorHeart />,
    },
    {
      key: 3003,
      title: 'rpm_education_list',
      link: '',
      icon: <LibraryBooks />,
    },
    {
      key: 3004,
      title: 'tasks',
      link: '',
      icon: <Assignment />,
    },
    {
      key: 3005,
      title: 'reports',
      link: '',
      icon: <ChartIcon />,
    },
    {
      key: 3006,
      title: 'compliant_patients',
      link: '',
      icon: <ChartIcon />,
    },
    {
      key: 3007,
      title: 'improving_bp',
      link: '',
      icon: <ChartIcon />,
    },
    {
      key: 3008,
      title: 'rpm_claims_approval',
      link: '',
      icon: <RequestQuote />,
    },
    {
      key: 3009,
      title: 'medical_devices',
      link: '',
      icon: <DevicesOther />,
    },
    {
      key: 3010,
      title: 'consent_list',
      link: '',
      icon: <LibraryBooks />,
    },
  ],
};

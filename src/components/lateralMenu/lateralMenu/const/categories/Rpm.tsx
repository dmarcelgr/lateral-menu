import { MenuItem } from '../../models/menu.ts';
import {
  Assignment,
  DevicesOther,
  Favorite,
  LibraryBooks,
  MonitorHeart,
  RequestQuote,
} from '@mui/icons-material';
import { ChartIcon } from '../../../../../assets/icons';

export const REMOTE_PATIENT_MONITORING: MenuItem = {
  key: 3000,
  title: 'remote_patient_monitoring',
  link: '/rpm',
  icon: <Favorite />,
  submenu: [
    {
      key: 3001,
      title: 'rpm_dashboard',
      link: 'patients/medical',
      icon: <Favorite />,
    },
    {
      key: 3002,
      title: 'rpm_statistics',
      link: 'patients/dashboard/vital-signs',
      icon: <MonitorHeart />,
    },
    {
      key: 3003,
      title: 'rpm_education_list',
      link: 'patients/list/education',
      icon: <LibraryBooks />,
    },
    {
      key: 3004,
      title: 'tasks',
      link: 'task-list',
      icon: <Assignment />,
    },
    {
      key: 3005,
      title: 'reports',
      link: 'patients/reports/dashboard',
      icon: <ChartIcon />,
    },
    {
      key: 3006,
      title: 'compliant_patients',
      link: 'patients/reports/compliant-patients',
      icon: <ChartIcon />,
    },
    {
      key: 3007,
      title: 'improving_bp',
      link: 'patients/reports/blood-pressure-improvement',
      icon: <ChartIcon />,
    },
    {
      key: 3008,
      title: 'rpm_claims_approval',
      link: 'billing/claims',
      icon: <RequestQuote />,
    },
    {
      key: 3009,
      title: 'medical_devices',
      link: 'patients/prs/medicaldevice/list',
      icon: <DevicesOther />,
    },
    {
      key: 3010,
      title: 'consent_list',
      link: 'patients/consent/list',
      icon: <LibraryBooks />,
    },
  ],
};

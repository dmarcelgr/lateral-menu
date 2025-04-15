import { EwpLateralMenuItem } from '../../models/menu.ts';
import {
  Assignment,
  DevicesOther,
  Favorite,
  LibraryBooks,
  MonitorHeart,
  RequestQuote,
} from '@mui/icons-material';
import { ChartIcon } from '../../../../assets/icons';

export const REMOTE_PATIENT_MONITORING: EwpLateralMenuItem = {
  key: 3000,
  title: 'remote_patient_monitoring',
  link: '/rpm',
  reload: false,
  icon: <Favorite />,
  submenu: [
    {
      key: 3001,
      title: 'rpm_dashboard',
      link: '/en/patients/#/medical/',
      reload: true,
      icon: <Favorite />,
    },
    {
      key: 3002,
      title: 'rpm_statistics',
      link: '/en/patients/#/dashboard/vital-signs',
      reload: true,
      icon: <MonitorHeart />,
    },
    {
      key: 3003,
      title: 'rpm_education_list',
      link: '/en/patients/#/list/education/',
      reload: true,
      icon: <LibraryBooks />,
    },
    {
      key: 3004,
      title: 'tasks',
      link: '/en/patients/#/task-list/',
      reload: true,
      icon: <Assignment />,
    },
    {
      key: 3005,
      title: 'reports',
      link: '/en/patients/#/reports/dashboard',
      reload: true,
      icon: <ChartIcon />,
    },
    {
      key: 3006,
      title: 'compliant_patients',
      link: '/en/patients/#/reports/compliant-patient',
      reload: true,
      icon: <ChartIcon />,
    },
    {
      key: 3007,
      title: 'improving_bp',
      link: '/en/patients/#/reports/blood-pressure-improvement',
      reload: true,
      icon: <ChartIcon />,
    },
    {
      key: 3008,
      title: 'rpm_claims_approval',
      link: '/en/patients/#/billing/claims/',
      reload: true,
      icon: <RequestQuote />,
    },
    {
      key: 3009,
      title: 'medical_devices',
      link: '/en/patients/#/prs//medicaldevice/list/',
      reload: true,
      icon: <DevicesOther />,
    },
    {
      key: 3010,
      title: 'consent_list',
      link: '/en/patients/#/consent/list',
      reload: true,
      icon: <LibraryBooks />,
    },
  ],
};

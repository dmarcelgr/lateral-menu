import { MenuItem } from '../../interfaces/menuInterface.ts';
import {
  ReportsIcon,
  TelehealthIcon,
  UserMdIcon,
  UsersGroupIcon,
} from '../../../../assets/icons';
import {
  Article,
  BarChart,
  DisplaySettings,
  DomainAdd,
  FlagCircle,
  GroupAdd,
  Inbox,
  LibraryBooks,
  LockPerson,
  MonitorHeart,
  PermPhoneMsg,
  Settings,
  Today,
} from '@mui/icons-material';
import React from 'react';

export const EwpSettings: MenuItem = {
  key: 4000,
  title: 'settings',
  link: '/settings',
  icon: <Settings />,
  submenu: [
    {
      key: 4001,
      title: 'appointment_types',
      link: 'patients/appointments/types',
      icon: <Today />,
    },
    {
      key: 4002,
      title: 'care_team',
      link: 'physician/list',
      icon: <UserMdIcon />,
    },
    {
      key: 4003,
      title: 'consent_list',
      link: 'patients/consent/list',
      icon: <LibraryBooks />,
    },
    {
      key: 4004,
      title: 'vitals_reference_ranges',
      link: 'patients/practice-settings',
      icon: <MonitorHeart />,
    },
    {
      key: 4005,
      title: 'report_telehealth',
      link: 'clinic/telehealth/logs/list',
      icon: <TelehealthIcon />,
    },
    {
      key: 4006,
      title: 'population_groups',
      link: 'patients/population-groups',
      icon: <UsersGroupIcon />,
    },
    {
      key: 4007,
      title: 'referring_provider_list',
      link: 'patients/referring-providers',
      icon: <GroupAdd />,
    },
    {
      key: 4008,
      title: 'goal_set',
      link: 'patients/goal-set/list',
      icon: <FlagCircle />,
    },
    {
      key: 4009,
      title: 'practice_list',
      link: 'settings/providers/list',
      icon: <Article />,
    },
    {
      key: 4010,
      title: 'fee_schedule',
      link: 'settings/providers/fee-schedule',
      icon: <Article />,
    },
    {
      key: 4011,
      title: 'insurances_list',
      link: 'settings/providers/insurances/list',
      icon: <Article />,
    },
    {
      key: 4012,
      title: 'voice_calls_report',
      link: 'patients/reports/voice-recordings',
      icon: <PermPhoneMsg />,
    },
    {
      key: 4013,
      title: 'new_provider',
      link: 'settings/providers/add',
      icon: <DomainAdd />,
    },
    {
      key: 4014,
      title: 'interoperability_settings',
      link: 'patients/interoperability',
      icon: <DisplaySettings />,
    },
    {
      key: 4015,
      title: 'admin_users',
      link: 'admin/users',
      icon: <LockPerson />,
    },
    {
      key: 4016,
      title: 'analytics_api_calls',
      link: 'patients/analyticsapicalls',
      icon: <BarChart />,
    },
    {
      key: 4017,
      title: 'reports_inbox',
      link: 'patients/reports/inbox',
      icon: <Inbox />,
    },
    {
      key: 4018,
      title: 'reports_dashboard',
      link: 'patients/reports/dashboard',
      icon: <ReportsIcon />,
    },
  ],
};

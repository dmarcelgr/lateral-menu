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
      link: '',
      icon: <Today />,
    },
    {
      key: 4002,
      title: 'care_team',
      link: '',
      icon: <UserMdIcon />,
    },
    {
      key: 4003,
      title: 'consent_list',
      link: '',
      icon: <LibraryBooks />,
    },
    {
      key: 4004,
      title: 'vitals_reference_ranges',
      link: '',
      icon: <MonitorHeart />,
    },
    {
      key: 4005,
      title: 'report_telehealth',
      link: '',
      icon: <TelehealthIcon />,
    },
    {
      key: 4006,
      title: 'population_groups',
      link: '',
      icon: <UsersGroupIcon />,
    },
    {
      key: 4007,
      title: 'referring_provider_list',
      link: '',
      icon: <GroupAdd />,
    },
    {
      key: 4008,
      title: 'goal_set',
      link: '',
      icon: <FlagCircle />,
    },
    {
      key: 4009,
      title: 'practice_list',
      link: '',
      icon: <Article />,
    },
    {
      key: 4010,
      title: 'fee_schedule',
      link: '',
      icon: <Article />,
    },
    {
      key: 4011,
      title: 'insurances_list',
      link: '',
      icon: <Article />,
    },
    {
      key: 4012,
      title: 'voice_calls_report',
      link: '',
      icon: <PermPhoneMsg />,
    },
    {
      key: 4013,
      title: 'new_provider',
      link: '',
      icon: <DomainAdd />,
    },
    {
      key: 4014,
      title: 'interoperability_settings',
      link: '',
      icon: <DisplaySettings />,
    },
    {
      key: 4015,
      title: 'admin_users',
      link: '',
      icon: <LockPerson />,
    },
    {
      key: 4016,
      title: 'analytics_api_calls',
      link: '',
      icon: <BarChart />,
    },
    {
      key: 4017,
      title: 'reports_inbox',
      link: '',
      icon: <Inbox />,
    },
    {
      key: 4018,
      title: 'reports_dashboard',
      link: '',
      icon: <ReportsIcon />,
    },
  ],
};

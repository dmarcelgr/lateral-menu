import React from 'react';
import {
  AccountCircle,
  Article,
  Assignment,
  Badge,
  BarChart,
  DevicesOther,
  DisplaySettings,
  DomainAdd,
  Favorite,
  FlagCircle,
  GroupAdd,
  Inbox,
  Info,
  LibraryBooks,
  Lock,
  LockPerson,
  Mail,
  MonitorHeart,
  Notifications,
  Password,
  PermPhoneMsg,
  Person,
  RequestQuote,
  Search,
  Settings,
  Shield,
  SwitchAccount,
  Today,
  Videocam,
} from '@mui/icons-material';
import { menuItem } from './menuInterface.ts';
import {
  ChartIcon,
  ReportsIcon,
  ScheduleIcon,
  TelehealthIcon,
  UserMdIcon,
  UsersGroupIcon,
} from '../../../assets/icons';
import { Box } from '@mui/material';
import { MenuItems } from '../menuItems.tsx';
import esvydaIcon from '/logos/logo-svg-esvyda.svg';
import esvydaBigIcon from '/logos/fulllogo-svg-esvyda.svg'; // Menu Items data / data structure

// Menu Items data / data structure
export const menuItems: menuItem[] = [
  {
    key: 1,
    title: 'patients',
    link: '/patients',
    icon: <UsersGroupIcon />,
    submenu: [
      {
        key: 'newp',
        title: 'create_a_new_patient',
        link: '',
        icon: <Person />,
      },
      {
        key: 'plist',
        title: 'patient_list',
        link: '',
        icon: <UsersGroupIcon />,
      },
      {
        key: 'appoint',
        title: 'appointments',
        icon: <Today />,
        link: ' ',
      },
      {
        key: 'reports',
        title: 'Reports',
        icon: <ReportsIcon />,
        link: ' ',
      },
    ],
  },
  {
    key: 2,
    title: 'Telehealth',
    link: '/telehealth',
    icon: <TelehealthIcon />,
    submenu: [
      {
        key: 'teledash',
        title: 'Telehealth Dashboard',
        link: '',
        icon: <TelehealthIcon />,
      },
      {
        key: 'teleschedule',
        title: 'schedule',
        link: '',
        icon: <ScheduleIcon />,
      },
      {
        key: 'teleappointments',
        title: 'appointments',
        link: '',
        icon: <Today />,
      },
    ],
  },
  {
    key: 3,
    title: 'remote_patient_monitoring',
    link: '/rpm',
    icon: <Favorite />,
    submenu: [
      {
        key: 'rpmdashboard',
        title: 'rpm_dashboard',
        link: '',
        icon: <Favorite />,
      },
      {
        key: 'rpmstatistics',
        title: 'rpm_statistics',
        link: '',
        icon: <MonitorHeart />,
      },
      {
        key: 'rpmeducation',
        title: 'rpm_education_list',
        link: '',
        icon: <LibraryBooks />,
      },
      {
        key: 'rpmtasks',
        title: 'tasks',
        link: '',
        icon: <Assignment />,
      },
      {
        key: 'rpmreports',
        title: 'reports',
        link: '',
        icon: <ChartIcon />,
      },
      {
        key: 'rpmcompliantpatients',
        title: 'compliant_patients',
        link: '',
        icon: <ChartIcon />,
      },
      {
        key: 'rpmimprovingbp',
        title: 'improving_bp',
        link: '',
        icon: <ChartIcon />,
      },
      {
        key: 'rpmclaimsapproval',
        title: 'rpm_claims_approval',
        link: '',
        icon: <RequestQuote />,
      },
      {
        key: 'rpmmedicaldevices',
        title: 'medical_devices',
        link: '',
        icon: <DevicesOther />,
      },
      {
        key: 'rpmconsentlist',
        title: 'consent_list',
        link: '',
        icon: <LibraryBooks />,
      },
    ],
  },
  {
    key: 4,
    title: 'settings',
    link: '/settings',
    icon: <Settings />,
    submenu: [
      {
        key: 'sttappointments',
        title: 'appointment_types',
        link: '',
        icon: <Today />,
      },
      {
        key: 'sttcareteam',
        title: 'care_team',
        link: '',
        icon: <UserMdIcon />,
      },
      {
        key: 'sttconsentlist',
        title: 'consent_list',
        link: '',
        icon: <LibraryBooks />,
      },
      {
        key: 'sttvitals',
        title: 'vitals_reference_ranges',
        link: '',
        icon: <MonitorHeart />,
      },
      {
        key: 'sttreporttelehealth',
        title: 'report_telehealth',
        link: '',
        icon: <TelehealthIcon />,
      },
      {
        key: 'sttpopulationgroups',
        title: 'population_groups',
        link: '',
        icon: <UsersGroupIcon />,
      },
      {
        key: 'sttreferringp',
        title: 'referring_provider_list',
        link: '',
        icon: <GroupAdd />,
      },
      {
        key: 'sttgoalset',
        title: 'goal_set',
        link: '',
        icon: <FlagCircle />,
      },
      {
        key: 'sttpracticelist',
        title: 'practice_list',
        link: '',
        icon: <Article />,
      },
      {
        key: 'sttfeeschedule',
        title: 'fee_schedule',
        link: '',
        icon: <Article />,
      },
      {
        key: 'sttinsurancelist',
        title: 'insurances_list',
        link: '',
        icon: <Article />,
      },
      {
        key: 'sttvoicecalls',
        title: 'voice_calls_report',
        link: '',
        icon: <PermPhoneMsg />,
      },
      {
        key: 'sttnewprovider',
        title: 'new_provider',
        link: '',
        icon: <DomainAdd />,
      },
      {
        key: 'sttinteroperabilitysettings',
        title: 'interoperability_settings',
        link: '',
        icon: <DisplaySettings />,
      },
      {
        key: 'sttadminusers',
        title: 'admin_users',
        link: '',
        icon: <LockPerson />,
      },
      {
        key: 'sttanalyticsapi',
        title: 'analytics_api_calls',
        link: '',
        icon: <BarChart />,
      },
      {
        key: 'sttreportsinbox',
        title: 'reports_inbox',
        link: '',
        icon: <Inbox />,
      },
      {
        key: 'sttreportsdashboard',
        title: 'reports_dashboard',
        link: '',
        icon: <ReportsIcon />,
      },
    ],
  },
  {
    key: 5,
    title: 'telehealth',
    link: '/waiting-room',
    icon: <Videocam />,
    submenu: [],
  },
];

export const bottomMenuItems: menuItem[] = [
  {
    key: 6,
    title: 'search',
    link: '#search',
    icon: <Search />,
    submenu: [],
  },
  {
    key: 7,
    title: 'messages',
    link: '/inbox',
    icon: <Mail />,
    submenu: [],
  },
  {
    key: 8,
    title: 'notifications',
    link: '/notifications',
    icon: <Notifications />,
    submenu: [],
  },
  {
    key: 9,
    title: 'user',
    link: '/user',
    icon: <AccountCircle />,
    submenu: [
      {
        key: 'profile',
        title: 'profile',
        link: '',
        icon: <Person />,
      },
      {
        key: 'secquestions',
        title: 'security_questions',
        link: '',
        icon: <Shield />,
      },
      {
        key: 'pass',
        title: 'password',
        link: '',
        icon: <Password />,
      },
      {
        key: 'medicaldevices',
        title: 'medical_devices',
        link: '',
        icon: <DevicesOther />,
      },
      {
        key: 'aboutus',
        title: 'about_us',
        link: '',
        icon: <Info />,
      },
      {
        key: 'administrative',
        title: 'administrative',
        link: '',
        icon: <Badge />,
      },
      {
        key: 'changeaccount',
        title: 'change_account',
        link: '',
        icon: <SwitchAccount />,
      },
      {
        key: 'logout',
        title: 'log_out',
        link: '',
        icon: <Lock />,
      },
    ],
  },
];

// Menu structure
export const menuContent: JSX.Element = (
  <>
    <Box
      bgcolor="primary.main"
      className="w-full p-0 border-t-2 border-t-slate-500"
    >
      {/*logo for mobile*/}
      <img
        src={esvydaBigIcon}
        className="w-1/5 sm:block lg:hidden"
        alt="Esvyda logo"
      />
      {/*logo-icon for web app*/}
      <img
        src={esvydaIcon}
        className="w-10 py-1 pl-3 hidden lg:flex"
        alt="Esvyda icon"
      />
    </Box>
    <Box className="flex flex-col justify-between h-full">
      <MenuItems items={menuItems} />
      <MenuItems items={bottomMenuItems} />
    </Box>
  </>
);

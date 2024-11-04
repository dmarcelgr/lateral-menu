import React from 'react';
import { MenuItems } from '../menuItems.tsx';
import {
  AccessTime,
  AccountCircle,
  AddToQueue,
  Article,
  Assessment,
  Assignment,
  BarChart,
  DevicesOther,
  DisplaySettings,
  DomainAdd,
  Favorite,
  FlagCircle,
  Forum,
  GroupAdd,
  Groups,
  Inbox,
  LibraryBooks,
  ListAlt,
  LockPerson,
  MonitorHeart,
  Notifications,
  People,
  PermContactCalendar,
  PermPhoneMsg,
  RequestQuote,
  Search,
  Settings,
  Today,
  VideoChat,
} from '@mui/icons-material';
import { StyledComponent } from '@emotion/styled';
import { AppBar, ListItemButton, ListItemIcon, styled } from '@mui/material';
import { menuItem } from './menuInterface.ts';

// Menu Items data / data structure
export const menuItems: menuItem[] = [
  {
    key: 1,
    title: 'Patients',
    link: '/patients',
    icon: <Groups />,
    submenu: [
      {
        key: 'newp',
        title: 'Create a new patient',
        link: '',
        icon: <People />,
      },
      {
        key: 'plist',
        title: 'Patient list',
        link: '',
        icon: <Groups />,
      },
      {
        key: 'appoint',
        title: 'Appointments',
        icon: <AccessTime />,
        link: ' ',
      },
      {
        key: 'reports',
        title: 'Reports',
        icon: <Assessment />,
        link: ' ',
      },
    ],
  },
  {
    key: 2,
    title: 'Telehealth',
    link: '/telehealth',
    icon: <AddToQueue />,
    submenu: [
      {
        key: 'teledash',
        title: 'Telehealth Dashboard',
        link: '',
        icon: <AddToQueue />,
      },
      {
        key: 'teleschedule',
        title: 'Schedule',
        link: '',
        icon: <PermContactCalendar />,
      },
      {
        key: 'teleappointments',
        title: 'Appointments',
        link: '',
        icon: <Today />,
      },
    ],
  },
  {
    key: 3,
    title: 'Remote Patient Monitoring',
    link: '/rpm',
    icon: <DevicesOther />,
    submenu: [
      {
        key: 'rpmdashboard',
        title: 'RPM Dashboard',
        link: '',
        icon: <Favorite />,
      },
      {
        key: 'rpmstatistics',
        title: 'RPM Statistics',
        link: '',
        icon: <MonitorHeart />,
      },
      {
        key: 'rpmeducation',
        title: 'RPM Education List',
        link: '',
        icon: <LibraryBooks />,
      },
      {
        key: 'rpmtasks',
        title: 'Tasks',
        link: '',
        icon: <Assignment />,
      },
      {
        key: 'rpmreports',
        title: 'Reports',
        link: '',
        icon: <BarChart />,
      },
      {
        key: 'rpmcompliantpatients',
        title: 'Compliant patients',
        link: '',
        icon: <BarChart />,
      },
      {
        key: 'rpmimprovingbp',
        title: 'Improving blood pressure',
        link: '',
        icon: <BarChart />,
      },
      {
        key: 'rpmclaimsapproval',
        title: 'RPM Claims Approval',
        link: '',
        icon: <RequestQuote />,
      },
      {
        key: 'rpmmedicaldevices',
        title: 'Medical Devices',
        link: '',
        icon: <DevicesOther />,
      },
      {
        key: 'rpmconsentlist',
        title: 'Consent List',
        link: '',
        icon: <LibraryBooks />,
      },
    ],
  },
  {
    key: 4,
    title: 'Settings',
    link: '/settings',
    icon: <Settings />,
    submenu: [
      {
        key: 'sttappointments',
        title: 'Appointment types',
        link: '',
        icon: <PermContactCalendar />,
      },
      {
        key: 'sttcareteam',
        title: 'Care team',
        link: '',
        icon: <People />,
      },
      {
        key: 'sttconsentlist',
        title: 'Consent list',
        link: '',
        icon: <ListAlt />,
      },
      {
        key: 'sttvitals',
        title: 'Vitals reference ranges',
        link: '',
        icon: <MonitorHeart />,
      },
      {
        key: 'sttreporttelehealth',
        title: 'Report telehealth',
        link: '',
        icon: <AddToQueue />,
      },
      {
        key: 'sttpopulationgroups',
        title: 'Population groups',
        link: '',
        icon: <Groups />,
      },
      {
        key: 'sttreferringp',
        title: 'Referring provider list',
        link: '',
        icon: <GroupAdd />,
      },
      {
        key: 'sttgoalset',
        title: 'Goal set',
        link: '',
        icon: <FlagCircle />,
      },
      {
        key: 'sttpracticelist',
        title: 'Practice list',
        link: '',
        icon: <Article />,
      },
      {
        key: 'sttfeeschedule',
        title: 'Fee schedule',
        link: '',
        icon: <Article />,
      },
      {
        key: 'sttinsurancelist',
        title: 'Insurances list',
        link: '',
        icon: <Article />,
      },
      {
        key: 'sttvoicecalls',
        title: 'Voice calls report',
        link: '',
        icon: <PermPhoneMsg />,
      },
      {
        key: 'sttnewprovider',
        title: 'New provider',
        link: '',
        icon: <DomainAdd />,
      },
      {
        key: 'sttinteroperabilitysettings',
        title: 'Interoperability settings',
        link: '',
        icon: <DisplaySettings />,
      },
      {
        key: 'sttadminusers',
        title: 'Admin users',
        link: '',
        icon: <LockPerson />,
      },
      {
        key: 'sttanalyticsapi',
        title: 'Analytics API calls',
        link: '',
        icon: <BarChart />,
      },
      {
        key: 'sttreportsinbox',
        title: 'Reports inbox',
        link: '',
        icon: <Inbox />,
      },
      {
        key: 'sttreportsdashboard',
        title: 'Reports dashboard',
        link: '',
        icon: <Assessment />,
      },
    ],
  },
  {
    key: 5,
    title: 'Telehealth',
    link: '/waiting-room',
    icon: <VideoChat />,
    submenu: [],
  },
];

export const bottomMenuItems: menuItem[] = [
  {
    key: 6,
    title: 'Search',
    link: '#search',
    icon: <Search />,
    submenu: [],
  },
  {
    key: 7,
    title: 'Messages',
    link: '/inbox',
    icon: <Forum />,
    submenu: [],
  },
  {
    key: 8,
    title: 'Notifications',
    link: '/notifications',
    icon: <Notifications />,
    submenu: [],
  },
  {
    key: 9,
    title: 'User',
    link: '/user',
    icon: <AccountCircle />,
    submenu: [],
  },
];

// Menu Drawer
export const drawerItems: React.JSX.Element = (
  <>
    <MenuItems items={menuItems} />
    <MenuItems items={bottomMenuItems} />
  </>
);

// Responsive Menu Drawer
export const responsiveDrawerItems: React.JSX.Element = (
  <>
    <MenuItems items={menuItems} text={true} mobile={true} />
    <MenuItems items={bottomMenuItems} text={true} mobile={true} />
  </>
);

// styled components for sub menu
export const StyledListItemButton: StyledComponent<any> = styled(
  ListItemButton
)(({ theme, active }) => ({
  backgroundColor: active ? theme.palette.primary : 'transparent',
  color: active ? theme.palette.primary.light : theme.palette.primary.main,
  '&:hover': {
    backgroundColor: active
      ? theme.palette.primary.main
      : theme.palette.primary.main,
    color: theme.palette.primary.light,
  },
  fontSize: '1rem',
  width: '18rem',
}));

export const StyledListItemIcon: StyledComponent<any> = styled(ListItemIcon)(
  ({ theme: theme, active }) => ({
    color: active ? theme.palette.primary.light : theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.light,
    },
  })
);

export const StyledAppBar: StyledComponent<any> = styled(AppBar)(
  ({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
  })
);

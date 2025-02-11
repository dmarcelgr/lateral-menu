import * as React from 'react';
import NotificationsComponent from './notifications/NotificationsComponent.tsx';
import AlertsComponent from './alerts/AlertsComponent.tsx';
import EWPTabsComponent from '../../../components/reusableTabs/EWPTabsComponent.tsx';

export function Notifications() {
  const tabsData = [
    { index: 0, label: 'alerts', content: <AlertsComponent /> },
    { index: 1, label: 'notifications', content: <NotificationsComponent /> },
  ];

  return (
    <>
      <EWPTabsComponent tabsData={tabsData} />
    </>
  );
}

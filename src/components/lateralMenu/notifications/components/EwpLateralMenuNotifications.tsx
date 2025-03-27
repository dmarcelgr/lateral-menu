import * as React from 'react';
import EwpNotificationsComponent from './notifications/EwpNotificationsComponent.tsx';
import EwpAlertsComponent from './alerts/EwpAlertsComponent.tsx';
import EwpTabsComponent from '../../../reusableTabs/EwpTabsComponent.tsx';
import { EwpNotificationModule } from '../models/notificationsModule.ts';

export default function EwpLateralMenuNotifications() {
  const tabsData: EwpNotificationModule[] = [
    { index: 0, label: 'alerts', content: <EwpAlertsComponent /> },
    {
      index: 1,
      label: 'notifications',
      content: <EwpNotificationsComponent />,
    },
  ];

  return (
    <>
      <EwpTabsComponent tabsData={tabsData} />
    </>
  );
}

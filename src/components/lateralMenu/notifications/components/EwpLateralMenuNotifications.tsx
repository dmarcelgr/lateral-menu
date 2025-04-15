import * as React from 'react';
import EwpLateralMenuAlerts from './alerts/EwpLateralMenuAlerts.tsx';
import EwpTabsComponent from '../../../reusableTabs/EwpTabsComponent.tsx';
import { EwpNotificationModule } from '../models/notificationsModule.ts';
import EwpLateralMenuNotificationsComponent from './notifications/EwpLateralMenuNotificationsComponent.tsx';

export default function EwpLateralMenuNotifications() {
  const tabsData: EwpNotificationModule[] = [
    { index: 0, label: 'alerts', content: <EwpLateralMenuAlerts /> },
    {
      index: 1,
      label: 'notifications',
      content: <EwpLateralMenuNotificationsComponent />,
    },
  ];

  return (
    <>
      <EwpTabsComponent tabsData={tabsData} />
    </>
  );
}

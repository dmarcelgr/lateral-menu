import { ReactElement } from 'react';

export interface EwpNotificationModule {
  index: number;
  label: string;
  content: JSX.Element | ReactElement;
}

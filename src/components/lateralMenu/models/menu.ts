import { ReactNode } from 'react';

export interface Menu {
  link: string;
  reload?: boolean;
  icon: ReactNode;
  title: string;
  key: number;
}

export interface EwpLateralMenuItem extends Omit<Menu, 'submenu'> {
  submenu: Menu[] | ReactNode;
}

import { ReactNode } from 'react';

export interface Menu {
  link: string;
  icon: ReactNode;
  title: string;
  key: number;
}

export interface MenuItem extends Omit<Menu, 'submenu'> {
  submenu: Menu[] | JSX.Element;
}

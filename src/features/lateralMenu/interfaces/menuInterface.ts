import { ReactNode } from 'react';

export interface MenuSubItems {
  link: string;
  icon: ReactNode;
  title: string;
  key: number;
}

export interface MenuItem extends Omit<MenuSubItems, 'submenu'> {
  submenu: MenuSubItems[];
}

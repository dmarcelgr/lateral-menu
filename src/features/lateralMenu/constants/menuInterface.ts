import { jsx } from '@emotion/react';

export interface menuSubItems {
  link: string;
  icon: jsx | never;
  title: string;
  key: number | string;
}

export interface menuItem extends Omit<menuSubItems, 'submenu'> {
  submenu: menuSubItems[];
}

import { MenuItem } from '../models/menu.ts';

export interface menuItemsProps {
  menuKey: string;
  menuItems: MenuItem[];
}

export interface SubmenuItemsProps {
  key?: number;
  submenu?: MenuItem[];
  title?: string;
  handleDrawerClose: () => void;
}

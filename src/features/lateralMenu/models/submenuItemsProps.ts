import { MenuItem } from './menu.ts';

export interface SubmenuItemsProps {
  key: number;
  submenu: MenuItem[];
  title?: string;
  handleDrawerClose: () => void;
}

import { EwpLateralMenuItem } from '../models/menu.ts';

export interface MenuItemProps {
  menuKey: string;
  menuItems: EwpLateralMenuItem[];
}

export interface SubmenuItemProps {
  key: number;
  submenu?: EwpLateralMenuItem[];
  title: string;
  handleDrawerClose: VoidFunction;
}

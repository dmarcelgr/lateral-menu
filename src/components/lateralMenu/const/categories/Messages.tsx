import { EwpLateralMenuItem } from '../../models/menu.ts';
import { Mail } from '@mui/icons-material';
import { EwpLateralMenuInboxMessages } from '../../messages/components/EwpLateralMenuInboxMessages.tsx';

export const MESSAGES: EwpLateralMenuItem = {
  key: 7000,
  title: 'inbox',
  link: '/inbox',
  reload: false,
  icon: <Mail />,
  submenu: <EwpLateralMenuInboxMessages />,
};

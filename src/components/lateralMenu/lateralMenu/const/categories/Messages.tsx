import { MenuItem } from '../../models/menu.ts';
import { Mail } from '@mui/icons-material';
import { EwpInboxMessagesComponent } from '../../../messages/components/EwpInboxMessagesComponent.tsx';

export const MESSAGES: MenuItem = {
  key: 7000,
  title: 'inbox',
  link: '/inbox',
  icon: <Mail />,
  submenu: <EwpInboxMessagesComponent />,
};

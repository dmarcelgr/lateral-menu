import { MenuItem } from '../../models/menu.ts';
import { Mail } from '@mui/icons-material';
import { MessagesComponent } from '../../../messages/components/MessagesComponent.tsx';

export const MESSAGES: MenuItem = {
  key: 7000,
  title: 'inbox',
  link: '/inbox',
  icon: <Mail />,
  submenu: <MessagesComponent />,
};

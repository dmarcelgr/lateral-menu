import { MenuItem } from '../../models/menu.ts';
import { Videocam } from '@mui/icons-material';
import EwpLateralMenuTelehealthComponent from '../../../telehealth/components/EwpLateralMenuTelehealthComponent.tsx';

export const TELEHEALTH_ROOM: MenuItem = {
  key: 5000,
  title: 'telehealth',
  link: '/waiting-room',
  icon: <Videocam />,
  submenu: <EwpLateralMenuTelehealthComponent />,
};

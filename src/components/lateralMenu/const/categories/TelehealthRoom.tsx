import { EwpLateralMenuItem } from '../../models/menu.ts';
import { Videocam } from '@mui/icons-material';
import EwpLateralMenuTelehealth from '../../telehealth/components/EwpLateralMenuTelehealth.tsx';

export const TELEHEALTH_ROOM: EwpLateralMenuItem = {
  key: 5000,
  title: 'telehealth',
  link: '/waiting-room',
  reload: false,
  icon: <Videocam />,
  submenu: <EwpLateralMenuTelehealth />,
};

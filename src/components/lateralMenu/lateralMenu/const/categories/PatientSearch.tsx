import { MenuItem } from '../../models/menu.ts';
import { Search } from '@mui/icons-material';
import { EwpLateralMenuPatientSearch } from '../../../patientSearch/components/EwpLateralMenuPatientSearch.tsx';

export const PATIENT_SEARCH: MenuItem = {
  key: 6000,
  title: 'search',
  link: '#search',
  icon: <Search />,
  submenu: <EwpLateralMenuPatientSearch />,
};

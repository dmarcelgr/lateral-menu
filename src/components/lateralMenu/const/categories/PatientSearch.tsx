import { EwpLateralMenuItem } from '../../models/menu.ts';
import { Search } from '@mui/icons-material';
import { EwpLateralMenuPatientSearch } from '../../patientSearch/components/EwpLateralMenuPatientSearch.tsx';

export const PATIENT_SEARCH: EwpLateralMenuItem = {
  key: 6000,
  title: 'search',
  link: '',
  reload: false,
  icon: <Search />,
  submenu: <EwpLateralMenuPatientSearch />,
};

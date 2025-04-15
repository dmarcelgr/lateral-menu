import { EwpLateralMenuItem } from '../models/menu.ts';
import {
  MESSAGES,
  PATIENT_SEARCH,
  PATIENTS,
  REMOTE_PATIENT_MONITORING,
  SETTINGS,
  TELEHEALTH,
  TELEHEALTH_ROOM,
  USER_NOTIFICATIONS,
  USER_PROFILE,
} from './categories'; // Import menu items

// Menu division / structure
export const EWP_TOP_MENU_ITEMS: EwpLateralMenuItem[] = [
  PATIENTS,
  TELEHEALTH,
  REMOTE_PATIENT_MONITORING,
  SETTINGS,
  TELEHEALTH_ROOM,
];
export const EWP_BOTTOM_MENU_ITEMS: EwpLateralMenuItem[] = [
  PATIENT_SEARCH,
  MESSAGES,
  USER_NOTIFICATIONS,
  USER_PROFILE,
];

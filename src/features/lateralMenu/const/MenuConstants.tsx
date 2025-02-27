import { MenuItem } from '../models/menu.ts';
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
export const EWP_TOP_MENU_ITEMS: MenuItem[] = [
  PATIENTS,
  TELEHEALTH,
  REMOTE_PATIENT_MONITORING,
  SETTINGS,
  TELEHEALTH_ROOM,
];
export const EWP_BOTTOM_MENU_ITEMS: MenuItem[] = [
  PATIENT_SEARCH,
  MESSAGES,
  USER_NOTIFICATIONS,
  USER_PROFILE,
];

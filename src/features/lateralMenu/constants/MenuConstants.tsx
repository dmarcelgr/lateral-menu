import { MenuItem } from '../interfaces/menuInterface.ts';
import {
  EwpSettings,
  Messages,
  Patients,
  PatientSearch,
  RemotePatientMonitoring,
  Telehealth,
  TelehealthRoom,
  UserNotifications,
  UserProfile,
} from './categories'; // Import menu items

// Menu division / structure
export const ewpMenuItems: MenuItem[] = [
  Patients,
  Telehealth,
  RemotePatientMonitoring,
  EwpSettings,
  TelehealthRoom,
];
export const ewpBottomMenuItems: MenuItem[] = [
  PatientSearch,
  Messages,
  UserNotifications,
  UserProfile,
];

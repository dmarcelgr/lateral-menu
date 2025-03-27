import { EwpPatientSearch, PatientsInfo } from '../models/';

export interface PatientSearchProps {
  data: EwpPatientSearch;
}

export interface PatientSearchResponse {
  totalPatients: number;
  patients: PatientsInfo[];
}

export interface EwpPatientSearch {
  total_patients?: number;
  patients?: PatientsInfo[];
}

export interface PatientsInfo {
  patientId: number;
  patientFirstName: string;
  patientLastName: string;
  patientFullName: string;
  patientDOB: string;
  patientStatus: boolean | null;
}

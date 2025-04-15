export interface EwpPatientSearch {
  totalPatients: number;
  patients: PatientInfo[];
}

export interface PatientInfo {
  patientId: number;
  patientFirstName: string;
  patientLastName: string;
  patientFullName: string;
  patientDOB: string;
  patientStatus: boolean | null;
}

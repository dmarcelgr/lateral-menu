export interface EwpAlert {
  events: AlertEvent[];
  totalEvents: number;
}

export interface AlertEvent {
  id: number | null;
  createDate: string;
  status: string;
  cause: string;
  patientPhoto: string;
  patientId: number;
  patientName: string;
}

export interface EwpAlertSearch {
  readByMedicalStaff?: boolean;
  onlyMyPatients?: boolean;
  page?: number;
  pageSize?: number;
}

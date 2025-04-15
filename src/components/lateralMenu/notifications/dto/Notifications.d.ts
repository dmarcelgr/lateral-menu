export interface NotificationProps {
  data: NotificationDataApi[];
  total: number;
}

export interface NotificationDataApi {
  id: number;
  created_at: string;
  is_read: string;
  record_name: string;
  comment: string;
  patient: number;
  patient_name: string;
}

import { AlertEvent, EwpAlert } from '../models/';

export interface AlertsProps {
  data: EwpAlert;
}

export interface AlertsResponse {
  events?: AlertEvent[];
  totalEvents: number;
}

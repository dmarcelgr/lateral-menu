import { AlertEvent } from '../models/';

export interface AlertProps {
  data: AlertApi;
}

export interface AlertApi {
  events: AlertEvent[];
  total_events: number;
}

export interface AlertEvents {
  id: number | null;
  symptom_resport: {
    created_at: string;
  };
  status: string;
  cause: string;
  patient: {
    id: number;
    id_people: {
      first_name: string;
      last_name: string;
      image_filename: string;
    };
  };
}

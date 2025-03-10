import { EwpTelehealth } from '../models/';

export interface TelehealthProps {
  data: EwpTelehealth;
}

export interface TelehalthRoomsSearchProps {
  page?: number;
  pageSize?: number;
}

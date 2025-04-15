import { EwpTelehealthProviderInfo } from '../models';

export interface TelehealthProviderProps {
  data: TelehealthProviderApi;
}

export interface TelehealthProviderApi {
  records: TelehealthProviderDetail[];
  total_records: number;
}

export interface TelehealthProviderDetail {
  user: number;
  username: string;
  room: number;
  type_participant: string | number;
}

export interface TelehealthProviderResponse {
  providerInfo: EwpTelehealthProviderInfo[];
}

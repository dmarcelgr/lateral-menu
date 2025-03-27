import {
  EwpRoomProviderInfo,
  EwpTelehealth,
  EwpTelehealthRoomDetail,
} from '../models/';

export interface TelehealthProps {
  data: EwpTelehealth;
}

export interface TelehalthRoomsSearchProps {
  page?: number;
  pageSize?: number;
}

export interface TelehealthRoomResponse {
  roomsInfo: EwpTelehealthRoomDetail[];
  totalRoomsRecords: number;
}

export interface TelehealthProviderInfo {
  providerInfo: EwpRoomProviderInfo[];
}

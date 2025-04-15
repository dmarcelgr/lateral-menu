export interface TelehealthProps {
  data: TelehealthRoomApi;
}

export interface TelehealthRoomApi {
  records: TelehealthRoomDetail[];
  total_records: number;
}

export interface TelehealthRoomDetail {
  id: number | null;
  created: string;
  name: string;
  display_name: string;
  url: string;
  cause: string;
  provider: number | null;
}

export interface TelehealthRoomResponse {
  roomsInfo: TelehealthRoomDetail[];
  totalRoomsRecords: number;
}

export interface TelehealthRoomSearchProps {
  page: number;
  pageSize: number;
}

export interface EwpTelehealth {
  records?: object;
  totalRecords?: number;
}

export interface EwpTelehealthSearch {
  page: number;
  pageSize: number;
}

export interface EwpTelehealthRoomDetail {
  id: number | null;
  createDate: string;
  name: string;
  displayName: string;
  url: string;
  cause: string;
  providerId: number | null;
}

export interface EwpRoomProviderInfo {
  id: number | null;
  name: string;
  room: string;
  userType: string | number;
}

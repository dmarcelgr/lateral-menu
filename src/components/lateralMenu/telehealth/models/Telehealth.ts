export interface EwpTelehealth {
  records: {
    id: number;
    createDate: string;
    name: string;
    displayName: string;
    url: string | null;
    cause: string;
    providerId: number;
  }[];
  totalRoomsRecords: number;
}

export interface EwpTelehealthSearch {
  page: number;
  pageSize: number;
}

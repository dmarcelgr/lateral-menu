// Api for telehealth tab at Lateral Menu:
// Available rooms: esvyda-telecoms-api-rooms-list&page=1&page_size=20
// Provider information: esvyda-room-telehealth-doctor-presence&djng_url_kwarg_roomid=3

import {
  TelehealthProps,
  TelehealthRoomDetail,
  TelehealthRoomResponse,
} from '../dto/Telehealth';

export default function TelehealthAdapter(
  data: TelehealthProps
): TelehealthRoomResponse {
  const { records, totalRecords } = data;

  return {
    roomsInfo: records.map((item: TelehealthRoomDetail) => ({
      id: item.id,
      createDate: item.created,
      name: item.name,
      displayName: item.display_name,
      url: item.url,
      cause: item.cause,
      providerId: item.provider,
    })),
    totalRoomsRecords: totalRecords,
  };
}

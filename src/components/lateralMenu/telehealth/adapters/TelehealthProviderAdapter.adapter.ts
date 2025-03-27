// Api for telehealth tab at Lateral Menu:
// Available rooms: esvyda-telecoms-api-rooms-list&page=1&page_size=20
// Provider information: esvyda-room-telehealth-doctor-presence&djng_url_kwarg_roomid=3

import { TelehealthProps, TelehealthProviderInfo } from '../dto';

export default function TelehealthProviderAdapter(
  data: TelehealthProps
): TelehealthProviderInfo {
  const { records } = data;
  return {
    providerInfo: records.map((provider) => ({
      id: provider.user,
      name: provider.username,
      room: provider.room,
      userType: provider.type_participant,
    })),
  };
}

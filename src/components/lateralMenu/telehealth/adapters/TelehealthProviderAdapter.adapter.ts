// Api for telehealth tab at Lateral Menu:
// Available rooms: esvyda-telecoms-api-rooms-list&page=1&page_size=20
// Provider information: esvyda-room-telehealth-doctor-presence&djng_url_kwarg_roomid=3

import { TelehealthProps } from '../dto';
import {
  TelehealthProviderDetail,
  TelehealthProviderResponse,
} from '../dto/TelehealthProvider';

export default function TelehealthProviderAdapter(
  data: TelehealthProps
): TelehealthProviderResponse {
  const { records } = data;
  return {
    providerInfo: records.map((provider: TelehealthProviderDetail) => ({
      id: provider.user,
      name: provider.username,
      room: provider.room,
      userType: provider.type_participant,
    })),
  };
}

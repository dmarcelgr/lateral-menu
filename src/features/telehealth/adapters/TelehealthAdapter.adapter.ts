// Api for telehealth tab at Lateral Menu:
// Available rooms: esvyda-telecoms-api-rooms-list&page=1&page_size=20
// Provider information: esvyda-room-telehealth-doctor-presence&djng_url_kwarg_roomid=3

import { TelehealthProps } from '../dto/Telehealth';

export const TELEHEALTH_DATA = {
  total_records: 2,
  records: [
    {
      id: 3,
      name: 'drdavid',
      display_name: 'Dr David',
      created: '2020-04-01T18:35:01.793539-05:00',
      updated: '2020-04-02T16:52:19.112496-05:00',
      camera_off: true,
      video_quality: 'SD',
      use_passcode: true,
      passcode: '123456',
      url: 'http://localhost/drdavid/',
      use_custom_tos: true,
      url_tos: 'https://esvyda.net/terms',
      provider: 1,
      provider_group: null,
      practice: null,
    },
    {
      id: 4,
      name: 'drwilson3',
      display_name: 'Dr Wilson 3',
      created: '2020-04-02T16:29:27.108921-05:00',
      updated: '2020-04-02T16:52:56.134535-05:00',
      camera_off: true,
      video_quality: 'HD',
      use_passcode: false,
      passcode: null,
      url: 'http://localhost/drwilson3/',
      use_custom_tos: false,
      url_tos: null,
      provider: 1,
      provider_group: null,
      practice: null,
    },
  ],
};

export default function TelehealthAdapter(data: TelehealthProps) {
  const telehealth = data;
  return {
    roomsInfo: telehealth?.records?.map((item) => ({
      id: item.id,
      createDate: item.created,
      name: item.name,
      displayName: item.display_name,
      url: item.url,
      cause: item.cause,
      providerId: item.provider,
    })),
    totalRoomsRecords: telehealth?.total_records,
  };
}

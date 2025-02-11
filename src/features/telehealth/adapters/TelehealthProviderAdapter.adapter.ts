// Api for telehealth tab at Lateral Menu:
// Available rooms: esvyda-telecoms-api-rooms-list&page=1&page_size=20
// Provider information: esvyda-room-telehealth-doctor-presence&djng_url_kwarg_roomid=3

import { TelehealthProps } from '../dto';

export const TELEHEALTH_PROVIDER_DATA = {
  total_records: 1,
  records: [
    {
      id: 'c76562b8-3b35-4a93-ad0f-799a6c289521',
      esvyda_version: {
        version: 1,
        platform: 'web',
      },
      private_data: {},
      system: {
        osName: 'Windows',
        browser: 'Chrome',
        osVersion: '10',
        browserVersion: 128,
        isMobileDevice: false,
      },
      username: 'Dr Morgan Sarro',
      video_sp_room_encounter: null,
      image_filename: '5b3f510ac2027beb7544d78e3e3a023d.png',
      image_filepath:
        'roomparticipant_photos/e05ed8a49de20e645ad5eddc5b06a128/5b3f510ac2027beb7544d78e3e3a023d.png',
      created: null,
      updated: '2025-02-03T21:36:23.368319-05:00',
      last_seen: null,
      leave_at: null,
      checked_in_at: '2023-03-30T11:18:36.931140-05:00',
      camera_status: 'error',
      has_camera: true,
      has_camera_access: true,
      has_mic: true,
      has_microphone_access: true,
      mobile_browser: false,
      only_chat: false,
      personal_inbox: 'personal_inbox_doctor',
      status: 'unavailable',
      image_url: null,
      type_participant: 'doctor',
      video_sp: 'twilio',
      active: true,
      room_name: null,
      room: 3,
      user: 14,
    },
  ],
};

export default function TelehealthProviderAdapter(data: TelehealthProps) {
  const telehealth = data;
  return {
    providerInfo: telehealth?.records?.map((provider) => ({
      id: provider.user,
      name: provider.username,
      room: provider.room,
      userType: provider.type_participant,
    })),
  };
}

import { MessageContent } from '../models/';

export interface MessageProps {
  data: MessageApi;
}

export interface MessageApi {
  group_data: {
    user_list: MessageUserList[];
    user_count_list: number[];
  };
  messages: MessageContent[];
  is_family_member: boolean;
  is_patient: boolean;
  total_messages: number;
}

export interface MessageUserList {
  id: number;
  created_at: string;
  status: string;
  message: string;
  image_filename: string;
  user_from: {
    id: number;
    full_name: string;
    patient_id: number | null;
  };
  count: number;
}

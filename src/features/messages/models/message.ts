export interface Message {
  group_data?: {
    user_list: [];
    user_count_list: [];
  };
  messages?: [];
  is_family_member: boolean;
  is_patient: boolean;
  total_messages: number;
}

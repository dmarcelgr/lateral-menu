// Api for Inbox Section at Lateral Menu:
//esvyda-api-messages-section-get&djng_url_kwarg_section=inbox&page=1&page_size=20
import { MessagesProps } from '../dto';

function countUnreadMessages(data) {
  const messages = data.group_data;
  for (let i = messages.user_list.length - 1; i >= 0; i--) {
    messages.user_list[i]['count'] = messages.user_count_list[i];
  }
  return data;
}

export default function MessagesAdapter(data: MessagesProps) {
  const messages = countUnreadMessages(data);
  return {
    isPatient: messages.is_patient,
    isFamilyMember: messages.is_family_member,
    messages: messages.group_data.user_list.map((item) => ({
      id: item.id,
      createDate: item.created_at,
      status: item.status,
      message: item.message,
      patientPhoto: item.image_filename,
      patientId: item.user_from.patient_id,
      patientName: item.user_from.full_name,
      messagesCount: item.count,
    })),
    totalMessages: messages.total_messages,
  };
}

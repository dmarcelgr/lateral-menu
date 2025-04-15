// Api for alerts tab at Lateral Menu:
// http://localhost/api/comments/comment/?type=6&is_read=false
import { NotificationDataApi, NotificationProps, NotificationSearchProps } from '../dto/';
import { EwpNotification } from '../models';

export default function NotificationsAdapter(
  notifications: NotificationProps
): EwpNotification {
  const { data, total } = notifications;
  return {
    data: data.map((item: NotificationDataApi) => ({
      id: item.id,
      createDate: item.created_at,
      status: item.is_read,
      notificationName: item.record_name,
      comment: item.comment,
      patientId: item.patient,
      patientName: item.patient_name,
    })),
    total: total,
  };
}

export function NotificationsSearchAdapter(data: NotificationSearchProps) {
  const { searchParams } = data;
  return {
    type: searchParams.type,
    isRead: searchParams.isRead,
  };
}

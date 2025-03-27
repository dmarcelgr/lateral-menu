// Api for alerts tab at Lateral Menu:
// http://localhost/api/comments/comment/?type=6&is_read=false
import { NotificationsProps } from '../dto/Notifications';
import { NotificationsSearchProps } from '../dto/NotificationsSearch';

export default function NotificationsAdapter(data: NotificationsProps) {
  const { data: notifications, total } = data;
  return {
    total: total,
    data: notifications.map((item) => ({
      id: item.id,
      createDate: item.created_at,
      status: item.is_read,
      notificationName: item.record_name,
      comment: item.comment,
      patientId: item.patient,
      patientName: item.patient_name,
    })),
  };
}

export function NotificationsSearchAdapter(data: NotificationsSearchProps) {
  const { searchParams } = data;
  return {
    type: searchParams.type,
    isRead: searchParams.isRead,
  };
}

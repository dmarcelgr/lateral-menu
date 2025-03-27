export interface EwpNotification {
  total: number;
  data: NotificationData[];
}

export interface EwpNotificationsSearch {
  type: number;
  isRead: boolean;
}

export interface NotificationData {
  id: number;
  createDate: string;
  status: string;
  notificationName: string;
  comment: string;
  patientId: number;
  patientName: string;
}

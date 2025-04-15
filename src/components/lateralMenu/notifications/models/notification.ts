export interface EwpNotification {
  data: NotificationData[];
  total?: number;
}

export interface EwpNotificationSearch {
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

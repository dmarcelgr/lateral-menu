export interface EwpMessage {
  groupData?: {
    userList: object;
    userCountList: object;
  };
  messages?: MessagesContent[];
  isFamilyMember: boolean;
  isPatient: boolean;
  totalMessages: number;
}

export interface MessagesContent {
  id: number;
  createDate: string;
  status: string;
  message: object;
  patientPhoto: string;
  patientId: number;
  patientName: string;
  messagesCount: number;
}

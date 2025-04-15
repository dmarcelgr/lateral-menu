export interface EwpMessage {
  isPatient: boolean;
  isFamilyMember: boolean;
  messages: MessageContent[];
  totalMessages: number;
}

export interface MessageContent {
  id: number;
  createDate: string;
  status: string;
  message: string;
  patientPhoto: string;
  patientId: number | null;
  patientName: string;
  messagesCount: number;
}

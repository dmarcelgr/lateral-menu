import { EwpMessage, MessagesContent } from '../models/';

export interface MessagesProps {
  data: EwpMessage;
}

export interface MessagesResponse {
  isPatient: boolean;
  isFamilyMember: boolean;
  messages: MessagesContent[];
  totalMessages: number;
}

export interface EwpMessage {
  groupData?: {
    userList: [];
    userCountList: [];
  };
  messages?: [];
  isFamilyMember: boolean;
  isPatient: boolean;
  totalMessages: number;
}

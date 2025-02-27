export interface Message {
  groupData?: {
    userList: [];
    userCountList: [];
  };
  messages?: [];
  isFamilyMember: boolean;
  isPatient: boolean;
  totalMessages: number;
}

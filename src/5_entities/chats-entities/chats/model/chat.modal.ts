import { MessageDBDTO } from './message.modal';

export interface ChatDBDTO {
  cid: string;
  usersIds: string[];
  users: { uid: string; displayName: string }[];
  messages: MessageDBDTO[];
}

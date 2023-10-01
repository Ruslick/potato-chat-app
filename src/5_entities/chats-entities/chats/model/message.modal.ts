export interface MessageDBDTO {
  sender: { uid: string; displayName: string };
  date: Date;
  message: string;
}

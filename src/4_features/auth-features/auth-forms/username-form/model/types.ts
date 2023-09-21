export type TSubmitUsernameFunction = (e: React.FormEvent<HTMLFormElement>, email: string) => void;

export interface IusernameFormProps {
  onSubmit: TSubmitUsernameFunction;
}

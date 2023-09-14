export type TSubmitAuthFunction = (
	e: React.FormEvent<HTMLFormElement>,
	email: string,
	pass: string
) => void;

export type TSubmitResetFunction = (
	e: React.FormEvent<HTMLFormElement>,
	email: string
) => void;

export interface IAuthFormProps {
	onSubmit: TSubmitAuthFunction;
	buttonText: string;
}

export interface IResetFormProps {
	onSubmit: TSubmitResetFunction;
}
export interface AuthFormProps {
	variant: "login" | "register";
	onSubmit: TSubmitAuthFunction;
}

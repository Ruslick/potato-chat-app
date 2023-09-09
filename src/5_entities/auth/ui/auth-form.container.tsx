import { FC } from "react";
import { AuthFormComponent } from "./auth-form.component";

interface AuthFormProps {
	variant: "login" | "register";
	onSubmit: (
		e: React.FormEvent<HTMLFormElement>,
		email: string,
		pass: string
	) => void;
}

export const AuthForm: FC<AuthFormProps> = ({ variant, onSubmit }) => {
	return variant === "login" ? (
		<AuthFormComponent
			title="Login"
			buttonText="Login"
			onSubmit={onSubmit}
		></AuthFormComponent>
	) : (
		<AuthFormComponent
			title="Register"
			buttonText="Register"
			onSubmit={onSubmit}
		></AuthFormComponent>
	);
};

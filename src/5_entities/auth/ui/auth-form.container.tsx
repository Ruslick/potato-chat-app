import { FC } from "react";
import { AuthFormProps } from "../model/types";
import { AuthFormComponent } from "./auth-form";

export const AuthFormContainer: FC<AuthFormProps>  = ({variant, onSubmit}) => {
	if (variant === "login") {
		return <AuthFormComponent onSubmit={onSubmit} buttonText="Sign in" />;
	}
	if (variant === "register") {
		return <AuthFormComponent onSubmit={onSubmit} buttonText="Sign up" />;
	}
	return null
};

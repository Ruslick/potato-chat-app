import { FC } from "react";
import { RegisterWidget } from "../../../3_widgets/auth-widgets";
import { Link } from "react-router-dom";

export const RegisterPage: FC = () => {
	return (
		<>
			<RegisterWidget />

			<p>
				Already have an account ? <Link to={"/login"}>Sign in</Link>
			</p>
		</>
	);
};

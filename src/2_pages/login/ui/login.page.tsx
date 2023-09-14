import { FC } from "react";
import { LoginWidget } from "../../../3_widgets/auth-widgets";
import { Link } from "react-router-dom";

export const LoginPage: FC = () => {
	return (
		<>
			<LoginWidget />
			<p>
				Forgot a password? <Link to={"/reset-password"}>Reset</Link>
			</p>
			<p>
				Not a member yet? <Link to={"/register"}>Sign up</Link>
			</p>
		</>
	);
};

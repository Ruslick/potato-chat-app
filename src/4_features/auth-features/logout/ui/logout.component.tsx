import { signOut } from "firebase/auth";
import { FC } from "react";
import { authFirebase } from "../../../../6_shared";

export const Logout: FC = () => {

  // fix this: native signOut from firebase doesn't work
	const handleClick = () => {
    signOut(authFirebase);
	};

	return <button onClick={handleClick}>Logout</button>;
};

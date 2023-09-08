import { FC } from "react";
import { Logout } from "../../../4_features/logout";
import { authFirebase } from "../../../6_shared";

export const HomeComponent: FC = () => {
	if (!authFirebase.currentUser) throw new Error("No user");


	
	return (
		<div>
			<h1>Home page</h1>
			<p>Welcom, {authFirebase.currentUser.email}</p>
			<Logout />
		</div>
	);
};

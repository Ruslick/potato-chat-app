import { FC } from "react";
import { authFirebase } from "../../../6_shared";
import { Logout } from "../../../4_features/auth-features/logout";

export const HomeComponent: FC = () => {
  if (!authFirebase.currentUser) throw new Error("No user");

  return (
    <div>
      <h1>Home page</h1>
      <p>Welcome, {authFirebase.currentUser.email}</p>
      <Logout />
    </div>
  );
};

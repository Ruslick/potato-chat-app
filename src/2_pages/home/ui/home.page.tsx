import { FC } from "react";
import { authFirebase } from "../../../6_shared";
import { LogoutFeature } from "../../../4_features/auth-features";
export const HomePage: FC = () => {
  if (!authFirebase.currentUser) throw new Error("No user");

  return (
    <div>
      <h1>Home page</h1>
      <p>Welcome, {authFirebase.currentUser.displayName}</p>
      <LogoutFeature />
    </div>
  );
};

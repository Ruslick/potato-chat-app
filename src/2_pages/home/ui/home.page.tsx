import { FC } from "react";
import { useIdToken } from "react-firebase-hooks/auth";
import { LogoutFeature } from "../../../4_features/auth-features";
import { authFirebase } from "../../../6_shared";

export const HomePage: FC = () => {
  if (!authFirebase.currentUser) throw new Error("No user");
  const [user] = useIdToken(authFirebase);

  if (!user) throw new Error("No user");

  return (
    <div>
      <h1>Home page</h1>
      <p>Welcome, {authFirebase.currentUser.displayName}</p>
      {!user.emailVerified && <p>Email {user.email} not verified</p>}
      <LogoutFeature />
    </div>
  );
};

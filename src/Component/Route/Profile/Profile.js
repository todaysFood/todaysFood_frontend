import React, { useContext } from "react";
import { UserContext } from "../../../App";
import ProfileMain from "./ProfileMain/ProfileMain";
import ProfileLogin from "./ProfileLogin/ProfileLogin";

const Profile = () => {
  const user = useContext(UserContext);
  return user.isLoggedIn ? <ProfileMain /> : <ProfileLogin />;
};

export default Profile;

import React, { useContext } from "react";
import style from "./ProfileLogin.module.css";
import { UserContext } from "../../../../App";

const ProfileLogin = () => {
  const user = useContext(UserContext);

  return (
    <button
      className={`${style.login_button}`}
      onClick={!user.isLoggedIn ? user.openModal : null}
      g
    >
      로그인
    </button>
  );
};
export default ProfileLogin;

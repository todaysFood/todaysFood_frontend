import React, { useState, useContext } from "react";
import style from "./login.module.css";
import fetchLogin from "../../../util/api/login";
import { UserContext } from "../../../App";

function Login({ closeModal, setModalSignIn }) {
  const globalUser = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };
  const onChangePassword = e => {
    setPw(e.target.value);
  };
  const login = () => {
    try {
      const user = fetchLogin(email, pw);
      if (user) {
        globalUser.setIsLoggedIn(true);
        globalUser.closeModal();
      }
    } catch (e) {
      alert("로그인 실패");
    }
  };

  return (
    <div className={`${style.wrapper}`}>
      <h1>로그인</h1>

      <form className={`${style.form}`}>
        <label for="login_email" className={`${style.label}`}>
          이메일
        </label>
        <input
          id="login_email"
          type="email"
          className={`${style.form_control}`}
          onChange={onChangeEmail}
          value={email}
        />

        <label for="login_pw" className={`${style.label}`}>
          패스워드
        </label>
        <input
          id="login_pw"
          type="password"
          className={`${style.form_control}`}
          onChange={onChangePassword}
          value={pw}
        />
        <div className={`${style.changeSingIn}`}>
          계정이 없으면{" "}
          <a href="#none" onClick={() => setModalSignIn()}>
            회원가입
          </a>
        </div>
        <button
          type="submit"
          id="login-button"
          className={`${style.login_button}`}
          onClick={login}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

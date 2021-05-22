import React from "react";
import style from "./login.module.css";

function Login({ closeModal, setModalSignIn }) {
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
        />

        <label for="login_pw" className={`${style.label}`}>
          패스워드
        </label>
        <input
          id="login_pw"
          type="password"
          className={`${style.form_control}`}
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
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

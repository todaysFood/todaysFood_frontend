import React from "react";
import style from "./login.module.css";

function Login({ closeModal }) {
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

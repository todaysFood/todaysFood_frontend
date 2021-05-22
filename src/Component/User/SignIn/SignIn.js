import React from "react";
import style from "./signIn.module.css";

function SignIn({ closeModal, setModalLogIn }) {
  return (
    <div className={`${style.wrapper}`}>
      <h1>회원 가입</h1>

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
        <label for="login_name" className={`${style.label}`}>
          이름
        </label>
        <input
          id="login_name"
          type="text"
          className={`${style.form_control}`}
        />

        <label for="login_nickname" className={`${style.label}`}>
          닉네임
        </label>
        <input
          id="login_nickname"
          type="text"
          className={`${style.form_control}`}
        />
        <div className={`${style.changeLogin}`}>
          계정이 이미 있으면{" "}
          <a href="#none" onClick={() => setModalLogIn()}>
            로그인
          </a>
        </div>
        <button
          type="submit"
          id="login-button"
          className={`${style.login_button}`}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;

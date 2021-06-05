import React, { useState, useContext } from "react";
import style from "./signIn.module.css";
import fetchSignIn from "../../../util/api/signIn";
import { UserContext } from "../../../App";

function SignIn({ closeModal, setModalLogIn }) {
  const globalUser = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const onChangeEmail = e => {
    setEmail(e.target.value);
  };
  const onChangePassword = e => {
    setPw(e.target.value);
  };
  const onChangeName = e => {
    setName(e.target.value);
  };
  const onChangeNickName = e => {
    setNickName(e.target.value);
  };
  const signIn = () => {
    try {
      fetchSignIn(email, pw, name, nickName);
      globalUser.setModalLogIn();
      alert("회원가입이 완료되었습니다.");
    } catch (e) {
      alert("회원가입 실패");
    }
  };

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
          onChange={onChangeEmail}
        />

        <label for="login_pw" className={`${style.label}`}>
          패스워드
        </label>
        <input
          id="login_pw"
          type="password"
          className={`${style.form_control}`}
          onChange={onChangePassword}
        />
        <label for="login_name" className={`${style.label}`}>
          이름
        </label>
        <input
          id="login_name"
          type="text"
          className={`${style.form_control}`}
          onChange={onChangeName}
        />

        <label for="login_nickname" className={`${style.label}`}>
          닉네임
        </label>
        <input
          id="login_nickname"
          type="text"
          className={`${style.form_control}`}
          onChange={onChangeNickName}
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
          onClick={signIn}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;

import React, { useState, useContext, useRef } from 'react'
import style from './signIn.module.css'
import fetchSignIn from '../../../util/api/signIn'
import { UserContext } from '../../../App'
import { validateEmail, validatePassword, validateName } from '../../../util/validate'

export default function SignIn({ closeModal, setModalLogIn }) {
  const globalUser = useContext(UserContext)

  const emailRef = useRef(null)
  const pwRef = useRef(null)
  const nameRef = useRef(null)

  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [name, setName] = useState('')
  const [nickName, setNickName] = useState('')

  const [emailValidated, setEmailValidated] = useState(false)
  const [pwValidated, setPwValidated] = useState(false)
  const [nameValidated, setNameValidated] = useState(false)

  const emptyEmailInput = () => {
    emailRef.current.value = ''
    setEmail('')
    setEmailValidated(validateEmail(email))
  }
  const emptyPwInput = () => {
    pwRef.current.value = ''
    setPw('')
    setPwValidated(validatePassword(pw))
  }
  const emptyNameInput = () => {
    nameRef.current.value = ''
    setName('')
    setNameValidated(validateName(name))
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
    setEmailValidated(validateEmail(email))
  }
  const onChangePassword = (e) => {
    setPw(e.target.value)
    setPwValidated(validatePassword(pw))
  }
  const onChangeName = (e) => {
    setName(e.target.value)
    setNameValidated(validateName(name))
  }
  const onChangeNickName = (e) => {
    setNickName(e.target.value)
  }
  const signIn = () => {
    try {
      const response = fetchSignIn(email, pw, name, nickName)
      if (response) globalUser.setModalLogIn()
    } catch (e) {
      alert('회원가입 실패')
    }
  }

  return (
    <div className={`${style.wrapper}`}>
      <h1>회원 가입</h1>

      <form className={`${style.form}`} autoComplete="new-password">
        <div className={`${style.input_container}`}>
          <label htmlFor="login_email" className={`${style.label}`}>
            이메일
          </label>
          <input
            id="login_email"
            type="email"
            className={`${style.form_control}`}
            onChange={onChangeEmail}
            autoComplete="new-password"
            ref={emailRef}
          />
          <i
            className={`${style.icon} ${style.icon_success} bx bxs-check-circle ${
              emailValidated ? '' : style.hidden
            }`}
          ></i>
          <i
            onClick={emptyEmailInput}
            className={`${style.icon} ${style.icon_error} bx bxs-x-circle ${
              !emailValidated ? '' : style.hidden
            }`}
          ></i>
        </div>
        <div className={`${style.input_container}`}>
          <label htmlFor="login_pw" className={`${style.label}`}>
            패스워드
          </label>
          <input
            id="login_pw"
            type="password"
            className={`${style.form_control}`}
            onChange={onChangePassword}
            autoComplete="new-password"
            ref={pwRef}
          />
          <i
            className={`${style.icon} ${style.icon_success} bx bxs-check-circle ${
              pwValidated ? '' : style.hidden
            }`}
          ></i>
          <i
            onClick={emptyPwInput}
            className={`${style.icon} ${style.icon_error} bx bxs-x-circle ${
              !pwValidated ? '' : style.hidden
            }`}
          ></i>
        </div>
        <div className={`${style.input_container}`}>
          <label htmlFor="login_name" className={`${style.label}`}>
            이름
          </label>
          <input
            id="login_name"
            type="text"
            className={`${style.form_control}`}
            onChange={onChangeName}
            autoComplete="new-password"
            ref={nameRef}
          />
          <i
            className={`${style.icon} ${style.icon_success} bx bxs-check-circle ${
              nameValidated ? '' : style.hidden
            }`}
          ></i>
          <i
            onClick={emptyNameInput}
            className={`${style.icon} ${style.icon_error} bx bxs-x-circle ${
              !nameValidated ? '' : style.hidden
            }`}
          ></i>
        </div>
        <div className={`${style.input_container}`}>
          <label htmlFor="login_nickname" className={`${style.label}`}>
            닉네임
          </label>
          <input
            id="login_nickname"
            type="text"
            className={`${style.form_control}`}
            onChange={onChangeNickName}
            autoComplete="new-password"
          />
        </div>

        <div className={`${style.changeLogin}`}>
          계정이 이미 있으면{' '}
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
  )
}

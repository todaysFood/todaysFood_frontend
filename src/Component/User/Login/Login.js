import React, { useState, useContext, useRef } from 'react'
import style from './login.module.css'
import fetchLogin from '../../../util/api/login'
import { UserContext } from '../../../App'
import { validateEmail, validatePassword } from '../../../util/validate'

function Login({ closeModal, setModalSignIn }) {
  const globalUser = useContext(UserContext)

  const emailRef = useRef(null)
  const pwRef = useRef(null)
  const [email, setEmail] = useState('')

  const [pw, setPw] = useState('')
  const [emailValidated, setEmailValidated] = useState(false)
  const [pwValidated, setPwValidated] = useState(false)

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
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
    console.log(email)
    setEmailValidated(validateEmail(email))
  }
  const onChangePassword = (e) => {
    setPw(e.target.value)
    setPwValidated(validatePassword(pw))
  }
  const login = async () => {
    try {
      const reponse = await fetchLogin(email, pw)
      if (reponse) {
        globalUser.setIsLoggedIn(true)
        globalUser.closeModal()
      }
    } catch (e) {
      alert('로그인 실패')
    }
  }

  return (
    <div className={`${style.wrapper}`}>
      <h1>로그인</h1>
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
        <div className={`${style.changeSingIn}`}>
          계정이 없으면{' '}
          <a href="#none" onClick={() => setModalSignIn()}>
            회원가입
          </a>
        </div>
        <button type="submit" id="login-button" className={`${style.login_button}`} onClick={login}>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login

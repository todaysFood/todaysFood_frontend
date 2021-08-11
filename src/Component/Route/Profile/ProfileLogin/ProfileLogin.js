import React, { useContext } from 'react'
import style from './ProfileLogin.module.css'
import { UserContext } from '../../../../App'

export default function ProfileLogin() {
  const user = useContext(UserContext)

  return (
    <button className={`${style.login_button}`} onClick={!user.isLoggedIn ? user.openModal : null}>
      로그인
    </button>
  )
}

import React, { useContext, useState } from 'react'
import { GeoContext, UserContext } from '../../App'
import style from './header.module.css'
import LoginContainer from '../User/LoginContainer/LoginContainer'

export default function Header() {
  const geo = useContext(GeoContext)
  const user = useContext(UserContext)

  return (
    <>
      <header className={`${style.container}`}>
        <div className={`${style.logo}`}>
          오늘의 음식
          {user.isLoggedIn ? null : (
            <div aria-label="button" onClick={user.openModal} className={`${style.login_button}`}>
              로그인
            </div>
          )}
        </div>
        <span className={`${style.title}`}>
          날씨가 좋네요. 오늘의 추천 음식은 <br></br>
          <span>
            {geo.todays &&
              geo.todays.map((today) => (
                <span className={`${style.title_detail}`}>{today + ' '}</span>
              ))}
          </span>{' '}
          입니다.
        </span>
      </header>
      <LoginContainer />
    </>
  )
}

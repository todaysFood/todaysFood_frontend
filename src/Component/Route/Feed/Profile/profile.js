import React from 'react'
import style from './profile.module.css'
import FollowButton from '../../../Buttons/followButton/followButton'

export default function Profile({ name, url, review_count }) {
  return (
    <div className={`${style.container}`}>
      <img src={url} alt={'프로필'} className={`${style.img_container}`} />
      <div className={`${style.name_container}`}>
        <div className={`${style.name}`}> {name} </div>
        <div className={`${style.review_count}`}>{'인증리뷰  ' + review_count}</div>
      </div>
      <FollowButton />
    </div>
  )
}

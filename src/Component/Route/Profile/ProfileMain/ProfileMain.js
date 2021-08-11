import React from 'react'
import style from './ProfileMain.module.css'
import image from '../../../../source/images/test_profile.jpg'
export default function ProfileMain() {
  return (
    <section className={`${style.container}`}>
      <img src={image} alt="프로필 이미지" className={`${style.profile_photo}`} />

      <span className={`${style.profile_name}`}>이경엽</span>
      <span className={`${style.profile_feed}`}>26 피드</span>
    </section>
  )
}

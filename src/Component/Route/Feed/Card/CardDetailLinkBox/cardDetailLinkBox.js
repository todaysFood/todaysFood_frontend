import React from 'react'
import style from './cardDetailLinkBox.module.css'

export default function CardDetailLinkBox({ id, storeName, storeAddress }) {
  return (
    <div className={`${style.container}`}>
      <div className={`${style.store_container}`}>
        <div className={`${style.store_name}`}>{storeName}</div>
        <div className={`${style.store_address}`}>{storeAddress}</div>
      </div>
      <div className={`${style.like_container}`}>
        <img
          src={'https://m.place.naver.com/my/static/media/images/icon_likeit_type2_20210122.svg'}
          alt="좋아요"
          className={`${style.like_img}`}
        />

        <div className={`${style.like_word}`}>{'좋아요'}</div>
      </div>
    </div>
  )
}

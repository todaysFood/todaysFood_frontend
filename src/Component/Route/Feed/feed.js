import React from 'react'
import style from './feed.module.css'
import Card from './Card/Card.js'
import cardData from '../../../test_data/card_data.json'
import fetchFeed from '../../../util/api/getFeed'

function Feed() {
  const cards = fetchFeed()
  return (
    <div className={`${style.container}`}>
      {cards.map((card) => (
        <Card
          key={card.card_id}
          id={card.card_id}
          userId={card.user_id}
          storeId={card.id}
          review={card.review}
          thumb_nail_image={card.thumb_nail_image}
        />
      ))}
    </div>
  )
}

export default Feed

import feed from '../../test_data/card_data.json'

const fetchFeed = async () => {
  try {
    const feeds = await fetch('https://www.weatherplace.site/api/post', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    if (!feeds) alert('받아올 데이터가 없습니다.')
    else return feeds
  } catch (e) {
    console.error(e)
  }
}
export default fetchFeed

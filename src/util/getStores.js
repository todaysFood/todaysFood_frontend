export default function getStores(distance, lat, log) {
  return fetch(
    'https://www.weatherplace.site/api/v1/place?x=' + log + '&y=' + lat + '&radius=' + distance,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    }
  )
    .then(function (resp) {
      return resp.json()
    })
    .catch((reject) => {
      console.log(reject)
    })
}

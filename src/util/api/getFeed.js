import feed from '../../test_data/card_data.json';

const fetchFeed = () => {
    //const feeds = fetch('api');
    const feeds =  fetch(
        "https://www.weatherplace.site/api/post",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
    
    console.log(feeds.then(res => {
       return res.json();
    }).catch(err => {
        console.log(err);
    }));
    // if(!feed) alert('받아올 데이터가 없습니다.');

};
export default fetchFeed;
import feed from '../../test_data/card_data.json';

const fetchFeed = () => {
    //const feeds = fetch('api');

    if(!feed) alert('받아올 데이터가 없습니다.');

    return feed;
};
export default fetchFeed;
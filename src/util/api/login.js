import {useContext} from 'react';
import users from "../../test_data/user_data.json";

const fetchLogin = (email, password) => {

  const obt = {
    email: email,
    password: password,
  }
  const user = fetch('https://www.weatherplace.site/api/login', {
    method: 'POST',
    body: JSON.stringify(obt),
    headers: {
        'Content-Type': 'application/json'
    }
});
  if(!user) alert('해당 계정이 존재하지 않습니다.')
  else return user;
};
export default fetchLogin;

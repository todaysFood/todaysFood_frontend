import users from "../../test_data/user_data.json";

const fetchSignIn = (email, password, userName, nickName) => {

  const obt = {
    email: email,
    password: password,
    name: userName,
    nick_name : nickName,
  }
  const res = fetch("https://www.weatherplace.site/api/register",{
    method: 'POST',
    body: JSON.stringify(obt),
    headers: {
        'Content-Type': 'application/json'
    }
  });

  res.then(response =>{
    return response.json();
  }).catch(reject => {
    console.log(reject);
  })
  console.log(res);

  if (users.users.some(user => user.email === email)) {
    alert("이메일이 이미 존재합니다.");
  }
};
export default fetchSignIn;

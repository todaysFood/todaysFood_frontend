import users from "../../test_data/user_data.json";

const fetchLogin = (email, password) => {
  // const res = await fetch("");
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
  console.log(user);
  user.then(res => {
    console.log(res.json());
  })

  // const res = { ok: true };
  //   if (res.ok) {
  // const user = users.users.find(user => user.email === email);

  // if (!user) {
  //   alert("해당 계정이 존재하지 않습니다.");
  // } else {
  //   if (user.password !== password) {
  //     alert("비밀번호가 틀렸습니다.");
  //   }
  // }
  return user;
};
export default fetchLogin;

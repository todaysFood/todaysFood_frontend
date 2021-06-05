import users from "../../test_data/user_data.json";

const fetchSignIn = (email, password, userName, nickName) => {
  // const res = await fetch("");

  const res = { ok: true };
  //   if (res.ok) {

  if (users.users.some(user => user.email === email)) {
    alert("이메일이 이미 존재합니다.");
  }
};
export default fetchSignIn;

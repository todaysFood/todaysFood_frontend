import users from '../../test_data/user_data.json'

const fetchSignIn = async (email, password, userName, nickName) => {
  const obt = {
    email: email,
    password: password,
    name: userName,
    nick_name: nickName,
  }
  try {
    const res = await fetch('https://www.weatherplace.site/api/register', {
      method: 'POST',
      body: JSON.stringify(obt),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const response = res.json()
    if (response.success) return true
    alert(response.message)
    return false
  } catch (e) {
    console.error(e)
  }
}
export default fetchSignIn

import { useContext } from 'react'
import users from '../../test_data/user_data.json'

const fetchLogin = async (email, password) => {
  const obt = {
    email: email,
    password: password,
  }
  try {
    const res = await fetch('https://www.weatherplace.site/api/login', {
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
export default fetchLogin

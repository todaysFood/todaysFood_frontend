import React, { useContext } from 'react'
import { UserContext } from '../../../App'
import ProfileMain from './ProfileMain/ProfileMain'
import ProfileLogin from './ProfileLogin/ProfileLogin'

export default function Profile() {
  const user = useContext(UserContext)
  return user.isLoggedIn ? <ProfileMain /> : <ProfileLogin />
}

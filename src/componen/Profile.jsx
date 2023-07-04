import React from 'react'
import { useAuth } from './Authenication'

const Profile = () => {

    const auth=useAuth()

    const logout=()=>{
        auth.logout()
    }

  return (
    <div>
        <h1>{auth.user}</h1>
        <button onClick={logout}>logout</button>
    </div>
  )
}

export default Profile
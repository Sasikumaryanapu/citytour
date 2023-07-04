import React, { useState } from 'react'
import { useAuth } from './Authenication'
import { useNavigate} from 'react-router-dom'

const Login = () => {

    const [user,setUser]=useState(" ")
    const auth=useAuth()
    const navigate=useNavigate()
    const submitData=()=>{

        auth. login(user)
        navigate("/about",{replace:true})
    }
  return (
    <div>
        <input type='text' placeholder='username' onChange={e=>setUser(e.target.value)} />
        <input type='submit' value="submit" onClick={submitData}/>
    </div>
  )
}

export default Login
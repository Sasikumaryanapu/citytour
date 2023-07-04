import React from 'react'
import { useAuth } from './Authenication'
import { useNavigate } from 'react-router-dom'
const RequireAuth = ({children}) => {
    const auth=useAuth()
    const navigate=useNavigate()
  
    if(!auth.user){

        return navigate("/")
    }

    return children

}

export default RequireAuth
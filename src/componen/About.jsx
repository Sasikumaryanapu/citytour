import React from 'react'
import { useAuth } from './Authenication'

const About = () => {

    const auth=useAuth()
  return (
    <div>

        {auth.user ? <h1>{auth.user}</h1>:"sorry"}
        
         </div>
  )
}

export default About
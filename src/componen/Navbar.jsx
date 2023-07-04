import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const st={
        position:"fixed",
        color:"red",
        position:"relative",
        top:"100px"

    }
  return (
    <div style={st}>
        <Link to="/about" >about</Link>
        <Link to="/profile" >profile</Link>
        <Link to="/login" >login</Link>


    </div>
  )
}

export default Navbar
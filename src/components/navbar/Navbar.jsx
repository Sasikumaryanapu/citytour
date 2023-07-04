import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div className='container'>
      <header>
       <h1>vizag</h1>
      </header>
      <section>
       <Link to="/">home</Link>
       <Link to="/blogs">blogs</Link>
       <Link to="/contact">contact</Link>
      </section>
    </div>
  )
}

export default Navbar
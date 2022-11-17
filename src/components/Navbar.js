import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
     <Link to='/wellcome'>Home</Link> 
     <Link to='/product'>About</Link>
    </nav>
  )
}

export default Navbar

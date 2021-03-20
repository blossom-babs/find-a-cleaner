import React from 'react'
import { Link} from "react-router-dom";


const Nav = () => {
  return (
    <nav>
      <h1>FindACleaner</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/fac">Find A Cleaner</Link></li>
        <li><button><Link to="/signin">Login</Link></button></li>
      </ul>
    </nav>
  )
}

export default Nav

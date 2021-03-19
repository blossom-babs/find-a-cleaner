import React from 'react'
import { Link} from "react-router-dom";


const Nav = () => {
  return (
    <nav>
      <h1>FindACleaner</h1>
      <ul>
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Find A Cleaner</Link></li>
        <li><button><Link>Login</Link></button></li>
      </ul>
    </nav>
  )
}

export default Nav

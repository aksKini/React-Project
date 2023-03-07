import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div>
      <div>
        Logo
      </div>

      <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/signup">Signup</Link>
            </li>
            <li>
            <Link to="/login">Login</Link>
            </li>
            <li>
            <Link to="/menu">Menu</Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav

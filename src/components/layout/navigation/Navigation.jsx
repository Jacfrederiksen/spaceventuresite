import React, { useState } from 'react'
import "./navigation.scss"
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className='navigation_con'>
      <div className='navigation_left'>
        <Link className='navigation_logo' to="/">LOGO</Link>
      </div>
      <div className={ showMenu ? "navigation_links active" : "navigation_links"}>
      <ul>
          <li>
            <NavLink to="/">Hjem</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/kontakt">Kontakt</NavLink>
          </li>
        </ul>
      </div>
      <div className='navigation_right'>
        <div className={ showMenu ? 'toggle change' : 'toggle'} onClick={() => setShowMenu(!showMenu)}>
        <span className='line lineOne'></span>
        <span className='line lineTwo'></span>
        <span className='line lineThree'></span>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
import React, { useContext } from 'react'
import styles from './adminNav.module.scss';
import { NavLink } from 'react-router-dom';



const AdminNav = () => {
  
  return (
    <nav className={styles.nav_admin}>
    <ul>
      <li><NavLink to="">Home</NavLink></li>
      <li><NavLink to="admintours">Tours</NavLink></li>
      <li><NavLink to="adminabout">About</NavLink></li>
      <li><NavLink to="/">Back to frontpage</NavLink></li>
    </ul>
  </nav>
  )
}

export default AdminNav
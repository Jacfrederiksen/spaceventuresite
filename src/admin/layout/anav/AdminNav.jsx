import React, { useContext } from 'react'
import styles from './adminNav.module.scss';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../../../context/LoginContext'


const AdminNav = () => {

  const { signOut } = useContext(LoginContext);
  
  return (
    <nav className={styles.nav_admin}>
    <ul>
      <li><NavLink to="">Home</NavLink></li>
      <li><NavLink to="admintours">Tours</NavLink></li>
      <li><NavLink to="/">Back to frontpage</NavLink></li>
    </ul>
    <button onClick={ signOut }>Logud</button>
  </nav>
  )
}

export default AdminNav
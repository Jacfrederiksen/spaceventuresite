import React, { useContext } from 'react'
import styles from './adminHeader.module.scss';
import { LoginContext } from '../../../context/LoginContext'
import { Link } from 'react-router-dom'

const AdminHeader = () => {

/*   const { user } = useContext(LoginContext); */
  
  return (
    <header className={styles.admin_header_con}>
      <div className={styles.header_top}>
          <Link to="/">
            <img src="assets/img/logo.png" alt="" />
          </Link>
        </div>
{/*       <p>Du er nu logget ind som: {user} &nbsp;</p> */}
    </header>
  )
}

export default AdminHeader
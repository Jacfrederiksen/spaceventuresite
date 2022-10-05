import React, { useContext } from 'react'
import styles from './login.module.scss';
import { Navigate } from 'react-router-dom';

// Import context til login
import { LoginContext } from '../../context/LoginContext'

const Login = () => {

  const { signIn, user } = useContext(LoginContext);

  if ( user ) {
    // send brugeren tilbage til login
    return <Navigate to="/admin" replace />
  }

  const handleLogin = (e) => {

    e.preventDefault();
    signIn( e.target.iuser.value, e.target.ipass.value )
  }

  return (
    <div className={styles.login_con}>
      <h2>Admin login</h2>
      <form onSubmit={ handleLogin }>
        <label htmlFor="user">Username</label>
        <input type="text" name="iuser" id='user' placeholder='Username' required />
        <label htmlFor="pass">Password</label>
        <input type="password" name="ipass" id='pass' placeholder='Password' required />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
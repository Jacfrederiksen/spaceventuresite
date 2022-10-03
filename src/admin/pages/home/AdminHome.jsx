import React from 'react'
import styles from './adminhome.module.scss';

const AdminHome = () => {
  return (
    <div className={styles.home_wrapper}>
      <div className={styles.home_wrapper_con}>
        <div className={styles.home_welcome}>Welcome Home</div>
        <div className={styles.home_messages}></div>
        <div className={styles.home_update}></div>
      </div>
    </div>
  )
}

export default AdminHome
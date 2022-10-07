import React from 'react'
import styles from './errorcomp.module.scss'

const Errorcomp = () => {


  return (
    <div className={styles.error_con}>
      <p>Der er opstået en fejl. Prøv igen.</p>
    </div>
  )
}

export default Errorcomp
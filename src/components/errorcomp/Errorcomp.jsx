import React from 'react'
import styles from './errorcomp.module.scss'

const Errorcomp = (props) => {

  // props.beskedtest hvis man skal sende flere med kan det måske være nemmere med const Errorcomp = (props).
  // {props.children} hvis den skal have nogle child components med

  return (
    <div className={styles.error_con}>
      {props.beskedtest}
    </div>
  )
}

export default Errorcomp
import React from 'react'
import styles from './teamcard.module.scss'

const TeamCard = (props) => {

  const t = props.team;

  return (
    <div className={styles.card}>
      <div className={styles.card_top}>
        <div className={styles.img_con}>
          <img src={"http://localhost:4444/images/team/" + t.image} alt="Team member image" />
        </div>
      </div>
      <div className={styles.card_bot}>
        <h5>{t.name}</h5>
        <h6>{t.role}</h6>
        <p>{t.phone}</p>
      </div>
    </div>
  )
}

export default TeamCard
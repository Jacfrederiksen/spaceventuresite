import React from 'react'
import styles from './tourcard.module.scss'
import { Link } from 'react-router-dom';

const TourCard = (props) => {

    const t = props.tour;

  return (
    <div className={styles.tour_card_con}>
        <div className={styles.tour_img_con}>
            <img src="" alt="" />
        </div>
        <div className={styles.tour_content_con}>
            <div className={styles.price_con}>
                <h6></h6>
            </div>
            <div className={styles.text_con}>
                <h2>{t.title}</h2>
                <p></p>
                <Link to={"/trip/" + t._id}><button>Se mere</button></Link>
            </div>
        </div>
    </div>
  )
}

export default TourCard
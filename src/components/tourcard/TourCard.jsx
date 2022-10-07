import React from 'react'
import styles from './tourcard.module.scss'
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const TourCard = (props) => {

    const t = props.tour;

  return (
    <div className={styles.tour_card_con}>
        <div className={styles.img_con}>
            <img src={"http://localhost:4444/images/tours/" + t.image1} alt={"Image of the tour you can select" + t.image} />
        </div>
        <div className={styles.content_con}>
            <div className={styles.price_con}>
                <h6>{t.price}</h6>
            </div>
            <div className={styles.text_con}>
                <h2>{t.title}</h2>
                <p>{parse(t.content)}</p>
                <Link to={"/trip/" + t._id}><button>Se mere</button></Link>
            </div>
        </div>
    </div>
  )
}

export default TourCard
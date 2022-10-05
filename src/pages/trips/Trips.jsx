import React, { useState, useEffect } from 'react'
import styles from './trips.module.scss'
import { getTours } from '../../helpers/toursCall'
import TourCard from '../../components/tourcard/TourCard'


const Trips = () => {

  const [tours, setTours] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  useEffect(() => {
    setLoading(true);

    getTours()
      .then((data) => {
        setError(false);
        setTours(data);
        console.log(data)
      })
      .catch((err) => {
        setError(true);
        setTours();
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.tours_con}>
      <div className={styles.tours_header_con}>
        <img src="" alt="" />
        <h1></h1>
      </div>
      { loading && <p>Loader</p> }
      { error && <p>Error</p>}
      {tours && 
        <div className={styles.tour_card_con}>
            {
            tours.map((t => 
              <TourCard tour={t} key={t._id} />
            ))
            }
        </div>
      }
        
    </div>
  )
}

export default Trips
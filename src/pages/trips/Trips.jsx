import React, { useState, useEffect } from 'react'
import styles from './trips.module.scss'

// Components
import TourCard from '../../components/tourcard/TourCard'
import Loading from './../../components/loading/Loadingcomp'
import Errorcomp from './../../components/errorcomp/Errorcomp'

// API Call
import { getTours } from '../../helpers/toursCall'

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
    <div className={styles.trips_con}>
      <div className={styles.header_con}>
        <img src="assets/img/banner-ture.jpg" alt="Image of earth seen from space" />
        <h1>Ture</h1>
      </div>
      { loading && <Loading/> }
      { error && <Errorcomp/>}
      {tours && 
        <div className={styles.card_con}>
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
import React, {useEffect, useState} from 'react'
import styles from './trip.module.scss'
import { getTourById } from '../../helpers/toursCall'
import { useParams } from "react-router-dom";

const Trip = (props) => {

  const [tour, setTour] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const { tripID } = useParams()


  useEffect(() => {
    setLoading(true);

    getTourById(tripID)
      .then((data) => {
        setError(false);
        setTour(data);
        console.log(tripID)
      })
      .catch((err) => {
        setError(true);
        setTour();
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.trip_wrapper}>
      { loading && <p>Loader</p> }
      { error && <p>Error</p>}
      {tour && <div className={styles.trip_con}>
        
        </div>
      }
    </div>
  )
}

export default Trip
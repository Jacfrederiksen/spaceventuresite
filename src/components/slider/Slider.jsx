import React, { useState, useEffect } from 'react'
import styles from './slider.module.scss'

// API Kald
import { getBanner } from '../../helpers/getCall'

const Slider = () => {

    const [banner, setBanner] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      setLoading(true);
  
      getBanner()
        .then((data) => {
          setError(false);
          setBanner(data);
          console.log(data);
        })
        .catch((err) => {
          setError(true);
          setBanner();
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);

  return (
    <div className={styles.slider_con}>Slider</div>
  )
}

export default Slider
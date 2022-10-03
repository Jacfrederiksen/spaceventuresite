import React, { useState, useEffect } from 'react'
import styles from "./footer.module.scss"
import { getFooter } from '../../../helpers/getCall';

const Footer = () => {

  const [footer, setFooter] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    getFooter()
      .then((data) => {
        setError(false);
        setFooter(data);
        console.log(data);
      })
      .catch((err) => {
        setError(true);
        setFooter();
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.footer_con}>
      { loading && <p>Loader</p> }
      { error && <p>Error</p>}
      { footer && <div className={styles.footer_top}>
        <div className={styles.contact_con}></div>
        <div className={styles.links_con}></div>
      </div>
      }
      <div className={styles.footer_bot}>
        <div className={styles.copy_con}>
          <p></p>
        </div>
        <div className={styles.icon_con}></div>
        <div className={styles.to_top}>
          <button className={styles.to_top}><p>&#8963;</p></button>
        </div>
      </div>
    </div>
  )
}

export default Footer
import React, { useState, useEffect } from 'react'
import styles from "./footer.module.scss"
import { getFooter } from '../../../helpers/getCall';
import { FaPhoneAlt, } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { TiLocationArrow } from 'react-icons/ti'
import { Link } from 'react-router-dom'

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
        <div className={styles.contact_con}>
          <h3>KONTAKT</h3>
          <div>
            <FaPhoneAlt size="20px"/>
            <p>{footer.phone}</p>
          </div>
          <div>
            <HiMail size="25px"/>
            <p>{footer.email}</p>
          </div>
          <div>
            <TiLocationArrow size="30px"/>
            <p>{footer.address}</p>
          </div>
        </div>
        <div className={styles.links_con}>
          <h3>HURTIG LINKS</h3>
          <nav>
            <ul>
              <Link><li>Rumfærgen</li></Link>
              <Link><li>Ture</li></Link>
              <Link><li>Vores Team</li></Link>
              <Link><li>Galleri</li></Link>
              <Link><li>Sikkerhed</li></Link>
            </ul>
          </nav>
          <button>Kontakt</button>
        </div>
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
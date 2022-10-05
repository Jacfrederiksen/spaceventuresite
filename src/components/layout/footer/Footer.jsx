import React, { useState, useEffect } from 'react'
import styles from "./footer.module.scss"
import { getFooter } from '../../../helpers/getCall';
import { FaPhoneAlt, } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { TiLocationArrow } from 'react-icons/ti'
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram } from 'react-icons/fa'
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
              <div>
              <span className={styles.dot}></span>
              <Link><li>Rumfærgen</li></Link>
              </div>
              <div>
              <span className={styles.dot}></span>
              <Link><li>Ture</li></Link>
              </div>
              <div>
              <span className={styles.dot}></span>
              <Link><li>Vores Team</li></Link>
              </div>
              <div>
              <span className={styles.dot}></span>
              <Link><li>Galleri</li></Link>
              </div>
              <div>
              <span className={styles.dot}></span>
              <Link><li>Sikkerhed</li></Link>
              </div>
            </ul>
          </nav>
          <div className={styles.button_con}>
            <button className={styles.contact_button}>Kontakt</button>
          </div>
          
        </div>
      </div>
      }
      <div className={styles.footer_bot}>
        <div className={styles.copy_con}>
          <p>@ 2021 Space Venture. All rights reserved.</p>
        </div>
        <div className={styles.icon_con}>
          <FaFacebookF size="20px" className={styles.f_icon} />
          <FaTwitter size="20px" className={styles.f_icon} />
          <FaGooglePlusG size="20px" className={styles.f_icon} />
          <FaTwitter size="20px" className={styles.f_icon} />
        </div>
        <div className={styles.to_top}>
          <button className={styles.to_top}><p>&#8963;</p></button>
        </div>
      </div>
    </div>
  )
}

export default Footer
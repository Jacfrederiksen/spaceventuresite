import React, { useState, useEffect} from 'react'
import styles from './about.module.scss'
import parse from 'html-react-parser';

// Components
import Loading from './../loading/Loadingcomp'
import Errorcomp from './../errorcomp/Errorcomp'

// API call
import { getAbout } from '../../helpers/getCall'

const About = () => {

  const [about, setAbout] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  useEffect(() => {
    setLoading(true);

    getAbout()
      .then((data) => {
        setError(false);
        setAbout(data);
        console.log(data)
      })
      .catch((err) => {
        setError(true);
        setAbout();
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.about_wrapper}>
      { loading && <Loading /> }
      { error && <Errorcomp />}
      {about && <div className={styles.about_con}>
        <div className={styles.img_con}>
          <img src="assets/img/om-os.jpg" alt="Picture of earth seen from space" />
        </div>
        <div className={styles.text_con}>
          <h2>Lidt om os</h2>
          <h3>{about.title}</h3>
          <div className={styles.hr_con}><hr /><hr /></div>
          <article>{parse(about.content)}</article>
          <div className={styles.button_con}>
            <button>Kontakt os</button>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default About
import React, { useState, useEffect} from 'react'
import styles from './about.module.scss'
import { getAbout } from '../../helpers/getCall'
import parse from 'html-react-parser';

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
      { loading && <p>Loader</p> }
      { error && <p>Error</p>}
      {about && <div className={styles.about_con}>
        <img src="assets/img/om-os.jpg" alt="" />
        <div className={styles.about_text_con}>
          <h2>Lidt om os</h2>
          <h3>{about.title}</h3>
          <div className={styles.hr_con}><hr /><hr /></div>
          <article>{parse(about.content)}</article>
          <button>Kontakt os</button>
        </div>
      </div>
      }
    </div>
  )
}

export default About
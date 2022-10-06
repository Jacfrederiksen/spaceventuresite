import React, { useState, useEffect } from "react";
import styles from './subs.module.scss'
import Loading from './../loading/Loadingcomp'
import Errorcomp from './../errorcomp/Errorcomp'

// API
import { subNews } from './../../helpers/subsCall'

const Subs = () => {

    const [signUp, setSignUp] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSub = e => {
        e.preventDefault();

        setLoading(true)

        let formData = new FormData(e.target)

        subNews( formData )
        .then((data) => {
            setSignUp(true)
            setError(false)
        })
        .catch((err) => {
            setSignUp(false)
            setError(true)
        })
        .finally(() => {
            setLoading(false)
        })
    }

  return (
    <div className={styles.signup_con}>
      <div className={styles.image_con}>
        <img src="assets/img/newsmail-bg.jpg" alt="" />
      </div>
      <div className={styles.signup_image_con}>
        <img src="assets/img/newsmail-bg.jpg" alt="" />
      </div>
      <div className={styles.signup_content_con}>
            <h2>Tilmeld dig og få 25% rabat</h2>
            <p>Tilmeld dig vores nyhedsbrev of få 25% rabat på din første tur!</p>
            {
                loading && <Loading/>
            }
            {
                error && <Errorcomp/>
            }
            {
                signUp && <h4>Du er nu tilmeldt!</h4>
            }
            {
                !signUp &&

                <form onSubmit={handleSub}>
                    <label htmlFor="email"></label>
                    <input type="email" name="email" placeholder="Din E-mail" required></input>
                    <button type="submit">Tilmeld</button>
                </form>
            }
        </div>
    </div>
  );
};

export default Subs;

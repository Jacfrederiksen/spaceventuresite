import React, { useState, useEffect } from "react";
import styles from "./safety.module.scss";
import parse from "html-react-parser";

// API Call
import { getSafety } from "../../helpers/getCall";

// Components
import Loading from './../../components/loading/Loadingcomp'
import Errorcomp from './../../components/errorcomp/Errorcomp'

const Shuttle = () => {
  const [safetyContent, setSafetyContent] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    getSafety()
      .then((data) => {
        setError(false);
        setSafetyContent(data);
        console.log(data);
      })
      .catch((err) => {
        setError(true);
        setSafetyContent();
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.safety_con}>
      <div className={styles.header_con}>
        <img src="assets/img/banner2.jpg" alt="Image of astronauts walking on Mars" />
        <h1>Sikkerhed</h1>
      </div>
      {loading && <Loading />}
      {error && <Errorcomp />}
      {safetyContent && (
        <div className={styles.about_con}>
          <div className={styles.text_con}>
            <h2>Din sikkerhed er vigtig for os</h2>
            <h3>{safetyContent.title}</h3>
            <div className={styles.hr_con}>
              <hr />
              <hr />
            </div>
            <article>{parse(safetyContent.content)}</article>
          </div>
          <div className={styles.img_con}>
            <img src="assets/img/spaceship4.jpg" alt="Image of the insides of a spaceship" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Shuttle;

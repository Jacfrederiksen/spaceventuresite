import React, { useState, useEffect } from "react";
import styles from "./safety.module.scss";
import { getSafety } from "../../helpers/getCall";
import parse from "html-react-parser";

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
      <div className={styles.safety_header_con}>
        <img src="assets/img/banner2.jpg" alt="" />
        <h1>Sikkerhed</h1>
      </div>
      {loading && <p>Loader</p>}
      {error && <p>Error</p>}
      {safetyContent && (
        <div className={styles.safety_about_con}>
          <div className={styles.safety_text_con}>
            <h2>Din sikkerhed er vigtig for os</h2>
            <h3>{safetyContent.title}</h3>
            <div className={styles.hr_con}>
              <hr />
              <hr />
            </div>
            <article>{parse(safetyContent.content)}</article>
          </div>
          <div className={styles.img_con}>
            <img src="assets/img/spaceship4.jpg" alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Shuttle;

import React, { useState, useEffect } from "react";
import styles from "./shuttle.module.scss";
import { getSpacecraft } from "../../helpers/getCall";
import parse from "html-react-parser";

const Shuttle = () => {
  const [spacecraft, setSpacecraft] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    getSpacecraft()
      .then((data) => {
        setError(false);
        setSpacecraft(data);
        console.log(data);
      })
      .catch((err) => {
        setError(true);
        setSpacecraft();
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.shuttle_con}>
      <div className={styles.shuttle_header_con}>
        <img src="assets/img/banner-spaceship.jpg" alt="" />
        <h1>Rumfærgen</h1>
      </div>
      {loading && <p>Loader</p>}
      {error && <p>Error</p>}
      {spacecraft && (
        <div className={styles.shuttle_about_con}>
          <div className={styles.img_con}>
            <img src={"http://localhost:4444/images/spacecraft/" + spacecraft.image} alt="" />
          </div>
          <div className={styles.shuttle_text_con}>
            <h2>Hvorfor vælge os</h2>
            <h3>{spacecraft.title}</h3>
            <div className={styles.hr_con}>
              <hr />
              <hr />
            </div>
            <article>{parse(spacecraft.content)}</article>
          </div>
        </div>
      )}
      <div className={styles.gallery_wrapper}>
        <h2>Galleri</h2>
      </div>
    </div>
  );
};

export default Shuttle;

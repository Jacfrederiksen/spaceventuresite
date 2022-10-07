import React, { useState, useEffect } from "react";
import styles from "./shuttle.module.scss";
import parse from "html-react-parser";

// Components
import GalleryComp from "../../components/gallerycomp/GalleryComp";
import Loading from './../../components/loading/Loadingcomp'
import Errorcomp from './../../components/errorcomp/Errorcomp'

// API
import { getSpacecraft } from "../../helpers/getCall";

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
        <img src="assets/img/banner-spaceship.jpg" alt="Banner image of a spaceship" />
        <h1>Rumfærgen</h1>
      </div>
      {loading && <Loading />}
      {error && <Errorcomp />}
      {spacecraft && (
        <div className={styles.about_con}>
          <div className={styles.img_con}>
            <img src={"http://localhost:4444/images/spacecraft/" + spacecraft.image} alt="Image of earth seen from space" />
          </div>
          <div className={styles.text_con}>
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
        <GalleryComp />
      </div>
    </div>
  );
};

export default Shuttle;

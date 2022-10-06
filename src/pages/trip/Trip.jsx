import React, { useEffect, useState } from "react";
import styles from "./trip.module.scss";
import { getTourById } from "../../helpers/toursCall";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";

const Trip = (props) => {
  const [tour, setTour] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { tripID } = useParams();

  useEffect(() => {
    setLoading(true);

    getTourById(tripID)
      .then((data) => {
        setError(false);
        setTour(data);
        console.log(tripID);
      })
      .catch((err) => {
        setError(true);
        setTour();
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.trip_wrapper}>
      {loading && <p>Loader</p>}
      {error && <p>Error</p>}
      {tour && (
          <div className={styles.trip_con}>
            <div className={styles.img_con}>
              <img
                src={"http://localhost:4444/images/tours/" + tour.image1}
                alt=""
              />
              <img
                src={"http://localhost:4444/images/tours/" + tour.image2}
                alt=""
              />
            </div>
            <div className={styles.text_con}>
              <h2>{tour.destination}</h2>
              <div className={styles.price_con}>
                <h6>{tour.price}</h6>
              </div>
              <hr />
              <h5>{tour.title}</h5>
              <article>{parse(tour.content)}</article>
              <hr />
              <div className={styles.description_con}>
                <span>
                  <h6>Destination:</h6>
                  <p>{tour.destination}</p>
                </span>
                <span>
                  <h6>Pris:</h6>
                  <p>{tour.price}</p>
                </span>
                <span>
                  <h6>Afstand fra jorden:</h6>
                  <p>{tour.distance}</p>
                </span>
                <span>
                  <h6>Flyvetid:</h6>
                  <p>{tour.traveltime}</p>
                </span>
              </div>
              <hr />
              <div className={styles.social_icons_con}>
                <h6>SHARE</h6>
                <FaFacebookF size="20px" className={styles.f_icon} />
                <FaTwitter size="20px" className={styles.f_icon} />
                <FaGooglePlusG size="20px" className={styles.f_icon} />
                <FaTwitter size="20px" className={styles.f_icon} />
              </div>
            </div>
          </div>
      )}
    </div>
  );
};

export default Trip;

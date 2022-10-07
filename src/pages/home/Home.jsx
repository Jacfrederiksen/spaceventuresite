import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.scss";

// Components
import Slider from "../../components/slider/Slider";
import About from "../../components/about/About";
import Team from "../../components/team/Team";
import Subs from "../../components/subs/Subs";

const Home = () => {
  return (
    <>
      <div className={styles.home_wrapper}>
        <section className={styles.slider_wrapper}>
          <Slider />
        </section>
        <section className={styles.buttons_wrapper}>
          <div className={styles.buttons_con}>
            <Link to="/trips">
              <div className={styles.planets_con}>
                <img src="assets/img/moon-btn.jpg" alt="Small image of the moon" />
                <h6>Månen</h6>
              </div>
            </Link>
            <Link to="/trips">
              <div className={styles.planets_con}>
                <img src="assets/img/mars-btn.jpg" alt="Small image of Mars" />
                <h6>Mars</h6>
              </div>
            </Link>
            <div className={styles.arrow_con}>
              <Link Link to="/trips">
                <p>Vores ture</p>
              </Link>
              <span>&rarr;</span>
            </div>
          </div>
        </section>
        <section className={styles.about_wrapper}>
          <About />
        </section>
        <section className={styles.team_wrapper}>
          <Team />
        </section>
        <section className={styles.signup_wrapper}>
          <Subs />
        </section>
      </div>
    </>
  );
};

export default Home;

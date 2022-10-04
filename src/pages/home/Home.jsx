import React, { useState, useEffect } from 'react'
import styles from "./home.module.scss"
import Slider from '../../components/slider/Slider'
import { Link } from "react-router-dom";
import About from '../../components/about/About';
import Team from '../../components/team/Team';

const Home = () => {

  return (
    <>
    <div className={styles.home_wrapper}>
      <Slider />
      <div className={styles.buttons_wrapper}>
        <div className={styles.buttons_con}>
          <Link>
            <div className={styles.planets_con}>
              <img src="assets/img/moon-btn.jpg" alt="" />
              <h6>Månen</h6>
            </div>
          </Link>
          <Link>
            <div className={styles.planets_con}>
              <img src="assets/img/mars-btn.jpg" alt="" />
              <h6>Mars</h6>
            </div>
          </Link>
          <div className={styles.arrow_con}>
            <Link><p>Vores ture</p></Link>
            <span>&rarr;</span>
          </div>
        </div>
      </div>
      <div className={styles.about_wrapper}>
        <About />
      </div>
      <div className={styles.team_wrapper}>
        <Team />
      </div>
      <div className={styles.signup_wrapper}>
        <div className={styles.signup_con}></div>
      </div>
    </div>
    </>
  )
}

export default Home
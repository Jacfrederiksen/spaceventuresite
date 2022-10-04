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
      <section className={styles.buttons_wrapper}>
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
      </section>
      <section className={styles.about_wrapper}>
        <About />
      </section>
      <section className={styles.team_wrapper}>
        <Team />
      </section>
      <section className={styles.signup_wrapper}>
        <div className={styles.signup_con}>
          <div className={styles.image_con}><img src="assets/img/newsmail-bg.jpg" alt="" /></div>
          <div className={styles.signup_image_con}>
            <img src="assets/img/newsmail-bg.jpg" alt="" />
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Home
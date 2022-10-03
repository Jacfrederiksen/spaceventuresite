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
          <Link><img src="" alt="" /></Link>
          <Link><img src="" alt="" /></Link>
          <p>Vores ture</p><span>&rarr;</span>
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
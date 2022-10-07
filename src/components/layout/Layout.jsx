import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'

// Components
import Footer from "./footer/Footer"
import Navigation from "./navigation/Navigation"

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
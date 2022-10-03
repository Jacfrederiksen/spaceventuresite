import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from "./footer/Footer"
import Navigation from "./navigation/Navigation"

const Layout = () => {
  return (
    <>
    <Navigation />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
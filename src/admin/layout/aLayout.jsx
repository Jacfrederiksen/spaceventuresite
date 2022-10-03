import React, { useContext } from 'react'
import styles from './alayout.module.scss'
import { Navigate, Outlet } from 'react-router-dom'
import AdminNav from '../../admin/layout/anav/AdminNav'
import AdminFooter from './afooter/AdminFooter'

const AdminLayout = () => {

  return (
    <>
    <AdminNav />
    <Outlet />
    <AdminFooter/>
    </>
  )
}

export default AdminLayout
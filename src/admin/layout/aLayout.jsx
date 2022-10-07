import React, { useContext } from 'react'
import styles from './alayout.module.scss'
import { Navigate, Outlet } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'

// Components
import AdminNav from '../../admin/layout/anav/AdminNav'
import AdminHeader from './aheader/AdminHeader'
import AdminFooter from './afooter/AdminFooter'

const AdminLayout = () => {

  const { user } = useContext(LoginContext);

  if ( !user ) {
    // send brugeren tilbage til login
    return <Navigate to="/login" replace />
  }


  return (
    <>
    <AdminHeader />
    <AdminNav />

    <Outlet />
    <AdminFooter/>
    </>
  )
}

export default AdminLayout
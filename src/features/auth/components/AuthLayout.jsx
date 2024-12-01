import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <main>
        <Header/>
        <Outlet/>
    </main>
  )
}

export default AuthLayout
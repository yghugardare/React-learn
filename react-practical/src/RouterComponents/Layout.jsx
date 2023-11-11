import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div className=' bg-black text-white w-full h-screen'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Foot from '../foot/Foot'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    <Foot/>
    </>
  )
}

export default Layout
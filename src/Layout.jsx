import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Newsletter from './sections/NewsLetter'
import Footer from './sections/Footer'
import ScrollToTop from './components/ScrollToTop'

const Layout = () => {
  return (
    <main>
      <ScrollToTop />
      <Header />   
      <Outlet /> 
      <Newsletter/>
      <Footer/>
      
    </main>
  )
}

export default Layout

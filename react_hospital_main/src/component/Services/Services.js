import React from 'react'
import Servicesbanner from './Servicesbanner'
import Header from '../Header'
import Footer from '../Footer'
import About from './About'
import Chooseus from './Chooseus'
import Enquiry from './Enquiry'
import MServices from './MServices'

function Services() {
  return (
    <div>
        <Header/>
        <Servicesbanner/>
        <About/>
        <Chooseus/>
        <Enquiry/>
        <MServices/>
        <Footer/>
      
    </div>
  )
}

export default Services

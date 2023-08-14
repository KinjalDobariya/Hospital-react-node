import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Ourteam from '../Index/Ourteam'
import Counter from '../Index/Counter'
import Chooseus from '../Services/Chooseus'
import Aboutbanner from './Aboutbanner'
import Aboutdetail from './Aboutdetail'
import Location from './Location'

function Aboutpage() {
  return (
    <div>
        <Header/>
        <Aboutbanner/>
        <Aboutdetail/>
        <Chooseus/>
        <Counter/>
        <Location/>
        <Ourteam/>
        <Footer/>
    </div>
  )
}

export default Aboutpage

import React from 'react'
import Header from '../Header'
import Dbanner from './Dbanner'
import List from './List'
import Choose from '../Index/Choose'
import Blog from '../Index/Blog'
import Footer from '../Footer'

function Departments() {
  return (
    <div>
        <Header/>
        <Dbanner/>
        <List/>
        <Choose/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default Departments

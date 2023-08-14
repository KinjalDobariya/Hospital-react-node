import React from 'react'
import Header from '../Header'
import Banner from './Banner'
import About from './About'
import Footer from '../Footer'
import Service from './Service'
import Counter from './Counter'
import Ourteam from './Ourteam'
import Choose from './Choose'
import Blog from './Blog'

function Home() {
    return (
        <div>
            <Header/>
            <Banner/>
            <About/>
            <Service/>
            <Counter/>
            <Ourteam/>
            <Choose/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default Home

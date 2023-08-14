import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Pricebanner from './Pricebanner'
import Priceslist from './Priceslist'

function Prices() {
    return (
        <div>
            <Header />
            <Pricebanner />
            <Priceslist />
            <Footer />
        </div>
    )
}

export default Prices

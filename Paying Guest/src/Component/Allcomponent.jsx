import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

function Allcomponent() {

    
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Allcomponent

import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from '../Pages/Footer'

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

import React from 'react';
import Topbar from '../../components/Checkout/topbar'
import Footer from '../../components/Checkout/footer'
import NavBar from '../../components/Checkout/nav';
export default ({ children }) => {

    console.log('render Main')

    return (
        <div className="user-page">
            <Topbar/>
            <NavBar />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    )
}

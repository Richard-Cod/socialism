import React from 'react'
import { ToastContainer } from 'react-toastify';
import Head from 'next/head'
import NavBar from '../components/Navbar';


function PagesLayout({children ,showNavbar=true}) {
    return (
        <div>
            <Head>
              <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
            </Head>
            {showNavbar && <NavBar /> }
            {children}
            <ToastContainer />
        </div>
    )
}

export default PagesLayout

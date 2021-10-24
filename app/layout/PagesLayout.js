import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import Head from 'next/head'
import NavBar from '../components/shared/Navbar';
import { connect, useSelector } from 'react-redux';
import manageJwtToken from '../utils/manageJwtToken';
import { setUser } from '../redux/actions/userActions';
import loginBrain from '../brain/loginBrain';



function PagesLayout({children ,showNavbar=true , ...props}) {
    const state = useSelector(state => state)

    useEffect(() => {
        // console.log(props)
        // console.log(state)
    }, [state])


    useEffect(() => {
        const user = manageJwtToken.getUserFromLocalStorage()
        props.setUser(user)

        loginBrain.redirectUserAccordingToAuthStatus(user)
        
    }, [])

    return (
        <div>
            <Head>
              <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
            </Head>

            <div>
                <span style={{fontSize : "10px"}}>{JSON.stringify(state)}</span>
            </div>


            {showNavbar && <NavBar /> }
            {children}


            <ToastContainer />
        </div>
    )
}


const mapStateToProps = state => ({
    user: state.user.value
});

const mapDispatchToProps = {
    setUser : setUser
};

PagesLayout = connect(mapStateToProps, mapDispatchToProps)(PagesLayout)
export default PagesLayout;

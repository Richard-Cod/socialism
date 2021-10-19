import React from 'react'

import PagesLayout from '../app/layout/PagesLayout';
import AuthComponent from '../app/components/Auth/AuthComponent';
import AuthTypes from '../app/constants/AuthTypes';

function register() {


    return (
       <PagesLayout showNavbar={false}>
           <AuthComponent type={AuthTypes.signup} />
       </PagesLayout>
    )
}

export default register

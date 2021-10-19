import React from 'react'
import AuthComponent from '../app/components/Auth/AuthComponent';
import AuthTypes from '../app/constants/AuthTypes';
import PagesLayout from '../app/layout/PagesLayout';

function login() {
    return (
        <PagesLayout showNavbar={false}>
          <AuthComponent type={AuthTypes.signin} />
       </PagesLayout>
    )
}

export default login

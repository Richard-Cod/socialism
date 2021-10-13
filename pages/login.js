import React, { useState  } from 'react'
import { ToastContainer } from 'react-toastify';

import Head from 'next/head'
import Link from 'next/link'
import loginBrain from '../brain/loginBrain';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import RememberMe from '../components/RememberMe';
import { KRoutes } from '../constants/KRoutes';
import StateFulButton from '../components/stateFulButton';


function LoginButton({isLoginIn}) {
    return (
          <StateFulButton 
          isActionIn={isLoginIn}
          title="Sign in"
          className="btn btn-md btn-primary btn-block" 
          type="submit"
          />
    )
}

function LoginFooter() {
    return (
        <div>
            <Link href={KRoutes.register}>Register</Link>
            <p className="mt-5 mb-3 text-muted">© 2017-2021</p>
        </div>
    )
}


function login() {
    const [email, setEmail] = useState("test1@gmail.com")
    const [password, setPassword] = useState("")
    const [isLoginIn, setIsLoginIn] = useState(false)

    React.useEffect(() => {
        loginBrain.redirectUserAccordingToAuthStatus()
    }, [])

        
    return (
        <div className="text-center">
            <Head>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
            </Head>

        <div className="mx-auto mt-4" style={{
            width : "400px",
        }}>
        <form 
            onSubmit={(e) =>loginBrain.handleFormSubmit(e , email , password , setIsLoginIn)}
            className="form-signin"
        >
            <img className="mb-4" src="/logo.jpg" alt="" width={72} height={72} />
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <EmailInput value={email}  setValue={setEmail}  />
            <PasswordInput value={password} setValue={setPassword} />
            <RememberMe />

            <LoginButton isLoginIn={isLoginIn} />

            <LoginFooter />

        </form>

        </div>

        <ToastContainer />
            
           
        </div>
    )
}

export default login

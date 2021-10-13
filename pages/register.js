import React, { useState  } from 'react'
import { ToastContainer } from 'react-toastify';

import Head from 'next/head'
import Link from 'next/Link'
import registerBrain from '../brain/registerBrain';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import RememberMe from '../components/RememberMe';
import { KRoutes } from '../constants/KRoutes';
import StateFulButton from '../components/stateFulButton';

function RegisterButton({isRegisterIn}) {
    return (
        <StateFulButton 
        isActionIn={isRegisterIn}
        title="Sign up"
        className="btn btn-md btn-primary btn-block" 
        type="submit"
        />
    )
}


function RegisterFooter() {
    return (
        <div>
            <Link href={KRoutes.login}>Login</Link>
            <p className="mt-5 mb-3 text-muted">© 2017-2021</p>
        </div>
    )
}



function register() {
    const [email, setEmail] = useState("richard.bathiebo.7@gmail.com")
    const [password, setPassword] = useState("")
    const [isRegisterIn, setIsRegisterIn] = useState(false)

    return (
        <div className="text-center">
            <Head>
              <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
            </Head>

        <div className="mx-auto mt-4" style={{
            width : "400px",
        }}>

        <form 
            onSubmit={(e) => registerBrain.handleFormSubmit(e , email , password , setIsRegisterIn)} 
            className="form-signin"
        >
        <img className="mb-4" src="/logo.jpg" alt="" width={72} height={72} />
        <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
        <EmailInput value={email} setValue={setEmail} />
        <PasswordInput value={password} setValue={setPassword} />
        <RememberMe />

        <RegisterButton isRegisterIn={isRegisterIn} />
        
        <RegisterFooter />
      </form>

        </div>

        <ToastContainer />
            
           
        </div>
    )
}

export default register

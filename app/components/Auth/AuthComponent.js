import React, { useState  } from 'react'

import Link from 'next/Link'
import registerBrain from '../../brain/registerBrain';
import { KRoutes } from '../../constants/KRoutes';
import StateFulButton from '../stateFulButton';
import AgreeWithPolicy from './AgreeWithPolicy';
import AuthTypes from '../../constants/AuthTypes';
import loginBrain from '../../brain/loginBrain';
import CInput from './CInput';


function OrSignWithCredentials({type = AuthTypes.signin}) {
    return (
        <div className="text-blueGray-400 text-center mb-3 font-bold">
        <small>Or {type === AuthTypes.signin ? "Sign in " : "Sign up"} with credentials</small>
    </div>
    )
}

function AuthTop({type = AuthTypes.signup}) {
    return (
        <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-blueGray-500 text-sm font-bold">
                  {type} with
                </h6>
              </div>
              <div className="btn-wrapper text-center">
                <button className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                  <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/github.svg" />Github </button>
                <button className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                  <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg" />Google</button>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
    )
}



function Footer({type = AuthTypes.signup}) {
    return (
        <div>
            <Link className="text-blue-900" 
                href={type == AuthTypes.signup ? KRoutes.login : KRoutes.register}
                >{type == AuthTypes.signup ? "Register" : "Log in "}
            </Link>
            <p className="mt-5 mb-3 text-muted">© 2017-2021</p>
        </div>
    )
}

function Form({type}) {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("richard.bathiebo.7@gmail.com")
    const [password, setPassword] = useState()
    const [covPic, setcovPic] = useState()
    const [profilePic, setprofilePic] = useState()
    const [birthDate, setbirthDate] = useState(new Date())
    const [isLoading, setIsLoading] = useState(false)

    const data = {fullName,email,password,covPic,profilePic,birthDate}

    return (
        <form 
        onSubmit={(e) => {
            if(type === AuthTypes.signup){
                registerBrain.handleFormSubmit(e , data , setIsLoading)
                return
            }
           loginBrain.handleFormSubmit(e , data.email , data.password , setIsLoading)
            
        }} 
        > 
            {type == AuthTypes.signup && <CInput label="Fullname" value={fullName} setValue={setFullName} placeholder="fullname" />}
            <CInput label="Email" value={email} setValue={setEmail} />
            <CInput label="Password" type="password" value={password} placeholder="password" setValue={setPassword} />
            <AgreeWithPolicy />
            <StateFulButton 
                className="btn btn-md btn-primary btn-block" 
                isActionIn={isLoading}
                title={type === AuthTypes.signup ? "Sign up" : "Sign in"}
                type="submit"
            />
            {<Footer type={type} />}
        </form>
    )
}



function AuthComponent({type}) {
    return (
            <div className="text-center">
                <div className="mx-auto mt-4" >
                    <section className=" bg-blueGray-50">
                        <div className="w-full lg:w-6/12 px-4 mx-auto pt-6">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                                    <AuthTop type={type} />
                                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                    <OrSignWithCredentials type={type} />
                                    <Form type={type}/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
    )
}

export default AuthComponent

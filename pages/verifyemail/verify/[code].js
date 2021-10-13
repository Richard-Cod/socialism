import React from 'react'
import verifyEmailCall from '../../../utils/verifyEmailCall'
import manageJwtToken from '../../../utils/manageJwtToken'
import { ToastContainer, toast } from 'react-toastify';
import {  useRouter } from 'next/router';
import Router from "next/router";
import loginBrain from '../../../brain/loginBrain';

        
function SendEmailVerificationComponent() {
    const router = useRouter()
    const {code} = router.query

    React.useEffect(() => {

       const asyncFunc = async () => {

        console.log("code " , code)

        const result = await verifyEmailCall(code)
        console.log("result ", result)

        if(result){
            toast("You're email is now verified ;)")

          Router.push("/profile")
          return
        }

        Router.push("/verifyemail/send")
        }
        if(code) asyncFunc()
       
    }, [code])

    const handleButtonClick = async (e) => {
       
    }
    return (
        <div>
            <button className="btn btn-lg btn-danger m-4" onClick={handleButtonClick}>
            Loading .....

            </button>
        <ToastContainer />

        </div>
    )
}

export default SendEmailVerificationComponent

import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
        
import getVerificationEmailCall from "../../app/utils/getVerificationEmailCall"
function SendEmailVerificationComponent() {
    const handleButtonClick = async (e) => {
        const result = await getVerificationEmailCall()
        console.log("result ", result)
        if(result){

            toast("You've received verification email ;)")

        }

    }
    return (
        <div>
            <button className="bg-blue-500 p-2 rounded-l mt-10 ml-10 text-white" onClick={handleButtonClick}>
                Get verification mail 
            </button>
        <ToastContainer />

        </div>
    )
}

export default SendEmailVerificationComponent

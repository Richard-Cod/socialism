import React from 'react'
import getVerificationEmailCall from '../../utils/getVerificationEmailCall'
import manageJwtToken from '../../utils/manageJwtToken'
import { ToastContainer, toast } from 'react-toastify';
        
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
            <button className="btn btn-lg btn-danger m-4" onClick={handleButtonClick}>
                Get verification mail 
            </button>
        <ToastContainer />

        </div>
    )
}

export default SendEmailVerificationComponent

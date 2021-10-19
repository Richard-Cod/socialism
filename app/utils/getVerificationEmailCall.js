import handleApiCallErrors from './handleApiCallErrors';
import axios from 'axios'
import manageJwtToken from './manageJwtToken';
import Router from 'next/router';

const url = "http://localhost:8080/api/users/verifyEmail/send"
const getVerificationEmailCall = async () => {
    const token = manageJwtToken.getTokenFromLocalStorage()
    const user = manageJwtToken.getUserFromLocalStorage()
    console.log(user)
    if(!token) return
    
    const config = {
    headers: { 
        "token" : token, 
    },
    };

    try {
        const response = await axios.post(url , {} , config)
        console.log("response " , response)
        return response.data
    } catch (error) {
        const callback404 = () => {
            console.log("boujoumboura")
            Router.push("/profile")
        }
        handleApiCallErrors(error , {
            400 : ["Mail already verified" , callback404 ]
        })
    }

}

export default getVerificationEmailCall
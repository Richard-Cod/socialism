import handleApiCallErrors from './handleApiCallErrors';
import axios from 'axios'
import manageJwtToken from './manageJwtToken';

const url = "http://localhost:8080/api/users/verifyEmail/verify"
const getVerificationEmailCall = async (code) => {
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
        
        const response = await axios.post(url , {code} , config)
        console.log("response " , response)
        manageJwtToken.saveTokenToLocalStorage(response.data.token)
        return response.data
    } catch (error) {
        const callback404 = (message) => {
        }
        handleApiCallErrors(error)
    }

}

export default getVerificationEmailCall
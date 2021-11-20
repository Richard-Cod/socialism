import handleApiCallErrors from '../../utils/handleApiCallErrors';
import axios from 'axios'
import manageJwtToken from '../../utils/manageJwtToken';
import Router from 'next/router';

const url = "http://localhost:8080/api/users/verifyEmail/send"
const getVerificationEmailCall = async () => {
    try {
        const response = await axios.post(url)
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



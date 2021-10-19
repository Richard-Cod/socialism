import axios from 'axios'
import handleApiCallErrors from './handleApiCallErrors'



const userLoginCall = async (user) => {
    try {
        const api = "http://localhost:8080/api/users/create"
    const response = await axios.post(api , user)
    return response.data
        
    }  catch (error) {
        handleApiCallErrors(error)
    }
}
export default userLoginCall
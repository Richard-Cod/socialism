import axios from 'axios'
import handleApiCallErrors from './handleApiCallErrors'



const userLoginCall = async (data) => {
    try {
        const api = "http://localhost:8080/api/users/create"
    const response = await axios.post(api , {
        email : data.email,
        password : data.password,
    })
    return response.data
        
    }  catch (error) {
        handleApiCallErrors(error)
    }
}
export default userLoginCall
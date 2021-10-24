import axios from 'axios'
import { toast } from 'react-toastify'
import handleApiCallErrors from '../../utils/handleApiCallErrors'



const userLoginCall = async (user) => {
    try {
        const api = "http://localhost:8080/api/users/create"
    const response = await axios.post(api , user)
    return response.data
        
    }  catch (error) {
        const f = (response) => {
            if(response.data.message === "User already exist"){
                toast("This account already exist")
            }
        }
        handleApiCallErrors(error , {400 : ["" , f ] , handleShowingError : true} )
    }
}
export default userLoginCall
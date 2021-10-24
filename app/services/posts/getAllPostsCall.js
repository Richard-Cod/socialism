import axios from 'axios'
import handleApiCallErrors from '../../utils/handleApiCallErrors'
import manageJwtToken from '../../utils/manageJwtToken'



const getAllPostsCall = async () => {
    
    try {
        const config = {
            headers: { 
                "token" : manageJwtToken.getTokenFromLocalStorage(), 
            },
        };

        const api = "http://localhost:8080/api/posts/"
        const response = await axios.get(api , config)
        return response.data
        
    }  catch (error) {
        handleApiCallErrors(error)
    }
}
export default getAllPostsCall
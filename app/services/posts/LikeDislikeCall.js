import axios from 'axios'
import handleApiCallErrors from '../../utils/handleApiCallErrors'
import manageJwtToken from '../../utils/manageJwtToken'



const likeDislikePostCall = async (data , type) => {

    if(type !== "like" && type !== "dislike") return 

    console.log(data)

    try {
        const config = {
            headers: { 
                "token" : manageJwtToken.getTokenFromLocalStorage(), 
            },
        };

        const api = "http://localhost:8080/api/posts/"+type
        const response = await axios.put(api , data , config)
        return response.data
        
    }  catch (error) {
        handleApiCallErrors(error)
    }
}
export default likeDislikePostCall
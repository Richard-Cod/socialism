import axios from 'axios'
import handleApiCallErrors from '../../utils/handleApiCallErrors'
import manageJwtToken from '../../utils/manageJwtToken'



const createPostCall = async (data) => {
    console.log(data)



    
    const formData = new FormData();
        formData.append("title", data.title);
        formData.append("content", data.content);

        for (const key of Object.keys(data.files)) {
            formData.append('files', data.files[key])
        }

    try {
        const config = {
            headers: { 
                "token" : manageJwtToken.getTokenFromLocalStorage(), 
            },
        };

        const api = "http://localhost:8080/api/posts/create"
        const response = await axios.post(api , formData , config)
        return response.data
        
    }  catch (error) {
        handleApiCallErrors(error)
    }
}
export default createPostCall
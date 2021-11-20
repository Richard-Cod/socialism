import axios from 'axios'
import handleApiCallErrors from '../../utils/handleApiCallErrors'
import manageJwtToken from '../../utils/manageJwtToken'



const updateCovOrProfilPic = async (type , file , filename) => {
    
    try {
    const formData = new FormData();

        formData.append("file", file);
      formData.append("fileName", fileName);


        const res = await axios.post(
          "http://localhost:8080/api/users/upload/"+type,
          formData 
        );
        manageJwtToken.saveTokenToLocalStorage(res.data.token)
        location.reload()
      } catch (e) {
        handleApiCallErrors(e)
      }

}
export default updateCovOrProfilPic




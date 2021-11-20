import makeRequest from '../makeRequest';

// manageJwtToken.saveTokenToLocalStorage(response.data.token)
export default async (code) => {
    return  makeRequest("/users/verifyEmail/verify" , "post" , {code})
 }




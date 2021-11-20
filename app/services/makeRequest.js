import ApiCallHelper from '../utils/ApiCallHelper'
import client from '../utils/client'
import handleApiCallErrors from '../utils/handleApiCallErrors'





const makeRequest = async (apiCallHelper) => {


    try {
            // const [requestType , url , data] = apiCallHelper.requestType , apiCallHelper.url , apiCallHelper.data

            const requestType = apiCallHelper.requestType
            const url = apiCallHelper.url
            const data = apiCallHelper.data

            console.log({requestType , url , data})
            const response = await client[requestType](url , data)
            return response.data
    } catch (error) {
        handleApiCallErrors(error)
    }
}


export default makeRequest

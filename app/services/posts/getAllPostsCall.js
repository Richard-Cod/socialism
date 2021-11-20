import ApiCallHelper from '../../utils/ApiCallHelper'
import makeRequest from '../makeRequest'
export default async () =>  {
    const apiCallHelper = new ApiCallHelper("/posts/")
    await makeRequest(apiCallHelper)
}
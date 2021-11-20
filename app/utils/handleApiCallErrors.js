import { toast } from 'react-toastify';


const defaultErrorsData = {
    401 : "You're not allowed to access ressource",
    400 : "An error occured",
    404 : "Ressource does not exist"

}

const handleApiCallErrors = (error , customErrorsData = {}) => {
    let message;
    // Error 😨
    if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error.response.data);
        console.log(error.response.status);

        const status = error.response.status

        if (typeof customErrorsData[status] == "object"){
            message =  customErrorsData[status][0]  || defaultErrorsData[status]

            customErrorsData[status][1](error.response)
        }else{
            message = customErrorsData[status] || defaultErrorsData[status]
        }

       !customErrorsData.handleShowingError && toast(message)
    } else if (error.request) {
        message = "Cannot access server ;("
        toast(message)
    } else {
        // Something happened in setting up the request and triggered an Error
        console.log('Error', error.message);
    }
    console.log(error)
}

export default handleApiCallErrors
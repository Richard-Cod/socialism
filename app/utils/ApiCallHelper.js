class ApiCallHelper{
    constructor(url , requestType = 'get' , data ){
        this.url = url ,
        this.requestType = requestType,
        this.data = data
    }
}


export default ApiCallHelper
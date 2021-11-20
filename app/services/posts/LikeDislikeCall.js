import makeRequest from '../makeRequest'


export default async (data , type) => {
    if(type !== "like" && type !== "dislike") return 
    return makeRequest("/posts/"+type , "put" , data)
}
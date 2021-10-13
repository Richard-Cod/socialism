import Jwt from "jsonwebtoken"

const key = "userToken" 

const manageJwtToken = {
    saveTokenToLocalStorage(token){
        localStorage.setItem(key, token)
    } ,
    getTokenFromLocalStorage(){
        return localStorage.getItem(key)
    } ,
    getUserFromLocalStorage(){
        const token = localStorage.getItem(key)
        const decoded = Jwt.decode(token)
        return decoded?.data
    }  
}

export default  manageJwtToken 
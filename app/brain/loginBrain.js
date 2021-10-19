import manageJwtToken from "../utils/manageJwtToken"
import userLoginCall from "../utils/userLoginCall"

import { toast } from 'react-toastify';
import Joi from 'joi'
import tlds from '/node_modules/@sideway/address/lib/tlds.js'

import Router from "next/router";



const loginBrain = {
    async makeLogin (email , password) {
        const result = await userLoginCall({email , password})
        if(!result) return

        toast("Successfully logged in")
        console.log(result)
        manageJwtToken.saveTokenToLocalStorage(result.token)
        redirectUserAccordingToAuthStatus(result.user)
        
    },
     validateInput(data) {
        const loginInputSchema = Joi.object({
            email: Joi.string().email({
                tlds: {
                    allow: tlds
                }
            })
                .required(),
            password: Joi.string().min(3)
                .required(),
        })
        const { error } = loginInputSchema.validate(data);
        return error
    },
    redirectUserAccordingToAuthStatus(user){
        // console.log("user")
        // console.log(user)

        if(!user?.verifiedEmail){
            console.log("User mail is not verified")
            return
        }
        if (user){
            Router.push("/profile")
            // console.log(user)
            console.log("user mail is verified")
            return
        }
    },
    async handleFormSubmit (e , email , password , setIsLoginIn) {
        
        e.preventDefault()
        setIsLoginIn(true)
    
       const error = loginBrain.validateInput({email, password})
       if(error) {
        setIsLoginIn(false)
        const message = error.details[0].message
        toast(message)
        return
       }

       await loginBrain.makeLogin(email , password)
       setIsLoginIn(false)

    }

}

export default loginBrain
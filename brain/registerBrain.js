import Joi from "joi"
import manageJwtToken from "../utils/manageJwtToken"
import userRegisterCall from "../utils/userRegisterCall"
import tlds from '/node_modules/@sideway/address/lib/tlds.js'
import { toast } from 'react-toastify';
import Router from "next/router";
import { KRoutes } from "../constants/KRoutes";

const registerBrain = {

    async makeRegister (email , password ) {
        console.log("inscription")
    
        const result = await userRegisterCall({email , password})
        if(result){
            console.log("result exists")
            console.log(result)
            toast("Successfult registered")
            manageJwtToken.saveTokenToLocalStorage(result.token)
            Router.push(KRoutes.verifyemailSend)
        }
    },
    validateInput (data) {
        const RegisterInputSchema = Joi.object({
            email: Joi.string().email({
                tlds: {
                    allow: tlds
                }
            })
                .required(),
            password: Joi.string().min(3)
                .required(),
        })
        const { error } = RegisterInputSchema.validate(data);
        return error
    },

    async handleFormSubmit (e , email , password , setIsRegisterIn ) {
        e.preventDefault()
        setIsRegisterIn(true)
    
       const error = registerBrain.validateInput({email, password})
       if(error) {
        setIsRegisterIn(false)
        const message = error.details[0].message
        toast(message)
        return
       }
    
       await registerBrain.makeRegister(email , password)
       setIsRegisterIn(false)
    }

}

export default registerBrain
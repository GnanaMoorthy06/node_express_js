import { responseHandler } from "../commonFunction/responsehandler.js"
import { loginService } from "../service/loginService.js"

export const loginController = async(req , res , next)=>{
    try {
    const {email , password } = req.body
    if (!email || !password) {
        res.status(400)
        throw new Error('Please fill all the fields')
    }
    //fetch user
    const user = await loginService(email,password)
    if(!user){
        res.status(400)
        throw new Error('Invalid credentials')
    }
    responseHandler(res,200,'login successfully',user)
    } catch (error) {
        next(error)
    }
}
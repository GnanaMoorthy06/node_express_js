
import { responseHandler } from "../commonFunction/responsehandler.js"
import { createUserService, deleteUserByIdService, getAllUsersService, getUsersbyIdService, updateUserService } from "../service/userService.js"

export const getAllUsersController = async(req , res , next)=>{

    try {
    const getAllUsers = await getAllUsersService()
    responseHandler(res,200,'users fetched successfully',getAllUsers)
    } catch (error) {
        next(error)
    }

}

export const getUsersbyIdController = async(req , res , next)=>{

    try {
    const getUser = await getUsersbyIdService(req.params.id)
    if(!getUser){
        res.status(400)
        throw new Error()
    }
    responseHandler(res,200,'user fetched successfully',getUser)
    } catch (error) {
        next(error)
    }

}

export const createUserController = async(req , res , next)=>{

    try {
    const {name , email , password } = req.body
    const createUser = await createUserService(name , email , password)
    responseHandler(res,200,'users created successfully',createUser)
    } catch (error) {
        next(error)
    }

}

export const updateUserController = async(req , res , next)=>{

    try {
    const {name , email } = req.body
    const updateUser = await updateUserService(req.params.id ,name , email )
    responseHandler(res,200,'user updated successfully',updateUser)
    } catch (error) {
        next(error)
    }

}

export const deleteUserByIdController = async(req , res , next)=>{

    try {
    const deleteUser = await deleteUserByIdService(req.params.id)
    responseHandler(res,200,'user deleted successfully',deleteUser)
    } catch (error) {
        next(error)
    }

}
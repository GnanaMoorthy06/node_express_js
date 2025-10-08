import express from 'express'
import { createUserController, deleteUserByIdController, getAllUsersController,
     getUsersbyIdController, updateUserController } from '../controller/usercontroller.js'

const routes = express.Router()
routes.route(`/user`).get(getAllUsersController).post(createUserController)
routes.route(`/user/:id`).get(getUsersbyIdController).put(updateUserController).delete(deleteUserByIdController)

export default routes
import express from 'express'
import { createUserController, deleteUserByIdController, getAllUsersController,
     getUsersbyIdController, updateUserController } from '../controller/usercontroller.js'
import { loginController } from '../controller/loginController.js'

const routes = express.Router()
routes.route(`/user`).get(getAllUsersController).post(createUserController)
routes.route(`/user/:id`).get(getUsersbyIdController).put(updateUserController).delete(deleteUserByIdController)

routes.route('/login').post(loginController)

export default routes
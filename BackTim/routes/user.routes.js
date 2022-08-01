import express from 'express'
import { getAllUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/usercontroller.js'
import { login,logoutUser } from '../controllers/login.js'
const routerUser = express.Router()

routerUser.get('/', getAllUsers)
routerUser.get('/:id', getUser)
routerUser.post('/', createUser)
routerUser.put('/:id', updateUser)
routerUser.delete('/:id', deleteUser)
routerUser.post('/login', login)
routerUser.delete('/logoutUser', logoutUser)

export default routerUser
import express from "express"

import { deleteUser, getAllUSers, updateUser } from "../controllers/users"
import { isAuthenticated ,isOwner} from "../middlewares"

export default (router:express.Router) =>{
    router.get('/users',isAuthenticated ,getAllUSers)
    router.delete('/users/:id',isAuthenticated ,isOwner,deleteUser)
    router.patch('/users/:id',isAuthenticated,isOwner,updateUser)
}
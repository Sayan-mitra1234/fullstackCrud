import express from "express"
import { createUser, deleteUser, getUser, updateUser } from "../controller/userController.js"

const userRoute = express.Router()

userRoute.post("/create",createUser)
userRoute.get("/getUser",getUser)
userRoute.delete("/deleteuser/:id",deleteUser)
userRoute.put("/updateuser/:id",updateUser)

export default userRoute
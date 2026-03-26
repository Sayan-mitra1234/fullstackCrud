import express from "express"
import { createUser, deleteUser, getUser } from "../controller/userController.js"

const userRoute = express.Router()

userRoute.post("/create",createUser)
userRoute.get("/getUser",getUser)
userRoute.delete("/deleteuser/:id",deleteUser)

export default userRoute
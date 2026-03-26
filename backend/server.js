import express from "express"
import dotenv from "dotenv/config"
import dbConnect from "./config/db.js"
import userRoute from "./routes/userRoute.js"
import cors from "cors"

const app = express()

app.use(express.json())

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

dbConnect()

const port = process.env.port

app.use("/",userRoute)

app.listen(port,()=>{
    console.log(`server running at port :${port}`)
})
import mongoose from "mongoose";
import dotenv from "dotenv/config"


export default async function dbConnect() {
    try {
        await mongoose.connect(process.env.URL)
        console.log("database connected successfully")
    } catch (error) {
        console.log(error.message)
    }
}
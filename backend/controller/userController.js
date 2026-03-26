import express from "express"
import userSchema from "../models/noteModel.js"

export const createUser = async(req,res)=>{
    try {
        const {name,email,phone} = req.body

        const user = await userSchema.create({
            name,email,phone
        })

        return res.status(200).json({
            success:true,
            message:"user created successfully",
            data:user
        })

    } catch (error) {
        return res.status(401).json({
            success:false,
            message:error.message
        })
    }
}

export const getUser = async(req,res)=>{
    try {
        const user = await userSchema.find()
         return res.status(200).json({
            success:true,
            message:"user fetched successfully",
            data:user
        })
        
    } catch (error) {
          return res.status(401).json({
            success:false,
            message:error.message
        })
    }
}

export const deleteUser = async(req,res)=>{
    try {
        const {id} = req.params
        const user = await userSchema.findByIdAndDelete(id)

        return res.status(200).json({
            success:true,
            message:"user deleted successfully"
        })
    } catch (error) {
          return res.status(401).json({
            success:false,
            message:error.message
        })
    }
}
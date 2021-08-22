const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Contact = require ("../Models/Contact")



router.post("/Contact",(req,res)=>{
    const {name,email,location,message,phone}=req.body
    console.log(req.body)

    if ( !name || !location || !email || !message || !phone) 
    {
            return res
    }
})
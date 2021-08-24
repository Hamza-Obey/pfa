const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Contact = require ("../Models/Contact")



router.post("/Contact",(req,res)=>{
    const {name,email,location,message,phone}=req.body
    console.log(req.body)

    if ( !name || !location || !email || !message || !phone) 
    {
            return res.status(422).json({error: "please add all fields required"})
    }
    const Contact
})
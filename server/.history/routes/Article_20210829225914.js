const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Contact = require ("../Models/Article")

router.post("/Article",(req,res)=>{
    
    const {title,email,location,message,phone}=req.body
    console.log(req.body)

    if ( !title || !desc || !img || !message || !phone) 
    {
            return res.status(422).json({error: "please add all fields required"})
    }
    const contact = new Contact ({
        name: name ,
        email: email ,
        location : location ,
        phone : phone ,
        message: message 

    })
    contact.save()
    .then (contact=>{
        res.json({message :"message bien envoyé"})
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports =router
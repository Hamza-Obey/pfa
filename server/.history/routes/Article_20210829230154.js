const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Contact = require ("../Models/Article")

router.post("/Article",(req,res)=>{
    
    const {title,desc,img}=req.body
    console.log(req.body)

    if ( !title || !desc || !img )
            return res.status(422).json({error: "please add all fields required"})
    }
    cons article = new Article ({
        title:title,
        desc:desc,
        img:img
        

    })
    article.save()
    .then (contact=>{
        res.json({message :"message bien envoyé"})
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports =router
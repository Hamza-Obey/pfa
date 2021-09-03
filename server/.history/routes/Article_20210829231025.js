const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Contact = require ("../Models/Article")



// creating an article
router.post("/Article",(req,res)=>{
    
    const {title,desc,img}=req.body
    console.log(req.body)

    if ( !title || !desc || !img ) {
            return res.status(422).json({error: "please add all fields required"})
    }
    const article = new Article ({
        title:title,
        desc:desc,
        img:img
        

    })
    article.save()
    .then (article=>{
        res.status(200).json("article publié")
    })
    .catch(err=>{
        res.status(500).json("article non publié")
    })
})


// deleting an article
module.exports =router
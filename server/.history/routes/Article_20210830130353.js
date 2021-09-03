const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Contact = require ("../Models/Article")



// creating an article
router.post("/",(req,res)=>{
    
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


// updating an article

router.put ("/:id", async(req,res)=>{

    try{
            const article = await Article.findById(req.params.id);

                await article.updateOne({$set:req.body})
                res.status(200).json("the post has been updated")

           

        }catch(err){
            res.status(500).json(err)
        }

})


// delete article

router.delete("/:id",async (req,res)=>{

    try{
            const article =await Article.findById(req.params.id);

           
                await article.deleteOne()
                res.status(200).json("the post has been deleted")

            

        }catch(err){
            res.status(500).json(err)
        }

})

router.get
module.exports =router
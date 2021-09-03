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

router.put ("/:id",async (req,res)=>{

    try{
            const artcile =await  Article.findById(req.params.id);

            if (post.userId === req.body.userId){

                await post.updateOne({$set:req.body})
                res.status(200).json("the post has been updated")

            }else{
                res.status(403).json("you can only update your post")
            }

        }catch(err){
            res.status(500).json(err)
        }

})
module.exports =router
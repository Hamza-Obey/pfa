const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Contact = require ("../Models/Article")
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/articles');
  },
  filename: function (req, file, cb) {
    cb(null, req.body.nom + '-' + file.originalname);
    
  }
});

//config
const upload = multer({
    storage: storage,
  })
  
  const multipleUpload = upload.fields([{ name: "image" }, { name: "file" }])



// creating an article
router.post("/",multipleUpload,(req,res)=>{
    
    const {title,desc,img,pdf}=req.body
    console.log(req.body)

    if ( !title || !desc  ) {
            return res.status(422).json({error: "please add all fields required"})
    }
    const article = new Article ({
        title:title,
        desc:desc,
        img:req.
        pdf:pdf
        

    })
    article.save()
    .then (article=>{
        res.status(200).json(article)
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

router.get('/Articles',(req,res)=> {
    
    Article.find()
    .then(Article=>{
        res.json(Article)
    
    }).then((err)=>{

        console.log(err)
    })
    


})
module.exports =router
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const User = require("../Models/user")



router.post('/Signup' ,(req,res)=>{
    //console.log(req.body.name)  --> testa3malha bish tjareb dima bil poste man est que 9a3ed ye5ou fil ism illi taatihoulou ou non
    const {first_name,last_name,occupation,gender,email,password,phone} = req.body
    console.log(req.body)
    if (!last_name || !email || !password || !first_name || !occupation || !gender  || !phone)
    {
        return res.status(422).json({error : "please add all fields"})
    }
    //res.json({message:"successfully posted"}) --> njarbou beha fil postman 
    User.findOne({email : email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error : "user already exists with this email"})
        }
        bcrypt.hash(password , 15)
        .then(hashedpassword=>{
            const user = new User({
                first_name : firstname ,
                lastname:lastname,
                email : email ,
                gender:gender,
                occupation:occupation,
                phone : phone,
                password : hashedpassword ,
            })
            //user.save hiyya illi t5azen bil data base
            user.save()
            .then(user=>{
                
               
                res.json({message : "saved successfully"})
            })
            .catch(err=>{
                console.log(err)
            })

        })
        
    })
    .catch(err=>{
        console.log(err)
    })
    
})

module.exports = router
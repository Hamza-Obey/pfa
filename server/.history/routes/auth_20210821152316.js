const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const User = require("../Models/user")
const { JWT_SECRET } = require ("../Keys.js")
const jwt = require('jsonwebtoken')



router.post('/Signup' ,(req,res)=>{
    //console.log(req.body.name)  --> testa3malha bish tjareb dima bil poste man est que 9a3ed ye5ou fil ism illi taatihoulou ou non
    const {first_name,last_name,occupation,gender,email,password,phone,birthday,speciality} = req.body
    console.log(req.body)
    if (!last_name || !email || !password || !first_name || !occupation || !gender || !birthday  || !phone)
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
                first_name : first_name ,
                last_name:last_name,
                email : email ,
                gender:gender,
                occupation:occupation,
                phone : phone,
                password : hashedpassword ,
                birthday:birthday,
                speciality :speciality
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



router.post('/Signin' , (req,res)=>{
    const {email,password} = req.body
    if (!email || !password)
    {
        return res.status(422).json({error : "please add all fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if ( !savedUser )
        {
            return res.status(422).json({error : "Invalide email "})
        }
        bcrypt.compare(password,savedUser.password)
        .then((domatch)=>{
            if (domatch)
            {
                //return res.json({message : "Successfully signin"})
                const token = jwt.sign({_id:savedUser._id} , JWT_SECRET)
                const {_id,name,email} = savedUser
                res.json({token,user:{_id,name,email}})
            }
            else
            {
                return res.status(422).json({error : "Invalide password"})
            }

        })
        .catch(err =>{
            console.log(err)
        })
    .catch(err =>{
        console.log(err)
    })
    })
})

router.post('/SignupPatient' ,(req,res)=>{
    //console.log(req.body.name)  --> testa3malha bish tjareb dima bil poste man est que 9a3ed ye5ou fil ism illi taatihoulou ou non
    const {first_name,last_name,occupation,gender,email,phone,birthday,doctor,cin,state} = req.body
    console.log(req.body)
    if (!last_name || !email  || !first_name || !occupation || !gender || !birthday  || !phone || !doctor || !cin || !state )
    {
        return res.status(422).json({error : "please add all fields"})
    }
    //res.json({message:"successfully posted"}) --> njarbou beha fil postman 
    .findOne({cin : cin})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error : "user already exists with this email"})
        }
        
            const user = new User({
                first_name : first_name ,
                last_name:last_name,
                email : email ,
                gender:gender,
                occupation:occupation,
                phone : phone,
                cin : cin,
                birthday:birthday,
                doctor : doctor,
                state : state 
                
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
    .catch(err=>{
        console.log(err)
    })
    
})




module.exports = router
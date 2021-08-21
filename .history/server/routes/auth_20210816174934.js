const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const User = require("../Models/user")



router.post('/Signup' ,(req,res)=>{
    //console.log(req.body.name)  --> testa3malha bish tjareb dima bil poste man est que 9a3ed ye5ou fil ism illi taatihoulou ou non
    const {first_name,last_name,occupation,speciality,gender,email,password,birthday,phone} = req.body
    console.log(req.body)
    if (!last_name || !email || !password || !first_name)
    {
        return res.status(422).json({error : "please add all fields"})
    }
    //res.json({message:"successfully posted"}) --> njarbou beha fil postman 
    User.findOne({email : email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error : "user alredy exists with this mail"})
        }
        bcrypt.hash(password , 15)
        .then(hashedpassword=>{
            const user = new User({
                name : name ,
                email : email ,
                password : hashedpassword ,
            })
            //user.save hiyya illi t5azen bil data base
            user.save()
            .then(user=>{
                let mailoptions ={
                    from : "sema.kor88@gmail.com" ,
                    to:user.email,
                    subject:"signup success" ,
                    text:"Welcome to insta"
                }
                transporter.sendMail(mailoptions, function (error, info) {
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
    
                    }
                  });
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
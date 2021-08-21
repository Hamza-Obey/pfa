const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const User = require("../Models/user")
const Patient = require ("../Models/Patient")

const requireLoginUser = require("../MiddleWare/RequireLoginUser")



router.get('/Personal',requireLoginUser,(req,res)=> {
    
    User.find()
    .then(resultat=>{
        res.json(resultat)
    
    }).then((err)=>{

        console.log(err)
    })
    


})

router.get('/Patients',requireLoginUser,(req,res)=>{
    Patient.find({doctor:req.user._id})
    .
    
    .then(resultat=>{
        res.json(resultat)
    })
    .then ((err)=>{
        console.log(err)
    })
})

















module.exports = router
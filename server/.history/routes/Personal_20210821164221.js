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
    const data = []
    Patient.find({doctor:req.user._id})
    .populate("doctor",'_id first_name last_name')
    
    .then(result=>{
        for (let i = 0; i < result.length; i++) {
            data.push({ id: result[i]._id, first_name: result[i].first_name, email: result[i].email, cin: result[i].cin, phone: result[i].phone, state: result[i].state, birhda: result.client[i].age })
        }
        res.json(data)
    })
    .then ((err)=>{
        console.log(err)
    })
})

















module.exports = router
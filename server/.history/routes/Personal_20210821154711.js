const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const User = require("../Models/user")

const requireLoginUser = require("../MiddleWare/RequireLoginUser")



router.get('/Personal',re,(req,res)=> {
    User.find()
    .then(resultat=>{
        res.json(resultat)
    
    }).then((err)=>{

        console.log(err)
    })
    


})

















module.exports = router
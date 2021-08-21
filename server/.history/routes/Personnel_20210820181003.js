const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const User = require("../Models/user")



router.get('/',(req,res)=> {
    User.find()
    .then(resultat=>{
        res.json(resultat)
    
    }).then((err=>{

    })
    


})
















module.exports = router
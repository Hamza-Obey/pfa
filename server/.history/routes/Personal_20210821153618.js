const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const User = require("../Models/user")
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../Keys')
const mongoose = require('mongoose')
const Employee = require("../models/user/employe")

module.exports = (req,res,next) =>{
    const {authorization} = req.headers
    //authorization === Bearer sfsdfdsffdsf --> sfsdfdsffdsf hedha houwa il token illi l9ineh fil postman
    if (!authorization)
    {
        return res.status(401).json({error:"you must be logged in 1"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err)
        {
            return res.status(401).json({error:"you must be logged in"})
        }

        const {_id} = payload 
        Employee.findById(_id).then(userdata=>{
            req.employee = userdata
            next()
        })
    })

}



router.get('/Personal',(req,res)=> {
    User.find()
    .then(resultat=>{
        res.json(resultat)
    
    }).then((err)=>{

        console.log(err)
    })
    


})

















module.exports = router
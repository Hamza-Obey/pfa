const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')
const cors = require('cors')
const port = process.env.PORT || 3001 ;
const morgan = require('morgan')




mongoose.connect(MONGOURI, {
    useNewUrlParser : true ,
    useUnifiedTopology: true
})
mongoose.connection.on('connected' ,()=>{
    console.log("connected to mongo  !!!")
})


mongoose.connection.on('Error' ,(err)=>{
    console.log("Error connecting" , err)
})
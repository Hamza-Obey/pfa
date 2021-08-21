const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')
const cors = require('cors')
const port = process.env.PORT || 3001 ;
const morgan = require('morgan')

const mongoURI = mongodb+srv://dbuser:<password>@userdb.l9axc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


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



app.listen(port ,() =>{
    console.log("server is running on ",port)
})
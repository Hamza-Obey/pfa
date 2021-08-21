const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const port = process.env.PORT || 3001 ;
const morgan = require('morgan')

const mongoURI = "mongodb+srv://hamzaobey:<password>@cluster0.pajw8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose.connect(mongoURI, {
    useNewUrlParser : true ,
    useUnifiedTopology: true
})
mongoose.connection.on('connected' ,()=>{
    console.log("connected to mongo  !!!")
})


mongoose.connection.on('Error' ,(err)=>{
    console.log("Error connecting" , err)
})

app.use('/auth',require('./routes/auth'))


app.listen(port ,() =>{
    console.log("server is running on ",port)
})


const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const port = process.env.PORT || 3002 ;
const morgan = require('morgan');


const mongoURI = "mongodb+srv://hamzaobey:iP0lOUKV7wxIfuaF@cluster0.pajw8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


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

app.use(express.json());

app.use(cors())

app.use('/auth',require('./routes/auth'))

app.use('/Personal',require('./routes/Personal'))

app.use ('/Contact',require('./routes/Contact'))

app.use ("/Article",require("./routes/Article"))



app.listen(port ,() =>{
    console.log("server is running on ",port)
})





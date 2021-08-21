const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },

    birthday:{
        type:String,
        required :true
    },
    
    phone: {
        type: String,
        required: true
    },
    
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    occupation : {
        type: String ,
        required:true
    },
    speciality : {
        type: String ,
        
    },
    pic: {
        type: String,
        default: "https://res.cloudinary.com/cnq/image/upload/v1586197723/noimage_d4ipmd.png"
    } ,
    resetToken: String,
    expireToken: Date,

}, { timestamps: true })


Message = mongoose.model("User", messageSchema)
module.exports = Message
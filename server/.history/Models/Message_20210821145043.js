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

    
    phone: {
        type: String,
        required: true
    },
    
    location: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    message : {
        type: String ,
        required:true
    },
   .cloudinary.com/cnq/image/upload/v1586197723/noimage_d4ipmd.png"
    } ,
    resetToken: String,
    expireToken: Date,

}, { timestamps: true })


Message = mongoose.model("User", messageSchema)
module.exports = Message
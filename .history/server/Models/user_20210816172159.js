const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    birthday :
    {

    }
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
        required:true
    },
    pic: {
        type: String,
        default: "https://res.cloudinary.com/cnq/image/upload/v1586197723/noimage_d4ipmd.png"
    } ,
    resetToken: String,
    expireToken: Date,

}, { timestamps: true })


User = mongoose.model("User", userSchema)
module.exports = Admin
const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const patientSchema = new mongoose.Schema({
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
    doctor: {
        type: ObjectId,
        ref: "Employee"
    },
    pic: {
        type: String,
        default: "https://res.cloudinary.com/cnq/image/upload/v1586197723/noimage_d4ipmd.png"
    } ,
    patient: [{
        type: ObjectId,
        ref: "Patient"
    }],

    resetToken: String,
    expireToken: Date,



}, { timestamps: true })


Patient = mongoose.model("Patient", patientSchema)
module.exports = Patient
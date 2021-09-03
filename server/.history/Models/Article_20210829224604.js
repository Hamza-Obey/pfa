const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const contactSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    
    desc: {
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
    message : {
        type: String ,
        required:true
    } 

}, { timestamps: true })


Contact = mongoose.model("Contact", contactSchema)
module.exports = Contact
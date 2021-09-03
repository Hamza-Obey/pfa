const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    
    desc: {
        type: String,
        required: true
    },
    img : {
        type:String,
        
    }

    
    

}, { timestamps: true })


Article = mongoose.model("Contact", contactSchema)
module.exports = Contact
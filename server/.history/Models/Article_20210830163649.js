const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
import img from "../assets/images/article/jpg"
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
        default:"../assets/images/article.jpg"
        
    }

    
    

}, { timestamps: true })


Article = mongoose.model("Article", articleSchema)
module.exports = Article
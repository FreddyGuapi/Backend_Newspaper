import mongoose from "mongoose";

const newsSchema = mongoose.Schema({
    author:{
        type: String,
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    content: {
        type: String,
        trim: true
    },
    date:{
        type: Date,
        default: Date.now
    } 
})

export default mongoose.model('News',newsSchema )
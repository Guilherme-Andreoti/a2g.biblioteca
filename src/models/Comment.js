import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    text : {
        type: String,
        required: true,
    },
    score : {
        type: Number,
        required: true,
    },    
    book : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Book',
        required: true,
    },
    author : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Author',
        required: true,
    },
    reviewed : {
        type: Boolean,
        default: false,
    },    
})

export default mongoose.model('Comment', Schema);
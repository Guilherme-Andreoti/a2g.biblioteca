import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    code : {
        type: String,
        required: true,
    },
    name : {
        type: String,
        required: true,
    },
    gender : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Gender',
        required: true,
    },
    editor : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Editor',
        required: false,
    },
    author : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Author',
        required: true,
    },
    launch_year : {
        type: Number,
        required: false,
    },
    version : {
        type: String,
        required: false,
    },
    stock : {
        type: Number,
        required: true,
    }
})

export default mongoose.model('Book', Schema);
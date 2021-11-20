import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    descritpion : {
        type: String,
        required: false,
    }
})

export default mongoose.model('Author', Schema);
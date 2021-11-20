import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    }
})

export default mongoose.model('Gender', Schema);
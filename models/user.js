import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5
    },
    phone: {
        type: String,
        required: true,
        minlength: 10
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('User', userSchema)
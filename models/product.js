// import { text } from "express"
import mongoose, { Schema } from "mongoose"

const productSchema = new Schema({
    title: {
        type: String,
        minLength: 5,
        required: true,
        index: true
    },
    image: {
        type: String,
        required: true
    },
    priceNew: {
        type: Number,
        required: true
    },
    priceOld: {
        type: Number,
    },
    sale: {
        type: Number,
    },
    desc: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
    },
    slug: {
        type: String,
        lowercase: true,
        index: true
    },
}, { timestamps: true })
productSchema.index({ '$**': 'text' });

export default mongoose.model('Product', productSchema)
import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 5
  }
}, { timestamps: true })

export default mongoose.model('Category', categorySchema)
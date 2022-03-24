import mongoose, { Schema } from "mongoose";
import { createHmac } from "crypto"

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    email: {
        type: String,
        required: true
    },
    // phone: {
    //     type: String,
    //     required: true,
    //     minlength: 10
    // },
    // age: {
    //     type: Number,
    //     required: true
    // },
    // address: {
    //     type: String,
    //     required: true
    // },
    salt: {
        type: String
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

userSchema.methods = {
    authenticate(password){
        return this.password == this.encryPassword(password)
    },
    encryPassword(password){
        if(!password) return
        try {
            return createHmac('sha256', 'abc').update(password).digest('hex')
        } catch (error) {
            console.log(error)
        }
    }
}

// trước khi execute .save() thì chạy middleware sau.
userSchema.pre("save", function(next){
    this.password = this.encryPassword(this.password)
    next()
})
export default mongoose.model('User', userSchema)
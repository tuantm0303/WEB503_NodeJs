import User from "../models/user"
//b1: khoi tao model 
// const User = mongoose.model('User', { 
//     name: String,
//     phone: String,
//     age: Number,
//     address: String
// })

//API list user
export const list = async (req, res) => {
    try {
        const user = await User.find({}).exec()
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message: "Không có người dùng nào"
        })
    }
}

//API list 1 user
export const read = async (req, res) => {
    try {
        const product = await User.findOne({ _id: req.params.id }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Không có người dùng"
        })
    }
}

//API create user
export const create = async (req, res) => {
    try {
        const user = await new User(req.body).save()
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được người dùng"
        })
    }
}

//API remove user
export const remove = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message: "Không xóa được!"
        })
    }
}

//API update user
export const update = async (req, res) => {
    const condition = { _id: req.params.id }
    const doc = req.body
    const option = { new: true }
    try {
        const user = await User.findOneAndUpdate(condition, doc, option)
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message: "Không sửa được!"
        })
    }
}
import mongoose from "mongoose"
//b1: khoi tao model 
const Post = mongoose.model('Post', { name: String })

//API list post
export const list = async (req, res) => {
    try {
        const post = await Post.find({}).exec()
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message: "Không có sản phẩm nào"
        })
    }
}

//API list 1 post
export const read = async (req, res) => {
    try {
        const product = await Post.findOne({ _id: req.params.id }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Không có sản phẩm"
        })
    }
}

//API create post
export const create = async (req, res) => {
    try {
        const post = await new Post(req.body).save()
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm"
        })
    }
}

//API remove post
export const remove = async (req, res) => {
    try {
        const post = await Post.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message: "Không xóa được!"
        })
    }
}

//API update post
export const update = async (req, res) => {
    const condition = { id: req.params.id }
    const update = req.body
    try {
        const post = await Post.findOneAndUpdate(condition, update).exec()
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message: "Không sửa được!"
        })
    }
}
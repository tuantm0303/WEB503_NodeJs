import Post from "../models/post"

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
    const condition = { _id: req.params.id }
    const doc = req.body
    const option = { new: true }
    try {
        const post = await Post.findOneAndUpdate(condition, doc, option)
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message: "Không sửa được!"
        })
    }
}
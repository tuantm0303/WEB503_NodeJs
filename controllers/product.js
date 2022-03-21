import slugify from "slugify"
import Product from "../models/product"

//API list product
export const list = async (req, res) => {
    try {
        const products = await Product.find({}).exec()
        res.json(products)
    } catch (error) {
        res.status(400).json({
            message: "Không có sản phẩm nào"
        })
    }
}

//API list 1 product
export const read = async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Không có sản phẩm"
        })
    }
}

//API create product
export const create = async (req, res) => {
    req.body.slug = slugify(req.body.name)
    try {
        const product = await new Product(req.body).save()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm"
        })
    }
}

//API remove product
export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Không xóa được!"
        })
    }
}

//API update product
export const update = async (req, res) => {
    req.body.slug = slugify(req.body.name)
    const condition = { _id: req.params.id }
    const doc = req.body
    const option = { new: true }
    try {
        const product = await Product.findOneAndUpdate(condition, doc, option)
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Không sửa được!"
        })
    }
}
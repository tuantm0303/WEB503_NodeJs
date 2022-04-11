import slugify from "slugify"
import Product from "../models/product"
import Category from "../models/category"

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
    const { slug } = req.params
    try {
        const product = await Product.findOne({ slug }).exec()
        res.json(product)
    } catch (error) {
        return res.status(400).json({
            message: "Không có sản phẩm",
        })
    }
}

//API create product
export const create = async (req, res) => {
    req.body.slug = slugify(req.body.title)
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
    req.body.slug = slugify(req.body.title)
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

export const search = async (req, res) => {
    const key = req.query.q
    try {
        const result = await Product.find({ $text: { $search: key } })
        res.json(result)
    } catch (error) {

    }
}

// API Pagination
export const paginateResults = async (req, res) => {
    const PageSize = 4;
    var page = req.query.page;
    if (page) {
        page = parseInt(page);
        const skip = (page - 1) * PageSize;
        try {
            const paginate = await Product.find({}).skip(skip).limit(PageSize)
            res.json(paginate)
        } catch (error) {
            res.status(400).json(error)
        }
    }
}

// lọc
export const sort = async (req, res) => {
    const object = {
        min: parseInt(req.query.min),
        max: parseInt(req.query.max),
    }
    try {
        const filter = await Product.find({ priceNew: { $gte: object.min, $lte: object.max } })
        res.json(filter)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const productItem = async (req, res) => {
    const query = req.params._expand
    try {
        const item = await Product.find({ categoryId })
        const category = await Category.findById(query)
        res.json({
            item,
            category
        })
    } catch (error) {
        res.status(400).json(error)
    }
}
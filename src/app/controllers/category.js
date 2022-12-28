import Category from "../models/category"
import Product from "../models/product"

//API list category
export const list = async (req, res) => {
  try {
    const category = await Category.find({}).exec()
    res.json(category)
  } catch (error) {
    res.status(400).json({
      message: "Không có danh mục nào"
    })
  }
}

//API list 1 category
export const readProOnCate = async (req, res) => {
  try {
    const categoryId = await Category.findById({ _id: req.params.id }).exec();
    const products = await Product.find({ categoryId }).select("-categoryId").exec();
    res.json({
      categoryId,
      products
    })
  } catch (error) {
    res.status(400).json({
      error: "Không có danh mục"
    })
  }
}

export const read = async (req, res) => {
  try {
    const category = await Category.findOne({ _id: req.params.id }).exec()
    res.json(category);
  } catch (error) {
    res.status(400).json({
      error: "Không có danh mục"
    })
  }
}

//API create category
export const create = async (req, res) => {
  try {
    const category = await new Category(req.body).save()
    res.json(category)
  } catch (error) {
    res.status(400).json({
      message: "Không thêm được danh mục"
    })
  }
}

//API remove category
export const remove = async (req, res) => {
  try {
    const category = await Category.findOneAndDelete({ _id: req.params.id }).exec()
    res.json(category)
  } catch (error) {
    res.status(400).json({
      message: "Không xóa được!"
    })
  }
}

//API update category
export const update = async (req, res) => {
  const condition = { _id: req.params.id }
  const doc = req.body
  const option = { new: true }
  try {
    const category = await Category.findOneAndUpdate(condition, doc, option)
    res.json(category)
  } catch (error) {
    res.status(400).json({
      message: "Không sửa được!"
    })
  }
}
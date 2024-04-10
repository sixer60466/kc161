const { Category, Product } = require('./productSchema')

// 商品列表CRUD操作

// 新增
const createProduct = (productDate) => {
    return Product.create(productDate)
}

// 讀取所有產品
const getAllProducts = async (page = 1, limit = 10) => {
    const skipAmount = (page - 1) * limit
    const products = await Product
        .find()
        .sort({ createAt: -1 })
        .skip(skipAmount)
        .limit(limit)
    const total = await Product.countDocuments()
    return {
        totalPages: Math.ceil(total / limit),
        total,
        currentPage: page,
        products,
    }
}

// 讀取所有產品
// const getAllProducts = () => {
//     return Product.find();
// }

// 根據產品分類讀取產品
const getProductByCategoryId = async (categoryId, page = 1, limit = 10) => {
    const skipAmount = (page - 1) * limit
    const products = await Product
        .find({ category: categoryId })
        .sort({ createAt: -1 })
        .skip(skipAmount)
        .limit(limit)
    const total = await Product.countDocuments({ category: categoryId })
    return {
        products,
        total,
        currentPage: page,
        totalPages: Math.ceil(total / limit)
    }
}


// 根據產品分類讀取產品
// const getProductByCategoryId = (categoryId) => {
//     return Product.find({ category: categoryId })
// }

// 根據id讀取該產品
const getProductById = (productId) => {
    return Product.findById(productId)
}

// 更新產品
const updateProduct = (productId, updataDate) => {
    return Product.findByIdAndUpdate(productId, updataDate, { new: true })
}

// 刪除產品
const deleteProduct = (productId) => {
    return Product.findByIdAndDelete(productId)
}

module.exports = { getProductById, createProduct, getAllProducts, getProductByCategoryId, updateProduct, deleteProduct }
const { model } = require('mongoose');
const { Category, Product } = require('./productSchema')

// 商品列表CRUD操作

// 新增
const createProduct = (productDate) => {
    return Product.create(productDate)
}

// 讀取所有產品
const getAllProducts = () => {
    return Product.find();
}

// 根據產品分類讀取產品
const getProductByCategoryId = (categoryId) => {
    return Product.find({ category: categoryId })
}

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
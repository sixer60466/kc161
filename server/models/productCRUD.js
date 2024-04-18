const { Category, Product } = require('./productSchema')

// 商品列表CRUD操作

// 新增
const createProduct = (productDate) => {
    return Product.create(productDate)
}

//讀取該分類所有產品
const getProductsByCategory = async (categoryName) => {
    const category = await Category.findOne({ name: categoryName })
    const products = await Product.find({ category: category._id })
    return products
}

// 讀取所有產品(分類及分頁篩選)

const getProducts = async (categoryId = 'all', page = 1, limit = 10, query = '') => {
    const skipAmount = (page - 1) * limit
    let filter = {}
    if (categoryId !== 'all') {
        filter.category = categoryId
    }
    if (query) {
        filter.$or = [
            { name: new RegExp(query, 'i') },
            { productId: new RegExp(query, 'i') }
        ]
    }
    const products = await Product
        .find(filter)
        .sort({ createAt: -1 })
        .skip(skipAmount)
        .limit(limit)
    const total = await Product.countDocuments(filter)
    return {
        totalPages: Math.ceil(total / limit),
        total,
        currentPage: page,
        products,
    }
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

module.exports = { getProductsByCategory, getProductById, createProduct, getProducts, updateProduct, deleteProduct }
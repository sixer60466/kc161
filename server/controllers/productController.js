const fs = require('fs');
const path = require('path');

const {
    getProductsByCategory,
    getProductById,
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct } = require('../models/productCRUD')

// 新增產品
const productCreate = (req, res) => {
    const productData = {
        ...req.body,
        image: req.file ? req.file.path : null
    }
    createProduct(productData)
        .then((newProduct) => {
            res.status(201).json(newProduct)
        })
        .catch((err) => {
            console.error(err)
            res.status(400).json("Error creating product")
        })
}

//讀取該分類下所有產品

const getAllproducts = (req, res) => {
    const { category } = req.params
    getProductsByCategory(category)
        .then((products) => {
            products.sort((a, b) => b.createAt - a.createAt);
            res.json(products)
        })
        .catch((err) => {
            console.error(err)
        })
}

// 讀取產品(分頁篩選)
const getAllProductsController = (req, res) => {
    let category = req.query.category || 'all'
    let page = parseInt(req.query.page) || 1
    let limit = parseInt(req.query.limit) || 10
    let query = req.query.query || ''
    getProducts(category, page, limit, query)
        .then(({ products, total, totalPages }) => {
            res.json({ products, total, totalPages, currentPage: page })
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json({ error: 'Error fetching products' });
        })
}

//依照產品id讀取產品
const getProductByIdController = (req, res) => {
    const { id } = req.params
    getProductById(id)
        .then((product) => {
            res.status(200).json(product)
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json({ error: 'Error fetching products' });
        })
}

// 更新產品

const productUpdate = (req, res) => {
    const { id } = req.params
    getProductById(id)
        .then((existingProduct) => {
            const productData = {
                ...req.body,
                image: req.file ? req.file.path : null
            }
            if (req.file) { //有上傳圖片，就將原先圖檔刪除        
                const oldImagePath = path.resolve(existingProduct.image)
                fs.unlink(oldImagePath, (err) => {
                    if (err) {
                        console.error("Failed to delete old image:", err)
                    }
                })
            } else { //如無上傳圖片，則不更新該欄位
                delete productData.image
            }
            updateProduct(id, productData)
                .then((product) => {
                    res.status(200).json(product)
                })
                .catch((err) => {
                    console.error(err)
                    res.status(500).json({ error: 'Error updating product' })
                })
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json({ error: 'Error finding product' })
        })
}

// 刪除該產品
const productDelete = (req, res) => {
    const { id } = req.params
    // 先查找該產品資料
    getProductById(id)
        .then((product) => {
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            // 確認該產品是否有上傳圖片
            if (product.image) {
                const imagePath = path.resolve(product.image)
                fs.unlink(imagePath, (err) => {  //刪除路徑下圖片
                    if (err) {
                        console.error("Error deleting image file:", err);
                    }
                    deleteProduct(id)  //刪除該產品資料
                        .then(() => {
                            res.json({ message: 'Product and image deleted successfully' })
                        })
                        .catch((deleteErr) => {
                            console.error(deleteErr)
                            res.status(400).json({ message: 'Error deleting product' })
                        })
                })
            } else { //如果沒有圖片，則直接刪除產品資料
                deleteProduct(id)
                    .then(() => {
                        res.json({ message: 'Product deleted successfully' });
                    })
                    .catch(deleteErr => {
                        console.error(deleteErr);
                        res.status(400).json({ message: 'Error deleting product' });
                    });
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error finding product' })
        })
}

module.exports = {
    getAllproducts,
    productCreate,
    getAllProductsController,
    productUpdate,
    getProductByIdController,
    productDelete,
}
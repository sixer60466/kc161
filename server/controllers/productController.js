const fs = require('fs');
const path = require('path');

const {
    getProductById,
    createProduct,
    getAllProducts,
    getProductByCategoryId,
    updateProduct,
    deleteProduct } = require('../models/productCRUD')

// 新增產品
const productCreate = (req, res) => {
    const productData = {
        ...req.body,
        image: req.file ? req.file.path : null
    }
    console.log(productData.image)
    createProduct(productData)
        .then((newProduct) => {
            res.status(201).json(newProduct)
        })
        .catch((err) => {
            console.error(err)
            res.status(400).json("Error creating product")
        })
}

// 讀取所有產品
const getAllProductsController = (req, res) => {
    getAllProducts()
        .then((products) => {
            products.sort((a, b) => b.createAt - a.createAt);
            return res.json(products)
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json({ error: 'Error fetching products' });
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
                console.log(imagePath)
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
    productCreate,
    getAllProductsController,
    productDelete,
}
const express = require('express')
const router = express.Router()
const upload = require('../config/multer')
const {
    getAllproducts,
    productCreate,
    getAllProductsController,
    productDelete,
    productUpdate,
    getProductByIdController,
} = require('../controllers/productController')


router.get('/', getAllProductsController)

router.get('/category/:category', getAllproducts)

router.get('/:id', getProductByIdController)

router.post('/create', upload.single('image'), productCreate)

router.put('/:id', upload.single('image'), productUpdate)

router.delete('/:id', productDelete)

module.exports = router;
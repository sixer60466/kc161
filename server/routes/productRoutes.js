const express = require('express')
const router = express.Router()
const upload = require('../config/multer')
const {
    productCreate,
    getAllProductsController,
    productDelete,
} = require('../controllers/productController')


router.get('/', getAllProductsController)
router.post('/create', upload.single('image'), productCreate)
router.delete('/:id', productDelete)

module.exports = router;
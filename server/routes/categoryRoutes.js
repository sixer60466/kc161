const express = require('express')
const router = express.Router()
const upload = require('../config/multer')
const {
    getCategoriesController,
    categoryCreate,
    CategoryById,
    categoryUpdate,
    getAllCategoriesController,
    categoryDelete } = require('../controllers/categoryController')

router.get('/all', getAllCategoriesController)

router.get('/', getCategoriesController)

router.get('/:id', CategoryById);

router.post('/create', upload.single('image'), categoryCreate);

router.put('/:id', upload.single('image'), categoryUpdate)

router.delete('/:id', categoryDelete)

module.exports = router;
const express = require('express')
const router = express.Router()
const {
    categoryCreate,
    categoryUpdate,
    getAllCategoriesController,
    categoryDelete } = require('../controllers/categoryController')

router.get('/', getAllCategoriesController)

router.post('/create', categoryCreate);

router.put('/:id', categoryUpdate)

router.delete('/:id', categoryDelete)

module.exports = router;
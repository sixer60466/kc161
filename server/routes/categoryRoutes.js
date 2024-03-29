const express = require('express')
const router = express.Router()
const { create, getAllCategoriesController } = require('../controllers/categoryController')

router.get('/', getAllCategoriesController)

router.post('/create', create);


module.exports = router;
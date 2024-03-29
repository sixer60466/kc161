// 匯入category的CRUD操作
const {
    createCategory,
    getAllCategories
} = require('../models/categoryCRUD');

// 新增分類
const create = (req, res) => {
    let data = req.body.name
    createCategory(data)
        .then((categories) => {
            return res.status(201).json(categories);
        })
        .catch((err) => {
            res.status(500).json({ err: 'Error creating category' });
        })
}


// 讀取全部分類
const getAllCategoriesController = (req, res) => {
    getAllCategories()
        .then((categories) => {
            return res.json(categories)
        })
        .catch((error) => {
            res.status(500).json({ error: 'Error fetching categories' });
        })
}

module.exports = { getAllCategoriesController, create }
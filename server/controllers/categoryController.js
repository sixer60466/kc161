// 匯入category的CRUD操作
const {
    createCategory,
    updateCategory,
    getAllCategories,
    deleteCategory,
} = require('../models/categoryCRUD');

// 新增分類
const categoryCreate = (req, res) => {
    let data = req.body.name
    createCategory(data)
        .then((category) => {
            return res.status(201).json(category);
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({ error: 'Error creating category' });
        })
}

// 更新分類
const categoryUpdate = (req, res) => {
    let id = req.params.id
    let data = req.body.name
    updateCategory(id, data)
        .then((category) => {
            return res.status(201).json(category)
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json({ error: 'Error updating category' })
        })
}


// 讀取全部分類
const getAllCategoriesController = (req, res) => {
    getAllCategories()
        .then((categories) => {
            categories.sort((a, b) => b.createAt - a.createAt);
            return res.json(categories)
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json({ error: 'Error fetching categories' });
        })
}

// 刪除分類
const categoryDelete = (req, res) => {
    let id = req.params.id
    deleteCategory(id)
        .then((category) => {
            return res.status(200).json(category)
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json({ error: 'Error delete' })
        })
}


module.exports = { getAllCategoriesController, categoryCreate, categoryUpdate, categoryDelete }
const fs = require('fs');
const path = require('path');

// 匯入category的CRUD操作
const {
    getCategoryById,
    createCategory,
    updateCategory,
    getAllCategories,
    deleteCategory,
} = require('../models/categoryCRUD');

// 新增分類
const categoryCreate = (req, res) => {
    const categorytData = {
        ...req.body,
        image: req.file ? req.file.path : null
    }
    createCategory(categorytData)
        .then((category) => {
            res.status(201).json(category)
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json("Error creating category")
        })


}

// 更新分類
const categoryUpdate = (req, res) => {
    let id = req.params.id
    getCategoryById(id)
        .then((existingCategory) => {
            const categorytData = {
                ...req.body,
                image: req.file ? req.file.path : null,
            }
            if (req.file) { //有上傳圖片，就將原先圖檔刪除
                const oldImagePath = path.resolve(existingCategory.image)
                fs.unlink(oldImagePath, (err) => {
                    if (err) {
                        console.error("Failed to delete old image:", err)
                    }
                })
            } else {  //如無上傳圖片，則不更新該欄位
                delete categorytData.image
            }
            updateCategory(id, categorytData)
                .then((category) => {
                    return res.status(201).json(category)
                })
                .catch((err) => {
                    console.error(err)
                    res.status(500).json({ error: 'Error updating category' })
                })

        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Error finding category' });
        });
}


// 依照id讀取分類

const CategoryById = (req, res) => {
    const id = req.params.id
    getCategoryById(id)
        .then((category) => {
            res.status(200).json(category)
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json({ error: 'Error fetching categories' })
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
            res.json({ error: 'Error fetching categories' });
        })
}

// 刪除分類

const categoryDelete = (req, res) => {
    const { id } = req.params

    // 先查找該產品資料
    getCategoryById(id)
        .then((category) => {
            if (!category) {
                return res.status(404).json({ message: 'category not found' });
            }
            // 確認該分類是否有上傳圖片
            if (category.image) {
                const imagePath = path.resolve(category.image)
                fs.unlink(imagePath, (err) => {  //刪除路徑下圖片
                    if (err) {
                        console.error("Error deleting image file:", err);
                    }
                    deleteCategory(id)  //刪除該產品資料
                        .then(() => {
                            res.json({ message: 'Category and image deleted successfully' })
                        })
                        .catch((deleteErr) => {
                            console.error(deleteErr)
                            res.status(400).json({ message: 'Error deleting Category' })
                        })
                })
            } else { //如果沒有圖片，則直接刪除產品資料
                deleteCategory(id)
                    .then(() => {
                        res.json({ message: 'Category deleted successfully' });
                    })
                    .catch(deleteErr => {
                        console.error(deleteErr);
                        res.status(400).json({ message: 'Error deleting Category' });
                    });
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error finding product' })
        })
}


module.exports = { getAllCategoriesController, categoryCreate, categoryUpdate, categoryDelete, CategoryById }
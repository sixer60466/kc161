const { Category } = require('./productSchema');

// 產品分類CRUD操作

// 新增
const createCategory = (categoryData) => Category.create(categoryData);

// 讀取全部分類
const getAllCategories = () => Category.find();

//讀取全部分類(分頁篩選)
const getCategories = (page = 1, limit = 10) => {
    const skipAmount = (page - 1) * limit
    return Promise.all([
        Category.find().sort({ createAt: -1 }).skip(skipAmount).limit(limit),
        Category.countDocuments()
    ]).then(([categories, total]) => {
        return {
            categories,
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
        }
    }).catch((err) => {
        console.error(err)
        throw err
    })
}

// 依照id讀取分類
const getCategoryById = (categoryId) => Category.findById(categoryId);

// 更新分類名稱
const updateCategory = (categoryId, categoryData) => Category.findByIdAndUpdate(
    categoryId, categoryData, { new: true }
);

// 刪除分類
const deleteCategory = (categoryId) => Category.findByIdAndDelete(categoryId);

module.exports = { getCategories, createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory };
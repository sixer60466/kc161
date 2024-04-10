const { Category } = require('./productSchema');

// 產品分類CRUD操作

// 新增
// const createCategory = (categoryName) => Category.create({ name: categoryName });
const createCategory = (categoryData) => Category.create(categoryData);

// 讀取全部分類
const getAllCategories = () => Category.find();

// 依照id讀取分類
const getCategoryById = (categoryId) => Category.findById(categoryId);

// 更新分類名稱
const updateCategory = (categoryId, categoryData) => Category.findByIdAndUpdate(
    categoryId, categoryData, { new: true }
);

// 刪除分類
const deleteCategory = (categoryId) => Category.findByIdAndDelete(categoryId);

module.exports = { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory };
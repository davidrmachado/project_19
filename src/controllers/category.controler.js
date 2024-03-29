const { categoryService } = require('../services');

const postCategory = async (req, res) => {
    const addingCategory = await categoryService.postCategory(req.body);
    const { type, message } = addingCategory;
    
    if (type) {
        return res.status(type).json({ message });
    }

    res.status(201).json(message);
};

const listCategories = async (req, res) => {
    const categories = await categoryService.listCategories();

    res.status(200).json(categories.message);
};

module.exports = {
    postCategory,
    listCategories,
};
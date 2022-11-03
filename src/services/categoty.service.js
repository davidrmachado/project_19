const { Category } = require('../models');
const { schema4 } = require('../utils/schemas');

const postCategory = async (addingCategory) => {
    const { error } = schema4.validate(addingCategory);
    
    if (error) {
        return { type: 400, message: error.message };
    }

    const newEntry = await Category.create(addingCategory);

    return { message: newEntry };
};

const listCategories = async () => {
    const categoryList = await Category.findAll();

    return { message: categoryList };
};

module.exports = {
    postCategory,
    listCategories,
    
};

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

module.exports = {
    postCategory,
};

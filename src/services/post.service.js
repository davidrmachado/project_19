const { Category, PostCategory, BlogPost } = require('../models');

const listPostCategory = (categoryIds, postId) => {
    const postCategoryList = categoryIds.map((category) => {
        const postCategory = { categoryId: category, postId };

        return postCategory;
    });

    return postCategoryList;
};

const categoryValidation = async (param) => {
    const { categoryIds: categoryList } = param;
    const categories = await Category.findAll();
    let status;
    
    categoryList.forEach((category) => {
        const categoryId = categories.find((data) => category === data.id);

        if (!categoryId) {
            status = { type: 400, message: 'one or more "categoryIds" not found' };
        }
    });

    return status;
};

const entryValidation = (param) => {
    if (!param.content) {
        return { type: 400, message: 'Some required fields are missing' };
    }

    if (!param.categoryIds) {
        return { type: 400, message: 'one or more "categoryIds" not found' };
    }
};

const addPost = async (param) => {
    const { categoryIds, ...post } = param;
    const verifyCategories = await categoryValidation(param);
    const verifyEntries = entryValidation(param);

    if (verifyEntries) {
        return verifyEntries;
    }

    if (verifyCategories) {
        return verifyCategories;
    }

    post.published = new Date();
    post.updated = new Date();

    const addedPost = await BlogPost.create(post);
    const postCategoryList = listPostCategory(categoryIds, addedPost.id);

    await PostCategory.bulkCreate(postCategoryList);

    return { message: addedPost };
};

module.exports = {
    addPost,
};
const PostCategoryModel = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER
    }, 
    {
        tableName: 'posts_categories',
        timestamps: false,
        underscored: true
    });

    PostCategory.associate = ( models ) => {

    models.Category.belongsToMany(models.BlogPost, {
        as: 'blog_post',
        foreignKey: 'categoryId',
        otherKey: 'postId',
        through: PostCategory,
    });

    models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        foreignKey: 'postId',
        otherKey: 'categoryId',
        through: PostCategory,
    });

    }

    return PostCategory;
}

module.exports = PostCategoryModel;
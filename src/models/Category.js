const CategoryModel = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: DataTypes.INTEGER,
        name: DataTypes.STRING
    },
    {
        tableName: 'category',
        timestamps: false,
        underscored: true,
    })

    return Category;
};

module.exports = CategoryModel;

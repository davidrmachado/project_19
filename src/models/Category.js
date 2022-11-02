const CategoryModel = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: DataTypes.STRING
    },
    {
        tableName: 'categories',
        timestamps: false,
        underscored: true,
    })

    return Category;
};

module.exports = CategoryModel;

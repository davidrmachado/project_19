const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    },
    {
        tableName: 'users',
        timestamps: false,
        underscored: true
    })

    User.associate = ( models ) => {
        User.hasMany(models.BlogPost, {
            as: 'blog_posts',
            foreignKey: 'user_id'
        });
    }

    return User;
};

module.exports = UserModel;
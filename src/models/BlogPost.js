const BlogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: {
            defaultValue: 1,
            type: DataTypes.INTEGER,
        },
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    },
    {
        tableName: 'blog_posts',
        timestamps: false,
        underscored: true,
    });

    BlogPost.associate = ( models ) => {
        BlogPost.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        });
    }

    return BlogPost;
    };

    module.exports = BlogPostModel;
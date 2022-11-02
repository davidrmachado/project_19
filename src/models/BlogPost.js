const BlogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    },
    {
        tableName: 'blog_post',
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
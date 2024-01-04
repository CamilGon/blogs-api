const BlogPost = (sequelize, DataTypes) => {
  const BlogPostModel = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    content: DataTypes.TEXT, 
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id', 
      references: {
        model: 'User',
        key: 'id'
      }
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, {
    tableName: 'blog_posts',
    timestamps: false,
    underscored: true
  });

  BlogPostModel.associate = (models) => {
    BlogPostModel.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };

  return BlogPostModel;
};

module.exports = BlogPost;

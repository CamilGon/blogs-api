const PostCategory = (sequelize, DataTypes) => {
  const model = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'BlogPost',
        key: 'id'
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Category',
        key: 'id'
      }
    }
  }, {
    tableName: 'posts_categories',
    timestamps: false,
    underscored: true
  });

  model.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: model,
      foreignKey: 'categoryId',
      otherKey: 'postId'
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: model,
      foreignKey: 'postId',
      otherKey: 'categoryId'
    });
  };

  return model;
};

module.exports = PostCategory;

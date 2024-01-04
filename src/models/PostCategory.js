const PostCategory = (sequelize, DataTypes) => {
  const model = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'BlogPost',
        key: 'id'
      },
      allowNull: false,
      field: 'post_id'
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Category',
        key: 'id'
      },
      allowNull: false,
      field: 'category_id'
    }
  }, {
    tableName: 'posts_categories',
    timestamps: false,
    underscored: true
  });

 

  model.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      through: model,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'posts'
    })
    models.BlogPost.belongsToMany(models.Category, {
      through: model,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'categories'
    })
  }




  return model;
};

module.exports = PostCategory;

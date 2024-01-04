const Category = (sequelize, DataTypes) => {
  const model = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'categories',
    timestamps: false
  });

  return model;
};

module.exports = Category;

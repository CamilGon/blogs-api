const User = (sequelize, DataTypes) => {

  const model = sequelize.define('User', {
 
    id: {
 
      type: DataTypes.INTEGER,
 
      primaryKey: true,
 
      autoIncrement: true
 
    },
 
    displayName: {
 
      type: DataTypes.STRING,
      allowNull: false,
      field: 'display_name',
 
    },
 
    email: {
 
      type: DataTypes.STRING,
 
      allowNull: false
 
    },
 
    password: {
 
      type: DataTypes.STRING,
 
      allowNull: false
 
    },
 
    image: {
 
      type: DataTypes.STRING,
 
    },
 
  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  })

  model.associate = (models) => {
    model.hasMany(models.BlogPost, { as: 'posts', foreignKey: 'userId' });
  }
  return model;
 
 }
 
 
 
 
 module.exports = User
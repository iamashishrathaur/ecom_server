'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category,{
        foreignKey :"categoryId"
      });
      this.belongsToMany(models.Cart,{
        through:models.Cart_Products,
        foreignKey:'productId',
        otherKey:'cartId'
      })
    }
  }
  Products.init({
    name:{ 
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    cost: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};
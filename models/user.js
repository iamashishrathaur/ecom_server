'use strict';
const {
  Model
} = require('sequelize');
const bcript=require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsToMany(models.Role,{
        through:'User_Role',
        foreignKey:'userId',
        otherKey:'roleId'
      });
      this.hasMany(models.Cart,{
        foreignKey:'userId'
      });
    }
  }
  User.init({
    username:DataTypes.STRING,
    email: { 
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isEmail:true
      }
    },
    password:{ 
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:4
      }
    }
  },{
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(async (user)=>{
    const encryptedPass=bcript.hashSync(user.password,parseInt(process.env.SALT_ROUNDS));
    user.password=encryptedPass
  })

  return User;
};
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require('bcrypt');

// create our Traveller model
class User extends Model {
  checkPassword(userPassword){
    return bcrypt.compareSync(userPassword,this.password);
  }
} 

User.init(
  {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement:true,
      allowNull: false,
      primaryKey:true
    },
    name:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    email:{
      type:DataTypes.STRING,
      unique:true,
      validate:{
        isEmail:true,
      }
    },
    password:{
      type:DataTypes.STRING,
      validate:{
        len:[8],
      }
    },
  },
  {
    hooks:{
      beforeCreate: async newUserData => {
        newUserData.email = await newUserData.email.toLowerCase();
        return newUserData;
      },
      beforeUpdate: async updatedUserData => {
        updatedUserData.email = await updatedUserData.email.toLowerCase();
        return updatedUserData;
      },
      beforeBulkCreate: async newUserData => {
        newUserData.email = await newUserData.email.toLowerCase();
        newUserData.password = await bcrypt.hash(newUserData.password,10);
        return newUserData;
      },
    },
    sequelize,
    timestamps:false,
    underscored:true,
    freezeTableName: true,
    modelName:'user'
  }
)

module.exports = User;
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Traveller model
class Property extends Model {}

Property.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  description:{
    //TODO: ignore this todo, I might change this to json
    type:DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  owner_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'owner',
      key:'user_id',
    }
  },
  availability: {
    type:DataTypes.BOOLEAN,
    default:true,
  },
},
{
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'property',
} 

  
);

module.exports = Property;
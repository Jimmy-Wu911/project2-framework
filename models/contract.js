const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
 
class Contract extends Model {}

Contract.init(
  {
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey:true,
    },
    endDate:{
      allowNull: false,
      type:DataTypes.STRING,
    },
    property_id:{
      type: DataTypes.INTEGER,
      references:{
        model:'property',
        key:'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored:true,
    timestamps:true,
    modelName:'contract'
  }
)

module.exports = Contract;
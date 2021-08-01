const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Owner extends Model{}

Owner.init(
    {
    user_id:{
        type: DataTypes.INTEGER,
        references:{
            model:'user',
            key: 'id'
        }
    }
    },
    {
    sequelize,
    timestamps:false,
    underscored:true,
    freezeTableName: true,
    modelName:'owner'
    }
)

module.exports = Owner;
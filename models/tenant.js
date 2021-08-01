const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Tenant extends Model{}

Tenant.init(
    {
        user_id:{
            type: DataTypes.INTEGER,
            references:{
                model:'user',
                key: 'id'
            }
        },
        contract_id:{
            type: DataTypes.INTEGER,
            references:{
                model:'contract',
                key: 'id'
            }
        }
    },
    {
    sequelize,
    timestamps:false,
    underscored:true,
    freezeTableName: true,
    modelName:'tenant'
    }
)

module.exports = Tenant;
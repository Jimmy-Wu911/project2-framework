const User = require("./user");
const Property = require("./property");
const Contract = require("./contract");
const Owner = require("./owner");
const Tenant = require('./tenant');


Property.belongsTo(Owner,{
    foreignKey:'owner_id',
});

Owner.hasMany(Property,{
    foreignKey:'owner_id',
    onDelete:'CASCADE'
})

Tenant.belongsTo(Contract,{
    foreignKey:'contract_id',
    onDelete:'CASCADE',
})
Contract.hasOne(Tenant,{
    foreignKey:'contract_id',
})

Property.hasMany(Contract,{
    foreignKey:'property_id',
    onDelete:'CASCADE'
})

Contract.belongsTo(Property,{
    foreignKey:'property_id',
})

module.exports = { User, Property, Contract, Owner, Tenant};

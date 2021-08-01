const router = require('express').Router();
const {User,Property,Contract,Owner,Tenant} = require('../../models');


router.get('/',(req,res)=>{
    res.render('contract');
});

module.exports = router;
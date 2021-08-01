const router = require('express').Router();
const {User,Property,Contract,Owner,Tenant} = require('../../models');
const bcrypt = require('bcrypt');

router.get('/',(req,res)=>{
    res.render('userProfile');
});

module.exports = router;
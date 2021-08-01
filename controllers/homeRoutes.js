const router = require('express').Router();
const path = require('path');

router.get('/',(req,res)=>{
    res.send('reached homepage, nothing will be displayed on this page');
});

module.exports = router;
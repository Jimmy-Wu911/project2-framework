const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/api',apiRoutes);
//The home routes redirects user to either login or main
router.use('/',homeRoutes);
module.exports = router;
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const loginRoutes = require('./loginRoutes');
const listingRoutes = require('./listingRoutes');
const contractRoutes = require('./contractRoutes');

//user routes display user's profile
//if the user is a tenant, it will display contract length
router.use("/user",userRoutes);
//login routes prompts user to login or sign up
router.use("/login",loginRoutes);
//The main routes will display all properties for rent
//when property clicked(id provided), route to the /listing/:id page
router.use("/listing",listingRoutes);
//The contract routes will be responsible for signing contract
router.use("/contract",contractRoutes);

module.exports = router;
const router = require('express').Router();
const {User,Property,Contract,Owner,Tenant} = require('../../models');

//demo get route 
router.get('/',(req,res)=>{
    res.render('listing');
});

//when user access the /api/listing/id route with the property id, display the property's details 
router.get('/:id',async (req,res)=>{
    try {
        //search for a property that matches the id 
       const propertyData = await Property.findOne({where:{id:req.params.id}});
       //if no property with the provided id is found, warn the user
       if(!propertyData){
           res.status(400).end('property not found with this id!');
        return;
       }
       //"clean up" the data
       const detail = await propertyData.get({plain:true});
       //sends the data to the detail.handlebars to use
       res.status(200).render('detail',detail);
    } catch (err) {
        res.json(err);
    }  
});

module.exports = router;
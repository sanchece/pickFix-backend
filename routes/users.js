const express = require("express");
const db = require("../db");
const router = express.Router();
const User= require("../models/user")
const createToken=require("../helpers/createTokens");
const {ensureLoggedIn,ensureContractor}= require("../middleware/authentication");

//register a new user
//returns token 
router.post("/register",async function(req,res,next){
    try{
        const newCustomerData=req.body;
        const registeredCustomer= await User.register(newCustomerData);
        const token= await createToken(registeredCustomer); 
        return res.json({token})
    }
    catch(err){
        return next(err);
    }    
})
//authenticates a user for login
router.post("/login",async function(req,res,next){
    try{
        const newCustomerData=req.body;
        const verifiedUser= await User.authenticate(newCustomerData);
        const token =createToken(verifiedUser)
        return res.json({token});           
    }
    catch(err){
        return next(err);
    }    
})
// update a single user
router.patch("/:userId", async function(req,res,next){
    try{
        const userType=res.locals.user.userType
        const userId=req.params.userId;
        const updatedUserJSONData=req.body
        const updatedUser= await User.update({userId,updatedUserJSONData,userType});
        return res.json(updatedUser);
    }
    catch(err){
        next(err)
    }
})

//delete a user
router.delete("/:userID",async function(req,res,next){
    try{
        const userType="customers";
        const userID= req.params.userID;
        const deletedUser= await User.remove({userID, userType});
        return res.send(`Deleted user: ${deletedUser}`);
    }
    catch(err){
        next(err)
    }
})

//get a single user
router.get("/:userId/:userType", ensureLoggedIn, async function(req,res,next){
    try{       
        const userId=req.params.userId;
        const userType=req.params.userType;
        const user= await User.get({userId,userType})
        return res.json(user);
    }
    catch(err){
        return next(err);
    }
})

//get all users
router.post("/:userType",async function(req,res,next){
    try{
        const userType=req.params.userType;
        const location= req.body;
        const users= await User.getAll(userType,location);
        return res.json(users)
    }
    catch(err){
         next(err)
    }
})



module.exports = router;


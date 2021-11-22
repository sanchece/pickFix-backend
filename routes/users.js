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
        const newCustomerData={
            firstname:"testing",
            lastname:"token",
            email:"testing6@email.com",
            password:"some_password",
            userType:"contractors"  
        };
        const registeredCustomer= await User.register(newCustomerData);
        const token= await createToken(registeredCustomer); 
        
        return res.json(token)
    }
    catch(err){
        return next(err);
    }    
})
//authenticates a user for login
router.post("/login",async function(req,res,next){
    try{
        const newCustomerData={
            email:"some@email.com",
            password:"some_password",
            userType:"customers"
        };
        const verifiedUser= await User.authenticate(newCustomerData);
        const token =createToken(verifiedUser)
        return res.json({token});           
    }
    catch(err){
        return next(err);
    }    
})
//update a single user
router.patch("/:userID",ensureContractor, async function(req,res,next){
    try{
        // return res.send("hello")
        const userID=req.params.userID;
        const updatedUserJSONData={
            firstname:"carlos",
            lastname:"sanchsez",
            email:"someOther@email12.com",
            password:"some_password",          
        };
        const userType="contractors"
        const updatedUser= await User.update({userID,updatedUserJSONData,userType});
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
router.get("/:userID", async function(req,res,next){
    try{
        //code to get 1 specific customer 
        const userType="customers"
        const userID=req.params.userID;
        const user= await User.get({userID,userType})
        res.json(user);
    }
    catch(err){
        return next(err);
    }
})

//get all users
router.get("/",async function(req,res,next){
    try{
        const userType="contractors";
        const users= await User.getAll(userType);
        return res.json(users)
    }
    catch(err){
         next(err)
    }
})



module.exports = router;


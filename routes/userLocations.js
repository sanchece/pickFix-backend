const express = require("express");
const db = require("../db");
const router = express.Router();
const Location= require("../models/location")
const {ensureLoggedIn,ensureCorrectUser, ensureContractor}= require("../middleware/authentication");


router.post("/add/:userID",ensureLoggedIn, async function(req,res,next){
    try{
        const userID=req.params.userID;
        const newLocationData=req.body
        const location= await Location.add({userID,newLocationData});
        return res.json({location})
    }
    catch(err){
        return next(err);
    }
})

router.get("/get/:userType/:userID", async function(req,res,next){
    try{
        const userID=req.params.userID;
        const userType=req.params.userType;
        const location= await Location.get({userID,userType});
        return res.json({location})
    }
    catch(err){
        return next(err);
    }
})
router.patch("/update/:userType/:userID", async function(req,res,next){
    try{
        const userID=req.params.userID;
        const userType=req.params.userType;
        const newLocationData={
            lat:5555,
            lng: 4444
        }
        const location= await Location.update({userID,userType, newLocationData});
        return res.json({location})
    }
    catch(err){
        return next(err);
    }
})

router.delete("/delete/:userType/:userID", async function(req,res,next){
    try{
        const userID=req.params.userID;
        const userType=req.params.userType;
        const locationDeleted= await Location.delete({userID,userType});
        return res.json({locationDeleted})
    }
    catch(err){
        return next(err);
    }
})



module.exports=router;
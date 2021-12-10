const express = require("express");
const db = require("../db");
const router = express.Router();
const Event= require("../models/event")

router.post("/:userID", async function(req,res,next){
    try{
        const userID=req.params.userID;
        const newEventData={
            userType:"customers",
            startTime:"2008-11-11 11:12:01",
            endTime:"2010-11-11 11:12:01"
        }
        const event= await Event.add({userID,newEventData});
        return res.json({event})
    }
    catch(err){
        return next(err);
    }
})

router.get("/:userType/:userID", async function(req,res,next){
    try{
        const userID=req.params.userID;
        const userType=req.params.userType;
        const event= await Event.get({userID,userType});
        return res.json({event})
    }
    catch(err){
        return next(err);
    }
})

router.patch("/:userType/:userID", async function(req,res,next){
    try{
        const userID=req.params.userID;
        const userType=req.params.userType;
        const eventID=1;
        const newEventData={
            start_time:`2011-11-11 11:12:01`,
            end_time: `2014-11-11 11:12:01`
        }
        const event= await Event.update({userID,userType,eventID,newEventData});
        return res.json({event})
    }
    catch(err){
        return next(err);
    }
})

router.delete("/:userType/:userID", async function(req,res,next){
    try{
        const userID=req.params.userID;
        const userType=req.params.userType;
        const eventID=2;
        const eventDeleted= await Event.delete({userID,userType,eventID});
        return res.json({eventDeleted})
    }
    catch(err){
        return next(err);
    }
})
module.exports=router;
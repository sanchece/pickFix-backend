const express = require("express");
const db = require("../db");
const router = express.Router();
const Project= require("../models/project")
const Chat= require("../models/projectChat")
const Review= require("../models/projectReview")


// add new project
router.post("/add", async function(req,res,next){
    try{
        const newProjectData=req.body
        const project= await Project.add(newProjectData);
        return res.json(project);
    }
    catch(err){
        return next(err);
    }
})

//update project
router.patch("/update/:projectID", async function(req,res,next){
    try{
        const newProjectData={
            title:"first Project updated",
            description:"creating first projet",
            status:" Started",
            budget: 500,
            customer_id:8,
            contractor_id:1
        }
        const projectID=req.params.projectID
        const project= await Project.update({newProjectData, projectID});
        return res.json(project);
    }
    catch(err){
        return next(err);
    }
})
//delete project
router.delete("/delete/:projectID", async function(req,res,next){
    try{
        const projectID=req.params.projectID;
        const project=await Project.delete(projectID);
        return res.send({project})
    }
    catch(err){
        return next(err);
    }
})

//get a project
router.get("/:projectID",async function(req,res,next){
    try{
        const projectID=req.params.projectID;
        const project=await Project.get(projectID);
        return res.send({project});
        }
    catch(err){
        return next(err);
    }
})

// get projects for a user (customer/contractor)
router.get("/user/:userType/:userID", async function(req,res,next){
    try{
        const userType=req.params.userType;
        const userID=req.params.userID;
        // return res.send(userType);
        const projects= await Project.getForUser({userID,userType});
        return res.send({projects});
    }
    catch(err){
        return next(err);
    }
})
// // ######################################################################################################################

//add a chat to a project
router.post("/chat/:projectId", async function(req,res,next){
    try{
        const projectId=req.params.projectId;
        const newChatData=req.body
        const chat=await Chat.add({newChatData,projectId})
        return res.json({chat})
    }
    catch(err){
        return next(err);
    }
})



//get last n chats from specified project
router.get("/chat/:id", async function(req,res,next){
    try{
        const projectId=req.params.id;
        const nChats=20;
        const chat=await Chat.get({projectId, nChats})
        return res.json({chat})
    }
    catch(err){
        return next(err);
    }
})


// ######################################################################################################################
// add a review to a project
router.post("/add-review/:projectID", async function(req,res,next){
    try{
        const projectID=req.params.projectID;
        const newProjectData={
            rating: 3,
            comment:"it was lmsot the best",
            created_on:"2008-11-11 11:12:01",
            customer_id:4,
            contractor_id:1,
            sent_by:"customers"
        }
        const review=await Review.add({newProjectData, projectID})
        return res.json({review})
    }
    catch(err){
        return next(err);
    }
})

// add a review to a project
router.post("/get-reviews/:projectID", async function(req,res,next){
    try{
        const projectID=req.params.projectID;
        const nChats=2;

        const reviews=await Review.get({projectID,nChats})
        return res.json({reviews})
    }
    catch(err){
        return next(err);
    }
})

module.exports=router;
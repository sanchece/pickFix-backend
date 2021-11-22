const jwt= require("jsonwebtoken");
const {JWT_KEY}=require("../configurations")

function createToken(user){
    const payload={
        email:user.email,
        userType:user.userType
    }
    const token= jwt.sign(payload,JWT_KEY)
    return token;    
} 

module.exports=createToken;
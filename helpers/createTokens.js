const jwt= require("jsonwebtoken");
const {JWT_KEY}=require("../configurations")

function createToken(user){
    const payload={
        id:user.id,
        email:user.email,
        userType:user.userType
    }
    const token= jwt.sign(payload,JWT_KEY)
    return token;    
} 

module.exports=createToken;
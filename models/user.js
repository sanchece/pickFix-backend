const db = require("../db");
const { BadRequestError, NotFoundError } = require("../CustomErrors");
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../configurations");
const getSetQueryString =require("../helpers/jsonToSQL")

//Customer model to create SQL queries
class User {
  //static methos is only callable on the class not a different object
  static async register({ firstname, lastname, email, password,userType}) {
    const checkForDuplicate = await db.query(
      `SELECT email
      FROM ${userType} 
       Where email=$1`,
       [email]
    );

    //throw BadRequestError if there is an account with this email in database
    if (checkForDuplicate.rows[0]) {
      throw new BadRequestError(`${email} already exists in the database`);
    }
    //create a hashed password to store in database using a production standard Bcrypt work factor
    const bcryptedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
    //send sql query to db
    const res = await db.query(
      `INSERT INTO ${userType}
            (firstname,lastname,email,password)
            VALUES($1,$2,$3,$4)
            RETURNING id,firstname,lastname,email`,
      [firstname, lastname, email, bcryptedPassword]
    );
    const registeredUser = res.rows[0];
    const tokenLoad={...registeredUser,userType};
    return tokenLoad;
  }

  static async authenticate({email,password,userType}){
    const res= await db.query(`
    SELECT firstname,lastname,email,password
    FROM ${userType}
    WHERE email=$1`,
    [email]
    );

    const user=res.rows[0];
    const tokenLoad={...user,userType};
    const isValid=await bcrypt.compare(password,user.password);
    if(!isValid){
      throw new UnauthorizedError(`Password incorrect for ${user.email}`)
    }
    return tokenLoad;
  }

  static async update({ userID, updatedUserJSONData,userType}) {
    // whether password changed or not we must store only the hashed version
    updatedUserJSONData.password=await bcrypt.hash(updatedUserJSONData.password, BCRYPT_WORK_FACTOR);
    const {setQueryString,values} = getSetQueryString(updatedUserJSONData);
    //num to refer id as in query string
    const varID=`${values.length+1}`;
    //query string to update customer
    const updateUserSQLString=`
    UPDATE ${userType} SET ${setQueryString} WHERE id=$${varID}
    RETURNING id,firstname,lastname,email`
    // return updateUserSQLString;
    //send query request to DB returning firstname,lastname,email
    const res =await db.query(updateUserSQLString, [...values,userID])
    const updatedUser=res.rows[0];
    //if customer ID not found throw Error
    if(!updatedUser) throw new NotFoundError(`Customer not found. ID:${userID}`)
    return updatedUser;
  }

  static async remove({userID,userType}){
    const res= await db.query(`DELETE FROM ${userType}
    WHERE id=$1
    RETURNING email`,[userID])
    const deletedUser=res.rows[0];
    if(!deletedUser) throw new NotFoundError(`Customer not found. ID: ${userID}`)
   return JSON.stringify(deletedUser)
  }

  static async get({userID,userType}){
    const res= await db.query(`SELECT firstname,lastname,email 
    FROM ${userType} 
    WHERE id=$1`,[userID])
    const user=res.rows[0];
    if(!user) throw new NotFoundError(`Customer not Found: ${userID}`)
    return user;
  }

  static async getAll(userType){
    const res= await db.query(`SELECT id,firstname,lastname,email
    FROM ${userType}`)
    const users= res.rows;
    return users;
  }



  
}

module.exports = User;

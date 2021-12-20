const db = require("../db");
const {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} = require("../CustomErrors");
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../configurations");
const getSetQueryString = require("../helpers/jsonToSQL");
const { user } = require("pg/lib/defaults");

//Customer model to create SQL queries
class User {
  //static methos is only callable on the class not a different object
  static async register({
    name,
    firstname,
    lastname,
    email,
    password,
    userType,
  }) {
    const checkForDuplicate = await db.query(
      `SELECT email
      FROM ${userType} 
       Where email=$1`,
      [email]
    );
    // throw BadRequestError if there is an account with this email in database
    if (checkForDuplicate.rows[0]) {
      throw new BadRequestError(`${email} already exists in the database`);
    }
    // //create a hashed password to store in database using a production standard Bcrypt work factor
     const bcryptedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
    // //send sql query to db

if (userType == "contractors") {
      const  res = await db.query(`
       INSERT INTO ${userType}
       (name, firstname,lastname,email,password)
       VALUES($1,$2,$3,$4,$5)
       RETURNING name, id,firstname,lastname,email
       `, [
         name,
        firstname,
        lastname,
        email,
        bcryptedPassword,
      ]);
      const registeredUser = res.rows[0];
      const tokenLoad = { ...registeredUser, userType };
      return tokenLoad;
}
else{
      const res = await db.query(`
      INSERT INTO ${userType}
      ( firstname,lastname,email,password)
      VALUES($1,$2,$3,$4)
      RETURNING  id,firstname,lastname,email
      `, [
       firstname,
       lastname,
       email,
       bcryptedPassword,
     ]);

     const registeredUser = res.rows[0];
     const tokenLoad = { ...registeredUser, userType };
     return tokenLoad;
   }
  }

  static async authenticate({ email, password, userType }) {
    const res = await db.query(
      `
    SELECT id,firstname,lastname,email,password
    FROM ${userType}
    WHERE email=$1`,
      [email]
    );
    const user = res.rows[0];
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new UnauthorizedError(`Password incorrect for ${user.email}`);
    }
    delete user.password;
    const tokenLoad = { ...user, userType };
    return tokenLoad;
  }

  static async update({ userId, updatedUserJSONData, userType }) {

    const getUser = await db.query(
      `
    SELECT id,firstname,lastname,email,password
    FROM ${userType}
    WHERE id=$1`,
      [userId]
    );

    const user = getUser.rows[0];
    const isValid = await bcrypt.compare(
      updatedUserJSONData.password,
      user.password
    );
    if (!isValid) {
      throw new UnauthorizedError(`Password incorrect for ${user.email}`);
    }
    delete updatedUserJSONData.password;

    // updatedUserJSONData.password=await bcrypt.hash(updatedUserJSONData.password, BCRYPT_WORK_FACTOR);

    const { setQueryString, values } = getSetQueryString(updatedUserJSONData);
    const varID = `${values.length + 1}`;
    const updateUserSQLString = `
    UPDATE ${userType} SET ${setQueryString} WHERE id=$${varID}
    RETURNING id,firstname,lastname,email`;

    //send query request to DB returning firstname,lastname,email
    const res = await db.query(updateUserSQLString, [...values, userId]);
    const updatedUser = res.rows[0];
    //if customer ID not found throw Error
    if (!updatedUser)
      throw new NotFoundError(`User not found. ID:${userId}`);
    return updatedUser;
  }

  static async remove({ userID, userType }) {
    const res = await db.query(
      `DELETE FROM ${userType}
    WHERE id=$1
    RETURNING email`,
      [userID]
    );
    const deletedUser = res.rows[0];
    if (!deletedUser)
      throw new NotFoundError(`Customer not found. ID: ${userID}`);
    return JSON.stringify(deletedUser);
  }

  static async get({ userId, userType }) {
    const res = await db.query(
      `SELECT id,firstname,lastname,email 
    FROM ${userType} 
    WHERE id=$1`,
      [userId]
    );
    const user = res.rows[0];
    if (!user) throw new NotFoundError(`Customer not Found: id:${userId}, userType:${userType} `);
    return user;
  }

  static async getAll(userType, location) {
    const minLat = location.lat - 0.36;
    const maxLat = location.lat + 0.36;
    const minLng = location.lng - 0.36;
    const maxLng = location.lng + 0.36;

    // return {
    //   location:location,
    //   lat:{minLat,maxLat},
    //   lng:{minLng, maxLng}

    // }
    if(userType==="contractors"& location){
      const res = await db.query(
        `
      SELECT name, U.id,firstname,lastname,email, lat,lng, L.user_type
      FROM ${userType} U
      INNER JOIN user_locations L
      on  L.user_type=$1 AND L.user_id=U.id
      WHERE L.lat<$2
      AND L.lat>$3
      AND L.Lng<$4
      AND L.lng>$5
    
       `,
        [userType, maxLat, minLat, maxLng, minLng]
      );
      const users = res.rows;
      return users;
    }
    else{
      const res = await db.query(
        `
      SELECT id, firstname,lastname,email
      FROM ${userType} 
    
       `
      );
      const users = res.rows;
      return users;
    }
  
  }
}

module.exports = User;

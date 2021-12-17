const db = require("../db");
const { BadRequestError, NotFoundError } = require("../CustomErrors");
const getSetQueryString = require("../helpers/jsonToSQL");

class Location{
    static async add({userID,newLocationData}){
        const {userType,lat,lng}= newLocationData;
        const checkForDuplicate = await db.query(
            `SELECT *
            FROM user_locations
             Where user_id=$1`,
            [userID]
          );
          // throw BadRequestError if there is an account with this email in database
          if (checkForDuplicate.rows[0]) {
              this.update({userID,newLocationData})
              return checkForDuplicate.rows[0]
          }
        const res=await db.query(`
            INSERT INTO user_locations
            (user_id,user_type,lat,lng)
            VALUES($1,$2,$3,$4)
            RETURNING user_id,user_type,lat,lng        
        `, [userID,userType,lat,lng]);

        const newLocation=res.rows[0];
        return newLocation;
    }
    static async get({userID,userType}){
        const res=await db.query(`
            SELECT *
            FROM user_locations
            WHERE user_type=$1
            AND user_id=$2
        `, [userType,userID]);
        const location=res.rows;
        return location;
    }
    static async update({userID, newLocationData}){
        console.log("getting ready to update")

        const {userType,lat,lng}= newLocationData;
        const {setQueryString,values}= getSetQueryString({lat,lng});
        const varID= `${values.length+1}`;
        const sqlString=`
        UPDATE user_locations 
        SET ${setQueryString} 
        WHERE user_id=$${varID} 
        AND user_type=$${parseInt(varID)+1} 
        RETURNING user_id,user_type,lat,lng;`
        console.log("sql string:", sqlString)
        console.log("values:", [...values, userID,userType])
        const res=await db.query(sqlString, [...values,userID, userType]);
        console.log("updated: ",res.rows[0]);
        const updatedLocation=res.rows[0];
        return updatedLocation;
    }
    static async delete({userID,newLocationData}){
const {userType}=newLocationData;
        const res=await db.query(`
        DELETE FROM user_locations 
        WHERE user_id=$1 
        AND user_type=$2
        RETURNING user_id,user_type,lat,lng;
        `, [userID, userType]);
        const locationDeleted=res.rows[0];
        if(!locationDeleted) throw new NotFoundError(`User location not found. ID: ${userID}`)
        return locationDeleted;
    }

}

module.exports=Location;
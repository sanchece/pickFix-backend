const db = require("../db");
const { BadRequestError, NotFoundError } = require("../CustomErrors");
const getSetQueryString = require("../helpers/jsonToSQL");

class Event{
    static async add({userID,newEventData}){
        const {userType,startTime,endTime}= newEventData;
        const res=await db.query(`
            INSERT INTO user_events
            (user_id,user_type,start_time,end_time)
            VALUES($1,$2,$3,$4)
            RETURNING user_id,user_type,start_time,end_time        
        `, [userID,userType,startTime,endTime]);
        const newEvent=res.rows[0];
        return newEvent;
    }

    static async get({userID,userType}){
        const res=await db.query(`
            SELECT *
            FROM user_events U
            INNER JOIN projects P
            ON U.project=P.id
            WHERE user_type=$1
            AND user_id=$2`
        , [userType,userID]);
        const event=res.rows;
        return event;
    }
    static async update({userID,userType,eventID, newEventData}){
        const {setQueryString,values}= getSetQueryString(newEventData);
        const varID= `${values.length+1}`;
        const sqlString=`
        UPDATE user_events 
        SET ${setQueryString} 
        WHERE user_id=$${varID} 
        AND user_type=$${parseInt(varID)+1} 
        AND id=$${parseInt(varID)+2} 
        RETURNING id,user_id,user_type,start_time,end_time;`
        const res=await db.query(sqlString, [...values,userID, userType,eventID]);
        const updatedEvent=res.rows[0];
        return updatedEvent;
    }
    static async delete({userID,userType, eventID}){
        const res=await db.query(`
        DELETE FROM user_events 
        WHERE user_id=$1 
        AND user_type=$2
        AND id=$3
        RETURNING user_id,user_type,start_time,end_time;
        `, [userID, userType,eventID]);
        const eventDeleted=res.rows[0];
        if(!eventDeleted) throw new NotFoundError(`Event not found. ID: ${eventID}`)
        return eventDeleted;
    }

}

module.exports=Event;
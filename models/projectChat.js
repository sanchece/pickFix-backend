const db = require("../db");
const { BadRequestError, NotFoundError } = require("../CustomErrors");


class Chat{

    //adds single chat to database in project_chats table
    static async add({newChatData,projectId}){
        const {chat,created_on, customer_id,contractor_id, sent_by}= newChatData;
        const res=await db.query(`
            INSERT INTO project_chats
            (chat,created_on, project_id, customer_id,contractor_id,sent_by)
            Values ($1,$2,$3,$4,$5,$6)
            RETURNING id,chat,created_on, project_id, customer_id, contractor_id `
            ,[chat,created_on,projectId,customer_id,contractor_id,sent_by])
        const newChat=res.rows[0];
        return newChat;
    }

    // gets last n number of chats for specified project in dt
    static async get({projectId,nChats}){
        const res=await db.query(`
            SELECT *
            FROM project_chats
            WHERE project_id=$1
            ORDER BY id
            DESC LIMIT $2`,
            [projectId, nChats]
            )
        const chats=res.rows;
        return chats;
    }

}

module.exports=Chat;

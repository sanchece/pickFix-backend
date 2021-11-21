const db = require("../db");
const { BadRequestError, NotFoundError } = require("../CustomErrors");


class Review{

    //adds single review to database in project_reviews table
    static async add({newProjectData,projectID}){
        const {rating,comment,created_on, customer_id,contractor_id,sent_by}= newProjectData;
        const res=await db.query(`
            INSERT INTO project_reviews
            (project_id,rating,comment,created_on,customer_id,contractor_id,sent_by)
            VALUES ($1,$2,$3,$4,$5,$6,$7)
            RETURNING project_id,rating,comment,created_on,customer_id,contractor_id,sent_by `
            ,[projectID,rating,comment,created_on,customer_id,zcontractor_id,sent_by])
        const newReview=res.rows[0];
        return newReview;
    }
 
    //gets last n number of reviews for user
    static async get({projectID,nChats}){
        const res=await db.query(`
            SELECT rating,comment,sent_by,created_on 
            FROM project_reviews
            WHERE project_id=$1
            ORDER BY id
            DESC LIMIT $2`,
            [projectID, nChats]
            )
        const reviews=res.rows;
        return reviews;
    }

}

module.exports=Review;

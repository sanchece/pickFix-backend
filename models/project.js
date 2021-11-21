const db = require("../db");
const { BadRequestError, NotFoundError } = require("../CustomErrors");
const getSetQueryString =require("../helpers/jsonToSQL")

class Project{

    //adds project into database, checks for duplicates before adding project    
    static async add({title,description,status,budget,customer_id,contractor_id}){
        const checkForDuplicate= await db.query(
            `SELECT title FROM projects WHERE title=$1`,
            [title]
        )
        if(checkForDuplicate.rows[0]){
            throw new BadRequestError(`${title} project already exists. Please pick a different title`)
        }
        const res=await db.query(`
        INSERT INTO projects 
        (title,description,status,budget,customer_id,contractor_id)
        VALUES($1,$2,$3,$4,$5,$6)
        RETURNING title,description,status,budget,customer_id,contractor_id`,
        [title,description,status,budget,customer_id,contractor_id])

        const addedProject=res.rows[0];
        return addedProject;
    }

    //updates project in SQL database
    static async update({newProjectData,projectID}){
        const {setQueryString, values}= getSetQueryString(newProjectData);
        const varID=`${values.length+1}`;
        const sqlString=`UPDATE projects 
                        SET ${setQueryString} 
                        WHERE id=$${varID}
                        RETURNING title,description,
                        status,budget,
                        customer_id,contractor_id`
        // return sqlString;
        const res= await db.query(sqlString,[...values,projectID])
        const updatedProject=res.rows[0];
        return updatedProject; 
        
    }
    //deletes project in SQL database
    static async delete(projectID){
        const res= await db.query(`
        DELETE FROM projects WHERE id=$1 RETURNING title`
        ,[projectID]);
        const deletedProject=res.rows[0];
        if(!deletedProject) throw new NotFoundError(`Project not found. ID: ${projectID}`)
        return deletedProject;
    }

    //get project in SQL database
    static async get(projectID){
        const res=await db.query(`
            SELECT title,description,status,budget,customer_id,contractor_id
            FROM projects
            WHERE id=$1`,
            [projectID]);
        const project=res.rows[0];
        return project;
    }

    //get all projects for user in SQL database
    static async getForUser({userID,userType}){        
        const sqlString=`
        SELECT title, description, status, budget, customer_id,contractor_id 
        FROM projects
        WHERE ${userType} =$1`
        
        const res=await db.query(sqlString
        ,[userID])
        const projects= res.rows;
        return projects;

    }
}
module.exports=Project;